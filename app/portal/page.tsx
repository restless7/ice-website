"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { LogIn, UserPlus, BookOpen, FileText, MessageCircle, Bell, User, Settings, Calendar, CreditCard, Award, Globe, Shield } from "lucide-react";
import Link from "next/link";

const portalFeatures = [
  {
    icon: FileText,
    title: "Gestión de Documentos",
    description: "Sube y gestiona todos tus documentos necesarios para el programa"
  },
  {
    icon: Calendar,
    title: "Cronograma Personal",
    description: "Sigue tu cronograma personalizado de actividades y fechas importantes"
  },
  {
    icon: CreditCard,
    title: "Pagos y Facturación",
    description: "Realiza pagos seguros y consulta el estado de tu cuenta"
  },
  {
    icon: MessageCircle,
    title: "Comunicación Directa",
    description: "Chatea directamente con tu asesor asignado y recibe soporte"
  },
  {
    icon: Bell,
    title: "Notificaciones",
    description: "Recibe actualizaciones importantes sobre tu programa"
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Accede a tus certificados y credenciales del programa"
  }
];

const quickActions = [
  {
    title: "Subir Documentos",
    description: "Añade documentos faltantes",
    icon: FileText,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Ver Cronograma",
    description: "Próximas actividades",
    icon: Calendar,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Realizar Pago",
    description: "Pagos pendientes",
    icon: CreditCard,
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Contactar Asesor",
    description: "Obtener ayuda",
    icon: MessageCircle,
    color: "from-orange-500 to-red-500"
  }
];

const studentServices = [
  {
    icon: Globe,
    title: "Soporte Internacional",
    description: "Asistencia 24/7 en tu destino",
    features: ["Línea de emergencia", "Apoyo local", "Traducción de documentos"]
  },
  {
    icon: BookOpen,
    title: "Recursos Académicos",
    description: "Material educativo exclusivo",
    features: ["Guías de estudio", "Cursos preparatorios", "Talleres especializados"]
  },
  {
    icon: Shield,
    title: "Seguridad y Bienestar",
    description: "Tu seguridad es nuestra prioridad",
    features: ["Seguro médico", "Protocolo de seguridad", "Contactos de emergencia"]
  }
];

export default function IcePortalPage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Portal <span className="text-lime-400">Estudiantil</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
                Tu centro de control para gestionar todos los aspectos de tu experiencia educativa internacional
              </p>
              
              {/* Login/Register Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-4 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300 shadow-xl"
                >
                  <LogIn className="w-6 h-6" />
                  Iniciar Sesión
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-lg"
                >
                  <UserPlus className="w-6 h-6" />
                  Crear Cuenta
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Funcionalidades del <span className="text-lime-400">Portal</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Todo lo que necesitas para gestionar tu experiencia educativa en un solo lugar
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portalFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-6">
                      <IconComponent className="w-12 h-12 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                    <p className="text-white/80 text-center leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Dashboard Preview */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vista Previa del <span className="text-lime-400">Dashboard</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Una interfaz intuitiva diseñada para simplificar tu experiencia
              </p>
            </motion.div>

            {/* Mock Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-lime-400/20 overflow-hidden"
            >
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-lime-400/20 to-green-500/20 p-6 border-b border-lime-400/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Bienvenido, María González</h3>
                      <p className="text-white/70">Programa: Work & Travel Canadá 2024</p>
                    </div>
                  </div>
                  <Settings className="w-6 h-6 text-white/70 hover:text-lime-400 cursor-pointer" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <motion.div
                        key={action.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${action.color} p-6 rounded-xl text-white cursor-pointer hover:scale-105 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 mb-3" />
                        <h4 className="font-semibold mb-1">{action.title}</h4>
                        <p className="text-sm opacity-90">{action.description}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Section */}
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-white font-semibold text-lg mb-4">Progreso de tu Aplicación</h4>
                  <div className="space-y-4">
                    {[
                      { step: "Documentos Básicos", progress: 100, status: "completed" },
                      { step: "Entrevista Virtual", progress: 100, status: "completed" },
                      { step: "Pago de Cuotas", progress: 60, status: "in-progress" },
                      { step: "Visa y Permisos", progress: 0, status: "pending" }
                    ].map((item, index) => (
                      <div key={item.step} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white/80">{item.step}</span>
                          <span className="text-lime-400 font-semibold">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              item.status === 'completed' ? 'bg-green-500' :
                              item.status === 'in-progress' ? 'bg-lime-400' : 'bg-gray-500'
                            }`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Student Services */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Servicios <span className="text-lime-400">Estudiantiles</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Soporte integral antes, durante y después de tu experiencia
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {studentServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <IconComponent className="w-10 h-10 text-lime-400" />
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-white/80 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Access Portal CTA */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para <span className="text-lime-400">Comenzar?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Accede a tu portal estudiantil y comienza a gestionar tu experiencia educativa internacional
              </p>
              
              <div className="space-y-6">
                {/* Login Form Preview */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 max-w-md mx-auto">
                  <h3 className="text-white font-semibold text-lg mb-6">Acceso Rápido</h3>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email o ID de estudiante"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent backdrop-blur-lg transition-all duration-300"
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent backdrop-blur-lg transition-all duration-300"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-lime-500 hover:to-green-600 transition-all duration-300"
                    >
                      Ingresar al Portal
                    </motion.button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/70 text-sm mb-4">¿No tienes una cuenta?</p>
                    <Link 
                      href="/ice-contacto"
                      className="text-lime-400 hover:text-lime-300 font-semibold text-sm transition-colors duration-300"
                    >
                      Contáctanos para crear tu cuenta →
                    </Link>
                  </div>
                </div>

                {/* Support Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/ice-contacto"
                    className="text-white/70 hover:text-lime-400 font-medium transition-colors duration-300"
                  >
                    ¿Necesitas ayuda?
                  </Link>
                  <span className="text-white/30 hidden sm:block">•</span>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-lime-400 font-medium transition-colors duration-300"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <span className="text-white/30 hidden sm:block">•</span>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-lime-400 font-medium transition-colors duration-300"
                  >
                    Guía del Portal
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
