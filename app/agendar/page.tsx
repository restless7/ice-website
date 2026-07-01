import { AgendarClientView } from "./client-view";

export const revalidate = 3600; // ISR revalidation every hour

export default async function AgendarPage() {
  let programs = [];
  
  try {
    const portalUrl = process.env.NEXT_PUBLIC_PORTAL_API_URL || 'https://api.iceworldteam.com';
    const res = await fetch(`${portalUrl}/api/public/programs`, {
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      const data = await res.json();
      programs = data.data || [];
    }
  } catch (err) {
    console.error('Failed to fetch programs for ISR', err);
  }

  return <AgendarClientView programs={programs} />;
}
