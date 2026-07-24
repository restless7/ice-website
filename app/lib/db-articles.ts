export interface Article {
  id?: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
  category: string;
  badge?: string;
  image_url: string;
  is_featured?: boolean;
}

export const fallbackArticles: Article[] = [
  {
    id: 1,
    slug: "nuevos-destinos-2024",
    title: "Nuevos Destinos de Intercambio para 2024",
    excerpt: "ICE amplía su red de programas con nuevos destinos en Asia y Europa, ofreciendo más oportunidades para nuestros estudiantes.",
    content: "## Nuevos destinos increíbles\n\nEste 2024, ICE se complace en anunciar la expansión de nuestra red de programas de intercambio. Ahora podrás estudiar en destinos exclusivos como Tokio, Seúl, y nuevas ciudades en Alemania y Suiza.\n\n### ¿Por qué Asia y Europa?\n\nCreemos en ofrecer a nuestros estudiantes la mejor experiencia de inmersión cultural y académica, y estos nuevos destinos destacan por su alta calidad de vida, tecnología y sistemas educativos de vanguardia.",
    published_at: "2024-01-15T10:00:00Z",
    category: "Noticias",
    badge: "¡NUEVO!",
    image_url: "/images/ice-hero-main.png",
    is_featured: true,
  },
  {
    id: 2,
    slug: "descuento-work-travel-2024",
    title: "¡Descuento del 15% en Work and Travel USA 2024!",
    excerpt: "Aprovecha nuestra promoción especial para la temporada de verano 2024. Aplica antes del 31 de enero y obtén un descuento exclusivo.",
    content: "## ¡Tu verano en Estados Unidos al mejor precio!\n\nNo dejes pasar esta oportunidad. Aplica ahora a nuestro programa Work and Travel USA 2024 y recibe un 15% de descuento en el fee del programa.\n\n### Requisitos para aplicar:\n- Ser estudiante universitario activo.\n- Nivel de inglés intermedio (B1/B2).\n- Tener entre 18 y 28 años.\n\n¡Inicia tu proceso hoy mismo y asegura tu cupo!",
    published_at: "2024-01-10T09:00:00Z",
    category: "Promociones",
    badge: "¡OFERTA LIMITADA!",
    image_url: "/images/news/promo-work-travel.jpg",
    is_featured: true,
  },
  {
    id: 3,
    slug: "actualizacion-requisitos-visa-j1",
    title: "Actualizaciones en requisitos de visa J-1 para 2024",
    excerpt: "Te informamos sobre los cambios más recientes en los requisitos de visa J-1 para programas de intercambio cultural en Estados Unidos.",
    content: "## Cambios importantes en el proceso de visado J-1\n\nEl Departamento de Estado de los EE. UU. ha emitido nuevas directrices para los solicitantes de la visa J-1 en 2024.\n\n1. **Entrevistas virtuales**: Ahora algunos procesos permitirán entrevistas preliminares virtuales.\n2. **Documentación**: Es mandatorio presentar el formulario DS-2019 original con firma en tinta húmeda o firma electrónica certificada.\n\nMantente en contacto con tu asesor ICE para más detalles.",
    published_at: "2024-01-08T14:30:00Z",
    category: "Actualizaciones de Visa",
    badge: "IMPORTANTE",
    image_url: "/images/news/visa-updates.jpg",
    is_featured: false,
  },
  {
    id: 4,
    slug: "becas-estudio-canada",
    title: "Becas parciales disponibles para programas en Canadá",
    excerpt: "Conoce nuestras nuevas becas parciales para estudiar en colleges públicos de Canadá. Hasta $2000 CAD de descuento disponible.",
    content: "## Haz realidad tu sueño canadiense\n\nICE, en alianza con los mejores Colleges públicos de Canadá, ofrece becas parciales de hasta $2,000 CAD para estudiantes latinoamericanos excepcionales.\n\n### ¿Cómo aplicar a la beca?\nDebes enviar tu ensayo de motivación y tu historial académico antes de la fecha límite. Contáctanos para recibir el paquete de postulación completo y comienza tu viaje hacia Canadá.",
    published_at: "2024-01-05T11:15:00Z",
    category: "Becas",
    badge: "20% OFF",
    image_url: "/images/news/becas-canada.jpg",
    is_featured: true,
  },
  {
    id: 5,
    slug: "nueva-oficina-medellin",
    title: "ICE abre nueva oficina en Medellín",
    excerpt: "Estamos expandiendo nuestros servicios con una nueva oficina en Medellín para atender mejor a nuestros clientes de Antioquia.",
    content: "## ¡Hola, Medellín!\n\nNos complace anunciar la apertura de nuestra nueva sede en Medellín, Colombia. Esta expansión nos permite estar más cerca de nuestros estudiantes paisas, brindándoles asesoría personalizada y directa en su propia ciudad.\n\nVen a visitarnos en El Poblado y descubre todos los programas de intercambio que tenemos para ti. ¡Te esperamos!",
    published_at: "2024-01-03T16:45:00Z",
    category: "Noticias",
    badge: "NUEVA OFICINA",
    image_url: "/images/news/oficina-medellin.jpg",
    is_featured: false,
  }
];

export async function getArticles(): Promise<Article[]> {
  return fallbackArticles;
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  return fallbackArticles.filter(a => a.is_featured).slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return fallbackArticles.find(a => a.slug === slug) || null;
}
