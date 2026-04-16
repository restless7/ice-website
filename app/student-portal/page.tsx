"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { LogIn, UserPlus, BookOpen, FileText, MessageCircle, Bell, User, Settings, Calendar, CreditCard, Award, Globe, Shield, Loader2, AlertCircle, Key } from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/lib/portal-api";

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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await login(email, password);
      if (result.success) {
        // Redirect based on role
        if (result.user?.role === "STUDENT") {
          router.push("/student-portal/dashboard");
        } else {
          router.push("/student-portal/dashboard");
        }
      } else {
        setError(result.error || "Credenciales inválidas. Intenta de nuevo.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error de conexión. Verifica que el servidor esté disponible.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Background decorative elements matching main site */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px]" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Branding */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6">
                  <Shield className="w-3 h-3" />
                  Acceso Seguro
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Portal <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Estudiantil</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-8 leading-relaxed">
                  Gestiona tu proceso de intercambio, documentos y pagos desde un solo lugar con soporte en tiempo real.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    <span>Datos en tiempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Login Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl max-w-md mx-auto relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-orange"></div>
                  
                  <div className="mb-8">
                    <h3 className="text-white font-bold text-3xl mb-2">Bienvenido</h3>
                    <p className="text-white/60 text-sm">Ingresa tus credenciales para continuar</p>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-6"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-red-200 text-sm">{error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <label className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2 block ml-1">Email Registrado</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          type="email"
                          autoComplete="username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          required
                          className="w-full pl-10 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2 block ml-1">Contraseña</label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          type="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                          className="w-full pl-10 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Link href="#" className="text-xs text-brand-gold hover:text-brand-orange transition-colors">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold py-4 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(255,183,3,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Autenticando...
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5" />
                          Entrar al Sistema
                        </>
                      )}
                    </motion.button>
                  </form>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <p className="text-white/50 text-sm mb-2">¿Aún no tienes acceso?</p>
                    <Link 
                      href="/contacto"
                      className="text-white hover:text-brand-gold font-bold text-sm transition-colors duration-300 flex items-center justify-center gap-2 group"
                    >
                      Solicitar Credenciales 
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="relative py-24 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tu Centro de <span className="text-brand-gold">Gestión</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Herramientas diseñadas para facilitar cada etapa de tu proceso internacional.
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
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Services */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Servicios <span className="text-brand-orange">Premium</span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Acompañamiento integral en tu destino y recursos exclusivos.
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
                    className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 group hover:border-brand-orange/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-brand-orange" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-white/70 text-base mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-brand-orange rounded-full"></div>
                          <span className="text-white/50 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Support Section */}
        <section className="relative py-16 border-t border-white/5 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="text-white font-bold text-xl mb-1">¿Necesitas ayuda técnica?</h4>
                <p className="text-white/50 text-sm">Nuestro equipo de soporte está disponible para asistirte.</p>
              </div>
              <div className="flex gap-4">
                <Link href="/contacto" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all">
                  Contactar Soporte
                </Link>
                <Link href="#" className="px-6 py-3 bg-brand-gold/10 hover:bg-brand-gold/20 border border-brand-gold/20 text-brand-gold text-sm font-bold rounded-xl transition-all">
                  Ver Guía
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
