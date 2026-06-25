import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Programa H2B USA | ICE - Instituto Cultural de Educación",
  description: "Trabaja temporalmente en Estados Unidos con visa H2B. Empleos estacionales en agricultura, turismo, construcción y más sectores con salarios competitivos.",
};

export default function H2BProgram() {
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
                    <BriefcaseIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Programa H2B</span> 💼
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Trabajo Temporal • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Trabaja temporalmente en Estados Unidos con visa H2B. Empleos
                  estacionales legales con salarios competitivos en sectores como
                  agricultura, turismo, construcción y servicios.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/agendar?programId=h2b"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Aplicar Ahora
                  </Link>
                  <Link
                    href="/agendar?programId=h2b"
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
                      <span className="font-bold text-brand-gold">2,500 USD + 300,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">6-10 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Salario promedio</span>
                      <span className="font-bold text-gray-900">$12-18 USD/hora</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Visa</span>
                      <span className="font-bold text-gray-900">H2B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Sectors Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sectores de Trabajo Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Oportunidades laborales en diversos sectores de la economía estadounidense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <BuildingOffice2Icon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏨 Hotelería y Turismo</h3>
                <p className="text-gray-600 mb-4">
                  Trabajo en hoteles, resorts y destinos turísticos
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Housekeeping</li>
                  <li>• Mantenimiento</li>
                  <li>• Servicios de alimentos</li>
                  <li>• Atención al cliente</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$13-16 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <MapPinIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌾 Agricultura</h3>
                <p className="text-gray-600 mb-4">
                  Trabajos estacionales en granjas y cultivos
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cosecha de frutas</li>
                  <li>• Plantación</li>
                  <li>• Cuidado de cultivos</li>
                  <li>• Empaquetado</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$12-15 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <BriefcaseIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Construcción</h3>
                <p className="text-gray-600 mb-4">
                  Proyectos de construcción y renovación
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Construcción general</li>
                  <li>• Carpintería</li>
                  <li>• Pintura</li>
                  <li>• Demolición</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$15-20 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <UserGroupIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Servicios de Alimentos</h3>
                <p className="text-gray-600 mb-4">
                  Restaurantes y servicios de catering
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cocineros</li>
                  <li>• Ayudantes de cocina</li>
                  <li>• Camareros</li>
                  <li>• Limpieza</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$11-14 USD/hora + propinas</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏞️ Parques y Recreación</h3>
                <p className="text-gray-600 mb-4">
                  Mantenimiento de parques y áreas recreativas
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Jardinería</li>
                  <li>• Mantenimiento</li>
                  <li>• Limpieza</li>
                  <li>• Guías turísticos</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$12-16 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-4">
                  <CurrencyDollarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏪 Comercio y Retail</h3>
                <p className="text-gray-600 mb-4">
                  Tiendas y centros comerciales
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vendedores</li>
                  <li>• Almacenistas</li>
                  <li>• Cajeros</li>
                  <li>• Inventario</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">$11-15 USD/hora</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beneficios del Programa H2B
              </h2>
              <p className="text-xl text-gray-600">
                Todo lo que obtienes con esta oportunidad labegal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💰 Beneficios Económicos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Salarios competitivos ($12-20 USD/hora)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Horas extra remuneradas (tiempo y medio)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pago semanal garantizado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Oportunidad de ahorro significativo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏠 Beneficios Adicionales</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alojamiento proporcionado o subsidiado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Transporte al lugar de trabajo</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seguro médico básico</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Experiencia laboral internacional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Destinos Populares H2B
              </h2>
              <p className="text-xl text-gray-600">
                Los estados con más oportunidades laborales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌴 Florida</h3>
                <p className="text-gray-600 mb-3">
                  Turismo, hotelería y agricultura
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Hoteles, parques temáticos</p>
                  <p><strong>Temporada:</strong> Nov - Abr (alta temporada)</p>
                  <p><strong>Salario:</strong> $13-17 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏔️ Colorado</h3>
                <p className="text-gray-600 mb-3">
                  Turismo de montaña y construcción
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Esquí, hoteles, construcción</p>
                  <p><strong>Temporada:</strong> Dic - Mar (invierno)</p>
                  <p><strong>Salario:</strong> $14-19 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍎 Washington</h3>
                <p className="text-gray-600 mb-3">
                  Agricultura y procesamiento de alimentos
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Manzanas, frutas, empaque</p>
                  <p><strong>Temporada:</strong> Ago - Nov (cosecha)</p>
                  <p><strong>Salario:</strong> $12-16 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🦞 Maine</h3>
                <p className="text-gray-600 mb-3">
                  Industria pesquera y turismo
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Mariscos, hoteles</p>
                  <p><strong>Temporada:</strong> May - Sep (verano)</p>
                  <p><strong>Salario:</strong> $13-18 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏖️ North Carolina</h3>
                <p className="text-gray-600 mb-3">
                  Turismo costero y agricultura
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Playas, granjas, hoteles</p>
                  <p><strong>Temporada:</strong> Abr - Oct (verano)</p>
                  <p><strong>Salario:</strong> $11-15 USD/hora</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌊 California</h3>
                <p className="text-gray-600 mb-3">
                  Agricultura y servicios turísticos
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Sectores:</strong> Frutas, hoteles, parques</p>
                  <p><strong>Temporada:</strong> Variable según sector</p>
                  <p><strong>Salario:</strong> $15-20 USD/hora</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Requisitos para el Programa H2B
              </h2>
              <p className="text-xl text-gray-600">
                ¿Cumples con los requisitos necesarios?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Requisitos Básicos</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Edad:</span>
                      <p className="text-gray-700">18 a 45 años</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Estado civil:</span>
                      <p className="text-gray-700">Soltero/a (preferiblemente)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Inglés:</span>
                      <p className="text-gray-700">Nivel básico-intermedio</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Experiencia:</span>
                      <p className="text-gray-700">Laboral previa (cualquier sector)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">✅ Características Ideales</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Física:</span>
                      <p className="text-gray-700">Buena condición física</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Actitud:</span>
                      <p className="text-gray-700">Dispuesto a trabajo duro</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Adaptabilidad:</span>
                      <p className="text-gray-700">Flexible a diferentes tareas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Disponibilidad:</span>
                      <p className="text-gray-700">6-10 meses continuos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proceso de Aplicación
              </h2>
              <p className="text-xl text-gray-600">
                Pasos para obtener tu visa H2B
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Evaluación y Selección</h3>
                  <p className="text-gray-600">Entrevista inicial y verificación de requisitos básicos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Documentación</h3>
                  <p className="text-gray-600">Preparación y traducción de documentos necesarios</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Búsqueda de Empleador</h3>
                  <p className="text-gray-600">Matching con empleadores certificados en Estados Unidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Petición H2B</h3>
                  <p className="text-gray-600">El empleador presenta la petición ante USCIS</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Entrevista Consular</h3>
                  <p className="text-gray-600">Cita en el consulado americano para obtener la visa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Viaje y Trabajo</h3>
                  <p className="text-gray-600">Traslado a Estados Unidos e inicio del trabajo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">👷‍♂️</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "El programa H2B cambió mi vida. Trabajé 8 meses en Colorado en un
                  hotel de esquí, ahorré mucho dinero y mejoré mi inglés. La experiencia
                  fue increíble y ahora tengo mejores oportunidades laborales en Colombia."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">José Miguel Herrera</p>
                  <p className="text-brand-gold">H2B en Aspen, Colorado - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para trabajar en Estados Unidos? 💼
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Inicia tu proceso H2B hoy mismo
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
                href="/agendar?programId=h2b"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Aplicar Ahora
              </Link>
              <Link
                href="https://bit.ly/ProcesosICE"
                target="_blank"
                className="inline-flex items-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold text-lg rounded-xl hover:bg-brand-gold/10 transition-all duration-300"
              >
                WhatsApp
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