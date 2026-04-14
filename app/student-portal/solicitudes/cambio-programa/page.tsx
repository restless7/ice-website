"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Target } from "lucide-react";

export default function CambioProgramaRequestPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-brand-gold selection:text-black p-4 sm:p-8">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/student-portal/dashboard" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-bold uppercase tracking-wider">Volver al Dashboard</span>
        </Link>

        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-gold/20 shadow-[0_0_30px_rgba(255,183,3,0.15)]">
              <Target className="w-10 h-10 text-brand-gold" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black mb-4">Cambio de Programa</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              El asistente automatizado de transferencia de programa se encuentra temporalmente en construcción.
              Para gestionar un cambio urgente, por favor contacta a tu coordinador asignado.
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
              <Clock className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">Próximamente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
