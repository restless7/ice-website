'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeName, getTheme, createThemeVariables, DesignTheme } from '@/app/lib/design-system';

interface ThemeContextType {
  theme: ThemeName;
  designTheme: DesignTheme;
  setTheme: (theme: ThemeName) => void;
  packageName: string;
  setPackageName: (packageName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  packageName?: string;
  enableSystemTheme?: boolean;
  enableThemeTransitions?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = 'main-portal',
  packageName = 'main-portal',
  enableSystemTheme = false,
  enableThemeTransitions = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [currentPackageName, setPackageName] = useState(packageName);
  const [mounted, setMounted] = useState(false);

  const designTheme = getTheme(theme);

  // Apply theme variables to CSS custom properties
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const themeVariables = createThemeVariables(designTheme);

    // Apply CSS custom properties
    Object.entries(themeVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Add theme class to body for theme-specific styling
    document.body.className = document.body.className
      .split(' ')
      .filter(className => !className.startsWith('theme-'))
      .concat(`theme-${theme}`, `package-${currentPackageName}`)
      .join(' ');

    // Add transition class if enabled
    if (enableThemeTransitions) {
      document.body.style.transition = 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
    }
  }, [theme, designTheme, currentPackageName, mounted, enableThemeTransitions]);

  // Handle system theme detection
  useEffect(() => {
    if (!enableSystemTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'main-portal' && mediaQuery.matches) {
        setThemeState('security-portfolio'); // Use security theme for dark mode
      } else if (theme === 'security-portfolio' && !mediaQuery.matches) {
        setThemeState('main-portal'); // Use main portal for light mode
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, enableSystemTheme]);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    
    // Store theme preference in localStorage
    try {
      localStorage.setItem('theme-preference', newTheme);
    } catch (error) {
      console.warn('Unable to save theme preference:', error);
    }
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    if (!mounted) return;

    try {
      const savedTheme = localStorage.getItem('theme-preference') as ThemeName;
      if (savedTheme && savedTheme !== theme) {
        setThemeState(savedTheme);
      }
    } catch (error) {
      console.warn('Unable to load theme preference:', error);
    }
  }, [mounted]);

  const value: ThemeContextType = {
    theme,
    designTheme,
    setTheme,
    packageName: currentPackageName,
    setPackageName,
  };

  if (!mounted) {
    // Prevent hydration mismatch by not rendering theme-dependent content on server
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-${theme} package-${currentPackageName}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Hook to get theme-specific CSS classes
export function useThemeClasses() {
  const { theme, designTheme } = useTheme();

  const getClasses = (variant: 'primary' | 'secondary' | 'accent' | 'background' = 'primary') => {
    const baseClasses = {
      primary: '',
      secondary: '',
      accent: '',
      background: '',
    };

    switch (theme) {
      case 'ice-colombia':
        baseClasses.primary = 'text-emerald-500 bg-emerald-50 border-emerald-200';
        baseClasses.secondary = 'text-lime-600 bg-lime-50 border-lime-200';
        baseClasses.accent = 'text-green-600 bg-green-50 border-green-200';
        baseClasses.background = 'bg-white text-gray-900';
        break;
      case 'apex-ai':
        baseClasses.primary = 'text-blue-500 bg-blue-50 border-blue-200';
        baseClasses.secondary = 'text-violet-600 bg-violet-50 border-violet-200';
        baseClasses.accent = 'text-indigo-600 bg-indigo-50 border-indigo-200';
        baseClasses.background = 'bg-white text-slate-900';
        break;
      case 'security-portfolio':
        baseClasses.primary = 'text-cyan-400 bg-cyan-500/10 border-cyan-400/20';
        baseClasses.secondary = 'text-green-400 bg-green-500/10 border-green-400/20';
        baseClasses.accent = 'text-pink-400 bg-pink-500/10 border-pink-400/20';
        baseClasses.background = 'bg-black text-white';
        break;
      default: // main-portal
        baseClasses.primary = 'text-blue-600 bg-blue-50 border-blue-200';
        baseClasses.secondary = 'text-slate-600 bg-slate-50 border-slate-200';
        baseClasses.accent = 'text-violet-600 bg-violet-50 border-violet-200';
        baseClasses.background = 'bg-white text-slate-900';
        break;
    }

    return baseClasses[variant];
  };

  return { getClasses, theme, designTheme };
}

// Theme switcher component
export function ThemeSwitcher({
  className,
  showLabels = false,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  const { theme, setTheme } = useTheme();

  const themes: { value: ThemeName; label: string; description: string }[] = [
    { value: 'main-portal', label: 'Portal', description: 'Default portal theme' },
    { value: 'ice-colombia', label: 'ICE', description: 'ICE Colombia theme' },
    { value: 'apex-ai', label: 'APEX', description: 'APEX AI Solutions theme' },
    { value: 'security-portfolio', label: 'Security', description: 'Security portfolio theme' },
  ];

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {showLabels && <span className="text-sm font-medium">Theme:</span>}
        <div className="flex rounded-lg border p-1">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => setTheme(t.value)}
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                theme === t.value
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title={t.description}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Package detector hook
export function usePackageDetection() {
  const { setPackageName } = useTheme();

  useEffect(() => {
    // Detect package based on URL or other indicators
    const detectPackage = () => {
      const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
      const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

      if (hostname.includes('apex') || pathname.includes('/apex')) {
        setPackageName('apex-website');
        return 'apex-ai';
      } else if (hostname.includes('security') || pathname.includes('/security')) {
        setPackageName('security-portfolio');
        return 'security-portfolio';
      } else if (hostname.includes('ice') || pathname.includes('/ice')) {
        setPackageName('ice-website');
        return 'ice-colombia';
      } else {
        setPackageName('main-portal');
        return 'main-portal';
      }
    };

    detectPackage();
    // useEffect should not return a value, only void or cleanup function
  }, [setPackageName]);
}