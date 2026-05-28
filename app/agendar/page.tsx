"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { motion } from "framer-motion";

export default function AgendarPage() {
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
          >
            <IceSchedulingWidget />
          </motion.div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
