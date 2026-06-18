export const CITIES = {
  bogota: {
    name: "Bogotá",
    shortName: "Bogotá",
    slug: "bogota",
    focusText: "Asesorías especializadas desde nuestra sede en la capital",
    address: {
      streetAddress: "Calle 100 # 19-54",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO"
    },
    geo: {
      latitude: 4.6097,
      longitude: -74.0817
    },
    hasPhysicalOffice: true
  },
  medellin: {
    name: "Medellín",
    shortName: "Medellín",
    slug: "medellin",
    focusText: "Descubre tu próximo destino desde nuestra oficina en El Poblado",
    address: {
      streetAddress: "Cra 43A # 5a - 113",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      postalCode: "050022",
      addressCountry: "CO"
    },
    geo: {
      latitude: 6.2442,
      longitude: -75.5812
    },
    hasPhysicalOffice: true
  },
  cali: {
    name: "Cali",
    shortName: "Cali",
    slug: "cali",
    focusText: "Tu proyecto internacional comienza en Cali",
    address: {
      streetAddress: "Centro, Cali",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      postalCode: "760001",
      addressCountry: "CO"
    },
    geo: {
      latitude: 3.4516,
      longitude: -76.5320
    },
    hasPhysicalOffice: false
  },
  barranquilla: {
    name: "Barranquilla",
    shortName: "Barranquilla",
    slug: "barranquilla",
    focusText: "Experiencias de intercambio desde la Puerta de Oro",
    address: {
      streetAddress: "Norte-Centro Histórico",
      addressLocality: "Barranquilla",
      addressRegion: "Atlántico",
      postalCode: "080001",
      addressCountry: "CO"
    },
    geo: {
      latitude: 10.9685,
      longitude: -74.7813
    },
    hasPhysicalOffice: false
  },
  bucaramanga: {
    name: "Bucaramanga",
    shortName: "Bucaramanga",
    slug: "bucaramanga",
    focusText: "Asesorías personalizadas para universitarios en Santander",
    address: {
      streetAddress: "Carrera 45 # 56-79 Barrio Terrazas",
      addressLocality: "Bucaramanga",
      addressRegion: "Santander",
      postalCode: "680001",
      addressCountry: "CO"
    },
    geo: {
      latitude: 7.1193,
      longitude: -73.1227
    },
    hasPhysicalOffice: true
  },
  pereira: {
    name: "Pereira",
    shortName: "Pereira",
    slug: "pereira",
    focusText: "Da el salto internacional desde el Eje Cafetero",
    address: {
      streetAddress: "Centro, Pereira",
      addressLocality: "Pereira",
      addressRegion: "Risaralda",
      postalCode: "660001",
      addressCountry: "CO"
    },
    geo: {
      latitude: 4.8133,
      longitude: -75.6961
    },
    hasPhysicalOffice: false
  }
};

export const PROGRAMS = [
  { slug: "working-holiday-alemania-2026", name: "Working Holiday Alemania 2026" },
  { slug: "work-and-travel-usa", name: "Work and Travel USA" },
  { slug: "asesoria-visa-turismo-usa", name: "Asesoría Visa de Turismo USA" },
  { slug: "au-pair-usa", name: "Au Pair USA" },
  { slug: "camp-counselor", name: "Camp Counselor" },
  { slug: "canada-proyecto-vida", name: "Canadá: Tu proyecto de vida" },
  { slug: "curso-ingles", name: "Curso de Inglés" }
];

export type CitySlug = keyof typeof CITIES;
