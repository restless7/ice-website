'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { ThemeName } from '@/app/lib/design-system';

const cardVariants = cva(
  // Base classes
  'rounded-xl border transition-all duration-200',
  {
    variants: {
      variant: {
        default: '',
        elevated: 'shadow-lg',
        floating: 'shadow-xl',
        outlined: 'border-2',
        glass: 'backdrop-blur-lg',
      },
      theme: {
        'main-portal': 'bg-white border-slate-200 text-slate-900',
        'ice-colombia': 'bg-white border-emerald-200 text-gray-900',
        'apex-ai': 'bg-white border-blue-200 text-slate-900',
        'security-portfolio': 'bg-black/90 border-cyan-400/20 text-white',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      interactive: {
        none: '',
        hover: 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        press: 'hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer',
      },
    },
    compoundVariants: [
      // Glass effect for different themes
      {
        variant: 'glass',
        theme: 'main-portal',
        class: 'bg-white/80 border-white/20',
      },
      {
        variant: 'glass',
        theme: 'ice-colombia',
        class: 'bg-white/90 border-emerald-400/20',
      },
      {
        variant: 'glass',
        theme: 'apex-ai',
        class: 'bg-white/90 border-blue-400/20',
      },
      {
        variant: 'glass',
        theme: 'security-portfolio',
        class: 'bg-black/60 border-cyan-400/30',
      },
      // Elevated shadows for different themes
      {
        variant: 'elevated',
        theme: 'main-portal',
        class: 'shadow-slate-200',
      },
      {
        variant: 'elevated',
        theme: 'ice-colombia',
        class: 'shadow-emerald-200',
      },
      {
        variant: 'elevated',
        theme: 'apex-ai',
        class: 'shadow-blue-200',
      },
      {
        variant: 'elevated',
        theme: 'security-portfolio',
        class: 'shadow-cyan-500/20',
      },
    ],
    defaultVariants: {
      variant: 'default',
      theme: 'main-portal',
      padding: 'default',
      interactive: 'none',
    },
  }
);

const cardHeaderVariants = cva(
  'flex flex-col space-y-1.5',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4 pb-2',
        default: 'p-6 pb-4',
        lg: 'p-8 pb-4',
        xl: 'p-10 pb-4',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
);

const cardContentVariants = cva(
  '',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4 pt-0',
        default: 'p-6 pt-0',
        lg: 'p-8 pt-0',
        xl: 'p-10 pt-0',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
);

const cardFooterVariants = cva(
  'flex items-center',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-4 pt-2',
        default: 'p-6 pt-4',
        lg: 'p-8 pt-4',
        xl: 'p-10 pt-4',
      },
    },
    defaultVariants: {
      padding: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  theme?: ThemeName;
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, theme, padding, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, theme, padding, interactive }), className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardHeaderVariants({ padding }), className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardContentVariants({ padding }), className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => (
    <div ref={ref} className={cn(cardFooterVariants({ padding }), className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };