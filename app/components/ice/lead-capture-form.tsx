"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  programOfInterest: string;
};

export default function LeadCaptureForm({
  sourceCTA = "Website Generic Form",
  programs = [],
  preselectedProgramId = "",
  title = "Solicita Más Información",
  subtitle = "Déjanos tus datos y un asesor se pondrá en contacto contigo pronto."
}: {
  sourceCTA?: string;
  programs?: any[];
  preselectedProgramId?: string;
  title?: string;
  subtitle?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      programOfInterest: preselectedProgramId
    }
  });

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

      const portalUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || "http://localhost:3000";
      const leadRes = await fetch(`${portalUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.name,
          email: data.email,
          phone: data.phone,
          programId: data.programOfInterest,
          source: sourceCTA,
          notes: `Capturado desde ${sourceCTA}.\nPrograma: ${data.programOfInterest}`,
          utmData: utmData
        })
      });

      if (!leadRes.ok && leadRes.status !== 409) {
        throw new Error("No pudimos registrar tus datos. Por favor, intenta de nuevo.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "No se pudo conectar con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 max-w-md mx-auto w-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Datos Registrados!</h3>
        <p className="text-gray-600 mb-6">
          Un asesor de ICE se pondrá en contacto contigo muy pronto para brindarte toda la información que necesitas.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-brand-gold font-semibold hover:text-brand-orange transition-colors"
        >
          Registrar a otra persona
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-md mx-auto w-full">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register("name", { required: "El nombre es obligatorio" })}
              type="text"
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
              placeholder="Ej: Ana María García"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register("email", { 
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Correo inválido"
                }
              })}
              type="email"
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
              placeholder="correo@ejemplo.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Celular / WhatsApp *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register("phone", { required: "El celular es obligatorio" })}
              type="tel"
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
              placeholder="+57 300 000 0000"
            />
          </div>
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Programa de Interés *</label>
          <select
            {...register("programOfInterest", { required: "Selecciona un programa" })}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
          >
            <option value="">Selecciona un programa...</option>
            {programs && programs.length > 0 ? (
              programs.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))
            ) : (
              <>
                <option value="Working Holiday Alemania 2026">Working Holiday Alemania 2026</option>
                <option value="Work and Travel USA">Work and Travel USA</option>
                <option value="Asesoría Visa de Turismo USA">Asesoría Visa de Turismo USA</option>
                <option value="Au Pair USA">Au Pair USA</option>
                <option value="Camp Counselor">Camp Counselor</option>
                <option value="Canadá: Tu proyecto de vida">Canadá: Tu proyecto de vida</option>
                <option value="Curso de Inglés">Curso de Inglés</option>
              </>
            )}
          </select>
          {errors.programOfInterest && <p className="mt-1 text-sm text-red-500">{errors.programOfInterest.message}</p>}
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Solicitar Información</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
