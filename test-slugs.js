const { generateSlug, extractProgramName } = require('./lib/csvParser.ts');

const csvFiles = [
  'FAQ Servicios ICE_ASESORÍA VISA TURISMO USA.csv',
  'FAQ Servicios ICE_AU PAIR USA.csv',
  'FAQ Servicios ICE_CAMP COUNSELOR.csv',
  'FAQ Servicios ICE_ESCUELA DE IDIOMAS USA.csv', 
  'FAQ Servicios ICE - CURSO DE INGLÉS.csv',
  'FAQ Servicios ICE_H2B.csv',
  'FAQ Servicios ICE_INTERNTRAINEE USA.csv',
  'FAQ Servicios ICE_SUMMER CAMP.csv',
  'FAQ Servicios ICE_CANADÁ TU PROYECTO DE VIDA.csv',
  'FAQ Servicios ICE - SUMMER WAT.csv'
];

console.log('Expected program slugs:');
csvFiles.forEach(file => {
  const name = extractProgramName(file);
  const slug = generateSlug(name);
  console.log(`${file} -> "${name}" -> "${slug}"`);
});