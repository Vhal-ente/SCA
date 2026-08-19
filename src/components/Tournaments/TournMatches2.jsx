import { ArrowLeft, CalendarDays, Gamepad2, Trophy, Users } from "lucide-react";
import { createElement } from "react";
import { Link } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import TournamentStandingsTable from "./TournamentStandingsTable";
import "./tournament-secondary.css";

export default function TournMatches2() {
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><Link className="secondary-back" to="/tournamentspage/matches"><ArrowLeft/>Back to matches</Link><header className="secondary-header match-detail-header"><div><p className="eyebrow">Match #73456</p><h1>Round 1 results</h1><p>Call of Duty: Warzone by HyperX · completed 09 January 2026 at 21:15 WAT.</p></div><span className="secondary-badge">Finished</span></header><section className="match-detail-facts">{[[CalendarDays,"09 Jan 2026"],[Gamepad2,"Solo · TPP"],[Users,"71 players"],[Trophy,"BR positions"]].map(([Icon,value]) => <div key={value}>{createElement(Icon)}<span>{value}</span></div>)}</section><section className="secondary-section"><div className="secondary-section-heading"><div><h2>Match leaderboard</h2><p>Final verified placement and elimination totals.</p></div></div><TournamentStandingsTable compact/></section></div></main>;
}
