import TournamentsNav from "../Navbar/TournamentsNav";
import TournamentStandingsTable from "./TournamentStandingsTable";
import "./tournament-secondary.css";

export default function TournStandings() {
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Live leaderboard</p><h1>Standings</h1><p>Overall rankings based on match placement, wins, and eliminations.</p></div><span className="secondary-badge">Updated after round 3</span></header><TournamentStandingsTable/></div></main>;
}
