import { ArrowRight, CalendarDays, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function TournamentListingCard({ tournament }) {
  return <article className="listing-tournament-card"><div className="listing-card-image"><img src={tournament.image} alt=""/><span className={`status ${tournament.status.toLowerCase()}`}>{tournament.status}</span></div><div className="listing-card-body"><span className="listing-organizer">{tournament.organizer}</span><h2>{tournament.name}</h2><p className="listing-date"><CalendarDays/>{tournament.date}</p><div className="listing-meta"><span><Users/>{tournament.participants} participants</span><span><Trophy/>{tournament.prize}</span></div><Link className="button button-full" to="/tournamentspage/overview">View tournament <ArrowRight/></Link></div></article>;
}

export function LeagueListingCard({ league }) {
  return <article className="listing-league-card"><div className="league-logo-panel"><img src={league.image} alt={`${league.name} logo`}/><span>{league.status}</span></div><div className="listing-card-body"><span className="listing-organizer">{league.game}</span><h2>{league.name}</h2><p>{league.description}</p><div className="league-details"><span>{league.season}</span><span>{league.format}</span></div><Link className="text-link" to="/leaguespage/leaguepageoverview">View league <ArrowRight/></Link></div></article>;
}
