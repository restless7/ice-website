import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | ICE - Instituto Cultural de Educación",
  description: "Políticas de privacidad y manejo de datos personales de ICE (Instituto Cultural de Educación).",
};

export default function PrivacyPolicyPage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white min-h-screen py-24 px-6 md:px-12 lg:px-24 font-inter text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D3B66] mb-8 border-b-2 border-[#ECA400] pb-4">
            Políticas de Privacidad
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            {/* 1. Data Controller Identity */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">1. Identidad del Responsable de los Datos</h2>
              <p>
                <strong>ICE (Instituto Cultural de Educación)</strong>, accesible a través de nuestro sitio web oficial <a href="https://www.iceworldteam.com" className="text-[#ECA400] hover:underline">iceworldteam.com</a>, actúa como el responsable principal (Data Controller) del tratamiento de la información de nuestros usuarios. Nos comprometemos a procesar su información personal de manera totalmente transparente, segura y conforme a las normativas de protección de datos vigentes.
              </p>
            </section>

            {/* 2. WhatsApp Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">2. Recopilación de Datos vía WhatsApp</h2>
              <p>
                Le informamos explícitamente que cuando usted se comunica con nuestra cuenta comercial oficial de WhatsApp (<strong>+57 318 9444344</strong>), nosotros manejamos, almacenamos y procesamos su número de teléfono y el texto de los mensajes entrantes. El propósito exclusivo de esta recopilación es:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Proveer soporte automatizado o manual para su cuenta.</li>
                <li>Enviar actualizaciones de seguimiento sobre sus procesos y programas.</li>
                <li>Notificarle sobre su estado financiero (pagos, devoluciones y facturación).</li>
              </ul>
            </section>

            {/* 3. Data Security & Zero Third-Party Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">3. Seguridad de Datos y Cero Intercambio con Terceros</h2>
              <p>
                Garantizamos que toda la información recopilada es enrutada de forma segura a través de canales encriptados y almacenada estrictamente en nuestros servidores internos y bases de datos privadas. <strong>Bajo ninguna circunstancia sus datos personales serán vendidos, intercambiados, alquilados o compartidos con terceros no autorizados</strong>. El acceso a su información está limitado exclusivamente al personal de ICE que requiere dicha información para procesar sus trámites.
              </p>
            </section>

            {/* 4. User Control & Opt-Out Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">4. Control del Usuario y Política de Exclusión (Opt-Out)</h2>
              <p>
                Usted mantiene el control total sobre su información y sus preferencias de comunicación. En cualquier momento, usted tiene el derecho de revocar completamente los permisos de mensajería automatizada y comercial. Para hacer efectiva esta revocación o solicitar la eliminación explícita de sus datos de nuestro sistema, usted puede:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Enviar un mensaje de texto a nuestro WhatsApp con la palabra <strong>"STOP"</strong> o <strong>"BAJA"</strong>.</li>
                <li>Enviar una solicitud explícita de eliminación de datos a nuestro centro de soporte.</li>
              </ul>
            </section>

            {/* 5. Official Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">5. Información de Contacto Oficial</h2>
              <p>
                Si tiene alguna pregunta, inquietud o desea ejercer sus derechos sobre sus datos personales, por favor comuníquese con nosotros a través de nuestro correo electrónico corporativo oficial:
              </p>
              <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#0D3B66] rounded-r-lg">
                <p className="font-semibold">Correo de Soporte y Privacidad:</p>
                <a href="mailto:support@iceworldteam.com" className="text-[#ECA400] font-bold hover:underline">
                  support@iceworldteam.com
                </a>
              </div>
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
