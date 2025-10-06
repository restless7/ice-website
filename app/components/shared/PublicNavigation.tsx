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
  Phone
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
    { name: 'Inicio', href: '/', icon: 'Home' as IconName },
    { name: 'Nosotros', href: '/nosotros', icon: 'Building2' as IconName },
    { name: 'Portafolio', href: '/portafolio', icon: 'Briefcase' as IconName },
    { name: 'ICExperiences', href: '/experiences', icon: 'Award' as IconName },
    { name: 'ICE News', href: '/news', icon: 'Mail' as IconName },
    { name: 'Contácto', href: '/contacto', icon: 'Mail' as IconName },
    { name: 'Portal', href: '/portal', icon: 'User' as IconName },
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getThemeClasses = () => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    
    return cn(baseClasses, 
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-emerald-400/20' 
        : 'bg-transparent'
    );
  };

  const getLinkClasses = (item: NavigationItem, isActive: boolean) => {
    const baseClasses = 'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300';
    
    if (item.name === 'Portal') {
      return cn(baseClasses,
        'bg-gradient-to-r from-emerald-400 to-green-500 text-black hover:from-emerald-500 hover:to-green-600 hover:text-black shadow-lg'
      );
    }

    return cn(baseClasses,
      isActive
        ? 'bg-emerald-500/20 text-emerald-400'
        : 'text-white/90 hover:text-emerald-400 hover:bg-emerald-500/10'
    );
  };

  const renderLogo = () => (
    <Link href="/" className="absolute left-6 top-1/2 transform -translate-y-1/2 group z-10">
      <div className="relative">
        {!logoError && branding.logo ? (
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Image
              src={branding.logo}
              alt={`${branding.title} Logo`}
              width={180}
              height={180}
              className="w-full h-full object-contain"
              onError={() => setLogoError(true)}
            />
          </div>
        ) : (
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <span className="text-2xl lg:text-3xl font-bold text-white">
              {branding.logoFallback}
            </span>
          </div>
        )}
      </div>
    </Link>
  );

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
        <div className="flex items-center justify-center lg:justify-end h-20">
          {/* Spacer for mobile to account for logo */}
          <div className="lg:hidden w-20"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => renderNavigationItem(item))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-emerald-400/20"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-emerald-400/20 hover:text-emerald-400',
                    item.name === 'Portal'
                      ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-black hover:from-emerald-500 hover:to-green-600 hover:text-black'
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