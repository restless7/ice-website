"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AgendarPage() {
  useEffect(() => {
    // Dynamically load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-gray-900 via-brand-dark to-black min-h-screen pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Agendar <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Reunión</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Selecciona el horario que mejor se adapte a ti para recibir una asesoría personalizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl min-h-[700px] border border-brand-gold/20"
          >
            {/* Calendly inline widget begin */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ice-colombia/asesoria?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=d4af37" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
            {/* Calendly inline widget end */}
          </motion.div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
