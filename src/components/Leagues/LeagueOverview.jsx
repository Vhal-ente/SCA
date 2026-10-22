import { CalendarDays, Check, ShieldCheck, Trophy, Users } from "lucide-react";
import { createElement } from "react";
import { Link } from "react-router-dom";
import LeaguesNav from "../Navbar/LeaguesNav";
import { CompetitionMissing } from "../Tournaments/TournOverview";
import { LeagueTable } from "./LeagueStandings";
import { useApi } from "@/hooks/useApi";
import { STATUS_LABEL, money, shortDate, useCompetitionPage, useMyEntry } from "@/lib/competitionPage";
import "./league-detail.css";

export default function LeagueOverview() {
  const { slug, competition: league, loading, missing } = useCompetitionPage("league");
  const entry = useMyEntry("league", slug);
  const { data: scheduleData } = useApi(league ? `/leagues/${slug}/schedule` : null);
  if (loading || missing) return <CompetitionMissing kind="league" loading={loading}/>;
  const status = STATUS_LABEL.league[league.status] || "Upcoming";
  const open = league.status === "registration";
  const free = !(league.entryFee > 0);
  const dates = [
    ["Registration opens", league.registrationOpensAt], ["Registration closes", league.registrationClosesAt],
    ["Season starts", league.startsAt], ["Season ends", league.endsAt],
  ].filter(([, value]) => value).map(([label, value]) => [label, shortDate(value)]);
  const milestones = [...dates, ...(scheduleData?.schedule || []).map(item => [item.stage, `${shortDate(item.date)}${item.time ? ` · ${item.time} ${item.timezone}` : ""}`])];
  const facts = [
    [Users, league.maxTeams ? `${league.teamsCount} / ${league.maxTeams}` : String(league.teamsCount || 0), "Teams"],
    [Trophy, league.prizeText || "To be announced", "Prize pool"],
    [ShieldCheck, free ? "Free" : money(league.entryFee, league.currency), "Entry"],
    [CalendarDays, league.startsAt ? shortDate(league.startsAt) : "To be announced", "Season start"],
  ];
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">{[league.name, league.season].filter(Boolean).join(" · ")}</p><h1>League overview</h1>{league.description && <p>{league.description}</p>}</div>{entry ? <span className="button button-disabled" aria-disabled="true">Your team is registered</span> : open ? <Link className="button" to={`/leaguespage/join?league=${league.slug}`}>Register a team</Link> : <span className="button button-disabled" aria-disabled="true">{status === "Active" ? "League in progress" : status === "Upcoming" ? "Registration opens soon" : "Registration closed"}</span>}</header><section className="league-facts">{facts.map(([Icon,value,label]) => <div key={label}>{createElement(Icon)}<strong>{value}</strong><span>{label}</span></div>)}</section><div className="league-overview-grid"><section className="league-panel"><p className="eyebrow">Competition format</p><h2>How the season works</h2><ul className="league-check-list"><li><Check/>{league.format || "Teams play a published schedule of fixtures."}</li><li><Check/>Teams earn three points for a win and one point for a draw.</li><li><Check/>Results count once SCA has verified them.</li></ul></section>{milestones.length > 0 && <section className="league-panel season-dates"><p className="eyebrow">Key dates</p><h2>Season timeline</h2>{milestones.map(([label, value]) => <div key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}</section>}</div><section className="league-teams-section"><div className="league-section-heading"><div><p className="eyebrow">Confirmed rosters</p><h2>Competing teams</h2></div></div><LeagueTable slug={slug} caption={`${league.name} teams`}/></section></div></main>;
}
