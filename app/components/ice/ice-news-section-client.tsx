"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Article } from "@/app/lib/db-articles";

export default function IceNewsSectionClient({ articles }: { articles: Article[] }) {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative py-20 bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Mundo <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">ICE</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Las últimas noticias, programas exclusivos, actualizaciones de visas y promociones para tu próximo intercambio.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((item, index) => {
            return (
              <motion.div
                key={item.id || item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex"
              >
                <article className="w-full flex flex-col bg-white rounded-[2rem] border border-gray-100 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <Link href={`/news/${item.slug}`} className="flex-grow flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-50">
                      {!imageErrors[item.slug] ? (
                        <Image
                          src={item.image_url || "/images/ice-hero-main.png"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          onError={() => handleImageError(item.slug)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 font-bold">ICE News</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Badge */}
                      {item.badge && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-black text-white bg-red-500 shadow-lg uppercase tracking-widest">
                          {item.badge}
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-brand-gold text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Category and Date */}
                      <div className="flex items-center text-gray-500 text-sm mb-4 font-medium">
                        <CalendarDaysIcon className="w-4 h-4 mr-2 text-brand-orange" />
                        {formatDate(item.published_at)}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-brand-orange transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-8 flex-grow">
                        {item.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="mt-auto inline-flex items-center text-brand-gold hover:text-brand-orange font-black text-sm group/link tracking-wide uppercase">
                        <span>Leer artículo</span>
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/news" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-black text-lg rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group/btn">
            <span>Visitar Hub de Contenidos</span>
            <ArrowRightIcon className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
