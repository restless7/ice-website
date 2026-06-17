import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheckIcon,
  PhoneIcon,
  HeartIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Seguros Internacionales | Viaja Protegido | ICE World Team",
  description: "Asistencia médica, odontológica, pérdida de equipaje, robo de documentos y cobertura completa para tu viaje internacional. ¡Viaja con tranquilidad!",
  openGraph: {
    title: 'Seguros Internacionales | ICE World Team',
    description: 'Viaja asegurado a cualquier parte del mundo con cobertura 24/7.',
    images: [{ url: '/images/imagenes programas/health-care-medical-science-with-digital-technology-doctor-white-coat-innovation-treatment-medicine-medical-research-hospital-elements-this-image-furnished-by-nasa.jpg', width: 1200, height: 630 }],
  }
};

export default function SegurosInternacionales() {
  const whatsappUrl = "https://wa.me/573104994800?text=Hola,%20quisiera%20cotizar%20un%20Seguro%20Internacional%20para%20mi%20pr%C3%B3ximo%20viaje.";

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        
        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
          <Link href={whatsappUrl} target="_blank" className="cta-whatsapp-seguros-mobile">
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl flex items-center justify-center space-x-2 animate-bounce">
              <span>Cotizar Seguro</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <Image 
              src="/images/imagenes programas/health-care-medical-science-with-digital-technology-doctor-white-coat-innovation-treatment-medicine-medical-research-hospital-elements-this-image-furnished-by-nasa.jpg" 
              alt="Seguros Internacionales Hero" 
              fill 
              className="object-cover object-center" 
              priority 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 font-bold text-sm tracking-widest mb-8 backdrop-blur-md">
                COBERTURA GLOBAL 24/7
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Seguros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Internacionales</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-medium">
                No dejes que un imprevisto arruine tu viaje. Protégete contra emergencias médicas, pérdida de equipaje y más.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="cta-whatsapp-seguros inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Cotizar mi Seguro Ahora
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Coberturas */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                ¿Qué incluye tu Seguro?
              </h2>
              <p className="text-xl text-slate-600">
                Coberturas diseñadas para que viajes sin preocupaciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Asistencia Médica", desc: "Cobertura en caso de accidente o enfermedad internacional.", icon: <HeartIcon className="w-8 h-8"/>, color: "text-red-500", bg: "bg-red-50" },
                { title: "Pérdida de Equipaje", desc: "Compensación económica por robo o pérdida de maletas.", icon: <BriefcaseIcon className="w-8 h-8"/>, color: "text-brand-orange", bg: "bg-orange-50" },
                { title: "Asistencia Legal", desc: "Soporte y protección ante imprevistos judiciales en el exterior.", icon: <ShieldCheckIcon className="w-8 h-8"/>, color: "text-blue-500", bg: "bg-blue-50" },
                { title: "Cancelación", desc: "Reembolso por interrupción o cancelación justificada del viaje.", icon: <BanknotesIcon className="w-8 h-8"/>, color: "text-green-500", bg: "bg-green-50" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 ${benefit.bg} ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Final CTA */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Viaja seguro, viaja tranquilo
            </h2>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="cta-whatsapp-seguros-final inline-flex items-center px-10 py-5 bg-white text-blue-600 font-black text-xl rounded-xl hover:bg-slate-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Solicitar Cotización</span>
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </section>

      </div>
    </IceLayoutWrapper>
  );
}
