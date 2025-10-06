"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { StarIcon, CameraIcon, HeartIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function IceExperiencesPage() {
  const featuredExperiences = [
    {
      id: 1,
      title: "Semestre en Oxford",
      student: "Isabella Martínez",
      program: "Intercambio Académico",
      country: "Reino Unido",
      duration: "6 meses",
      rating: 5,
      mainImage: "/images/oxford-experience.jpg",
      story: "Mi experiencia en Oxford superó todas mis expectativas. No solo mejoré mi inglés académico, sino que también desarrollé una perspectiva global única.",
      highlights: ["Clases en aulas históricas", "Red de contactos internacionales", "Investigación independiente", "Vida en college tradicional"]
    },
    {
      id: 2,
      title: "Work & Travel California",
      student: "Diego Herrera",
      program: "Work & Travel",
      country: "Estados Unidos",
      duration: "4 meses",
      rating: 5,
      mainImage: "/images/california-experience.jpg",
      story: "Trabajar en un resort en California me permitió mejorar mi inglés mientras ahorraba dinero y conocía personas de todo el mundo.",
      highlights: ["Trabajo en resort de playa", "Independencia financiera", "Amistades internacionales", "Viajes por la costa oeste"]
    },
    {
      id: 3,
      title: "Voluntariado en Costa Rica",
      student: "Sofía Restrepo",
      program: "Voluntariado Internacional",
      country: "Costa Rica",
      duration: "2 meses",
      rating: 5,
      mainImage: "/images/costarica-experience.jpg",
      story: "Ayudar en la conservación de tortugas marinas fue transformador. Aprendí sobre sustentabilidad y desarrollé un profundo respeto por la naturaleza.",
      highlights: ["Conservación marina", "Comunidad local", "Idioma español", "Conciencia ambiental"]
    }
  ];

  const testimonials = [
    {
      name: "Camila Torres",
      program: "Curso de Inglés - Malta",
      rating: 5,
      text: "La experiencia fue increíble. Los profesores eran nativos y muy profesionales. Malta es un destino perfecto para estudiar inglés.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Andrés Silva", 
      program: "Intercambio - Australia",
      rating: 5,
      text: "Australia cambió mi vida. La calidad educativa es excepcional y la cultura tan acogedora. Definitivamente recomiendo ICE.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Valentina López",
      program: "Work & Travel - Canadá",
      rating: 5,
      text: "Trabajar en las Montañas Rocosas fue el mejor verano de mi vida. La organización de ICE fue impecable.",
      image: "/images/testimonial-3.jpg"
    },
    {
      name: "Mateo Jiménez",
      program: "Voluntariado - Tanzania",
      rating: 5,
      text: "Enseñar inglés en Tanzania me dio una perspectiva completamente nueva. Es una experiencia que llevaré para siempre.",
      image: "/images/testimonial-4.jpg"
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: "Graduación en Londres",
      location: "University College London",
      image: "/images/gallery-1.jpg"
    },
    {
      id: 2,
      title: "Aventura en Nueva Zelanda",
      location: "Rotorua, Nueva Zelanda",
      image: "/images/gallery-2.jpg"
    },
    {
      id: 3,
      title: "Familia anfitriona en Irlanda",
      location: "Dublin, Irlanda",
      image: "/images/gallery-3.jpg"
    },
    {
      id: 4,
      title: "Proyecto comunitario",
      location: "San José, Costa Rica", 
      image: "/images/gallery-4.jpg"
    },
    {
      id: 5,
      title: "Sunset en California",
      location: "San Diego, California",
      image: "/images/gallery-5.jpg"
    },
    {
      id: 6,
      title: "Aventura académica",
      location: "Sydney, Australia",
      image: "/images/gallery-6.jpg"
    }
  ];

  const stats = [
    {
      number: "2,500+",
      label: "Estudiantes Satisfechos",
      icon: HeartIcon
    },
    {
      number: "95%",
      label: "Tasa de Satisfacción",
      icon: StarIcon
    },
    {
      number: "25+",
      label: "Países de Destino",
      icon: MapPinIcon
    },
    {
      number: "15+",
      label: "Años de Experiencia",
      icon: CalendarDaysIcon
    }
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
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
                ICE<span className="text-lime-400">Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
                Vive las experiencias que transforman vidas y abren puertas al mundo
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-lime-400/30 cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <PlayIcon className="w-6 h-6 text-lime-400 mr-2" />
                <span className="text-white font-medium">Ver Video Testimonial</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-lime-400/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-lime-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Experiences */}
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
                Experiencias <span className="text-lime-400">Destacadas</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Descubre historias reales de estudiantes que vivieron aventuras transformadoras
              </p>
            </motion.div>

            <div className="space-y-16">
              {featuredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 hover:bg-white/10 transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:flex lg:items-center lg:gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                      <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-lime-400/20 to-green-500/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CameraIcon className="w-16 h-16 text-lime-400/60" />
                        </div>
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm">{experience.country}</span>
                        </div>
                        <div className="absolute top-4 right-4 flex">
                          {[...Array(experience.rating)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center mb-4">
                        <span className="bg-lime-400/20 text-lime-400 px-3 py-1 rounded-full text-sm mr-3">
                          {experience.program}
                        </span>
                        <span className="text-white/60 text-sm">{experience.duration}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-2">{experience.title}</h3>
                      <p className="text-lime-400 font-medium mb-4">por {experience.student}</p>
                      
                      <p className="text-lg text-white/80 leading-relaxed mb-6">
                        "{experience.story}"
                      </p>

                      <div>
                        <h4 className="text-white font-medium mb-3">Momentos destacados:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {experience.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-lime-400 rounded-full mr-2"></div>
                              <span className="text-sm text-white/80">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lo que dicen nuestros <span className="text-lime-400">Estudiantes</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Testimonios auténticos de quienes vivieron la experiencia ICE
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-black">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{testimonial.name}</h3>
                      <p className="text-lime-400 text-sm">{testimonial.program}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 leading-relaxed">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
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
                Galería de <span className="text-lime-400">Momentos</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Momentos inolvidables capturados alrededor del mundo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoGallery.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-lime-400/20 to-green-500/20 aspect-square hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CameraIcon className="w-12 h-12 text-lime-400/60 group-hover:text-lime-400 transition-colors duration-300" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-lime-400 text-sm">{photo.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
              >
                Ver Más Fotos
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-lime-400/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                ¿Listo para crear tu propia <span className="text-lime-400">ICExperience?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Únete a miles de estudiantes que ya transformaron sus vidas con ICE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-4 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
                >
                  Inicia tu Aventura
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-lime-400 text-lime-400 font-semibold py-4 px-8 rounded-full hover:bg-lime-400/10 transition-all duration-300"
                >
                  Habla con un Alumni
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
