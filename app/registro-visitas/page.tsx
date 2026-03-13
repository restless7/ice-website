"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  IdentificationIcon, 
  ChatBubbleLeftRightIcon, 
  ArrowRightIcon 
} from "@heroicons/react/24/outline";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";

export default function RegistroVisitasPage() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    idType: '',
    idNumber: '',
    phone: '',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect this to the Next.js API route that hits internal Postgres
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Registro exitoso! Bienvenido a ICE Colombia.');
      // Optional: Reset form
      setFormData({
        email: '',
        fullName: '',
        idType: '',
        idNumber: '',
        phone: '',
        reason: '',
      });
    }, 1500);
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
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-70" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-3xl opacity-70" />
        </div>

        <div className="relative max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}>
              Registro de <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Visitas</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ¡Hola! 👋 Bienvenido(a) a International Cultural Experience Colombia. Gracias por tu interés en ser parte de la <strong className="text-brand-gold">#ICExperience</strong> 🥰
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Por favor completa esta información para llevar un control adecuado de tu ingreso.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Email */}
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">
                    Nombre Completo del Visitante *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>
                </div>

                {/* ID Type */}
                <div>
                  <label htmlFor="idType" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">
                    Documento de Identidad *
                  </label>
                  <div className="relative">
                    <IdentificationIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                    <select
                      id="idType"
                      name="idType"
                      value={formData.idType}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-10 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 appearance-none relative"
                    >
                      <option value="" disabled>Selecciona el tipo</option>
                      {idTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 predefined..."/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* ID Number */}
                <div>
                  <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">
                    Número de Documento *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-mono">#</span>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 font-mono"
                      placeholder="1234567890"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">
                    Celular / WhatsApp *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div className="md:col-span-2">
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide text-xs">
                    ¿Cuál es el motivo de la visita? *
                  </label>
                  <div className="relative">
                    <ChatBubbleLeftRightIcon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="reason"
                      name="reason"
                      rows={3}
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors text-gray-800 resize-none"
                      placeholder="Ej. Asesoría presencial, entrega de documentos, etc."
                    />
                  </div>
                </div>

              </div>

              {/* Security Warning */}
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-4 text-sm text-gray-600 flex gap-3 mt-6">
                <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p>
                  Tus datos están protegidos. ICE Colombia no compartirá tu información con terceros sin tu consentimiento.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-[1.02] shadow-[0_10px_20px_rgba(235,148,34,0.2)] hover:shadow-[0_15px_30px_rgba(235,148,34,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <span>Registrar Ingreso</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
