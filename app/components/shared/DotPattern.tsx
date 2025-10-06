'use client';

import { useId } from 'react';
import { cn } from '@/app/lib/utils';
import { ThemeName, getTheme } from '@/app/lib/design-system';

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  theme?: ThemeName;
  backgroundColor?: string;
  opacity?: number;
  [key: string]: any;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  theme = 'main-portal',
  backgroundColor,
  opacity = 0.5,
  ...props
}: DotPatternProps) {
  const id = useId();
  const designTheme = getTheme(theme);

  // Theme-specific dot colors and patterns
  const getThemeStyles = () => {
    switch (theme) {
      case 'ice-colombia':
        return {
          dotColor: designTheme.colors.primary,
          gradientStops: [
            { offset: '0%', color: designTheme.colors.primary, opacity: 0.6 },
            { offset: '50%', color: designTheme.colors.secondary, opacity: 0.4 },
            { offset: '100%', color: designTheme.colors.accent, opacity: 0.3 },
          ],
          background: backgroundColor || 'transparent',
        };
      case 'apex-ai':
        return {
          dotColor: designTheme.colors.primary,
          gradientStops: [
            { offset: '0%', color: designTheme.colors.primary, opacity: 0.5 },
            { offset: '50%', color: designTheme.colors.secondary, opacity: 0.3 },
            { offset: '100%', color: designTheme.colors.accent, opacity: 0.2 },
          ],
          background: backgroundColor || 'transparent',
        };
      case 'security-portfolio':
        return {
          dotColor: '#00FFFF', // Cyan
          gradientStops: [
            { offset: '0%', color: '#00FFFF', opacity: 0.4 },
            { offset: '50%', color: '#00FF88', opacity: 0.3 },
            { offset: '100%', color: '#FF0080', opacity: 0.2 },
          ],
          background: backgroundColor || 'transparent',
        };
      default: // main-portal
        return {
          dotColor: designTheme.colors.primary,
          gradientStops: [
            { offset: '0%', color: designTheme.colors.primary, opacity: 0.3 },
            { offset: '100%', color: designTheme.colors.secondary, opacity: 0.2 },
          ],
          background: backgroundColor || 'transparent',
        };
    }
  };

  const themeStyles = getThemeStyles();
  const gradientId = `dot-gradient-${id}`;
  const patternId = `dot-pattern-${id}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className
      )}
      {...props}
    >
      <defs>
        {/* Gradient definition */}
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          {themeStyles.gradientStops.map((stop, index) => (
            <stop
              key={index}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity * opacity}
            />
          ))}
        </radialGradient>

        {/* Pattern definition */}
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            cx={cx}
            cy={cy}
            r={cr}
            fill={`url(#${gradientId})`}
          />
        </pattern>
      </defs>

      {/* Background if specified */}
      {backgroundColor && (
        <rect width="100%" height="100%" fill={backgroundColor} />
      )}

      {/* Pattern overlay */}
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
    </svg>
  );
}

// Specialized theme variants for easy usage
export function IceDotPattern(props: Omit<DotPatternProps, 'theme'>) {
  return <DotPattern {...props} theme="ice-colombia" />;
}

export function ApexDotPattern(props: Omit<DotPatternProps, 'theme'>) {
  return <DotPattern {...props} theme="apex-ai" />;
}

export function SecurityDotPattern(props: Omit<DotPatternProps, 'theme'>) {
  return <DotPattern {...props} theme="security-portfolio" />;
}

export function PortalDotPattern(props: Omit<DotPatternProps, 'theme'>) {
  return <DotPattern {...props} theme="main-portal" />;
}

// Enhanced variants with animations
export function AnimatedDotPattern({
  animationType = 'pulse',
  animationDuration = '3s',
  ...props
}: DotPatternProps & {
  animationType?: 'pulse' | 'fade' | 'glow';
  animationDuration?: string;
}) {
  const animationClass = {
    pulse: 'animate-pulse',
    fade: 'animate-fade-in-out',
    glow: 'animate-glow',
  }[animationType];

  return (
    <div className={cn('relative', animationClass)} style={{ animationDuration }}>
      <DotPattern {...props} />
    </div>
  );
}

// Section separator with themed dot patterns (replacing the old BrandSystemsSectionSeparator)
export function SectionSeparator({
  theme = 'main-portal',
  className,
  height = 'h-32',
}: {
  theme?: ThemeName;
  className?: string;
  height?: string;
}) {
  return (
    <div className={cn('relative flex w-full items-center justify-center my-8 lg:my-16', height, className)}>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        theme={theme}
        className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        opacity={0.8}
      />
    </div>
  );
}

export default DotPattern;