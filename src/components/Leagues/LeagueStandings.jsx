import { Link } from "react-router-dom";
import LeaguesNav from "../Navbar/LeaguesNav";
import { CompetitionMissing } from "../Tournaments/TournOverview";
import { useApi } from "@/hooks/useApi";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./league-detail.css";

// LeagueTable ranks the league's teams from verified results (3 points a win, 1 a draw).
export function LeagueTable({ slug, caption }) {
  const { data, loading } = useApi(`/leagues/${slug}/standings`);
  const rows = data?.standings || [];
  if (loading) return <p className="league-empty">Loading the table…</p>;
  if (!rows.length) return <p className="league-empty">The table appears once teams are confirmed.</p>;
  return <div className="league-table-wrap"><table className="league-table"><caption className="sr-only">{caption}</caption><thead><tr><th>Pos</th><th>Team</th><th>Played</th><th>Won</th><th>Drawn</th><th>Lost</th><th>Points</th></tr></thead><tbody>{rows.map(row => <tr key={row.teamId}><td><strong>{row.rank}</strong></td><td><Link className="league-table-team" to={`/teams/${row.teamId}`} aria-label={`View ${row.teamName} profile`}>{row.logoUrl ? <img src={row.logoUrl} alt=""/> : <span className="league-team-initials" aria-hidden="true">{row.teamName.slice(0, 2).toUpperCase()}</span>}<strong>{row.teamName}</strong><span>View team</span></Link></td><td>{row.played}</td><td>{row.won}</td><td>{row.drawn}</td><td>{row.lost}</td><td><strong>{row.points}</strong></td></tr>)}</tbody></table></div>;
}

export default function LeagueStandings() {
  const { slug, competition: league, loading, missing } = useCompetitionPage("league");
  if (loading || missing) return <CompetitionMissing kind="league" loading={loading}/>;
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">{[league.name, league.season].filter(Boolean).join(" · ")}</p><h1>Team standings</h1><p>Rankings from each team’s verified results and league points.</p></div></header><LeagueTable slug={slug} caption={`${league.name} team standings`}/></div></main>;
}
