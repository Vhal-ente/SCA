import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import LeaguesNav from "../Navbar/LeaguesNav";
import { CompetitionMissing } from "../Tournaments/TournOverview";
import { CompetitionRules } from "../Tournaments/TournRules";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./league-detail.css";
import "../Tournaments/tournament-secondary.css";

export default function LeagueRules() {
  const { competition: league, loading, missing } = useCompetitionPage("league");
  if (loading || missing) return <CompetitionMissing kind="league" loading={loading}/>;
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">League regulations</p><h1>Rules</h1><p>The format, eligibility and conduct standards for {league.name}.</p></div><Link className="text-link" to="/fair-play-policy">Full Fair Play Policy <ExternalLink/></Link></header><CompetitionRules competition={league} kind="league"/></div></main>;
}
