import { ArrowUpRight, Play, Radio } from "lucide-react";
import TournamentsNav from "../Navbar/TournamentsNav";
import { CompetitionMissing } from "./TournOverview";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./tournament-secondary.css";

// WatchLinks shows a competition's streams and replays as staff set them in the console.
export function WatchLinks({ competition }) {
  const links = competition.watchLinks || {};
  const streams = [["YouTube", links.youtube], ["Twitch", links.twitch]].filter(([, url]) => url);
  const replays = links.replays || [];
  return <>
    <section className="secondary-section"><div className="secondary-section-heading"><div><h2>Live streams</h2><p>Official broadcasts for {competition.name}.</p></div></div>{streams.length ? <div className="stream-links">{streams.map(([name, url]) => <article key={name}><div><strong>{name}</strong><span>Official stream</span></div><a href={url} target="_blank" rel="noreferrer" aria-label={`Watch on ${name}`}><ArrowUpRight/></a></article>)}</div> : <p className="secondary-empty">Stream links are posted here when the broadcast is scheduled.</p>}</section>
    <section className="secondary-section"><div className="secondary-section-heading"><div><h2>Replays &amp; highlights</h2><p>Recent matches and moments.</p></div></div>{replays.length ? <div className="clip-grid">{replays.map(clip => <article className="clip-card" key={clip.url}><div className="clip-image"><span><Play/></span></div><div className="clip-body"><h3>{clip.title || "Match replay"}</h3><a href={clip.url} target="_blank" rel="noreferrer">Watch clip <ArrowUpRight/></a></div></article>)}</div> : <p className="secondary-empty">Replays appear here after matches are played.</p>}</section>
  </>;
}

export default function TournWatch() {
  const { competition, loading, missing } = useCompetitionPage("tournament");
  if (loading || missing) return <CompetitionMissing loading={loading}/>;
  const live = competition.watchLinks?.youtube || competition.watchLinks?.twitch;
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Live &amp; replay</p><h1>Watch the tournament</h1><p>Follow the broadcast and catch up on highlights from {competition.name}.</p></div><span className="secondary-badge"><Radio/>{live ? "Streams listed" : "Streams offline"}</span></header><WatchLinks competition={competition}/></div></main>;
}
