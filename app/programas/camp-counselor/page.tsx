import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import {
  SunIcon,
  CheckCircleIcon,
  UsersIcon,
  HeartIcon,
  AcademicCapIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Camp Counselor USA | ICE - Instituto Cultural de Educación",
  description: "Programa Camp Counselor en Estados Unidos. Trabaja como consejero en campamentos de verano con visa J-1 y vive una experiencia de liderazgo única.",
};

export default function CampCounselor() {
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
                      <span className="text-brand-gold">Camp Counselor</span> 🏕️
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Campamentos de Verano • Estados Unidos</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Conviértete en consejero de campamentos de verano en Estados Unidos.
                  Una experiencia única de liderazgo trabajando con niños y jóvenes
                  mientras desarrollas habilidades que te acompañarán toda la vida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/agendar?programId=camp-counselor"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Aplicar Ahora
                  </Link>
                  <Link
                    href="/agendar?programId=camp-counselor"
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
                      <span className="font-bold text-brand-gold">1,850 USD + 200,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">3-4 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Temporada</span>
                      <span className="font-bold text-gray-900">Verano (Jun-Ago)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Visa</span>
                      <span className="font-bold text-gray-900">J-1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Qué harás como Camp Counselor?
              </h2>
              <p className="text-xl text-gray-600">
                Una experiencia de liderazgo que transformará tu vida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <UsersIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Liderazgo</h3>
                <p className="text-gray-600">
                  Lidera grupos de niños y jóvenes en actividades recreativas y educativas
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HeartIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">❤️ Cuidado Infantil</h3>
                <p className="text-gray-600">
                  Supervisa y cuida la seguridad y bienestar de los campistas
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Actividades</h3>
                <p className="text-gray-600">
                  Organiza deportes, artes, manualidades y actividades al aire libre
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Enseñanza</h3>
                <p className="text-gray-600">
                  Enseña habilidades específicas según tu área de especialización
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <SunIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">☀️ Diversión</h3>
                <p className="text-gray-600">
                  Crea un ambiente divertido y seguro para que los niños disfruten
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <CheckCircleIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Responsabilidad</h3>
                <p className="text-gray-600">
                  Desarrolla responsabilidad y madurez personal y profesional
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Beneficios del Programa
              </h2>
              <p className="text-xl text-gray-600">
                Lo que obtienes con esta experiencia única
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🏕️ Experiencia Incluida</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Alojamiento completo en el campamento</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Todas las comidas incluidas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Entrenamiento especializado</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificaciones en primeros auxilios</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🌟 Desarrollo Personal</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Habilidades de liderazgo</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mejora significativa del inglés</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Inmersión cultural estadounidense</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Red internacional de contactos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Camp Types Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tipos de Campamentos
              </h2>
              <p className="text-xl text-gray-600">
                Encuentra el campamento perfecto para ti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏃‍♂️ Deportivos</h3>
                <p className="text-gray-600 mb-3">
                  Fútbol, básquetbol, natación, tenis y más deportes
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Instructor deportivo</li>
                  <li>• Entrenador especializado</li>
                  <li>• Organizador de torneos</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Artísticos</h3>
                <p className="text-gray-600 mb-3">
                  Teatro, música, pintura y artes manuales
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Instructor de arte</li>
                  <li>• Director de teatro</li>
                  <li>• Profesor de música</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏕️ Aventura</h3>
                <p className="text-gray-600 mb-3">
                  Campamentos al aire libre y actividades de aventura
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Guía de naturaleza</li>
                  <li>• Instructor de escalada</li>
                  <li>• Organizador de expediciones</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎭 Especializados</h3>
                <p className="text-gray-600 mb-3">
                  Campamentos con enfoques específicos
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Campamentos de ciencias</li>
                  <li>• Campamentos tecnológicos</li>
                  <li>• Programas de liderazgo</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌊 Acuáticos</h3>
                <p className="text-gray-600 mb-3">
                  Campamentos cerca de lagos y actividades acuáticas
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Instructor de natación</li>
                  <li>• Salvavidas certificado</li>
                  <li>• Deportes acuáticos</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Generales</h3>
                <p className="text-gray-600 mb-3">
                  Campamentos tradicionales con actividades variadas
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Consejero general</li>
                  <li>• Coordinador de actividades</li>
                  <li>• Supervisor de cabañas</li>
                </ul>
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
                ¿Tienes lo necesario para ser Camp Counselor?
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
                      <p className="text-gray-700">18 años en adelante</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Inglés:</span>
                      <p className="text-gray-700">Nivel intermedio-avanzado</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Experiencia:</span>
                      <p className="text-gray-700">Trabajo con niños/jóvenes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Características Ideales</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Personalidad:</span>
                      <p className="text-gray-700">Energético, responsable y creativo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Habilidades:</span>
                      <p className="text-gray-700">Liderazgo y trabajo en equipo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Disponibilidad:</span>
                      <p className="text-gray-700">Verano completo (Junio-Agosto)</p>
                    </div>
                  </div>
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
                  <span className="text-2xl font-bold text-white">👨‍🏫</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Ser Camp Counselor fue la experiencia más enriquecedora de mi vida.
                  No solo mejoré mi inglés y viví la cultura estadounidense, sino que
                  desarrollé habilidades de liderazgo que uso todos los días en mi trabajo.
                  Los niños me enseñaron tanto como yo a ellos."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">Santiago Ruiz</p>
                  <p className="text-brand-gold">Camp Counselor en New York, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para liderar y transformar vidas? 🏕️
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu aventura como Camp Counselor
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 3104994800</p>
                <p className="text-gray-600 text-sm">Manuel - Procesos Colombia</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <EnvelopeIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Escríbenos</h3>
                <p className="text-brand-gold font-semibold">info.col@icebga.com</p>
                <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agendar?programId=camp-counselor"
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