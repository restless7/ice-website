"use client";

import { motion } from "framer-motion";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";

export default function IceFinalCTASection() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Teléfono",
      details: "+52 (55) 1234-5678",
      subtitle: "Lun - Vie 9:00 AM - 6:00 PM"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "info@ice-educacion.com",
      subtitle: "Respuesta en menos de 24h"
    },
    {
      icon: MapPinIcon,
      title: "Ubicación",
      details: "Ciudad de México, CDMX",
      subtitle: "Oficinas principales"
    },
    {
      icon: ClockIcon,
      title: "Horarios",
      details: "Lun - Vie: 9:00 - 18:00",
      subtitle: "Sáb: 10:00 - 14:00"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", color: "from-blue-500 to-blue-600" },
    { name: "Instagram", icon: "📷", color: "from-pink-500 to-purple-600" },
    { name: "WhatsApp", icon: "💬", color: "from-green-500 to-green-600" },
    { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-indigo-600" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-lime-400/20 rounded-full blur-2xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-400/15 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-green-400/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Tu
            <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent ml-4">
              aventura
            </span>
            <br />
            comienza aquí
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            No esperes más para cambiar tu vida. Da el primer paso hacia una experiencia que te transformará para siempre.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Comienza tu aventura</span>
              <PaperAirplaneIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-lime-400 text-lime-400 font-semibold text-lg rounded-full hover:bg-lime-400/10 transition-colors duration-300"
            >
              Agendar consulta gratuita
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-lime-400 to-green-500 p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <contact.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
              <p className="text-lime-400 font-semibold mb-1">{contact.details}</p>
              <p className="text-white/60 text-sm">{contact.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicita más información
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>
              
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300"
              />
              
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300"
              />
              
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-lime-400 focus:outline-none transition-colors duration-300">
                <option value="">Programa de interés</option>
                <option value="intercambio">Intercambio Académico</option>
                <option value="idiomas">Programas de Idiomas</option>
                <option value="cultural">Experiencias Culturales</option>
              </select>
              
              <textarea
                placeholder="Mensaje (opcional)"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300 resize-none"
              />
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Enviar solicitud
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegir ICE?</h3>
              <ul className="space-y-4">
                {[
                  "15+ años de experiencia en educación internacional",
                  "500+ estudiantes satisfechos en todo el mundo",
                  "Alianzas con universidades de prestigio",
                  "Apoyo personalizado antes, durante y después",
                  "Precios competitivos y opciones de financiamiento"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <div className="w-2 h-2 bg-lime-400 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-lime-400/20 to-green-400/20 backdrop-blur-lg rounded-full border border-lime-400/30">
            <span className="text-2xl">✈️</span>
            <p className="text-white font-medium">
              <span className="text-lime-400">ICE</span> - Tu puerta al mundo
            </p>
            <span className="text-2xl">🌍</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
