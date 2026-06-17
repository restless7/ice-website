import { Metadata } from "next";
import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import { getArticles } from "@/app/lib/db-articles";
import NewsGridClient from "./NewsGridClient";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Mundo ICE | Noticias y Actualizaciones",
  description: "Descubre las últimas noticias, promociones y actualizaciones de visas de nuestros programas de intercambio en ICE World Team.",
};

// Next.js ISR setting
export const revalidate = 60; // Revalidate every 60 seconds

export default async function NewsDirectoryPage() {
  const articles = await getArticles();
  
  // Find featured article
  const featuredArticle = articles.find(a => a.is_featured) || articles[0];
  const remainingArticles = featuredArticle 
    ? articles.filter(a => a.id !== featuredArticle.id && a.slug !== featuredArticle.slug) 
    : articles;

  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-white pt-[104px]">
        
        {/* Header Title Section */}
        <section className="bg-gradient-to-br from-gray-900 to-black py-20 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Mundo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-orange">ICE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
              Todo lo que necesitas saber sobre intercambios, promociones y visas.
            </p>
          </div>
        </section>

        {/* Dynamic Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 hover:border-brand-gold/50 transition-all duration-500 flex flex-col md:flex-row hover:shadow-3xl">
                <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                  <Image 
                    src={featuredArticle.image_url || "/images/ice-hero-main.png"} 
                    alt={featuredArticle.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {featuredArticle.badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-black shadow-xl uppercase tracking-wider">
                        {featuredArticle.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[100px] -z-0"></div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <span className="bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
                      DESTACADO
                    </span>
                    <span className="text-gray-500 text-sm font-medium flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-2" />
                      {new Date(featuredArticle.published_at).toLocaleDateString('es-ES', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight group-hover:text-brand-orange transition-colors duration-300 relative z-10">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8 relative z-10">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <Link href={`/news/${featuredArticle.slug}`} className="inline-flex items-center text-white bg-gradient-to-r from-brand-orange to-brand-gold px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all w-fit group/btn relative z-10 text-lg">
                    <span>Leer Artículo Completo</span>
                    <ArrowRightIcon className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Client-side Grid with Tabs */}
        <NewsGridClient articles={remainingArticles} />

      </div>
    </IceLayoutWrapper>
  );
}
