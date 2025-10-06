'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  ShieldCheckIcon, 
  ServerIcon, 
  CloudIcon,
  LockClosedIcon,
  EyeIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  TrophyIcon,
  ChartBarSquareIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function SolucionArquitectura() {
  const [activeLayer, setActiveLayer] = useState(0);

  const capasSeguridad = [
    {
      id: 0,
      name: 'Infraestructura Base',
      description: 'Servidores ICE + Cloud híbrido seguro',
      color: 'from-slate-600 to-gray-700',
      icon: ServerIcon,
      items: ['Servidores ICE Hardened', 'Cloud AWS/Azure SOC2', 'Red Zero-Trust']
    },
    {
      id: 1,
      name: 'Controles Preventivos',
      description: 'IAM/RBAC + Cifrado + Firewalls',
      color: 'from-blue-500 to-cyan-500',
      icon: LockClosedIcon,
      items: ['Identity Management', 'Cifrado End-to-End', 'WAF + Firewall']
    },
    {
      id: 2,
      name: 'Monitoreo Continuo',
      description: 'SIEM + Detection + Response',
      color: 'from-orange-400 to-red-500',
      icon: EyeIcon,
      items: ['SIEM 24/7', 'Threat Detection', 'Incident Response']
    },
    {
      id: 3,
      name: 'Aplicaciones Seguras',
      description: 'CRM + ERP + Portal con Security by Design',
      color: 'from-green-400 to-emerald-500',
      icon: CpuChipIcon,
      items: ['Secure Development', 'API Security', 'Data Protection']
    },
    {
      id: 4,
      name: 'Gobernanza Total',
      description: 'Cumplimiento + Políticas + Auditoría',
      color: 'from-purple-500 to-indigo-600',
      icon: ShieldCheckIcon,
      items: ['ISO 27001', 'Políticas de Seg.', 'Auditoría Continua']
    }
  ];

  const beneficios = [
    {
      category: 'Multiplicador de Confianza',
      items: [
        { text: '+65% conversión en clientes enterprise', icon: TrophyIcon, color: 'text-green-600' },
        { text: '+40% retención de clientes actuales', icon: CheckCircleIcon, color: 'text-blue-600' },
        { text: '+85% en valor promedio de contratos', icon: ChartBarSquareIcon, color: 'text-purple-600' }
      ]
    },
    {
      category: 'Acelerador de Crecimiento',
      items: [
        { text: '3x velocidad de despliegue seguro', icon: SparklesIcon, color: 'text-orange-600' },
        { text: '50% reducción tiempo al mercado', icon: ClockIcon, color: 'text-cyan-600' },
        { text: '70% menos costos de retrofitting', icon: CheckCircleIcon, color: 'text-green-600' }
      ]
    },
    {
      category: 'Ventaja Competitiva',
      items: [
        { text: 'Único proveedor con certificación completa', icon: TrophyIcon, color: 'text-indigo-600' },
        { text: 'Referencia de seguridad en el sector', icon: SparklesIcon, color: 'text-purple-600' },
        { text: 'Capacidad de competir con gigantes', icon: ChartBarSquareIcon, color: 'text-blue-600' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % capasSeguridad.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [capasSeguridad.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Elementos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_50%)]" />
        
        {/* Patrón de puntos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
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
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 mb-6 px-6 py-2 text-sm font-semibold">
            SOLUCIÓN INTEGRAL
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Arquitectura Segura
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 block mt-2">
              por Diseño
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Transformando cada desafío de seguridad en un <strong className="text-green-600">multiplicador de valor</strong> 
            que posiciona a ICE como <strong className="text-blue-600">líder indiscutible</strong> en el mercado.
          </p>
        </motion.div>

        {/* Layout de Dos Columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda - Diagrama de Capas */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                5 Capas de Seguridad Integrada
              </h3>
              <p className="text-gray-600">
                Cada capa se activa automáticamente y se refuerza mutuamente
              </p>
            </div>

            {/* Stack de Capas 3D */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <motion.div 
                className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200"
                style={{
                  transform: "perspective(1200px) rotateX(10deg) rotateY(-5deg)",
                }}
              >
                <div className="w-full h-80 relative">
                  {capasSeguridad.map((capa, index) => (
                    <motion.div
                      key={capa.id}
                      className={`absolute left-0 right-0 h-12 bg-gradient-to-r ${capa.color} rounded-lg flex items-center justify-between px-4 cursor-pointer border-2 ${
                        activeLayer === index ? 'border-white shadow-lg scale-105' : 'border-transparent'
                      }`}
                      style={{
                        bottom: `${index * 15}%`,
                        zIndex: capasSeguridad.length - index,
                      }}
                      animate={{
                        scale: activeLayer === index ? 1.05 : 1,
                        y: activeLayer === index ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setActiveLayer(index)}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center gap-3">
                        <capa.icon className="w-5 h-5 text-white" />
                        <div>
                          <h4 className="text-white font-semibold text-sm">{capa.name}</h4>
                          <p className="text-white/80 text-xs">{capa.description}</p>
                        </div>
                      </div>
                      
                      {activeLayer === index && (
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full animate-pulse"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                
                {/* Detalles de la Capa Activa */}
                <motion.div 
                  className="mt-6 p-4 bg-blue-50/80 rounded-lg border border-blue-200"
                  key={activeLayer}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                    {capasSeguridad[activeLayer].name}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {capasSeguridad[activeLayer].items.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Columna Derecha - Beneficios como Multiplicadores */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Multiplicadores de Valor ICE + Apex
              </h3>
              <p className="text-gray-600">
                Cada inversión en seguridad se convierte en retorno exponencial
              </p>
            </div>

            <div className="space-y-6">
              {beneficios.map((categoria, catIndex) => (
                <motion.div
                  key={categoria.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          catIndex === 0 ? 'bg-green-500' :
                          catIndex === 1 ? 'bg-blue-500' : 'bg-purple-500'
                        } animate-pulse`} />
                        {categoria.category}
                      </h4>
                      
                      <div className="space-y-3">
                        {categoria.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-lg hover:bg-gray-100/80 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                            <span className="text-sm font-medium text-gray-900">{item.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                El Diferenciador Decisivo
              </h4>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                Mientras la competencia lucha con problemas de seguridad, 
                <strong className="text-white"> ICE + Apex se posiciona como la única opción</strong> 
                para empresas que priorizan la confianza y el crecimiento sostenible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold group"
                  onClick={() => document.getElementById('roadmap-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver el Roadmap de Implementación
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
