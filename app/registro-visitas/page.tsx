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
  ArrowLeftIcon,
  XMarkIcon,
  MegaphoneIcon
} from "@heroicons/react/24/outline";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { supabase } from "@/app/lib/supabaseClient";
import Image from "next/image";

// Improved Success Modal Component
const SuccessModal = ({ isOpen, onClose, name }: { isOpen: boolean, onClose: () => void, name: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white rounded-[2rem] shadow-2xl z-[101] overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <XMarkIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="p-8 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-brand-gold/20 rounded-full animate-ping" />
                <div className="relative bg-white rounded-full p-2 shadow-lg border-2 border-brand-gold">
                  <Image src="/images/logo_ice.png" alt="ICE Logo" width={80} height={80} className="object-contain" />
                </div>
              </div>
              
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Todo listo, {name.split(' ')[0]}!</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tu registro ha sido exitoso. Bienvenido a nuestra oficina de ICE Colombia.
              </p>
              
              <button 
                onClick={onClose}
                className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Entendido
              </button>
            </div>
            
            <div className="bg-gray-50 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">#ICExperience</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function RegistroVisitasPage() {
  const [flowType, setFlowType] = useState<'selection' | 'firstTime' | 'frequent'>('selection');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    idType: '',
    idNumber: '',
    phone: '',
    reason: '',
    heardAboutUs: '',
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
      
      // Feed data to the central Portal (Leads/Student Activity)
      try {
        const names = formData.fullName.trim().split(' ');
        const firstName = names[0];
        const lastName = names.slice(1).join(' ');

        await fetch('https://api.iceworldteam.com/api/webhooks/website-forms', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ice-portal-secure-webhook-token'
          },
          body: JSON.stringify({
             formId: 'registro-visitas',
             firstName: firstName,
             lastName: lastName,
             email: formData.email.trim().toLowerCase(),
             phone: formData.phone.trim(),
             country: 'Colombia',
             metadata: {
               idType: formData.idType,
               idNumber: formData.idNumber.trim(),
               reason: formData.reason.trim(),
               heardAboutUs: formData.heardAboutUs
             }
          })
        });
      } catch (e) {
        console.error('Error feeding to portal:', e);
        // We don't block the UI if the portal is down
      }

      setShowSuccess(true);
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
      
      // Feed data to the central Portal
      try {
        const names = previousRecord.full_name.trim().split(' ');
        const firstName = names[0];
        const lastName = names.slice(1).join(' ');

        await fetch('https://api.iceworldteam.com/api/webhooks/website-forms', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ice-portal-secure-webhook-token' 
          },
          body: JSON.stringify({
             formId: 'registro-visitas',
             firstName: firstName,
             lastName: lastName,
             email: previousRecord.email,
             phone: previousRecord.phone,
             country: 'Colombia',
             metadata: {
               idType: previousRecord.id_type,
               idNumber: formData.idNumber.trim(),
               reason: finalReasons,
               heardAboutUs: 'Visitante Frecuente'
             }
          })
        });
      } catch (e) {
        console.error('Error feeding to portal:', e);
      }
      
      // Update local state for success modal display
      setFormData(prev => ({ ...prev, fullName: previousRecord.full_name }));
      setShowSuccess(true);
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
      heardAboutUs: '',
    });
    setSelectedReasons([]);
    setFlowType('selection');
    setShowSuccess(false);
  };

  const idTypes = [
    'Cédula de Ciudadanía',
    'Cédula de Extranjería',
    'Pasaporte',
    'Otro'
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative min-h-screen bg-gray-50 flex flex-col justify-center py-20 overflow-hidden">
        {/* Success Modal */}
        <SuccessModal isOpen={showSuccess} onClose={resetForm} name={formData.fullName} />

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

          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-blue-50/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] min-h-[400px]">
             {/* Decorative corner element */}
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {flowType === 'selection' && (
                <motion.div key="selection" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }} className="flex flex-col items-center justify-center space-y-6 pt-4 text-center">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">¿Es tu primera vez en nuestra oficina?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                    <button onClick={() => setFlowType('firstTime')} className="group flex flex-col items-center p-8 bg-gray-50/50 hover:bg-white rounded-3xl border border-gray-100 hover:border-brand-gold transition-all duration-500 shadow-sm hover:shadow-2xl">
                      <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <UserIcon className="w-10 h-10 text-brand-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Primera Vez</h3>
                      <p className="text-sm text-gray-500 leading-relaxed px-4">Nunca me he registrado en este sistema de visitas.</p>
                    </button>
                    <button onClick={() => setFlowType('frequent')} className="group flex flex-col items-center p-8 bg-gray-50/50 hover:bg-white rounded-3xl border border-gray-100 hover:border-brand-orange transition-all duration-500 shadow-sm hover:shadow-2xl">
                      <div className="w-20 h-20 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500">
                        <CheckCircleIcon className="w-10 h-10 text-brand-orange" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Visitante Frecuente</h3>
                      <p className="text-sm text-gray-500 leading-relaxed px-4">Ya me he registrado antes. Ingreso rápido.</p>
                    </button>
                  </div>
                </motion.div>
              )}

              {flowType === 'firstTime' && (
                <motion.div key="firstTime" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }}>
                  <button onClick={() => setFlowType('selection')} className="flex items-center text-sm font-semibold text-gray-400 hover:text-brand-gold mb-8 transition-colors group">
                    <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Volver
                  </button>
                  <form onSubmit={handleFirstTimeSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Correo electrónico *</label>
                        <div className="relative group">
                          <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-gold transition-colors" />
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800" placeholder="tu.email@ejemplo.com" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Nombre Completo del Visitante *</label>
                        <div className="relative group">
                          <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-gold transition-colors" />
                          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800" placeholder="Ej. Juan Pérez" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="idType" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Tipo de Documento *</label>
                        <div className="relative group">
                          <IdentificationIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none group-focus-within:text-brand-gold transition-colors" />
                          <select id="idType" name="idType" value={formData.idType} onChange={handleInputChange} required className="w-full pl-12 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800 appearance-none relative">
                            <option value="" disabled>Selecciona el tipo</option>
                            {idTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Número *</label>
                        <div className="relative group">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-mono group-focus-within:text-brand-gold transition-colors">#</span>
                          <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800 font-mono" placeholder="123456" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Teléfono / Celular *</label>
                        <div className="relative group">
                          <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-gold transition-colors" />
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800" placeholder="Ej. 3001234567" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="heardAboutUs" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">¿Cómo te enteraste de ICE? *</label>
                        <div className="relative group">
                          <MegaphoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none group-focus-within:text-brand-gold transition-colors" />
                          <select id="heardAboutUs" name="heardAboutUs" value={formData.heardAboutUs} onChange={handleInputChange} required className="w-full pl-12 pr-10 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all text-gray-800 appearance-none relative">
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Tiktok">Tiktok</option>
                            <option value="Google">Búsqueda en Google</option>
                            <option value="Referido">Recomendación / Referido</option>
                            <option value="Feria">Feria Universitaria</option>
                            <option value="Paso por la oficina">Pasaba por la oficina</option>
                            <option value="Otro">Otro</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center space-x-3 disabled:opacity-70">
                      {isSubmitting ? <span className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full" /> : <><span>Completar Registro</span><ArrowRightIcon className="w-6 h-6" /></>}
                    </button>
                  </form>
                </motion.div>
              )}

              {flowType === 'frequent' && (
                <motion.div key="frequent" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }}>
                  <button onClick={() => setFlowType('selection')} className="flex items-center text-sm font-semibold text-gray-400 hover:text-brand-orange mb-8 transition-colors group">
                    <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Volver
                  </button>
                  <form onSubmit={handleFrequentSubmit} className="space-y-8 text-left">
                    <div>
                      <label htmlFor="idNumberFreq" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">Ingresa tu Cédula *</label>
                      <div className="relative group">
                        <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-brand-orange font-mono text-xl group-focus-within:animate-pulse">#</span>
                        <input type="text" id="idNumberFreq" name="idNumber" value={formData.idNumber} onChange={handleInputChange} required className="w-full pl-14 pr-4 py-6 bg-brand-orange/[0.02] border border-brand-orange/10 rounded-3xl focus:ring-8 focus:ring-brand-orange/5 focus:border-brand-orange/30 transition-all text-gray-800 font-mono text-2xl placeholder:opacity-20" placeholder="1234567890" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide text-xs">Selecciona el motivo de tu visita</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {commonReasons.map(reason => (
                          <div key={reason} onClick={() => toggleReason(reason)} className={`cursor-pointer px-5 py-4 rounded-2xl border-2 flex items-center gap-3 transition-all duration-300 ${selectedReasons.includes(reason) ? 'border-brand-orange bg-brand-orange/5 shadow-inner' : 'border-gray-50 hover:border-gray-200 bg-gray-50/50'}`}>
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all ${selectedReasons.includes(reason) ? 'border-brand-orange bg-brand-orange text-white scale-110 shadow-lg' : 'border-gray-200 bg-white'}`}>
                              {selectedReasons.includes(reason) && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <span className={`text-md font-semibold ${selectedReasons.includes(reason) ? 'text-gray-900' : 'text-gray-600'}`}>{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-gray-900 text-white font-bold text-lg rounded-2xl shadow-2xl hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center space-x-3">
                      {isSubmitting ? <span className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full" /> : <><span>Check-in Flash</span><ArrowRightIcon className="w-6 h-6 text-brand-orange" /></>}
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
