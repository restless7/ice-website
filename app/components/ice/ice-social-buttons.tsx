"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const socialButtons = [
  {
    name: "WhatsApp",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
      </svg>
    ),
    href: "https://wa.me/573104994800?text=Hola,%20estoy%20interesado%20en%20los%20programas%20de%20ICE",
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-white"
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
    color: "bg-gradient-to-tr from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
    textColor: "text-white"
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    href: "https://www.facebook.com/ice.com.co/",
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-white"
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: "https://www.linkedin.com/company/ice-international-cultural-experience/",
    color: "bg-blue-700 hover:bg-blue-800",
    textColor: "text-white"
  }
];

export default function IceSocialButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="flex flex-col items-center space-y-3">
        {/* Social Buttons */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            scale: isExpanded ? 1 : 0.8,
            y: isExpanded ? 0 : 20
          }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
          className={`flex flex-col space-y-3 ${!isExpanded ? 'pointer-events-none' : ''}`}
        >
          {socialButtons.slice(0, -1).map((social, index) => (
            <motion.div
              key={social.name}
              initial={false}
              animate={{
                opacity: isExpanded ? 1 : 0,
                x: isExpanded ? 0 : -20
              }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full ${social.color} ${social.textColor} flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group`}
                title={social.name}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Toggle Button (Chatbot) */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full bg-brand-gold hover:bg-brand-orange text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${isExpanded ? 'rotate-45' : ''}`}
          title="Chatbot / Redes Sociales"
        >
          <span className="text-xl">
            {isExpanded ? "✕" : "🤖"}
          </span>
        </motion.button>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-gray-600 text-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm"
        >
          Ayuda
        </motion.div>
      </div>
    </div>
  );
}