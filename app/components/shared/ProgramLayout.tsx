import React from 'react';
import IceNavigation from '@/app/components/ice/ice-navigation';
import IceFooter from '@/app/components/ice/ice-footer';

interface ProgramLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProgramLayout({ children, className = '' }: ProgramLayoutProps) {
  return (
    <div className={`min-h-screen bg-brand-dark text-white ${className}`}>
      <IceNavigation />
      <main className="relative">
        {children}
      </main>
      <IceFooter />
    </div>
  );
}