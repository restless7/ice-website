'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { 
  ExclamationTriangleIcon, 
  ShieldExclamationIcon, 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function RiesgosActuales() {
  const riesgos = [
    {
      id: 'cumplimiento',
      title: 'Cumplimiento Normativo',
      subtitle: 'Preparándose para el crecimiento regulado',
      icon: DocumentCheckIcon,
      iconColor: 'text-amber-600',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      riesgoActual: 'Sin marcos de cumplimiento establecidos',
      impacto: 'Potenciales barreras regulatorias al escalar',
      oportunidad: 'Establecer liderazgo en cumplimiento desde el inicio',
      metricas: [
        { label: 'Regulaciones aplicables', value: '12+', trend: 'up' },
        { label: 'Tiempo de implementación', value: '3-6 meses', trend: 'neutral' },
        { label: 'ROI en cumplimiento', value: '340%', trend: 'up' }
      ]
    },
    {
      id: 'confianza',
      title: 'Confianza del Cliente',
      subtitle: 'La seguridad como diferenciador competitivo',
      icon: UserGroupIcon,
      iconColor: 'text-blue-600',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      riesgoActual: 'Ausencia de certificaciones de seguridad',
      impacto: 'Limitación en clientes enterprise y grandes cuentas',
      oportunidad: 'Posicionarse como el proveedor más seguro del mercado',
      metricas: [
        { label: 'Incremento en conversión', value: '+65%', trend: 'up' },
        { label: 'Retención de clientes', value: '+40%', trend: 'up' },
        { label: 'Valor promedio contrato', value: '+85%', trend: 'up' }
      ]
    },
    {
      id: 'escalabilidad',
      title: 'Escalabilidad Segura',
      subtitle: 'Crecimiento sin comprometer la seguridad',
      icon: ChartBarIcon,
      iconColor: 'text-green-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      riesgoActual: 'Arquitectura sin consideraciones de seguridad escalable',
      impacto: 'Costos exponenciales de retrofitting de seguridad',
      oportunidad: 'Arquitectura segura por diseño que crece con el negocio',
      metricas: [
        { label: 'Reducción costos futuros', value: '70%', trend: 'up' },
        { label: 'Velocidad de despliegue', value: '+3x', trend: 'up' },
        { label: 'Tiempo al mercado', value: '-50%', trend: 'down' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="riesgos-actuales-section" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
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
          <Badge className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 border-red-200 mb-6 px-6 py-2 text-sm font-semibold">
            ANÁLISIS ESTRATÉGICO
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Oportunidades de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 block mt-2">
              Liderazgo Estratégico
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Tres áreas clave donde la implementación proactiva de ciberseguridad 
            <strong className="text-gray-900"> transformará a ICE en líder del mercado</strong> y 
            <strong className="text-gray-900"> multiplicará el valor de la alianza con Apex</strong>.
          </p>
        </motion.div>

        {/* Grid de Tarjetas de Riesgo */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {riesgos.map((riesgo, index) => (
            <motion.div
              key={riesgo.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br ${riesgo.bgColor} border-2 ${riesgo.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 transform perspective-1000`}>
                <CardHeader className="pb-4">
                  {/* Icono y Título */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white/80 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <riesgo.icon className={`w-8 h-8 ${riesgo.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {riesgo.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {riesgo.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Métricas Destacadas */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {riesgo.metricas.map((metrica, idx) => (
                      <div key={idx} className="text-center p-2 bg-white/50 rounded-lg">
                        <div className={`flex items-center justify-center gap-1 ${
                          metrica.trend === 'up' ? 'text-green-600' : 
                          metrica.trend === 'down' ? 'text-blue-600' : 'text-gray-600'
                        }`}>
                          {metrica.trend === 'up' && <ArrowTrendingUpIcon className="w-3 h-3" />}
                          <span className="text-sm font-bold">{metrica.value}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-tight">{metrica.label}</p>
                      </div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Estado Actual */}
                  <div className="space-y-4">
                    <div className="p-4 bg-white/60 rounded-xl border border-white/80">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        Estado Actual
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {riesgo.riesgoActual}
                      </p>
                    </div>

                    <div className="p-4 bg-red-50/80 rounded-xl border border-red-100">
                      <h4 className="font-semibold text-red-800 text-sm mb-2 flex items-center gap-2">
                        <ExclamationTriangleIcon className="w-4 h-4 text-red-600" />
                        Impacto de Inacción
                      </h4>
                      <p className="text-sm text-red-700 leading-relaxed">
                        {riesgo.impacto}
                      </p>
                    </div>

                    <div className="p-4 bg-green-50/80 rounded-xl border border-green-100">
                      <h4 className="font-semibold text-green-800 text-sm mb-2 flex items-center gap-2">
                        <ArrowTrendingUpIcon className="w-4 h-4 text-green-600" />
                        Oportunidad Estratégica
                      </h4>
                      <p className="text-sm text-green-700 leading-relaxed font-medium">
                        {riesgo.oportunidad}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje de Transición */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              La Solución: <span className="text-blue-600">Arquitectura Segura por Diseño</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              En lugar de ver estos desafíos como obstáculos, los transformamos en 
              <strong className="text-blue-600"> ventajas competitivas decisivas</strong>. 
              Nuestra propuesta convierte cada área de riesgo en un 
              <strong className="text-green-600"> multiplicador de valor</strong> para ICE + Apex.
            </p>
            
            <motion.div 
              className="mt-6 flex justify-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-6 text-blue-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-8 8h4v8h8v-8h4l-8-8z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
