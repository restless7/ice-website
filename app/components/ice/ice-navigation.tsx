"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function IceNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Programas", href: "/programas" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "ICExperiences", href: "/experiences" },
    { name: "ICE News", href: "/news" },
    { name: "Contácto", href: "/contacto" },
    { name: "Portal", href: "/portal" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-lime-400/20"
          : "bg-transparent"
      }`}
    >
      {/* Large Logo - Outside Container */}
      <Link href="/" className="absolute left-6 top-1/2 transform -translate-y-1/2 group z-10">
        <div className="relative">
          {!logoError ? (
            // Actual ICE logo when available
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Image
                src="/images/logo_ice.png"
                alt="ICE Logo"
                width={180}
                height={180}
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            // Fallback when logo fails to load
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <span className="text-2xl lg:text-3xl font-bold text-white">ICE</span>
            </div>
          )}
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-end h-20">
          {/* Spacer for mobile to account for logo */}
          <div className="lg:hidden w-20"></div>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-lime-400/20 hover:text-lime-400 ${
                    item.name === "Portal"
                      ? "bg-gradient-to-r from-lime-400 to-green-500 text-black hover:from-lime-500 hover:to-green-600 hover:text-black shadow-lg"
                      : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-lime-400/20"
      >
        <div className="px-4 py-6 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-lime-400/20 hover:text-lime-400 ${
                item.name === "Portal"
                  ? "bg-gradient-to-r from-lime-400 to-green-500 text-black hover:from-lime-500 hover:to-green-600 hover:text-black"
                  : "text-white/90"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
