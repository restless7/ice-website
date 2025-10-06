"use client";

import { ReactNode } from "react";
import { PublicNavigation, ThemeProvider } from "@/app/components/shared";
import IceFooter from "./ice-footer";

interface IceLayoutWrapperProps {
  children: ReactNode;
}

export default function IceLayoutWrapper({ children }: IceLayoutWrapperProps) {
  return (
    <ThemeProvider 
      defaultTheme="ice-colombia" 
      packageName="ice-website"
      enableThemeTransitions
    >
      <div className="min-h-screen flex flex-col">
        {/* ICE Navigation */}
        <PublicNavigation 
          packageName="ice-website" 
          theme="ice-colombia" 
        />
        
        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* ICE Footer */}
        <IceFooter />
      </div>
    </ThemeProvider>
  );
}
