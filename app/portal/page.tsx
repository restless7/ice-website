"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { LogIn, UserPlus, BookOpen, FileText, MessageCircle, Bell, User, Settings, Calendar, CreditCard, Award, Globe, Shield, Loader2, AlertCircle } from "lucide-react";
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
          router.push("/portal/dashboard");
        } else {
          router.push("/portal/dashboard");
        }
      } else {
        setError(result.error || "Credenciales inválidas. Intenta de nuevo.");
      }
    } catch (err: any) {
      setError(err.message || "Error de conexión. Verifica que el servidor esté disponible.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Branding */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Portal <span className="text-lime-400">Estudiantil</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-8">
                  Tu centro de control para gestionar todos los aspectos de tu experiencia educativa internacional
                </p>
                <div className="flex items-center gap-4 text-white/60">
                  <Shield className="w-5 h-5 text-lime-400" />
                  <span>Acceso seguro • Datos en tiempo real • Soporte 24/7</span>
                </div>
              </motion.div>

              {/* Right: Login Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 max-w-md mx-auto">
                  <h3 className="text-white font-semibold text-2xl mb-2">Iniciar Sesión</h3>
                  <p className="text-white/60 text-sm mb-6">Accede con las credenciales proporcionadas por ICE</p>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-3 mb-4"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span className="text-red-300 text-sm">{error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="text-white/70 text-sm mb-1 block">Email o ID de estudiante</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent backdrop-blur-lg transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-1 block">Contraseña</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent backdrop-blur-lg transition-all duration-300"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-lime-500 hover:to-green-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Verificando...
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5" />
                          Ingresar al Portal
                        </>
                      )}
                    </motion.button>
                  </form>
                  
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
              </motion.div>
            </div>
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

        {/* Support Links */}
        <section className="relative py-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
