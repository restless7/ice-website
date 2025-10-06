"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, User, Clock } from "lucide-react";
import Head from "next/head";

// Sample news data - in a real app, this would come from a CMS or API
const newsArticles = [
  {
    id: 1,
    title: "Nuevos Destinos de Intercambio para 2024",
    excerpt: "ICE amplía su red de programas con nuevos destinos en Asia y Europa, ofreciendo más oportunidades para nuestros estudiantes.",
    author: "Equipo ICE",
    date: "2024-01-15",
    readTime: "3 min",
    category: "Programas",
    featured: true,
    image: "/images/ice-hero-main.png"
  },
  {
    id: 2,
    title: "Historias de Éxito: María en Canadá",
    excerpt: "Conoce la experiencia transformadora de María durante su programa de Work & Travel en Canadá y cómo cambió su perspectiva.",
    author: "María González",
    date: "2024-01-10",
    readTime: "5 min",
    category: "Testimonios",
    featured: false,
    image: "/images/ice-hero-main.png"
  },
  {
    id: 3,
    title: "Becas Disponibles para Programas de Verano",
    excerpt: "ICE anuncia nuevas becas para estudiantes destacados que deseen participar en programas de verano en Europa.",
    author: "Departamento de Becas",
    date: "2024-01-05",
    readTime: "4 min",
    category: "Becas",
    featured: false,
    image: "/images/ice-hero-main.png"
  },
  {
    id: 4,
    title: "Consejos para tu Primer Intercambio",
    excerpt: "Guía completa con los mejores consejos para prepararte para tu primera experiencia de intercambio internacional.",
    author: "Consejeros ICE",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Consejos",
    featured: false,
    image: "/images/ice-hero-main.png"
  },
  {
    id: 5,
    title: "Alianza Estratégica con Universidades Europeas",
    excerpt: "ICE firma convenios con prestigiosas universidades europeas para ampliar las opciones académicas de nuestros estudiantes.",
    author: "Dirección Académica",
    date: "2023-12-20",
    readTime: "4 min",
    category: "Alianzas",
    featured: false,
    image: "/images/ice-hero-main.png"
  },
  {
    id: 6,
    title: "Evento Virtual: Feria de Intercambios 2024",
    excerpt: "Únete a nuestra feria virtual donde podrás conocer todos nuestros programas y hablar directamente con nuestros asesores.",
    author: "Eventos ICE",
    date: "2023-12-15",
    readTime: "2 min",
    category: "Eventos",
    featured: false,
    image: "/images/ice-hero-main.png"
  }
];

const categories = ["Todos", "Programas", "Testimonios", "Becas", "Consejos", "Alianzas", "Eventos"];

export default function IceNewsPage() {
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
                ICE <span className="text-lime-400">News</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Mantente informado sobre las últimas noticias, eventos y oportunidades educativas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                Artículo <span className="text-lime-400">Destacado</span>
              </h2>
              
              {newsArticles.filter(article => article.featured).map((article) => (
                <div key={article.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-lime-400/20 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <div className="flex items-center text-white/60 text-sm">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{article.title}</h3>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/60 text-sm">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4">{article.author}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-2 px-6 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300"
                        >
                          Leer más <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="relative py-12 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0 
                      ? 'bg-lime-400 text-black' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* News Articles Grid */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl border border-lime-400/20 overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span className="mr-4">
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/60 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-lime-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Mantente <span className="text-lime-400">Informado</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Suscríbete a nuestro newsletter y recibe las últimas noticias y oportunidades directamente en tu correo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-lime-400 backdrop-blur-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold py-3 px-8 rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300 whitespace-nowrap"
                >
                  Suscribirse
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </IceLayoutWrapper>
  );
}
