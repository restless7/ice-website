"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Article } from "@/app/lib/db-articles";

export default function NewsGridClient({ articles }: { articles: Article[] }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  
  const categories = ["Todos", "Noticias", "Promociones", "Actualizaciones de Visa", "Becas"];
  
  const filteredArticles = selectedCategory === "Todos" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <>
      {/* Categories Filter */}
      <section className="relative py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-brand-gold text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100 hover:text-brand-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map((article) => (
                <motion.article
                  layout
                  key={article.id || article.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-brand-gold/30 transition-all duration-300 group flex flex-col"
                >
                  <Link href={`/news/${article.slug}`} className="flex-grow flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image 
                        src={article.image_url || "/images/ice-hero-main.png"} 
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                      
                      {article.badge && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg uppercase tracking-wider">
                            {article.badge}
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-gray-500 text-sm mb-4 font-medium">
                        <CalendarDaysIcon className="w-4 h-4 mr-2 text-brand-gold" />
                        <span>
                          {new Date(article.published_at).toLocaleDateString('es-ES', {
                            year: 'numeric', month: 'long', day: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-brand-orange transition-colors duration-300 line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center text-brand-gold font-bold mt-auto group/btn">
                        <span>Leer más</span>
                        <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredArticles.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-2xl font-bold text-gray-400">No hay artículos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
