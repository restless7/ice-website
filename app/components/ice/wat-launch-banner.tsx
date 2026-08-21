'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlaneTakeoff, Sparkles } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/app/components/ui/sheet';
import { WatLaunchForm } from './wat-launch-form';

export function WatLaunchBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#023047] bg-gradient-to-br from-[#023047] via-slate-900 to-indigo-950 text-white border-y border-blue-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl opacity-60 mix-blend-screen" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl opacity-60 mix-blend-screen" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Lanzamiento Oficial
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              ¡La Temporada <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-brand-orange">
                Work and Travel USA 2027
              </span> 
              <br className="hidden md:block"/> ya está abierta!
            </h2>
            
            <p className="text-lg md:text-xl text-slate-100 font-medium max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Regístrate en nuestra Info Meeting exclusiva. Un espacio donde resolveremos todas tus dudas y te explicaremos paso a paso cómo iniciar tu proceso con éxito para acceder a las primeras convocatorias de empleo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 z-10 w-full md:w-auto"
          >
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-900 font-extrabold text-lg md:text-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white via-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <PlaneTakeoff className="w-6 h-6 text-brand-orange relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="relative z-10 font-black text-slate-900">Regístrate aquí 🔥</span>
                  <ArrowRight className="w-5 h-5 relative z-10 text-slate-900 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg overflow-y-auto bg-gray-50/95 backdrop-blur-xl border-l border-white/20">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="text-2xl font-bold text-gray-900">Work & Travel 2027</SheetTitle>
                  <SheetDescription className="text-gray-600 text-base">
                    Completa tus datos para asegurar tu acceso a la Info Meeting oficial y dar el primer paso hacia tu verano en USA.
                  </SheetDescription>
                </SheetHeader>
                
                {/* Form inside Sheet */}
                <div className="mt-4">
                  <WatLaunchForm 
                    sourceCTA="Homepage Banner - WAT 2027 Launch" 
                    onSuccess={() => {
                      // Optional: keep it open so they see success message, or close after delay
                      setTimeout(() => setIsOpen(false), 4000);
                    }}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
