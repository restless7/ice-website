'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroCiberseguridad from './hero-ciberseguridad';
import RiesgosActuales from './riesgos-actuales';
import SolucionArquitectura from './solucion-arquitectura';
import RoadmapImplementacion from './roadmap-implementacion';
import ValorNegocio from './valor-negocio';
import ImplementationChecklist from './implementation-checklist';
import FinalCTA from './final-cta';

export default function PageCiberseguridadICE() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO y Meta Tags implícitos */}
      <div className="hidden">
        {/* Keywords para SEO: ciberseguridad colombia, ice apex security, seguridad empresarial, iso 27001, compliance */}
      </div>

      {/* Sección Hero - Cimientos Seguros para un Crecimiento Exponencial */}
      <section id="hero">
        <HeroCiberseguridad />
      </section>

      {/* Sección de Riesgos Actuales - Oportunidades de Liderazgo Estratégico */}
      <section id="riesgos">
        <RiesgosActuales />
      </section>

      {/* Sección de Solución - Arquitectura Segura por Diseño */}  
      <section id="solucion">
        <SolucionArquitectura />
      </section>

      {/* Sección de Roadmap - Plan de Ejecución 4 Fases */}
      <section id="roadmap">
        <RoadmapImplementacion />
      </section>

      {/* Sección de Valor de Negocio - Para la Junta Directiva */}
      <section id="valor-negocio">
        <ValorNegocio />
      </section>

      {/* Sección de Checklist de Implementación - Seguimiento del Equipo */}
      <section id="implementation-checklist">
        <ImplementationChecklist />
      </section>

      {/* Sección Final CTA - Momento de Liderazgo */}
      <section id="final-cta">
        <FinalCTA />
      </section>

      {/* Floating Navigation Helper - Solo visible en desarrollo */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div 
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="space-y-1">
            <button 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Hero
            </button>
            <button 
              onClick={() => document.getElementById('riesgos')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Riesgos
            </button>
            <button 
              onClick={() => document.getElementById('solucion')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Solución
            </button>
            <button 
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Roadmap
            </button>
            <button 
              onClick={() => document.getElementById('valor-negocio')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Valor
            </button>
            <button 
              onClick={() => document.getElementById('implementation-checklist')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Checklist
            </button>
            <button 
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="block w-full text-left px-2 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              CTA
            </button>
          </div>
        </motion.div>
      )}

      {/* Progress Indicator */}
      <motion.div 
        className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-gray-700">ICE × APEX</span>
        </div>
      </motion.div>
    </div>
  );
}
