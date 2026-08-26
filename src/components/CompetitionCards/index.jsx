import { ArrowRight, CalendarDays, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function TournamentListingCard({ tournament }) {
  const entryLabel=tournament.entryFee===0?"Free entry":tournament.entryFee?`₦${tournament.entryFee.toLocaleString("en-NG")} entry`:null;
  const action={Upcoming:"View & register",Registered:"View registration",Live:"Watch tournament",Ended:"View results"}[tournament.status]||"View tournament";
  return <article className="listing-tournament-card"><div className="listing-card-image"><img src={tournament.image} alt=""/><span className={`status ${tournament.status.toLowerCase()}`}>{tournament.status}</span>{entryLabel&&<span className={`entry-type ${tournament.entryFee===0?"free":"paid"}`}>{entryLabel}</span>}</div><div className="listing-card-body"><span className="listing-organizer">{tournament.organizer}</span><h2>{tournament.name}</h2><p className="listing-date"><CalendarDays/>{tournament.date}</p><div className="listing-meta"><span><Users/>{tournament.participants} participants</span><span><Trophy/>{tournament.prize}</span></div><Link className="button button-full" to={`/tournamentspage/overview?tournament=${tournament.slug||"warzone-hyperx-2026"}`}>{action} <ArrowRight/></Link></div></article>;
}

export function LeagueListingCard({ league }) {
  const entryLabel=league.entryFee===0?"Free team entry":league.entryFee?`₦${league.entryFee.toLocaleString("en-NG")} team entry`:null;
  const action={Registration:"View & register",Active:"View league",Upcoming:"View details",Ended:"View results"}[league.status]||"View league";
  return <article className="listing-league-card"><div className="league-logo-panel"><img src={league.image} alt={`${league.name} logo`}/><span>{league.status}</span></div><div className="listing-card-body"><span className="listing-organizer">{league.game}</span><h2>{league.name}</h2><p>{league.description}</p><div className="league-details"><span>{league.season}</span><span>{league.format}</span>{entryLabel&&<span className={league.entryFee===0?"free-entry-label":""}>{entryLabel}</span>}</div><Link className="text-link" to={`/leaguespage/leaguepageoverview?league=${league.slug||"path-of-legends"}`}>{action} <ArrowRight/></Link></div></article>;
}
