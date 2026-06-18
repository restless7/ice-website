"use server";

import { google } from "googleapis";
import { format, parseISO } from "date-fns";
import { formatInTimeZone, toDate } from "date-fns-tz";
import { supabaseServer } from "@/app/lib/supabaseServer";

const TIMEZONE = "America/Bogota";

type ScheduleFormData = {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
};

export async function checkAvailability(date: string) {
  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    
    if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey) {
      console.warn("Google credentials not configured, returning full availability.");
      return { success: true, busySlots: [] };
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/calendar.events"]
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Rango del día solicitado en America/Bogota
    const timeMin = new Date(`${date}T00:00:00-05:00`).toISOString();
    const timeMax = new Date(`${date}T23:59:59-05:00`).toISOString();

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        timeZone: TIMEZONE,
        items: [{ id: calendarId }],
      },
    });

    const busySlots = (response.data.calendars?.[calendarId]?.busy || []) as { start: string; end: string; }[];
    
    return { success: true, busySlots };
  } catch (error) {
    console.error("Error checking availability in Google Calendar:", error);
    // Si falla Google, permitimos avanzar pero logueamos el error
    return { success: false, busySlots: [], error: "No se pudo consultar disponibilidad" };
  }
}

export async function scheduleAppointment(data: {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
  date: string;
  time: string;
  geoCity?: string;
}, sourceCTA: string = "Website Form", utmData?: any) {
  try {
    // 1. Validar formato de fecha/hora (ej: 2024-05-20 y 14:30)
    const [year, month, day] = data.date.split("-").map(Number);
    const [hours, minutes] = data.time.split(":").map(Number);
    
    // Configurar la fecha en UTC-5 (America/Bogota)
    const startDate = new Date(Date.UTC(year, month - 1, day, hours + 5, minutes));
    const endDate = new Date(startDate.getTime() + 30 * 60000);

    // 3. Insertar primero en el CRM central (Portal de Leads)
    let leadId = null;
    let personId = null;
    let dbError = null;
    const portalUrl = process.env.PORTAL_API_URL || process.env.NEXT_PUBLIC_PORTAL_API_URL || "http://localhost:3000";
    
    try {
      // a) Crear el Lead en el CRM
      const leadRes = await fetch(`${portalUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          programId: data.programOfInterest,
          source: sourceCTA, // Usamos la variable inyectada
          notes: `Agendamiento desde ${sourceCTA}.\nPrograma: ${data.programOfInterest}`,
          utmData: utmData,
          geoContext: data.geoCity
        })
      });

      if (!leadRes.ok && leadRes.status !== 409) {
        dbError = await leadRes.text();
      } else {
        const leadData = await leadRes.json();
        leadId = leadData.data?.lead?.id;
        personId = leadData.data?.lead?.personId;
      }

      // b) Agendar en el Calendario Central
      if (!dbError) {
        const apptRes = await fetch(`${portalUrl}/api/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: `Asesoría ICE: ${data.name}`,
            description: `Programa de interés: ${data.programOfInterest}\nTeléfono: ${data.phone}`,
            startTime: startDate.toISOString(),
            durationMinutes: 30,
            attendees: [{ email: data.email }],
            calendarType: "ICE",
            leadId,
            personId,
            fullName: data.name,
            email: data.email
          })
        });
        if (!apptRes.ok) {
          console.warn("Appointment creation failed in portal, but lead was created.", await apptRes.text());
        }
      }
    } catch (err) {
      dbError = err;
    }

    if (dbError) {
      console.error("Error saving lead to Portal System:", dbError);
    }

    // 4. Conectar a Google Calendar
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    let googleEventId = null;
    let syncStatus = "failed_google";

    if (process.env.GOOGLE_CLIENT_EMAIL && privateKey) {
      try {
        const auth = new google.auth.JWT({
          email: process.env.GOOGLE_CLIENT_EMAIL,
          key: privateKey,
          scopes: ["https://www.googleapis.com/auth/calendar.events"]
        });

        const calendar = google.calendar({ version: "v3", auth });

        const event = {
          summary: `Asesoría ICE - ${data.name} - ${data.programOfInterest}`,
          description: `Datos del Lead:\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nPrograma de Interés: ${data.programOfInterest}\n\nReunión agendada automáticamente vía ICE World Team.`,
          start: {
            dateTime: startDate.toISOString(),
            timeZone: TIMEZONE,
          },
          end: {
            dateTime: endDate.toISOString(),
            timeZone: TIMEZONE,
          },
          attendees: [
            { email: data.email },
            // Asesor asignado puede venir de otra lógica, acá podemos poner un default
            { email: process.env.ADVISOR_EMAIL || "info@iceworldteam.com" }
          ],
          conferenceData: {
            createRequest: {
              requestId: `meet-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
              conferenceSolutionKey: { type: "hangoutsMeet" },
            },
          },
        };

        const res = await calendar.events.insert({
          calendarId,
          conferenceDataVersion: 1,
          sendUpdates: "all", // Envía invitación al estudiante
          requestBody: event,
        });

        googleEventId = res.data.id;
        syncStatus = "synced";

      } catch (googleError) {
        console.error("Google Calendar Error:", googleError);
        // Si falla google, mantenemos syncStatus = "failed_google"
      }
    } else {
      console.warn("No Google Credentials found, skipping calendar sync.");
    }

    // 5. Actualizar estado en el Portal (Opcional, si el portal tiene un endpoint para esto)
    // if (leadId) {
    //   await fetch(`${portalUrl}/api/appointments/${leadId}`, { method: 'PATCH', body: ... })
    // }

    return {
      success: true,
      data: {
        syncStatus,
        eventId: googleEventId,
      }
    };
  } catch (error: any) {
    console.error("Critical error in scheduleAppointment:", error);
    return { success: false, error: "Ha ocurrido un error interno. Intente nuevamente." };
  }
}
