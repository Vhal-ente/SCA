import { createElement, useEffect, useRef } from "react";
import { ArrowRight, CalendarDays, Shield, Trophy, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SiActivision, SiPlaystation, SiRedbull, SiTencentqq } from "react-icons/si";

export function ShogunMark({ compact = false }) {
  return <div className={`shogun-mark ${compact ? "is-compact" : ""}`}><Shield aria-hidden="true"/><div><strong>SHOGUN</strong><span>CLAN</span></div></div>;
}

export function ShogunHero({ title, copy }) {
  return <section className="shogun-hero"><div className="container shogun-hero-content"><span className="shogun-kicker"><Trophy/>Championship victory</span><h1>{title || <>Champions<br/>once again</>}</h1><p>{copy || "Shogun Clan rises through another elite tournament run—built on discipline, precision, and the will to compete until the final round."}</p></div></section>;
}

export function UpcomingEventCard({ event }) {
  return <button type="button" className="shogun-event" onClick={() => event.onSelect(event)} aria-label={`View details for ${event.title}`}><span>{event.category}</span><h3>{event.title}</h3>{event.season && <p>{event.season}</p>}{event.date && <time><CalendarDays/>{event.date}</time>}<ArrowRight aria-hidden="true"/></button>;
}

export function EventModal({ event, onClose }) {
  const closeButton = useRef(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!event) return undefined;
    const previouslyFocused = document.activeElement;
    const onKeyDown = (keyEvent) => {
      if (keyEvent.key === "Escape") onClose();
      if (keyEvent.key === "Tab") {
        const focusable = dialog.current?.querySelectorAll("button, a, [tabindex]:not([tabindex='-1'])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (keyEvent.shiftKey && document.activeElement === first) { keyEvent.preventDefault(); last.focus(); }
        if (!keyEvent.shiftKey && document.activeElement === last) { keyEvent.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; previouslyFocused?.focus(); };
  }, [event, onClose]);
  if (!event) return null;
  return <div className="event-modal-backdrop" role="presentation" onMouseDown={(mouseEvent) => mouseEvent.target === mouseEvent.currentTarget && onClose()}><section ref={dialog} className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title"><button ref={closeButton} type="button" className="event-modal-close" onClick={onClose} aria-label="Close event details"><X/></button>{event.image && <img className="event-modal-image" src={event.image} alt={`${event.title} event artwork`}/>}<div className="event-modal-content"><p className="shogun-eyebrow">{event.category}</p><h2 id="event-modal-title">{event.title}</h2><p className="event-modal-description">{event.description}</p>{[["Date", event.date], ["Stage", event.season], ["Format", event.format], ["Location", event.location]].some(([, value]) => value) && <dl>{[["Date", event.date], ["Stage", event.season], ["Format", event.format], ["Location", event.location]].filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}<button type="button" className="shogun-button" onClick={onClose}>Got it</button></div></section></div>;
}

export function TeamDivisionCard({ division }) {
  return <article className="division-card">{division.image && <img src={division.image} alt=""/>}<div>{division.shortName && <span>{division.shortName}</span>}<h3>{division.name}</h3><p>{division.description}</p><Link className="shogun-link" to={`/shogun/${division.slug}`}>View team <ArrowRight/></Link></div></article>;
}

export function PlayerCard({ player, onSelect }) {
  return <Link className="player-card" to={`/players/${player.ign.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`} aria-label={`View ${player.name}, ${player.role}`}>{player.image ? <img src={player.image} alt={`Portrait of ${player.name}`}/> : <div className="player-card-initials" aria-hidden="true">{player.ign.slice(0, 2).toUpperCase()}</div>}<span>{player.role}</span><h2>{player.ign}</h2><p>{player.name}</p></Link>;
}

export function PlayerModal({ player, onClose }) {
  const closeButton = useRef(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!player) return undefined;
    const previouslyFocused = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = dialog.current?.querySelectorAll("button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; previouslyFocused?.focus(); };
  }, [player, onClose]);
  if (!player) return null;
  return <div className="player-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section ref={dialog} className="player-modal" role="dialog" aria-modal="true" aria-labelledby="player-modal-title"><button ref={closeButton} type="button" className="player-modal-close" onClick={onClose} aria-label="Close player details"><X/></button><div className="player-modal-copy"><span>{player.role}</span><h2 id="player-modal-title">{player.name}</h2><strong>{player.ign}</strong><p>{player.bio}</p></div><img src={player.image} alt={`Portrait of ${player.name}`}/></section></div>;
}

const placeholderSponsors = [["Activision", SiActivision], ["Tencent", SiTencentqq], ["PlayStation", SiPlaystation], ["Red Bull", SiRedbull]];

// sponsors are the console's sponsor records; without them the placeholders show.
export function SponsorGrid({ sponsors }) {
  return <div className="shogun-sponsors"><div className="sca-sponsor"><img src="/assets/sca_logo.png" alt="Short Circuit Arena"/><span>Official sponsor</span></div>{sponsors
    ? sponsors.map(sponsor => <div className="sponsor-placeholder" key={sponsor.id} title={sponsor.detail || sponsor.title}>{sponsor.imageUrl && <img src={sponsor.imageUrl} alt=""/>}<span>{sponsor.title}</span></div>)
    : placeholderSponsors.map(([name, Logo]) => <div className="sponsor-placeholder" key={name} title={`${name} logo placeholder`}>{createElement(Logo, { "aria-hidden": true })}<span>{name}</span></div>)}</div>;
}

export function ShogunGallery({ images }) {
  return <div className="shogun-gallery">{images.map((image, index) => <figure key={image}><img src={image} alt={`Shogun Clan gallery moment ${index + 1}`}/></figure>)}</div>;
}
