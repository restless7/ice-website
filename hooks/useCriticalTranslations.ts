// hooks/useCriticalTranslations.ts
"use client";

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Namespace, Language } from '@/app/lib/i18n-new';

// Critical translation keys that should be preloaded
const CRITICAL_KEYS: Record<string, string[]> = {
  home: [
    'hero.title',
    'hero.subtitle',
    'hero.description',
    'hero.primaryButton',
    'hero.secondaryButton'
  ]
};

// Optimized fallbacks for instant display
const FALLBACK_CONTENT = {
  en: {
    'hero.title': 'Transform Your Business with',
    'hero.subtitle': 'AI-Powered Automation',
    'hero.description': 'Unlock unprecedented efficiency and growth with our cutting-edge AI solutions. From intelligent automation to predictive analytics, we help businesses scale faster and smarter.',
    'hero.primaryButton': 'Explore AI Solutions',
    'hero.secondaryButton': 'Schedule Consultation'
  },
  es: {
    'hero.title': 'Transforma tu Negocio con',
    'hero.subtitle': 'Automatización Potenciada por IA',
    'hero.description': 'Desbloquea eficiencia y crecimiento sin precedentes con nuestras soluciones de IA de vanguardia. Desde automatización inteligente hasta análisis predictivos, ayudamos a las empresas a escalar más rápido e inteligente.',
    'hero.primaryButton': 'Explorar Soluciones IA',
    'hero.secondaryButton': 'Programar Consultoría'
  }
} as const;

export interface CriticalTranslationConfig {
  namespace?: Namespace;
  criticalKeys?: string[];
  fallbackLang?: 'en' | 'es';
  enableSmartFallback?: boolean;
}

/**
 * Hook for critical translations with instant fallback and smooth transitions
 */
export function useCriticalTranslations({
  namespace = 'home',
  criticalKeys = CRITICAL_KEYS[namespace] || [],
  fallbackLang,
  enableSmartFallback = true
}: CriticalTranslationConfig = {}) {
  
  const { t: originalT, i18n, ready } = useTranslation(namespace);
  const [isTranslationsReady, setIsTranslationsReady] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  
  // Detect current language with fallback detection
  const currentLang = useMemo(() => {
    if (i18n.language?.startsWith('es')) return 'es';
    if (i18n.language?.startsWith('en')) return 'en';
    
    // Browser language detection
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language;
      if (browserLang.startsWith('es')) return 'es';
    }
    
    return fallbackLang || 'en';
  }, [i18n.language, fallbackLang]);
  
  // Smart ready state management
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (ready && !hasLoadedOnce) {
      // First time loading - add small delay for smoother transition
      timeoutId = setTimeout(() => {
        setIsTranslationsReady(true);
        setHasLoadedOnce(true);
      }, 150);
    } else if (ready && hasLoadedOnce) {
      // Subsequent loads (language switching) - immediate
      setIsTranslationsReady(true);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [ready, hasLoadedOnce]);
  
  // Enhanced translation function with smart fallback
  const t = useCallback((key: string, options?: any) => {
    // If translations are ready, try to get the translation first
    if (isTranslationsReady && ready) {
      const translated = originalT(key, options);
      
      // Check if we got a valid translation (not just the key back)
      if (translated && translated !== key && typeof translated === 'string') {
        return translated;
      }
    }
    
    // Fallback to our optimized content
    if (enableSmartFallback) {
      const fallbackContent = FALLBACK_CONTENT[currentLang];
      const fallbackValue = fallbackContent?.[key as keyof typeof fallbackContent];
      
      if (fallbackValue) {
        return fallbackValue;
      }
    }
    
    // Last resort - return the key or empty string
    return key;
  }, [originalT, isTranslationsReady, ready, currentLang, enableSmartFallback]);
  
  // Preload critical translations
  useEffect(() => {
    if (ready && criticalKeys.length > 0) {
      // Preload critical keys to warm the cache
      criticalKeys.forEach(key => {
        originalT(key);
      });
    }
  }, [ready, criticalKeys, originalT]);
  
  // Language switching function with preloading
  const switchLanguage = useCallback(async (lng: Language) => {
    try {
      // Set loading state
      setIsTranslationsReady(false);
      
      // Update localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('i18nextLng', lng);
      }
      
      // Change language
      await i18n.changeLanguage(lng);
      
      // Preload critical keys for the new language
      if (criticalKeys.length > 0) {
        await Promise.all(
          criticalKeys.map(key => 
            new Promise(resolve => {
              const translated = originalT(key);
              resolve(translated);
            })
          )
        );
      }
      
      // Mark as ready
      setIsTranslationsReady(true);
      
    } catch (error) {
      console.error('Error switching language:', error);
      // Still mark as ready to prevent hanging
      setIsTranslationsReady(true);
    }
  }, [i18n, originalT, criticalKeys]);
  
  return {
    t,
    isReady: isTranslationsReady,
    isLoading: !isTranslationsReady,
    language: currentLang,
    switchLanguage,
    hasLoadedOnce,
    // Additional utilities
    isCriticalKey: (key: string) => criticalKeys.includes(key),
    hasFallback: (key: string) => Boolean(
      FALLBACK_CONTENT[currentLang]?.[key as keyof typeof FALLBACK_CONTENT[typeof currentLang]]
    )
  };
}

/**
 * Specialized hook for home hero section
 */
export function useHeroCriticalTranslations() {
  return useCriticalTranslations({
    namespace: 'home',
    criticalKeys: CRITICAL_KEYS.home,
    enableSmartFallback: true
  });
}

/**
 * Hook for preloading translations before they're needed
 */
export function useTranslationPreloader(namespace: Namespace, keys: string[] = []) {
  const { t } = useTranslation(namespace);
  
  useEffect(() => {
    // Preload in the background
    const preloadTimer = setTimeout(() => {
      keys.forEach(key => {
        try {
          t(key); // This will load and cache the translation
        } catch (error) {
          // Silent fail for preloading
        }
      });
    }, 100);
    
    return () => clearTimeout(preloadTimer);
  }, [t, keys]);
}
