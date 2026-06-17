"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { checkAvailability, scheduleAppointment } from "@/app/agendar/actions";

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

// Dynamic programs will be passed as props.
// Fallback if needed:
const FALLBACK_PROGRAMS = [
  { id: "Working Holiday Alemania 2026", name: "Working Holiday Alemania 2026" },
  { id: "Work and Travel USA", name: "Work and Travel USA" },
  { id: "Asesoría Visa de Turismo USA", name: "Asesoría Visa de Turismo USA" },
  { id: "Au Pair USA", name: "Au Pair USA" },
  { id: "Camp Counselor", name: "Camp Counselor" },
  { id: "Canadá: Tu proyecto de vida", name: "Canadá: Tu proyecto de vida" },
  { id: "Curso de Inglés", name: "Curso de Inglés" }
];

export default function IceSchedulingWidget({ 
  sourceCTA = "Website Form", 
  programs = [],
  preselectedProgramId,
  lockProgram = false
}: { 
  sourceCTA?: string; 
  programs?: any[];
  preselectedProgramId?: string;
  lockProgram?: boolean;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSlots, setIsCheckingSlots] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busySlots, setBusySlots] = useState<{start: string, end: string}[]>([]);

  const { register, handleSubmit, watch, formState: { errors }, setValue, setError: setFormError, clearErrors } = useForm<FormData>();
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  // Set the preselected program if provided
  useEffect(() => {
    if (preselectedProgramId) {
      setValue("programOfInterest", preselectedProgramId);
    }
  }, [preselectedProgramId, setValue]);

  useEffect(() => {
    if (!selectedDate) return;

    // Validate weekend
    const dateObj = new Date(`${selectedDate}T00:00:00`);
    const day = dateObj.getDay(); // 0 = Sunday, 6 = Saturday
    if (day === 0 || day === 6) {
      setError("Los fines de semana no están disponibles para asesorías.");
      setValue("time", "");
      return;
    } else {
      setError(null);
    }

    // Fetch real availability from Google Calendar via Server Action
    const fetchAvailability = async () => {
      setIsCheckingSlots(true);
      setValue("time", ""); // clear time when date changes
      try {
        const result = await checkAvailability(selectedDate);
        if (result.success && result.busySlots) {
          setBusySlots(result.busySlots);
        } else {
          setBusySlots([]);
        }
      } catch (err) {
        console.error("Failed to fetch slots", err);
        setBusySlots([]);
      } finally {
        setIsCheckingSlots(false);
      }
    };

    fetchAvailability();
  }, [selectedDate, setValue]);

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return AVAILABLE_TIMES;
    
    // Filter out busy slots dynamically
    // Each busy slot has start and end ISO strings
    const busyTimesOnDate = busySlots.map(slot => {
      const start = new Date(slot.start);
      // Extraemos la hora en formato HH:mm local (America/Bogota)
      // Como el browser puede estar en otro timezone, forzamos UTC asumiendo que ya están normalizados o simplemente comparamos strings
      // Es más seguro extraer la hora local asumiendo que el usuario está viendo la misma franja o hacer match de HH:mm
      // Simplificaremos extrayendo en el tz de Bogota o usando Intl
      const timeStr = start.toLocaleTimeString("es-CO", { timeZone: "America/Bogota", hour: "2-digit", minute: "2-digit", hour12: false });
      return timeStr;
    });

    return AVAILABLE_TIMES.filter(time => !busyTimesOnDate.includes(time));
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Extraer parámetros UTM
      const searchParams = new URLSearchParams(window.location.search);
      const utmData = {
        source: searchParams.get('utm_source'),
        medium: searchParams.get('utm_medium'),
        campaign: searchParams.get('utm_campaign'),
        content: searchParams.get('utm_content')
      };

      const result = await scheduleAppointment(data, sourceCTA, utmData);

      if (!result.success) {
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
  // Usamos el timezone local para dar el 'today' correcto
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD

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
        <div className="w-full md:w-2/3 p-6 md:p-8 relative flex flex-col">
          {/* Progress Bar */}
          <div className="mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-brand-gold -translate-y-1/2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            ></div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= 1 ? 'bg-brand-gold text-white shadow-md shadow-brand-gold/30' : 'bg-gray-100 text-gray-400'}`}>1</div>
                <span className={`text-xs font-medium ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>Fecha y Hora</span>
              </div>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= 2 ? 'bg-brand-gold text-white shadow-md shadow-brand-gold/30' : 'bg-gray-100 text-gray-400'}`}>2</div>
                <span className={`text-xs font-medium ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Tus Datos</span>
              </div>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${step >= 3 ? 'bg-brand-gold text-white shadow-md shadow-brand-gold/30' : 'bg-gray-100 text-gray-400'}`}>3</div>
                <span className={`text-xs font-medium ${step >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>Confirmación</span>
              </div>
            </div>
          </div>

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
                
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100 mb-4">
                    {error}
                  </div>
                )}

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
                        isCheckingSlots ? (
                          <div className="col-span-2 flex justify-center py-8">
                            <Loader2 className="w-6 h-6 animate-spin text-brand-gold" />
                          </div>
                        ) : getAvailableTimeSlots().length > 0 ? (
                          getAvailableTimeSlots().map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setValue("time", time)}
                              className={`py-3 px-4 text-base md:text-sm rounded-xl border transition-all ${
                                selectedTime === time
                                  ? "bg-brand-gold text-white border-brand-gold font-bold shadow-md shadow-brand-gold/20"
                                  : "border-gray-200 text-gray-700 hover:border-brand-gold/50 hover:bg-brand-gold/5 font-medium"
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
                      if (selectedDate && selectedTime && !error) setStep(2);
                    }}
                    disabled={!selectedDate || !selectedTime || !!error}
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
                  <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
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
                    {errors.name && <span className="text-xs text-red-500">Este campo es requerido</span>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Correo Electrónico
                      </label>
                      <input
                        type="email"
                        {...register("email", { 
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Correo electrónico inválido"
                          }
                        })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none"
                        placeholder="tucorreo@ejemplo.com"
                      />
                      {errors.email && <span className="text-xs text-red-500">{errors.email.message || "Este campo es requerido"}</span>}
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
                      {errors.phone && <span className="text-xs text-red-500">Este campo es requerido</span>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Programa de Interés</label>
                    <select
                      {...register("programOfInterest", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none bg-white disabled:bg-gray-100 disabled:text-gray-600"
                      disabled={lockProgram || !!preselectedProgramId}
                    >
                      <option value="">Selecciona un programa</option>
                      {(programs && programs.length > 0 ? programs : FALLBACK_PROGRAMS).map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                    {errors.programOfInterest && <span className="text-xs text-red-500">Selecciona un programa</span>}
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
                  <p><span className="text-gray-500">Programa:</span> <span className="font-medium text-gray-900">
                    {(programs && programs.length > 0 ? programs : FALLBACK_PROGRAMS).find(p => p.id === watch("programOfInterest"))?.name || watch("programOfInterest")}
                  </span></p>
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
