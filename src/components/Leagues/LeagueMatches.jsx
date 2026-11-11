import LeaguesNav from "../Navbar/LeaguesNav";
import { CompetitionMissing } from "../Tournaments/TournOverview";
import { FixtureList } from "../Tournaments/TournMatches";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./league-detail.css";
import "../Tournaments/tournament-secondary.css";

export default function LeagueMatches() {
  const { slug, loading, missing } = useCompetitionPage("league");
  if (loading || missing) return <CompetitionMissing kind="league" loading={loading}/>;
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">Season schedule</p><h1>Matches</h1><p>Every matchweek’s fixtures and verified results.</p></div></header><FixtureList path={`/leagues/${slug}/fixtures`}/></div></main>;
}
