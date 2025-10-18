"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { StarIcon, CameraIcon, HeartIcon, MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function IceExperiencesPage() {
  const featuredExperiences = [
    {
      id: 1,
      title: "Summer Work & Travel en Florida",
      student: "Camila Torres",
      program: "Work & Travel USA",
      country: "Estados Unidos",
      duration: "4 meses",
      rating: 5,
      mainImage: "/images/work-travel-florida.jpg",
      story: "Mi experiencia trabajando en un parque temático en Orlando fue increíble. No solo mejoré mi inglés drásticamente, sino que también ahorré dinero, conocí personas de todo el mundo y viajé por varios estados. ICE me guió en todo el proceso desde Colombia.",
      highlights: ["Trabajo en parque temático", "Mejora del inglés", "Ahorro de dinero", "Viajes por Estados Unidos"]
    },
    {
      id: 2,
      title: "Au Pair en Nueva York",
      student: "María González",
      program: "Au Pair USA",
      country: "Estados Unidos",
      duration: "12 meses",
      rating: 5,
      mainImage: "/images/aupair-newyork.jpg",
      story: "Vivir con una familia americana en Nueva York cambió mi vida completamente. Cuidé dos niños maravillosos, mejoré mi inglés a nivel nativo, estudié en una universidad y exploré la ciudad que nunca duerme. ICE me preparó perfectamente para esta aventura.",
      highlights: ["Inmersión cultural total", "Inglés nativo", "Estudios universitarios", "Experiencia en NYC"]
    },
    {
      id: 3,
      title: "Escuela de Idiomas en Malta",
      student: "Andrés Silva",
      program: "English Path Malta",
      country: "Malta",
      duration: "6 meses",
      rating: 5,
      mainImage: "/images/malta-school.jpg",
      story: "Malta fue la elección perfecta para estudiar inglés. Después de 12 semanas pude trabajar legalmente, viajé por Europa los fines de semana, y la isla mediterránea me ofreció una calidad de vida increíble. ICE me asesoró desde el primer día.",
      highlights: ["Permiso de trabajo", "Viajes por Europa", "Vida mediterránea", "Inglés certificado"]
    }
  ];

  const testimonials = [
    {
      name: "Carlos Méndez",
      program: "Summer Work & Travel USA",
      rating: 5,
      text: "ICE me acompañó en cada paso del proceso. Trabajé en un resort en Virginia Beach, mejoré mi inglés, ahorré dinero y viajé por 8 estados. Fue la mejor decisión de mi vida universitaria.",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Ana Rodríguez", 
      program: "Camp Counselor USA",
      rating: 5,
      text: "Ser consejera de campamento en Colorado me cambió para siempre. Desarrollé habilidades de liderazgo increíbles y creé lazos con niños americanos que aún conservo. ICE hizo posible este sueño.",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Diego Herrera",
      program: "Intern & Trainee USA",
      rating: 5,
      text: "Mi internship en ingeniería en Texas me dio experiencia laboral internacional invaluable. ICE me conectó con la empresa perfecta para mi perfil profesional.",
      image: "/images/testimonial-3.jpg"
    },
    {
      name: "Sofía Restrepo",
      program: "ICE English Colombia",
      rating: 5,
      text: "Gracias a ICE English mejoré mi nivel de inglés lo suficiente para aplicar a programas internacionales. Los profesores son nativos y la metodología realmente funciona.",
      image: "/images/testimonial-4.jpg"
    }
  ];

  const photoGallery = [
    {
      id: 1,
      title: "Work & Travel en la Costa Este",
      location: "Ocean City, Maryland",
      image: "/images/gallery-1.jpg"
    },
    {
      id: 2,
      title: "Au Pair Host Family",
      location: "Chicago, Illinois",
      image: "/images/gallery-2.jpg"
    },
    {
      id: 3,
      title: "English Path Malta",
      location: "Sliema, Malta",
      image: "/images/gallery-3.jpg"
    },
    {
      id: 4,
      title: "Camp Counselor Adventures",
      location: "Colorado Mountains", 
      image: "/images/gallery-4.jpg"
    },
    {
      id: 5,
      title: "Proyecto Canada",
      location: "Vancouver, BC",
      image: "/images/gallery-5.jpg"
    },
    {
      id: 6,
      title: "ICE English Graduation",
      location: "Bucaramanga, Colombia",
      image: "/images/gallery-6.jpg"
    }
  ];

  const stats = [
    {
      number: "3,000+",
      label: "ICExperiencias Exitosas",
      icon: HeartIcon
    },
    {
      number: "98%",
      label: "Tasa de Satisfacción",
      icon: StarIcon
    },
    {
      number: "4",
      label: "Países de Operación",
      icon: MapPinIcon
    },
    {
      number: "10+",
      label: "Años Transformando Vidas",
      icon: CalendarDaysIcon
    }
  ];

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6">
                ICE<span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                Vive las experiencias que transforman vidas y abren puertas al mundo
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 border border-brand-orange/30 cursor-pointer hover:bg-white/90 transition-all duration-300 shadow-lg"
              >
                <PlayIcon className="w-6 h-6 text-brand-orange mr-2" />
                <span className="text-brand-dark font-medium">Ver Video Testimonial</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-100/80 to-amber-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-brand-orange/20 text-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="bg-brand-orange/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-dark mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Experiencias <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">Destacadas</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                  className={`bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-brand-orange/20 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:flex lg:items-center lg:gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                      <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-brand-orange/20 to-brand-gold/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <CameraIcon className="w-16 h-16 text-brand-orange/60" />
                        </div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-brand-dark text-sm">{experience.country}</span>
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
                        <span className="bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-sm mr-3">
                          {experience.program}
                        </span>
                        <span className="text-gray-600 text-sm">{experience.duration}</span>
                      </div>

                      <h3 className="text-3xl font-bold text-brand-dark mb-2">{experience.title}</h3>
                      <p className="text-brand-orange font-medium mb-4">por {experience.student}</p>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        "{experience.story}"
                      </p>

                      <div>
                        <h4 className="text-brand-dark font-medium mb-3">Momentos destacados:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {experience.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-brand-orange rounded-full mr-2"></div>
                              <span className="text-sm text-gray-600">{highlight}</span>
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
        <section className="relative py-20 bg-gradient-to-r from-amber-100/80 to-orange-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Lo que dicen nuestros <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">Estudiantes</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                  className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-brand-orange/20 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-gold rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-white">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-brand-dark font-bold">{testimonial.name}</h3>
                      <p className="text-brand-orange text-sm">{testimonial.program}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                Galería de <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">Momentos</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-gold/20 aspect-square hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CameraIcon className="w-12 h-12 text-brand-orange/60 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-brand-orange text-sm">{photo.location}</p>
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
                className="bg-gradient-to-r from-brand-orange to-brand-gold text-white font-semibold py-3 px-8 rounded-full hover:from-brand-gold hover:to-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ver Más Fotos
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 bg-gradient-to-r from-orange-200/80 to-amber-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-12 border border-brand-orange/20 shadow-xl"
            >
              <h2 className="text-4xl font-bold text-brand-dark mb-6">
                ¿Listo para crear tu propia <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">ICExperience?</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Únete a miles de estudiantes que ya transformaron sus vidas con ICE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-brand-orange to-brand-gold text-white font-semibold py-4 px-8 rounded-full hover:from-brand-gold hover:to-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Inicia tu Aventura
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-brand-orange text-brand-orange font-semibold py-4 px-8 rounded-full hover:bg-brand-orange/10 transition-all duration-300"
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
