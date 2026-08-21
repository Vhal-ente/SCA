import { Instagram, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const groups = {
  SCA: [["About Us","/landingpage#about"],["How It Works","/landingpage#how-it-works"],["Tournaments","/tournaments/tournamentlist"],["Leagues","/leagues/leaguelist"],["Games","/landingpage#games"]],
  Support: [["FAQ","/landingpage#faq"],["Contact Us","mailto:info@sca.gg"],["Report an Issue","/community#report-issue"],["Community Rules","#"]],
  Legal: [["Terms of Service","/terms-of-service"],["Privacy Policy","/privacy-policy"],["Refund Policy","/refund-policy"],["Fair Play Policy","/fair-play-policy"]],
  Company: [["Careers","/careers"],["Sponsor Program","/sponsor-program"],["Press Kit","/press-kit"]],
};

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><img src="/assets/sca_logo.png" alt="Short Circuit Arena"/><p>The home of competitive gaming, tournaments, leagues, and communities.</p><div className="social-links"><a href="mailto:info@sca.gg" aria-label="Email SCA"><Mail/></a><a href="#" aria-label="SCA on Instagram"><Instagram/></a><a href="#" aria-label="SCA on YouTube"><Youtube/></a></div></div>{Object.entries(groups).map(([title,links])=><div className="footer-column" key={title}><h2>{title}</h2>{links.map(([label,href]) => href.startsWith("/") ? <Link key={label} to={href}>{label}</Link> : <a key={label} href={href}>{label}</a>)}</div>)}</div><div className="container footer-bottom"><span>© 2026 SCA. All rights reserved.</span><span>Play hard. Play fair.</span></div></footer>;
}
