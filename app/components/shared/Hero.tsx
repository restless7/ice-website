import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  ctaText?: string;
  ctaAction?: () => void;
  ctaHref?: string;
  overlayOpacity?: number;
  textAlign?: 'left' | 'center' | 'right';
  height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children?: React.ReactNode;
}

const heightClasses = {
  sm: 'h-[400px]',
  md: 'h-[500px]',
  lg: 'h-[600px]',
  xl: 'h-[700px]',
  full: 'min-h-screen',
};

const textAlignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  ctaText,
  ctaAction,
  ctaHref,
  overlayOpacity = 0.6,
  textAlign = 'center',
  height = 'lg',
  children
}: HeroProps) {
  const ContentElement = ctaHref ? 'a' : 'button';

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {backgroundImage && !backgroundVideo && (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover z-0"
          priority
          sizes="100vw"
        />
      )}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-dark/60 to-black/80 z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className={`relative z-20 max-w-7xl mx-auto px-6 py-20 ${textAlignClasses[textAlign]}`}>
        <div className="animate-fade-in">
          {subtitle && (
            <p className="text-brand-gold uppercase tracking-wider text-sm md:text-base font-medium mb-4 animate-slide-up">
              {subtitle}
            </p>
          )}
          
          <h1 className="font-heading text-heading-lg md:text-heading-xl text-white mb-6 animate-slide-up">
            {title}
          </h1>
          
          {description && (
            <p className="text-paragraph-lg md:text-xl text-gray-200 mb-8 max-w-3xl animate-slide-up">
              {description}
            </p>
          )}
          
          {ctaText && (
            <ContentElement
              {...(ctaHref ? { href: ctaHref } : { onClick: ctaAction })}
              className="inline-flex items-center px-8 py-4 bg-brand-gold hover:bg-brand-orange text-brand-dark font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-scale-in"
            >
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </ContentElement>
          )}
          
          {children && (
            <div className="mt-8 animate-slide-up">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="w-8 h-8 border-2 border-brand-gold rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}