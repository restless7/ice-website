import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  BookOpenIcon,
  UserGroupIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Escuela de Idiomas USA | ICE - Instituto Cultural de Educación",
  description: "Estudia inglés en las mejores escuelas de idiomas de Estados Unidos. Cursos intensivos con visa F-1 y experiencia cultural completa.",
};

export default function EscuelaIdiomasUSA() {
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
                      <span className="text-brand-gold">Escuela de Idiomas</span> 🎓
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Estudios de Inglés • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Estudia inglés en las mejores escuelas de idiomas de Estados Unidos. 
                  Cursos intensivos diseñados para acelerar tu aprendizaje mientras 
                  vives una experiencia cultural auténtica.
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
                      <span className="text-gray-600">Precio desde</span>
                      <span className="font-bold text-brand-gold">1,200 USD/mes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">2 semanas - 1 año</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modalidad</span>
                      <span className="font-bold text-gray-900">Presencial</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Visa</span>
                      <span className="font-bold text-gray-900">F-1 (Estudiante)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Escuelas de Idiomas
              </h2>
              <p className="text-xl text-gray-600">
                Encuentra la escuela perfecta para tus objetivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BuildingLibraryIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏫 Universidades</h3>
                <p className="text-gray-600 mb-4">
                  Programas ESL en campus universitarios prestigiosos
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Ambiente académico</li>
                  <li>• Acceso a instalaciones</li>
                  <li>• Networking estudiantil</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <GlobeAltIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌐 Escuelas Privadas</h3>
                <p className="text-gray-600 mb-4">
                  Institutos especializados en enseñanza de inglés
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Clases reducidas</li>
                  <li>• Atención personalizada</li>
                  <li>• Flexibilidad horarios</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BookOpenIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Intensivos</h3>
                <p className="text-gray-600 mb-4">
                  Cursos intensivos para avance rápido
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• 20-30 horas semanales</li>
                  <li>• Progreso acelerado</li>
                  <li>• Inmersión total</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UserGroupIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Comunitarios</h3>
                <p className="text-gray-600 mb-4">
                  Community colleges con programas ESL
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Costos accesibles</li>
                  <li>• Ambiente diverso</li>
                  <li>• Apoyo local</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Especializados</h3>
                <p className="text-gray-600 mb-4">
                  Preparación para exámenes específicos
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• TOEFL/IELTS prep</li>
                  <li>• Business English</li>
                  <li>• Academic English</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Pathway</h3>
                <p className="text-gray-600 mb-4">
                  Programas de transición universitaria
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Preparación académica</li>
                  <li>• Admisión garantizada</li>
                  <li>• Créditos transferibles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Course Levels Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Niveles de Inglés Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Programas para todos los niveles de competencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Beginner</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fundamentos básicos del idioma
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Alfabeto y números</p>
                  <p>• Frases básicas</p>
                  <p>• Presentación personal</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Elementary</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comunicación básica cotidiana
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Conversaciones simples</p>
                  <p>• Tiempo presente</p>
                  <p>• Actividades diarias</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Intermediate</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fluidez en situaciones comunes
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Discusiones temáticas</p>
                  <p>• Todos los tiempos</p>
                  <p>• Escritura estructurada</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Dominio académico y profesional
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Debates complejos</p>
                  <p>• Escritura académica</p>
                  <p>• Preparación exámenes</p>
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
                ¿Por qué estudiar inglés en Estados Unidos?
              </h2>
              <p className="text-xl text-gray-600">
                Las ventajas de la inmersión total
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Ventajas Académicas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inmersión lingüística 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Profesores nativos certificados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Metodologías innovadoras</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificaciones reconocidas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Experiencia Cultural</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cultura estadounidense auténtica</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Red internacional de contactos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Actividades extracurriculares</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Oportunidades de viaje</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Destinos Populares
              </h2>
              <p className="text-xl text-gray-600">
                Las mejores ciudades para estudiar inglés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🗽 New York</h3>
                <p className="text-gray-600 mb-3">
                  La gran manzana ofrece diversidad cultural y oportunidades únicas
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Vida cosmopolita, museos, Broadway</p>
                  <p><strong>Costo:</strong> Alto</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">☀️ Los Angeles</h3>
                <p className="text-gray-600 mb-3">
                  Ciudad de ángeles con clima perfecto y industria del entretenimiento
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Clima, playas, Hollywood</p>
                  <p><strong>Costo:</strong> Alto</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌴 Miami</h3>
                <p className="text-gray-600 mb-3">
                  Ambiente latino y playas espectaculares en el sur de Florida
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Cultura latina, playas</p>
                  <p><strong>Costo:</strong> Medio-Alto</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏙️ Chicago</h3>
                <p className="text-gray-600 mb-3">
                  Ciudad vibrante con arquitectura impresionante y vida cultural
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Arquitectura, música</p>
                  <p><strong>Costo:</strong> Medio</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎸 Austin</h3>
                <p className="text-gray-600 mb-3">
                  Capital de Texas con ambiente joven y música en vivo
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Música, tecnología</p>
                  <p><strong>Costo:</strong> Medio</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌉 San Francisco</h3>
                <p className="text-gray-600 mb-3">
                  Hub tecnológico con paisajes únicos y cultura innovadora
                </p>
                <div className="text-sm text-gray-700">
                  <p><strong>Ventajas:</strong> Tecnología, paisajes</p>
                  <p><strong>Costo:</strong> Muy Alto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Servicios Incluidos
              </h2>
              <p className="text-xl text-gray-600">
                Te acompañamos en todo el proceso
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Proceso de Aplicación</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Asesoría académica:</span>
                      <p className="text-gray-700">Selección de escuela ideal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Documentación:</span>
                      <p className="text-gray-700">Preparación completa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Visa F-1:</span>
                      <p className="text-gray-700">Asistencia completa</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Apoyo Continuo</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Alojamiento:</span>
                      <p className="text-gray-700">Opciones host family y residencias</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Seguimiento:</span>
                      <p className="text-gray-700">Apoyo durante toda la estadía</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Emergencias:</span>
                      <p className="text-gray-700">Asistencia 24/7</p>
                    </div>
                  </div>
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
                  <span className="text-2xl font-bold text-white">👩‍🎓</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Estudiar inglés en Estados Unidos cambió mi vida completamente. 
                  No solo mejoré mi nivel del idioma dramáticamente, sino que viví 
                  experiencias increíbles y conocí personas de todo el mundo. 
                  Fue la mejor inversión que pude hacer para mi futuro."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">María Fernanda López</p>
                  <p className="text-brand-gold">ESL en University of California, Los Angeles - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para dominar el inglés? 🎓
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu aventura académica en Estados Unidos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 321 3440057</p>
                <p className="text-gray-600 text-sm">Manuel - Procesos Colombia</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
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