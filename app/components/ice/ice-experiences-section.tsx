"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, StarIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "María José González",
    program: "Au Pair USA",
    country: "Estados Unidos",
    rating: 5,
    image: "/images/testimonials/maria-jose.jpg", // Placeholder path
    quote: "Mi experiencia con ICE fue increíble. Gracias a ellos pude vivir con una familia maravillosa en California y mejorar mi inglés mientras cuidaba dos niños adorables. Fue una experiencia que cambió mi vida para siempre.",
    location: "California, USA",
    year: "2023"
  },
  {
    id: 2,
    name: "Carlos Andrés Pérez",
    program: "Work and Travel",
    country: "Estados Unidos", 
    rating: 5,
    image: "/images/testimonials/carlos-andres.jpg", // Placeholder path
    quote: "Trabajar en un resort en Miami Beach durante el verano fue una experiencia única. Conocí personas de todo el mundo, mejoré mi inglés y pude viajar por toda Florida. ICE me apoyó en todo el proceso.",
    location: "Miami, Florida",
    year: "2023"
  },
  {
    id: 3,
    name: "Ana Sofía Ramírez",
    program: "Escuela de Idiomas",
    country: "Malta",
    rating: 5,
    image: "/images/testimonials/ana-sofia.jpg", // Placeholder path
    quote: "Estudiar inglés en Malta fue una decisión perfecta. La isla es hermosa, las clases fueron excelentes y conocí estudiantes de muchos países. ICE me guió en cada paso y siempre estuvieron disponibles para ayudarme.",
    location: "Valletta, Malta",
    year: "2023"
  },
  {
    id: 4,
    name: "David Martínez",
    program: "Camp Counselor",
    country: "Estados Unidos",
    rating: 5,
    image: "/images/testimonials/david-martinez.jpg", // Placeholder path
    quote: "Ser consejero en un campamento de verano en Nueva York fue la experiencia más gratificante de mi vida. Trabajé con niños increíbles, mejoré mis habilidades de liderazgo y creé amistades para toda la vida.",
    location: "New York, USA", 
    year: "2022"
  },
  {
    id: 5,
    name: "Valentina Torres",
    program: "Intern and Trainee",
    country: "Estados Unidos",
    rating: 5,
    image: "/images/testimonials/valentina-torres.jpg", // Placeholder path
    quote: "Mi internship en una empresa de marketing digital en Los Ángeles superó todas mis expectativas. Aprendí muchísimo, trabajé en proyectos reales y ICE me ayudó a conseguir esta oportunidad increíble.",
    location: "Los Angeles, California",
    year: "2023"
  },
  {
    id: 6,
    name: "Santiago López",
    program: "Canadá - Tu Proyecto de Vida",
    country: "Canadá",
    rating: 5,
    image: "/images/testimonials/santiago-lopez.jpg", // Placeholder path
    quote: "Estudiar en un college en Toronto y poder trabajar al mismo tiempo ha sido una experiencia transformadora. ICE me ayudó a planificar todo mi proyecto de vida en Canadá y ahora estoy camino a la residencia.",
    location: "Toronto, Canadá",
    year: "2022"
  }
];

export default function IceExperiencesSection() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (testimonialId: number) => {
    setImageErrors(prev => ({ ...prev, [testimonialId]: true }));
  };

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
            Experiencias <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">ICE</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Nuestros participantes te cuentan cómo es vivir la ICExperience. Conoce las historias de quienes han participado en nuestros programas de intercambio y han dado ese paso para cambiar sus vidas y llenarse de experiencias que contribuyen a su desarrollo personal y profesional.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/20 mr-4 flex-shrink-0">
                    {!imageErrors[testimonial.id] ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(testimonial.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 truncate">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-brand-gold font-semibold">
                      {testimonial.program}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location} • {testimonial.year}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <ChatBubbleLeftIcon className="absolute -top-2 -left-2 w-8 h-8 text-brand-gold/20" />
                  <p className="text-gray-600 leading-relaxed pl-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Program Badge */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full">
                    {testimonial.country}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/programas">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
              <span>Quiero aplicar a un programa</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}