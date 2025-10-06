import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import IceHeroSection from "@/app/components/ice/ice-hero-section";
import IceProgramsSection from "@/app/components/ice/ice-programs-section";
import IceExperienceSection from "@/app/components/ice/ice-experience-section";
import IceFinalCTASection from "@/app/components/ice/ice-final-cta-section";

export const metadata: Metadata = {
  title: "ICE | Explora el Mundo con Nosotros - Instituto Cultural de Educación",
  description: "La experiencia no es lo que le sucede a un hombre, es lo que un hombre hace con lo que le sucede. Descubre programas educativos internacionales con ICE.",
};

export default function HomePage() {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
        {/* Hero Section */}
        <div className="relative w-full" id="inicio">
          <IceHeroSection />
        </div>

        {/* Programs Section */}
        <div className="relative w-full" id="programas">
          <IceProgramsSection />
        </div>

        {/* Experience Section */}
        <div className="relative w-full" id="icexperiences">
          <IceExperienceSection />
        </div>

        {/* Final CTA Section */}
        <div className="relative w-full" id="contacto">
          <IceFinalCTASection />
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
