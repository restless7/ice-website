import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Namespace, Language } from '@/app/lib/i18n-new';

/**
 * Modern useTranslations hook with namespace support
 * 
 * @param namespace - The translation namespace to load
 * @returns Translation functions and state
 */
export function useTranslations(namespace: Namespace = 'common') {
  const { t, i18n, ready } = useTranslation(namespace);
  
  const switchLanguage = async (lng: Language) => {
    console.log('🔄 useTranslations - Enhanced switching from', i18n.language, 'to', lng);
    try {
      // Update localStorage first for persistence
      if (typeof window !== 'undefined') {
        console.log('🧹 useTranslations - Setting localStorage language to:', lng);
        localStorage.setItem('i18nextLng', lng);
      }
      
      // Change language
      await i18n.changeLanguage(lng);
      console.log('✅ useTranslations - Language switched successfully to', i18n.language);
      
    } catch (error) {
      console.error('❌ useTranslations - Error switching language:', error);
    }
  };
  
  return {
    t, // Translation function
    language: i18n.language as Language, // Current language
    isReady: ready, // Loading state
    switchLanguage, // Enhanced language switcher
    isLoading: !ready, // Legacy compatibility
    currentLanguage: i18n.language as Language, // Legacy compatibility
  };
}

/**
 * Hook for multiple namespaces
 * 
 * @param namespaces - Array of namespaces to load
 * @returns Translation functions and state for multiple namespaces
 */
export function useMultipleTranslations(namespaces: Namespace[]) {
  const { t, i18n, ready } = useTranslation(namespaces);
  
  return {
    t, // Translation function that works across all namespaces
    language: i18n.language as Language,
    isReady: ready,
    switchLanguage: (lng: Language) => i18n.changeLanguage(lng),
    isLoading: !ready,
    currentLanguage: i18n.language as Language,
  };
}

/**
 * Hook for common translations (navigation, buttons, etc.)
 * 
 * @returns Common translations
 */
export function useCommonTranslations() {
  return useTranslations('common');
}

/**
 * Hook for home page translations
 * 
 * @returns Home page translations
 */
export function useHomeTranslations() {
  const result = useTranslations('home');
  
  // Enhanced debug logging
  console.log('🏠 useHomeTranslations - Current language:', result.language);
  console.log('🏠 useHomeTranslations - isReady:', result.isReady);
  console.log('🏠 useHomeTranslations - Test translation hero.title:', result.t('hero.title'));
  console.log('🏠 useHomeTranslations - Has resource:', result.t('hero.title') !== 'hero.title');
  
  // Enhanced switch language function with more debugging
  const enhancedSwitchLanguage = async (lng: Language) => {
    console.log('🔄 useHomeTranslations - Enhanced switch from', result.language, 'to', lng);
    
    try {
      // First clear any cached resources to force reload
      if (typeof window !== 'undefined') {
        console.log('🧹 useHomeTranslations - Clearing localStorage language cache');
        localStorage.setItem('i18nextLng', lng);
      }
      
      // Then switch language
      await result.switchLanguage(lng);
      
      console.log('✅ useHomeTranslations - Enhanced switch completed to:', lng);
    } catch (error) {
      console.error('❌ useHomeTranslations - Enhanced switch error:', error);
    }
  };
  
  return {
    ...result,
    switchLanguage: enhancedSwitchLanguage
  };
}

/**
 * Hook for services page translations
 * 
 * @returns Services translations
 */
export function useServicesTranslations() {
  const result = useTranslations('services');
  
  // Enhanced debug logging for services
  console.log('🔧 useServicesTranslations - Current language:', result.language);
  console.log('🔧 useServicesTranslations - isReady:', result.isReady);
  console.log('🔧 useServicesTranslations - Test hero.title:', result.t('hero.title'));
  
  return result;
}

/**
 * Helper hook for getting specific service data with fallbacks
 * 
 * @param serviceSlug - The slug of the service to retrieve
 * @returns Service data with loading state
 */
export function useServiceData(serviceSlug: string) {
  const { t, isReady, language } = useServicesTranslations();
  
  const getServiceData = useCallback(() => {
    if (!isReady) return null;
    
    try {
      const serviceData = t(`services.${serviceSlug}`, { returnObjects: true });
      
      // Ensure we have a valid service object
      if (typeof serviceData === 'object' && serviceData !== null && !Array.isArray(serviceData)) {
        return serviceData as ServiceData;
      }
    } catch (error) {
      console.error('🔧 useServiceData - Error getting service data:', error);
    }
    
    return null;
  }, [t, isReady, serviceSlug]);

  return { 
    serviceData: getServiceData(), 
    isReady, 
    language 
  };
}

/**
 * Type definitions for service data structure
 */
interface ServiceData {
  name: string;
  // Basic fields
  shortDescription?: string;
  description?: string;
  
  // Rich content fields
  heroTitle?: string;
  heroDescription?: string;
  ctaButton?: string;
  
  // Trust badges and features (backward compatible)
  trustBadges?: string[];
  features?: string[] | Array<{
    title: string;
    description: string;
  }>;
  benefits?: string[];
  
  // Rich feature sections
  featuresTitle?: string;
  featuresDescription?: string;
  
  // Components/Systems section
  componentsTitle?: string;
  componentsDescription?: string;
  components?: Array<{
    number: string;
    icon: string;
    title: string;
    description: string;
  }>;
  
  // Evolution/Learning section
  evolutionTitle?: string;
  evolutionDescription?: string;
  
  // Process section
  processTitle?: string;
  processDescription?: string;
  process?: Array<{
    step: number | string;
    title?: string;
    description: string;
  }>;
  
  // Results section
  resultsTitle?: string;
  resultsDescription?: string;
  
  // Case study
  caseStudy?: {
    badge: string;
    title: string;
    challenge: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
    };
    metrics: Array<{
      value: string;
      label: string;
      description: string;
    }>;
  };
  
  // Testimonials
  testimonials?: Array<{
    quote: string;
    author: string;
    company: string;
  }>;
  
  // Final CTA
  finalCTA?: {
    title: string;
    description: string;
    buttonText: string;
  };
  
  // Pricing
  pricing?: {
    startingAt: string;
    model: string;
  };
}

/**
 * Hook for developers page translations
 * 
 * @returns Developers page translations
 */
export function useDevelopersTranslations() {
  const result = useTranslations('developers');
  
  // Enhanced debug logging for developers
  console.log('💻 useDevelopersTranslations - Current language:', result.language);
  console.log('💻 useDevelopersTranslations - isReady:', result.isReady);
  console.log('💻 useDevelopersTranslations - Test hero.title:', result.t('hero.title'));
  
  return result;
}

/**
 * Hook for resources page translations
 * 
 * @returns Resources page translations
 */
export function useResourcesTranslations() {
  const result = useTranslations('resources');
  
  // Enhanced debug logging for resources
  console.log('📚 useResourcesTranslations - Current language:', result.language);
  console.log('📚 useResourcesTranslations - isReady:', result.isReady);
  console.log('📚 useResourcesTranslations - Test hero.title:', result.t('hero.title'));
  
  return result;
}

/**
 * Hook for company pages translations
 * 
 * @returns Company pages translations
 */
export function useCompanyTranslations() {
  const result = useTranslations('company');
  
  // Enhanced debug logging for company
  console.log('🏢 useCompanyTranslations - Current language:', result.language);
  console.log('🏢 useCompanyTranslations - isReady:', result.isReady);
  console.log('🏢 useCompanyTranslations - Test about.title:', result.t('about.title'));
  
  return result;
}

/**
 * Hook for creator funnel page translations
 * 
 * @returns Creator funnel translations
 */
export function useCreatorFunnelTranslations() {
  const result = useTranslations('creator-funnel');
  
  // Enhanced debug logging for creator funnel
  console.log('🎯 useCreatorFunnelTranslations - Current language:', result.language);
  console.log('🎯 useCreatorFunnelTranslations - isReady:', result.isReady);
  console.log('🎯 useCreatorFunnelTranslations - Test hero.headline:', result.t('hero.headline'));
  
  return result;
}

/**
 * Type helper for translation keys
 * This will help with TypeScript autocompletion once we generate types
 */
export type TranslationKey = string;

/**
 * Legacy compatibility - maintains the same interface as the old hook
 * This allows existing components to work without immediate changes
 */
export function useLegacyTranslations() {
  const { t: tCommon, ...commonRest } = useTranslations('common');
  const { t: tHome } = useTranslations('home');
  
  // Create a legacy-compatible t function that mimics the old nested structure
  const legacyT = (key: string, options?: any) => {
    // Handle nested keys like 'home.hero.title' 
    const parts = key.split('.');
    
    if (parts[0] === 'home') {
      // Remove 'home' prefix and use home namespace
      const homeKey = parts.slice(1).join('.');
      return tHome(homeKey, options);
    }
    
    if (parts[0] === 'nav' || parts[0] === 'actions' || parts[0] === 'meta') {
      // These are in common namespace
      return tCommon(key, options);
    }
    
    // Default to common namespace
    return tCommon(key, options);
  };
  
  return {
    t: legacyT,
    translations: null, // Legacy compatibility - not used in new system
    ...commonRest,
  };
}
