'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';
import { ThemeName, getTheme } from '@/app/lib/design-system';

// Button variants using class-variance-authority
const buttonVariants = cva(
  // Base classes
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium',
    'ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'active:scale-95 hover:scale-[1.02]'
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        outline: 'border-2 bg-transparent',
        ghost: 'bg-transparent shadow-none',
        destructive: '',
        success: '',
        warning: '',
      },
      size: {
        xs: 'h-7 px-2 text-xs',
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
        xl: 'h-12 px-10 text-base',
        icon: 'h-10 w-10',
      },
      theme: {
        'main-portal': '',
        'ice-colombia': '',
        'apex-ai': '',
        'security-portfolio': '',
      },
    },
    compoundVariants: [
      // Main Portal Theme
      {
        theme: 'main-portal',
        variant: 'primary',
        class: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 shadow-md',
      },
      {
        theme: 'main-portal',
        variant: 'secondary',
        class: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-500 shadow-sm',
      },
      {
        theme: 'main-portal',
        variant: 'outline',
        class: 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-slate-500',
      },
      {
        theme: 'main-portal',
        variant: 'ghost',
        class: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-500',
      },
      {
        theme: 'main-portal',
        variant: 'destructive',
        class: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-md',
      },
      {
        theme: 'main-portal',
        variant: 'success',
        class: 'bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 shadow-md',
      },
      {
        theme: 'main-portal',
        variant: 'warning',
        class: 'bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-500 shadow-md',
      },

      // ICE Colombia Theme
      {
        theme: 'ice-colombia',
        variant: 'primary',
        class: 'bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400 shadow-lg shadow-emerald-500/25',
      },
      {
        theme: 'ice-colombia',
        variant: 'secondary',
        class: 'bg-lime-400 text-emerald-900 hover:bg-lime-500 focus-visible:ring-lime-400 shadow-md',
      },
      {
        theme: 'ice-colombia',
        variant: 'outline',
        class: 'border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white focus-visible:ring-emerald-400',
      },
      {
        theme: 'ice-colombia',
        variant: 'ghost',
        class: 'text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus-visible:ring-emerald-400',
      },
      {
        theme: 'ice-colombia',
        variant: 'destructive',
        class: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-400 shadow-md',
      },
      {
        theme: 'ice-colombia',
        variant: 'success',
        class: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-400 shadow-md',
      },
      {
        theme: 'ice-colombia',
        variant: 'warning',
        class: 'bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-400 shadow-md',
      },

      // APEX AI Theme
      {
        theme: 'apex-ai',
        variant: 'primary',
        class: 'bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-400 shadow-lg shadow-blue-500/25',
      },
      {
        theme: 'apex-ai',
        variant: 'secondary',
        class: 'bg-violet-500 text-white hover:bg-violet-600 focus-visible:ring-violet-400 shadow-md',
      },
      {
        theme: 'apex-ai',
        variant: 'outline',
        class: 'border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white focus-visible:ring-blue-400',
      },
      {
        theme: 'apex-ai',
        variant: 'ghost',
        class: 'text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 focus-visible:ring-blue-400',
      },
      {
        theme: 'apex-ai',
        variant: 'destructive',
        class: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-400 shadow-md',
      },
      {
        theme: 'apex-ai',
        variant: 'success',
        class: 'bg-emerald-500 text-white hover:bg-emerald-600 focus-visible:ring-emerald-400 shadow-md',
      },
      {
        theme: 'apex-ai',
        variant: 'warning',
        class: 'bg-amber-500 text-white hover:bg-amber-600 focus-visible:ring-amber-400 shadow-md',
      },

      // Security Portfolio Theme
      {
        theme: 'security-portfolio',
        variant: 'primary',
        class: 'bg-cyan-500 text-black hover:bg-cyan-400 focus-visible:ring-cyan-400 shadow-lg shadow-cyan-500/50',
      },
      {
        theme: 'security-portfolio',
        variant: 'secondary',
        class: 'bg-green-500 text-black hover:bg-green-400 focus-visible:ring-green-400 shadow-md',
      },
      {
        theme: 'security-portfolio',
        variant: 'outline',
        class: 'border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black focus-visible:ring-cyan-400',
      },
      {
        theme: 'security-portfolio',
        variant: 'ghost',
        class: 'text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 focus-visible:ring-cyan-400',
      },
      {
        theme: 'security-portfolio',
        variant: 'destructive',
        class: 'bg-red-500 text-white hover:bg-red-400 focus-visible:ring-red-400 shadow-md',
      },
      {
        theme: 'security-portfolio',
        variant: 'success',
        class: 'bg-green-500 text-black hover:bg-green-400 focus-visible:ring-green-400 shadow-md',
      },
      {
        theme: 'security-portfolio',
        variant: 'warning',
        class: 'bg-yellow-500 text-black hover:bg-yellow-400 focus-visible:ring-yellow-400 shadow-md',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      theme: 'main-portal',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  theme?: ThemeName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    theme = 'main-portal',
    loading = false,
    leftIcon,
    rightIcon,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, theme, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };