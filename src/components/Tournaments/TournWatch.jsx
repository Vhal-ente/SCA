import { ArrowUpRight, Copy, Eye, Play, Radio } from "lucide-react";
import TournamentsNav from "../Navbar/TournamentsNav";
import "./tournament-secondary.css";

const clips = [
  ["Path of Legends Championship Final", "/assets/ancient_greek.png", "860 views", "January 2026"],
  ["Warzone Open — Best Plays", "/assets/warzone_image.png", "642 views", "December 2025"],
  ["SCA Mobile Masters Highlights", "/assets/PUBG_Global_Championship2.png", "1.2K views", "November 2025"],
];

export default function TournWatch() {
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Live & replay</p><h1>Watch the tournament</h1><p>Follow participant broadcasts and catch up on highlights from Call of Duty: Warzone by HyperX.</p></div><span className="secondary-badge"><Radio/>Streams offline</span></header><section className="secondary-section"><div className="secondary-section-heading"><div><h2>Participant streams</h2><p>Approved Twitch and YouTube broadcasts appear here when participants go live.</p></div></div><div className="stream-links"><article><div><strong>StreamLabs</strong><span>No live broadcast</span></div><button type="button" aria-label="Copy StreamLabs link"><Copy/></button></article><article><div><strong>YouTube</strong><span>No live broadcast</span></div><button type="button" aria-label="Copy YouTube link"><Copy/></button></article></div></section><section className="secondary-section"><div className="secondary-section-heading"><div><h2>Tournament clips</h2><p>Recent matches, highlights, and community moments.</p></div></div><div className="clip-grid">{clips.map(([title,image,views,date]) => <article className="clip-card" key={title}><div className="clip-image"><img src={image} alt=""/><span><Play/></span></div><div className="clip-body"><h3>{title}</h3><div><span><Eye/>{views}</span><time>{date}</time></div><a href="#watch">Watch clip <ArrowUpRight/></a></div></article>)}</div></section></div></main>;
}
