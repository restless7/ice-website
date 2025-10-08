"use client";

import { motion } from "framer-motion";
import { 
  GlobeAltIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  HeartIcon,
  CameraIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HomeIcon,
  ShieldCheckIcon,
  SunIcon,
  BuildingOfficeIcon,
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function IceProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Asesoría en visas",
      description: "Expertos en trámites y asesoría para obtener tu visa de estudiante o trabajo",
      icon: DocumentTextIcon,
      destinations: ["Estados Unidos", "Canadá", "Australia"],
      duration: "Proceso completo",
      features: ["Revisión de documentos", "Preparación entrevista", "Seguimiento personalizado"],
      color: "from-blue-600 to-indigo-600",
      href: "/programas/asesoria-visa-turismo-usa"
    },
    {
      id: 2,
      title: "Au Pair",
      description: "Vive con una familia anfitriona mientras cuidas niños y aprendes el idioma",
      icon: HeartIcon,
      destinations: ["Estados Unidos", "Europa", "Australia"],
      duration: "12-24 meses",
      features: ["Familia certificada", "Educación incluida", "Experiencia cultural"],
      color: "from-pink-500 to-rose-500",
      href: "/programas/au-pair-usa"
    },
    {
      id: 3,
      title: "Camp Counselor",
      description: "Trabaja como consejero en campamentos de verano para niños y jóvenes",
      icon: SunIcon,
      destinations: ["Estados Unidos", "Canadá"],
      duration: "3-4 meses",
      features: ["Visa J-1", "Alojamiento incluido", "Experiencia de liderazgo"],
      color: "from-yellow-500 to-orange-500",
      href: "/programas/camp-counselor"
    },
    {
      id: 4,
      title: "Escuelas de idiomas",
      description: "Aprende idiomas en las mejores instituciones educativas internacionales",
      icon: BookOpenIcon,
      destinations: ["Malta", "Australia", "USA", "Canadá"],
      duration: "4-52 semanas",
      features: ["Certificación internacional", "Clases especializadas", "Actividades culturales"],
      color: "from-green-500 to-emerald-600",
      href: "/programas/escuela-de-idiomas-usa"
    },
    {
      id: 5,
      title: "ICEnglish",
      description: "Nuestro programa exclusivo de inglés con metodología ICE personalizada",
      icon: GlobeAltIcon,
      destinations: ["Colombia", "Virtual", "Presencial"],
      duration: "Flexible",
      features: ["Método ICE", "Profesores nativos", "Certificación propia"],
      color: "from-blue-500 to-cyan-500",
      href: "/programas/curso-de-ingles"
    },
    {
      id: 6,
      title: "H2B",
      description: "Programa de trabajo temporal en Estados Unidos para empleos estacionales",
      icon: BriefcaseIcon,
      destinations: ["Estados Unidos"],
      duration: "4-10 meses",
      features: ["Visa H2B", "Trabajo legal", "Salario competitivo"],
      color: "from-purple-600 to-violet-600",
      href: "/programas/h2b"
    },
    {
      id: 7,
      title: "Intern and Trainee",
      description: "Prácticas profesionales y programas de entrenamiento en el extranjero",
      icon: AcademicCapIcon,
      destinations: ["Estados Unidos", "España"],
      duration: "3-18 meses",
      features: ["Experiencia laboral", "Certificación profesional", "Networking internacional"],
      color: "from-indigo-500 to-purple-600",
      href: "/programas/interntrainee-usa"
    },
    {
      id: 8,
      title: "Rumbo Colombia",
      description: "Atrae estudiantes y profesionales internacionales para estudiar en Colombia",
      icon: HomeIcon,
      destinations: ["Colombia"],
      duration: "Semestre/Año",
      features: ["Inmersión cultural", "Universidades aliadas", "Experiencia latina"],
      color: "from-yellow-600 to-red-500",
      href: "/programas"
    },
    {
      id: 9,
      title: "Seguros Médicos Internacionales",
      description: "Protección médica completa para tu estadía en el extranjero",
      icon: ShieldCheckIcon,
      destinations: ["Mundial"],
      duration: "Por estadía",
      features: ["Cobertura completa", "Asistencia 24/7", "Red internacional"],
      color: "from-emerald-600 to-teal-600",
      href: "/contacto"
    },
    {
      id: 10,
      title: "Summer Camp",
      description: "Campamentos de verano educativos y recreativos en destinos increíbles",
      icon: CameraIcon,
      destinations: ["Estados Unidos", "Canadá", "Reino Unido"],
      duration: "2-8 semanas",
      features: ["Actividades deportivas", "Inmersión cultural", "Nuevas amistades"],
      color: "from-orange-500 to-amber-500",
      href: "/programas/summer-camp"
    },
    {
      id: 11,
      title: "Study, Work and Live in Canada",
      description: "Programa integral para estudiar, trabajar y residir en Canadá",
      icon: BuildingOfficeIcon,
      destinations: ["Canadá"],
      duration: "1-4 años",
      features: ["Permiso de trabajo", "Pathway a residencia", "Educación de calidad"],
      color: "from-red-600 to-pink-600",
      href: "/programas/canada-tu-proyecto-de-vida"
    },
    {
      id: 12,
      title: "Work and Travel",
      description: "Trabaja y viaja por Estados Unidos durante las vacaciones universitarias",
      icon: ArrowTopRightOnSquareIcon,
      destinations: ["Estados Unidos"],
      duration: "3-4 meses",
      features: ["Visa J-1", "Trabajo legal", "Tiempo libre para viajar"],
      color: "from-cyan-500 to-blue-600",
      href: "/programas/summer-work-and-travel"
    }
  ];

  return (
    <section className="relative py-24 bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-6">
            <p className="text-brand-orange text-lg font-semibold mb-2">¿A dónde te llevamos?</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Elige tu
              <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent ml-4">
                ruta
              </span>
              <br />para explorar el mundo
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las opciones que ICE tiene para ti. Desde programas de trabajo y estudio hasta asesoría especializada para hacer realidad tus sueños internacionales.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={program.href} className="block h-full">
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-gold/50 transition-all duration-300 hover:scale-105 h-full shadow-sm hover:shadow-md">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 p-2.5 mb-4">
                    <program.icon className="w-full h-full text-brand-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{program.description}</p>

                  {/* Program Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <MapPinIcon className="w-4 h-4 text-brand-gold" />
                      <span className="text-xs truncate">{program.destinations.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <ClockIcon className="w-4 h-4 text-brand-gold" />
                      <span className="text-xs">{program.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {program.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <StarIcon className="w-3 h-3 text-brand-gold fill-current flex-shrink-0" />
                        <span className="text-xs text-gray-700 truncate">{feature}</span>
                      </div>
                    ))}
                    {program.features.length > 2 && (
                      <div className="text-xs text-brand-gold">+{program.features.length - 2} más</div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="w-full py-2 px-4 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-semibold text-sm rounded-lg hover:bg-brand-gold/20 transform hover:scale-105 transition-all duration-300 text-center">
                    Más Información
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Link 
            href="/programas"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-brand-dark font-semibold text-lg rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Ver todos los programas
            <ArrowTopRightOnSquareIcon className="ml-3 w-6 h-6" />
          </Link>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 border border-brand-gold/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-brand-gold mb-2">2000+</div>
              <p className="text-gray-600 text-sm">Estudiantes atendidos</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-brand-orange mb-2">12</div>
              <p className="text-gray-600 text-sm">Programas disponibles</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-light/10 to-brand-light/5 border border-brand-light/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-brand-light mb-2">95%</div>
              <p className="text-gray-600 text-sm">Tasa de éxito</p>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand/10 to-brand/5 border border-brand/20 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-brand mb-2">20+</div>
              <p className="text-gray-600 text-sm">Años de experiencia</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
