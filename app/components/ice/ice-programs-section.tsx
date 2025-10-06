"use client";

import { motion } from "framer-motion";
import { 
  GlobeAltIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

export default function IceProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Intercambio Académico",
      description: "Semestres completos en universidades internacionales de prestigio",
      icon: AcademicCapIcon,
      destinations: ["Estados Unidos", "Reino Unido", "Alemania"],
      duration: "1-2 semestres",
      features: ["Créditos transferibles", "Alojamiento incluido", "Orientación cultural"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Programas de Idiomas",
      description: "Inmersión total en el idioma con certificaciones internacionales",
      icon: GlobeAltIcon,
      destinations: ["Francia", "Italia", "Japón"],
      duration: "4-12 semanas",
      features: ["Certificación oficial", "Familia anfitriona", "Actividades culturales"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Experiencias Culturales",
      description: "Programas de inmersión cultural y voluntariado internacional",
      icon: UserGroupIcon,
      destinations: ["Costa Rica", "Tailandia", "Sudáfrica"],
      duration: "2-8 semanas",
      features: ["Voluntariado", "Impacto social", "Desarrollo personal"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />
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
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Nuestros
            <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent ml-4">
              Programas
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Diseñados para transformar tu perspectiva del mundo y acelerar tu desarrollo personal y profesional
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${program.color} p-3 mb-6 shadow-lg`}>
                  <program.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{program.description}</p>

                {/* Program Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPinIcon className="w-5 h-5 text-lime-400" />
                    <span className="text-sm">{program.destinations.join(", ")}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <ClockIcon className="w-5 h-5 text-lime-400" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Más Información
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-lime-400 mb-2"
              >
                500+
              </motion.div>
              <p className="text-white/70">Estudiantes</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-pink-400 mb-2"
              >
                25+
              </motion.div>
              <p className="text-white/70">Países</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-yellow-400 mb-2"
              >
                98%
              </motion.div>
              <p className="text-white/70">Satisfacción</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-blue-400 mb-2"
              >
                15+
              </motion.div>
              <p className="text-white/70">Años de experiencia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
