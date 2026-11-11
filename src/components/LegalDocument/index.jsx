import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Markdown from "@/components/Markdown";
import { useSiteContent } from "@/hooks/useApi";
import { newsDate } from "@/lib/news";
import "@/pages/TermsPage/terms.css";

// The console starts every legal page with this placeholder; it is not a policy.
const PLACEHOLDER = "Add the approved legal content for this document here.";

// LegalDocument shows the version of a legal page staff published in the
// console, or the built-in page (children) until they have.
export default function LegalDocument({ slug, children }) {
  const { content, loading } = useSiteContent("website");
  const page = Array.isArray(content.legal) ? content.legal.find(item => item.slug === slug) : null;
  if (loading && !page) return children;
  if (!page || !page.content?.trim() || page.content.includes(PLACEHOLDER)) return children;
  const updated = newsDate(page.effectiveDate || page.updatedAt);
  return <div className="legal-page"><Navbar/><main><header className="legal-header"><div className="legal-container"><p className="eyebrow">Legal</p><h1>{page.title}</h1>{updated && <p className="legal-updated">Last Updated: {updated}</p>}{page.description && <p>{page.description}</p>}</div></header><article className="legal-container legal-content"><Markdown source={page.content} skipTitle/></article></main><Footer/></div>;
}
