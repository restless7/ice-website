import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import Image from "next/image";
import {
  GlobeAltIcon,
  CheckCircleIcon,
  MapIcon,
  SunIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Rumbo Colombia | Inmersión Cultural y Estudios | ICE World Team",
  description: "Estudia y vive en Colombia. Un programa diseñado para estudiantes internacionales que buscan una inmersión cultural, académica y de aventura en el corazón de Sudamérica.",
  openGraph: {
    title: 'Rumbo Colombia | ICE World Team',
    description: 'Estudia y vive en Colombia con nuestro programa de inmersión total.',
    images: [{ url: '/images/imagenes programas/tourist-with-hat-front.jpg', width: 1200, height: 630 }],
  }
};

export default function RumboColombia() {
  const whatsappUrl = "https://wa.me/573104994800?text=Hola,%20quiero%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20programa%20Rumbo%20Colombia.";

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
          <Link href={whatsappUrl} target="_blank" className="cta-whatsapp-rumbocolombia-mobile">
            <button className="w-full py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-2xl shadow-2xl flex items-center justify-center space-x-2 animate-bounce">
              <span>Descubre Colombia</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <Image 
              src="/images/imagenes programas/tourist-with-hat-front.jpg" 
              alt="Rumbo Colombia Hero" 
              fill 
              className="object-cover object-center" 
              priority 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold font-bold text-sm tracking-widest mb-8 backdrop-blur-md">
                INMERSIÓN CULTURAL & ACADÉMICA
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Rumbo <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-brand-gold to-brand-orange">Colombia</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
                Una experiencia única para estudiantes internacionales. Descubre la biodiversidad, calidez y cultura del país más acogedor de Sudamérica.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="cta-whatsapp-rumbocolombia inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-black text-xl rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Solicitar Información
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Beneficios */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Por qué elegir Colombia?
              </h2>
              <p className="text-xl text-gray-600">
                Mucho más que un intercambio académico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Educación de Calidad", desc: "Universidades reconocidas en toda la región.", icon: <AcademicCapIcon className="w-8 h-8"/>, color: "text-blue-500", bg: "bg-blue-50" },
                { title: "Inmersión en Español", desc: "Aprende el segundo idioma más hablado del mundo nativamente.", icon: <GlobeAltIcon className="w-8 h-8"/>, color: "text-brand-orange", bg: "bg-orange-50" },
                { title: "Biodiversidad Única", desc: "Playas, montañas, selvas y desiertos a tu alcance.", icon: <SunIcon className="w-8 h-8"/>, color: "text-green-500", bg: "bg-green-50" },
                { title: "Calidez Humana", desc: "El país más acogedor y feliz de la región.", icon: <UserGroupIcon className="w-8 h-8"/>, color: "text-brand-gold", bg: "bg-yellow-50" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Final CTA */}
        <section className="py-24 bg-gradient-to-br from-brand-orange to-brand-gold relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Vive la magia de Colombia
            </h2>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="cta-whatsapp-rumbocolombia-final inline-flex items-center px-10 py-5 bg-white text-brand-orange font-black text-xl rounded-xl hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Empieza tu viaje hoy</span>
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </Link>
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
