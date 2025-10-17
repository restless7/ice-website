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
    { name: 'Programas', href: '/programas', icon: 'Briefcase' as IconName },
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

  const designTheme = getTheme(theme);
  const branding = customBranding || defaultBranding;
  const navigation = customNavigation || defaultNavigation;

  // Handle scroll effect with more precise control
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getThemeClasses = () => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500';
    
    return cn(baseClasses, 
      isScrolled 
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
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
    // Calculate logo size and position based on scroll
    const scrollProgress = typeof window !== 'undefined' ? Math.min(window.scrollY / 200, 1) : 0;
    const isInitialLoad = typeof window !== 'undefined' ? window.scrollY === 0 : true;
    
    return (
      <>
        {/* Large centered logo - visible when not scrolled */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: isScrolled ? 0 : 1,
            scale: isScrolled ? 0.8 : 1,
            y: isScrolled ? -20 : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
          style={{ display: isScrolled ? 'none' : 'block' }}
        >
          <Link href="/" className="pointer-events-auto group">
            <div className="relative">
              {!logoError && branding.logo ? (
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <Image
                    src={branding.logo}
                    alt={`${branding.title} Logo`}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-brand-gold to-brand-orange rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <span className="text-4xl lg:text-6xl font-bold text-white">
                    {branding.logoFallback}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </motion.div>
        
        {/* Small navbar logo - visible when scrolled */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: isScrolled ? 1 : 0,
            scale: isScrolled ? 1 : 0.8,
            y: isScrolled ? 0 : 20
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
          style={{ display: !isScrolled ? 'none' : 'block' }}
        >
          <Link href="/" className="group">
            <div className="relative">
              {!logoError && branding.logo ? (
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src={branding.logo}
                    alt={`${branding.title} Logo`}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-brand-gold to-brand-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-lg lg:text-xl font-bold text-white">
                    {branding.logoFallback}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      </>
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
              href="/portal"
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
            className="lg:hidden overflow-hidden bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-gray-800/95 backdrop-blur-lg border-t border-brand-gold/20"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}