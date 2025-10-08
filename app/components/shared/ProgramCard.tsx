import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  price?: string;
  duration?: string;
  highlights?: string[];
  href?: string;
  category?: string;
  isPopular?: boolean;
  gradient?: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  icon,
  price,
  duration,
  highlights = [],
  href = '#',
  category,
  isPopular = false,
  gradient = 'from-brand-dark to-brand'
}: ProgramCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <Link href={href} className="group block h-full">
      {children}
    </Link>
  );

  return (
    <CardWrapper>
      <div className={`
        relative h-full bg-gradient-to-br ${gradient} 
        rounded-2xl overflow-hidden shadow-2xl 
        transform transition-all duration-500 
        hover:scale-105 hover:shadow-3xl 
        border border-white/10 backdrop-blur-sm
        ${isPopular ? 'ring-2 ring-brand-gold' : ''}
      `}>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 z-30">
            <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-sm font-semibold animate-glow">
              Popular
            </span>
          </div>
        )}

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 z-30">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}

        {/* Background Image or Icon */}
        <div className="relative h-48 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : icon ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-light/20 to-brand/20">
              <div className="w-20 h-20 text-brand-gold opacity-80">
                {icon}
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 to-brand/20" />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="font-heading text-heading-sm text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 text-paragraph-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Price and Duration */}
          <div className="flex items-center justify-between mb-4">
            {price && (
              <div className="text-brand-gold font-semibold text-lg">
                {price}
              </div>
            )}
            {duration && (
              <div className="text-gray-400 text-sm">
                {duration}
              </div>
            )}
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="space-y-2 mb-6">
              {highlights.slice(0, 3).map((highlight, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center text-brand-gold font-medium group-hover:text-white transition-colors duration-300">
            <span>Más información</span>
            <svg className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-brand-gold/20 to-transparent rounded-tl-full transform translate-x-8 translate-y-8 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
      </div>
    </CardWrapper>
  );
}