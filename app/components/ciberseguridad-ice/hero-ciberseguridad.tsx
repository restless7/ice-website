'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ArrowRightIcon, ShieldCheckIcon, ServerIcon, LockClosedIcon, CloudIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function HeroCiberseguridad() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { text: 'Cumplimiento Garantizado', color: 'from-blue-500 to-cyan-500' },
    { text: 'Confianza del Cliente', color: 'from-green-500 to-emerald-500' },
    { text: 'Crecimiento Sostenible', color: 'from-purple-500 to-indigo-500' },
    { text: 'Liderazgo en Seguridad', color: 'from-orange-500 to-red-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryAction = () => {
    scrollToSection('roadmap-section');
  };

  const handleSecondaryAction = () => {
    scrollToSection('valor-negocio-section');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden py-16 lg:py-20">
      {/* Elementos de Fondo Animados */}
      <div className="absolute inset-0">
        {/* Patrón sutil de cuadrícula */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Elementos flotantes de seguridad */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          >
            <ShieldCheckIcon className="w-12 h-12 text-blue-600" />
          </motion.div>
        ))}

        {/* Líneas conectoras sutiles */}
        <div className="absolute inset-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
              style={{
                top: `${25 + i * 20}%`,
                width: `${60 + i * 10}%`,
                left: `${-10 + i * 5}%`,
              }}
              animate={{
                x: ['-50%', '150%'],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda - Contenido */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-6 py-3 text-sm font-semibold tracking-wider bg-blue-50/50"
              >
                ICE × APEX CIBERSEGURIDAD
              </Badge>
            </motion.div>

            {/* Titular Principal */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-900">Cimientos Seguros para un</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                Crecimiento Exponencial
              </span>
            </motion.h1>
            
            {/* Subtítulo */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Construyendo la alianza ICE + Apex con seguridad de nivel empresarial, cumplimiento y resiliencia — desde el día uno.
            </motion.p>

            {/* Característica Destacada Dinámica */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 min-h-[2.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                key={currentFeature}
                className={`flex items-center gap-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${features[currentFeature].color}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse" />
                {features[currentFeature].text}
              </motion.div>
            </motion.div>
            
            {/* Botones de Acción */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-10 py-6 text-lg rounded-xl shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0 group"
                onClick={handlePrimaryAction}
              >
                Ver el Roadmap de Seguridad
                <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-10 py-6 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm group"
                onClick={handleSecondaryAction}
              >
                <ShieldCheckIcon className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Por Qué Esto Es Clave para Crecer
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Columna Derecha - Diagrama de Arquitectura */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Contenedor Principal de Arquitectura */}
            <div className="relative">
              {/* Marco de Arquitectura 3D */}
              <motion.div 
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-100"
                style={{
                  transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                }}
                animate={{
                  rotateY: [-5, 0, -5],
                  rotateX: [5, 10, 5],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Diagrama de Arquitectura en Capas */}
                <div className="w-80 h-96 relative">
                  
                  {/* Capa 5: Gobernanza (Superior) */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-2xl flex items-center justify-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  >
                    <span className="text-white font-semibold text-sm">Gobernanza y Cumplimiento</span>
                  </motion.div>

                  {/* Capa 4: Aplicaciones */}
                  <motion.div 
                    className="absolute top-16 left-2 right-2 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-between px-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white font-medium text-xs">CRM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white font-medium text-xs">ERP</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span className="text-white font-medium text-xs">Portal</span>
                    </div>
                  </motion.div>

                  {/* Capa 3: Controles Detectives */}
                  <motion.div 
                    className="absolute top-36 left-4 right-4 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold text-sm">Monitoreo Continuo</span>
                    </div>
                  </motion.div>

                  {/* Capa 2: Controles Preventivos */}
                  <motion.div 
                    className="absolute top-54 left-6 right-6 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-around px-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <div className="flex flex-col items-center">
                      <LockClosedIcon className="w-4 h-4 text-white mb-1" />
                      <span className="text-white text-xs font-medium">IAM/RBAC</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <ShieldCheckIcon className="w-4 h-4 text-white mb-1" />
                      <span className="text-white text-xs font-medium">Firewall</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <LockClosedIcon className="w-4 h-4 text-white mb-1" />
                      <span className="text-white text-xs font-medium">Cifrado</span>
                    </div>
                  </motion.div>

                  {/* Capa 1: Infraestructura (Base) */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-slate-600 to-gray-700 rounded-b-2xl flex items-center justify-around px-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <div className="flex flex-col items-center">
                      <ServerIcon className="w-6 h-6 text-white mb-1" />
                      <span className="text-white text-xs font-medium">Servidores ICE</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <CloudIcon className="w-6 h-6 text-white mb-1" />
                      <span className="text-white text-xs font-medium">Cloud Seguro</span>
                    </div>
                  </motion.div>

                  {/* Flujos de datos encriptados */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-t from-blue-400 to-green-400 rounded-full"
                      style={{
                        left: `${30 + i * 30}%`,
                        top: `${60 + i * 5}%`,
                      }}
                      animate={{
                        scaleY: [0.5, 1.2, 0.5],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                {/* Borde brillante */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-blue-200 pointer-events-none"
                  animate={{
                    borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(168, 85, 247, 0.4)", "rgba(59, 130, 246, 0.2)"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              {/* Estadísticas Flotantes */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [-1, 1, -1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                100% Cumplimiento
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ 
                  y: [8, -8, 8],
                  rotate: [1, -1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                Crecimiento Seguro
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de Scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('riesgos-actuales-section')}
      >
        <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center hover:border-blue-600 transition-colors">
          <motion.div 
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
