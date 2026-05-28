"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, Globe } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Oficina Principal",
    details: "Carrera 45 # 56-79 Barrio Terrazas",
    extra: "Bucaramanga, Colombia"
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: "+75 3104994800",
    extra: "Lunes a Viernes, 8:00 AM - 6:00 PM"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info.col@icebga.com",
    extra: "Respuesta en menos de 24 horas"
  },
  {
    icon: Globe,
    title: "Oficinas Internacionales",
    details: "4 países",
    extra: "Colombia, Costa Rica, Ecuador, Perú"
  }
];

const officeHours = [
  { day: "Lunes - Viernes", hours: "8:00 AM - 6:00 PM" },
  { day: "Sábados", hours: "9:00 AM - 2:00 PM" },
  { day: "Domingos", hours: "Cerrado" }
];

const contactReasons = [
  "Información sobre programas",
  "Asesoría personalizada",
  "Proceso de aplicación",
  "Becas y financiamiento",
  "Documentación requerida",
  "Soporte estudiantil",
  "Servicios adicionales",
  "Feedback y sugerencias"
];

export default function IceContactoPage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-gray-900 via-brand-dark to-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Contáct<span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">anos</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Estamos aquí para ayudarte a hacer realidad tu sueño de estudiar en el extranjero
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Información de <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Contacto</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-brand-gold/20 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                    <p className="text-brand-gold font-semibold mb-2">{info.details}</p>
                    <p className="text-white/70 text-sm">{info.extra}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Hours */}
        <section className="relative py-20 bg-gradient-to-r from-brand-dark/50 to-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  Envíanos un <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Mensaje</span>
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent backdrop-blur-lg transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent backdrop-blur-lg transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent backdrop-blur-lg transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Motivo de Consulta
                      </label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent backdrop-blur-lg transition-all duration-300">
                        {contactReasons.map((reason) => (
                          <option key={reason} value={reason} className="bg-gray-800 text-white">
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent backdrop-blur-lg transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu interés en estudiar en el extranjero..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-brand-gold to-brand-orange text-brand-dark font-semibold py-4 px-8 rounded-lg hover:from-brand-orange hover:to-brand-gold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </motion.button>
                </form>
              </motion.div>

              {/* Office Hours & Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Office Hours */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/20">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-brand-gold" />
                    <h3 className="text-2xl font-bold text-white">Horarios de Atención</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                        <span className="text-white/80">{schedule.day}</span>
                        <span className="text-brand-gold font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Contacto Rápido</h3>
                  <div className="space-y-4">
                    <motion.a
                      href="tel:+753104994800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <Phone className="w-6 h-6 text-brand-gold" />
                      <div>
                        <p className="text-white font-semibold">Llamar Ahora</p>
                        <p className="text-white/70 text-sm">+75 3104994800</p>
                      </div>
                    </motion.a>
                    <motion.a
                      href="mailto:info.col@icebga.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <Mail className="w-6 h-6 text-brand-gold" />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-white/70 text-sm">info.col@icebga.com</p>
                      </div>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <MessageSquare className="w-6 h-6 text-brand-gold" />
                      <div>
                        <p className="text-white font-semibold">Chat en Vivo</p>
                        <p className="text-white/70 text-sm">Disponible ahora</p>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 border border-red-400/30">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    Emergencia 24/7
                  </h4>
                  <p className="text-white/80 mb-2">
                    Para estudiantes en el extranjero con emergencias
                  </p>
                  <p className="text-red-400 font-semibold text-lg">+1 (555) 911-HELP</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestra <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Ubicación</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Visítanos en nuestras oficinas o programa una cita virtual
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/20"
            >
              {/* Google Maps Embed */}
              <div className="w-full rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.146222160519!2d-73.10870562412826!3d7.109047716080183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fe7a087d5a7%3A0x396a441dd38f2b15!2sICE-%20International%20Cultural%20Experience!5e0!3m2!1sen!2sco!4v1760656981333!5m2!1sen!2sco" 
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <p className="text-lg font-semibold text-white">ICE - International Cultural Experience</p>
                </div>
                <p className="text-white/70">Carrera 45 # 56-79 Barrio Terrazas, Bucaramanga, Colombia</p>
                <motion.a
                  href="https://www.google.com/maps/dir//ICE-+International+Cultural+Experience,+Cra.+45+%2356-79,+Bucaramanga,+Santander/@7.109047716080183,-73.10870562412826,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8e683fe7a087d5a7:0x396a441dd38f2b15"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 bg-brand-gold text-brand-dark font-semibold py-2 px-6 rounded-lg hover:bg-brand-orange transition-all duration-300"
                >
                  Cómo llegar
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-dark/50 to-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Preguntas <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Frecuentes</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/20 text-center"
            >
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                ¿Tienes preguntas sobre nuestros programas, requisitos o proceso de aplicación? 
                Nuestro equipo de asesores especializados está listo para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/agendar">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-dark font-semibold py-3 px-8 rounded-full hover:from-brand-orange hover:to-brand-gold transition-all duration-300"
                  >
                    Agendar Consulta Gratuita
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white border border-white/20 font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Ver FAQs Completas
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
