"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  CheckCircle,
  Cpu,
  Users,
  FileText,
  BarChart2,
  Layers,
  MessageSquare,
} from "lucide-react";
import { RainbowButton } from "@/app/components/ui/rainbow-button";
import SectionSeparator from "@/app/components/ui/SectionSeparator";
import { DotPattern } from "@/app/components/magicui/dot-pattern";

export default function IceProposalPage() {
  const trustBadges = [
    { icon: CheckCircle, text: "Soluciones modulares y escalables" },
    { icon: CheckCircle, text: "Integración con procesos existentes" },
    { icon: CheckCircle, text: "100% Seguro y en cumplimiento" },
    { icon: CheckCircle, text: "Soporte y optimización continua" },
  ];

  const modules = [
    {
      icon: MessageSquare,
      title: "Automatización de Leads y Flujo Comercial",
      description:
        "Asistente IA multicanal (WhatsApp, Instagram, Web) que cualifica prospectos y agenda automáticamente en los calendarios de los agentes adecuados.",
    },
    {
      icon: BarChart2,
      title: "Panel de Desempeño de Agentes",
      description:
        "Métricas en tiempo real sobre tiempos de respuesta, conversiones y ranking de desempeño, con informes descargables para dirección.",
    },
    {
      icon: FileText,
      title: "Portal Estudiantil",
      description:
        "Plataforma segura para carga de documentos con validación automática y seguimiento tipo tracker del estado de la aplicación.",
    },
    {
      icon: Layers,
      title: "Integración ERP",
      description:
        "Centraliza programas, finanzas y operaciones en un solo lugar con reportes estratégicos para la toma de decisiones.",
    },
    {
      icon: Cpu,
      title: "Agente de Soporte IA 24/7",
      description:
        "Responde preguntas frecuentes al instante y escala solo casos complejos a agentes humanos, reduciendo carga operativa.",
    },
  ];

  const pricing = [
    { module: "Automatización de Leads", monthly: "$300,000", local: "$3,500,000" },
    { module: "Panel de Agentes", monthly: "$650,000", local: "$6,500,000" },
    { module: "Portal Estudiantil", monthly: "--", local: "$4,500,000" },
    { module: "ERP Integrado", monthly: "--", local: "$9,000,000" },
    { module: "Agente Soporte IA", monthly: "$500,000", local: "$4,000,000" },
  ];

  const steps = [
    {
      number: "1",
      title: "Auditoría y Diseño",
      description: "2 semanas de análisis de procesos y definición de requerimientos.",
    },
    {
      number: "2",
      title: "Prototipado y UX",
      description: "2 semanas para crear prototipos interactivos y validar la experiencia.",
    },
    {
      number: "3",
      title: "Desarrollo e Integraciones",
      description: "6 a 8 semanas de implementación de módulos y conexión con sistemas existentes.",
    },
    {
      number: "4",
      title: "Capacitación y Lanzamiento",
      description: "2 semanas para entrenamiento del equipo y despliegue seguro.",
    },
    {
      number: "5",
      title: "Optimización Continua",
      description: "Soporte y mejoras periódicas según métricas y retroalimentación.",
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const badgeInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % trustBadges.length);
    }, 3000);
    return () => clearInterval(badgeInterval);
  }, [trustBadges.length]);

  const StepCard = ({ number, title, description, isActive }: any) => (
    <div className="text-center">
      <div
        className={`relative flex items-center justify-center w-20 h-20 border-2 rounded-full mx-auto mb-6 transition-all duration-700 ease-in-out ${
          isActive
            ? "border-emerald-400 shadow-[0_0_20px_4px] shadow-emerald-500/60 scale-110"
            : "border-emerald-400/30"
        }`}
      >
        <span
          className={`text-3xl font-bold ${
            isActive ? "text-emerald-300" : "text-emerald-400/70"
          }`}
        >
          {number}
        </span>
      </div>
      <h3
        className={`text-2xl font-bold mb-3 ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {title}
      </h3>
      <p className="text-gray-400 max-w-xs mx-auto">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-20 text-center container mx-auto px-6">
          <div className="absolute inset-0 -z-10 bg-gray-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <DotPattern
            width={15}
            height={15}
            cx={1}
            cy={1}
            cr={1}
            className="fill-white/5 absolute top-0 left-0 w-full h-full"
            backgroundColor="transparent"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Propuesta de Transformación Digital
            <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              ICE Colombia & APEX AI Solutions
            </span>
          </h1>
          <p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Un plan modular para optimizar operaciones, mejorar la experiencia del estudiante y
            aumentar la conversión de prospectos con tecnología de inteligencia artificial.
          </p>
          <RainbowButton className="px-10 py-6 h-14 rounded-xl transition-all transform hover:scale-105 text-lg animate-fade-in-up mb-12">
            <Zap className="mr-3 text-2xl" /> Agendar Demo Técnica
          </RainbowButton>
          <div
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center transition-all duration-500 ${
                    currentFeature === index ? "text-emerald-400 scale-110" : ""
                  }`}
                >
                  <Icon className="mr-2 text-emerald-400" size={16} />
                  {badge.text}
                </div>
              );
            })}
          </div>
        </section>

        <SectionSeparator />

        {/* Resumen Ejecutivo */}
        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-400 mb-6">Resumen Ejecutivo – Potenciando Sueños con Inteligencia Artificial</h2>
              <div className="text-left bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  En APEX AI Solutions, entendemos que la misión de ICE Colombia va más allá de tramitar visas o coordinar programas: <span className="text-emerald-400 font-semibold">se trata de abrir puertas, transformar vidas y cumplir sueños</span>. Sin embargo, también reconocemos que estos procesos implican una alta carga operativa, seguimiento constante y la necesidad de ofrecer una experiencia transparente y ágil tanto para los estudiantes como para su equipo.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Nuestra propuesta combina <span className="text-emerald-400 font-semibold">automatización inteligente, plataformas modulares y análisis de datos en tiempo real</span> para que ICE pueda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Captar y gestionar leads de forma más eficiente</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Evaluar y optimizar el rendimiento de sus agentes</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Ofrecer a los estudiantes un portal seguro y transparente</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Integrar y centralizar datos operativos en un ERP interno</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg col-span-full">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Mejorar la atención al cliente con un agente multicanal 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Desafíos Identificados */}
        <section className="py-20 bg-gray-900/70">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">Desafíos Identificados</h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Tras nuestro encuentro y análisis preliminar, hemos detectado cinco áreas clave de mejora:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <MessageSquare className="text-red-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Adquisición y flujo de leads</h3>
                      <p className="text-gray-400">Procesos manuales que retrasan la atención inicial y reducen las tasas de conversión.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-500/10 p-3 rounded-lg">
                      <BarChart2 className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Medición del desempeño de agentes</h3>
                      <p className="text-gray-400">Falta de métricas centralizadas y objetivas.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <FileText className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Gestión documental estudiantil</h3>
                      <p className="text-gray-400">Uso de múltiples canales (email, WhatsApp, físico) sin un portal unificado.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <Layers className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">ERP y gestión interna</h3>
                      <p className="text-gray-400">Información dispersa que dificulta la planificación y control de operaciones.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 transition-colors col-span-full">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <Cpu className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Atención al cliente</h3>
                      <p className="text-gray-400">Respuestas lentas fuera de horario laboral, con riesgo de perder oportunidades.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Módulos */}
        <section className="py-20 bg-gray-900/70">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Solución Modular APEX AI</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Activa los módulos que más impacto generen en tu operación, pagando solo por lo que
                necesitas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="bg-gray-800/50 p-6 rounded-2xl border border-white/10 hover:border-emerald-400/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-emerald-400 mb-4">
                      <Icon size={30} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{m.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Tabla de Precios */}
        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Tabla de Inversión</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-emerald-400">
                    <th className="p-4">Módulo</th>
                    <th className="p-4">Suscripción Mensual</th>
                    <th className="p-4">Implementación Local</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((p, i) => (
                    <tr key={i} className="border-b border-gray-700">
                      <td className="p-4">{p.module}</td>
                      <td className="p-4">{p.monthly}</td>
                      <td className="p-4">{p.local}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-900 text-emerald-300 font-semibold">
                    <td className="p-4">Descuento Paquete Completo</td>
                    <td className="p-4">-20% mensual</td>
                    <td className="p-4">-25% total</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Plan de Implementación */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Plan de Implementación</h2>
              <p className="text-lg text-gray-400">
                Una metodología colaborativa y transparente para garantizar resultados.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <StepCard
                  key={i}
                  number={s.number}
                  title={s.title}
                  description={s.description}
                  isActive={activeStep === i}
                />
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Modelos de Entrega */}
        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Modelos de Entrega</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Elige la modalidad que mejor se adapte a las necesidades y preferencias de ICE Colombia:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Opción SaaS */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/5 border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                  RECOMENDADO
                </div>
                <div className="mb-6">
                  <div className="bg-emerald-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Opción 1 – Suscripción SaaS</h3>
                  <p className="text-emerald-300 font-semibold mb-4">Plataforma en la nube con máxima flexibilidad</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Acceso a plataforma en la nube</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Actualizaciones y mantenimiento incluidos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Pago mensual según módulos activos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Sin inversión inicial alta</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Escalabilidad inmediata</span>
                  </li>
                </ul>
                <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <p className="text-emerald-300 font-semibold text-center">Desde $300,000 COP/mes por módulo</p>
                  <p className="text-gray-400 text-sm text-center mt-1">Descuentos por paquetes completos</p>
                </div>
              </div>

              {/* Opción Local */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className="mb-6">
                  <div className="bg-gray-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Opción 2 – Implementación Local</h3>
                  <p className="text-gray-400 font-semibold mb-4">Control total en sus servidores</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gray-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Instalación en servidores propios de ICE</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gray-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Personalización total del sistema</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gray-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Pago único por desarrollo e implementación</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gray-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Control total de datos y operación</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="text-gray-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">Sin dependencias externas</span>
                  </li>
                </ul>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <p className="text-gray-300 font-semibold text-center">Desde $3,500,000 COP por módulo</p>
                  <p className="text-gray-400 text-sm text-center mt-1">Pago único + mantenimiento anual</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Por qué APEX AI Solutions */}
        <section className="py-20 bg-gray-900/70">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald-400 mb-6">Por Qué APEX AI Solutions</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Más que un proveedor tecnológico, somos su socio estratégico para la transformación digital.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Flexibilidad Modular</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crece y escala según tus necesidades. Activa solo los módulos que requieras y expande cuando estés listo.
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart2 className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enfoque en Resultados</h3>
                <p className="text-gray-300 leading-relaxed">
                  Medimos éxito en términos de reducción de carga operativa y aumento de conversiones, no solo entrega de software.
                </p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 text-center">
                <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Socio Estratégico</h3>
                <p className="text-gray-300 leading-relaxed">
                  Buscamos una relación a largo plazo que convierta a ICE en un caso de éxito y referente del sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center relative">
          <DotPattern
            width={15}
            height={15}
            cx={1}
            cy={1}
            cr={1}
            className="fill-white/5 absolute top-0 left-0 w-full h-full"
            backgroundColor="transparent"
          />
          <h2 className="text-4xl font-bold text-white mb-4">¿Listos para comenzar?</h2>
          <p className="text-emerald-100 text-xl mb-8 max-w-3xl mx-auto">
            Agenda una demo técnica personalizada y descubre cómo APEX AI Solutions puede
            transformar la operación de ICE Colombia.
          </p>
          <RainbowButton className="px-10 py-6 h-14 rounded-xl transition-all transform hover:scale-105 text-lg shadow-xl mb-16">
            <FileText className="mr-3 text-2xl" /> Agendar Demo Técnica
          </RainbowButton>

          {/* Sección de Contacto */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Contacto</h3>
              <p className="text-gray-300">Su Director de Proyectos dedicado</p>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-1">Jhoan Karlo Sebastian García Casanova</h4>
                <p className="text-emerald-300 font-semibold">Director de Proyectos</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-emerald-400 font-semibold mb-1">📧 Email</div>
                  <a href="mailto:support@apexaisolutions.dev" className="text-gray-300 hover:text-emerald-300 transition-colors">
                    support@apexaisolutions.dev
                  </a>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-emerald-400 font-semibold mb-1">🌐 Website</div>
                  <a href="https://www.apexaisolutions.dev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors">
                    www.apexaisolutions.dev
                  </a>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  🔒 <strong>Propuesta confidencial</strong> - Exclusiva para ICE Colombia
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Este documento contiene información confidencial. No compartir sin autorización.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
