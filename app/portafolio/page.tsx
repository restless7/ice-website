"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { GlobeAltIcon, AcademicCapIcon, BriefcaseIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function IcePortafolioPage() {
  const programs = [
    {
      id: 1,
      title: "Intercambios Académicos",
      description: "Programas de intercambio universitario en prestigiosas instituciones internacionales",
      icon: AcademicCapIcon,
      duration: "1 semestre - 1 año",
      countries: "USA, Canadá, Reino Unido, Australia",
      features: ["Créditos transferibles", "Soporte académico", "Alojamiento incluido", "Orientación cultural"],
      href: "/programas/interntrainee-usa"
    },
    {
      id: 2,
      title: "Work & Travel",
      description: "Programas de trabajo temporal con experiencia cultural en destinos internacionales",
      icon: BriefcaseIcon,
      duration: "3-6 meses",
      countries: "Estados Unidos, Canadá, Europa",
      features: ["Trabajo remunerado", "Visa de trabajo", "Seguro médico", "Red de contactos globales"],
      href: "/programas/summer-work-and-travel"
    },
    {
      id: 3,
      title: "Cursos de Idiomas",
      description: "Inmersión total en el idioma con cursos certificados en escuelas internacionales",
      icon: GlobeAltIcon,
      duration: "2 semanas - 1 año",
      countries: "Reino Unido, Malta, Irlanda, Nueva Zelanda",
      features: ["Certificación oficial", "Familias anfitrionas", "Actividades culturales", "Flexibilidad de fechas"],
      href: "/programas/escuela-de-idiomas-usa"
    },
    {
      id: 4,
      title: "Voluntariado Internacional",
      description: "Experiencias de voluntariado que transforman comunidades y enriquecen perspectivas",
      icon: HeartIcon,
      duration: "2 semanas - 6 meses",
      countries: "Costa Rica, Tanzania, Tailandia, Perú",
      features: ["Impacto social", "Certificado de participación", "Alojamiento local", "Apoyo continuo"],
      href: "/programas/au-pair-usa"
    }
  ];

  const successStories = [
    {
      name: "María González",
      program: "Intercambio Académico - Reino Unido",
      story: "Mi semestre en Londres cambió completamente mi perspectiva profesional. Ahora trabajo en una empresa multinacional gracias a las conexiones que hice.",
      image: "/images/student-1.jpg",
      achievement: "Gerente de Proyectos Internacionales"
    },
    {
      name: "Carlos Ruiz",
      program: "Work & Travel - Estados Unidos",
      story: "El programa me permitió mejorar mi inglés mientras ganaba experiencia laboral. Fue la mejor inversión en mi futuro profesional.",
      image: "/images/student-2.jpg",
      achievement: "Emprendedor Digital"
    },
    {
      name: "Ana Méndez",
      program: "Voluntariado - Costa Rica",
      story: "Ayudar a comunidades locales mientras exploraba un nuevo país me dio una perspectiva única sobre la responsabilidad social.",
      image: "/images/student-3.jpg",
      achievement: "Directora de ONG"
    }
  ];

  const partnerships = [
    {
      name: "University of Oxford",
      country: "Reino Unido",
      type: "Universidad Partner",
      programs: ["Intercambios Académicos", "Cursos de Verano"]
    },
    {
      name: "Boston University",
      country: "Estados Unidos",
      type: "Universidad Partner",
      programs: ["Intercambios", "Work & Travel"]
    },
    {
      name: "Education First",
      country: "Global",
      type: "Socio Educativo",
      programs: ["Cursos de Idiomas", "Preparación Académica"]
    },
    {
      name: "AIESEC International",
      country: "Global", 
      type: "Organización Juvenil",
      programs: ["Voluntariado", "Prácticas Internacionales"]
    },
    {
      name: "Work and Travel Canada",
      country: "Canadá",
      type: "Agencia Especializada",
      programs: ["Work & Travel", "Programas de Temporada"]
    },
    {
      name: "International House",
      country: "Malta",
      type: "Escuela de Idiomas",
      programs: ["Cursos de Inglés", "Preparación IELTS"]
    }
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-brand-dark via-brand to-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Nuestro <span className="text-brand-gold">Portafolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Descubre la diversidad de programas y experiencias que transforman vidas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand/50 to-brand-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestros <span className="text-brand-gold">Programas</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experiencias diseñadas para cada objetivo y etapa de tu vida
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <Link href={program.href} className="block">
                    <div className="flex items-center mb-6">
                      <div className="bg-brand-gold/20 p-3 rounded-lg mr-4 group-hover:bg-brand-gold/30 transition-all duration-300">
                        <program.icon className="w-8 h-8 text-brand-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300">{program.title}</h3>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{program.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-brand-gold font-medium">Duración:</span>
                        <span className="text-white/80">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-gold font-medium">Destinos:</span>
                        <span className="text-white/80">{program.countries}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-brand-gold font-medium mb-3">Características incluidas:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-brand-gold rounded-full mr-2 group-hover:scale-110 transition-transform duration-300"></div>
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-brand-gold/20">
                      <div className="flex items-center text-brand-gold font-medium group-hover:text-brand-orange transition-colors duration-300">
                        <span>Ver detalles del programa</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Historias de <span className="text-brand-gold">Éxito</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Conoce a algunos de nuestros alumni y cómo ICE transformó sus vidas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-brand-gold/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-brand-dark">{story.name.charAt(0)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{story.name}</h3>
                  <p className="text-brand-gold text-sm mb-4 text-center">{story.program}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">"{story.story}"</p>
                  <div className="text-center">
                    <span className="inline-block bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-sm">
                      {story.achievement}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="relative py-20 bg-gradient-to-r from-brand-dark/50 to-brand/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestras <span className="text-brand-gold">Alianzas</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Colaboramos con las mejores instituciones y organizaciones del mundo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-brand-gold/20 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-brand-gold text-sm">{partner.country}</span>
                    <span className="bg-brand-gold/20 text-brand-gold px-2 py-1 rounded text-xs">
                      {partner.type}
                    </span>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-2">Programas:</p>
                    <div className="flex flex-wrap gap-1">
                      {partner.programs.map((program, pIndex) => (
                        <span key={pIndex} className="text-white/80 text-xs bg-white/10 px-2 py-1 rounded">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-brand-gold/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ¿Listo para tu <span className="text-brand-gold">Aventura Internacional?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Explora nuestros programas y encuentra la experiencia perfecta para ti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-brand-gold to-brand-orange text-brand-dark font-semibold py-4 px-8 rounded-full hover:from-brand-orange hover:to-brand-gold transition-all duration-300"
                >
                  Consulta Gratuita
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-brand-gold text-brand-gold font-semibold py-4 px-8 rounded-full hover:bg-brand-gold/10 transition-all duration-300"
                >
                  Descargar Catálogo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
