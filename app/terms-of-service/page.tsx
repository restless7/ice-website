import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";

export const metadata: Metadata = {
  title: "Términos de Servicio | ICE - Instituto Cultural de Educación",
  description: "Términos de Servicio para las interacciones con el Asistente Automatizado de WhatsApp de ICE.",
};

export default function TermsOfServicePage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white min-h-screen py-24 px-6 md:px-12 lg:px-24 font-inter text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D3B66] mb-8 border-b-2 border-[#ECA400] pb-4">
            Términos de Servicio
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">1. Aceptación de los Términos</h2>
              <p>
                Al interactuar con el asistente automatizado de WhatsApp oficial de ICE (<strong>+57 318 9444344</strong>), usted acepta plenamente los presentes Términos de Servicio. Estos rigen el uso del canal de comunicación automatizada diseñado para brindar soporte, orientación y seguimiento de sus procesos académicos y financieros.
              </p>
            </section>

            {/* 2. Scope of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">2. Alcance del Servicio</h2>
              <p>
                Nuestro asistente virtual impulsado por Inteligencia Artificial está capacitado para proporcionar información en tiempo real relacionada con su perfil académico y el estado de sus trámites financieros. Esto incluye específicamente la capacidad de realizar seguimiento de solicitudes, consultas de programas y actualizaciones detalladas sobre los procesos de <strong>Devoluciones</strong>.
              </p>
            </section>

            {/* 3. Accuracy of AI Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">3. Exactitud de la Información de la IA</h2>
              <p>
                Si bien el asistente virtual extrae actualizaciones directamente de los registros financieros y la base de datos oficial en tiempo real, las respuestas conversacionales generadas por la inteligencia artificial tienen como objetivo brindar orientación y soporte de seguimiento. Tenga en cuenta que <strong>los saldos financieros oficiales, las decisiones finales y los plazos de cumplimiento siguen regidos exclusivamente por los acuerdos y contratos principales de la plataforma central</strong>.
              </p>
            </section>

            {/* 4. SLA Respect */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">4. Cumplimiento de Plazos (SLA)</h2>
              <p>
                El asistente automatizado está programado para adherirse estrictamente y comunicar las políticas corporativas vigentes. En el caso de solicitudes de reembolso y devoluciones, el sistema respeta de manera rigurosa la política corporativa que establece un tiempo máximo de resolución de <strong>120 días hábiles (SLA)</strong>.
              </p>
            </section>

            {/* 5. Prohibited Use */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">5. Uso Prohibido</h2>
              <p>
                Queda estrictamente prohibido utilizar nuestra interfaz de chat de WhatsApp para transmitir códigos maliciosos, proferir lenguaje ofensivo o inapropiado, enviar spam, o presentar reclamos fraudulentos. El incumplimiento de esta norma puede resultar en la suspensión inmediata del acceso a los canales de soporte de ICE.
              </p>
            </section>
            
            <p className="text-sm text-gray-500 pt-8 border-t border-gray-200 mt-12">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
