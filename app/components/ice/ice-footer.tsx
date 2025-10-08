"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function IceFooter() {
  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "ICExperiences", href: "/experiences" },
    { name: "ICE News", href: "/news" },
    { name: "Contáctanos", href: "/contacto" }
  ];

  // Programs as specified in outline section 2.8
  const programs = [
    { name: "Work and Travel USA", href: "/programas/summer-work-and-travel" },
    { name: "Au Pair USA", href: "/programas/au-pair-usa" },
    { name: "Camp Counselor", href: "/programas/camp-counselor" },
    { name: "Intern and Trainee USA", href: "/programas/interntrainee-usa" },
    { name: "Escuela de Idiomas", href: "/programas/escuela-de-idiomas-usa" },
    { name: "Asesoría de Visas", href: "/programas/asesoria-visa-turismo-usa" },
    { name: "Canadá - Tu Proyecto de Vida", href: "/programas/canada-tu-proyecto-de-vida" },
    { name: "Ver todos los programas", href: "/programas" }
  ];

  // Countries with operations as specified in outline
  const countries = [
    { name: "Colombia 🇨🇴", href: "/" },
    { name: "Costa Rica 🇨🇷", href: "/" },
    { name: "Ecuador 🇪🇨", href: "/" },
    { name: "Perú 🇵🇪", href: "/" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#", color: "hover:text-blue-400" },
    { name: "Instagram", icon: "📷", href: "#", color: "hover:text-pink-400" },
    { name: "WhatsApp", icon: "💬", href: "#", color: "hover:text-green-400" },
    { name: "LinkedIn", icon: "💼", href: "#", color: "hover:text-blue-300" },
    { name: "Twitter", icon: "🐦", href: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: "📺", href: "#", color: "hover:text-red-400" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">ICE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                  ICE Colombia
                </h3>
                <p className="text-sm text-white/70">International Cultural Experience</p>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Somos una agencia líder en Colombia en programas de intercambio, estudios en el exterior y asesoría de visas para jóvenes que quieren vivir una experiencia internacional.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <PhoneIcon className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">+57 321 3440057</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <EnvelopeIcon className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">mercadeo@icebga.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPinIcon className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Bucaramanga, Colombia</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Nuestros Programas</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-white/70 hover:text-brand-gold transition-colors duration-300 text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Countries - as specified in outline section 2.8 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Selecciona tu país</h4>
            <p className="text-white/60 text-sm mb-4">Operaciones en cuatro países</p>
            <ul className="space-y-3">
              {countries.map((country) => (
                <li key={country.name}>
                  <Link
                    href={country.href}
                    className="text-white/70 hover:text-brand-gold transition-colors duration-300 text-sm flex items-center space-x-2"
                  >
                    <span>{country.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          {/* Social Media */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 ${social.color} transform hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-brand-gold focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold rounded-lg hover:from-brand-orange hover:to-brand-gold transition-colors duration-300 whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GlobeAltIcon className="w-5 h-5 text-brand-gold" />
              <span>&copy; 2024 ICE Colombia - International Cultural Experience. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-brand-gold transition-colors duration-300">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-brand-gold transition-colors duration-300">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-brand-gold transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold"></div>
    </footer>
  );
}
