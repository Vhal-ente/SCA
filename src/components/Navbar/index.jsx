import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Tournaments", href: "/tournaments/tournamentlist", internal: true },
  { label: "Leagues", href: "/leagues/leaguelist", internal: true },
  { label: "Recruitment", href: "/recruitment", internal: true },
  { label: "Loadouts", href: "/loadouts", internal: true },
  { label: "News", href: "/news", internal: true },
  { label: "Shogun Clan", href: "/shogun", internal: true },
  { label: "Community", href: "/community", internal: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const landingPath = location.pathname === "/" ? "/" : "/landingpage";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <nav className="site-nav" aria-label="Main navigation">
      <Link to={landingPath} className="brand-link" aria-label="SCA home"><img src="/assets/sca_logo.png" alt="Short Circuit Arena" /></Link>
      <div className="desktop-nav">{navItems.map(item => item.internal ? <Link key={item.label} to={item.href}>{item.label}</Link> : <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>)}</div>
      <div className="nav-actions"><ThemeToggle/><Link className="nav-login" to="/login">Log in</Link><Link className="button button-small" to="/signup">Sign up</Link>
        <button className="menu-toggle" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>{isOpen ? <X/> : <Menu/>}</button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${isOpen ? "is-open" : ""}`}>{navItems.map(item => item.internal ? <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)}>{item.label}</Link> : <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} onClick={() => setIsOpen(false)}>{item.label}</a>)}<div className="mobile-auth"><Link to="/login">Log in</Link><Link to="/signup">Sign up</Link></div></div>
    </nav>
  </header>;
}
