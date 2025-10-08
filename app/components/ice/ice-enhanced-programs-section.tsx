"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  DocumentCheckIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  StarIcon,
  BriefcaseIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const programs = [
  {
    id: "work-travel",
    title: "Work and Travel USA",
    description: "Trabaja, viaja y vive una experiencia de inmersión cultural única durante la temporada de verano en Estados Unidos.",
    icon: <StarIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/group-people-with-hard-hats-flag-background.jpg",
    href: "/programas/summer-work-and-travel",
    duration: "3-4 meses",
    age: "18-26 años",
    country: "🇺🇸 USA"
  },
  {
    id: "au-pair",
    title: "Au Pair USA",
    description: "Sumérgete en la cultura estadounidense mientras trabajas y compartes con una familia anfitriona y sus hijos.",
    icon: <HeartIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/caucasian-woman-looking-proud-her-daughter-homeschooling-doing-some-painting.jpg",
    href: "/programas/au-pair-usa",
    duration: "12-24 meses",
    age: "18-26 años",
    country: "🇺🇸 USA"
  },
  {
    id: "camp-counselor",
    title: "Camp Counselor USA",
    description: "Sé consejero de un campamento de verano y vive una experiencia épica llena de diversión, aprendizaje y amistad.",
    icon: <UserGroupIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/teacher-enlightening-students-outdoor-class.jpg",
    href: "/programas/camp-counselor",
    duration: "3-4 meses",
    age: "18-35 años",
    country: "🇺🇸 USA"
  },
  {
    id: "intern-trainee",
    title: "Intern and Trainee USA",
    description: "Realiza tus prácticas universitarias y trabaja en empresas estadounidenses con experiencia profesional real.",
    icon: <BriefcaseIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/pointing-temple-with-finger-thinking-focused-task.jpg",
    href: "/programas/interntrainee-usa",
    duration: "3-18 meses",
    age: "18-35 años",
    country: "🇺🇸 USA"
  },
  {
    id: "idiomas-extranjero",
    title: "Escuelas de Idiomas",
    description: "Estudia inglés o francés en USA, Canadá, Irlanda, Malta, Dubai, Inglaterra o Escocia con certificación internacional.",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/teacher-english-asks-student-white-class-2-girls-student-answers-teacher-working-group.jpg",
    href: "/programas/escuela-de-idiomas-usa",
    duration: "4-52 semanas",
    age: "+16 años",
    country: "🌍 Mundial"
  },
  {
    id: "canada-vida",
    title: "Canadá - Tu Proyecto de Vida",
    description: "Estudia en colleges públicos y privados con permiso de trabajo y opciones de migrar a Canadá permanentemente.",
    icon: <GlobeAltIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/woman-plaid-shirt-hat-holds-canadian-flag-front-mountain-lake.jpg",
    href: "/programas/canada-tu-proyecto-de-vida",
    duration: "1-4 años",
    age: "+18 años",
    country: "🇨🇦 Canadá"
  },
  {
    id: "asesoria-visas",
    title: "Asesoría de Visas",
    description: "Te ayudamos con tus trámites de visas americanas y canadienses con asesoría especializada y seguimiento completo.",
    icon: <DocumentCheckIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/american-visa-document (1).jpg",
    href: "/programas/asesoria-visa-turismo-usa",
    duration: "Proceso completo",
    age: "Todas las edades",
    country: "🇺🇸🇨🇦 USA/Canadá"
  },
  {
    id: "ice-english",
    title: "ICEnglish",
    description: "Nuestro programa exclusivo de inglés con metodología ICE personalizada, profesores nativos y certificación propia.",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/teacher-english-asks-student-white-class-2-girls-student-answers-teacher-working-group.jpg",
    href: "/programas/curso-de-ingles",
    duration: "Flexible",
    age: "Todas las edades",
    country: "🇨🇴 Colombia"
  },
  {
    id: "h2b",
    title: "H2B USA",
    description: "Programa de trabajo temporal en Estados Unidos para empleos estacionales con visa H2B y salario competitivo.",
    icon: <BriefcaseIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/group-people-with-hard-hats-flag-background.jpg",
    href: "/programas/h2b",
    duration: "4-10 meses",
    age: "18-45 años",
    country: "🇺🇸 USA"
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    description: "Campamentos de verano educativos y recreativos en destinos increíbles con actividades deportivas y culturales.",
    icon: <UserGroupIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/teenager-people-national-flags-board.jpg",
    href: "/programas/summer-camp",
    duration: "2-8 semanas",
    age: "8-18 años",
    country: "🌍 Mundial"
  },
  {
    id: "rumbo-colombia",
    title: "Rumbo Colombia",
    description: "Atrae estudiantes y profesionales internacionales para estudiar en Colombia con inmersión cultural completa.",
    icon: <GlobeAltIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/tourist-with-hat-front.jpg",
    href: "/programas",
    duration: "Semestre/Año",
    age: "18+ años",
    country: "🇨🇴 Colombia"
  },
  {
    id: "seguros",
    title: "Seguros Internacionales",
    description: "Asistencia médica, odontológica, pérdida de equipaje, robo de documentos y cobertura completa para tu viaje.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    image: "/images/imagenes programas/health-care-medical-science-with-digital-technology-doctor-white-coat-innovation-treatment-medicine-medical-research-hospital-elements-this-image-furnished-by-nasa.jpg",
    href: "/contacto",
    duration: "Por estadía",
    age: "Todas las edades",
    country: "🌍 Mundial"
  }
];

export function IceEnhancedProgramsSection() {
  return (
    <section className="relative py-20 bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}
          >
            ¿A cuál programa de intercambio 
            <br />
            <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">
              te gustaría aplicar?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Elige tu ruta para explorar el mundo
          </motion.p>
        </div>

        {/* Enhanced Programs Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10"
        >
          {programs.map((program, index) => (
            <ProgramFeature key={program.id} program={program} index={index} />
          ))}
        </motion.div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/programas">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
              <span>Ver todos los programas</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const ProgramFeature = ({
  program,
  index,
}: {
  program: typeof programs[0];
  index: number;
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={program.href}>
      <div
        className={cn(
          "flex flex-col lg:border-r py-10 relative group/feature border-gray-200 hover:bg-white transition-all duration-300 cursor-pointer h-full",
          (index % 3 === 0) && "lg:border-l border-gray-200", // First column in 3-col layout
          (index % 4 === 0) && "xl:border-l border-gray-200", // First column in 4-col layout
          index < 8 && "lg:border-b border-gray-200" // Top 2 rows in 3-col, top row in 4-col
        )}
      >
        {/* Hover Background Effects */}
        {index < 8 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-brand-gold/5 to-transparent pointer-events-none" />
        )}
        {index >= 8 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />
        )}

        {/* Program Image */}
        <div className="mb-4 relative z-10 px-6 h-32 overflow-hidden rounded-lg mx-4">
          {!imageError ? (
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-300 group-hover/feature:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 flex items-center justify-center rounded-lg">
              <div className="text-brand-gold">
                {program.icon}
              </div>
            </div>
          )}
          
          {/* Country Badge */}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
            {program.country}
          </div>
        </div>

        {/* Program Icon */}
        <div className="mb-4 relative z-10 px-6 text-brand-gold">
          {program.icon}
        </div>

        {/* Program Title */}
        <div className="text-xl font-bold mb-3 relative z-10 px-6">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-brand-gold transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900 group-hover/feature:text-brand-gold">
            {program.title}
          </span>
        </div>

        {/* Program Description */}
        <p className="text-sm text-gray-600 max-w-xs relative z-10 px-6 mb-4 flex-1">
          {program.description}
        </p>

        {/* Program Details */}
        <div className="relative z-10 px-6 space-y-2">
          <div className="flex items-center text-xs text-gray-500">
            <MapPinIcon className="w-3 h-3 mr-1 text-brand-gold" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <UserGroupIcon className="w-3 h-3 mr-1 text-brand-gold" />
            <span>{program.age}</span>
          </div>
        </div>

        {/* CTA Arrow */}
        <div className="relative z-10 px-6 mt-4 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-200">
          <div className="flex items-center text-brand-gold text-sm font-semibold">
            <span>Más información</span>
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/feature:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
};