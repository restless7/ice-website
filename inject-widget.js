const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app/programas');
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

for (const d of dirs) {
  if (d === 'working-holiday-alemania-2026') continue; // Already added here
  
  const pagePath = path.join(dir, d, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip if already has it
  if (content.includes('IceSchedulingWidget')) continue;
  
  // 1. Add import
  const importStatement = `import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";\n`;
  content = importStatement + content;
  
  // 2. Inject component at the end
  // Find last </div> or </IceLayoutWrapper>
  const insertComponent = `
        {/* Scheduling Widget */}
        <section className="py-20 bg-gray-50 border-t border-gray-100" id="agendar">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Listo para iniciar tu proceso?
              </h2>
              <p className="text-xl text-gray-600">
                Agenda una asesoría gratuita o asiste a nuestras charlas informativas
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
              <IceSchedulingWidget />
            </div>
          </div>
        </section>
`;

  if (content.lastIndexOf('</IceLayoutWrapper>') !== -1) {
    const splitIndex = content.lastIndexOf('</IceLayoutWrapper>');
    content = content.substring(0, splitIndex) + insertComponent + content.substring(splitIndex);
  } else if (content.lastIndexOf('</main>') !== -1) {
    const splitIndex = content.lastIndexOf('</main>');
    content = content.substring(0, splitIndex) + insertComponent + content.substring(splitIndex);
  } else {
    // just try appending before the last </div>
    const lastDivIndex = content.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      content = content.substring(0, lastDivIndex) + insertComponent + content.substring(lastDivIndex);
    }
  }
  
  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${d}`);
}
