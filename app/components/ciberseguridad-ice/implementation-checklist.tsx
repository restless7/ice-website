'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  CheckCircleIcon,
  ClockIcon,
  PlayCircleIcon,
  PauseIcon,
  DocumentTextIcon,
  UserIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import {
  CheckCircleIcon as CheckCircleIconSolid,
} from '@heroicons/react/24/solid';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending' | 'blocked';
  phase: number;
  estimatedDays: number;
  actualDays?: number;
  assignedTo: string;
  priority: 'high' | 'medium' | 'low';
  dependencies?: string[];
  deliverables: string[];
  notes?: string;
}

export default function ImplementationChecklist() {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [showCompleted, setShowCompleted] = useState(true);

  const checklistItems: ChecklistItem[] = [
    // Fase 1: Fundación y Saneamiento (Mes 1)
    {
      id: 'db-audit',
      title: 'Auditoría Completa de Base de Datos',
      description: 'Análisis exhaustivo de la estructura actual, identificación de vulnerabilidades y mapeo de datos sensibles',
      status: 'completed',
      phase: 1,
      estimatedDays: 5,
      actualDays: 4,
      assignedTo: 'Sebastián García',
      priority: 'high',
      deliverables: [
        'Reporte de vulnerabilidades encontradas',
        'Mapeo de datos sensibles',
        'Plan de saneamiento prioritizado'
      ],
      notes: 'Completado con éxito. Identificadas 12 vulnerabilidades críticas y 28 menores.'
    },
    {
      id: 'db-cleanup',
      title: 'Saneamiento de Base de Datos',
      description: 'Limpieza de datos duplicados, inconsistentes y aplicación de primeras medidas de seguridad',
      status: 'completed',
      phase: 1,
      estimatedDays: 8,
      actualDays: 7,
      assignedTo: 'Sebastián García + DevOps Team',
      priority: 'high',
      dependencies: ['db-audit'],
      deliverables: [
        'Base de datos saneada y optimizada',
        'Backup completo pre-saneamiento',
        'Documentación de cambios realizados'
      ],
      notes: 'Reducido 40% el tamaño de BD y eliminadas todas las vulnerabilidades críticas.'
    },
    {
      id: 'architecture-design',
      title: 'Diseño de Nueva Arquitectura',
      description: 'Creación del blueprint de la arquitectura segura, definición de componentes y flujos de datos',
      status: 'in-progress',
      phase: 1,
      estimatedDays: 10,
      actualDays: 6,
      assignedTo: 'Sebastián García',
      priority: 'high',
      dependencies: ['db-cleanup'],
      deliverables: [
        'Diagramas de arquitectura detallados',
        'Especificaciones técnicas de componentes',
        'Plan de migración paso a paso'
      ],
      notes: 'En progreso. 60% completado. Arquitectura microservicios con containers.'
    },
    {
      id: 'security-framework',
      title: 'Implementación del Framework de Seguridad',
      description: 'Establecimiento de políticas de seguridad, controles de acceso y procedimientos de monitoreo',
      status: 'in-progress',
      phase: 1,
      estimatedDays: 12,
      actualDays: 3,
      assignedTo: 'Security Team',
      priority: 'high',
      dependencies: ['architecture-design'],
      deliverables: [
        'Políticas de seguridad documentadas',
        'Sistema de control de acceso implementado',
        'Procedimientos de monitoreo definidos'
      ],
      notes: 'Iniciado. Definidas políticas base y controles de acceso.'
    },

    // Fase 2: Implementación Core (Mes 2-3)
    {
      id: 'encryption-implementation',
      title: 'Implementación de Encriptación',
      description: 'Encriptación end-to-end de datos en tránsito y en reposo, implementación de HSM',
      status: 'pending',
      phase: 2,
      estimatedDays: 15,
      assignedTo: 'Sebastián García + Crypto Team',
      priority: 'high',
      dependencies: ['security-framework'],
      deliverables: [
        'Datos encriptados con AES-256',
        'HSM configurado y operativo',
        'Protocolos TLS 1.3 implementados'
      ]
    },
    {
      id: 'monitoring-setup',
      title: 'Configuración de Monitoreo 24/7',
      description: 'Implementación de SIEM, configuración de alertas y establecimiento del SOC',
      status: 'pending',
      phase: 2,
      estimatedDays: 20,
      assignedTo: 'SOC Team',
      priority: 'high',
      dependencies: ['encryption-implementation'],
      deliverables: [
        'SIEM completamente configurado',
        'Dashboard de monitoreo operativo',
        'SOC con personal capacitado 24/7'
      ]
    },
    {
      id: 'backup-recovery',
      title: 'Sistema de Backup y Recovery',
      description: 'Implementación de backup automático, pruebas de recovery y plan de continuidad',
      status: 'pending',
      phase: 2,
      estimatedDays: 10,
      assignedTo: 'Infrastructure Team',
      priority: 'medium',
      dependencies: ['monitoring-setup'],
      deliverables: [
        'Backups automatizados cada 6 horas',
        'Plan de recovery probado',
        'RTO < 4 horas, RPO < 1 hora'
      ]
    },

    // Fase 3: Certificación y Compliance (Mes 4-5)
    {
      id: 'iso27001-prep',
      title: 'Preparación para ISO 27001',
      description: 'Documentación de procesos, implementación de controles y preparación para auditoría',
      status: 'pending',
      phase: 3,
      estimatedDays: 25,
      assignedTo: 'Compliance Team',
      priority: 'high',
      dependencies: ['backup-recovery'],
      deliverables: [
        'Documentación completa ISMS',
        'Todos los controles implementados',
        'Pre-auditoría interna completada'
      ]
    },
    {
      id: 'penetration-testing',
      title: 'Pruebas de Penetración',
      description: 'Pentesting completo por terceros, remediación de vulnerabilidades encontradas',
      status: 'pending',
      phase: 3,
      estimatedDays: 15,
      assignedTo: 'External Security Firm',
      priority: 'high',
      dependencies: ['iso27001-prep'],
      deliverables: [
        'Reporte completo de pentesting',
        'Todas las vulnerabilidades remediadas',
        'Certificado de seguridad emitido'
      ]
    },

    // Fase 4: Optimización y Go-Live (Mes 6)
    {
      id: 'performance-optimization',
      title: 'Optimización de Performance',
      description: 'Ajustes finales de performance, optimización de queries y configuración de CDN',
      status: 'pending',
      phase: 4,
      estimatedDays: 8,
      assignedTo: 'Performance Team',
      priority: 'medium',
      dependencies: ['penetration-testing'],
      deliverables: [
        'Sistema optimizado < 200ms response time',
        'CDN configurado globalmente',
        'Benchmarks de performance documentados'
      ]
    },
    {
      id: 'iso27001-audit',
      title: 'Auditoría ISO 27001 Oficial',
      description: 'Auditoría oficial de certificación ISO 27001 por organismo acreditado',
      status: 'pending',
      phase: 4,
      estimatedDays: 5,
      assignedTo: 'ISO Auditor + Compliance Team',
      priority: 'high',
      dependencies: ['performance-optimization'],
      deliverables: [
        'Certificación ISO 27001 obtenida',
        'Plan de mejora continua',
        'Cronograma de re-certificación'
      ]
    },
    {
      id: 'team-training',
      title: 'Capacitación Final del Equipo',
      description: 'Training completo del equipo en nuevos procesos y herramientas de seguridad',
      status: 'pending',
      phase: 4,
      estimatedDays: 3,
      assignedTo: 'Training Team',
      priority: 'medium',
      dependencies: ['iso27001-audit'],
      deliverables: [
        'Equipo 100% capacitado',
        'Manual de procedimientos entregado',
        'Plan de capacitación continua'
      ]
    }
  ];

  const phases = [
    { id: 1, name: 'Fundación y Saneamiento', duration: '1 mes', color: 'bg-blue-500' },
    { id: 2, name: 'Implementación Core', duration: '2 meses', color: 'bg-purple-500' },
    { id: 3, name: 'Certificación y Compliance', duration: '2 meses', color: 'bg-amber-500' },
    { id: 4, name: 'Optimización y Go-Live', duration: '1 mes', color: 'bg-green-500' }
  ];

  const getStatusIcon = (status: ChecklistItem['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIconSolid className="w-6 h-6 text-green-600" />;
      case 'in-progress':
        return <PlayCircleIcon className="w-6 h-6 text-blue-600" />;
      case 'pending':
        return <ClockIcon className="w-6 h-6 text-gray-400" />;
      case 'blocked':
        return <ExclamationTriangleIcon className="w-6 h-6 text-red-600" />;
    }
  };

  const getStatusBadge = (status: ChecklistItem['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completado</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">En Progreso</Badge>;
      case 'pending':
        return <Badge className="bg-gray-100 text-gray-800">Pendiente</Badge>;
      case 'blocked':
        return <Badge className="bg-red-100 text-red-800">Bloqueado</Badge>;
    }
  };

  const getPriorityBadge = (priority: ChecklistItem['priority']) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">Alta</Badge>;
      case 'medium':
        return <Badge variant="secondary">Media</Badge>;
      case 'low':
        return <Badge variant="outline">Baja</Badge>;
    }
  };

  const filteredItems = checklistItems.filter(item => 
    item.phase === selectedPhase && (showCompleted || item.status !== 'completed')
  );

  const overallProgress = {
    completed: checklistItems.filter(item => item.status === 'completed').length,
    total: checklistItems.length,
    percentage: Math.round((checklistItems.filter(item => item.status === 'completed').length / checklistItems.length) * 100)
  };

  const phaseProgress = phases.map(phase => {
    const phaseItems = checklistItems.filter(item => item.phase === phase.id);
    const completed = phaseItems.filter(item => item.status === 'completed').length;
    return {
      ...phase,
      completed,
      total: phaseItems.length,
      percentage: phaseItems.length > 0 ? Math.round((completed / phaseItems.length) * 100) : 0
    };
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 mb-6 px-6 py-3 text-sm font-bold">
            SEGUIMIENTO DE IMPLEMENTACIÓN
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Checklist de Progreso
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block mt-2">
              ICE Ciberseguridad
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Seguimiento detallado de cada hito de la transformación de ciberseguridad, 
            desde el saneamiento inicial hasta la certificación ISO 27001.
          </p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Progreso General</h3>
                  <p className="text-indigo-100">Transformación Completa de Ciberseguridad</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">{overallProgress.percentage}%</div>
                  <div className="text-sm text-indigo-200">
                    {overallProgress.completed} de {overallProgress.total} hitos
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <motion.div 
                  className="bg-white h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress.percentage}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-300">{checklistItems.filter(i => i.status === 'completed').length}</div>
                  <div className="text-xs text-indigo-200">Completados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-300">{checklistItems.filter(i => i.status === 'in-progress').length}</div>
                  <div className="text-xs text-indigo-200">En Progreso</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-300">{checklistItems.filter(i => i.status === 'pending').length}</div>
                  <div className="text-xs text-indigo-200">Pendientes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-300">{checklistItems.filter(i => i.status === 'blocked').length}</div>
                  <div className="text-xs text-indigo-200">Bloqueados</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Phase Navigation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {phaseProgress.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  selectedPhase === phase.id 
                    ? 'bg-white shadow-2xl ring-4 ring-indigo-200 scale-105' 
                    : 'bg-white/70 hover:bg-white shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 ${phase.color} rounded-full`} />
                  <h4 className="font-bold text-gray-900">Fase {phase.id}</h4>
                </div>
                <h5 className="font-semibold text-gray-800 mb-2">{phase.name}</h5>
                <p className="text-sm text-gray-600 mb-4">{phase.duration}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Progreso</span>
                    <span className="text-sm font-bold text-gray-900">{phase.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${phase.color}`}
                      style={{ width: `${phase.percentage}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  {phase.completed} de {phase.total} hitos
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">
              Fase {selectedPhase}: {phases.find(p => p.id === selectedPhase)?.name}
            </h3>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCompleted}
                  onChange={(e) => setShowCompleted(e.target.checked)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">Mostrar completados</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Checklist Items */}
        <div className="grid gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`shadow-xl hover:shadow-2xl transition-all duration-300 ${
                item.status === 'completed' ? 'bg-green-50 border-green-200' :
                item.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                item.status === 'blocked' ? 'bg-red-50 border-red-200' :
                'bg-white border-gray-200'
              }`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {getStatusIcon(item.status)}
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-4">
                          {getStatusBadge(item.status)}
                          {getPriorityBadge(item.priority)}
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <UserIcon className="w-4 h-4" />
                          <span className="font-medium">Asignado:</span> {item.assignedTo}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <CalendarDaysIcon className="w-4 h-4" />
                          <span className="font-medium">Estimado:</span> {item.estimatedDays} días
                          {item.actualDays && ` (Real: ${item.actualDays} días)`}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ChartBarIcon className="w-4 h-4" />
                          <span className="font-medium">Fase:</span> {item.phase}
                        </div>
                      </div>

                      {/* Dependencies */}
                      {item.dependencies && item.dependencies.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2 text-sm">Dependencias:</h5>
                          <div className="flex flex-wrap gap-2">
                            {item.dependencies.map((dep) => {
                              const depItem = checklistItems.find(i => i.id === dep);
                              return (
                                <Badge key={dep} variant="outline" className="text-xs">
                                  {depItem?.title || dep}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Deliverables */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2 text-sm">Entregables:</h5>
                        <div className="space-y-1">
                          {item.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      {item.notes && (
                        <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                          <div className="flex items-start gap-2">
                            <InformationCircleIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h6 className="font-semibold text-indigo-900 mb-1 text-sm">Notas:</h6>
                              <p className="text-indigo-800 text-sm leading-relaxed">{item.notes}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Resumen Ejecutivo del Progreso
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                La implementación de ciberseguridad avanza según cronograma. <strong className="text-white">
                {overallProgress.completed} de {overallProgress.total} hitos completados</strong> con 
                excelente progreso en las fases iniciales de saneamiento y arquitectura.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-green-400 mb-3">✅ Logros Destacados:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Base de datos completamente saneada y optimizada</li>
                    <li>• Arquitectura de seguridad 60% completada</li>
                    <li>• Framework de seguridad en implementación</li>
                    <li>• Cronograma manteniéndose según plan original</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-400 mb-3">🎯 Próximos Hitos:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Finalización del framework de seguridad</li>
                    <li>• Inicio de implementación de encriptación</li>
                    <li>• Configuración de monitoreo 24/7</li>
                    <li>• Preparación para certificación ISO 27001</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
