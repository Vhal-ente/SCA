import TournamentsNav from "../Navbar/TournamentsNav";
import TournamentStandingsTable from "./TournamentStandingsTable";
import { CompetitionMissing } from "./TournOverview";
import { useApi } from "@/hooks/useApi";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./tournament-secondary.css";

export default function TournStandings() {
  const { slug, loading, missing } = useCompetitionPage("tournament");
  const { data } = useApi(slug && !missing ? `/tournaments/${slug}/standings` : null);
  if (loading || missing) return <CompetitionMissing loading={loading}/>;
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Leaderboard</p><h1>Standings</h1><p>Rankings from verified match results.</p></div>{data?.winner && <span className="secondary-badge">Champion: {data.winner.name}</span>}</header><TournamentStandingsTable standings={data}/></div></main>;
}
