import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import LeaguesNav from "../Navbar/LeaguesNav";
import { leagueTeams } from "@/data/leagueTeams";
import "./league-detail.css";

const forms = ["up", "same", "up", "down", "same", "up", "down", "same"];
const differences = [11, 7, 5, 3, 0, -5, -9, -12];

export default function LeagueStandings() {
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">Path of Legends · Season 3</p><h1>Team standings</h1><p>Regular-season rankings based on each team’s match results and accumulated league points.</p></div><span className="league-badge">After matchweek 7</span></header><div className="league-table-wrap"><table className="league-table"><caption className="sr-only">Path of Legends team standings</caption><thead><tr><th>Pos</th><th>Team</th><th>Played</th><th>Won</th><th>Drawn</th><th>Lost</th><th>Diff</th><th>Points</th><th>Form</th></tr></thead><tbody>{leagueTeams.map((team,index) => {
    const trend = forms[index]; const FormIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
    const { played, won, drawn, lost, points } = team.record; const diff = differences[index];
    return <tr key={team.slug} className={index < 4 ? "playoff-row" : ""}><td><strong>{index+1}</strong></td><td><Link className="league-table-team" to={`/teams/${team.slug}`} aria-label={`View ${team.name} profile`}><img src={team.logo} alt=""/><strong>{team.name}</strong><span>View team</span></Link></td><td>{played}</td><td>{won}</td><td>{drawn}</td><td>{lost}</td><td>{diff > 0 ? `+${diff}` : diff}</td><td><strong>{points}</strong></td><td><FormIcon className={`form-${trend}`} aria-label={trend === "up" ? "Moved up" : trend === "down" ? "Moved down" : "No change"}/></td></tr>;
  })}</tbody></table></div><p className="league-table-note"><span/>Top four qualify for the championship playoffs.</p></div></main>;
}
