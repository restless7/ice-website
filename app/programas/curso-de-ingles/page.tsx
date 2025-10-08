import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  BookOpenIcon,
  UserGroupIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Curso de Inglés ICE | Instituto Cultural de Educación",
  description: "Cursos de inglés presenciales y virtuales en Bucaramanga. Metodología moderna, profesores certificados y preparación para exámenes internacionales.",
};

export default function CursoDeIngles() {
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
                      <span className="text-brand-gold">Curso de Inglés</span> 📚
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Instituto Cultural de Educación • Bucaramanga</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Aprende inglés con la metodología más efectiva de Bucaramanga. 
                  Clases presenciales y virtuales con profesores certificados 
                  y tecnología de última generación para tu éxito.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Matricularme Ahora
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Información del Curso</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Precio mensual</span>
                      <span className="font-bold text-brand-gold">$220,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Modalidad</span>
                      <span className="font-bold text-gray-900">Presencial/Virtual</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">8 niveles</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Horarios</span>
                      <span className="font-bold text-gray-900">Flexibles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Modalities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modalidades de Estudio
              </h2>
              <p className="text-xl text-gray-600">
                Elige la modalidad que mejor se adapte a tu estilo de vida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <UserGroupIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏫 Presencial</h3>
                <p className="text-gray-600 mb-6">
                  Clases en nuestras modernas instalaciones con interacción directa
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Interacción cara a cara</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ambiente de inmersión</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Equipos tecnológicos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Actividades grupales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <ComputerDesktopIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💻 Virtual</h3>
                <p className="text-gray-600 mb-6">
                  Aprende desde casa con nuestra plataforma digital avanzada
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexibilidad horaria</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Plataforma interactiva</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Grabaciones de clases</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ahorro de tiempo</span>
                  </li>
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
                Niveles del Curso
              </h2>
              <p className="text-xl text-gray-600">
                Programa estructurado desde básico hasta avanzado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">A1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Básico 1</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fundamentos del idioma
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Saludos básicos</p>
                  <p>• Números y colores</p>
                  <p>• Información personal</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">A2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Básico 2</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comunicación elemental
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Conversaciones simples</p>
                  <p>• Presente simple</p>
                  <p>• Rutinas diarias</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">B1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Intermedio 1</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Independencia comunicativa
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Tiempos pasados</p>
                  <p>• Expresar opiniones</p>
                  <p>• Describir experiencias</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">C1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Avanzado</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fluidez y precisión
                </p>
                <div className="text-xs text-gray-500">
                  <p>• Conversaciones complejas</p>
                  <p>• Escritura académica</p>
                  <p>• Preparación exámenes</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600">
                <strong>Duración por nivel:</strong> 2 meses • 
                <strong> Total del programa:</strong> 16 meses • 
                <strong> Clases semanales:</strong> 2 o 3 veces
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Options Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Horarios Disponibles
              </h2>
              <p className="text-xl text-gray-600">
                Encuentra el horario perfecto para tu rutina
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌅 Mañana</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>7:00 AM - 9:00 AM</strong></p>
                  <p className="text-gray-600"><strong>9:00 AM - 11:00 AM</strong></p>
                  <p className="text-gray-600"><strong>11:00 AM - 1:00 PM</strong></p>
                </div>
                <p className="text-sm text-gray-500 mt-3">Ideal para estudiantes y trabajadores nocturnos</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌞 Tarde</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>2:00 PM - 4:00 PM</strong></p>
                  <p className="text-gray-600"><strong>4:00 PM - 6:00 PM</strong></p>
                  <p className="text-gray-600"><strong>6:00 PM - 8:00 PM</strong></p>
                </div>
                <p className="text-sm text-gray-500 mt-3">Perfecto para profesionales en horario matutino</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌙 Noche</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>6:30 PM - 8:30 PM</strong></p>
                  <p className="text-gray-600"><strong>7:00 PM - 9:00 PM</strong></p>
                  <p className="text-gray-600"><strong>8:00 PM - 10:00 PM</strong></p>
                </div>
                <p className="text-sm text-gray-500 mt-3">Excelente para trabajadores de tiempo completo</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">📅 Fin de Semana</h3>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Sábados 8:00 AM - 12:00 PM</strong></p>
                  <p className="text-gray-600"><strong>Sábados 2:00 PM - 6:00 PM</strong></p>
                  <p className="text-gray-600"><strong>Domingos 8:00 AM - 12:00 PM</strong></p>
                </div>
                <p className="text-sm text-gray-500 mt-3">Para quienes trabajan de lunes a viernes</p>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/10 to-brand-orange/10 rounded-2xl p-6 border border-brand-gold/30 text-center md:col-span-2">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Personalizado</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Clases uno-a-uno o grupos privados</strong>
                </p>
                <p className="text-sm text-gray-700">
                  Horarios flexibles adaptados a tus necesidades específicas. 
                  Ideal para empresas, profesionales ocupados o estudiantes con horarios especiales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestra Metodología
              </h2>
              <p className="text-xl text-gray-600">
                Enfoque comunicativo y práctico para resultados reales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Enfoque Comunicativo</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Conversación desde el primer día</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Situaciones reales del día a día</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integración de las 4 habilidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aprendizaje interactivo y dinámico</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💻 Tecnología Educativa</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Plataforma digital interactiva</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Recursos multimedia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Apps móviles de apoyo</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seguimiento personalizado</span>
                  </li>
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
                ¿Por qué elegir ICE?
              </h2>
              <p className="text-xl text-gray-600">
                Más de 15 años formando profesionales bilingües
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Excelencia Académica</h3>
                <p className="text-gray-600">
                  Profesores certificados con experiencia internacional y metodologías actualizadas
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BookOpenIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Material Actualizado</h3>
                <p className="text-gray-600">
                  Libros de editorial internacional y recursos digitales de última generación
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UserGroupIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Grupos Reducidos</h3>
                <p className="text-gray-600">
                  Máximo 12 estudiantes por clase para atención personalizada
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <CheckCircleIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Certificación</h3>
                <p className="text-gray-600">
                  Certificados avalados y preparación para exámenes internacionales
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ClockIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">⏰ Flexibilidad</h3>
                <p className="text-gray-600">
                  Múltiples horarios y modalidades para adaptarse a tu estilo de vida
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <ComputerDesktopIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💻 Tecnología</h3>
                <p className="text-gray-600">
                  Plataformas digitales y herramientas modernas para un aprendizaje efectivo
                </p>
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
                  <span className="text-2xl font-bold text-white">👨‍🎓</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "ICE cambió mi carrera profesional. Gracias a las clases de inglés 
                  pude conseguir un mejor empleo y ahora estoy aplicando para programas 
                  en Estados Unidos. Los profesores son excelentes y la metodología 
                  realmente funciona."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">Carlos Andrés Mejía</p>
                  <p className="text-brand-gold">Estudiante ICE - Nivel Avanzado, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para hablar inglés con confianza? 📚
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu proceso de matrícula hoy mismo
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

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Visítanos</h3>
              <p className="text-gray-700 mb-2">
                <strong>Instituto Cultural de Educación - ICE</strong>
              </p>
              <p className="text-gray-600">
                Calle 35 # 21-08, Bucaramanga, Santander
              </p>
              <p className="text-gray-600">
                Lunes a Viernes: 7:00 AM - 9:00 PM | Sábados: 8:00 AM - 6:00 PM
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Matricularme Ahora
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