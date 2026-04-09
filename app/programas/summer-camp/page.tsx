import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import {
  SunIcon,
  CheckCircleIcon,
  HeartIcon,
  UsersIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Summer Camp USA | ICE - Instituto Cultural de Educación",
  description: "Experiencia de campamentos de verano en Estados Unidos. Actividades recreativas, deportes, artes y liderazgo para jóvenes aventureros.",
};

export default function SummerCamp() {
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
                    <SunIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Summer Camp</span> ⛺
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Campamentos de Verano • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Vive la experiencia auténtica de los campamentos de verano estadounidenses.
                  Actividades al aire libre, deportes, artes y amistades que durarán toda la vida
                  en un ambiente seguro y divertido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Inscribirme Ahora
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
                      <span className="font-bold text-brand-gold">1,800 USD + 180,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">2-8 semanas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Edad</span>
                      <span className="font-bold text-gray-900">13-18 años</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Temporada</span>
                      <span className="font-bold text-gray-900">Junio - Agosto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activity Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Actividades
              </h2>
              <p className="text-xl text-gray-600">
                Diversión, aprendizaje y aventura en cada día de campamento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <SunIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏃‍♂️ Deportes</h3>
                <p className="text-gray-600 mb-4">
                  Actividades deportivas variadas para todos los niveles
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Fútbol y básquetbol</li>
                  <li>• Natación y deportes acuáticos</li>
                  <li>• Tenis y voleibol</li>
                  <li>• Escalada y senderismo</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Arte y Creatividad</h3>
                <p className="text-gray-600 mb-4">
                  Expresión artística y proyectos creativos
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Pintura y dibujo</li>
                  <li>• Manualidades</li>
                  <li>• Teatro y drama</li>
                  <li>• Música y danza</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <MapPinIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏕️ Aventura</h3>
                <p className="text-gray-600 mb-4">
                  Actividades al aire libre y exploración
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Camping y fogatas</li>
                  <li>• Orientación y supervivencia</li>
                  <li>• Canoas y kayaks</li>
                  <li>• Observación de naturaleza</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🧠 Educación</h3>
                <p className="text-gray-600 mb-4">
                  Aprendizaje divertido y ciencias aplicadas
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Ciencias naturales</li>
                  <li>• Experimentos</li>
                  <li>• Robótica básica</li>
                  <li>• Idiomas</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UsersIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Social</h3>
                <p className="text-gray-600 mb-4">
                  Construcción de amistades y trabajo en equipo
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Juegos grupales</li>
                  <li>• Competencias amistosas</li>
                  <li>• Proyectos colaborativos</li>
                  <li>• Intercambio cultural</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HeartIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💪 Desarrollo Personal</h3>
                <p className="text-gray-600 mb-4">
                  Crecimiento personal y liderazgo
                </p>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• Autoconfianza</li>
                  <li>• Liderazgo juvenil</li>
                  <li>• Resolución de problemas</li>
                  <li>• Independencia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Camp Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Campamentos
              </h2>
              <p className="text-xl text-gray-600">
                Diferentes estilos para diferentes personalidades
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏕️ Traditional Camps</h3>
                <p className="text-gray-600 mb-6">
                  Campamentos clásicos con actividades tradicionales americanas
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Actividades al aire libre variadas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Deportes y juegos grupales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Artes y manualidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fogatas y actividades nocturnas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Specialty Camps</h3>
                <p className="text-gray-600 mb-6">
                  Campamentos especializados en áreas específicas de interés
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Deportes específicos (tenis, fútbol, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Artes escénicas y música</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ciencia y tecnología</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Aventura y supervivencia</span>
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
                Beneficios del Summer Camp
              </h2>
              <p className="text-xl text-gray-600">
                Más que diversión: desarrollo integral para jóvenes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HeartIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 Crecimiento Personal</h3>
                <p className="text-gray-600">
                  Desarrolla independencia, autoconfianza y habilidades sociales en un ambiente seguro
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UsersIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Amistades Internacionales</h3>
                <p className="text-gray-600">
                  Conoce jóvenes de todo el mundo y crea lazos de amistad duraderos
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Habilidades Nuevas</h3>
                <p className="text-gray-600">
                  Aprende nuevos deportes, artes y habilidades que te acompañarán siempre
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🗣️ Mejora del Inglés</h3>
                <p className="text-gray-600">
                  Inmersión total en inglés de manera natural y divertida
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <MapPinIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Experiencia Cultural</h3>
                <p className="text-gray-600">
                  Vive la auténtica cultura americana de campamentos y tradiciones
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <SunIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏃‍♀️ Vida Saludable</h3>
                <p className="text-gray-600">
                  Actividad física constante, aire puro y hábitos saludables
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Schedule Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Día Típico en el Campamento
              </h2>
              <p className="text-xl text-gray-600">
                Ejemplo de un día lleno de diversión y actividades
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-sm">7:00</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🌅 Despertar y Desayuno</h3>
                    <p className="text-gray-600">Comenzamos el día con energía y un nutritivo desayuno</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">9:00</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🏃‍♂️ Actividades Deportivas</h3>
                    <p className="text-gray-600">Deportes al aire libre y juegos en equipo</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">11:00</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🎨 Artes y Manualidades</h3>
                    <p className="text-gray-600">Proyectos creativos y expresión artística</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">12:30</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🍽️ Almuerzo y Descanso</h3>
                    <p className="text-gray-600">Comida saludable y tiempo de relajación</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">14:30</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🏊‍♀️ Actividades Acuáticas</h3>
                    <p className="text-gray-600">Natación, juegos de agua y deportes acuáticos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">16:00</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🎪 Actividades Especiales</h3>
                    <p className="text-gray-600">Teatro, música, ciencias o aventura</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold text-sm">19:00</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">🔥 Cena y Fogata</h3>
                    <p className="text-gray-600">Cena grupal, historias y actividades nocturnas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Seguridad y Cuidado
              </h2>
              <p className="text-xl text-gray-600">
                La seguridad de tu hijo es nuestra prioridad absoluta
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🛡️ Medidas de Seguridad</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Personal capacitado:</span>
                      <p className="text-gray-700">Consejeros con certificaciones en primeros auxilios</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Supervisión 24/7:</span>
                      <p className="text-gray-700">Vigilancia constante durante todas las actividades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Instalaciones seguras:</span>
                      <p className="text-gray-700">Campamentos acreditados con estándares de seguridad</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💚 Cuidado Integral</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Atención médica:</span>
                      <p className="text-gray-700">Enfermería en el campamento y protocolos médicos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Comunicación:</span>
                      <p className="text-gray-700">Reportes regulares para padres y comunicación directa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Seguros:</span>
                      <p className="text-gray-700">Cobertura médica y de responsabilidad completa</p>
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
                  <span className="text-2xl font-bold text-white">🧒</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Mi hija regresó del campamento como una persona completamente nueva:
                  más independiente, confiada y con amigos de todo el mundo. Fue la mejor
                  inversión que pudimos hacer para su desarrollo personal y su inglés
                  mejoró increíblemente."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">Patricia Moreno</p>
                  <p className="text-brand-gold">Madre de Sofía, Summer Camp New York - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para la aventura del verano? ⛺
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Inscribe a tu hijo en una experiencia que recordará toda la vida
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
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Inscribir Ahora
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