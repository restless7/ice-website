import { promises as fs } from 'fs';
import path from 'path';

export interface ProgramData {
  id: string;
  name: string;
  category: string;
  description: string;
  initialInfo?: string;
  price?: string;
  duration?: string;
  requirements?: string[];
  highlights?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  metadata: {
    processingSteps?: string[];
    paymentInfo?: string;
    contactInfo?: string;
    registrationInfo?: string;
  };
}

// Extract program name from filename
export function extractProgramName(filename: string): string {
  const match = filename.match(/FAQ Servicios ICE_(.+)\.csv$/);
  if (match) {
    return match[1]
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Handle special cases
  if (filename.includes('CURSO DE INGLÉS')) return 'Curso de Inglés';
  if (filename.includes('SUMMER WAT')) return 'Summer Work and Travel';
  if (filename.includes('WINTER WAT')) return 'Winter Work and Travel';
  if (filename.includes('SPRING WAT')) return 'Spring Work and Travel';
  
  return filename.replace('.csv', '').replace('FAQ Servicios ICE_', '');
}

// Generate slug from program name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

// Parse CSV content
export function parseCSVContent(content: string): { [key: string]: string } {
  const lines = content.split('\n');
  const data: { [key: string]: string } = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Split by pipe and remove the line number
    const parts = line.split('|').slice(1);
    if (parts.length >= 2) {
      const key = parts[1]?.trim();
      const value = parts[2]?.trim();
      
      if (key && value && key !== 'Unnamed: 1' && value !== 'Unnamed: 2') {
        data[key] = value.replace(/^"(.*)"$/, '$1'); // Remove surrounding quotes
      }
    }
  }
  
  return data;
}

// Extract structured program data
export function extractProgramData(rawData: { [key: string]: string }, filename: string): ProgramData {
  const name = extractProgramName(filename);
  const slug = generateSlug(name);
  
  // Determine category based on program type
  const category = determineCategory(name);
  
  // Extract price information
  const price = extractPriceInfo(rawData);
  
  // Extract requirements
  const requirements = extractRequirements(rawData);
  
  // Extract highlights
  const highlights = extractHighlights(rawData);
  
  // Build description from initial info or other relevant fields
  const description = rawData['INFO INICIAL'] || 
    rawData['OBJETO'] || 
    rawData['DESCRIPCIÓN'] || 
    `Programa de intercambio cultural ${name}`;

  return {
    id: slug,
    name,
    category,
    description: cleanText(description),
    initialInfo: rawData['INFO INICIAL'] ? cleanText(rawData['INFO INICIAL']) : undefined,
    price,
    duration: extractDuration(rawData),
    requirements,
    highlights,
    faqs: [], // Will be populated if needed
    metadata: {
      processingSteps: extractProcessingSteps(rawData),
      paymentInfo: rawData['PRECIOS/PAGOS'] ? cleanText(rawData['PRECIOS/PAGOS']) : undefined,
      contactInfo: rawData['CUENTA PAGOS'] || rawData['LINK TRANSFERENCIA'],
      registrationInfo: rawData['REGISTRO'] ? cleanText(rawData['REGISTRO']) : undefined,
    }
  };
}

function determineCategory(name: string): string {
  const lower = name.toLowerCase();
  
  if (lower.includes('inglés') || lower.includes('english')) return 'Idiomas';
  if (lower.includes('work and travel') || lower.includes('wat')) return 'Trabajo y Viaje';
  if (lower.includes('au pair')) return 'Au Pair';
  if (lower.includes('visa')) return 'Visas';
  if (lower.includes('camp')) return 'Campamentos';
  if (lower.includes('intern')) return 'Prácticas';
  if (lower.includes('escuela')) return 'Educación';
  
  return 'Otros Servicios';
}

function extractPriceInfo(rawData: { [key: string]: string }): string | undefined {
  const priceFields = ['PRECIOS/PAGOS', 'PRECIO', 'COSTO', 'INVERSIÓN'];
  
  for (const field of priceFields) {
    if (rawData[field]) {
      const priceText = rawData[field];
      // Extract numbers and currency
      const match = priceText.match(/(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?)\s*(COP|USD|cop|usd|\$)?/i);
      if (match) {
        const amount = match[1];
        const currency = match[2]?.toUpperCase() || 'COP';
        return `${amount} ${currency}`;
      }
    }
  }
  
  return undefined;
}

function extractRequirements(rawData: { [key: string]: string }): string[] {
  const requirements: string[] = [];
  
  if (rawData['REQUISITOS']) {
    const reqText = rawData['REQUISITOS'];
    // Extract bullet points or lines starting with ✅
    const matches = reqText.match(/✅[^✅\n]*/g);
    if (matches) {
      requirements.push(...matches.map(match => 
        match.replace('✅', '').trim()
      ));
    }
  }
  
  return requirements;
}

function extractHighlights(rawData: { [key: string]: string }): string[] {
  const highlights: string[] = [];
  
  // Look for highlighted features
  for (const [key, value] of Object.entries(rawData)) {
    if (key.includes('APRENDERÁS') || key.includes('INCLUYE') || key.includes('BENEFICIOS')) {
      const matches = value.match(/[1-9]️⃣[^1-9️⃣\n]*/g);
      if (matches) {
        highlights.push(...matches.map(match => 
          match.replace(/[1-9]️⃣/, '').trim()
        ));
      }
    }
  }
  
  return highlights;
}

function extractDuration(rawData: { [key: string]: string }): string | undefined {
  const durationFields = ['DURACIÓN', 'DURATION', 'TIEMPO'];
  
  for (const field of durationFields) {
    if (rawData[field]) {
      return cleanText(rawData[field]);
    }
  }
  
  // Extract from initial info
  if (rawData['INFO INICIAL']) {
    const text = rawData['INFO INICIAL'];
    const hourMatch = text.match(/(\d+)\s*horas?/i);
    if (hourMatch) {
      return `${hourMatch[1]} horas`;
    }
    
    const monthMatch = text.match(/(\d+)\s*mes(?:es)?/i);
    if (monthMatch) {
      return `${monthMatch[1]} ${monthMatch[1] === '1' ? 'mes' : 'meses'}`;
    }
  }
  
  return undefined;
}

function extractProcessingSteps(rawData: { [key: string]: string }): string[] {
  const steps: string[] = [];
  const stepFields = ['PROCESO', 'PASOS', 'INSCRIPCIÓN'];
  
  for (const field of stepFields) {
    if (rawData[field]) {
      // Extract numbered steps or bullet points
      const stepText = rawData[field];
      const matches = stepText.match(/✔️[^✔️\n]*/g);
      if (matches) {
        steps.push(...matches.map(match => 
          match.replace('✔️', '').trim()
        ));
      }
    }
  }
  
  return steps;
}

function cleanText(text: string): string {
  return text
    .replace(/\n\n+/g, '\n\n')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^\s*\|\s*/, '')
    .replace(/\s*\|\s*$/, '')
    .trim();
}

// Main function to get all program data
export async function getAllProgramData(): Promise<ProgramData[]> {
  const docsDir = path.join(process.cwd(), 'Docs');
  const files = await fs.readdir(docsDir);
  
  const csvFiles = files.filter(file => 
    file.endsWith('.csv') && 
    file.startsWith('FAQ Servicios ICE')
  );
  
  const programs: ProgramData[] = [];
  
  for (const file of csvFiles) {
    try {
      const filePath = path.join(docsDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const rawData = parseCSVContent(content);
      const programData = extractProgramData(rawData, file);
      programs.push(programData);
    } catch (error) {
      console.warn(`Failed to process ${file}:`, error);
    }
  }
  
  return programs.sort((a, b) => a.name.localeCompare(b.name));
}

// Get single program data
export async function getProgramData(slug: string): Promise<ProgramData | null> {
  const programs = await getAllProgramData();
  return programs.find(p => p.id === slug) || null;
}