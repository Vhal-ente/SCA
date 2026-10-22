import { ArrowRight, Award, Medal, Trophy } from "lucide-react";
import { createElement, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventModal, ShogunGallery, ShogunHero, ShogunMark, SponsorGrid, TeamDivisionCard, UpcomingEventCard } from "@/components/Shogun";
import { useSiteContent } from "@/hooks/useApi";
import { shogunPage } from "@/lib/shogun";
import "./shogun.css";

export default function ShogunPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { content, loading } = useSiteContent("shogun");
  if (loading) return <div className="shogun-page"><Navbar/><main/><Footer/></div>;
  const page = shogunPage(content);
  if (!page.live) return <div className="shogun-page"><Navbar/><main><section className="shogun-section"><div className="container"><ShogunMark/><h2>Shogun Clan</h2><p className="shogun-empty">The Shogun Clan page is offline right now. Please check back soon.</p></div></section></main><Footer/></div>;
  const socials = Object.entries(page.social).filter(([, url]) => /^https?:\/\//i.test(url || ""));
  const achievements = page.achievements
    ? page.achievements.map(item => [Trophy, item.title, item.detail])
    : [[Trophy,"8","Tournament wins"],[Medal,"14","Podium finishes"],[Award,"5","MVP awards"]];
  return <div className="shogun-page"><Navbar/><main>
    <div className="container shogun-brand-bar"><ShogunMark compact/><span>Official SCA Sponsored Team</span></div>
    <ShogunHero title={page.hero.title} copy={page.hero.copy}/>
    <section className="shogun-section join-shogunate"><div className="container"><div><p className="shogun-eyebrow">Enter the clan</p><h2>Join the Shogunate</h2></div><div><p>Shogun Clan is a competitive esports organization focused on building elite players, strong teams, and a thriving gaming community.</p>{page.applications && <a className="shogun-button" href="#shogun-teams">{page.hero.cta || "Join us"} <ArrowRight/></a>}</div></div></section>
    <section className="shogun-section shogun-surface"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Next battles</p><h2>Upcoming</h2></div></div>{page.events.length ? <div className="events-row">{page.events.map(event => <UpcomingEventCard key={event.title} event={{ ...event, onSelect: setSelectedEvent }}/>)}</div> : <p className="shogun-empty">New clan events are announced here.</p>}</div></section>
    <section id="shogun-teams" className="shogun-section"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Competitive divisions</p><h2>Our Teams</h2></div></div>{page.divisions.length ? <div className="division-grid">{page.divisions.map(division => <TeamDivisionCard key={division.slug} division={division}/>)}</div> : <p className="shogun-empty">Team divisions are announced here.</p>}</div></section>
    <section className="shogun-section achievement-section"><div className="container"><div><p className="shogun-eyebrow">The record</p><h2>Built to contend</h2></div><div className="achievement-list">{achievements.map(([Icon,value,label]) => <div key={label}>{createElement(Icon)}<strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="shogun-section shogun-surface"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Backing the mission</p><h2>Sponsors</h2></div></div><SponsorGrid sponsors={page.sponsors}/></div></section>
    <section className="shogun-section"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Inside Shogun</p><h2>Gallery</h2></div></div>{page.gallery.length ? <ShogunGallery images={page.gallery}/> : <p className="shogun-empty">Photos from the clan appear here.</p>}</div></section>
    <section className="shogun-signoff"><div className="container"><ShogunMark/>{socials.length > 0 && <nav className="shogun-socials" aria-label="Shogun Clan on social media">{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</nav>}<div><span>Sponsored by</span><Link to="/landingpage"><img src="/assets/sca_logo.png" alt="Short Circuit Arena"/></Link></div></div></section>
  </main><Footer/><EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)}/></div>;
}
