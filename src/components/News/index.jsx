import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export function NewsCard({ article }) {
  return <article className="news-card"><Link className="news-card-image" to={`/news/${article.slug}`}><img src={article.image} alt=""/></Link><div className="news-card-body"><span className="news-category">{article.category}</span><h2><Link to={`/news/${article.slug}`}>{article.title}</Link></h2><p>{article.excerpt}</p><div className="news-card-footer"><time><CalendarDays/>{article.date}</time><Link className="text-link" to={`/news/${article.slug}`}>Read more <ArrowRight/></Link></div></div></article>;
}

export function FeaturedArticle({ article }) {
  return <article className="featured-article"><div className="featured-image"><img src={article.image} alt=""/></div><div className="featured-copy"><span className="news-category">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><time><CalendarDays/>{article.date}</time><Link className="button" to={`/news/${article.slug}`}>Read article <ArrowRight/></Link></div></article>;
}

export function CategoryFilter({ categories, active, onChange }) {
  return <div className="category-filter" aria-label="Filter news by category">{categories.map(category => <button type="button" key={category} className={active === category ? "is-active" : ""} aria-pressed={active === category} onClick={() => onChange(category)}>{category}</button>)}</div>;
}

export function Newsletter({ title = "Never Miss an Update" }) {
  return <section className="news-newsletter"><div><h2>{title}</h2><p>Get tournament announcements, league launches, partnerships, and SCA news delivered to your inbox.</p></div><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="news-email">Email address</label><input id="news-email" type="email" required placeholder="you@example.com"/><button className="button" type="submit">Subscribe</button></form></section>;
}
