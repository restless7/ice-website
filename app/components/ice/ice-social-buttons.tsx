"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const socialButtons = [
  {
    name: "WhatsApp",
    icon: "💬",
    href: "https://bit.ly/ProcesosICE",
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-white"
  },
  {
    name: "Instagram", 
    icon: "📷",
    href: "#",
    color: "bg-pink-500 hover:bg-pink-600",
    textColor: "text-white"
  },
  {
    name: "Facebook",
    icon: "📘", 
    href: "#",
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-white"
  },
  {
    name: "TikTok",
    icon: "🎵",
    href: "#",
    color: "bg-black hover:bg-gray-800",
    textColor: "text-white"
  },
  {
    name: "Chatbot",
    icon: "🤖",
    href: "#",
    color: "bg-brand-gold hover:bg-brand-orange",
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
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
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