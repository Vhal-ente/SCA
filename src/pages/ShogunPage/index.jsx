import { ArrowRight, Award, Medal, Trophy } from "lucide-react";
import { createElement } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShogunGallery, ShogunHero, ShogunMark, SponsorGrid, TeamDivisionCard, UpcomingEventCard } from "@/components/Shogun";
import { shogunDivisions, shogunEvents, shogunGallery } from "@/data/shogun";
import "./shogun.css";

export default function ShogunPage() {
  return <div className="shogun-page"><Navbar/><main>
    <div className="container shogun-brand-bar"><ShogunMark compact/><span>Official SCA Sponsored Team</span></div>
    <ShogunHero/>
    <section className="shogun-section join-shogunate"><div className="container"><div><p className="shogun-eyebrow">Enter the clan</p><h2>Join the Shogunate</h2></div><div><p>Shogun Clan is a competitive esports organization focused on building elite players, strong teams, and a thriving gaming community.</p><a className="shogun-button" href="#shogun-teams">Join us <ArrowRight/></a></div></div></section>
    <section className="shogun-section shogun-surface"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Next battles</p><h2>Upcoming</h2></div></div><div className="events-row">{shogunEvents.map(event => <UpcomingEventCard key={event.title} event={event}/>)}</div></div></section>
    <section id="shogun-teams" className="shogun-section"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Competitive divisions</p><h2>Our Teams</h2></div><p>Four divisions. One banner.</p></div><div className="division-grid">{shogunDivisions.map(division => <TeamDivisionCard key={division.slug} division={division}/>)}</div></div></section>
    <section className="shogun-section achievement-section"><div className="container"><div><p className="shogun-eyebrow">The record</p><h2>Built to contend</h2></div><div className="achievement-list">{[[Trophy,"8","Tournament wins"],[Medal,"14","Podium finishes"],[Award,"5","MVP awards"]].map(([Icon,value,label]) => <div key={label}>{createElement(Icon)}<strong>{value}</strong><span>{label}</span></div>)}</div></div></section>
    <section className="shogun-section shogun-surface"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Backing the mission</p><h2>Sponsors</h2></div></div><SponsorGrid/></div></section>
    <section className="shogun-section"><div className="container"><div className="shogun-heading"><div><p className="shogun-eyebrow">Inside Shogun</p><h2>Gallery</h2></div></div><ShogunGallery images={shogunGallery}/></div></section>
    <section className="shogun-signoff"><div className="container"><ShogunMark/><div><span>Sponsored by</span><Link to="/landingpage"><img src="/assets/sca_logo.png" alt="Short Circuit Arena"/></Link></div></div></section>
  </main><Footer/></div>;
}
