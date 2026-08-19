import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import "./tournament-secondary.css";

const rounds = [
  { round: 1, date: "09 Jan 2026", time: "21:15 WAT", status: "Finished", match: "#73456" },
  { round: 2, date: "10 Jan 2026", time: "21:15 WAT", status: "Finished", match: "#73472" },
  { round: 3, date: "10 Jan 2026", time: "22:00 WAT", status: "Finished", match: "#73488" },
];

export default function TournMatches() {
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Schedule & results</p><h1>Matches</h1><p>Review each round, match time, participant count, and completed results.</p></div></header><div className="round-list">{rounds.map(item => <section className="round-group" key={item.round}><div className="round-label"><span>Round</span><strong>{String(item.round).padStart(2,"0")}</strong></div><Link className="match-row" to="/tournamentspage/matches2"><div className="match-date"><CalendarDays/><div><strong>{item.date}</strong><span><Clock3/>{item.time}</span></div></div><div className="match-participants"><div className="avatar-stack">{["mightyness","von","manja","misha"].map(name => <img key={name} src={`/assets/admins/${name}.svg`} alt=""/>)}</div><span><Users/>71 players</span></div><span className="match-status"><CheckCircle2/>{item.status}</span><strong className="match-number">Match {item.match}</strong><ArrowRight/></Link></section>)}</div></div></main>;
}
