import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import Image from "next/image";
import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import {
  GlobeAltIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  StarIcon,
  BuildingOffice2Icon,
  XCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: 'Asia Internship 2026 | ICE World Team',
  description: 'Tu puente hacia oportunidades laborales internacionales en los destinos más impresionantes del continente asiático.',
  openGraph: {
    title: 'Asia Internship 2026 | ICE World Team',
    description: 'Empleo formal y desarrollo profesional en resorts y hoteles de 5 estrellas en Asia.',
    url: 'https://www.iceworldteam.com/programas/internship-asia-2026',
    type: 'website',
    images: [{ url: '/images/programs/asia-internship-hero.jpg' }], 
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FB_APP_ID || '',
  },
};

export const revalidate = 3600; // ISR for dynamic program data

export default async function AsiaInternship() {
  let programs: any[] = [];
  let preselectedProgramId = "Asia Internship 2026"; 

  try {
    const portalUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || 'https://api.iceworldteam.com';
    const res = await fetch(`${portalUrl}/api/public/programs`, {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      const data = await res.json();
      programs = data.data || [];
      const asiaProgram = programs.find((p: any) => p.name.toLowerCase().includes('asia') || p.name.includes('Internship Asia'));
      if (asiaProgram) {
        preselectedProgramId = asiaProgram.id;
      }
    }
  } catch (error) {
    console.error("Failed to fetch programs for Asia page", error);
  }

  const whatsappUrl = "https://wa.me/573104994800?text=Hola,%20quiero%20iniciar%20mi%20proceso%20de%20postulaci%C3%B3n%20para%20el%20programa%20Asia%20Internship%202026.";

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
          <Link href="#agendar" className="cta-asia-mobile">
            <button className="w-full py-4 bg-gradient-to-r from-gray-900 via-brand-dark to-black text-white font-bold text-lg rounded-2xl shadow-2xl shadow-black/50 flex items-center justify-center space-x-2 animate-bounce border border-brand-gold/30">
              <span>Agendar Asesoría Informativa</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Component A: Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Si no tienes la imagen asia-internship-hero.jpg, pon la del placeholder temporal o quítala de public */}
            <Image 
              src="/images/programs/asia-internship-hero.jpg" 
              alt="Asia Internship Hero" 
              fill 
              className="object-cover object-[center_30%] opacity-60" 
              priority 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80 z-0"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 z-0"></div>
          
          <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10 flex justify-center md:justify-start">
            <div className="text-center md:text-left max-w-2xl lg:max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold font-bold text-sm tracking-widest mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
                CULTURAL EXCHANGE / INTERNSHIP
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Asia Internship <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-400 to-yellow-200">
                  2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
                Mucho más que un viaje. Una experiencia que cambia vidas. Tu puente hacia oportunidades laborales internacionales en los destinos más impresionantes del continente asiático.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="#agendar"
                  className="cta-asia inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand-gold to-yellow-500 text-gray-900 font-black text-xl rounded-xl hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  Agendar Asesoría Informativa
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Component B: Bloque de Enfoque */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Inmersión e Impacto
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre por qué este programa es el acelerador perfecto para tu carrera profesional en hotelería de lujo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Inmersión y Trabajo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empleo formal y desarrollo profesional en resorts y hoteles de 5 estrellas en los destinos más exclusivos de Asia.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <CurrencyDollarIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios Claros</h3>
                <p className="text-gray-600 leading-relaxed">
                  Obtén experiencia laboral comprobable, perfecciona tu inglés y recibe un estipendio mensual con todo incluido.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <GlobeAltIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto Personal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vive el día a día como un local y experimenta una cultura que transformará tu futuro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Component C: Modalidades del Programa */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Modalidades del Programa
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elige el camino que mejor se adapte a tu nivel de experiencia y objetivos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pasantía */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-brand-gold/30 transition-all">
                <div className="inline-flex px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-bold text-sm mb-6">6 a 12 Meses</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pasantía</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <UserGroupIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Público:</strong> Estudiantes o recién graduados (hasta 35 años).</p>
                  </li>
                  <li className="flex items-start">
                    <StarIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Enfoque:</strong> Ideal para ganar experiencia o créditos académicos.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Requisitos:</strong> Inglés conversacional y disponibilidad todo el año.</p>
                  </li>
                </ul>
              </div>

              {/* Entrenamiento Gerencial */}
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden transform md:scale-105 z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl"></div>
                <div className="inline-flex px-4 py-2 bg-brand-gold text-gray-900 rounded-full font-bold text-sm mb-6 relative z-10">12 a 24 Meses</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Entrenamiento Gerencial</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start">
                    <UserGroupIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-300"><strong>Público:</strong> Graduados (hasta 39 años) con mín. 1 año de experiencia.</p>
                  </li>
                  <li className="flex items-start">
                    <ChartBarIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-300"><strong>Enfoque:</strong> Roles de supervisión y desarrollo de liderazgo.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-300"><strong>Requisitos:</strong> Inglés fluido.</p>
                  </li>
                </ul>
              </div>

              {/* Posición Contractual */}
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-brand-gold/30 transition-all">
                <div className="inline-flex px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-6">1 a 3 Años</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Posición Contractual</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <UserGroupIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Público:</strong> Graduados de bachillerato (hasta 39 años) con mín. 2 años exp.</p>
                  </li>
                  <li className="flex items-start">
                    <BriefcaseIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Enfoque:</strong> Acuerdo laboral formal en roles de primera línea.</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                    <p className="text-gray-700"><strong>Requisitos:</strong> Potencial de renovación basado en desarrollo.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Component D: Áreas de Colocación Laboral */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Áreas de Colocación Laboral
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-red-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alimentos y Bebidas</h3>
                <p className="text-gray-500 text-sm">Servicio de restaurante, bar, room service, mixología.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BuildingOffice2Icon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Front Office</h3>
                <p className="text-gray-500 text-sm">Check-in, atención al huésped, reservas.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-orange-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cocina</h3>
                <p className="text-gray-500 text-sm">Preparación, pastelería, banquetes, parrilla.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-20 h-20 bg-green-500/10 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UserGroupIcon className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Áreas Administrativas</h3>
                <p className="text-gray-500 text-sm">Recreación / Spa, Housekeeping y RRHH.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Component E: Requisitos de Elegibilidad */}
        <section className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Requisitos de Elegibilidad
              </h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-gold before:via-brand-orange before:to-gray-200">
              {[
                "Estudiante activo o graduado en los últimos 2 a 5 años (según modalidad).",
                "Edad: Hasta 35 o 39 años (dependiendo de la categoría seleccionada).",
                "Pasaporte vigente y antecedentes penales limpios.",
                "Nivel de inglés: Conversacional o fluido.",
                "Carta de recomendación emitida por tu institución educativa."
              ].map((req, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-gold text-gray-900 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:border-brand-gold/30 group-hover:shadow-md transition-all">
                    <p className="text-gray-800 font-medium">{req}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Component F: Desglose de Inversión y Estructura de Pagos */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Estructura de Inversión
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transparencia total en cada fase de tu proceso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative">
                <div className="absolute top-0 right-0 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">Paso 1</div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">Fase 1: Inscripción</h3>
                <p className="text-gray-400 text-sm mb-6">Asegura tu lugar</p>
                <div className="text-4xl font-black text-white mb-6">100<span className="text-lg text-gray-400 font-normal"> USD</span></div>
                <p className="text-gray-300 leading-relaxed">Abre tu expediente oficial y activa tu proceso con nosotros.</p>
              </div>

              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-3xl p-8 relative transform md:scale-105 z-10 shadow-2xl">
                <div className="absolute top-0 right-0 bg-brand-gold text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">Paso 2</div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">Fase 2: La Oferta</h3>
                <p className="text-gray-400 text-sm mb-6">Tu pase de entrada</p>
                <div className="text-4xl font-black text-white mb-6">300<span className="text-lg text-gray-400 font-normal"> USD</span></div>
                <p className="text-gray-300 leading-relaxed">Una vez seleccionado tu perfil, se realiza este pago para la oferta formal de tu programa.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative">
                <div className="absolute top-0 right-0 bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">Paso 3</div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">Fase 3: El Programa</h3>
                <p className="text-gray-400 text-sm mb-6">Tu experiencia completa</p>
                <div className="text-4xl font-black text-white mb-6">1,450<span className="text-lg text-gray-400 font-normal"> USD</span></div>
                <p className="text-gray-300 leading-relaxed">El saldo restante cubre toda la gestión, soporte y estructura de viaje.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Component G: Qué Incluye vs Qué No Incluye */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Qué Incluye */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircleIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Qué Incluye</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Asesoría 100% en español.",
                    "Entrevista y perfilamiento inicial.",
                    "Optimización de hoja de vida y coaching para entrevistas.",
                    "Matching con hoteles 5 estrellas en Asia.",
                    "Apoyo en el proceso de visa.",
                    "Orientación pre-viaje y soporte continuo.",
                    "Beneficios en destino: Alojamiento, comidas en turno, uniforme y lavandería, acceso a instalaciones, transporte local, seguro médico y estipendio mensual."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qué No Incluye */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <XCircleIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Qué NO Incluye</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Tiquetes aéreos internacionales.",
                    "Tarifa de visa de embajada correspondiente.",
                    "Trámite / costo del pasaporte.",
                    "Seguro médico de viaje internacional privado adicional.",
                    "Gastos personales en el destino."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <XCircleIcon className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Component H: Línea de Tiempo del Proceso */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Línea de Tiempo del Proceso
              </h2>
            </div>
            
            <div className="relative border-l-2 border-brand-gold/30 ml-4 md:ml-0 md:pl-0">
              {[
                { title: "Postulación y Entrevista", desc: "Aplicas, te entrevistamos y evaluamos tu perfil para confirmar elegibilidad." },
                { title: "Inscripción y Matching", desc: "Firmas el acuerdo, pagas la inscripción y conectamos tu perfil con hoteles cinco estrellas." },
                { title: "Entrevistas con el Hotel", desc: "Te preparamos y coordinamos entrevistas con los gerentes de RRHH internacionales." },
                { title: "Oferta y Visa", desc: "Recibes oferta escrita, completas el pago y comenzamos el proceso de visa contigo." },
                { title: "¡Vuelas!", desc: "Orientación pre-viaje, llegada acompañada y soporte continuo durante todo el programa." }
              ].map((step, idx) => (
                <div key={idx} className="mb-10 ml-8 md:ml-12 relative">
                  <div className="absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 bg-brand-gold rounded-full border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso {idx + 1}: {step.title}</h3>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Component I: Inyección del Widget de Agendamiento Final */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" id="agendar">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Listo para dar el gran salto?
              </h2>
              <p className="text-xl text-gray-600">
                Agenda tu asesoría informativa y comencemos.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
              <IceSchedulingWidget 
                sourceCTA="Asia Landing Page" 
                programs={programs} 
                preselectedProgramId={preselectedProgramId} 
              />
            </div>
          </div>
        </section>

      </div>
    </IceLayoutWrapper>
  );
}
