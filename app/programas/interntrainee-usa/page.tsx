import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Intern Trainee USA | ICE - Instituto Cultural de Educación",
  description: "Programa de prácticas profesionales en Estados Unidos con visa J-1. Gana experiencia laboral internacional en tu campo de estudio.",
};

export default function InternTraineeUSA() {
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
                    <AcademicCapIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Intern Trainee</span> 👨‍💼
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Prácticas Profesionales • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Realiza prácticas profesionales en Estados Unidos con visa J-1. 
                  Gana experiencia laboral internacional en tu campo de estudio 
                  mientras desarrollas habilidades profesionales de clase mundial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Aplicar Ahora
                  </Link>
                  <Link
                    href="/contacto"
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
                      <span className="font-bold text-brand-gold">2,200 USD + 250,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">3-12 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modalidad</span>
                      <span className="font-bold text-gray-900">Tiempo completo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Visa</span>
                      <span className="font-bold text-gray-900">J-1 Trainee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Prácticas Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Oportunidades en diversas industrias profesionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 Intern Program</h3>
                <p className="text-gray-600 mb-6">
                  Para estudiantes actuales o recién graduados (dentro de los últimos 12 meses)
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Duración: 3-12 meses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Para estudiantes y recién graduados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Experiencia práctica en tu campo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <BriefcaseIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💼 Trainee Program</h3>
                <p className="text-gray-600 mb-6">
                  Para profesionales con experiencia laboral que buscan especialización
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Duración: 6-18 meses</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mínimo 1 año de experiencia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrenamiento especializado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Industrias Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Sectores profesionales con mayor demanda de pasantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💻 Tecnología</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de software, IT, datos y sistemas
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Desarrollo web y móvil</li>
                  <li>• Análisis de datos</li>
                  <li>• Ciberseguridad</li>
                  <li>• Inteligencia artificial</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Marketing y Negocios</h3>
                <p className="text-gray-600 mb-4">
                  Marketing digital, ventas y administración
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Marketing digital</li>
                  <li>• Análisis de mercado</li>
                  <li>• Gestión de proyectos</li>
                  <li>• Recursos humanos</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Diseño y Creatividad</h3>
                <p className="text-gray-600 mb-4">
                  Diseño gráfico, UX/UI y contenido creativo
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Diseño gráfico</li>
                  <li>• UX/UI Design</li>
                  <li>• Producción audiovisual</li>
                  <li>• Marketing de contenidos</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏭 Ingeniería</h3>
                <p className="text-gray-600 mb-4">
                  Ingeniería industrial, civil y mecánica
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ingeniería de procesos</li>
                  <li>• Diseño industrial</li>
                  <li>• Gestión de calidad</li>
                  <li>• Automatización</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Finanzas</h3>
                <p className="text-gray-600 mb-4">
                  Contabilidad, finanzas corporativas y banca
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Análisis financiero</li>
                  <li>• Contabilidad corporativa</li>
                  <li>• Auditoría</li>
                  <li>• Banca de inversión</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Ciencias de la Salud</h3>
                <p className="text-gray-600 mb-4">
                  Investigación médica y administración hospitalaria
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Investigación clínica</li>
                  <li>• Administración hospitalaria</li>
                  <li>• Salud pública</li>
                  <li>• Biotecnología</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beneficios del Programa
              </h2>
              <p className="text-xl text-gray-600">
                Lo que obtienes con esta experiencia profesional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Desarrollo Profesional</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Experiencia laboral internacional</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Habilidades técnicas avanzadas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Red profesional internacional</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificado de entrenamiento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Experiencia Cultural</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inmersión cultural completa</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mejora significativa del inglés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conexiones globales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Perspectiva internacional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Empresas
              </h2>
              <p className="text-xl text-gray-600">
                Donde podrás realizar tus prácticas profesionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BuildingOfficeIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">🏢 Corporaciones</h3>
                <p className="text-gray-600 text-sm">
                  Empresas Fortune 500 y multinacionales con programas estructurados
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">🚀 Startups</h3>
                <p className="text-gray-600 text-sm">
                  Empresas tecnológicas innovadoras con ambiente dinámico
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UserGroupIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">🏛️ ONGs</h3>
                <p className="text-gray-600 text-sm">
                  Organizaciones sin fines de lucro con impacto social
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">🎓 Instituciones</h3>
                <p className="text-gray-600 text-sm">
                  Universidades, hospitales e instituciones de investigación
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Requisitos para Aplicar
              </h2>
              <p className="text-xl text-gray-600">
                ¿Cumples con los criterios necesarios?
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Requisitos Generales</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Edad:</span>
                      <p className="text-gray-700">18 a 30 años</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Inglés:</span>
                      <p className="text-gray-700">Nivel intermedio-avanzado (B2+)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Educación:</span>
                      <p className="text-gray-700">Estudiante universitario o profesional</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Perfil Ideal</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Motivación:</span>
                      <p className="text-gray-700">Claro objetivo profesional</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Adaptabilidad:</span>
                      <p className="text-gray-700">Flexible y proactivo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Compromiso:</span>
                      <p className="text-gray-700">Dedicación tiempo completo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proceso de Aplicación
              </h2>
              <p className="text-xl text-gray-600">
                Pasos para obtener tu práctica profesional
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Evaluación de Perfil</h3>
                  <p className="text-gray-600">Análisis de tu perfil académico y profesional</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Preparación de Documentos</h3>
                  <p className="text-gray-600">CV, carta de motivación y documentos académicos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Búsqueda de Oportunidades</h3>
                  <p className="text-gray-600">Matching con empresas según tu perfil y objetivos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Entrevistas</h3>
                  <p className="text-gray-600">Preparación y participación en entrevistas con empleadores</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Tramitación de Visa J-1</h3>
                  <p className="text-gray-600">Obtención del DS-2019 y cita consular</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Inicio de Prácticas</h3>
                  <p className="text-gray-600">Viaje a Estados Unidos y comienzo del programa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">👩‍💼</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Mi práctica en una startup de San Francisco cambió completamente mi perspectiva 
                  profesional. Aprendí metodologías ágiles, mejoré mi inglés técnico y construí 
                  una red de contactos increíble. Ahora trabajo en Google Colombia."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">Ana Sofía Castillo</p>
                  <p className="text-brand-gold">Intern en TechCorp, San Francisco - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para impulsar tu carrera? 👨‍💼
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu práctica profesional en Estados Unidos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 321 3440057</p>
                <p className="text-gray-600 text-sm">Manuel - Procesos Colombia</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <EnvelopeIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Escríbenos</h3>
                <p className="text-brand-gold font-semibold">mercadeo@icebga.com</p>
                <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
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
    </IceLayoutWrapper>
  );
}