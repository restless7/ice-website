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
    { name: "Inicio", href: "/ice-webpage" },
    { name: "Nosotros", href: "/ice-webpage#nosotros" },
    { name: "Portafolio", href: "/ice-webpage#portafolio" },
    { name: "ICExperiences", href: "/ice-webpage#icexperiences" }
  ];

  const programs = [
    { name: "Intercambio Académico", href: "/ice-webpage#programas" },
    { name: "Programas de Idiomas", href: "/ice-webpage#programas" },
    { name: "Experiencias Culturales", href: "/ice-webpage#programas" },
    { name: "Voluntariado Internacional", href: "/ice-webpage#programas" }
  ];

  const destinations = [
    "Estados Unidos",
    "Reino Unido", 
    "Francia",
    "Alemania",
    "Italia",
    "Japón",
    "Costa Rica",
    "Tailandia"
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-purple-900 border-t border-lime-400/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-lime-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/5 rounded-full blur-2xl" />
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
            <Link href="/ice-webpage" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white/20 rounded border-2 border-dashed border-white/40 flex items-center justify-center">
                  <span className="text-xs text-white/60">IMG</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                  ICE
                </h3>
                <p className="text-sm text-white/70">Instituto Cultural de Educación</p>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Transformamos vidas a través de experiencias educativas internacionales. 
              Tu puerta al mundo te está esperando.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <PhoneIcon className="w-5 h-5 text-lime-400" />
                <span className="text-sm">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <EnvelopeIcon className="w-5 h-5 text-lime-400" />
                <span className="text-sm">info@ice-educacion.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPinIcon className="w-5 h-5 text-lime-400" />
                <span className="text-sm">Ciudad de México, CDMX</span>
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
                    className="text-white/70 hover:text-lime-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ice-webpage#ice-news"
                  className="text-white/70 hover:text-lime-400 transition-colors duration-300 text-sm"
                >
                  ICE News
                </Link>
              </li>
              <li>
                <Link
                  href="/ice-webpage#contacto"
                  className="text-white/70 hover:text-lime-400 transition-colors duration-300 text-sm"
                >
                  Contácto
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Programas</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-white/70 hover:text-lime-400 transition-colors duration-300 text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Destinos Populares</h4>
            <div className="grid grid-cols-2 gap-2">
              {destinations.map((destination) => (
                <div
                  key={destination}
                  className="text-white/70 text-sm hover:text-lime-400 transition-colors duration-300 cursor-pointer"
                >
                  {destination}
                </div>
              ))}
            </div>
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
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-lime-400 focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold rounded-lg hover:from-lime-500 hover:to-green-600 transition-colors duration-300 whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GlobeAltIcon className="w-5 h-5 text-lime-400" />
              <span>&copy; 2024 ICE - Instituto Cultural de Educación. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="hover:text-lime-400 transition-colors duration-300">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-lime-400 transition-colors duration-300">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-lime-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500"></div>
    </footer>
  );
}
