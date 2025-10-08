import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import IceNewHeroSection from "@/app/components/ice/ice-new-hero-section";
import { IceEnhancedProgramsSection } from "@/app/components/ice/ice-enhanced-programs-section";
import IceAboutSection from "@/app/components/ice/ice-about-section";
import IceExperiencesSection from "@/app/components/ice/ice-experiences-section";
import IceNewsSection from "@/app/components/ice/ice-news-section";
import IceContactSection from "@/app/components/ice/ice-contact-section";

export const metadata: Metadata = {
  title: "ICE | Explora el Mundo con Nosotros - Instituto Cultural de Educación",
  description: "Te ayudamos a vivir tu sueño de estudiar, trabajar y viajar por el mundo. Programas de intercambio cultural en USA, Canadá, Irlanda, Malta, Dubai, Inglaterra y Escocia.",
};

export default function HomePage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white">
        {/* 2.1 Hero Section - Viaja y conoce el mundo con nosotros */}
        <div className="relative w-full" id="inicio">
          <IceNewHeroSection />
        </div>

        {/* 2.2 Programs Section - ¿A cuál programa de intercambio te gustaría aplicar? */}
        <div className="relative w-full" id="programas">
          <IceEnhancedProgramsSection />
        </div>

        {/* 2.3 About ICE Section - Sobre ICE */}
        <div className="relative w-full" id="sobre-ice">
          <IceAboutSection />
        </div>

        {/* 2.4 Experiences Section - Experiencias ICE */}
        <div className="relative w-full" id="icexperiences">
          <IceExperiencesSection />
        </div>

        {/* 2.5 News Section - Mundo ICE */}
        <div className="relative w-full" id="noticias">
          <IceNewsSection />
        </div>

        {/* 2.7 Contact Section - Contáctanos */}
        <div className="relative w-full" id="contacto">
          <IceContactSection />
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
