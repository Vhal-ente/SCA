import { Radio } from "lucide-react";
import LeaguesNav from "../Navbar/LeaguesNav";
import { CompetitionMissing } from "../Tournaments/TournOverview";
import { WatchLinks } from "../Tournaments/TournWatch";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./league-detail.css";
import "../Tournaments/tournament-secondary.css";

export default function LeagueWatch() {
  const { competition: league, loading, missing } = useCompetitionPage("league");
  if (loading || missing) return <CompetitionMissing kind="league" loading={loading}/>;
  const live = league.watchLinks?.youtube || league.watchLinks?.twitch;
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">Live &amp; replay</p><h1>Watch the league</h1><p>Follow the broadcast and catch up on {league.name}.</p></div><span className="league-badge"><Radio/>{live ? "Streams listed" : "Streams offline"}</span></header><WatchLinks competition={league}/></div></main>;
}
