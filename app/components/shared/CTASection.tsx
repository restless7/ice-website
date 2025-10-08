import React from 'react';
import Image from 'next/image';

interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttons?: CTAButton[];
  backgroundImage?: string;
  backgroundPattern?: boolean;
  layout?: 'centered' | 'split' | 'full';
  theme?: 'dark' | 'light' | 'gradient';
  className?: string;
}

const themeClasses = {
  dark: 'bg-brand-dark text-white',
  light: 'bg-white text-brand-dark',
  gradient: 'bg-gradient-to-br from-brand-dark via-brand to-brand-light text-white',
};

const buttonVariants = {
  primary: 'bg-brand-gold hover:bg-brand-orange text-brand-dark font-semibold',
  secondary: 'bg-brand hover:bg-brand-light text-white',
  outline: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark',
};

export default function CTASection({
  title,
  subtitle,
  description,
  buttons = [],
  backgroundImage,
  backgroundPattern = false,
  layout = 'centered',
  theme = 'gradient',
  className = ''
}: CTASectionProps) {
  return (
    <section className={`relative py-20 px-6 overflow-hidden ${className}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${themeClasses[theme]}`} />
      
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      )}

      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`
          ${layout === 'centered' ? 'text-center max-w-4xl mx-auto' : ''}
          ${layout === 'split' ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : ''}
          ${layout === 'full' ? 'w-full' : ''}
        `}>
          
          {/* Text Content */}
          <div className={layout === 'split' ? 'space-y-6' : 'space-y-8'}>
            {subtitle && (
              <p className="text-brand-gold uppercase tracking-wider text-sm md:text-base font-medium animate-slide-up">
                {subtitle}
              </p>
            )}
            
            <h2 className="font-heading text-heading-md md:text-heading-lg animate-slide-up">
              {title}
            </h2>
            
            {description && (
              <p className="text-paragraph-lg text-gray-200 max-w-2xl animate-slide-up">
                {description}
              </p>
            )}

            {/* Buttons */}
            <div className={`
              flex flex-wrap gap-4 animate-scale-in
              ${layout === 'centered' ? 'justify-center' : 'justify-start'}
            `}>
              {buttons.map((button, index) => {
                const ButtonElement = button.href ? 'a' : 'button';
                
                return (
                  <ButtonElement
                    key={index}
                    {...(button.href ? { href: button.href } : { onClick: button.onClick })}
                    className={`
                      inline-flex items-center px-8 py-4 rounded-xl 
                      transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl text-lg font-medium
                      ${buttonVariants[button.variant || 'primary']}
                    `}
                  >
                    {button.icon && (
                      <span className="mr-3">
                        {button.icon}
                      </span>
                    )}
                    {button.text}
                    <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </ButtonElement>
                );
              })}
            </div>
          </div>

          {/* Visual Element for Split Layout */}
          {layout === 'split' && (
            <div className="relative">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-brand-gold/20 to-brand-orange/20 rounded-2xl flex items-center justify-center animate-float">
                <div className="w-24 h-24 bg-brand-gold rounded-2xl flex items-center justify-center animate-glow">
                  <svg className="w-12 h-12 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-brand-gold/30 rounded-full animate-float opacity-50" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-brand-gold/10 rounded-full animate-pulse" />
      
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-full blur-3xl animate-pulse" />
    </section>
  );
}