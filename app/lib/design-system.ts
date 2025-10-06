/**
 * Unified Design System for ICE Colombia Ecosystem
 * Supports ice-website, apex-website, security-portfolio, and main-portal
 */

export interface ColorTokens {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
  accent: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;
  
  // Background colors
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundOverlay: string;
  
  // Border colors
  border: string;
  borderHover: string;
  borderFocus: string;
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface TypographyTokens {
  fontFamily: {
    sans: string[];
    mono: string[];
    display: string[];
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

export interface BorderRadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface DesignTheme {
  name: string;
  colors: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  shadows: ShadowTokens;
  borderRadius: BorderRadiusTokens;
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      linear: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
    };
  };
}

// Base tokens (shared across all themes)
const baseSpacing: SpacingTokens = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
};

const baseTypography: TypographyTokens = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    display: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '4rem',     // 64px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
};

const baseShadows: ShadowTokens = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};

const baseBorderRadius: BorderRadiusTokens = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',
};

const baseAnimations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// ICE Colombia Theme (ice-website)
export const iceColombiaTheme: DesignTheme = {
  name: 'ice-colombia',
  colors: {
    primary: '#10B981',        // Emerald-500
    primaryHover: '#059669',   // Emerald-600
    primaryActive: '#047857',  // Emerald-700
    secondary: '#34D399',      // Emerald-400
    secondaryHover: '#10B981', // Emerald-500
    accent: '#84CC16',         // Lime-500
    success: '#22C55E',        // Green-500
    warning: '#F59E0B',        // Amber-500
    danger: '#EF4444',         // Red-500
    info: '#3B82F6',           // Blue-500
    
    textPrimary: '#111827',    // Gray-900
    textSecondary: '#4B5563',  // Gray-600
    textMuted: '#9CA3AF',      // Gray-400
    textInverse: '#FFFFFF',
    
    background: '#FFFFFF',
    backgroundSecondary: '#F9FAFB',  // Gray-50
    backgroundTertiary: '#F3F4F6',   // Gray-100
    backgroundOverlay: 'rgba(0, 0, 0, 0.5)',
    
    border: '#E5E7EB',         // Gray-200
    borderHover: '#D1D5DB',    // Gray-300
    borderFocus: '#10B981',    // Primary
  },
  spacing: baseSpacing,
  typography: baseTypography,
  shadows: baseShadows,
  borderRadius: baseBorderRadius,
  animations: baseAnimations,
};

// APEX AI Solutions Theme (apex-website)
export const apexTheme: DesignTheme = {
  name: 'apex-ai',
  colors: {
    primary: '#3B82F6',        // Blue-500
    primaryHover: '#2563EB',   // Blue-600
    primaryActive: '#1D4ED8',  // Blue-700
    secondary: '#60A5FA',      // Blue-400
    secondaryHover: '#3B82F6', // Blue-500
    accent: '#8B5CF6',         // Violet-500
    success: '#10B981',        // Emerald-500
    warning: '#F59E0B',        // Amber-500
    danger: '#EF4444',         // Red-500
    info: '#06B6D4',           // Cyan-500
    
    textPrimary: '#0F172A',    // Slate-900
    textSecondary: '#475569',  // Slate-600
    textMuted: '#94A3B8',      // Slate-400
    textInverse: '#FFFFFF',
    
    background: '#FFFFFF',
    backgroundSecondary: '#F8FAFC',  // Slate-50
    backgroundTertiary: '#F1F5F9',   // Slate-100
    backgroundOverlay: 'rgba(15, 23, 42, 0.5)', // Slate-900 with opacity
    
    border: '#E2E8F0',         // Slate-200
    borderHover: '#CBD5E1',    // Slate-300
    borderFocus: '#3B82F6',    // Primary
  },
  spacing: baseSpacing,
  typography: baseTypography,
  shadows: baseShadows,
  borderRadius: baseBorderRadius,
  animations: baseAnimations,
};

// Security Portfolio Theme (security-portfolio)
export const securityTheme: DesignTheme = {
  name: 'security-portfolio',
  colors: {
    primary: '#00FFFF',        // Cyan
    primaryHover: '#00E6E6',   // Cyan darker
    primaryActive: '#00CCCC',  // Cyan darkest
    secondary: '#00FF88',      // Green
    secondaryHover: '#00E677', // Green darker
    accent: '#FF0080',         // Magenta
    success: '#00FF88',        // Green
    warning: '#FFAA00',        // Orange
    danger: '#FF4444',         // Red
    info: '#00AAFF',           // Blue
    
    textPrimary: '#FFFFFF',    // White
    textSecondary: '#CCCCCC',  // Light Gray
    textMuted: '#888888',      // Gray
    textInverse: '#000000',    // Black
    
    background: '#000000',     // Black
    backgroundSecondary: '#111111',  // Very Dark Gray
    backgroundTertiary: '#222222',   // Dark Gray
    backgroundOverlay: 'rgba(0, 0, 0, 0.8)',
    
    border: '#333333',         // Dark Gray
    borderHover: '#444444',    // Lighter Dark Gray
    borderFocus: '#00FFFF',    // Primary
  },
  spacing: baseSpacing,
  typography: {
    ...baseTypography,
    fontFamily: {
      sans: ['JetBrains Mono', 'Fira Code', 'monospace'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      display: ['JetBrains Mono', 'monospace'],
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 255 255 / 0.1)',
    md: '0 4px 6px -1px rgb(0 255 255 / 0.15), 0 2px 4px -2px rgb(0 255 255 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 255 255 / 0.2), 0 4px 6px -4px rgb(0 255 255 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 255 255 / 0.25), 0 8px 10px -6px rgb(0 255 255 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 255 255 / 0.4)',
    inner: 'inset 0 2px 4px 0 rgb(0 255 255 / 0.1)',
  },
  borderRadius: baseBorderRadius,
  animations: baseAnimations,
};

// Main Portal Theme (ICE-Visa-Rescheduler-Bot)
export const mainPortalTheme: DesignTheme = {
  name: 'main-portal',
  colors: {
    primary: '#2563EB',        // Blue-600
    primaryHover: '#1D4ED8',   // Blue-700
    primaryActive: '#1E40AF',  // Blue-800
    secondary: '#64748B',      // Slate-500
    secondaryHover: '#475569', // Slate-600
    accent: '#7C3AED',         // Violet-600
    success: '#16A34A',        // Green-600
    warning: '#D97706',        // Amber-600
    danger: '#DC2626',         // Red-600
    info: '#0891B2',           // Cyan-600
    
    textPrimary: '#0F172A',    // Slate-900
    textSecondary: '#475569',  // Slate-600
    textMuted: '#64748B',      // Slate-500
    textInverse: '#FFFFFF',
    
    background: '#FFFFFF',
    backgroundSecondary: '#F8FAFC',  // Slate-50
    backgroundTertiary: '#F1F5F9',   // Slate-100
    backgroundOverlay: 'rgba(15, 23, 42, 0.6)',
    
    border: '#E2E8F0',         // Slate-200
    borderHover: '#CBD5E1',    // Slate-300
    borderFocus: '#2563EB',    // Primary
  },
  spacing: baseSpacing,
  typography: baseTypography,
  shadows: baseShadows,
  borderRadius: baseBorderRadius,
  animations: baseAnimations,
};

// Theme registry
export const themes = {
  'ice-colombia': iceColombiaTheme,
  'apex-ai': apexTheme,
  'security-portfolio': securityTheme,
  'main-portal': mainPortalTheme,
} as const;

export type ThemeName = keyof typeof themes;

// Theme utilities
export function getTheme(themeName: ThemeName): DesignTheme {
  return themes[themeName];
}

export function createThemeVariables(theme: DesignTheme): Record<string, string> {
  const variables: Record<string, string> = {};

  // Color variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    variables[`--color-${kebabCase(key)}`] = value;
  });

  // Spacing variables
  Object.entries(theme.spacing).forEach(([key, value]) => {
    variables[`--spacing-${key}`] = value;
  });

  // Typography variables
  variables['--font-sans'] = theme.typography.fontFamily.sans.join(', ');
  variables['--font-mono'] = theme.typography.fontFamily.mono.join(', ');
  variables['--font-display'] = theme.typography.fontFamily.display.join(', ');

  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    variables[`--text-${key}`] = value;
  });

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    variables[`--font-weight-${key}`] = value.toString();
  });

  // Shadow variables
  Object.entries(theme.shadows).forEach(([key, value]) => {
    variables[`--shadow-${key}`] = value;
  });

  // Border radius variables
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    variables[`--radius-${key}`] = value;
  });

  // Animation variables
  Object.entries(theme.animations.duration).forEach(([key, value]) => {
    variables[`--duration-${key}`] = value;
  });

  Object.entries(theme.animations.easing).forEach(([key, value]) => {
    variables[`--ease-${kebabCase(key)}`] = value;
  });

  return variables;
}

// Utility function to convert camelCase to kebab-case
function kebabCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

// CSS-in-JS utilities
export function createThemeCSS(theme: DesignTheme): string {
  const variables = createThemeVariables(theme);
  const cssVars = Object.entries(variables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  return `:root {\n${cssVars}\n}`;
}

// Component variant system
export interface ComponentVariant {
  base: string;
  variants: Record<string, Record<string, string>>;
}

export function createVariant(config: ComponentVariant) {
  return function(props: Record<string, any>) {
    let classes = config.base;

    Object.entries(config.variants).forEach(([variantName, variantConfig]) => {
      const propValue = props[variantName];
      if (propValue && variantConfig[propValue]) {
        classes += ` ${variantConfig[propValue]}`;
      }
    });

    return classes;
  };
}