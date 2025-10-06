"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";

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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Sobre <span className="text-lime-400">ICE</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Transformando vidas a través de experiencias educativas internacionales
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20"
              >
                <h2 className="text-3xl font-bold text-lime-400 mb-6">Nuestra Misión</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Proporcionar experiencias educativas internacionales de alta calidad que 
                  transformen la perspectiva de nuestros estudiantes, desarrollen sus 
                  habilidades interculturales y los preparen para un mundo globalizado.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20"
              >
                <h2 className="text-3xl font-bold text-lime-400 mb-6">Nuestra Visión</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Ser la organización líder en programas de intercambio educativo, 
                  reconocida por la excelencia de nuestros servicios y el impacto 
                  positivo en la vida de nuestros estudiantes y comunidades.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
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
                Nuestra <span className="text-lime-400">Historia</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Más de una década conectando estudiantes con oportunidades globales
              </p>
            </motion.div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20"
              >
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Nuestros Inicios</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  ICE nació de la pasión por crear puentes entre culturas y brindar 
                  oportunidades únicas de crecimiento personal y profesional a través 
                  de la educación internacional. Fundado por un equipo de profesionales 
                  con amplia experiencia en educación y relaciones internacionales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20"
              >
                <h3 className="text-2xl font-bold text-lime-400 mb-4">Nuestro Crecimiento</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  A lo largo de los años, hemos expandido nuestros programas para incluir 
                  intercambios académicos, programas de trabajo y viaje, cursos de idiomas 
                  en el extranjero, y experiencias culturales inmersivas en más de 20 países.
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
                  title: "Excelencia",
                  description: "Comprometidos con la más alta calidad en todos nuestros programas y servicios."
                },
                {
                  title: "Integridad", 
                  description: "Actuamos con honestidad y transparencia en todas nuestras relaciones."
                },
                {
                  title: "Diversidad",
                  description: "Celebramos y promovemos la riqueza de la diversidad cultural."
                },
                {
                  title: "Innovación",
                  description: "Buscamos constantemente nuevas formas de mejorar la experiencia educativa."
                },
                {
                  title: "Responsabilidad",
                  description: "Nos comprometemos con el bienestar y seguridad de nuestros estudiantes."
                },
                {
                  title: "Pasión",
                  description: "Amamos lo que hacemos y nos dedicamos completamente a nuestra misión."
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
                  <h3 className="text-xl font-bold text-lime-400 mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Profesionales apasionados dedicados a tu éxito
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20 text-center"
            >
              <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
                Nuestro equipo está compuesto por profesionales con experiencia internacional, 
                educadores certificados, especialistas en intercambios culturales y asesores 
                dedicados que trabajan juntos para hacer realidad tus sueños de estudiar en el extranjero.
              </p>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
                >
                  Conoce al Equipo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
