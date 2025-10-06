'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  RocketLaunchIcon,
  DocumentArrowDownIcon,
  CalendarDaysIcon,
  UserIcon,
  SparklesIcon,
  TrophyIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function FinalCTA() {
  const [activeAction, setActiveAction] = useState(0);

  const proximosPasos = [
    {
      id: 0,
      titulo: 'Alineación del Roadmap de Transformación',
      descripcion: 'Consolidación estratégica para iniciar la implementación',
      icon: CheckCircleIcon,
      color: 'from-green-600 to-emerald-600',
      urgencia: 'PRIORITARIO - Esta semana',
      acciones: [
        'Presentación completa del roadmap al equipo',
        'Definición de recursos y cronograma',
        'Validación del alcance de 6 meses',
        'Designación de Sebastián García como líder técnico'
      ],
      beneficio: 'Inicio coordinado = máxima eficiencia de implementación'
    },
    {
      id: 1,
      titulo: 'Revisión Técnica Detallada',
      descripción: 'Análisis profundo de arquitectura y requisitos',
      icon: DocumentTextIcon,
      color: 'from-blue-600 to-indigo-600',
      urgencia: 'ALTO - Próxima semana',
      acciones: [
        'Workshop técnico con equipo ICE',
        'Validación de infraestructura actual',
        'Refinamiento de timeline y entregables',
        'Definición de KPIs y métricas'
      ],
      beneficio: 'Implementación sin sorpresas ni desviaciones'
    },
    {
      id: 2,
      titulo: 'Reunión con Sebastián García',
      descripcion: 'Sesión estratégica con el líder de implementación',
      icon: UserIcon,
      color: 'from-purple-600 to-pink-600',
      urgencia: 'MEDIO - Esta semana',
      acciones: [
        'Sesión de Q&A técnico y estratégico',
        'Review de casos de éxito similares',
        'Discusión de riesgos y mitigaciones',
        'Alineación de expectativas y timelines'
      ],
      beneficio: 'Confianza total en la ejecución del plan'
    }
  ];

  const arquitecturaTecnica = {
    documentos: [
      'Arquitectura de Seguridad Detallada (42 páginas)',
      'Plan de Implementación por Fases (28 páginas)', 
      'Análisis de ROI y Business Case (15 páginas)',
      'Framework de Compliance ISO 27001 (35 páginas)'
    ],
    casos: [
      'Caso de Éxito: Fintech Colombiana (+300% crecimiento)',
      'Caso de Éxito: SaaS B2B (+250% conversión enterprise)',
      'Benchmark: ICE vs. Competencia en Seguridad'
    ]
  };

  return (
    <section id="final-cta-section" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Elementos de fondo inspiradores */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_70%)]" />
        
        {/* Partículas de éxito flotantes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60"
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 9}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header de Liderazgo */}
        <motion.div 
          className="text-center max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold">
            MOMENTO DE LIDERAZGO
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ICE: Líder en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 block mt-2">
              Seguridad y Confianza
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            Este es el momento decisivo. Con <strong className="text-indigo-600">Sebastián García liderando</strong> la transformación 
            y <strong className="text-purple-600">Apex como socio tecnológico</strong>, ICE tiene todo para 
            convertirse en <strong className="text-gray-900">el referente indiscutible</strong> del mercado.
          </p>

          {/* Visión de Liderazgo */}
          <motion.div 
            className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <TrophyIcon className="w-8 h-8 text-indigo-600" />
              Visión 2025: ICE Como Líder del Mercado
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-indigo-600 mb-2">🥇</h4>
                <p className="text-gray-700 font-semibold">Proveedor #1 en Seguridad</p>
                <p className="text-sm text-gray-600">Certificación ISO 27001 completa</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-purple-600 mb-2">💎</h4>
                <p className="text-gray-700 font-semibold">Partner Premium de Apex</p>
                <p className="text-sm text-gray-600">Alianza estratégica diferenciada</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-600 mb-2">🚀</h4>
                <p className="text-gray-700 font-semibold">Crecimiento Exponencial</p>
                <p className="text-sm text-gray-600">3x más rápido que competencia</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Próximos Pasos Accionables */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            3 Acciones para Comenzar la Transformación
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {proximosPasos.map((paso, index) => (
              <motion.div
                key={paso.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setActiveAction(index)}
                className="cursor-pointer"
              >
                <Card className={`h-full border-2 shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  activeAction === index ? 'ring-4 ring-blue-200 border-blue-300' : 'border-gray-200'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${paso.color} shadow-lg`}>
                        <paso.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <Badge className={`mb-2 text-xs font-bold ${
                          paso.urgencia.includes('CRÍTICO') ? 'bg-red-100 text-red-700' :
                          paso.urgencia.includes('ALTO') ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {paso.urgencia}
                        </Badge>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {paso.titulo}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {paso.acciones.map((accion, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {accion}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 text-sm mb-1">Beneficio Inmediato:</h5>
                      <p className="text-green-700 text-sm">{paso.beneficio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presentación del Roadmap y Checklist de Implementación */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            📋 Checklist de Implementación - ICE Ciberseguridad
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Roadmap Overview */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-2xl border border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <RocketLaunchIcon className="w-10 h-10 text-indigo-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Roadmap de Transformación</h3>
                    <p className="text-gray-600">6 meses hacia el liderazgo en seguridad</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-indigo-100">
                    <span className="font-medium text-gray-800">Duración Total</span>
                    <Badge className="bg-indigo-100 text-indigo-800">6 Meses</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-indigo-100">
                    <span className="font-medium text-gray-800">Fases de Implementación</span>
                    <Badge className="bg-purple-100 text-purple-800">4 Etapas</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-indigo-100">
                    <span className="font-medium text-gray-800">Líder Técnico</span>
                    <Badge className="bg-green-100 text-green-800">Sebastián García</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/70 rounded-lg border border-indigo-100">
                    <span className="font-medium text-gray-800">Certificación Objetivo</span>
                    <Badge className="bg-amber-100 text-amber-800">ISO 27001</Badge>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 group"
                >
                  <DocumentTextIcon className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Ver Roadmap Detallado
                </Button>
              </CardContent>
            </Card>
            
            {/* Implementation Checklist */}
            <Card className="bg-white shadow-2xl border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Checklist de Progreso</h3>
                    <p className="text-gray-600">Seguimiento detallado del equipo</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Saneamiento de Base de Datos</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Creación de Arquitectura DB</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="w-5 h-5 border-2 border-yellow-400 rounded-full bg-white" />
                    <span className="text-yellow-800 font-medium">Implementación de Seguridad</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="w-5 h-5 border-2 border-yellow-400 rounded-full bg-white" />
                    <span className="text-yellow-800 font-medium">Configuración de Monitoreo</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full bg-white" />
                    <span className="text-gray-600 font-medium">Certificación ISO 27001</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full bg-white" />
                    <span className="text-gray-600 font-medium">Auditoria y Compliance</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-blue-800">Progreso General</span>
                    <span className="text-2xl font-bold text-blue-600">33%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                  <p className="text-blue-700 text-sm mt-2">2 de 6 hitos completados</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Contacto Directo con Sebastián */}
        <motion.div 
          className="text-center p-8 bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold">Sebastián García</h3>
              <p className="text-indigo-200">Lead Architect & Security Expert</p>
            </div>
          </div>
          
          <h4 className="text-xl font-bold mb-4">
            ¿Preguntas sobre la implementación? Hablemos directamente.
          </h4>
          
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Como líder técnico de esta transformación, estoy disponible para responder cualquier pregunta, 
            discutir detalles específicos de ICE, y asegurar que el roadmap sea perfecto para sus necesidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4"
            >
              <PhoneIcon className="mr-2 w-5 h-5" />
              Agendar Call Estratégico
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-semibold px-8 py-4"
            >
              <CalendarDaysIcon className="mr-2 w-5 h-5" />
              Ver Calendario Disponible
            </Button>
          </div>
        </motion.div>

        {/* Mensaje Final de Urgencia */}
        <motion.div 
          className="text-center mt-12 p-6 bg-amber-50 border-2 border-amber-200 rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-amber-800 mb-2">
            ⚡ Ventana de Oportunidad: Limitada
          </h4>
          <p className="text-amber-700 leading-relaxed">
            Las certificaciones de seguridad y el posicionamiento de liderazgo son ventajas de 
            <strong> "first mover"</strong>. El primer actor en obtener ISO 27001 y posicionarse 
            como "el más seguro" domina el mercado. <strong>ICE puede ser ese actor — pero solo si actúa ahora.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
