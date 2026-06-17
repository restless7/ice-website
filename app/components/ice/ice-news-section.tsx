import { getFeaturedArticles } from "@/app/lib/db-articles";
import IceNewsSectionClient from "./ice-news-section-client";

export default async function IceNewsSection() {
  const articles = await getFeaturedArticles(3);

  return (
    <IceNewsSectionClient articles={articles} />
  );
}