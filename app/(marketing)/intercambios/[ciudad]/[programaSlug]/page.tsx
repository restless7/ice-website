import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, PROGRAMS, CitySlug } from "@/config/geo-seo";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { MapPinIcon, AcademicCapIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";

interface Props {
  params: {
    ciudad: string;
    programaSlug: string;
  };
}

export const revalidate = 86400; // ISR validation every 24 hours

export async function generateStaticParams() {
  const params: { ciudad: string; programaSlug: string }[] = [];
  
  Object.keys(CITIES).forEach(ciudad => {
    PROGRAMS.forEach(programa => {
      params.push({
        ciudad,
        programaSlug: programa.slug
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ciudadKey = params.ciudad as CitySlug;
  const city = CITIES[ciudadKey];
  const program = PROGRAMS.find(p => p.slug === params.programaSlug);

  if (!city || !program) return {};

  const title = `${program.name} desde ${city.name} | ICE World Team`;
  const description = `Inicia tu proceso de ${program.name} con asesores expertos en ${city.name}. ${city.focusText}. ¡Agenda tu asesoría gratuita hoy!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ice-world-team.com/intercambios/${city.slug}/${program.slug}`
    },
    openGraph: {
      title,
      description,
      locale: "es_CO",
      type: "website"
    }
  };
}

export default function GeoProgramPage({ params }: Props) {
  const ciudadKey = params.ciudad as CitySlug;
  const city = CITIES[ciudadKey];
  const program = PROGRAMS.find(p => p.slug === params.programaSlug);

  if (!city || !program) {
    notFound();
  }

  // Generate dynamic Schema JSON-LD
  const schemas: any[] = [];
  
  // Organization / LocalBusiness Schema
  if (city.hasPhysicalOffice) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `ICE World Team - Oficina ${city.name}`,
      "image": "https://ice-world-team.com/images/ice-logo.png",
      "address": {
        "@type": "PostalAddress",
        ...city.address
      },
      "geo": {
        "@type": "GeoCoordinates",
        ...city.geo
      },
      "url": `https://ice-world-team.com/intercambios/${city.slug}/${program.slug}`,
      "telephone": "+57 310 499 4800",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    });
  }

  // Course / Educational Program Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": program.name,
    "description": `Programa de ${program.name} ofrecido por ICE World Team desde ${city.name}.`,
    "provider": {
      "@type": "Organization",
      "name": "ICE World Team",
      "sameAs": "https://ice-world-team.com"
    },
    "areaServed": "CO"
  });

  return (
    <IceLayoutWrapper>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative w-full bg-gradient-to-br from-gray-900 via-brand-dark to-black min-h-screen pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              <MapPinIcon className="w-4 h-4" /> En {city.name}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tu aventura de <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">{program.name}</span> comienza aquí
            </h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-6">
              {city.focusText}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/60 mb-8">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <GlobeAmericasIcon className="w-5 h-5 text-brand-gold" /> Experiencia Internacional
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <AcademicCapIcon className="w-5 h-5 text-brand-gold" /> Asesoría Expertos
              </span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <MapPinIcon className="w-5 h-5 text-brand-gold" /> {city.hasPhysicalOffice ? "Oficina Presencial o Virtual" : "Asesoría Virtual Premium"}
              </span>
            </div>
          </div>

          <IceSchedulingWidget 
            sourceCTA={`GEO Page: ${city.name}`} 
            preselectedProgramId={program.name}
            lockProgram={true}
            geoCity={city.name}
          />
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
