"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CalendarIcon, TagIcon, SparklesIcon, MegaphoneIcon, GiftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    type: "promotion",
    title: "¡Descuento del 15% en Work and Travel USA 2024!",
    description: "Aprovecha nuestra promoción especial para la temporada de verano 2024. Aplica antes del 31 de enero y obtén un descuento exclusivo.",
    image: "/images/news/promo-work-travel.jpg",
    date: "2024-01-15",
    category: "Promoción",
    badge: "¡OFERTA LIMITADA!",
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    type: "news",
    title: "Nuevos destinos disponibles para estudiar idiomas",
    description: "Ampliamos nuestra oferta con nuevas escuelas de idiomas en Dublín, Irlanda y Edimburgo, Escocia. Descubre estas increíbles oportunidades.",
    image: "/images/news/nuevos-destinos.jpg",
    date: "2024-01-10",
    category: "Noticias",
    badge: "NUEVO",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    type: "update",
    title: "Actualizaciones en requisitos de visa J-1 para 2024",
    description: "Te informamos sobre los cambios más recientes en los requisitos de visa J-1 para programas de intercambio cultural en Estados Unidos.",
    image: "/images/news/visa-updates.jpg",
    date: "2024-01-08",
    category: "Actualización",
    badge: "IMPORTANTE",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    type: "offer",
    title: "Becas parciales disponibles para programas en Canadá",
    description: "Conoce nuestras nuevas becas parciales para estudiar en colleges públicos de Canadá. Hasta $2000 CAD de descuento disponible.",
    image: "/images/news/becas-canada.jpg",
    date: "2024-01-05",
    category: "Oferta Especial",
    badge: "BECAS",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 5,
    type: "news",
    title: "ICE abre nueva oficina en Medellín",
    description: "Estamos expandiendo nuestros servicios con una nueva oficina en Medellín para atender mejor a nuestros clientes de Antioquia.",
    image: "/images/news/oficina-medellin.jpg",
    date: "2024-01-03",
    category: "Expansión",
    badge: "NUEVA OFICINA",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 6,
    type: "promotion",
    title: "Descuentos en seguros médicos internacionales",
    description: "Protege tu aventura internacional con nuestros seguros médicos con descuentos especiales del 20% durante enero y febrero.",
    image: "/images/news/seguros-descuento.jpg",
    date: "2024-01-01",
    category: "Promoción",
    badge: "20% OFF",
    color: "from-teal-500 to-teal-600"
  }
];

export default function IceNewsSection() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (newsId: number) => {
    setImageErrors(prev => ({ ...prev, [newsId]: true }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'promotion':
        return GiftIcon;
      case 'offer':
        return TagIcon;
      case 'update':
        return SparklesIcon;
      default:
        return MegaphoneIcon;
    }
  };

  return (
    <section className="relative py-20 bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
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
            Mundo <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">ICE</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Te informamos acerca de las últimas noticias, actualizaciones, ofertas disponibles y promociones que tenemos preparadas para ti.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <article className="h-full bg-white rounded-2xl border border-gray-200 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-xl group-hover:scale-105 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {!imageErrors[item.id] ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-brand-gold/50" />
                      </div>
                    )}
                    
                    {/* Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}>
                      {item.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                      
                      <div className="flex items-center text-gray-500 text-xs">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        {formatDate(item.date)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>

                    {/* Read More Link */}
                    <Link 
                      href="/news"
                      className="inline-flex items-center text-brand-gold hover:text-brand-orange font-semibold text-sm group/link"
                    >
                      <span>Leer más</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/news">
            <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
              <span>Ver más</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}