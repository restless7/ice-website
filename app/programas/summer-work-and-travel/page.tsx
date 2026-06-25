import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  ClockIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  UsersIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Summer Work and Travel USA | ICE - Instituto Cultural de Educación",
  description: "Programa Summer Work and Travel en Estados Unidos. Trabaja y viaja durante las vacaciones universitarias por 3-4 meses con visa J-1.",
};

export default function SummerWorkAndTravel() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 p-3 mr-4">
                    <ArrowTopRightOnSquareIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Work & Travel</span> USA 🇺🇸
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Trabajo y Viaje • Verano</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Trabaja y viaja por Estados Unidos durante las vacaciones universitarias.
                  Una experiencia única que te permitirá ganar dinero, mejorar tu inglés,
                  conocer nuevas culturas y hacer amigos de todo el mundo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/agendar?programId=summer-work-and-travel"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Aplicar Ahora
                  </Link>
                  <Link
                    href="/agendar?programId=summer-work-and-travel"
                    className="inline-flex items-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold text-lg rounded-xl hover:bg-brand-gold/10 transition-all duration-300"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 rounded-3xl p-8 border border-brand-gold/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información del Programa</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Precio</span>
                      <span className="font-bold text-brand-gold">2,100 USD + 200,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">3-4 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Edad</span>
                      <span className="font-bold text-gray-900">18-26 años</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Temporada</span>
                      <span className="font-bold text-gray-900">Mayo - Agosto</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white/50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Sponsors oficiales:</strong><br />
                      ERDT, Signature, Life Adventures, American World Adventures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Work & Travel?
              </h2>
              <p className="text-xl text-gray-600">
                Los beneficios que te cambiarán la vida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BriefcaseIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Trabajo Legal</h3>
                <p className="text-gray-600">
                  Trabaja legalmente con visa J-1 en empleos temporales de verano
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <CurrencyDollarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Gana Dinero</h3>
                <p className="text-gray-600">
                  Obtén ingresos mientras vives una experiencia internacional
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <GlobeAltIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌎 Viaja y Explora</h3>
                <p className="text-gray-600">
                  Tiempo libre para viajar y conocer Estados Unidos
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Mejora tu Inglés</h3>
                <p className="text-gray-600">
                  Práctica constante del inglés en ambiente laboral y social
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UsersIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Amigos Internacionales</h3>
                <p className="text-gray-600">
                  Conoce estudiantes de todo el mundo en la misma experiencia
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <CheckCircleIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Experiencia Profesional</h3>
                <p className="text-gray-600">
                  Agrega experiencia laboral internacional a tu CV
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Requisitos para Aplicar
              </h2>
              <p className="text-xl text-gray-600">
                ¿Cumples con los requisitos para esta aventura?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Requisitos Básicos</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Edad:</span>
                      <p className="text-gray-700">Entre 18 y 26 años</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Estudiante Universitario:</span>
                      <p className="text-gray-700">Estudiante universitario activo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Inglés:</span>
                      <p className="text-gray-700">Nivel de inglés intermedio</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Requisitos Adicionales</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Disponibilidad:</span>
                      <p className="text-gray-700">Disponible durante vacaciones de verano</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Actitud:</span>
                      <p className="text-gray-700">Mentalidad abierta y adaptable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Regreso:</span>
                      <p className="text-gray-700">Compromiso de regreso a estudios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Trabajo Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Oportunidades laborales en diferentes sectores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏨 Hoteles y Resorts</h3>
                <p className="text-gray-600 mb-3">
                  Trabajo en hoteles, resorts y centros turísticos
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Recepción</li>
                  <li>• Housekeeping</li>
                  <li>• Servicio al cliente</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Restaurantes</h3>
                <p className="text-gray-600 mb-3">
                  Industria alimentaria y servicios de comida
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mesero/a</li>
                  <li>• Cocina</li>
                  <li>• Fast food</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎢 Parques Temáticos</h3>
                <p className="text-gray-600 mb-3">
                  Diversión y entretenimiento familiar
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Operador de atracciones</li>
                  <li>• Ventas</li>
                  <li>• Atención al cliente</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏖️ Destinos Costeros</h3>
                <p className="text-gray-600 mb-3">
                  Trabajos en zonas de playa y turismo
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Salvavidas</li>
                  <li>• Deportes acuáticos</li>
                  <li>• Servicios de playa</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🛍️ Retail</h3>
                <p className="text-gray-600 mb-3">
                  Tiendas y centros comerciales
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vendedor/a</li>
                  <li>• Cajero/a</li>
                  <li>• Inventario</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏕️ Campamentos</h3>
                <p className="text-gray-600 mb-3">
                  Actividades de verano y recreación
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Staff de campamento</li>
                  <li>• Actividades deportivas</li>
                  <li>• Entretenimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cronograma del Programa
              </h2>
              <p className="text-xl text-gray-600">
                Planifica tu experiencia Work & Travel
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Diciembre - Febrero</h3>
                  <p className="text-gray-600">Aplicación, documentos y preparación inicial</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Marzo - Abril</h3>
                  <p className="text-gray-600">Búsqueda de empleo, entrevistas y tramite de visa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mayo - Agosto</h3>
                  <p className="text-gray-600">¡Viajas, trabajas y vives la experiencia en USA!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para tu Work & Travel? 🚀
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu aventura laboral en Estados Unidos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 3104994800</p>
                <p className="text-gray-600 text-sm">Manuel - Procesos Colombia</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <EnvelopeIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Escríbenos</h3>
                <p className="text-brand-gold font-semibold">info.col@icebga.com</p>
                <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agendar?programId=summer-work-and-travel"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Aplicar Ahora
              </Link>
              <Link
                href="https://wa.me/573104994800?text=Hola,%20estoy%20interesado%20en%20el%20programa%20Summer%20Work%20and%20Travel"
                target="_blank"
                className="inline-flex items-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold text-lg rounded-xl hover:bg-brand-gold/10 transition-all duration-300"
              >
                WhatsApp Procesos
              </Link>
            </div>
          </div>
        </section>
      </div>
    
        {/* Scheduling Widget */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" id="agendar">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Listo para iniciar tu proceso?
              </h2>
              <p className="text-xl text-gray-600">
                Agenda una asesoría gratuita o asiste a nuestras charlas informativas
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
              <IceSchedulingWidget />
            </div>
          </div>
        </section>
</IceLayoutWrapper>
  );
}