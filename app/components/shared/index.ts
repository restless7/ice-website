// Design System
export * from '@/app/lib/design-system';

// Core Components
export { default as UnifiedNavigation } from './UnifiedNavigation';
export { default as PublicNavigation } from './PublicNavigation';
export { Button, buttonVariants } from './Button';
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './Card';

// Visual Components  
export {
  DotPattern,
  IceDotPattern,
  ApexDotPattern,
  SecurityDotPattern,
  PortalDotPattern,
  AnimatedDotPattern,
  SectionSeparator,
} from './DotPattern';

// Theme System
export {
  ThemeProvider,
  useTheme,
  useThemeClasses,
  ThemeSwitcher,
  usePackageDetection,
} from './ThemeProvider';

// Types
export type { ButtonProps } from './Button';
export type { 
  CardProps, 
  CardHeaderProps, 
  CardContentProps, 
  CardFooterProps 
} from './Card';