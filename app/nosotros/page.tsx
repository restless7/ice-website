"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IceNosotrosPage() {
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
              <div className="mb-6">
                <p className="text-red-400 text-lg font-semibold mb-2">¿Quiénes somos?</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Te acompañamos a
                  <span className="block">transformar tu</span>
                  <span className="text-lime-400">futuro</span> y conectar
                  <span className="block">con el mundo.</span>
                </h1>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
                  <p className="text-lg text-white/90 leading-relaxed">
                    Somos una empresa <span className="text-lime-400 font-semibold">bumanguesa</span>, con operaciones en 
                    <span className="text-lime-400 font-semibold"> Colombia, Costa Rica, Ecuador y Perú</span>. 
                    Nos dedicamos a promover experiencias de vida en el exterior, que permitan explorar diferentes 
                    culturas, idiomas y sistemas educativos, a través de un amplio portafolio de servicios y 
                    programas de intercambio enriquecedores y de alta calidad.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
                  <p className="text-lg text-white/90 leading-relaxed">
                    Para nosotros, <span className="text-lime-400 font-semibold">la experiencia es lo más importante</span>, 
                    por lo tanto, estamos enfocados a ofrecer el mejor servicio al cliente del mercado, 
                    <span className="text-lime-400 font-semibold"> acompañando a nuestros clientes desde la elección 
                    del programa hasta la culminación del mismo</span>.
                  </p>
                </div>
              </motion.div>

              {/* Real ICE Images */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 text-center">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-4 relative bg-gray-100">
                    <Image 
                      src="/images/NOSOTROS/equipo-ice-eventos-internacionales.png" 
                      alt="Equipo ICE en eventos internacionales"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white/70 text-sm">Equipo ICE en eventos internacionales</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 text-center">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative bg-gray-100">
                    <Image 
                      src="/images/NOSOTROS/celebrando-exitos-estudiantes.png" 
                      alt="Celebrando éxitos con nuestros estudiantes"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white/70 text-sm">Celebrando éxitos con nuestros estudiantes</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Experience & Locations Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-red-400 text-lg font-semibold mb-2">¿Dónde estamos?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestras <span className="text-lime-400">Sedes</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20"
              >
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  A lo largo de <span className="text-lime-400 font-semibold">esta década de operación</span>, 
                  hemos perfeccionado nuestros procesos para garantizar una experiencia inolvidable y segura 
                  para todos nuestros usuarios. Este enfoque nos ha permitido expandirnos a nuevos mercados, 
                  brindando a más personas la oportunidad de vivir una aventura internacional, siempre bajo 
                  la guía de <span className="text-lime-400 font-semibold">profesionales altamente capacitados</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
                  <h3 className="text-2xl font-bold text-lime-400 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🇨🇴</span>
                    Sede Principal
                  </h3>
                  <div className="mb-6 rounded-xl overflow-hidden relative h-48 bg-gray-100">
                    <Image 
                      src="/images/NOSOTROS/sede-principal-1.png" 
                      alt="Sede principal ICE en Bucaramanga"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Nuestra <span className="text-lime-400 font-semibold">sede principal se encuentra en Bucaramanga, Colombia</span>, 
                    desde donde gestionamos todos los procesos para aspirantes de estos cuatro países.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
                  <h3 className="text-2xl font-bold text-lime-400 mb-6 flex items-center">
                    <span className="text-3xl mr-3">🌍</span>
                    Operaciones
                  </h3>
                  <div className="mb-6 rounded-xl overflow-hidden relative h-48 bg-gray-100">
                    <Image 
                      src="/images/NOSOTROS/sede-principal-2.png" 
                      alt="Oficinas ICE - Operaciones internacionales"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Actualmente, contamos con operaciones en <span className="text-lime-400 font-semibold">Colombia, Costa Rica, Ecuador y Perú</span>.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-lime-400/10 to-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/30"
              >
                <h3 className="text-2xl font-bold text-lime-400 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🇨🇷</span>
                  Expansión
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Además, estamos <span className="text-lime-400 font-semibold">en proceso de abrir nuevas oficinas en Costa Rica</span>, 
                  con el objetivo de acercarnos aún más a nuestros clientes en la región.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Nuestros <span className="text-lime-400">Valores</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Servicio al Cliente",
                  description: "Ofrecemos el mejor servicio al cliente del mercado, con atención personalizada.",
                  icon: "🤝"
                },
                {
                  title: "Experiencias Seguras", 
                  description: "Garantizamos experiencias inolvidables y seguras para todos nuestros usuarios.",
                  icon: "🛡️"
                },
                {
                  title: "Acompañamiento Integral",
                  description: "Te acompañamos desde la elección del programa hasta su culminación.",
                  icon: "🎯"
                },
                {
                  title: "Profesionales Capacitados",
                  description: "Nuestro equipo está formado por profesionales altamente capacitados.",
                  icon: "👥"
                },
                {
                  title: "Calidad Premium",
                  description: "Programas de intercambio enriquecedores y de la más alta calidad.",
                  icon: "⭐"
                },
                {
                  title: "Expansión Regional",
                  description: "Presencia en múltiples países para estar más cerca de ti.",
                  icon: "🌎"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-lime-400 mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Individual Members */}
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
                Nuestro <span className="text-lime-400">Equipo</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Profesionales apasionados que hacen posible tu sueño internacional
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {[
                {
                  name: "Juliana",
                  role: "Directora General",
                  description: "Líder visionaria con más de 10 años de experiencia en educación internacional",
                  image: "juliana-team.png"
                },
                {
                  name: "Javier",
                  role: "Director de Operaciones",
                  description: "Especialista en procesos internacionales y gestión de programas educativos",
                  image: "javier-team.png"
                },
                {
                  name: "Manuel",
                  role: "Asesor Senior",
                  description: "Experto en programas de trabajo y estudio en Estados Unidos y Canadá",
                  image: "manuel-team.png"
                },
                {
                  name: "Janeth",
                  role: "Coordinadora Académica",
                  description: "Especialista en intercambios universitarios y programas de idiomas",
                  image: "janeth-team.png"
                },
                {
                  name: "Camilo",
                  role: "Asesor de Visas",
                  description: "Experto en trámites consulares y documentación para visas estudiantiles",
                  image: "camilo-team.png"
                },
                {
                  name: "Nicole",
                  role: "Coordinadora de Programas",
                  description: "Encargada de programas Au Pair y experiencias culturales",
                  image: "nicol-team.png"
                },
                {
                  name: "Roberto",
                  role: "Asesor de Destinos",
                  description: "Especialista en programas Work & Travel y oportunidades laborales",
                  image: "rober-team.png"
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300 hover:scale-105 text-center h-full">
                    {/* Member Photo */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden relative bg-gray-100 ring-4 ring-lime-400/20 group-hover:ring-lime-400/40 transition-all duration-300">
                      <Image 
                        src={`/images/TEAM/${member.image}`} 
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Member Info */}
                    <h3 className="text-xl font-bold text-lime-400 mb-2">{member.name}</h3>
                    <p className="text-white font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
                    
                    {/* Contact Action */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <button className="text-xs text-lime-400 hover:text-lime-300 transition-colors duration-300">
                        💬 Contactar
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-lime-400/10 to-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/30 text-center"
            >
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto mb-6">
                Nuestro equipo está compuesto por profesionales con experiencia internacional, 
                educadores certificados, especialistas en intercambios culturales y asesores 
                dedicados que trabajan juntos para hacer realidad tus sueños de estudiar en el extranjero.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
                >
                  Agendar Reunión
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-lime-400 text-lime-400 font-semibold py-3 px-8 rounded-full hover:bg-lime-400/10 transition-all duration-300"
                >
                  Contáctanos
                </motion.button>
              </div>
            </motion.div>
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
                Lo que dicen nuestros <span className="text-lime-400">estudiantes</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Historias reales de transformación y éxito internacional
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  program: "Au Pair en Estados Unidos",
                  content: "ICE me acompañó en cada paso del proceso. Gracias a su guía profesional, viví una experiencia transformadora que cambió mi perspectiva del mundo.",
                  flag: "🇺🇸"
                },
                {
                  name: "Carlos Méndez",
                  program: "Work and Travel",
                  content: "El equipo de ICE hizo que todo el proceso fuera fácil y seguro. Su atención personalizada marcó la diferencia en mi experiencia.",
                  flag: "🇺🇸"
                },
                {
                  name: "Ana Rodríguez",
                  program: "Escuela de idiomas en Reino Unido",
                  content: "Desde el primer día hasta el final del programa, ICE estuvo ahí. Su compromiso con la calidad es evidente en cada detalle.",
                  flag: "🇬🇧"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-lime-400/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">🎓</div>
                  <blockquote className="text-white/90 italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.flag}</div>
                    <div>
                      <p className="font-semibold text-lime-400">{testimonial.name}</p>
                      <p className="text-white/70 text-sm">{testimonial.program}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
              >
                Ver más testimonios
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
