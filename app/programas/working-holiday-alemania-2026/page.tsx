import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import Image from "next/image";
import {
  GlobeAltIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  CurrencyEuroIcon,
  AcademicCapIcon,
  MapIcon,
  UserGroupIcon,
  InformationCircleIcon,
  TicketIcon,
  BuildingOffice2Icon,
  CakeIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Working Holiday Alemania 2026 | Trabaja en tus vacaciones | ICE World Team",
  description: "Trabaja legalmente en Alemania durante tus vacaciones universitarias. Sin citas de visa en la embajada. Gestión de permiso oficial de trabajo con ICE. ¡Asegura tu cupo hoy!",
  openGraph: {
    title: 'Working Holiday Alemania 2026 | ICE World Team',
    description: 'Trabaja legalmente en tus vacaciones universitarias en Alemania sin filas de visa.',
    images: [{ url: '/images/imagenes programas/working-holiday-germany-Master-Website-Hero.png', width: 1200, height: 630 }],
  }
};

export default function WorkingHolidayAlemania() {
  const whatsappUrl = "https://wa.me/573104994800?text=Hola,%20quiero%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n%20para%20el%20programa%20Working%20Holiday%20Alemania%202026.";

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
          <Link href={whatsappUrl} target="_blank" className="cta-whatsapp-alemania-mobile">
            <button className="w-full py-4 bg-gradient-to-r from-red-600 via-brand-orange to-brand-gold text-white font-bold text-lg rounded-2xl shadow-2xl shadow-brand-orange/50 flex items-center justify-center space-x-2 animate-bounce">
              <span>Aplicar a Alemania 2026</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/working-holiday-germany-hero.png" 
              alt="Working Holiday Alemania Hero" 
              fill 
              className="object-cover object-[center_15%]" 
              priority 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-100 font-bold text-sm tracking-widest mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                ¡CUPOS LIMITADOS!
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Working Holiday <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-400 to-red-500">
                  Alemania 2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
                Trabaja y vive una experiencia internacional en Europa durante tus vacaciones universitarias.
              </p>
              
              <div className="mb-10 inline-block bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                <p className="text-lg font-bold text-white flex items-center justify-center space-x-2">
                  <CheckCircleIcon className="w-6 h-6 text-brand-gold" />
                  <span>¡NO necesitas visa para postular! Nosotros gestionamos tu Permiso de Trabajo Oficial.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="cta-whatsapp-alemania inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 via-red-500 to-brand-gold text-white font-black text-xl rounded-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  ¡Asegura tu Cupo Ahora!
                </Link>
                
                <a
                  href="/working-holiday-alemania-ultimate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-brochure-alemania inline-flex items-center px-8 py-5 bg-black/40 border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/40 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300"
                >
                  Descargar Brochure Oficial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ¿Qué es Working Holiday Alemania? */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ¿Qué es Working Holiday Alemania?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Un programa de intercambio bajo el permiso legal de trabajo emitido por la oficina de empleos del Gobierno Alemán. Te permite trabajar legalmente durante tus vacaciones de la universidad y vivir una experiencia cultural única en Europa.
                </p>
                <div className="bg-gradient-to-br from-brand-gold/10 to-brand-orange/10 border-l-4 border-brand-gold p-6 rounded-r-2xl shadow-sm">
                  <p className="text-lg text-gray-800 font-semibold italic">
                    "Olvídate de las filas y citas en la embajada. Lo que necesitas es el Permiso de Trabajo Oficial emitido por el Gobierno Alemán, y nosotros nos encargamos de todo el trámite por ti."
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold to-red-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <GlobeAltIcon className="w-10 h-10 text-red-500 mx-auto mb-2" />
                      <span className="font-bold text-gray-900">Destino</span>
                      <p className="text-gray-500 text-sm">Alemania</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <BriefcaseIcon className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                      <span className="font-bold text-gray-900">Trabajo</span>
                      <p className="text-gray-500 text-sm">Legal y Remunerado</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <UserGroupIcon className="w-10 h-10 text-brand-orange mx-auto mb-2" />
                      <span className="font-bold text-gray-900">Perfil</span>
                      <p className="text-gray-500 text-sm">Universitarios</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <TicketIcon className="w-10 h-10 text-green-500 mx-auto mb-2" />
                      <span className="font-bold text-gray-900">Visa</span>
                      <p className="text-gray-500 text-sm">¡No Requerida!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Áreas de Trabajo y Asignación */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Asignación por Perfil y Disponibilidad
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Las áreas en las que te podrás desempeñar en Alemania.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-2">Nota Importante: Asignación de Empleo</h4>
                  <p className="text-red-900/80 leading-relaxed">
                    Los estudiantes <strong>no eligen de forma directa la oferta de trabajo</strong>. El empleo final es determinado y asignado directamente por el empleador en Alemania, basándose estrictamente en tu nivel real de idioma (Inglés/Alemán) y la demanda del mercado al momento del viaje.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/imagenes programas/Job-Categories-germany.png" 
                alt="Working Holiday Germany Job Categories" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-brand-gold/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TicketIcon className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Parques Temáticos <br/>y de Atracciones</h3>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-red-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CakeIcon className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurantes <br/>y Gastronomía</h3>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BuildingOffice2Icon className="w-10 h-10 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoteles Históricos <br/>y Urbanos</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Beneficios del Programa */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Beneficios del Programa
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Todo lo que ganarás en esta experiencia internacional.
              </p>
              <div className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/10">
                <img 
                  src="/images/imagenes programas/Student Benefits & Lifestyle-germany.png" 
                  alt="Student Benefits & Lifestyle Germany" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { title: "90 Días de Trabajo Legal", desc: "Permiso oficial emitido por la Agencia Federal de Empleo Alemana.", icon: <BriefcaseIcon className="w-8 h-8"/>, color: "text-blue-400", bg: "bg-blue-400/10" },
                { title: "Ingresos en Euros", desc: "Salario competitivo que financia tu estancia y tus viajes.", icon: <CurrencyEuroIcon className="w-8 h-8"/>, color: "text-brand-gold", bg: "bg-brand-gold/10" },
                { title: "Alemán Fluido", desc: "Aprendizaje acelerado mediante la práctica diaria y real con nativos.", icon: <AcademicCapIcon className="w-8 h-8"/>, color: "text-red-400", bg: "bg-red-400/10" },
                { title: "Eurotrip Asegurado", desc: "Libertad total para viajar por Alemania y toda la Unión Europea.", icon: <MapIcon className="w-8 h-8"/>, color: "text-green-400", bg: "bg-green-400/10" },
                { title: "Intercambio Cultural", desc: "Construye una red de amigos internacionales y vive una experiencia global.", icon: <GlobeAltIcon className="w-8 h-8"/>, color: "text-brand-orange", bg: "bg-brand-orange/10" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 & 6: Requisitos y Qué Incluye */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Requisitos */}
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Requisitos de Postulación
                  </h2>
                  <div className="w-20 h-1 bg-brand-gold rounded-full"></div>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-gold before:via-brand-orange before:to-gray-200">
                  {[
                    "Edad entre 18 y 30 años.",
                    "Estudiante universitario activo en modalidad presencial.",
                    "Nivel de idioma mínimo: Inglés B1 a B2 / Alemán A2.",
                    "No haber estado en el espacio Schengen en los últimos 12 meses.",
                    "No tener antecedentes legales o judiciales en Colombia."
                  ].map((req, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 bg-brand-gold text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-gray-100 group-hover:border-brand-gold/30 group-hover:shadow-md transition-all">
                        <p className="text-gray-700 font-medium">{req}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qué Incluye */}
              <div>
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    ¿Qué Incluye el Programa?
                  </h2>
                  <div className="w-20 h-1 bg-red-500 rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <ul className="space-y-6">
                    {[
                      "Gestión completa y orientación para el trámite del Permiso Laboral ante la Agencia Federal de Empleo Alemana.",
                      "Preparación Pre-Viaje (Pre-departure briefing): Charla de orientación para tu llegada, alojamiento y adaptación.",
                      "Soporte integral y acompañamiento continuo de principio a fin durante todo el proceso.",
                      "Filtro y diagnóstico inicial de tu nivel de idiomas.",
                      "Búsqueda y asignación de vivienda por parte del empleador asignado."
                    ].map((inc, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed text-lg">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section className="py-24 bg-gradient-to-br from-red-600 via-brand-orange to-brand-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              ¿Qué esperas? <br className="hidden md:block" />
              ¡No te quedes sin tu cupo!
            </h2>
            <p className="text-2xl text-white/90 font-bold italic mb-10">
              Work hard, travel often.
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="cta-whatsapp-alemania-final inline-flex items-center px-10 py-5 bg-white text-red-600 font-black text-xl rounded-xl hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Iniciar Mi Proceso de Selección</span>
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>

      </div>
    </IceLayoutWrapper>
  );
}
