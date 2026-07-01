'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Building2,
  Briefcase,
  Award,
  User,
  Mail,
  Phone,
  Globe,
  Search,
  LogIn
} from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { ThemeName, getTheme } from '@/app/lib/design-system';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Home,
  Building2,
  Briefcase,
  Award,
  User,
  Mail,
  Phone,
  Globe,
  Search,
  LogIn,
} as const;

type IconName = keyof typeof iconMap;

interface NavigationItem {
  name: string;
  href: string;
  icon: IconName;
  active?: boolean;
  badge?: number;
  description?: string;
  children?: { name: string; href: string }[];
}

interface PublicNavigationProps {
  packageName?: 'ice-website';
  theme?: ThemeName;
  navigation?: {
    main: NavigationItem[];
  };
  branding?: {
    title: string;
    logo?: string;
    logoFallback?: string;
  };
  className?: string;
}

const defaultBranding = {
  title: 'ICE Colombia',
  logo: '/images/logo_ice.png',
  logoFallback: 'ICE',
};

const defaultNavigation = {
  main: [
    { 
      name: 'Programas', 
      href: '/programas', 
      icon: 'Briefcase' as IconName,
      children: [
        { name: 'Working Holiday Alemania 2026', href: '/programas/working-holiday-alemania-2026' },
        { name: 'Asia Internship 2026', href: '/programas/internship-asia-2026' },
        { name: 'Work and Travel USA', href: '/programas/summer-work-and-travel' },
        { name: 'Au Pair USA', href: '/programas/au-pair-usa' },
        { name: 'Camp Counselor USA', href: '/programas/camp-counselor' },
        { name: 'Intern and Trainee USA', href: '/programas/interntrainee-usa' },
        { name: 'Escuelas de Idiomas', href: '/programas/escuela-de-idiomas-usa' },
        { name: 'Canadá - Tu Proyecto de Vida', href: '/programas/canada-tu-proyecto-de-vida' },
        { name: 'Asesoría de Visas', href: '/programas/asesoria-visa-turismo-usa' },
        { name: 'ICEnglish', href: '/programas/curso-de-ingles' },
        { name: 'H2B USA', href: '/programas/h2b' },
        { name: 'Summer Camp', href: '/programas/summer-camp' },
        { name: 'Seguros Internacionales', href: '/programas/seguros-internacionales' },
        { name: 'Rumbo Colombia', href: '/programas/rumbo-colombia' },
        { name: 'Ver Todos', href: '/programas' }
      ]
    },
    { name: 'Nosotros', href: '/nosotros', icon: 'Building2' as IconName },
    { name: 'ICExperiences', href: '/experiences', icon: 'Award' as IconName },
    { name: 'Contáctanos', href: '/contacto', icon: 'Mail' as IconName },
  ],
};

export default function PublicNavigation({
  packageName = 'ice-website',
  theme = 'ice-colombia',
  navigation: customNavigation,
  branding: customBranding,
  className,
}: PublicNavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoAnimated, setIsAutoAnimated] = useState(false);
  
  // Check if we're on the home page
  const isHomePage = pathname === '/';

  const designTheme = getTheme(theme);
  const branding = customBranding || defaultBranding;
  const navigation = customNavigation || defaultNavigation;

  // Handle scroll effect with more precise control
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // On homepage: trigger after 20px scroll
      // On other pages: trigger immediately (always show glassmorphism)
      setIsScrolled(isHomePage ? scrollY > 20 : true);
    };
    
    // Set initial state for non-home pages
    if (!isHomePage) {
      setIsScrolled(true);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);
  
  // Auto-animate logo on non-home pages after 1 second
  useEffect(() => {
    if (isHomePage) return;
    
    const timer = setTimeout(() => {
      setIsAutoAnimated(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [isHomePage]);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getThemeClasses = () => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500';
    
    return cn(baseClasses, 
      isScrolled 
        ? 'bg-black/30 backdrop-blur-lg border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    );
  };

  const getLinkClasses = (item: NavigationItem, isActive: boolean) => {
    const baseClasses = 'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300';
    
    // Contact button gets special styling
    if (item.name === 'Contáctanos') {
      return cn(baseClasses,
        'bg-gradient-to-r from-brand-gold to-brand-orange text-white hover:from-brand-orange hover:to-brand-gold shadow-lg'
      );
    }

    return cn(baseClasses,
      isActive
        ? 'bg-red-500/20 text-red-400 border border-red-400/30'
        : 'text-white hover:text-brand-gold hover:bg-brand-gold/10'
    );
  };

  const renderLogo = () => {
    return (
      <motion.div
        className="fixed z-[200]"
        style={{
          left: '50%',
          top: 0
        }}
        initial={{
          x: '-50%',
          y: 'calc(50vh - 200px)', // Center more precisely accounting for logo height
          scale: 1
        }}
        animate={{
          x: '-50%',
          y: (isHomePage ? isScrolled : isAutoAnimated) ? (isMobile ? '-140px' : '-200px') : 'calc(50vh - 200px)', // Page-specific animation
          scale: (isHomePage ? isScrolled : isAutoAnimated) ? 0.22 : 1
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <Link href="/" className="group block">
          <div className="relative">
            {/* Subtle white feathered oval background - only on homepage when not scrolled */}
            {isHomePage && !isScrolled && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[420px] h-[160px] lg:w-[550px] lg:h-[220px] bg-white/70 rounded-full blur-xl opacity-80 transition-opacity duration-1000"></div>
              </div>
            )}
            
            {!logoError && branding.logo ? (
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative z-10">
                <Image
                  src={branding.logo}
                  alt={`${branding.title} Logo`}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            ) : (
              <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-brand-gold to-brand-orange rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl relative z-10">
                <span className="text-8xl lg:text-9xl font-bold text-white">
                  {branding.logoFallback}
                </span>
              </div>
            )}
          </div>
        </Link>
      </motion.div>
    );
  };

  const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
    const isActive = pathname === item.href;
    const Icon = iconMap[item.icon];
    
    return (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: navigation.main.indexOf(item) * 0.1 }}
        className="relative group"
      >
        <Link
          href={item.href}
          className={getLinkClasses(item, isActive)}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {isMobile && <Icon className="w-4 h-4" />}
          <span>{item.name}</span>
          {item.badge && (
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {item.badge}
            </span>
          )}
        </Link>
        {item.children && !isMobile && (
          <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-2 flex flex-col gap-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-white/90 hover:bg-brand-gold/20 hover:text-brand-gold transition-colors block"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(getThemeClasses(), className)}
    >
      {/* Logo */}
      {renderLogo()}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Main Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => renderNavigationItem(item))}
          </div>

          {/* Mobile menu button and spacer */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div className="w-16"></div> {/* Spacer for mobile logo */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Right side - Utilities */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Country Selection */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-brand-gold transition-colors duration-300">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">🇨🇴</span>
                <span className="text-sm">CO</span>
              </button>
              {/* Country dropdown could be added here */}
            </div>
            
            {/* Login */}
            <Link
              href="/student-portal"
              className="flex items-center space-x-2 text-white hover:text-brand-gold transition-colors duration-300"
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">Inicia sesión</span>
            </Link>
            
            {/* Search */}
            <button className="text-white hover:text-brand-gold transition-colors duration-300">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/20 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-brand-gold/20 hover:text-brand-gold',
                      item.name === 'Contáctanos'
                        ? 'bg-gradient-to-r from-brand-gold to-brand-orange text-white hover:from-brand-orange hover:to-brand-gold'
                        : 'text-white/90'
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1 mt-1 border-l border-white/10 ml-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}