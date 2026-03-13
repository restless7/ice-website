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
    { 
      name: "Facebook", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: "https://www.facebook.com/ice.com.co/", 
      color: "hover:text-blue-400" 
    },
    { 
      name: "Instagram", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.084 5.52.199 5.012.374a6.5 6.5 0 0 0-2.346 1.529 6.5 6.5 0 0 0-1.529 2.346C.862 4.757.747 5.331.711 6.278.676 7.226.662 7.633.662 11.254c0 3.621.014 4.028.049 4.976.036.947.151 1.521.326 2.029a6.5 6.5 0 0 0 1.529 2.346 6.5 6.5 0 0 0 2.346 1.529c.508.175 1.082.29 2.029.326.948.035 1.355.049 4.976.049 3.621 0 4.028-.014 4.976-.049.947-.036 1.521-.151 2.029-.326a6.5 6.5 0 0 0 2.346-1.529 6.5 6.5 0 0 0 1.529-2.346c.175-.508.29-1.082.326-2.029.035-.948.049-1.355.049-4.976 0-3.621-.014-4.028-.049-4.976-.036-.947-.151-1.521-.326-2.029a6.5 6.5 0 0 0-1.529-2.346A6.5 6.5 0 0 0 19.439.699C18.931.524 18.357.409 17.41.373 16.462.338 16.055.325 12.434.325L12.017 0zm0 2.165c3.557 0 3.983.016 5.38.072.918.042 1.416.196 1.748.327.44.171.754.375 1.084.705.33.33.534.644.705 1.084.131.332.285.83.327 1.748.056 1.397.072 1.823.072 5.38 0 3.557-.016 3.983-.072 5.38-.042.918-.196 1.416-.327 1.748-.171.44-.375.754-.705 1.084-.33.33-.644.534-1.084.705-.332.131-.83.285-1.748.327-1.397.056-1.823.072-5.38.072-3.557 0-3.983-.016-5.38-.072-.918-.042-1.416-.196-1.748-.327a2.92 2.92 0 0 1-1.084-.705 2.92 2.92 0 0 1-.705-1.084c-.131-.332-.285-.83-.327-1.748-.056-1.397-.072-1.823-.072-5.38 0-3.557.016-3.983.072-5.38.042-.918.196-1.416.327-1.748.171-.44.375-.754.705-1.084.33-.33.644-.534 1.084-.705.332-.131.83-.285 1.748-.327 1.397-.056 1.823-.072 5.38-.072z"/>
          <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ), 
      href: "https://www.instagram.com/icecolombia/", 
      color: "hover:text-pink-400" 
    },
    { 
      name: "WhatsApp", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
        </svg>
      ), 
      href: "https://wa.me/573104994800?text=Hola,%20estoy%20interesado%20en%20los%20programas%20de%20ICE", 
      color: "hover:text-green-400" 
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: "https://www.linkedin.com/company/ice-international-cultural-experience/", 
      color: "hover:text-blue-300" 
    }
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
                <span className="text-sm">+75 3104994800</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <EnvelopeIcon className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">info.col@icebga.com</span>
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
                    <div className="flex items-center justify-center">{social.icon}</div>
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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white/60 text-sm mt-8">
            <div className="flex flex-col items-start gap-3 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-5 h-5 text-brand-gold" />
                <span>&copy; 2024 ICE Colombia - International Cultural Experience. Todos los derechos reservados.</span>
              </div>
              <a
                href="https://www.apexaisolutions.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors duration-300 font-sans relative z-10"
              >
                <img src="/images/apex-logo.png" alt="Apex AI Solutions" className="w-4 h-4 object-contain brightness-0 invert opacity-70" />
                Powered by Apex AI Solutions
              </a>
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
