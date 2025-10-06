import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

// Define supported languages
export const languages = ['en', 'es'] as const;
export type Language = (typeof languages)[number];

// Define namespaces (only ones that exist)
export const namespaces = [
  'common',
  'home', 
  'services',
  'developers',
  'resources',
  'company',
  'creator-funnel'
] as const;
export type Namespace = (typeof namespaces)[number];

// Default language and namespace
export const defaultLanguage: Language = 'en';
export const defaultNamespace: Namespace = 'common';

// Cookie name for language persistence
const COOKIE_NAME = 'NEXT_LOCALE';

i18n
  // Load translations from JSON files
  .use(resourcesToBackend((language: string, namespace: string) => {
    return import(`../public/locales/${language}/${namespace}.json`);
  }))
  // Language detection
  .use(LanguageDetector)
  // React integration
  .use(initReactI18next)
  // Initialize
  .init({
    // Language settings
    lng: defaultLanguage,
    fallbackLng: 'en',
    supportedLngs: languages,
    
    // Namespace settings
    defaultNS: defaultNamespace,
    ns: namespaces,
    
    // Detection settings
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: COOKIE_NAME,
      lookupQuerystring: 'lng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0
    },

    // Interpolation settings
    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // React settings
    react: {
      useSuspense: false, // Prevent SSR issues
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },

    // Preload namespaces for better performance
    preload: ['es', 'en'],
    
    // Load namespaces on demand
    partialBundledLanguages: true,
  });

export default i18n;
