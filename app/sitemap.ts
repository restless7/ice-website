import { MetadataRoute } from 'next';
import { CITIES, PROGRAMS } from '@/config/geo-seo';

const BASE_URL = 'https://ice-world-team.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/programas`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/agendar`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // Add standard program pages
  PROGRAMS.forEach(program => {
    routes.push({
      url: `${BASE_URL}/programas/${program.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Add dynamic GEO/SEO combinations
  Object.keys(CITIES).forEach(citySlug => {
    PROGRAMS.forEach(program => {
      routes.push({
        url: `${BASE_URL}/intercambios/${citySlug}/${program.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return routes;
}
