import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CategoryFilter, NewsCard, Newsletter } from "@/components/News";
import { matchesCategory, newsArticles, newsCategories } from "@/data/news";
import "./news.css";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredArticles = useMemo(() => newsArticles.filter(article => article.featured), []);
  const articles = useMemo(() => newsArticles.filter(article => !article.featured && matchesCategory(article, activeCategory)), [activeCategory]);

  return <div className="news-page"><Navbar/><main>
    <header className="news-page-header"><div className="container"><p className="eyebrow">SCA Journal</p><h1>News &amp; Updates</h1><p>Stay up to date with the latest tournaments, leagues, partnerships, announcements, and community updates from SCA.</p></div></header>
    <section className="news-section featured-news-section"><div className="container"><p className="section-label">Featured news</p><div className="featured-news-grid">{featuredArticles.map(article => <NewsCard key={article.slug} article={article}/>)}</div></div></section>
    <section className="news-section latest-news"><div className="container"><div className="news-section-heading"><div><p className="eyebrow">From the arena</p><h2>Latest News</h2></div><CategoryFilter categories={newsCategories} active={activeCategory} onChange={setActiveCategory}/></div>{articles.length ? <div className="news-grid">{articles.map(article => <NewsCard key={article.slug} article={article}/>)}</div> : <p className="empty-news">No articles in this category yet.</p>}</div></section>
    <section className="news-section"><div className="container"><Newsletter/></div></section>
  </main><Footer/></div>;
}
