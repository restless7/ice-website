import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, getFeaturedArticles } from "@/app/lib/db-articles";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { CalendarDaysIcon, ArrowLeftIcon, ShareIcon } from "@heroicons/react/24/outline";

interface Props {
  params: {
    slug: string;
  };
}

// Generate dynamic metadata for SEO and Open Graph
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: "Artículo no encontrado | ICE World Team",
      description: "El artículo que buscas no existe o ha sido movido."
    };
  }
  
  return {
    title: `${article.title} | Mundo ICE`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Mundo ICE`,
      description: article.excerpt,
      images: [{ url: article.image_url, width: 1200, height: 630 }],
    }
  };
}

export const revalidate = 60; // ISR validation every 60 seconds

export default async function SingleArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Get some related articles
  const allFeatured = await getFeaturedArticles(4);
  const relatedArticles = allFeatured.filter(a => a.id !== article.id).slice(0, 3);
  
  const shareUrl = `https://ice-world-team.com/news/${article.slug}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`Mira este artículo de Mundo ICE: ${article.title} ${shareUrl}`)}`;

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white pt-[104px] pb-24">
        
        {/* Progress Bar (Optional UI enhancement) */}
        <div className="fixed top-[104px] left-0 right-0 h-1 bg-gray-100 z-50">
          <div className="h-full bg-brand-orange w-0" id="reading-progress"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          
          <Link href="/news" className="inline-flex items-center text-gray-500 hover:text-brand-orange font-medium mb-8 transition-colors group">
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Noticias
          </Link>
          
          {/* Article Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-brand-gold/10 text-brand-gold px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
                {article.category}
              </span>
              <span className="text-gray-500 text-sm font-medium flex items-center">
                <CalendarDaysIcon className="w-4 h-4 mr-2" />
                {new Date(article.published_at).toLocaleDateString('es-ES', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              {article.excerpt}
            </p>
          </header>
          
          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
            <Image 
              src={article.image_url || "/images/ice-hero-main.png"} 
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Main Content & Sidebar */}
          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Social Share Sidebar (Desktop) */}
            <div className="hidden md:block w-16 flex-shrink-0">
              <div className="sticky top-40 flex flex-col gap-4 items-center">
                <a 
                  href={whatsappShareUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                  title="Compartir en WhatsApp"
                >
                  <ShareIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Article Body using Tailwind Typography */}
            <article className="prose prose-lg md:prose-xl prose-slate max-w-none lg:max-w-[800px] prose-headings:font-black prose-headings:text-gray-900 prose-a:text-brand-orange hover:prose-a:text-brand-gold prose-img:rounded-2xl flex-1">
              {/* Note: In a real implementation with a CMS, this might be rendered via marked or a RichText component. */}
              {/* For now, we assume 'content' might be pre-rendered HTML or we just display the text block */}
              <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
              
              {/* Mid-article or end-article mobile callout */}
              <div className="lg:hidden mt-12 bg-gradient-to-br from-brand-dark to-gray-900 p-8 rounded-2xl text-center shadow-xl border border-brand-gold/20">
                <h4 className="text-2xl font-bold text-white mb-3">
                  ¿Interesado en {article.category}?
                </h4>
                <p className="text-white/80 mb-6">Da el primer paso hacia tu experiencia internacional. Nuestro equipo está listo para asesorarte.</p>
                <Link 
                  href={`/agendar?programId=${encodeURIComponent(article.category)}&source=news_article`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-orange text-gray-900 font-bold rounded-xl hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  Agendar Asesoría Gratuita
                </Link>
              </div>
            </article>

            {/* Sticky Contextual Sidebar (Desktop) */}
            <div className="hidden lg:block w-[320px] flex-shrink-0">
              <div className="sticky top-40 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-2xl rounded-3xl p-8 text-center overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-gold to-brand-orange"></div>
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CalendarDaysIcon className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  ¿Interesado en {article.category}?
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Da el primer paso hacia tu experiencia internacional. Agenda una sesión personalizada hoy mismo.
                </p>
                <Link 
                  href={`/agendar?programId=${encodeURIComponent(article.category)}&source=news_article`}
                  className="block w-full px-6 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-brand-orange hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Agendar Asesoría
                </Link>
                <p className="text-xs text-gray-400 mt-4">Sesión virtual gratuita de 30 min</p>
              </div>
            </div>
            
          </div>
          
          {/* Social Share (Mobile) */}
          <div className="md:hidden mt-12 pt-8 border-t border-gray-100 flex justify-center">
            <a 
              href={whatsappShareUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 px-6 py-3 rounded-full text-white font-bold hover:bg-green-600 transition-colors shadow-lg"
            >
              <ShareIcon className="w-5 h-5" />
              Compartir en WhatsApp
            </a>
          </div>
        </div>
        
        {/* Related Articles Footer */}
        {relatedArticles.length > 0 && (
          <section className="mt-24 pt-20 border-t border-gray-100 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-black text-gray-900 mb-10 text-center">Artículos Relacionados</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map(related => (
                  <Link key={related.id || related.slug} href={`/news/${related.slug}`} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image 
                        src={related.image_url} 
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-brand-gold font-bold mb-2 uppercase">{related.category}</div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2 mb-3">
                        {related.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2 text-sm">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
      </div>
    </IceLayoutWrapper>
  );
}
