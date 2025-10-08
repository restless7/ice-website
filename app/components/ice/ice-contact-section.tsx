"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, DocumentArrowDownIcon, UserIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function IceContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    acceptPolicy: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const programs = [
    'Work and Travel USA',
    'Au Pair USA',
    'Camp Counselor',
    'Intern and Trainee USA',
    'Escuela de Idiomas',
    'Asesoría de Visas',
    'Canadá - Tu Proyecto de Vida',
    'H2B',
    'Seguros Internacionales',
    'Otro'
  ];

  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}
          >
            <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Contáctanos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            ¿Listo para comenzar tu aventura internacional? Completa el formulario y nuestro equipo de expertos te contactará para ayudarte a hacer realidad tu sueño.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                {/* Program Interest */}
                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-gray-900 mb-2">
                    Programa de interés
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors"
                  >
                    <option value="">Selecciona un programa</option>
                    {programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensaje
                  </label>
                  <div className="relative">
                    <ChatBubbleLeftRightIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-colors resize-none"
                      placeholder="Cuéntanos más sobre tus objetivos y expectativas..."
                    />
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptPolicy"
                      name="acceptPolicy"
                      checked={formData.acceptPolicy}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded"
                    />
                    <label htmlFor="acceptPolicy" className="text-sm text-gray-600 leading-relaxed">
                      Acepto el tratamiento de mis datos personales de acuerdo con la{' '}
                      <Link href="#" className="text-brand-gold hover:text-brand-orange font-semibold">
                        Política de Tratamiento de Datos Personales
                      </Link>
                      {' '}de ICE Colombia.
                    </label>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Política de Tratamiento de Datos Personales:</strong> En cumplimiento de lo estipulado en la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás disposiciones concordantes sobre protección de datos personales, ICE Colombia – International Cultural Experience, adopta la presente Política de Tratamiento de Datos Personales, mediante la cual se informa a los titulares de la información la manera en que recolectamos, almacenamos, usamos, transmitimos, transferimos y protegemos sus datos.
                    </p>
                  </div>

                  <Link
                    href="/politica-privacidad.pdf"
                    target="_blank"
                    className="inline-flex items-center text-brand-gold hover:text-brand-orange font-semibold text-sm group"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                    Descargar Política Completa
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.acceptPolicy}
                  className="w-full px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Contact */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-xl p-3 flex-shrink-0">
                    <PhoneIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                    <p className="text-brand-gold font-semibold">+57 321 3440057</p>
                    <p className="text-gray-600 text-sm">Manuel - Procesos Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl p-3 flex-shrink-0">
                    <EnvelopeIcon className="w-full h-full text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-brand-orange font-semibold">mercadeo@icebga.com</p>
                    <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-light/10 rounded-xl p-3 flex-shrink-0">
                    <MapPinIcon className="w-full h-full text-brand-light" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Oficina Principal</h4>
                    <p className="text-gray-600">Bucaramanga, Colombia</p>
                    <p className="text-gray-600 text-sm">Presencia en 4 países</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-brand-gold/5 to-brand-orange/5 rounded-2xl p-8 border border-brand-gold/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Acceso Rápido
              </h3>
              
              <div className="space-y-4">
                <Link
                  href="https://bit.ly/ProcesosICE"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-md group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">
                      WhatsApp Procesos
                    </h4>
                    <p className="text-sm text-gray-600">Chat directo con nuestro equipo</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                </Link>

                <Link
                  href="/programas"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-md group"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">
                      Ver Programas
                    </h4>
                    <p className="text-sm text-gray-600">Explora todas nuestras opciones</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}