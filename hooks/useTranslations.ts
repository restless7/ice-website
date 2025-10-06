"use client";

import { useHomeTranslations } from '@/hooks/useTranslations-new';
import { useState, useEffect } from 'react';

// Compatibility layer - redirects to new i18next system
export function useTranslations() {
  const { t: homeT, language, switchLanguage, isReady } = useHomeTranslations();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const changeLanguage = async (lang: string) => {
    await switchLanguage(lang as 'es' | 'en');
  };
  
  // Compatibility function that handles nested keys
  const t = (key: string) => {
    if (!mounted || !isReady) {
      // Return empty array for array keys when not mounted
      if (key.includes('features') || key.includes('questions')) return [];
      return '';
    }
    
    // Try to get the value from the new system
    try {
      // Remove 'home.' prefix if present for the new system
      const cleanKey = key.startsWith('home.') ? key.substring(5) : key;
      const value = homeT(cleanKey);
      
      // Return the value if it exists and isn't the key itself
      if (value && value !== cleanKey) {
        return value;
      }
      
      // Return empty array for array keys when translation is not found
      if (key.includes('features') || key.includes('questions')) {
        return [];
      }
      
      return key; // Fallback to key
    } catch (error) {
      console.warn('Translation error for key:', key, error);
      return key;
    }
  };
  
  return {
    t,
    language,
    changeLanguage,
    isReady: mounted && isReady,
    translations: null // Legacy compatibility
  };
}
