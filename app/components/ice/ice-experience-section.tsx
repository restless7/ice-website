"use client";

import { motion } from "framer-motion";
import { ChatBubbleLeftIcon as QuoteIcon } from "@heroicons/react/24/solid";
import { 
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function IceExperienceSection() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      program: "Intercambio en Londres",
      quote: "ICE cambió mi vida completamente. No solo mejoré mi inglés, sino que descubrí una versión de mí misma que no sabía que existía.",
      avatar: "👩‍🎓",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendez",
      program: "Voluntariado en Tailandia",
      quote: "La experiencia más transformadora de mi vida. Aprendí más sobre mí mismo en 6 semanas que en años anteriores.",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      program: "Semestre en Alemania",
      quote: "ICE me dio las herramientas y confianza para conquistar el mundo. Ahora trabajo en una empresa multinacional.",
      avatar: "👩‍💻",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: LightBulbIcon,
      title: "Desarrollo Personal",
      description: "Descubre tu potencial y desarrolla habilidades que te acompañarán toda la vida",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: UserGroupIcon,
      title: "Red Global",
      description: "Conecta con estudiantes de todo el mundo y construye relaciones duraderas",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: RocketLaunchIcon,
      title: "Impulso Profesional",
      description: "Diferénciate en el mercado laboral con experiencia internacional",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: HeartIcon,
      title: "Crecimiento Emocional",
      description: "Desarrolla confianza, independencia y una perspectiva global única",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            La
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent ml-4">
              Experiencia
            </span>
            <br />
            ICE
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Más que un programa educativo, es una transformación personal que durará toda la vida
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <benefit.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Lo que dicen nuestros
            <span className="text-lime-400 ml-2">estudiantes</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {/* Quote icon */}
                <QuoteIcon className="w-8 h-8 text-lime-400 mb-4" />
                
                {/* Quote */}
                <blockquote className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-lime-400 text-sm">{testimonial.program}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ⭐
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-lime-400/20 to-green-400/20 backdrop-blur-lg rounded-3xl p-12 border border-lime-400/30"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿Listo para tu
            <span className="text-lime-400 ml-2">aventura?</span>
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Únete a cientos de estudiantes que han transformado sus vidas con ICE
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Solicita Información
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Ver Programas
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
