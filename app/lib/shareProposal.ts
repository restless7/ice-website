// Professional proposal sharing utilities
export interface ShareData {
  recipientName: string;
  recipientEmail: string;
  companyName: string;
  proposalUrl: string;
  validUntil: string;
  senderName: string;
  senderEmail: string;
}

// Generate professional email template
export function generateEmailTemplate(data: ShareData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Propuesta de Transformación Digital - APEX AI Solutions</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #10b981, #059669); padding: 30px 20px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: 600; }
        .content { padding: 30px 20px; }
        .logo { width: 80px; height: 80px; background: white; border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #10b981; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; transition: transform 0.2s; }
        .cta-button:hover { transform: translateY(-2px); }
        .security-badge { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
        .highlight { color: #10b981; font-weight: 600; }
        .urgent { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">APEX</div>
            <h1>Propuesta Exclusiva de Transformación Digital</h1>
        </div>
        
        <div class="content">
            <h2>Estimado/a ${data.recipientName},</h2>
            
            <p>Es un placer presentarle nuestra <strong>propuesta personalizada de transformación digital</strong> para <span class="highlight">${data.companyName}</span>.</p>
            
            <p>Hemos diseñado una solución modular que incluye:</p>
            <ul>
                <li>🤖 <strong>Automatización de Leads y Flujo Comercial</strong> - Asistente IA multicanal</li>
                <li>📊 <strong>Panel de Desempeño de Agentes</strong> - Métricas en tiempo real</li>
                <li>🎓 <strong>Portal Estudiantil</strong> - Plataforma segura de documentos</li>
                <li>🔗 <strong>Integración ERP</strong> - Centralización de operaciones</li>
                <li>🛟 <strong>Agente de Soporte IA 24/7</strong> - Atención automática</li>
            </ul>
            
            <div class="security-badge">
                🔐 <strong>Acceso Seguro y Privado</strong><br>
                Esta propuesta ha sido generada exclusivamente para ${data.companyName} y está protegida con tecnología de encriptación avanzada.
            </div>
            
            <div style="text-align: center;">
                <a href="${data.proposalUrl}" class="cta-button">
                    📋 Ver Propuesta Completa
                </a>
            </div>
            
            <div class="urgent">
                ⏰ <strong>Propuesta válida hasta:</strong> ${new Date(data.validUntil).toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </div>
            
            <p>La propuesta incluye:</p>
            <ul>
                <li>✅ Análisis detallado de ROI proyectado</li>
                <li>✅ Cronograma de implementación paso a paso</li>
                <li>✅ Precios modulares transparentes</li>
                <li>✅ Plan de capacitación y soporte</li>
                <li>✅ Garantías y métricas de éxito</li>
            </ul>
            
            <p><strong>Próximo paso:</strong> Agende una demo técnica personalizada donde podremos mostrarle los módulos en funcionamiento y resolver todas sus preguntas.</p>
            
            <p>Quedo a su disposición para cualquier consulta.</p>
            
            <p>Saludos cordiales,<br>
            <strong>${data.senderName}</strong><br>
            <span class="highlight">APEX AI Solutions</span><br>
            📧 ${data.senderEmail}<br>
            📱 +57 300 123 4567</p>
        </div>
        
        <div class="footer">
            <p>© 2024 APEX AI Solutions | Transformación Digital con Inteligencia Artificial</p>
            <p>Este mensaje contiene información confidencial. Si no es el destinatario, por favor elimínelo.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
}

// Generate WhatsApp sharing text
export function generateWhatsAppMessage(data: ShareData): string {
  return `🚀 *Propuesta de Transformación Digital*

Estimado/a ${data.recipientName},

Le comparto nuestra propuesta exclusiva para *${data.companyName}*:

🔗 ${data.proposalUrl}

*Incluye:*
• 🤖 Automatización de Leads IA
• 📊 Panel de Agentes en Tiempo Real  
• 🎓 Portal Estudiantil Seguro
• 🔗 Integración ERP Completa
• 🛟 Soporte IA 24/7

⏰ *Válida hasta:* ${new Date(data.validUntil).toLocaleDateString('es-ES')}

¿Cuándo podemos agendar una demo técnica?

Saludos,
*${data.senderName}*
APEX AI Solutions`;
}

// Generate LinkedIn message
export function generateLinkedInMessage(data: ShareData): string {
  return `Hola ${data.recipientName},

Hemos preparado una propuesta personalizada de transformación digital para ${data.companyName} que podría generar un impacto significativo en sus operaciones.

La propuesta incluye soluciones de IA para automatización de leads, gestión de agentes, portal estudiantil y más.

¿Le interesaría revisar los detalles? Puedo compartir el enlace privado.

Saludos cordiales,
${data.senderName}
APEX AI Solutions`;
}

// Generate professional sharing summary
export function generateSharingSummary(proposalToken: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://apexdigitalsolutions.com';
  const proposalUrl = `${baseUrl}/propuesta/${proposalToken}`;
  
  return `
🎯 PROPUESTA ICE COLOMBIA - LISTA PARA COMPARTIR

📋 **Enlace Seguro:**
${proposalUrl}

📧 **Para Email:** Utilice el template HTML profesional
📱 **Para WhatsApp:** Copie el mensaje optimizado
💼 **Para LinkedIn:** Use el mensaje corporativo
📊 **QR Code:** Genere código QR para presentaciones

⏰ **Válida por:** 30 días
🔐 **Seguridad:** Token único encriptado
📈 **Tracking:** Visualizaciones automáticas

**Contenido incluido:**
✅ 5 módulos de transformación digital
✅ Precios transparentes en COP y USD
✅ Cronograma de implementación
✅ ROI proyectado y métricas
✅ Call-to-actions optimizados
  `.trim();
}

// Generate QR code data (for use with qr libraries)
export function getQRCodeData(proposalToken: string): string {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://apexdigitalsolutions.com';
  return `${baseUrl}/propuesta/${proposalToken}`;
}
