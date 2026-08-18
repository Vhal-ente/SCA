import { createElement, useEffect, useRef } from "react";
import { ArrowRight, CalendarDays, Shield, Trophy, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SiActivision, SiPlaystation, SiRedbull, SiTencentqq } from "react-icons/si";

export function ShogunMark({ compact = false }) {
  return <div className={`shogun-mark ${compact ? "is-compact" : ""}`}><Shield aria-hidden="true"/><div><strong>SHOGUN</strong><span>CLAN</span></div></div>;
}

export function ShogunHero() {
  return <section className="shogun-hero"><div className="container shogun-hero-content"><span className="shogun-kicker"><Trophy/>Championship victory</span><h1>Champions<br/>once again</h1><p>Shogun Clan rises through another elite tournament run—built on discipline, precision, and the will to compete until the final round.</p></div></section>;
}

export function UpcomingEventCard({ event }) {
  return <article className="shogun-event"><span>{event.category}</span><h3>{event.title}</h3><p>{event.season}</p><time><CalendarDays/>{event.date}</time><ArrowRight aria-hidden="true"/></article>;
}

export function TeamDivisionCard({ division }) {
  return <article className="division-card"><img src={division.image} alt=""/><div><span>{division.shortName}</span><h3>{division.name}</h3><p>{division.description}</p><Link className="shogun-link" to={`/shogun/${division.slug}`}>View team <ArrowRight/></Link></div></article>;
}

export function PlayerCard({ player, onSelect }) {
  return <button type="button" className="player-card" onClick={() => onSelect(player)} aria-label={`View ${player.name}, ${player.role}`}><img src={player.image} alt={`Portrait of ${player.name}`}/><span>{player.role}</span><h2>{player.ign}</h2><p>{player.name}</p></button>;
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

export function SponsorGrid() {
  const sponsors = [["Activision", SiActivision], ["Tencent", SiTencentqq], ["PlayStation", SiPlaystation], ["Red Bull", SiRedbull]];
  return <div className="shogun-sponsors"><div className="sca-sponsor"><img src="/assets/sca_logo.png" alt="Short Circuit Arena"/><span>Official sponsor</span></div>{sponsors.map(([name, Logo]) => <div className="sponsor-placeholder" key={name} title={`${name} logo placeholder`}>{createElement(Logo, { "aria-hidden": true })}<span>{name}</span></div>)}</div>;
}

export function ShogunGallery({ images }) {
  return <div className="shogun-gallery">{images.map((image, index) => <figure key={image}><img src={image} alt={`Shogun Clan gallery moment ${index + 1}`}/></figure>)}</div>;
}
