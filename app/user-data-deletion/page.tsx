import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";

export const metadata: Metadata = {
  title: "Instrucciones de Eliminación de Datos | ICE - Instituto Cultural de Educación",
  description: "Pautas e instrucciones para solicitar la eliminación de datos de usuario de ICE.",
};

export default function UserDataDeletionPage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white min-h-screen py-24 px-6 md:px-12 lg:px-24 font-inter text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D3B66] mb-8 border-b-2 border-[#ECA400] pb-4">
            Instrucciones para la Eliminación de Datos de Usuario
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            {/* 1. Commitment to Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">1. Compromiso con la Privacidad</h2>
              <p>
                ICE respeta profundamente sus derechos de control de datos bajo las regulaciones de protección de datos locales e internacionales. Nos comprometemos a proporcionarle un mecanismo claro y accesible para ejercer su derecho a ser olvidado.
              </p>
            </section>

            {/* 2. What We Store */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">2. Qué Información Almacenamos</h2>
              <p>
                Para el funcionamiento de nuestro Asistente Automatizado de WhatsApp, almacenamos de manera segura su número de teléfono y las cadenas de texto (strings) de los mensajes entrantes. El propósito exclusivo de esta retención es facilitar la interacción de soporte mediante Inteligencia Artificial y mantener un historial de registro en el portal de nuestros agentes para un servicio al cliente continuo y eficiente.
              </p>
            </section>

            {/* 3. How to Request Deletion */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">3. Cómo Solicitar la Eliminación</h2>
              <p>
                Los usuarios pueden solicitar el borrado completo de sus registros de comunicación de WhatsApp enviando un correo electrónico directamente a nuestro equipo de soporte. Para iniciar el proceso, por favor siga este protocolo inequívoco:
              </p>
              <div className="mt-4 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <ul className="list-disc pl-6 space-y-3">
                  <li>Envíe un correo electrónico a: <a href="mailto:support@iceworldteam.com" className="text-[#ECA400] font-bold hover:underline">support@iceworldteam.com</a></li>
                  <li>El asunto del correo debe ser exactamente: <strong>"WhatsApp Data Deletion Request"</strong></li>
                  <li>En el cuerpo del correo, debe especificar claramente el <strong>número de teléfono activo</strong> asociado a las conversaciones que desea eliminar.</li>
                </ul>
              </div>
            </section>

            {/* 4. Execution Timeline */}
            <section>
              <h2 className="text-2xl font-semibold text-[#0D3B66] mb-3">4. Plazo de Ejecución</h2>
              <p>
                Una vez recibida y verificada la titularidad de su solicitud, todos los registros conversacionales vinculados a ese número de teléfono serán purgados y eliminados permanentemente de nuestros registros internos de bases de datos en un plazo no mayor a <strong>7 días hábiles</strong>.
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
