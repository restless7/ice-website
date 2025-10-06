'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  ShieldExclamationIcon,
  DocumentCheckIcon,
  StarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BanknotesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function ValorNegocio() {
  const valoresNegocio = [
    {
      id: 'reduccion-riesgo',
      titulo: 'Reducción Crítica de Riesgos',
      subtitulo: 'Protección del patrimonio y continuidad operacional',
      icon: ShieldExclamationIcon,
      color: 'from-red-600 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      impactoFinanciero: '$2.4M ahorrados',
      roi: '420%',
      timeline: '6 meses',
      beneficios: [
        'Eliminación de 87% de vulnerabilidades críticas',
        'Reducción de 95% en riesgo de breach de datos',
        'Protección completa de IP e activos digitales',
        'Continuidad garantizada ante cyber-ataques'
      ],
      metricas: [
        { label: 'Reducción exposición', valor: '95%', tendencia: 'down' },
        { label: 'Ahorro en seguros cyber', valor: '$180K/año', tendencia: 'up' },
        { label: 'Evitar multas regulatorias', valor: '$850K+', tendencia: 'neutral' }
      ],
      justificacion: 'Un solo incidente de seguridad puede costar entre $1.2M - $4.8M. Esta inversión elimina 95% de ese riesgo.'
    },
    {
      id: 'cumplimiento',
      titulo: 'Cumplimiento y Certificaciones',
      subtitulo: 'Acceso a mercados regulados y clientes enterprise',
      icon: DocumentCheckIcon,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      impactoFinanciero: '$3.8M nuevos ingresos',
      roi: '340%',
      timeline: '8 meses',
      beneficios: [
        'Certificación ISO 27001 completa y auditada',
        'Compliance con GDPR, SOX y normativas locales',
        'Acceso a licitaciones gubernamentales y enterprise',
        'Diferenciador decisivo vs. competencia sin certificar'
      ],
      metricas: [
        { label: 'Nuevos segmentos accesibles', valor: '3 verticales', tendencia: 'up' },
        { label: 'Incremento precio promedio', valor: '+45%', tendencia: 'up' },
        { label: 'Tasa conversión enterprise', valor: '+65%', tendencia: 'up' }
      ],
      justificacion: 'Los clientes enterprise pagan 40-60% más por proveedores certificados. Es requisito para competir.'
    },
    {
      id: 'reputacion',
      titulo: 'Reputación y Confianza de Marca',
      subtitulo: 'Posicionamiento como líder confiable del mercado',
      icon: StarIcon,
      color: 'from-amber-600 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      impactoFinanciero: '$1.9M valor marca',
      roi: '280%',
      timeline: '12 meses',
      beneficios: [
        'Reconocimiento como proveedor más seguro del sector',
        'Trust score superior al 95% de competidores',
        'Referencias y case studies de clientes enterprise',
        'Posicionamiento premium en el mercado'
      ],
      metricas: [
        { label: 'NPS score improvement', valor: '+38 puntos', tendencia: 'up' },
        { label: 'Retención clientes', valor: '+42%', tendencia: 'up' },
        { label: 'Referencias espontáneas', valor: '+180%', tendencia: 'up' }
      ],
      justificacion: 'En un mercado donde la confianza es el diferenciador #1, ser "el más seguro" vale millones.'
    },
    {
      id: 'crecimiento',
      titulo: 'Crecimiento Sostenible Exponencial',
      subtitulo: 'Escalamiento sin límites de seguridad',
      icon: ChartBarIcon,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      impactoFinanciero: '$8.2M crecimiento habilitado',
      roi: '560%',
      timeline: '24 meses',
      beneficios: [
        'Arquitectura que escala sin límites de seguridad',
        'Expansión internacional sin barreras regulatorias',
        'Capacidad para adquirir sin integración compleja',
        'Platform ready para IPO o exit estratégico'
      ],
      metricas: [
        { label: 'Capacidad de escala', valor: '10x sin límites', tendencia: 'up' },
        { label: 'Velocidad expansión', valor: '+3x más rápida', tendencia: 'up' },
        { label: 'Múltiplo de valoración', valor: '+1.8x premium', tendencia: 'up' }
      ],
      justificacion: 'Empresas con security-by-design valen 1.8x más y crecen 3x más rápido que competidores.'
    }
  ];

  const resumenEjecutivo = {
    retornoTotal: '$16.3M',
    roiConsolidado: '1,730%',
    paybackPeriod: '8 meses',
    riesgoMitigado: '$4.2M',
    ventajasCompetitivas: 4,
    implementacionMeses: '6 meses'
  };

  return (
    <section id="valor-negocio-section" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Elementos de fondo premium */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15),transparent_50%)]" />
        
        {/* Patrón de cuadrícula sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Efectos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Ejecutivo */}
        <motion.div 
          className="text-center max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 mb-6 px-6 py-3 text-sm font-bold">
            PARA LA JUNTA DIRECTIVA
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Impacto en el
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 block mt-2">
              Valor del Negocio
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Análisis financiero ejecutivo del ROI, mitigación de riesgos y 
            <strong className="text-white"> ventajas competitivas decisivas</strong> que 
            la ciberseguridad aporta a ICE + Apex.
          </p>

          {/* Dashboard Ejecutivo */}
          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                {resumenEjecutivo.roiConsolidado}
              </h4>
              <p className="text-sm text-gray-300">ROI Total</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                {resumenEjecutivo.retornoTotal}
              </h4>
              <p className="text-sm text-gray-300">Retorno 3 años</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">
                {resumenEjecutivo.paybackPeriod}
              </h4>
              <p className="text-sm text-gray-300">Payback Period</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-red-400 mb-1">
                {resumenEjecutivo.riesgoMitigado}
              </h4>
              <p className="text-sm text-gray-300">Riesgo Mitigado</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">
                {resumenEjecutivo.implementacionMeses}
              </h4>
              <p className="text-sm text-gray-300">Implementación</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">
                {resumenEjecutivo.ventajasCompetitivas}
              </h4>
              <p className="text-sm text-gray-300">Ventajas Clave</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de Valores de Negocio */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {valoresNegocio.map((valor, index) => (
            <motion.div
              key={valor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  {/* Header del Valor */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${valor.color} shadow-lg`}>
                      <valor.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {valor.titulo}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {valor.subtitulo}
                      </p>
                      
                      {/* Métricas de Alto Nivel */}
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <BanknotesIcon className="w-5 h-5 text-green-400" />
                          <span className="text-green-400 font-bold text-lg">
                            {valor.impactoFinanciero}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <ArrowTrendingUpIcon className="w-5 h-5 text-blue-400" />
                          <span className="text-blue-400 font-bold">
                            ROI {valor.roi}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-5 h-5 text-purple-400" />
                          <span className="text-purple-400 font-semibold">
                            {valor.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Beneficios Clave */}
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      Beneficios Ejecutivos
                    </h4>
                    <div className="space-y-2">
                      {valor.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Métricas Detalladas */}
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3">KPIs Medibles</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {valor.metricas.map((metrica, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                          <span className="text-sm text-gray-300">{metrica.label}</span>
                          <div className="flex items-center gap-2">
                            {metrica.tendencia === 'up' && (
                              <ArrowTrendingUpIcon className="w-4 h-4 text-green-400" />
                            )}
                            {metrica.tendencia === 'down' && (
                              <ArrowTrendingDownIcon className="w-4 h-4 text-red-400" />
                            )}
                            <span className={`font-bold text-sm ${
                              metrica.tendencia === 'up' ? 'text-green-400' : 
                              metrica.tendencia === 'down' ? 'text-red-400' : 'text-blue-400'
                            }`}>
                              {metrica.valor}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Justificación Ejecutiva */}
                  <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-300/20">
                    <h5 className="font-semibold text-white mb-2 text-sm">Justificación para la Junta:</h5>
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "{valor.justificacion}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Final */}
        <motion.div 
          className="text-center p-8 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            🎯 Decisión Estratégica para la Junta
          </h3>
          <p className="text-orange-100 mb-6 text-lg max-w-4xl mx-auto leading-relaxed">
            La ciberseguridad no es un costo — es <strong className="text-white">la inversión más rentable</strong> que 
            ICE + Apex puede hacer. Con <strong className="text-white">1,730% ROI</strong> y 
            <strong className="text-white"> payback en 8 meses</strong>, cada día de retraso 
            cuesta dinero y oportunidades competitivas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg"
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 text-lg group"
            >
              <CursorArrowRaysIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Aprobar el Roadmap Completo
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold px-8 py-4 text-lg"
              onClick={() => document.getElementById('final-cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Arquitectura Técnica Detallada
            </Button>
          </div>

          <p className="text-orange-200 text-sm italic">
            "El mejor momento para invertir en ciberseguridad fue ayer. El segundo mejor momento es ahora."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
