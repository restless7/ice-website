import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import Link from "next/link";
import { 
  HeartIcon,
  CheckCircleIcon,
  ClockIcon,
  HomeIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Au Pair USA | ICE - Instituto Cultural de Educación",
  description: "Programa Au Pair en Estados Unidos. Vive con una familia anfitriona americana, cuida niños y disfruta de una experiencia cultural única por 12-24 meses.",
};

export default function AuPairUSA() {
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
                    <HeartIcon className="w-full h-full text-brand-gold" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      <span className="text-brand-gold">Au Pair</span> USA 🇺🇸
                    </h1>
                    <p className="text-xl text-brand-orange mt-2">Intercambio Cultural • 12-24 meses</p>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  El programa Au Pair en USA es tu oportunidad de vivir un intercambio cultural único: 
                  convivirás con una familia anfitriona americana, cuidarás de sus hijos y, al mismo tiempo, 
                  disfrutarás de beneficios que harán tu experiencia inolvidable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Aplicar Ahora
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
                      <span className="text-gray-600">Inversión</span>
                      <span className="font-bold text-brand-gold">4,150,000 COP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duración</span>
                      <span className="font-bold text-gray-900">12-24 meses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Edad</span>
                      <span className="font-bold text-gray-900">18-26 años</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Sponsor</span>
                      <span className="font-bold text-gray-900">InterExchange</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lo que recibirás ✨
              </h2>
              <p className="text-xl text-gray-600">
                Beneficios únicos que harán tu experiencia inolvidable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <HomeIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🏡 Alojamiento</h3>
                <p className="text-gray-600">
                  Habitación privada y comida incluidos con tu familia anfitriona
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <CurrencyDollarIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">💵 Remuneración</h3>
                <p className="text-gray-600">
                  Estipendio semanal para tus gastos personales y diversión
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <AcademicCapIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">📚 Bono Educativo</h3>
                <p className="text-gray-600">
                  Bono especial para estudiar un curso en Estados Unidos
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-xl p-4 mx-auto mb-4">
                  <GlobeAltIcon className="w-full h-full text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🌎 Experiencia Cultural</h3>
                <p className="text-gray-600">
                  Una experiencia cultural que transformará tu vida para siempre
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ⚠️ Requisitos para Aplicar
              </h2>
              <p className="text-xl text-gray-600">
                ¿Cumples con todos los requisitos?
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
                      <p className="text-gray-700">Entre 18 y 26 años</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Experiencia:</span>
                      <p className="text-gray-700">1,000 horas certificadas en cuidado de niños</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Inglés:</span>
                      <p className="text-gray-700">Nivel intermedio/avanzado</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Requisitos Adicionales</h3>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Antecedentes:</span>
                      <p className="text-gray-700">No tener antecedentes penales</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Educación:</span>
                      <p className="text-gray-700">Ser bachiller académico</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-gray-900 font-semibold">Licencia:</span>
                      <p className="text-gray-700">Licencia de conducción con más de 6 meses de vigencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cómo funciona el programa?
              </h2>
              <p className="text-xl text-gray-600">
                Tu experiencia paso a paso
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aplicación y Matching</h3>
                <p className="text-gray-600">
                  Completas tu aplicación y te conectamos con familias anfitrionas 
                  que coincidan con tu perfil y preferencias.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entrenamiento y Visa</h3>
                <p className="text-gray-600">
                  Recibes entrenamiento sobre cuidado infantil y tramitamos 
                  tu visa J-1 para viajar legalmente a Estados Unidos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vive la Experiencia</h3>
                <p className="text-gray-600">
                  Viajas a Estados Unidos, vives con tu familia anfitriona 
                  y disfrutas de una experiencia cultural única.
                </p>
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
                  <span className="text-2xl font-bold text-white">👩‍🎓</span>
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Mi experiencia como Au Pair cambió mi vida completamente. No solo mejoré mi inglés 
                  y conocí una nueva cultura, sino que también creé vínculos familiares que durarán 
                  para siempre. Los niños se convirtieron en mis hermanos menores y la familia 
                  en mi segunda familia."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-gray-900">María Fernanda</p>
                  <p className="text-brand-gold">Au Pair en California, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Lista para tu aventura como Au Pair? 💖
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza tu proceso de aplicación hoy mismo
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <PhoneIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Llámanos</h3>
                <p className="text-brand-gold font-semibold">+57 315 4924917</p>
                <p className="text-gray-600 text-sm">Camilo Manrique - CEO</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <EnvelopeIcon className="w-8 h-8 text-brand-gold mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Escríbenos</h3>
                <p className="text-brand-gold font-semibold">mercadeo@icebga.com</p>
                <p className="text-gray-600 text-sm">Respuesta en menos de 24h</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Comenzar Aplicación
              </Link>
              <Link
                href="https://bit.ly/MercadeoICEbga"
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