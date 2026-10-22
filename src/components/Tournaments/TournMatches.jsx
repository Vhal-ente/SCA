import { CalendarDays, CheckCircle2, Clock3, Radio } from "lucide-react";
import TournamentsNav from "../Navbar/TournamentsNav";
import { CompetitionMissing } from "./TournOverview";
import { useApi } from "@/hooks/useApi";
import { clockTime, shortDate, useCompetitionPage } from "@/lib/competitionPage";
import "./tournament-secondary.css";

const STATUS = { scheduled: "Scheduled", live: "Live", completed: "Finished", cancelled: "Cancelled", forfeited: "Forfeit" };

function Side({ entrant, score, winner }) {
  return <div className={`fixture-side ${winner ? "is-winner" : ""}`}>{entrant?.logoUrl ? <img src={entrant.logoUrl} alt=""/> : <span className="fixture-initials" aria-hidden="true">{(entrant?.name || "?").slice(0, 2).toUpperCase()}</span>}<strong>{entrant?.name || "To be decided"}</strong>{score !== null && score !== undefined && <b>{score}</b>}</div>;
}

// FixtureList shows a competition's draw round by round.
export function FixtureList({ path }) {
  const { data, loading } = useApi(path);
  const fixtures = data?.fixtures || [];
  if (loading) return <p className="secondary-empty">Loading matches…</p>;
  if (!fixtures.length) return <p className="secondary-empty">The match schedule is published once the draw is made.</p>;
  const rounds = [];
  fixtures.forEach(fixture => {
    let round = rounds.find(item => item.number === fixture.roundNumber);
    if (!round) { round = { number: fixture.roundNumber, name: fixture.round, fixtures: [] }; rounds.push(round); }
    round.fixtures.push(fixture);
  });
  rounds.sort((a, b) => a.number - b.number);
  return <div className="round-list">{rounds.map(round => <section className="round-group" key={round.number}><div className="round-label"><span>{round.name || "Round"}</span><strong>{String(round.number).padStart(2, "0")}</strong></div><div className="fixture-rows">{round.fixtures.map(fixture => <article className="match-row fixture-row" key={fixture.id}>
    <div className="match-date"><CalendarDays/><div><strong>{fixture.scheduledAt ? shortDate(fixture.scheduledAt) : "Date to be set"}</strong>{fixture.scheduledAt && <span><Clock3/>{clockTime(fixture.scheduledAt)}</span>}</div></div>
    <div className="fixture-sides"><Side entrant={fixture.home} score={fixture.homeScore} winner={fixture.winnerId && fixture.winnerId === fixture.home?.id}/><Side entrant={fixture.away} score={fixture.awayScore} winner={fixture.winnerId && fixture.winnerId === fixture.away?.id}/></div>
    <span className="match-status">{fixture.status === "completed" ? <CheckCircle2/> : <Radio/>}{STATUS[fixture.status] || fixture.status}{fixture.bestOf > 1 && ` · Bo${fixture.bestOf}`}</span>
    {fixture.streamUrl ? <a className="text-link" href={fixture.streamUrl} target="_blank" rel="noreferrer">Watch</a> : <span className="match-number">{fixture.venue || `Match ${fixture.matchNumber}`}</span>}
  </article>)}</div></section>)}</div>;
}

export default function TournMatches() {
  const { slug, loading, missing } = useCompetitionPage("tournament");
  if (loading || missing) return <CompetitionMissing loading={loading}/>;
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Schedule &amp; results</p><h1>Matches</h1><p>Every round, match time and verified result.</p></div></header><FixtureList path={`/tournaments/${slug}/fixtures`}/></div></main>;
}
