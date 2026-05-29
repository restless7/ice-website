"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
  date: string;
  time: string;
};

const AVAILABLE_TIMES = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const PROGRAMS = [
  "Asesoría Visa de Turismo USA",
  "Au Pair USA",
  "Camp Counselor",
  "Canadá: Tu proyecto de vida",
  "Curso de Inglés",
  "Summer Work and Travel"
];

export default function IceSchedulingWidget() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookedAppointments, setBookedAppointments] = useState<any[]>([]);

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormData>();
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  useEffect(() => {
    // Fetch upcoming appointments to disable booked slots
    const fetchAppointments = async () => {
      try {
        const portalUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.iceworldteam.com";
        const res = await fetch(`${portalUrl}/api/appointments?showAll=true`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
            setBookedAppointments(data.data);
          }
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return AVAILABLE_TIMES;
    
    // Simple filter: if an appointment starts at the same time, remove it
    // In a real scenario, we'd check overlaps properly
    const bookedTimesOnDate = bookedAppointments
      .filter(app => new Date(app.startTime).toISOString().split("T")[0] === selectedDate)
      .map(app => {
        const d = new Date(app.startTime);
        return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
      });

    return AVAILABLE_TIMES.filter(time => !bookedTimesOnDate.includes(time));
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const startTime = new Date(`${data.date}T${data.time}:00`).toISOString();
      const portalUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.iceworldteam.com";

      const res = await fetch(`${portalUrl}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `Asesoría ICE: ${data.name}`,
          description: `Programa de interés: ${data.programOfInterest}\nTeléfono: ${data.phone}`,
          startTime,
          durationMinutes: 30,
          attendees: [{ email: data.email }],
          calendarType: "ICE"
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Hubo un error agendando la cita.");
      }

      setStep(3);
    } catch (err: any) {
      setError(err.message || "No se pudo conectar con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  // Ensure minimum date is today
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-left border border-gray-100 relative min-h-[500px]">
      <div className="flex flex-col md:flex-row h-full min-h-[500px]">
        {/* Sidebar Info */}
        <div className="md:w-1/3 bg-gray-50 p-8 border-r border-gray-100 hidden md:block">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Asesoría ICE</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3 text-gray-600">
              <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Duración</p>
                <p className="text-sm">30 minutos</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-gray-600">
              <Calendar className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Modalidad</p>
                <p className="text-sm">Reunión Virtual (Google Meet)</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Selecciona la fecha y hora que mejor se ajusten a tu disponibilidad. Nuestro equipo de asesores se conectará contigo para evaluar tu perfil y guiarte en tu proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3 p-6 md:p-8 relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900">Selecciona Fecha y Hora</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">1. Elige una fecha</label>
                    <input
                      type="date"
                      min={today}
                      {...register("date", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">2. Elige un horario</label>
                    <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                      {selectedDate ? (
                        getAvailableTimeSlots().length > 0 ? (
                          getAvailableTimeSlots().map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setValue("time", time)}
                              className={`py-2 px-3 text-sm rounded-lg border transition-all ${
                                selectedTime === time
                                  ? "bg-brand-gold text-white border-brand-gold font-medium"
                                  : "border-gray-200 text-gray-700 hover:border-brand-gold/50 hover:bg-brand-gold/5"
                              }`}
                            >
                              {time}
                            </button>
                          ))
                        ) : (
                          <p className="col-span-2 text-sm text-gray-500 py-4 text-center">No hay horarios disponibles en esta fecha.</p>
                        )
                      ) : (
                        <p className="col-span-2 text-sm text-gray-500 py-4 text-center">Selecciona una fecha primero</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => {
                      if (selectedDate && selectedTime) setStep(2);
                    }}
                    disabled={!selectedDate || !selectedTime}
                    className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Siguiente Paso
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-900">
                    ← Volver
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900">Tus Datos</h2>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4" /> Nombre Completo
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Correo Electrónico
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        {...register("phone", { required: true })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Programa de Interés</label>
                    <select
                      {...register("programOfInterest", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none bg-white"
                    >
                      <option value="">Selecciona un programa</option>
                      {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center px-6 py-4 bg-brand-gold text-white rounded-xl hover:bg-yellow-500 disabled:opacity-70 transition-all font-bold text-lg"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Procesando...
                        </>
                      ) : (
                        "Confirmar Cita"
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">¡Cita Confirmada!</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Hemos enviado los detalles de tu reunión por correo electrónico. Un asesor se conectará contigo en la fecha y hora seleccionada.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl w-full mt-6 text-left space-y-2 border border-gray-100">
                  <p><span className="text-gray-500">Fecha:</span> <span className="font-medium text-gray-900">{selectedDate}</span></p>
                  <p><span className="text-gray-500">Hora:</span> <span className="font-medium text-gray-900">{selectedTime}</span></p>
                  <p><span className="text-gray-500">Programa:</span> <span className="font-medium text-gray-900">{watch("programOfInterest")}</span></p>
                </div>
                <Link
                  href="/"
                  prefetch={false}
                  className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all block text-center"
                >
                  Volver al Inicio
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
