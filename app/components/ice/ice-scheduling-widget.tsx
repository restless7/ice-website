"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, ArrowRight, CheckCircle2, Loader2, Users, Video } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { checkAvailability, scheduleAppointment, getUpcomingEvents, registerForCharla, createLeadOnly } from "@/app/agendar/actions";

type FormData = {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
  date: string;
  time: string;
  charlaId: string;
};

const AVAILABLE_TIMES = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

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
  lockProgram = false,
  geoCity
}: { 
  sourceCTA?: string; 
  programs?: any[];
  preselectedProgramId?: string;
  lockProgram?: boolean;
  geoCity?: string;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [intent, setIntent] = useState<'1-on-1' | 'charla'>('1-on-1');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSlots, setIsCheckingSlots] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [busySlots, setBusySlots] = useState<{start: string, end: string}[]>([]);
  const [charlas, setCharlas] = useState<any[]>([]);
  const [meetLink, setMeetLink] = useState<string | null>(null);
  const [confirmedEventSummary, setConfirmedEventSummary] = useState<string | null>(null);
  const [confirmedDateStr, setConfirmedDateStr] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState: { errors }, setValue, trigger, getValues } = useForm<FormData>();
  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const selectedCharlaId = watch("charlaId");

  useEffect(() => {
    if (preselectedProgramId) setValue("programOfInterest", preselectedProgramId);
  }, [preselectedProgramId, setValue]);

  // Fetch upcoming charlas on mount
  useEffect(() => {
    getUpcomingEvents().then(res => {
      if (res.success) setCharlas(res.events);
    });
  }, []);

  // Watch for date changes for 1-on-1
  useEffect(() => {
    if (!selectedDate || intent !== '1-on-1') return;

    const dateObj = new Date(`${selectedDate}T00:00:00`);
    if (dateObj.getDay() === 0 || dateObj.getDay() === 6) {
      setError("Los fines de semana no están disponibles para asesorías.");
      setValue("time", "");
      return;
    } else {
      setError(null);
    }

    const fetchAvailability = async () => {
      setIsCheckingSlots(true);
      setValue("time", "");
      try {
        const result = await checkAvailability(selectedDate);
        if (result.success && result.busySlots) {
          setBusySlots(result.busySlots);
        } else {
          setBusySlots([]);
        }
      } catch (err) {
        console.error(err);
        setBusySlots([]);
      } finally {
        setIsCheckingSlots(false);
      }
    };

    fetchAvailability();
  }, [selectedDate, intent, setValue]);

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return AVAILABLE_TIMES;
    const busyTimesOnDate = busySlots.map(slot => {
      const start = new Date(slot.start);
      return start.toLocaleTimeString("es-CO", { timeZone: "America/Bogota", hour: "2-digit", minute: "2-digit", hour12: false });
    });
    return AVAILABLE_TIMES.filter(time => !busyTimesOnDate.includes(time));
  };

  const handleStep1Submit = async () => {
    const isValid = await trigger(["name", "email", "phone", "programOfInterest"]);
    if (!isValid) return;

    setIsLoading(true);
    setError(null);
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const utmData = {
        source: searchParams.get('utm_source'),
        medium: searchParams.get('utm_medium'),
        campaign: searchParams.get('utm_campaign'),
        content: searchParams.get('utm_content')
      };

      // Create lead early so it hits the CRM
      const result = await createLeadOnly({ ...getValues(), geoCity }, sourceCTA, utmData);
      if (!result.success) throw new Error(result.error);
      
      setStep(2);
    } catch (err: any) {
      setError(err.message || "Error conectando con el servidor");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStep2Submit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = getValues();
      if (intent === '1-on-1') {
        if (!data.date || !data.time) throw new Error("Selecciona fecha y hora");
        const result = await scheduleAppointment({ ...data, geoCity }, sourceCTA);
        if (!result.success) throw new Error(result.error);
        if (result.data?.meetLink) setMeetLink(result.data.meetLink);
        setConfirmedEventSummary(`Asesoría 1-on-1 ICE`);
        setConfirmedDateStr(`${data.date} a las ${data.time}`);
      } else {
        if (!data.charlaId) throw new Error("Selecciona una charla");
        const result = await registerForCharla(data.charlaId, { ...data, geoCity }, sourceCTA);
        if (!result.success) throw new Error(result.error);
        if (result.event?.meetLink) setMeetLink(result.event.meetLink);
        setConfirmedEventSummary(result.event?.summary || 'Charla Grupal ICE');
        if (result.event?.start) {
            const d = new Date(result.event.start);
            setConfirmedDateStr(d.toLocaleString("es-CO", { timeZone: "America/Bogota" }));
        }
      }
      setStep(3);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden text-left border border-gray-100 relative min-h-[550px]">
      <div className="flex flex-col md:flex-row h-full min-h-[550px]">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-50 p-8 border-r border-gray-100 hidden md:flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Asesorías y Eventos</h3>
            {geoCity && (
              <div className="mb-6 p-4 bg-brand-gold/10 rounded-xl border border-brand-gold/20">
                <p className="text-sm font-medium text-brand-dark">
                  Atención especial para prospectos en {geoCity}.
                </p>
              </div>
            )}
            <div className="space-y-6">
              <div className="flex items-start gap-3 text-gray-600">
                <Video className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Modalidad Híbrida</p>
                  <p className="text-sm">Asesorías 1-on-1 o Charlas Grupales vía Google Meet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Sincronización Total</p>
                  <p className="text-sm">Recibirás invitaciones directas a tu calendario.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-6 md:p-8 relative flex flex-col">
          {/* Progress Bar */}
          <div className="mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-brand-gold -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
            ></div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-brand-gold text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}>1</div>
                <span className={`text-xs font-medium ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>Tus Datos</span>
              </div>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-brand-gold text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}>2</div>
                <span className={`text-xs font-medium ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>Modalidad</span>
              </div>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? 'bg-brand-gold text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}>3</div>
                <span className={`text-xs font-medium ${step >= 3 ? 'text-gray-900' : 'text-gray-400'}`}>Confirmación</span>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Cuéntanos sobre ti</h2>
                {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">{error}</div>}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><User className="w-4 h-4" /> Nombre Completo</label>
                    <input {...register("name", { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Mail className="w-4 h-4" /> Correo Electrónico</label>
                      <input type="email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none" placeholder="tucorreo@ejemplo.com" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Phone className="w-4 h-4" /> Teléfono / WhatsApp</label>
                      <input type="tel" {...register("phone", { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none" placeholder="+57 300 000 0000" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Programa de Interés</label>
                    <select {...register("programOfInterest", { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none bg-white disabled:bg-gray-100" disabled={lockProgram || !!preselectedProgramId}>
                      <option value="">Selecciona un programa</option>
                      {(programs?.length ? programs : FALLBACK_PROGRAMS).map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button onClick={handleStep1Submit} disabled={isLoading} className="flex items-center px-6 py-3 bg-brand-gold text-white rounded-xl hover:bg-yellow-500 disabled:opacity-50 transition-all font-bold">
                    {isLoading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : "Siguiente"}
                    {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 flex flex-col h-full">
                <div className="flex items-center gap-3">
                  <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Volver</button>
                  <h2 className="text-2xl font-bold text-gray-900">¿Cómo prefieres continuar?</h2>
                </div>
                {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">{error}</div>}

                <div className="flex gap-4 p-1 bg-gray-100 rounded-xl">
                  <button type="button" onClick={() => { setIntent('1-on-1'); setError(null); }} className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${intent === '1-on-1' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Asesoría 1-on-1</button>
                  <button type="button" onClick={() => { setIntent('charla'); setError(null); }} className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${intent === 'charla' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>Charla Grupal</button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {intent === '1-on-1' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Elige una fecha para tu asesoría individual:</label>
                        <input type="date" min={today} {...register("date")} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Elige un horario:</label>
                        <div className="grid grid-cols-3 gap-2">
                          {selectedDate ? (
                            isCheckingSlots ? (
                              <div className="col-span-3 py-4 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-brand-gold" /></div>
                            ) : getAvailableTimeSlots().length > 0 ? (
                              getAvailableTimeSlots().map(time => (
                                <button key={time} type="button" onClick={() => setValue("time", time)} className={`py-2 px-3 text-sm rounded-lg border transition-all ${selectedTime === time ? "bg-brand-gold text-white border-brand-gold font-bold" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>
                                  {time}
                                </button>
                              ))
                            ) : <p className="col-span-3 text-sm text-gray-500 py-2">No hay cupos disponibles.</p>
                          ) : <p className="col-span-3 text-sm text-gray-500 py-2">Selecciona una fecha primero</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {intent === 'charla' && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 mb-2">Selecciona una de nuestras próximas charlas o eventos especiales:</p>
                      {charlas.length > 0 ? (
                        <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {charlas.map(charla => {
                            const isSelected = selectedCharlaId === charla.id;
                            const d = new Date(charla.start);
                            return (
                              <div 
                                key={charla.id} 
                                onClick={() => setValue("charlaId", charla.id)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold' : 'border-gray-200 hover:border-brand-gold/30 hover:bg-gray-50'}`}
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className={`font-bold ${isSelected ? 'text-brand-dark' : 'text-gray-900'}`}>{charla.summary}</h4>
                                    <p className="text-xs text-gray-500 mt-1 flex items-center"><Calendar className="w-3 h-3 mr-1"/> {d.toLocaleDateString("es-CO", { weekday: 'long', month: 'long', day: 'numeric' })} a las {d.toLocaleTimeString("es-CO", { hour: '2-digit', minute: '2-digit' })}</p>
                                  </div>
                                  {isSelected && <CheckCircle2 className="w-5 h-5 text-brand-gold" />}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                         <div className="p-8 text-center bg-gray-50 rounded-xl border border-gray-100">
                           <Users className="w-8 h-8 mx-auto text-gray-300 mb-2" />
                           <p className="text-sm text-gray-500">Actualmente no hay charlas programadas. Por favor agenda una asesoría 1-on-1.</p>
                         </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-end mt-auto">
                  <button onClick={handleStep2Submit} disabled={isLoading || (intent === '1-on-1' && (!selectedDate || !selectedTime)) || (intent === 'charla' && !selectedCharlaId)} className="flex items-center px-6 py-3 bg-brand-gold text-white rounded-xl hover:bg-yellow-500 disabled:opacity-50 transition-all font-bold">
                    {isLoading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : "Confirmar Agendamiento"}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">¡Inscripción Confirmada!</h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  {intent === 'charla' 
                    ? "Te has registrado exitosamente a la charla. Hemos enviado la invitación a tu calendario." 
                    : "Tu asesoría individual está confirmada. Revisa tu correo o calendario para los detalles."}
                </p>
                <div className="bg-gray-50 p-6 rounded-xl w-full mt-4 text-left space-y-2 border border-gray-100">
                  <p><span className="text-gray-500">Evento:</span> <span className="font-medium text-gray-900">{confirmedEventSummary}</span></p>
                  <p><span className="text-gray-500">Cuándo:</span> <span className="font-medium text-gray-900">{confirmedDateStr}</span></p>
                  <p><span className="text-gray-500">Programa:</span> <span className="font-medium text-gray-900">
                    {(programs?.length ? programs : FALLBACK_PROGRAMS).find(p => p.id === watch("programOfInterest"))?.name || watch("programOfInterest")}
                  </span></p>
                  {meetLink && (
                    <div className="pt-4 mt-4 border-t border-gray-200">
                      <p className="text-gray-500 mb-2">Enlace de Conexión:</p>
                      <a href={meetLink} target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold hover:underline break-all inline-flex items-center">
                        <Video className="w-4 h-4 mr-2" /> Unirse a Google Meet
                      </a>
                    </div>
                  )}
                </div>

                {geoCity?.toLowerCase() === 'bucaramanga' && (
                  <div className="mt-4 p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-xl w-full text-left">
                    <p className="text-brand-dark font-medium text-sm">
                      🌟 ¡Estás en Bucaramanga! Aunque te hemos agendado virtualmente, te invitamos a que te acerques directamente a nuestras instalaciones en Bucaramanga. Es nuestro método preferido para darte una atención más personalizada.
                    </p>
                  </div>
                )}

                <Link href="/" prefetch={false} className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all block text-center">
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
