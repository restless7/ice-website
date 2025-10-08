import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GlobeAltIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  HeartIcon,
  CameraIcon,
  BookOpenIcon,
  BriefcaseIcon,
  SunIcon,
  BuildingOfficeIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Programas Internacionales | ICE - Instituto Cultural de Educación",
  description: "Explora todos nuestros programas de intercambio cultural, trabajo y estudio en el extranjero. Work & Travel, Au Pair, Idiomas y más.",
};

export default function ProgramasPage() {
  const programs = [
    {
      id: 1,
      title: "Asesoría en Visas",
      description: "Expertos en trámites y asesoría para obtener tu visa de estudiante o trabajo",
      icon: DocumentTextIcon,
      destinations: ["Estados Unidos", "Canadá", "Australia"],
      duration: "Proceso completo",
      price: "Desde 250,000 COP",
      features: ["Revisión de documentos", "Preparación entrevista", "Seguimiento personalizado"],
      href: "/programas/asesoria-visa-turismo-usa"
    },
    {
      id: 2,
      title: "Au Pair USA",
      description: "Vive con una familia anfitriona mientras cuidas niños y aprendes el idioma",
      icon: HeartIcon,
      destinations: ["Estados Unidos"],
      duration: "12-24 meses",
      price: "4,150,000 COP",
      features: ["Familia certificada", "Educación incluida", "Experiencia cultural"],
      href: "/programas/au-pair-usa"
    },
    {
      id: 3,
      title: "Camp Counselor",
      description: "Trabaja como consejero en campamentos de verano para niños y jóvenes",
      icon: SunIcon,
      destinations: ["Estados Unidos"],
      duration: "3-4 meses",
      price: "1,850 USD + 200,000 COP",
      features: ["Visa J-1", "Alojamiento incluido", "Experiencia de liderazgo"],
      href: "/programas/camp-counselor"
    },
    {
      id: 4,
      title: "Escuelas de Idiomas",
      description: "Aprende idiomas en las mejores instituciones educativas internacionales",
      icon: BookOpenIcon,
      destinations: ["Malta", "Australia", "USA", "Canadá"],
      duration: "4-52 semanas",
      price: "Varía por destino",
      features: ["Certificación internacional", "Clases especializadas", "Actividades culturales"],
      href: "/programas/escuela-de-idiomas-usa"
    },
    {
      id: 5,
      title: "Curso de Inglés",
      description: "Nuestro programa exclusivo de inglés con metodología ICE personalizada",
      icon: GlobeAltIcon,
      destinations: ["Colombia", "Virtual"],
      duration: "40-150 horas",
      price: "Desde 880,000 COP",
      features: ["Método ICE", "Profesores nativos", "Certificación propia"],
      href: "/programas/curso-de-ingles"
    },
    {
      id: 6,
      title: "H2B",
      description: "Programa de trabajo temporal en Estados Unidos para empleos estacionales",
      icon: BriefcaseIcon,
      destinations: ["Estados Unidos"],
      duration: "3-6 meses",
      price: "200,000 COP + 680 USD",
      features: ["Visa H2B", "Trabajo legal", "Salario competitivo"],
      href: "/programas/h2b"
    },
    {
      id: 7,
      title: "Intern and Trainee",
      description: "Prácticas profesionales y programas de entrenamiento en el extranjero",
      icon: AcademicCapIcon,
      destinations: ["Estados Unidos", "España"],
      duration: "3-18 meses",
      price: "Desde 1,800 EUR",
      features: ["Experiencia laboral", "Certificación profesional", "Networking internacional"],
      href: "/programas/interntrainee-usa"
    },
    {
      id: 8,
      title: "Summer Camp",
      description: "Campamentos de verano educativos y recreativos en destinos increíbles",
      icon: CameraIcon,
      destinations: ["Estados Unidos", "Canadá"],
      duration: "2-8 semanas",
      price: "Consultar",
      features: ["Actividades deportivas", "Inmersión cultural", "Nuevas amistades"],
      href: "/programas/summer-camp"
    },
    {
      id: 9,
      title: "Canadá - Tu Proyecto de Vida",
      description: "Programa integral para estudiar, trabajar y residir en Canadá",
      icon: BuildingOfficeIcon,
      destinations: ["Canadá"],
      duration: "1-4 años",
      price: "Consultar",
      features: ["Permiso de trabajo", "Pathway a residencia", "Educación de calidad"],
      href: "/programas/canada-tu-proyecto-de-vida"
    },
    {
      id: 10,
      title: "Work and Travel",
      description: "Trabaja y viaja por Estados Unidos durante las vacaciones universitarias",
      icon: ArrowTopRightOnSquareIcon,
      destinations: ["Estados Unidos"],
      duration: "3-4 meses",
      price: "2,100 USD + 200,000 COP",
      features: ["Visa J-1", "Trabajo legal", "Tiempo libre para viajar"],
      href: "/programas/summer-work-and-travel"
    }
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Nuestros <span className="text-brand-gold">Programas</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explora todos nuestros programas de intercambio cultural, trabajo y estudio en el extranjero
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-gold/50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md group"
                >
                  <Link href={program.href} className="block h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 p-2.5 mb-4">
                      <program.icon className="w-full h-full text-brand-gold" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    {/* Program Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Destino:</span>
                        <span className="text-gray-700">{program.destinations.join(", ")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duración:</span>
                        <span className="text-gray-700">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Precio:</span>
                        <span className="text-brand-gold font-semibold">{program.price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {program.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-brand-gold font-medium group-hover:text-brand-orange transition-colors duration-300">
                        <span>Más información</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras el programa perfecto?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestros asesores pueden ayudarte a encontrar la experiencia ideal para ti
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-semibold text-lg rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Contactar Asesor
            </Link>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}