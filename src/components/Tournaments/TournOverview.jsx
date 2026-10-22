import { CalendarDays, Clock3, Gamepad2, Headphones, Medal, MonitorSmartphone, ShieldCheck, Trophy, Users } from "lucide-react";
import { createElement } from "react";
import { Link } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import { useApi } from "@/hooks/useApi";
import { STATUS_LABEL, STRUCTURE_LABEL, clockTime, money, prizeRows, shortDate, useCompetitionPage, useMyEntry } from "@/lib/competitionPage";
import "./tournament-overview.css";

function FactCard({ icon, label, value }) { return <div className="tournament-fact">{createElement(icon)}<span>{label}</span><strong>{value}</strong></div>; }

const when = value => (value ? `${shortDate(value)} · ${clockTime(value)}` : "");

export function CompetitionMissing({ kind = "tournament", loading }) {
  const list = kind === "league" ? "/leagues/leaguelist" : "/tournaments/tournamentlist";
  return <main className="tournament-overview"><div className="tournament-overview-container"><header className="tournament-title-block"><div><p className="eyebrow">{kind === "league" ? "League" : "Tournament"}</p><h1>{loading ? "Loading…" : `This ${kind} is not available`}</h1>{!loading && <p>It may have ended or not been published yet.</p>}</div>{!loading && <div className="tournament-title-actions"><Link className="button" to={list}>Browse {kind === "league" ? "leagues" : "tournaments"}</Link></div>}</header></div></main>;
}

export default function TournOverview() {
  const { slug, competition: tournament, loading, missing } = useCompetitionPage("tournament");
  const entry = useMyEntry("tournament", slug);
  const { data: scheduleData } = useApi(tournament ? `/tournaments/${slug}/schedule` : null);
  if (loading || missing) return <CompetitionMissing loading={loading}/>;

  const status = STATUS_LABEL.tournament[tournament.status] || "Upcoming";
  const open = tournament.status === "registration";
  const free = !(tournament.entryFee > 0);
  const joinPath = `/tournamentspage/join?tournament=${tournament.slug}`;
  const facts = [
    [Gamepad2, "Game", tournament.game || "To be announced"],
    [Trophy, "Format", STRUCTURE_LABEL[tournament.fixtureStructure] || tournament.format || "To be announced"],
    [Users, "Mode", tournament.mode === "solo" ? "Solo" : "Team"],
    [MonitorSmartphone, "Entry", free ? "Free" : money(tournament.entryFee, tournament.currency)],
  ];
  const timeline = [
    ["Registration opens", when(tournament.registrationOpensAt)],
    ["Registration closes", when(tournament.registrationClosesAt)],
    ["Tournament starts", when(tournament.startsAt)],
    ["Tournament ends", when(tournament.endsAt)],
    ...(scheduleData?.schedule || []).map(item => [item.stage, `${shortDate(item.date)}${item.time ? ` · ${item.time} ${item.timezone}` : ""}${item.venue ? ` · ${item.venue}` : ""}`]),
  ].filter(([, value]) => value);
  const prizes = prizeRows(tournament);
  const capacity = tournament.maxParticipants ? `${tournament.participantsCount} of ${tournament.maxParticipants} places taken.` : "";

  const registration = entry
    ? ["Registration confirmed", entry.paymentRequired ? "Your place is held. Complete the entry payment to confirm it." : "You are entered in this tournament."]
    : open
      ? [free ? "Free entry" : `Entry fee ${money(tournament.entryFee, tournament.currency)}`, `${free ? "No payment is required." : "Payment is completed securely with Paystack."} ${capacity}`.trim()]
      : ["Registration closed", status === "Upcoming" ? "Registration has not opened yet." : `This tournament is ${status.toLowerCase()} and no longer accepts entries.`];

  return <main className="tournament-overview"><div className="tournament-overview-container">
    <TournamentsNav/>
    <header className="tournament-title-block"><div><p className="eyebrow">{tournament.organizer || "SCA tournament"}</p><h1>{tournament.name}</h1>{tournament.description && <p>{tournament.description}</p>}</div><div className="tournament-title-actions"><span className="live-pill">{entry ? "Registered" : status}</span>{open && !entry ? <Link className="button" to={joinPath}><ShieldCheck/>Join tournament</Link> : <span className="button button-disabled" aria-disabled="true">{entry ? "Already registered" : status === "Upcoming" ? "Registration not open" : "Registration closed"}</span>}</div></header>
    <section className="tournament-facts" aria-label="Tournament information">{facts.map(([Icon,label,value]) => <FactCard key={label} icon={Icon} label={label} value={value}/>)}</section>
    <div className="tournament-content-grid"><aside className="tournament-sidebar">
      <section className="tournament-panel registration-panel"><p className="panel-label">Registration</p><strong>{registration[0]}</strong><span>{registration[1]}</span>{open && !entry && <Link className="button button-full" to={joinPath}>Join now</Link>}</section>
      {timeline.length > 0 && <section className="tournament-panel"><div className="panel-heading"><Clock3/><h2>Timeline</h2></div><div className="timeline-list">{timeline.map(([label,value]) => <div key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}</div></section>}
      <section className="tournament-panel"><div className="panel-heading"><Trophy/><h2>Prizes</h2></div>{prizes.length ? <div className="prize-list">{prizes.map(({ place, value }) => <div key={place}><span className={`prize-rank rank-${place}`}>{place}</span><span>{place === 1 ? "1st" : place === 2 ? "2nd" : place === 3 ? "3rd" : `${place}th`} place</span><strong>{value}</strong></div>)}</div> : <span>{tournament.prizeText || "Prizes will be announced."}</span>}{prizes.length > 0 && tournament.prizeText && <span>Prize pool: {tournament.prizeText}</span>}</section>
      <section className="tournament-panel support-panel"><Headphones/><h2>Need support?</h2><p>Report a tournament issue or contact the SCA team.</p><Link className="text-link" to="/community#report-issue">Get tournament help</Link></section>
    </aside><div className="tournament-details">
      <section className="overview-section"><div className="overview-section-heading"><p className="eyebrow">Before you compete</p><h2>Tournament details</h2></div><div className="detail-grid">
        <article className="detail-card"><h3>How to sign up</h3><ul><li><CalendarDays/>{open ? `Join before ${when(tournament.registrationClosesAt) || "registration closes"}.` : "Registration opens on the date shown in the timeline."}</li><li><ShieldCheck/>Create an SCA account and complete your player profile first.</li>{tournament.mode !== "solo" && <li><Users/>Team tournaments are entered by your team captain.</li>}</ul></article>
        <article className="detail-card"><h3>Rules</h3><ul><li><Medal/>{tournament.rules ? "Read the full rules in the Rules tab before your first match." : "Rules will be published before the tournament starts."}</li><li><ShieldCheck/>The SCA Fair Play Policy applies to every match.</li></ul></article>
      </div></section>
    </div></div>
  </div></main>;
}
