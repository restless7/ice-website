import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import {
  MapPinIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Canada - Tu Proyecto de Vida | ICE - Instituto Cultural de Educación",
  description: "Construye tu futuro en Canadá. Estudios, trabajo, inmigración y residencia permanente en uno de los mejores países del mundo para vivir.",
};

export default function CanadaTuProyectoDeVida() {
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
                    <MapPinIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Canada</span> 🍁
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Tu Proyecto de Vida • El Gran Norte</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Construye tu futuro en Canadá, uno de los mejores países del mundo para vivir.
                  Oportunidades de estudio, trabajo, inmigración y residencia permanente
                  en una sociedad multicultural y próspera.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/agendar"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Comenzar Mi Proyecto
                  </Link>
                  <Link
                    href="/agendar"
                    className="inline-flex items-center px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold text-lg rounded-xl hover:bg-brand-gold/10 transition-all duration-300"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 rounded-3xl p-8 border border-brand-gold/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué Canadá?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Calidad de vida</span>
                      <span className="font-bold text-brand-gold">#1 Mundial</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Educación</span>
                      <span className="font-bold text-gray-900">Top 5 Global</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Inmigración</span>
                      <span className="font-bold text-gray-900">400K+ anuales</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Multiculturalismo</span>
                      <span className="font-bold text-gray-900">✓ Oficial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Paths Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caminos hacia Canadá
              </h2>
              <p className="text-xl text-gray-600">
                Diferentes rutas para hacer realidad tu sueño canadiense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎓 Estudiante Internacional</h3>
                <p className="text-gray-600 mb-6">
                  Comienza con estudios superiores y construye tu camino hacia la residencia
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Colleges y universidades acreditadas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Permiso de trabajo durante estudios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Post-Graduation Work Permit (PGWP)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Camino directo a Express Entry</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">
                    ⏱️ Tiempo estimado: 2-4 años hasta residencia
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mb-6">
                  <BriefcaseIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">💼 Trabajador Calificado</h3>
                <p className="text-gray-600 mb-6">
                  Aplica directamente con tu experiencia profesional y educación
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Express Entry System</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Provincial Nominee Program (PNP)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Evaluación de credenciales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Búsqueda de empleo especializada</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-brand-gold/10 rounded-lg">
                  <p className="text-sm font-semibold text-brand-gold">
                    ⏱️ Tiempo estimado: 12-18 meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Study Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Programas de Estudio Populares
              </h2>
              <p className="text-xl text-gray-600">
                Áreas de estudio con alta demanda laboral en Canadá
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💻 Tecnología</h3>
                <p className="text-gray-600 mb-4">
                  Sector en crecimiento con alta demanda de profesionales
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Software Development</li>
                  <li>• Cybersecurity</li>
                  <li>• Data Science</li>
                  <li>• AI and Machine Learning</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $75,000-120,000 CAD
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Salud</h3>
                <p className="text-gray-600 mb-4">
                  Sistema de salud en expansión con gran demanda
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Nursing</li>
                  <li>• Medical Laboratory</li>
                  <li>• Healthcare Management</li>
                  <li>• Mental Health</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $65,000-95,000 CAD
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Ingeniería</h3>
                <p className="text-gray-600 mb-4">
                  Infraestructura en crecimiento necesita ingenieros
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Civil Engineering</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Electrical Engineering</li>
                  <li>• Environmental Engineering</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $70,000-110,000 CAD
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Negocios</h3>
                <p className="text-gray-600 mb-4">
                  Administración y gestión empresarial
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Business Administration</li>
                  <li>• Project Management</li>
                  <li>• Human Resources</li>
                  <li>• Supply Chain Management</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $55,000-85,000 CAD
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🍁 Recursos Naturales</h3>
                <p className="text-gray-600 mb-4">
                  Sector clave de la economía canadiense
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Forestry Management</li>
                  <li>• Mining Technology</li>
                  <li>• Environmental Science</li>
                  <li>• Renewable Energy</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $60,000-90,000 CAD
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Educación</h3>
                <p className="text-gray-600 mb-4">
                  Sistema educativo de alta calidad mundial
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Early Childhood Education</li>
                  <li>• Teaching (K-12)</li>
                  <li>• Educational Leadership</li>
                  <li>• Special Education</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-semibold text-green-600">
                    💰 Salario promedio: $50,000-75,000 CAD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provincial Programs Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Provincias Populares
              </h2>
              <p className="text-xl text-gray-600">
                Cada provincia ofrece oportunidades únicas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏙️ Ontario</h3>
                <p className="text-gray-600 mb-4">
                  Centro económico con Toronto y Ottawa
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Ventajas:</strong> Mayor economía, multiculturalidad</p>
                  <p><strong>Industrias:</strong> Tech, finanzas, manufactura</p>
                  <p><strong>PNP:</strong> Ontario Immigrant Nominee Program</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🇫🇷 Quebec</h3>
                <p className="text-gray-600 mb-4">
                  Provincia francófona con sistema único
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Ventajas:</strong> Cultura única, programas especiales</p>
                  <p><strong>Idiomas:</strong> Francés (esencial), Inglés</p>
                  <p><strong>PNP:</strong> Quebec Experience Program</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏔️ British Columbia</h3>
                <p className="text-gray-600 mb-4">
                  Costa oeste con Vancouver y Victoria
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Ventajas:</strong> Clima templado, naturaleza</p>
                  <p><strong>Industrias:</strong> Tech, cine, turismo</p>
                  <p><strong>PNP:</strong> BC Provincial Nominee Program</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌾 Alberta</h3>
                <p className="text-gray-600 mb-4">
                  Economía próspera sin impuesto provincial
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Ventajas:</strong> Sin PST, economía fuerte</p>
                  <p><strong>Industrias:</strong> Energía, agricultura, tech</p>
                  <p><strong>PNP:</strong> Alberta Advantage Immigration Program</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🦞 Atlantic Canada</h3>
                <p className="text-gray-600 mb-4">
                  Programa especial para 4 provincias atlánticas
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Provincias:</strong> NS, NB, PEI, NL</p>
                  <p><strong>Ventajas:</strong> Menor competencia, costos bajos</p>
                  <p><strong>PNP:</strong> Atlantic Immigration Program</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌾 Saskatchewan</h3>
                <p className="text-gray-600 mb-4">
                  Crecimiento económico acelerado
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Ventajas:</strong> Bajo costo de vida, demanda laboral</p>
                  <p><strong>Industrias:</strong> Agricultura, minería, tech</p>
                  <p><strong>PNP:</strong> Saskatchewan Immigrant Nominee Program</p>
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
                Beneficios de Vivir en Canadá
              </h2>
              <p className="text-xl text-gray-600">
                ¿Por qué millones eligen Canadá como su nuevo hogar?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HeartIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Sistema de Salud Universal</h3>
                <p className="text-gray-600">
                  Acceso gratuito a servicios médicos y hospitalarios para residentes
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Educación de Calidad</h3>
                <p className="text-gray-600">
                  Sistema educativo de primer nivel y educación pública gratuita
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <StarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌍 Multiculturalismo</h3>
                <p className="text-gray-600">
                  Sociedad diversa y tolerante que celebra diferentes culturas
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <BriefcaseIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Oportunidades Laborales</h3>
                <p className="text-gray-600">
                  Mercado laboral dinámico con salarios competitivos y protecciones
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HomeIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏠 Estabilidad Social</h3>
                <p className="text-gray-600">
                  Baja criminalidad, instituciones sólidas y estado de derecho
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <MapPinIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏞️ Calidad de Vida</h3>
                <p className="text-gray-600">
                  Naturaleza espectacular, ciudades limpias y alto nivel de vida
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-600">
                Te acompañamos en cada paso hacia tu sueño canadiense
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Estudios</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Selección de programa:</span>
                      <p className="text-gray-700">Evaluación y recomendación personalizada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Aplicaciones:</span>
                      <p className="text-gray-700">Gestión completa del proceso de admisión</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Visa de estudiante:</span>
                      <p className="text-gray-700">Tramitación completa del Study Permit</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏠 Inmigración</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Evaluación:</span>
                      <p className="text-gray-700">Análisis completo de elegibilidad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Express Entry:</span>
                      <p className="text-gray-700">Preparación y envío de perfil</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">PNP:</span>
                      <p className="text-gray-700">Aplicaciones provinciales especializadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">🍁</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "ICE hizo realidad mi sueño canadiense. Comenzé con un programa de Business
                  Administration en Toronto, conseguí mi PGWP, y ahora tengo mi residencia
                  permanente. Mi familia completa vive aquí y mis hijos estudian en escuelas
                  públicas canadienses. ¡No podría estar más agradecido!"
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">Roberto Martínez</p>
                  <p className="text-brand-gold">Residente Permanente en Ontario - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para construir tu futuro en Canadá? 🍁
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu proyecto de vida canadiense hoy
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

            <div className="bg-red-50 rounded-2xl p-6 mb-8 border border-red-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Evaluación Gratuita</h3>
              <p className="text-gray-700 mb-4">
                Agenda una consulta gratuita para evaluar tus opciones específicas para Canadá
              </p>
              <p className="text-sm text-gray-600">
                <strong>Incluye:</strong> Análisis de perfil, recomendaciones personalizadas y plan de acción
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/agendar"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Comenzar Mi Proyecto
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