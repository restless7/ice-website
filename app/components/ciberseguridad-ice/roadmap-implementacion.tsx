'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  ServerIcon,
  RocketLaunchIcon,
  EyeIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function RoadmapImplementacion() {
  const [activeFase, setActiveFase] = useState(0);

  const fases = [
    {
      id: 0,
      numero: '01',
      titulo: 'Infraestructura Segura',
      subtitulo: 'Fundación sólida y escalable',
      duracion: '4-6 semanas',
      color: 'from-slate-600 to-gray-700',
      bgColor: 'from-slate-50 to-gray-50',
      icon: ServerIcon,
      lider: 'Sebastián García',
      rol: 'Architect Lead',
      descripcion: 'Establecimiento de infraestructura base con controles de seguridad integrados desde el primer día.',
      entregables: [
        'Servidores ICE hardenizados y configurados',
        'Arquitectura cloud híbrida SOC2 compliant',
        'Red zero-trust con microsegmentación',
        'Backup y disaster recovery automatizado'
      ],
      hitos: [
        { tarea: 'Hardening servidores ICE', semana: 1, completado: true },
        { tarea: 'Configuración cloud seguro', semana: 2, completado: true },
        { tarea: 'Implementación zero-trust', semana: 4, completado: false },
        { tarea: 'Testing y validación', semana: 6, completado: false }
      ],
      riesgos: ['Compatibilidad con sistemas legacy', 'Tiempo de migración'],
      beneficios: ['Base sólida para crecimiento', 'Reducción 70% vulnerabilidades']
    },
    {
      id: 1,
      numero: '02',
      titulo: 'Despliegue Aplicaciones',
      subtitulo: 'CRM, ERP y Portal con Security by Design',
      duracion: '6-8 semanas',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      icon: RocketLaunchIcon,
      lider: 'Sebastián García',
      rol: 'Implementation Lead',
      descripcion: 'Despliegue de aplicaciones críticas con controles de seguridad nativos y certificaciones de cumplimiento.',
      entregables: [
        'CRM Salesforce con SSO y encryption',
        'ERP integrado con controles RBAC',
        'Portal cliente con 2FA y audit trail',
        'APIs seguras con rate limiting y WAF'
      ],
      hitos: [
        { tarea: 'Despliegue CRM seguro', semana: 2, completado: false },
        { tarea: 'Integración ERP + seguridad', semana: 4, completado: false },
        { tarea: 'Portal cliente + 2FA', semana: 6, completado: false },
        { tarea: 'Certificación APIs', semana: 8, completado: false }
      ],
      riesgos: ['Integración compleja', 'Training usuarios'],
      beneficios: ['Productividad +40%', 'Confianza cliente +65%']
    },
    {
      id: 2,
      numero: '03',
      titulo: 'Monitoreo & Detección',
      subtitulo: 'SIEM 24/7 y respuesta automatizada',
      duracion: '3-4 semanas',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      icon: EyeIcon,
      lider: 'Sebastián García',
      rol: 'Security Operations Lead',
      descripcion: 'Implementación de capacidades avanzadas de detección, monitoreo continuo y respuesta automatizada a incidentes.',
      entregables: [
        'SIEM centralizado con dashboards ejecutivos',
        'Threat intelligence y correlation rules',
        'SOC virtual 24/7 con alertas inteligentes',
        'Playbooks de respuesta automatizada'
      ],
      hitos: [
        { tarea: 'Instalación SIEM', semana: 1, completado: false },
        { tarea: 'Configuración alertas', semana: 2, completado: false },
        { tarea: 'SOC virtual setup', semana: 3, completado: false },
        { tarea: 'Testing respuesta', semana: 4, completado: false }
      ],
      riesgos: ['Falsos positivos', 'Tuning inicial'],
      beneficios: ['Detección 24/7', 'MTTR reducido 80%']
    },
    {
      id: 3,
      numero: '04',
      titulo: 'Gobernanza & Cumplimiento',
      subtitulo: 'ISO 27001, auditorías y certificaciones',
      duracion: '8-12 semanas',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      icon: ShieldCheckIcon,
      lider: 'Sebastián García',
      rol: 'Compliance & Governance Lead',
      descripcion: 'Establecimiento de framework completo de gobernanza, políticas de seguridad y preparación para certificaciones.',
      entregables: [
        'Políticas de seguridad empresarial',
        'Programa de awareness y training',
        'Auditorías internas automatizadas',
        'Preparación certificación ISO 27001'
      ],
      hitos: [
        { tarea: 'Políticas de seguridad', semana: 3, completado: false },
        { tarea: 'Programa training', semana: 6, completado: false },
        { tarea: 'Auditoría interna', semana: 9, completado: false },
        { tarea: 'Pre-certificación ISO', semana: 12, completado: false }
      ],
      riesgos: ['Complejidad normativa', 'Adopción cultural'],
      beneficios: ['Certificación ISO 27001', 'Ventaja competitiva decisiva']
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const faseVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="roadmap-section" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        {/* Líneas conectoras de fondo */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"
              style={{
                top: `${30 + i * 25}%`,
                width: '100%',
                left: '0%',
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header de Sección */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200 mb-6 px-6 py-2 text-sm font-semibold">
            ROADMAP DE IMPLEMENTACIÓN
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plan de Ejecución
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 block mt-2">
              4 Fases - 6 Meses
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Roadmap estratégico con <strong className="text-indigo-600">Sebastián García como líder técnico</strong> 
            de la transformación de seguridad de ICE + Apex.
          </p>

          {/* Líder del Proyecto - Destacado */}
          <motion.div 
            className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl border border-indigo-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
              <UserIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900">Sebastián García</h3>
              <p className="text-sm text-gray-600">Lead Architect & Implementation Director</p>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
              LIDERANDO LA TRANSFORMACIÓN
            </Badge>
          </motion.div>
        </motion.div>

        {/* Timeline Visual */}
        <motion.div 
          className="relative"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Línea central del timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-purple-300 to-pink-200 rounded-full hidden lg:block" />
          
          {/* Fases del Roadmap */}
          <div className="space-y-12 lg:space-y-16">
            {fases.map((fase, index) => (
              <motion.div
                key={fase.id}
                variants={faseVariants}
                className="relative"
              >
                {/* Punto en el timeline */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden lg:block" />
                
                {/* Card de la Fase */}
                <div className="lg:ml-20">
                  <Card 
                    className={`bg-gradient-to-br ${fase.bgColor} border-2 border-opacity-20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-102 ${
                      activeFase === index ? 'ring-4 ring-indigo-200 ring-opacity-50' : ''
                    }`}
                    onClick={() => setActiveFase(index)}
                  >
                    <CardHeader className="pb-4">
                      {/* Header de Fase */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${fase.color} shadow-lg`}>
                          <fase.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-white/80 text-gray-700 font-bold">
                              FASE {fase.numero}
                            </Badge>
                            <Badge variant="outline" className="border-gray-300 text-gray-600">
                              <ClockIcon className="w-3 h-3 mr-1" />
                              {fase.duracion}
                            </Badge>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {fase.titulo}
                          </h3>
                          <p className="text-gray-600 text-base font-medium">
                            {fase.subtitulo}
                          </p>
                        </div>
                        
                        {/* Líder de Fase */}
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                            <UserIcon className="w-4 h-4" />
                            <span className="font-semibold">{fase.lider}</span>
                          </div>
                          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs">
                            {fase.rol}
                          </Badge>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {fase.descripcion}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {activeFase === index && (
                        <motion.div 
                          className="space-y-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Entregables */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <DocumentTextIcon className="w-5 h-5 text-indigo-600" />
                              Entregables Clave
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {fase.entregables.map((entregable, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-2 bg-white/60 rounded-lg">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{entregable}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Hitos del Timeline */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <ChartBarIcon className="w-5 h-5 text-purple-600" />
                              Timeline de Hitos
                            </h4>
                            <div className="space-y-2">
                              {fase.hitos.map((hito, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    hito.completado 
                                      ? 'bg-green-500 border-green-500' 
                                      : 'border-gray-300 bg-white'
                                  }`}>
                                    {hito.completado && (
                                      <CheckCircleIcon className="w-3 h-3 text-white" />
                                    )}
                                  </div>
                                  
                                  <div className="flex-1">
                                    <span className={`text-sm font-medium ${
                                      hito.completado ? 'text-green-700' : 'text-gray-700'
                                    }`}>
                                      {hito.tarea}
                                    </span>
                                  </div>
                                  
                                  <Badge variant="outline" className="text-xs">
                                    Semana {hito.semana}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Beneficios y Riesgos */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 bg-green-50/80 rounded-lg border border-green-200">
                              <h5 className="font-semibold text-green-800 mb-2">Beneficios Esperados</h5>
                              <ul className="space-y-1">
                                {fase.beneficios.map((beneficio, idx) => (
                                  <li key={idx} className="text-sm text-green-700 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    {beneficio}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="p-4 bg-amber-50/80 rounded-lg border border-amber-200">
                              <h5 className="font-semibold text-amber-800 mb-2">Riesgos a Mitigar</h5>
                              <ul className="space-y-1">
                                {fase.riesgos.map((riesgo, idx) => (
                                  <li key={idx} className="text-sm text-amber-700 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                    {riesgo}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final del Roadmap */}
        <motion.div 
          className="mt-16 text-center p-8 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 Listos para Comenzar la Transformación
          </h3>
          <p className="text-indigo-100 mb-6 text-lg max-w-3xl mx-auto">
            Con Sebastián García liderando la implementación, ICE + Apex tendrá el roadmap más sólido 
            y ejecutable del mercado. <strong className="text-white">6 meses para convertirse en el líder indiscutible</strong> 
            en seguridad y confianza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-8 py-4"
              onClick={() => document.getElementById('valor-negocio-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver el Impacto en el Negocio
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 font-semibold px-8 py-4"
            >
              Descargar Roadmap Detallado
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
