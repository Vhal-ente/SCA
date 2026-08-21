import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NewsCard } from "@/components/News";
import { newsArticles } from "@/data/news";
import "../NewsPage/news.css";

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find(item => item.slug === slug);
  if (!article) return <Navigate to="/news" replace/>;
  const related = newsArticles.filter(item => item.slug !== slug).slice(0, 3);

  return <div className="news-page"><Navbar/><main className="article-page"><div className="article-shell">
    <Link className="back-link" to="/news"><ArrowLeft/>Back to News</Link>
    <header className="article-header"><span className="news-category">{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><time><CalendarDays/>{article.date}</time></header>
    <img className="article-cover" src={article.image} alt=""/>
    <article className="article-content">{article.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</article>
  </div><section className="related-news"><div className="container"><div className="news-section-heading"><div><p className="eyebrow">Keep reading</p><h2>Related Articles</h2></div></div><div className="news-grid">{related.map(item => <NewsCard key={item.slug} article={item}/>)}</div></div></section></main><Footer/></div>;
}
