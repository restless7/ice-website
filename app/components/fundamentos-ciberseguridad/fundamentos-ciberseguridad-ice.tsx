'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/app/components/ui/badge';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  ExclamationTriangleIcon,
  KeyIcon,
  EnvelopeIcon,
  ArrowPathIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  EyeIcon,
  WifiIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  XCircleIcon,
  QuestionMarkCircleIcon,
  IdentificationIcon,
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
  ChartBarIcon,
  ClockIcon,
  ServerIcon,
  CloudIcon,
  CogIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  UsersIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function FundamentosCiberseguridadICE() {
  const [collapsedQuestions, setCollapsedQuestions] = useState<{[key: number]: boolean}>({});

  const toggleQuestion = (index: number) => {
    setCollapsedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const risks = [
    {
      title: 'Phishing',
      description: 'Correos fraudulentos que buscan robar credenciales',
      icon: EnvelopeIcon,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      title: 'Malware',
      description: 'Software malicioso que infecta sistemas',
      icon: ComputerDesktopIcon,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      title: 'Contraseñas Débiles',
      description: 'Facilitan el acceso no autorizado',
      icon: KeyIcon,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      title: 'Accesos No Autorizados',
      description: 'Intrusiones a sistemas y datos sensibles',
      icon: EyeIcon,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  const bestPractices = [
    {
      icon: KeyIcon,
      title: 'Contraseñas Seguras y Únicas',
      description: 'Usa contraseñas complejas y diferentes para cada cuenta',
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: EnvelopeIcon,
      title: 'Cuidado con Correos Sospechosos',
      description: 'Verifica remitentes y evita hacer clic en enlaces dudosos',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: ArrowPathIcon,
      title: 'Actualizaciones Periódicas',
      description: 'Mantén software y sistemas siempre actualizados',
      iconColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: UserGroupIcon,
      title: 'Responsabilidad Compartida',
      description: 'La seguridad es tarea de todo el equipo',
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  const ciaTriad = [
    {
      title: 'Confidencialidad',
      description: 'Proteger la información de accesos no autorizados',
      details: 'Solo las personas autorizadas pueden acceder a la información sensible de ICE y nuestros clientes.',
      icon: EyeIcon,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      examples: ['Encriptación de datos', 'Control de accesos', 'Políticas de privacidad']
    },
    {
      title: 'Integridad',
      description: 'Asegurar que los datos no sean alterados sin autorización',
      details: 'Garantizamos que la información permanezca exacta y completa durante todo su ciclo de vida.',
      icon: CheckCircleIcon,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      examples: ['Checksums y hashes', 'Control de versiones', 'Auditorías de cambios']
    },
    {
      title: 'Disponibilidad',
      description: 'Garantizar el acceso a la información cuando se necesite',
      details: 'Los sistemas y datos de ICE están disponibles para usuarios autorizados cuando los necesiten.',
      icon: ServerIcon,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      examples: ['Backup y recuperación', 'Alta disponibilidad', 'Monitoreo continuo']
    }
  ];

  const aaaFramework = [
    {
      title: 'Autenticación',
      subtitle: '¿Quién eres?',
      description: 'Verificación de identidad antes del acceso',
      details: 'Confirmamos que eres realmente quien dices ser antes de permitir el acceso a nuestros sistemas.',
      icon: IdentificationIcon,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      methods: ['Contraseñas seguras', 'Autenticación de dos factores (2FA)', 'Biometría', 'Tokens de seguridad']
    },
    {
      title: 'Autorización',
      subtitle: '¿Qué puedes hacer?',
      description: 'Definición de permisos y nivel de acceso',
      details: 'Una vez autenticado, determinamos qué recursos y acciones están permitidas para tu rol.',
      icon: KeyIcon,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      methods: ['Control de acceso basado en roles', 'Principio de menor privilegio', 'Permisos granulares', 'Revisiones periódicas']
    },
    {
      title: 'Auditoría',
      subtitle: '¿Qué sucedió?',
      description: 'Registro y seguimiento de todas las actividades',
      details: 'Mantenemos un registro detallado de quién hizo qué, cuándo y desde dónde para garantizar la trazabilidad.',
      icon: ClipboardDocumentCheckIcon,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      methods: ['Logs de seguridad', 'Monitoreo en tiempo real', 'Alertas automáticas', 'Informes de cumplimiento']
    }
  ];

  const iceCyberJourney = [
    {
      phase: 'Fase 1',
      title: 'Evaluación y Fundamentos',
      duration: '4-6 semanas',
      description: 'Análisis de riesgos y establecimiento de bases sólidas',
      icon: ClipboardDocumentCheckIcon,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      activities: ['Auditoría de seguridad inicial', 'Mapeo de activos críticos', 'Evaluación de vulnerabilidades', 'Definición de políticas básicas']
    },
    {
      phase: 'Fase 2',
      title: 'Protección Técnica',
      duration: '6-8 semanas',
      description: 'Implementación de controles técnicos esenciales',
      icon: ShieldCheckIcon,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      activities: ['Configuración de firewall avanzado', 'Sistema de detección de intrusiones', 'Encriptación de datos', 'Backup automatizado']
    },
    {
      phase: 'Fase 3',
      title: 'Cultura y Procesos',
      duration: '4-6 semanas',
      description: 'Desarrollo de capacidades humanas y procedimientos',
      icon: AcademicCapIcon,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      activities: ['Capacitación del equipo', 'Simulacros de seguridad', 'Desarrollo de procedimientos', 'Plan de respuesta a incidentes']
    },
    {
      phase: 'Fase 4',
      title: 'Optimización y Compliance',
      duration: '4-6 semanas',
      description: 'Certificaciones y mejora continua',
      icon: ChartBarIcon,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      activities: ['Preparación ISO 27001', 'Auditorías internas', 'Métricas de seguridad', 'Plan de mejora continua']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Floating security icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            <ShieldCheckIcon className="w-20 h-20 text-cyan-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.section 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div className="mb-8" variants={itemVariants}>
              <Badge 
                variant="outline" 
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 text-lg font-semibold tracking-wider bg-cyan-400/5 backdrop-blur-sm"
              >
                SEBASTIÁN GARCÍA • LEAD ARCHITECT & SECURITY EXPERT
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              <span className="text-white">Fundamentos de la</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400">
                Ciberseguridad
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-6xl">en ICE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Proteger nuestra información y sistemas es responsabilidad de todos. 
              Este es el primer paso para fortalecer nuestra postura en ciberseguridad.
            </motion.p>
          </div>
        </motion.section>

        {/* What is Cybersecurity Section */}
        <motion.section 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={itemVariants}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  ¿Qué es la{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Ciberseguridad?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  La <strong className="text-cyan-400">ciberseguridad</strong> es la práctica de proteger 
                  nuestros datos, sistemas y personas frente a las amenazas digitales. 
                  Es nuestro escudo digital que garantiza la continuidad del negocio 
                  y la confianza de nuestros clientes.
                </p>
              </div>
              
              <div className="relative">
                <motion.div 
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20"
                  animate={{
                    rotateY: [-2, 2, -2],
                    rotateX: [1, -1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-center">
                    <ShieldCheckIcon className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Protección Integral</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                        <span className="text-gray-300">Datos</span>
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                        <span className="text-gray-300">Sistemas</span>
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
                        <span className="text-gray-300">Personas</span>
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Risk Section */}
        <motion.section 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Principales{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Riesgos Actuales
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estas son las amenazas más comunes que enfrentamos diariamente en el entorno digital
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {risks.map((risk, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl border ${risk.borderColor} ${risk.bgColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-xl ${risk.bgColor} border ${risk.borderColor} flex items-center justify-center mb-4`}>
                  <risk.icon className={`w-8 h-8 ${risk.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{risk.title}</h3>
                <p className="text-gray-300 text-sm">{risk.description}</p>
                
                <motion.div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full ${risk.color.replace('text-', 'bg-')}`}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Best Practices Section */}
        <motion.section 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Buenas Prácticas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Esenciales
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implementa estas medidas básicas para fortalecer tu seguridad digital
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl ${practice.bgColor} border border-slate-600/50 flex items-center justify-center flex-shrink-0`}>
                    <practice.icon className={`w-8 h-8 ${practice.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      🔒 {practice.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{practice.description}</p>
                  </div>
                </div>
                
                <motion.div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full ${practice.iconColor.replace('text-', 'bg-')}`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CIA Triad Section */}
        <motion.section 
          className="container mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              La Tríada{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400">
                CIA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Los tres pilares fundamentales de la ciberseguridad que guían todas nuestras decisiones
            </p>
            <div className="text-sm text-cyan-400 font-semibold tracking-wider">
              CONFIDENCIALIDAD • INTEGRIDAD • DISPONIBILIDAD
            </div>
          </motion.div>

          {/* Data Protection Triad Image */}
          <motion.div 
            className="mb-16 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl p-8 border border-cyan-400/20 backdrop-blur-sm">
                <Image
                  src="/images/data-protection-triad.jpg"
                  alt="Data Protection Triad - Confidencialidad, Integridad, Disponibilidad"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {ciaTriad.map((principle, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl border ${principle.borderColor} ${principle.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${principle.bgColor} border ${principle.borderColor} flex items-center justify-center mx-auto mb-4`}>
                    <principle.icon className={`w-10 h-10 ${principle.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className={`text-lg ${principle.color} font-medium mb-4`}>{principle.description}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{principle.details}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider opacity-80">Implementación:</h4>
                  {principle.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${principle.color.replace('text-', 'bg-')}`} />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${principle.color.replace('text-', 'bg-')} flex items-center justify-center`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 1.5 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* AAA Framework Section */}
        <motion.section 
          className="container mx-auto px-6 py-20 bg-gradient-to-r from-slate-900/20 to-slate-800/20 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Las 3 AAA de la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-amber-400 to-emerald-400">
                Seguridad
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              El marco de trabajo que define cómo controlamos el acceso a nuestros sistemas
            </p>
            <div className="text-sm text-purple-400 font-semibold tracking-wider">
              AUTENTICACIÓN • AUTORIZACIÓN • AUDITORÍA
            </div>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {aaaFramework.map((aaa, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl border ${aaa.borderColor} ${aaa.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -8, rotateY: 5 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${aaa.bgColor} border ${aaa.borderColor} flex items-center justify-center mx-auto mb-4`}>
                    <aaa.icon className={`w-10 h-10 ${aaa.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{aaa.title}</h3>
                  <p className={`text-lg ${aaa.color} font-medium mb-3`}>{aaa.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-4">{aaa.description}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{aaa.details}</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider opacity-80">Métodos:</h4>
                  {aaa.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${aaa.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm leading-relaxed">{method}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  className={`absolute top-4 right-4 w-8 h-8 rounded-lg ${aaa.bgColor} border ${aaa.borderColor} flex items-center justify-center`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.8 }}
                >
                  <span className={`text-xs font-bold ${aaa.color}`}>{index + 1}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ICE Cybersecurity Journey Section */}
        <motion.section 
          className="container mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestro Camino{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                hacia la Excelencia
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              El roadmap de transformación de ciberseguridad para ICE Colombia
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-cyan-400 font-semibold">
              <ClockIcon className="w-5 h-5" />
              <span>18-24 SEMANAS • 4 FASES ESTRATÉGICAS</span>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {iceCyberJourney.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl border border-slate-700/50 ${phase.bgColor} backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${phase.bgColor} border border-slate-600/50 flex items-center justify-center`}>
                      <phase.icon className={`w-6 h-6 ${phase.color}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${phase.color} tracking-wider`}>{phase.phase}</div>
                      <div className="text-xs text-gray-400">{phase.duration}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{phase.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-xs uppercase tracking-wider opacity-80">Actividades clave:</h4>
                  {phase.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${phase.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                      <span className="text-gray-300 text-xs leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 border ${phase.color.replace('text-', 'border-')} flex items-center justify-center`}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 2 }}
                >
                  <span className={`text-xs font-bold ${phase.color}`}>{index + 1}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-full border border-cyan-400/20 backdrop-blur-sm">
              <BuildingOfficeIcon className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-semibold">Objetivo: ICE como Líder en Seguridad Digital</span>
              <ChartBarIcon className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
        </motion.section>

        {/* Visual Infographic Section */}
        <motion.section 
          className="container mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              La Ciberseguridad en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                Números
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '95%', text: 'de los ataques son por error humano', icon: ExclamationTriangleIcon, color: 'text-red-400', detail: 'Capacitación es clave' },
                { number: '$4.45M', text: 'costo promedio de una brecha de datos', icon: BanknotesIcon, color: 'text-orange-400', detail: 'Inversión vs pérdida' },
                { number: '200+', text: 'días promedio para detectar una brecha', icon: ClockIcon, color: 'text-yellow-400', detail: 'Detección temprana' },
                { number: '1,730%', text: 'ROI de inversión en ciberseguridad', icon: ChartBarIcon, color: 'text-green-400', detail: 'Valor comprobado' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <p className="text-gray-300 text-sm mb-2">{stat.text}</p>
                  <div className={`text-xs ${stat.color} font-semibold uppercase tracking-wider`}>{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Common Threats Deep Dive Section */}
        <motion.section 
          className="container mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Amenazas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400">
                Más Comunes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Conoce en detalle las amenazas que enfrentamos diariamente y cómo defendernos
            </p>
            <div className="text-sm text-red-400 font-semibold tracking-wider">
              CONOCIMIENTO = PROTECCIÓN
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                title: 'Phishing y Social Engineering',
                severity: 'CRÍTICO',
                description: 'Ataques que manipulan la confianza humana para obtener información sensible',
                icon: EnvelopeIcon,
                color: 'text-red-400',
                bgColor: 'bg-red-500/10',
                borderColor: 'border-red-500/20',
                examples: [
                  'Correos que imitan bancos o servicios conocidos',
                  'Llamadas telefónicas fingiendo ser soporte técnico',
                  'Mensajes urgentes solicitando credenciales',
                  'Páginas web falsas que copian sitios legítimos'
                ],
                prevention: [
                  'Verificar siempre el remitente antes de hacer clic',
                  'Nunca proporcionar contraseñas por teléfono o email',
                  'Revisar URLs cuidadosamente antes de ingresar datos',
                  'Confirmar solicitudes urgentes por otro medio'
                ]
              },
              {
                title: 'Ransomware',
                severity: 'MUY ALTO',
                description: 'Malware que encripta archivos y exige rescate para su liberación',
                icon: LockClosedIcon,
                color: 'text-orange-400',
                bgColor: 'bg-orange-500/10',
                borderColor: 'border-orange-500/20',
                examples: [
                  'Archivos encriptados con extensiones extrañas',
                  'Mensajes exigiendo pago en criptomonedas',
                  'Pérdida total de acceso a documentos importantes',
                  'Propagación a través de la red empresarial'
                ],
                prevention: [
                  'Mantener backups actualizados y desconectados',
                  'Actualizar sistema operativo y antivirus',
                  'No abrir archivos adjuntos sospechosos',
                  'Usar software solo de fuentes confiables'
                ]
              },
              {
                title: 'Ataques de Contraseña',
                severity: 'ALTO',
                description: 'Técnicas para descifrar, robar o adivinar credenciales de acceso',
                icon: KeyIcon,
                color: 'text-yellow-400',
                bgColor: 'bg-yellow-500/10',
                borderColor: 'border-yellow-500/20',
                examples: [
                  'Ataques de fuerza bruta contra cuentas',
                  'Uso de diccionarios con contraseñas comunes',
                  'Aprovechamiento de filtraciones de datos',
                  'Ataques a través de credenciales reutilizadas'
                ],
                prevention: [
                  'Usar contraseñas únicas y complejas',
                  'Habilitar autenticación de dos factores',
                  'Cambiar contraseñas regularmente',
                  'Usar gestores de contraseñas confiables'
                ]
              },
              {
                title: 'Malware y Virus',
                severity: 'ALTO',
                description: 'Software malicioso diseñado para dañar, robar o comprometer sistemas',
                icon: ComputerDesktopIcon,
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                borderColor: 'border-purple-500/20',
                examples: [
                  'Troyanos que abren puertas traseras',
                  'Spyware que monitorea actividades',
                  'Adware que muestra publicidad no deseada',
                  'Rootkits que ocultan otros malwares'
                ],
                prevention: [
                  'Instalar y mantener antivirus actualizado',
                  'Descargar software solo de fuentes oficiales',
                  'Mantener el sistema operativo actualizado',
                  'Usar navegadores con protección en tiempo real'
                ]
              },
              {
                title: 'Ataques de Red (Man-in-the-Middle)',
                severity: 'ALTO',
                description: 'Intercepción de comunicaciones entre dos partes sin su conocimiento',
                icon: WifiIcon,
                color: 'text-blue-400',
                bgColor: 'bg-blue-500/10',
                borderColor: 'border-blue-500/20',
                examples: [
                  'Intercepción en redes WiFi públicas',
                  'Ataques ARP spoofing en redes locales',
                  'Certificados SSL/TLS falsificados',
                  'DNS poisoning para redirigir tráfico'
                ],
                prevention: [
                  'Usar VPN en redes públicas',
                  'Verificar certificados SSL antes de ingresar datos',
                  'Evitar transacciones sensibles en WiFi público',
                  'Usar conexiones HTTPS siempre que sea posible'
                ]
              },
              {
                title: 'Amenazas Internas',
                severity: 'MODERADO',
                description: 'Riesgos provenientes de empleados, contratistas o socios comerciales',
                icon: UserGroupIcon,
                color: 'text-indigo-400',
                bgColor: 'bg-indigo-500/10',
                borderColor: 'border-indigo-500/20',
                examples: [
                  'Empleados descontentos que filtran información',
                  'Errores accidentales que comprometen datos',
                  'Uso inadecuado de privilegios de acceso',
                  'Instalación no autorizada de software'
                ],
                prevention: [
                  'Implementar principio de menor privilegio',
                  'Monitorear actividades de usuarios privilegiados',
                  'Capacitación regular en seguridad',
                  'Proceso claro de terminación de empleados'
                ]
              }
            ].map((threat, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl border ${threat.borderColor} ${threat.bgColor} backdrop-blur-sm`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Threat Header */}
                  <div className="md:col-span-3 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl ${threat.bgColor} border ${threat.borderColor} flex items-center justify-center flex-shrink-0`}>
                        <threat.icon className={`w-8 h-8 ${threat.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{threat.title}</h3>
                          <div className={`px-3 py-1 rounded-full border ${threat.borderColor} ${threat.bgColor}`}>
                            <span className={`text-xs font-bold ${threat.color} uppercase tracking-wider`}>{threat.severity}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{threat.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Examples */}
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-red-400" />
                      Ejemplos Comunes
                    </h4>
                    <div className="space-y-3">
                      {threat.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Prevention */}
                  <div className="md:col-span-2">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                      Cómo Prevenirlo
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {threat.prevention.map((prevention, preventionIndex) => (
                        <div key={preventionIndex} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">{prevention}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${threat.color.replace('text-', 'bg-')} flex items-center justify-center`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <ExclamationTriangleIcon className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Prevención</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Detección</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowPathIcon className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">Respuesta</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Compliance & Standards Section */}
        <motion.section 
          className="container mx-auto px-6 py-20 bg-gradient-to-br from-slate-900/30 to-black/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Estándares y{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Certificaciones
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              ICE seguirá los marcos internacionales más reconocidos para garantizar la máxima seguridad
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                name: 'ISO 27001',
                description: 'Sistema de Gestión de Seguridad de la Información',
                icon: CheckCircleIcon,
                color: 'text-green-400',
                bgColor: 'bg-green-500/10',
                status: 'En progreso'
              },
              {
                name: 'NIST Framework',
                description: 'Marco de Ciberseguridad del Instituto Nacional de Estándares',
                icon: CogIcon,
                color: 'text-blue-400',
                bgColor: 'bg-blue-500/10',
                status: 'Implementando'
              },
              {
                name: 'PCI DSS',
                description: 'Estándar de Seguridad de Datos para la Industria de Tarjetas',
                icon: LockClosedIcon,
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10',
                status: 'Planificado'
              },
              {
                name: 'SOC 2',
                description: 'Controles de Organización de Servicios Tipo 2',
                icon: DocumentTextIcon,
                color: 'text-cyan-400',
                bgColor: 'bg-cyan-500/10',
                status: 'Objetivo 2025'
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl border border-slate-700/50 ${standard.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-xl ${standard.bgColor} border border-slate-600/50 flex items-center justify-center mx-auto mb-4`}>
                    <standard.icon className={`w-8 h-8 ${standard.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{standard.description}</p>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${standard.bgColor} border border-slate-600/30`}>
                    <div className={`w-2 h-2 rounded-full ${standard.color.replace('text-', 'bg-')}`} />
                    <span className={`text-xs font-semibold ${standard.color}`}>{standard.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-green-400" />
                <span className="text-white font-semibold">Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold">Seguridad</span>
              </div>
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-6 h-6 text-purple-400" />
                <span className="text-white font-semibold">Calidad</span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="container mx-auto px-6 py-20 bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Preguntas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Frecuentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Resolvemos las dudas más comunes sobre ciberseguridad en ICE
            </p>
            <div className="text-sm text-green-400 font-semibold tracking-wider">
              CLARIDAD • CONOCIMIENTO • CONFIANZA
            </div>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={containerVariants}
          >
            {[
              {
                question: '¿Por qué es importante la ciberseguridad para ICE?',
                answer: 'Como empresa que maneja datos sensibles de clientes y opera digitalmente, la ciberseguridad nos protege contra pérdidas financieras, daño reputacional y problemas legales. Además, nos diferencia como un proveedor confiable en el mercado.',
                icon: QuestionMarkCircleIcon,
                category: 'Estrategia'
              },
              {
                question: '¿Qué debo hacer si recibo un email sospechoso?',
                answer: 'NO hagas clic en enlaces ni descargues archivos. Verifica el remitente, revisa la dirección de email cuidadosamente, y si tienes dudas, reenvíalo al equipo de seguridad o elimínalo. Nunca proporciones credenciales por email.',
                icon: EnvelopeIcon,
                category: 'Práctico'
              },
              {
                question: '¿Cómo creo una contraseña realmente segura?',
                answer: 'Usa al menos 12 caracteres combinando mayúsculas, minúsculas, números y símbolos. Evita palabras del diccionario o información personal. Mejor aún, usa frases largas como "MiGato7Come!Pescado#Verde" o un gestor de contraseñas.',
                icon: KeyIcon,
                category: 'Práctico'
              },
              {
                question: '¿Qué es la autenticación de dos factores y por qué usarla?',
                answer: 'Es una capa adicional de seguridad que requiere algo que sabes (contraseña) y algo que tienes (teléfono/app). Reduce el riesgo en un 99.9% aunque tu contraseña sea comprometida. Es fácil de configurar y muy efectivo.',
                icon: ShieldCheckIcon,
                category: 'Técnico'
              },
              {
                question: '¿Puedo usar WiFi público para trabajar?',
                answer: 'Solo con precauciones extremas: usa VPN empresarial, evita acceder a información sensible, asegúrate de usar HTTPS, y nunca hagas transacciones financieras. Preferentemente, usa datos móviles o hotspot personal.',
                icon: WifiIcon,
                category: 'Práctico'
              },
              {
                question: '¿Qué hago si creo que mi computadora está infectada?',
                answer: 'Descónectala de la red inmediatamente, no la apagues, avísanos al equipo de seguridad, y no intentes "arreglarla" tú mismo. Es mejor prevenir que el malware se propague o que se pierdan evidencias importantes.',
                icon: ComputerDesktopIcon,
                category: 'Emergencia'
              },
              {
                question: '¿Con qué frecuencia debo actualizar mis sistemas?',
                answer: 'Sistemas operativos: mensualmente o cuando haya actualizaciones críticas. Antivirus: diariamente de forma automática. Software empresarial: según el cronograma IT. Navegadores: tan pronto estén disponibles.',
                icon: ArrowPathIcon,
                category: 'Mantenimiento'
              },
              {
                question: '¿Qué información NUNCA debo compartir por teléfono o email?',
                answer: 'Contraseñas, números de tarjetas completas, datos de clientes, información financiera de ICE, credenciales de sistemas, o cualquier dato que pueda comprometer la seguridad empresarial. En caso de duda, siempre pregunta.',
                icon: ExclamationTriangleIcon,
                category: 'Políticas'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                      <span className="px-2 py-1 text-xs font-semibold text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
                        {faq.category}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Knowledge Validation Section */}
        <motion.section 
          className="container mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Validación de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Conocimientos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Estas preguntas nos ayudan a evaluar el nivel de comprensión del equipo
            </p>
            <div className="text-sm text-purple-400 font-semibold tracking-wider">
              EVALUACIÓN • APRENDIZAJE • MEJORA CONTINUA
            </div>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto space-y-8"
            variants={containerVariants}
          >
            {[
              {
                number: '01',
                question: 'Escenario: Recibes un email de "Banco de Colombia" solicitando que hagas clic en un enlace para "verificar tu cuenta por seguridad". El email se ve profesional y tiene logos oficiales. ¿Qué acciones tomarías?',
                type: 'Práctico',
                focus: 'Identificación de Phishing',
                expectedAnswers: [
                  'No hacer clic en el enlace',
                  'Verificar la dirección de email del remitente',
                  'Contactar al banco por otro medio para verificar',
                  'Reportar el email como sospechoso',
                  'Eliminar el email sin abrir archivos adjuntos'
                ],
                icon: EnvelopeIcon,
                color: 'text-red-400',
                bgColor: 'bg-red-500/10'
              },
              {
                number: '02',
                question: 'Explica la diferencia entre los tres pilares de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) y proporciona un ejemplo práctico de cómo cada uno se aplicaría en ICE.',
                type: 'Conceptual',
                focus: 'Fundamentos Teóricos',
                expectedAnswers: [
                  'Confidencialidad: Solo personas autorizadas acceden a datos (ej: encriptación de datos de clientes)',
                  'Integridad: Los datos no se alteran sin autorización (ej: checksums en archivos)',
                  'Disponibilidad: Los sistemas están accesibles cuando se necesitan (ej: backups y redundancia)',
                  'Ejemplos específicos de ICE para cada pilar',
                  'Comprensión de la interrelación entre los tres'
                ],
                icon: ShieldCheckIcon,
                color: 'text-blue-400',
                bgColor: 'bg-blue-500/10'
              },
              {
                number: '03',
                question: 'Una empleada de ICE trabaja desde casa y necesita acceder a información sensible de clientes usando WiFi público en una cafetería. Describe el proceso completo que debería seguir para hacerlo de manera segura, considerando las 3 AAA.',
                type: 'Aplicación',
                focus: 'Implementación Práctica',
                expectedAnswers: [
                  'Autenticación: Usar credenciales fuertes + 2FA',
                  'Usar VPN empresarial obligatoriamente',
                  'Verificar conexión HTTPS en todos los sitios',
                  'Autorización: Solo acceder a datos necesarios para su rol',
                  'Auditoría: Asegurar que sus acciones queden registradas',
                  'Evitar pantallas visibles a otros, cerrar sesión al terminar'
                ],
                icon: WifiIcon,
                color: 'text-purple-400',
                bgColor: 'bg-purple-500/10'
              }
            ].map((question, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl border border-slate-700/50 ${question.bgColor} backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-slate-600/50`}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleQuestion(index)}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Question Number */}
                    <div className={`w-20 h-20 rounded-2xl ${question.bgColor} border border-slate-600/50 flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-2xl font-bold ${question.color}`}>{question.number}</span>
                    </div>
                    
                    {/* Question Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <question.icon className={`w-8 h-8 ${question.color}`} />
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 text-xs font-bold ${question.color} bg-slate-800/30 rounded-full border border-slate-600/30 uppercase tracking-wider`}>
                              {question.type}
                            </span>
                            <span className="text-gray-400 text-sm">{question.focus}</span>
                          </div>
                        </div>
                        
                        {/* Click indicator */}
                        <div className="ml-auto flex items-center gap-2 text-gray-400">
                          <span className="text-xs font-medium">Clic para {collapsedQuestions[index] ? 'ver' : 'ocultar'} respuesta</span>
                          <motion.div
                            animate={{ rotate: collapsedQuestions[index] ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-6 leading-relaxed pr-8">{question.question}</h3>
                      
                      {/* Collapsible Answer Section */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: collapsedQuestions[index] ? 0 : 'auto',
                          opacity: collapsedQuestions[index] ? 0 : 1
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-green-400" />
                            Elementos Clave de la Respuesta:
                          </h4>
                          <div className="space-y-3">
                            {question.expectedAnswers.map((answer, answerIndex) => (
                              <motion.div 
                                key={answerIndex} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: answerIndex * 0.1 }}
                              >
                                <div className={`w-2 h-2 rounded-full ${question.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                                <span className="text-gray-300 text-sm leading-relaxed">{answer}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className={`absolute -top-2 -right-2 w-10 h-10 rounded-full ${question.color.replace('text-', 'bg-')} flex items-center justify-center`}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: index * 2 }}
                >
                  <span className="text-white font-bold text-sm">?</span>
                </motion.div>
                
                {/* Status indicator */}
                <motion.div
                  className={`absolute top-4 right-16 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    collapsedQuestions[index] 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {collapsedQuestions[index] ? 'OCULTA' : 'VISIBLE'}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-semibold">Conocimiento</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChartBarIcon className="w-6 h-6 text-pink-400" />
                  <span className="text-white font-semibold">Evaluación</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold">Equipo</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm max-w-2xl">
                Estas preguntas se usarán en sesiones de capacitación para medir la efectividad 
                del entrenamiento y identificar áreas de mejora en nuestro programa de seguridad.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Closing Section */}
        <motion.section 
          className="container mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="relative p-12 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl border border-cyan-400/20 backdrop-blur-sm mb-12"
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl border border-cyan-400/30 pointer-events-none"
                animate={{
                  borderColor: ["rgba(6, 182, 212, 0.3)", "rgba(34, 197, 94, 0.4)", "rgba(6, 182, 212, 0.3)"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              <ShieldCheckIcon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                La ciberseguridad{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  comienza contigo
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Juntos construiremos una cultura digital segura en ICE. 
                Cada acción cuenta, cada decisión importa. Con este conocimiento, 
                estamos listos para liderar la transformación de ciberseguridad en Colombia.
              </p>
              
              <motion.div 
                className="flex items-center justify-center gap-4 text-cyan-400 text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <UserGroupIcon className="w-8 h-8" />
                <span className="font-semibold">Responsabilidad Compartida</span>
                <UserGroupIcon className="w-8 h-8" />
              </motion.div>
            </motion.div>

            {/* Author Section */}
            <motion.div 
              className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SG</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Sebastián García Casanova</h3>
                  <p className="text-cyan-400 font-semibold">Lead Architect & Security Expert</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <span>ICE COLOMBIA</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>2025</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
