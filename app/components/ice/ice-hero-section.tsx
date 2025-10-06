"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function IceHeroSection() {
  const [imageError, setImageError] = useState(false);
  const imagePath = "/images/ice-hero-main.png"; // You can place your image with this exact name

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-black" />
        
        {/* Animated paint splashes */}
        <div className="absolute inset-0">
          {/* Green splashes */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-20 left-10 w-32 h-32 bg-lime-400 rounded-full opacity-60 blur-sm"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -180 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-40 right-20 w-24 h-24 bg-green-400 rounded-full opacity-70 blur-sm"
          />
          
          {/* Pink/Magenta splashes */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 180 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute bottom-32 left-32 w-28 h-28 bg-pink-500 rounded-full opacity-60 blur-sm"
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -90 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute top-60 right-40 w-20 h-20 bg-fuchsia-400 rounded-full opacity-70 blur-sm"
          />
          
          {/* Yellow splashes */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 270 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-36 h-36 bg-yellow-400 rounded-full opacity-50 blur-sm"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const baseX = (i * 73) % 1200; // Pseudo-random but deterministic
            const baseY = (i * 127) % 800;
            const targetX = ((i * 97) + 300) % 1200;
            const targetY = ((i * 151) + 200) % 800;
            const duration = 2 + (i % 4);
            const delay = (i * 0.3) % 2;
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  x: baseX,
                  y: baseY,
                  scale: 0 
                }}
                animate={{
                  x: targetX,
                  y: targetY,
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0 ? 'bg-lime-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-yellow-400'
                } opacity-70`}
              />
            );
          })}
        </div>
      </div>

      {/* Landmark Images Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          {/* Eiffel Tower */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute right-10 top-20 text-6xl"
          >
            🗼
          </motion.div>
          
          {/* Big Ben */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute left-20 top-32 text-8xl"
          >
            🏰
          </motion.div>
          
          {/* Statue of Liberty */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute right-32 bottom-32 text-7xl"
          >
            🗽
          </motion.div>
          
          {/* Colosseum */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute left-10 bottom-20 text-6xl"
          >
            🏟️
          </motion.div>
        </div>
      </div>

      {/* Background Image - Right Side */}
      {!imageError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute right-0 top-0 w-3/5 h-full z-5"
        >
          <div className="relative w-full h-full">
            <Image
              src={imagePath}
              alt="ICE - Explora el Mundo con Nosotros"
              fill
              className="object-cover object-center"
              sizes="60vw"
              priority
              onError={() => setImageError(true)}
            />
            {/* Gradient overlay for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/70" />
          </div>
        </motion.div>
      )}

      {/* Main Content - Absolute Left Aligned */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full max-w-2xl pl-8 sm:pl-12 lg:pl-16 xl:pl-20 text-left">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
          >
            EXPLORA EL
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
              MUNDO CON
            </span>
            <br />
            NOSOTROS
          </motion.h1>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mb-8"
          >
            <blockquote className="text-lg sm:text-xl text-white/90 font-medium italic mb-4 leading-relaxed">
              "La experiencia no es lo que le sucede a un hombre, es lo que un hombre hace con lo que le sucede"
            </blockquote>
            <cite className="text-lime-400 font-semibold">(Aldous Huxley)</cite>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold text-lg rounded-full hover:from-lime-500 hover:to-green-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>Contáctanos</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center space-x-4 text-white/70">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <span className="text-xl">📱</span>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer shadow-lg">
                <span className="text-xl">💬</span>
              </div>
            </div>
          </motion.div>

          {/* Fallback placeholder if image fails */}
          {imageError && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-4 bg-lime-400/10 border border-lime-400/30 rounded-xl"
            >
              <p className="text-lime-400 text-sm">
                💡 Add <code className="bg-black/20 px-2 py-1 rounded">ice-hero-main.png</code> to <code className="bg-black/20 px-2 py-1 rounded">/public/images/</code> for background image
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll para más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
