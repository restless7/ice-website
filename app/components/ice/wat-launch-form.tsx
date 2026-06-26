'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { createLeadOnly } from '@/app/agendar/actions';

const formSchema = z.object({
  fullName: z.string().min(2, 'Por favor ingresa tu nombre completo'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  phone: z.string().min(7, 'Ingresa un teléfono/WhatsApp válido'),
  university: z.string().min(2, 'Dato requerido para elegibilidad J1'),
});

type FormData = z.infer<typeof formSchema>;

export function WatLaunchForm({ 
  sourceCTA = "Homepage Banner - WAT 2027 Launch",
  onSuccess 
}: { 
  sourceCTA?: string;
  onSuccess?: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [utmData, setUtmData] = useState<any>({});

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    // UTM capture
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtmData({
        source: params.get('utm_source') || '',
        medium: params.get('utm_medium') || '',
        campaign: params.get('utm_campaign') || '',
        term: params.get('utm_term') || '',
        content: params.get('utm_content') || '',
      });
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      const payload = {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        programOfInterest: 'WO', // UUID or ID for WAT
        geoCity: '', 
      };

      // We append university into notes as instructed (or custom field if schema supports it)
      const enhancedUtm = { ...utmData, university: data.university };

      // Step 1: Create Lead via Server Action
      const result = await createLeadOnly({
        ...payload,
        notes: `Universidad/Semestre Actual: ${data.university}`
      }, sourceCTA, enhancedUtm);
      
      if (!result.success) {
        throw new Error(result.error || 'Ocurrió un error inesperado al procesar tu registro.');
      }

      // Step 2: Fire generic appointment creation via Portal API
      const portalUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || "https://api.iceworldteam.com";
      await fetch(`${portalUrl}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: result.data?.id,
          title: `Info Meeting - WAT 2027 - ${data.fullName}`,
          startTime: new Date().toISOString(),
          endTime: new Date(Date.now() + 3600000).toISOString(),
          calendarSource: "MARKETING",
          description: "Info Meeting autogenerada por campaña WAT 2027"
        })
      }).catch(e => console.warn("Appointment creation skipped/failed:", e));

      setIsSuccess(true);
      if (onSuccess) setTimeout(onSuccess, 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                Info Meeting <Sparkles className="w-5 h-5 text-brand-gold" />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Asegura tu lugar en la reunión informativa exclusiva.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Nombre Completo</label>
                <Input 
                  {...register('fullName')} 
                  placeholder="Ej. Camila Pérez" 
                  className="mt-1 bg-white/80 dark:bg-gray-900/50"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Correo Electrónico</label>
                <Input 
                  {...register('email')} 
                  type="email" 
                  placeholder="camila@ejemplo.com" 
                  className="mt-1 bg-white/80 dark:bg-gray-900/50"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">WhatsApp / Teléfono</label>
                <Input 
                  {...register('phone')} 
                  type="tel" 
                  placeholder="+57 300 000 0000" 
                  className="mt-1 bg-white/80 dark:bg-gray-900/50"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Universidad y Semestre Actual</label>
                <Input 
                  {...register('university')} 
                  placeholder="Ej. U. de los Andes - 5to semestre" 
                  className="mt-1 bg-white/80 dark:bg-gray-900/50"
                />
                <p className="text-[10px] text-gray-500 mt-1 ml-1 leading-tight">Requisito migratorio obligatorio para la visa J1.</p>
                {errors.university && <p className="text-red-500 text-xs mt-1 ml-1">{errors.university.message}</p>}
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-gold to-brand-orange hover:from-brand-orange hover:to-brand-gold text-white font-bold py-6 text-lg rounded-xl shadow-lg transform transition-all active:scale-95"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  "Asegurar mi lugar 🔥"
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¡Lugar Asegurado!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Te hemos enviado los detalles de acceso a la Info Meeting a tu correo. Revisa tu bandeja de entrada (y la carpeta de spam).
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
