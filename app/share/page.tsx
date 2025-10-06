"use client";

import React from 'react';
import ProposalSharing from '@/app/components/ui/ProposalSharing';
import { DotPattern } from '@/app/components/magicui/dot-pattern';
import { Shield, Clock, BarChart3, Users } from 'lucide-react';

export default function IceSharePage() {
  const defaultData = {
    recipientName: 'Dr. Juan Pérez',
    recipientEmail: 'director@ice.edu.co',
    companyName: 'ICE Colombia',
    senderName: 'Sebastian García',
    senderEmail: 'sebastian@apexdigitalsolutions.com'
  };

  const features = [
    {
      icon: Shield,
      title: 'Enlace Seguro',
      description: 'Token único con validación y expiración automática'
    },
    {
      icon: BarChart3,
      title: 'Tracking Completo',
      description: 'Visualizaciones y engagement automáticamente rastreados'
    },
    {
      icon: Clock,
      title: 'Control de Tiempo',
      description: 'Propuesta válida por 30 días con renovación fácil'
    },
    {
      icon: Users,
      title: 'Profesional',
      description: 'Experiencia branded y personalizada para cada cliente'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
              🎯 Sistema de Compartir Profesional
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Comparte la Propuesta
              <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                ICE Colombia
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Herramientas profesionales para compartir tu propuesta de transformación digital de forma segura, trackeable y efectiva.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="bg-emerald-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Sharing Component */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <ProposalSharing 
            proposalToken="ice-colombia-2024-unique-token"
            defaultData={defaultData}
            className="max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* Instructions */}
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">
              📚 Guía de Uso
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">🎯 Para Reuniones Presenciales</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Usa el <strong>Resumen</strong> para copiar la URL directa</li>
                  <li>• Comparte la URL en tu presentación</li>
                  <li>• El cliente puede acceder desde cualquier dispositivo</li>
                  <li>• Las visualizaciones se trackean automáticamente</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">📧 Para Envío por Email</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Personaliza los datos del cliente</li>
                  <li>• Usa la pestaña <strong>Email</strong></li>
                  <li>• Copia el HTML y pégalo en tu cliente de email</li>
                  <li>• También puedes descargar el archivo HTML</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">📱 Para WhatsApp/SMS</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Usa la pestaña <strong>WhatsApp</strong></li>
                  <li>• El mensaje está optimizado para móvil</li>
                  <li>• Incluye emojis y formato profesional</li>
                  <li>• Botón directo para abrir WhatsApp Web</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">💼 Para LinkedIn</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mensaje corporativo y profesional</li>
                  <li>• Perfecto para primeros contactos</li>
                  <li>• Genera curiosidad sin revelar detalles</li>
                  <li>• Invita a revisar la propuesta privada</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-emerald-400">🔐 Seguridad y Privacidad</h3>
              <p className="text-gray-300">
                Cada enlace es único y está protegido con token de seguridad. Solo las personas con el enlace exacto pueden acceder. 
                La propuesta expira automáticamente después de 30 días y puedes desactivarla en cualquier momento desde el panel de admin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
