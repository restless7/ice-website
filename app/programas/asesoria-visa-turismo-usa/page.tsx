import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Asesoría en Visa de Turismo USA | ICE - Instituto Cultural de Educación",
  description: "Expertos en trámites y asesoría para obtener tu visa de turista para Estados Unidos. Revisión de documentos, preparación de entrevista y seguimiento personalizado.",
};

export default function AsesoriaTurismoUSA() {
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
                    <DocumentTextIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      Asesoría en <span className="text-brand-gold">Visa USA</span>
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Turismo • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Expertos en trámites y asesoría para obtener tu visa de turista para Estados Unidos. 
                  Te acompañamos en cada paso del proceso con revisión de documentos, preparación 
                  para la entrevista y seguimiento personalizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Solicitar Asesoría
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold text-lg rounded-xl hover:bg-brand-gold/10 transition-all duration-300"
                  >
                    Consulta Gratis
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 rounded-3xl p-8 border border-brand-gold/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información Rápida</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Precio</span>
                      <span className="font-bold text-brand-gold">250,000 COP + 185 USD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Reaplica</span>
                      <span className="font-bold text-brand-gold">150,000 COP + 185 USD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">Proceso completo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Tipo de Visa</span>
                      <span className="font-bold text-gray-900">B1/B2 Turismo</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/50 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong>Descuentos grupales disponibles:</strong><br />
                      Consulta por precios especiales para grupos familiares o de amigos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué incluye nuestro servicio?
              </h2>
              <p className="text-xl text-gray-600">
                Acompañamiento completo para maximizar tus posibilidades de aprobación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl p-3 mb-4">
                  <CheckCircleIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Revisión de Documentos</h3>
                <p className="text-gray-600">
                  Análisis completo de tu documentación para asegurar que cumples 
                  con todos los requisitos consulares.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl p-3 mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preparación de Entrevista</h3>
                <p className="text-gray-600">
                  Simulacros de entrevista y coaching personalizado para que 
                  te sientas seguro el día de tu cita consular.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl p-3 mb-4">
                  <DocumentTextIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Seguimiento Personalizado</h3>
                <p className="text-gray-600">
                  Acompañamiento durante todo el proceso hasta obtener 
                  la resolución de tu solicitud de visa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Visa Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Otros Tipos de Visa
              </h2>
              <p className="text-xl text-gray-600">
                También ofrecemos asesoría para otros tipos de visa estadounidense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visa J-1</h3>
                <p className="text-gray-600 mb-4">
                  Para programas de intercambio cultural como Work & Travel, 
                  Au Pair, Camp Counselor.
                </p>
                <p className="text-brand-gold font-bold">300,000 COP + tasas</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visa F-1</h3>
                <p className="text-gray-600 mb-4">
                  Para estudiantes que desean estudiar en instituciones 
                  educativas de Estados Unidos.
                </p>
                <p className="text-brand-gold font-bold">300,000 COP + tasas</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visa H2B</h3>
                <p className="text-gray-600 mb-4">
                  Para trabajadores temporales en empleos estacionales 
                  en Estados Unidos.
                </p>
                <p className="text-brand-gold font-bold">300,000 COP + tasas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Requisitos Generales
              </h2>
              <p className="text-xl text-gray-600">
                Documentos que necesitarás para tu solicitud de visa
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Documentos Básicos</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pasaporte vigente (mínimo 6 meses)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Formulario DS-160 completado</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fotografía según especificaciones</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprobante de pago de la tarifa</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Documentos de Soporte</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificados de ingresos y laborales</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Estados bancarios y financieros</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Itinerario de viaje tentativo</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Vínculos familiares y propiedades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para comenzar tu proceso?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo de expertos está listo para ayudarte a obtener tu visa
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 316 2677638</p>
                <p className="text-gray-600 text-sm">Lun - Vie: 9:00 AM - 6:00 PM</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <EnvelopeIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Escríbenos</h3>
                <p className="text-brand-gold font-semibold">mercadeo@icebga.com</p>
                <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Agendar Consulta Gratuita
            </Link>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}