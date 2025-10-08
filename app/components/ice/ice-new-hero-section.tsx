"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const destinations = [
  {
    id: "usa",
    name: "Estados Unidos",
    image: "/images/home/nueva-york-estados-unidos-ice-colombia.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Estados Unidos",
    href: "/programas",
    flag: "🇺🇸"
  },
  {
    id: "canada",
    name: "Canadá",
    image: "/images/home/montreal-sobre-el-rio-al-atardecer-con-luces-de-la-ciudad-y-edificios-urbanos.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Canadá",
    href: "/programas/canada-tu-proyecto-de-vida",
    flag: "🇨🇦"
  },
  {
    id: "malta",
    name: "Malta",
    image: "/images/home/estudiar-ingles-en-valletta-malta-international-cultural-experience.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Malta",
    href: "/programas/escuela-de-idiomas-usa",
    flag: "🇲🇹"
  },
  {
    id: "dubai",
    name: "Dubai",
    image: "/images/home/estudiar-en-dubai-international-cultural-experience.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Dubai",
    href: "/programas/escuela-de-idiomas-usa",
    flag: "🇦🇪"
  },
  {
    id: "ireland",
    name: "Irlanda",
    image: "/images/home/irlanda-estudiar-trabajar-ice-colombia.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Irlanda",
    href: "/programas/escuela-de-idiomas-usa",
    flag: "🇮🇪"
  },
  {
    id: "scotland",
    name: "Escocia",
    image: "/images/home/estudiar-en-escocia-international-cultural-experience.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Escocia",
    href: "/programas/escuela-de-idiomas-usa",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    id: "england",
    name: "Inglaterra",
    image: "/images/home/inglaterra-ice-colombia.jpg",
    buttonText: "Conoce nuestros programas de intercambio en Inglaterra",
    href: "/programas/escuela-de-idiomas-usa",
    flag: "🇬🇧"
  }
];

export default function IceNewHeroSection() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageError = (destinationId: string) => {
    setImageErrors(prev => ({ ...prev, [destinationId]: true }));
  };

  const currentDest = destinations[currentDestination];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDestination}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {!imageErrors[currentDest.id] ? (
              <Image
                src={currentDest.image}
                alt={`Estudiar en ${currentDest.name}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentDestination === 0}
                onError={() => handleImageError(currentDest.id)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-gold/30 to-brand-orange/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🌍</div>
                  <p className="text-3xl font-bold">{currentDest.name}</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-blue-900/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* Current Destination Badge */}
            <motion.div
              key={`badge-${currentDestination}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <span className="text-3xl">{currentDest.flag}</span>
              <span className="text-white font-semibold text-lg">{currentDest.name}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-clear-sans), sans-serif' }}
            >
              <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">
                Viaja y conoce el mundo
              </span>
              <br />
              <span className="text-white">
                con nosotros
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-12 drop-shadow-lg leading-relaxed"
            >
              Te ayudamos a vivir tu sueño de estudiar, trabajar y viajar por el mundo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href={currentDest.href}>
                <button className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-white font-bold text-lg rounded-xl hover:from-brand-orange hover:to-brand-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
                  <span>Explorar {currentDest.name}</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              
              <Link href="/programas">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                  Ver todos los programas
                </button>
              </Link>
            </motion.div>

            {/* Destination Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-3"
            >
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDestination(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentDestination 
                      ? 'bg-brand-gold scale-125 shadow-lg' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ver ${destinations[index].name}`}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Scroll para más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}