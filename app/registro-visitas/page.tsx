"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  IdentificationIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { supabase } from "@/app/lib/supabaseClient";

export default function RegistroVisitasPage() {
  const [flowType, setFlowType] = useState<'selection' | 'firstTime' | 'frequent'>('selection');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    idType: '',
    idNumber: '',
    phone: '',
    reason: '',
  });

  const commonReasons = [
    'Asesoría o Consulta',
    'Entrega de Documentos',
    'Firma de Contrato',
    'Pago de Programa',
    'Recepción de Visa',
    'Reunión Agendada',
    'Otro'
  ];
  
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev => 
      prev.includes(reason) ? prev.filter(r => r !== reason) : [...prev, reason]
    );
  };

  const handleFirstTimeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('ice_visit_logs')
        .insert([{
          email: formData.email.trim().toLowerCase(),
          full_name: formData.fullName.trim(),
          id_type: formData.idType,
          id_number: formData.idNumber.trim(),
          phone: formData.phone.trim(),
          reason: formData.reason.trim()
        }]);

      if (error) throw error;
      
      alert('¡Registro exitoso! Bienvenido a ICE Colombia.');
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al procesar el registro. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFrequentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedReasons.length === 0 && !formData.reason.trim()) {
      alert('Por favor selecciona o escribe el motivo de tu visita.');
      return;
    }
    setIsSubmitting(true);
    
    try {
      const { data, error: fetchError } = await supabase
        .from('ice_visit_logs')
        .select('email, full_name, id_type, phone')
        .eq('id_number', formData.idNumber.trim())
        .order('created_at', { ascending: false })
        .limit(1);

      if (fetchError) throw fetchError;

      if (!data || data.length === 0) {
        alert('No encontramos un registro previo con este documento. Por favor, regístrate como "Primera Vez".');
        setFlowType('firstTime');
        return;
      }

      const previousRecord = data[0];
      const finalReasons = [...selectedReasons, formData.reason.trim()].filter(Boolean).join(', ');

      const { error } = await supabase
        .from('ice_visit_logs')
        .insert([{
          email: previousRecord.email,
          full_name: previousRecord.full_name,
          id_type: previousRecord.id_type,
          id_number: formData.idNumber.trim(),
          phone: previousRecord.phone,
          reason: finalReasons
        }]);

      if (error) throw error;
      
      alert('¡Registro exitoso! Qué bueno verte de nuevo.');
      resetForm();
    } catch (error) {
      console.error('Error submitting frequent visitor:', error);
      alert('Hubo un error al procesar el registro. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      fullName: '',
      idType: '',
      idNumber: '',
      phone: '',
      reason: '',
    });
    setSelectedReasons([]);
    setFlowType('selection');
  };

  const idTypes = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Pasaporte',
    'Otro'
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative min-h-screen bg-gray-50 flex flex-col justify-center py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-3xl opacity-70" />
        </div>

        <div className="relative max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}>
              Registro de <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Visitas</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ¡Hola! 👋 Bienvenido(a) a International Cultural Experience Colombia. Gracias por tu interés en ser parte de la <strong className="text-brand-gold">#ICExperience</strong> 🥰
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[400px]">
            <AnimatePresence mode="wait">
              {flowType === 'selection' && (
                <motion.div key="selection" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }} className="flex flex-col items-center justify-center space-y-6 pt-4 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">¿Es tu primera vez en nuestra oficina?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <button onClick={() => setFlowType('firstTime')} className="group flex flex-col items-center p-8 bg-gray-50 hover:bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-xl">
                      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <UserIcon className="w-8 h-8 text-brand-gold" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Primera Vez</h3>
                      <p className="text-sm text-gray-500">Nunca me he registrado en este sistema de visitas.</p>
                    </button>
                    <button onClick={() => setFlowType('frequent')} className="group flex flex-col items-center p-8 bg-gray-50 hover:bg-white rounded-2xl border-2 border-gray-100 hover:border-brand-orange transition-all duration-300 shadow-sm hover:shadow-xl">
                      <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircleIcon className="w-8 h-8 text-brand-orange" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Visitante Frecuente</h3>
                      <p className="text-sm text-gray-500">Ya me he registrado antes. Ingreso rápido.</p>
                    </button>
                  </div>
                </motion.div>
              )}

              {flowType === 'firstTime' && (
                <motion.div key="firstTime" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }}>
                  <button onClick={() => setFlowType('selection')} className="flex items-center text-sm font-semibold text-gray-500 hover:text-brand-gold mb-8 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" /> Volver
                  </button>
                  <form onSubmit={handleFirstTimeSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Correo electrónico *</label>
                        <div className="relative">
                          <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800" placeholder="tu.email@ejemplo.com" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Nombre Completo del Visitante *</label>
                        <div className="relative">
                          <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800" placeholder="Ej. Juan Pérez" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="idType" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Documento de Identidad *</label>
                        <div className="relative">
                          <IdentificationIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                          <select id="idType" name="idType" value={formData.idType} onChange={handleInputChange} required className="w-full pl-12 pr-10 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 appearance-none relative">
                            <option value="" disabled>Selecciona el tipo</option>
                            {idTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Número de Documento *</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-mono">#</span>
                          <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 font-mono" placeholder="1234567890" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Celular / WhatsApp *</label>
                        <div className="relative">
                          <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800" placeholder="+57 300 000 0000" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">¿Cuál es el motivo de la visita? *</label>
                        <div className="relative">
                          <ChatBubbleLeftRightIcon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <textarea id="reason" name="reason" rows={3} value={formData.reason} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 resize-none" placeholder="Ej. Asesoría presencial, entrega de documentos..." />
                        </div>
                      </div>
                    </div>
                    <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-4 text-sm text-gray-600 flex gap-3 mt-6">
                      <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
                      <p>Tus datos están protegidos. ICE Colombia no los compartirá con terceros.</p>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full mt-4 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 shadow-[0_10px_20px_rgba(235,148,34,0.2)] hover:shadow-[0_15px_30px_rgba(235,148,34,0.3)] disabled:opacity-70 flex items-center justify-center space-x-2">
                      {isSubmitting ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <><span>Registrar Ingreso</span><ArrowRightIcon className="w-5 h-5" /></>}
                    </button>
                  </form>
                </motion.div>
              )}

              {flowType === 'frequent' && (
                <motion.div key="frequent" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }}>
                  <button onClick={() => setFlowType('selection')} className="flex items-center text-sm font-semibold text-gray-500 hover:text-brand-orange mb-8 transition-colors">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" /> Volver
                  </button>
                  <form onSubmit={handleFrequentSubmit} className="space-y-8 text-left">
                    <div>
                      <label htmlFor="idNumberFreq" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Número de Documento (Cédula) *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-mono">#</span>
                        <input type="text" id="idNumberFreq" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-gray-800 font-mono text-lg" placeholder="1234567890" />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Usaremos este número para buscar tus datos previos.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide text-xs">¿Cuál es el motivo de tu visita hoy?</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {commonReasons.map(reason => (
                          <div key={reason} onClick={() => toggleReason(reason)} className={`cursor-pointer px-4 py-3 rounded-lg border-2 flex items-center gap-3 transition-colors ${selectedReasons.includes(reason) ? 'border-brand-orange bg-brand-orange/5' : 'border-gray-100 hover:border-gray-300 bg-white'}`}>
                            <div className={`w-5 h-5 rounded flex items-center justify-center border-2 ${selectedReasons.includes(reason) ? 'border-brand-orange bg-brand-orange text-white' : 'border-gray-300 bg-transparent'}`}>
                              {selectedReasons.includes(reason) && <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className={`text-sm font-medium ${selectedReasons.includes(reason) ? 'text-gray-900' : 'text-gray-600'}`}>{reason}</span>
                          </div>
                        ))}
                      </div>
                      {selectedReasons.includes('Otro') && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4">
                          <input type="text" name="reason" value={formData.reason} onChange={handleInputChange} placeholder="Por favor especifica..." className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors text-gray-800" />
                        </motion.div>
                      )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold text-lg rounded-xl hover:from-black hover:to-gray-900 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] disabled:opacity-70 flex items-center justify-center space-x-2">
                      {isSubmitting ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" /> : <><span>Check-in Rápido</span><ArrowRightIcon className="w-5 h-5" /></>}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
