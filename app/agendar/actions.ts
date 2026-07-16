"use server";

import { google } from "googleapis";
import { unstable_noStore as noStore } from 'next/cache';
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
    
    try {
      // Usar el nuevo webhook unificado
      const webhookUrl = "https://api.iceworldteam.com/api/webhooks/website-forms";
      const API_SECRET = process.env.WEBHOOK_SECRET || 'ice-portal-secure-webhook-token';
      
      const payload = {
        formId: 'agendar',
        firstName: data.name?.split(' ')[0] || data.name,
        lastName: data.name?.split(' ').slice(1).join(' ') || '',
        email: data.email,
        phone: data.phone,
        country: 'Colombia',
        programOfInterest: data.programOfInterest,
        utmSource: utmData?.source || null,
        utmCampaign: utmData?.campaign || null,
        metadata: {
          sourceCTA,
          geoCity: data.geoCity,
          date: data.date,
          time: data.time,
          appointmentStart: startDate.toISOString(),
          appointmentEnd: endDate.toISOString()
        }
      };

      const leadRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_SECRET}`
        },
        body: JSON.stringify(payload)
      });

      if (!leadRes.ok && leadRes.status !== 409) {
        dbError = await leadRes.text();
      } else {
        const leadData = await leadRes.json();
        leadId = leadData.leadId;
      }
    } catch (err) {
      dbError = err;
    }

    if (dbError) {
      console.error("Error saving lead to Portal System:", dbError);
    }

    // 4. Conectar a Google Calendar
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    let privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    privateKey = privateKey.trim();
    if (privateKey && !privateKey.includes('BEGIN PRIVATE KEY')) {
      privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----\n`;
    }
    let googleEventId = null;
    let meetLink = null;
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
        meetLink = res.data.hangoutLink;
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
        meetLink,
      }
    };
  } catch (error: any) {
    console.error("Critical error in scheduleAppointment:", error);
    return { success: false, error: "Ha ocurrido un error interno. Intente nuevamente." };
  }
}

export async function getUpcomingEvents() {
  noStore();
  try {
    let privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    privateKey = privateKey.trim();
    if (privateKey && !privateKey.includes('BEGIN PRIVATE KEY')) {
      privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----\n`;
    }
    
    if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey) {
      console.warn("Google credentials not configured, cannot fetch events.");
      return { success: false, events: [], error: "GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY is missing in Vercel environment variables" };
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/calendar.events"]
    });

    const calendar = google.calendar({ version: "v3", auth });

    const calendarIds = (process.env.GOOGLE_CALENDAR_ID || "primary").split(',').map(id => id.trim());
    const now = new Date();
    const timeMax = new Date();
    timeMax.setDate(now.getDate() + 30);

    let allItems: any[] = [];
    let lastError: any = null;
    let successCount = 0;

    for (const calId of calendarIds) {
      try {
        const response = await calendar.events.list({
          calendarId: calId,
          timeMin: now.toISOString(),
          timeMax: timeMax.toISOString(),
          singleEvents: true,
          orderBy: "startTime",
        });
        if (response.data.items) {
          allItems = [...allItems, ...response.data.items];
        }
        successCount++;
      } catch (err) {
        console.warn(`Failed to fetch events for calendar ${calId}`, err);
        lastError = err;
      }
    }

    if (successCount === 0 && lastError) {
      throw lastError;
    }

    // Sort combined events
    allItems.sort((a, b) => {
      const timeA = new Date(a.start?.dateTime || a.start?.date || 0).getTime();
      const timeB = new Date(b.start?.dateTime || b.start?.date || 0).getTime();
      return timeA - timeB;
    });

    const events = allItems
      .filter(event => event.summary && event.summary.toLowerCase().includes('charla'))
      .map(event => ({
      id: event.id,
      summary: event.summary,
      description: event.description,
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      location: event.location,
      meetLink: event.hangoutLink
    }));
    
    return { success: true, events };
  } catch (error) {
    console.error("Error checking upcoming events in Google Calendar:", error);
    return { success: false, events: [], error: error instanceof Error ? error.message : "No se pudo consultar eventos" };
  }
}

export async function createLeadOnly(data: any, sourceCTA: string = "Website Form", utmData?: any) {
  try {
    const webhookUrl = "https://api.iceworldteam.com/api/webhooks/website-forms";
    const API_SECRET = process.env.WEBHOOK_SECRET || 'ice-portal-secure-webhook-token';
    
    const payload = {
      formId: sourceCTA.toLowerCase().includes('charla') ? 'agendar' : 'registro-visitas',
      firstName: data.name?.split(' ')[0] || data.name,
      lastName: data.name?.split(' ').slice(1).join(' ') || '',
      email: data.email,
      phone: data.phone,
      country: 'Colombia', // default
      programOfInterest: data.programOfInterest,
      utmSource: utmData?.source || null,
      utmCampaign: utmData?.campaign || null,
      metadata: {
        sourceCTA,
        geoCity: data.geoCity,
        charlaId: data.charlaId,
        date: data.date,
        time: data.time
      }
    };

    const leadRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_SECRET}`
      },
      body: JSON.stringify(payload)
    });

    if (!leadRes.ok && leadRes.status !== 409) {
      throw new Error(await leadRes.text());
    }

    const leadData = await leadRes.json();
    return { success: true, data: leadData };
  } catch (err: any) {
    console.error("Error creating lead via webhook:", err);
    return { success: false, error: err.message };
  }
}

export async function registerForCharla(eventId: string, data: any, sourceCTA: string = "Website Form", utmData?: any) {
  try {
    // 1. Create/Update Lead in CRM
    await createLeadOnly(data, sourceCTA, utmData);

    // 2. Add attendee to Google Calendar Event
    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    let privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    if (privateKey.startsWith("'") && privateKey.endsWith("'")) {
      privateKey = privateKey.slice(1, -1).replace(/\\n/g, "\n");
    }
    privateKey = privateKey.trim();
    if (privateKey && !privateKey.includes('BEGIN PRIVATE KEY')) {
      privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----\n`;
    }
    
    if (!process.env.GOOGLE_CLIENT_EMAIL || !privateKey) {
      return { success: true, message: "Lead captured, but calendar sync disabled." };
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/calendar.events"]
    });

    const calendar = google.calendar({ version: "v3", auth });

    const calendarIds = (process.env.GOOGLE_CALENDAR_ID || "primary").split(',').map(id => id.trim());
    
    let event: any = null;
    let targetCalendarId = null;

    for (const calId of calendarIds) {
      try {
        const response = await calendar.events.get({
          calendarId: calId,
          eventId,
        });
        if (response.data) {
          event = response.data;
          targetCalendarId = calId;
          break; // Found the event, no need to check other calendars
        }
      } catch (err) {
        // Event not found in this calendar, continue to the next
      }
    }

    if (!event || !targetCalendarId) {
      throw new Error("Evento no encontrado en ninguno de los calendarios configurados.");
    }

    const attendees = event.attendees || [];
    // Check if already registered
    if (!attendees.find((a: any) => a.email === data.email)) {
      attendees.push({ email: data.email });
      
      await calendar.events.patch({
        calendarId: targetCalendarId,
        eventId,
        sendUpdates: "all",
        requestBody: {
          attendees
        }
      });
    }

    return { 
      success: true, 
      event: {
        summary: event.summary,
        start: event.start?.dateTime || event.start?.date,
        meetLink: event.hangoutLink
      }
    };
  } catch (error: any) {
    console.error("Error registering for Charla:", error);
    return { success: false, error: "No se pudo registrar a la charla." };
  }
}
