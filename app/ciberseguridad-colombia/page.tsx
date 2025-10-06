import type { Metadata } from 'next'
import PageCiberseguridadICE from '@/app/components/ciberseguridad-ice/page-ciberseguridad-ice'

export const metadata: Metadata = {
  title: 'Cimientos Seguros para un Crecimiento Exponencial | ICE × Apex Ciberseguridad Colombia',
  description: 'Transformación integral de ciberseguridad para ICE Colombia con Sebastián García como líder técnico. Arquitectura segura por diseño, compliance ISO 27001, y roadmap ejecutivo de 6 meses para posicionarse como líder del mercado.',
  keywords: [
    'ciberseguridad colombia',
    'ice apex security',
    'seguridad empresarial',
    'iso 27001',
    'compliance',
    'sebastian garcia',
    'arquitectura segura',
    'transformación digital',
    'roadmap seguridad',
    'valor negocio ciberseguridad'
  ],
  authors: [{ name: 'Sebastián García', url: 'https://sebastiangarcia.dev' }],
  creator: 'Sebastián García - Lead Architect',
  publisher: 'Apex Technology Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ICE × Apex: Cimientos Seguros para un Crecimiento Exponencial',
    description: 'Roadmap ejecutivo de ciberseguridad empresarial liderado por Sebastián García. 6 meses para convertir a ICE en el proveedor más seguro y confiable del mercado colombiano.',
    url: 'https://apexsolutions.com/ice-ciberseguridad-colombia',
    siteName: 'Apex Technology Solutions',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/cybersecurity-ice-colombia-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ICE Colombia Ciberseguridad - Arquitectura Segura por Diseño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICE × Apex: Ciberseguridad Empresarial Colombia',
    description: 'Transformación integral de seguridad empresarial con ROI 1,730% y certificación ISO 27001.',
    images: ['/images/cybersecurity-ice-colombia-twitter.jpg'],
    creator: '@sebastiangarcia',
  },
  alternates: {
    canonical: 'https://apexsolutions.com/ice-ciberseguridad-colombia',
    languages: {
      'es-CO': 'https://apexsolutions.com/ice-ciberseguridad-colombia',
      'en-US': 'https://apexsolutions.com/ice-cybersecurity-colombia-en',
    },
  },
  category: 'technology',
  classification: 'Business Technology Services',
  other: {
    'business:contact_data:street_address': 'Carrera 11 #93-07, Oficina 603',
    'business:contact_data:locality': 'Bogotá',
    'business:contact_data:region': 'Cundinamarca',
    'business:contact_data:postal_code': '110221',
    'business:contact_data:country_name': 'Colombia',
  },
}

export default function ICECiberseguridadColombiaPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ICE Colombia Ciberseguridad - Cimientos Seguros para un Crecimiento Exponencial",
            "description": "Transformación integral de ciberseguridad empresarial para ICE Colombia con arquitectura segura por diseño y compliance ISO 27001.",
            "url": "https://apexsolutions.com/ice-ciberseguridad-colombia",
            "inLanguage": "es-CO",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Apex Technology Solutions",
              "url": "https://apexsolutions.com"
            },
            "about": {
              "@type": "Service",
              "name": "Consultoría en Ciberseguridad Empresarial",
              "description": "Servicios integrales de ciberseguridad, arquitectura segura, compliance ISO 27001 y transformación digital segura.",
              "provider": {
                "@type": "Organization",
                "name": "Apex Technology Solutions",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Carrera 11 #93-07, Oficina 603",
                  "addressLocality": "Bogotá",
                  "addressRegion": "Cundinamarca",
                  "postalCode": "110221",
                  "addressCountry": "CO"
                }
              }
            },
            "author": {
              "@type": "Person",
              "name": "Sebastián García",
              "jobTitle": "Lead Security Architect",
              "worksFor": {
                "@type": "Organization",
                "name": "Apex Technology Solutions"
              },
              "url": "https://sebastiangarcia.dev"
            },
            "keywords": "ciberseguridad colombia, ice apex security, seguridad empresarial, iso 27001, compliance, arquitectura segura, transformación digital",
            "dateModified": new Date().toISOString(),
            "mainEntity": {
              "@type": "Service",
              "name": "Roadmap de Ciberseguridad ICE Colombia",
              "description": "Plan ejecutivo de 6 meses para transformar la seguridad empresarial de ICE con ROI del 1,730%",
              "offers": {
                "@type": "Offer",
                "description": "Consultoría integral de ciberseguridad empresarial",
                "availability": "https://schema.org/InStock"
              }
            }
          }),
        }}
      />

      {/* Main Page Component */}
      <PageCiberseguridadICE />
    </>
  )
}
