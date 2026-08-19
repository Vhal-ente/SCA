import { CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import LeaguesNav from "../Navbar/LeaguesNav";
import { getLeagueTeam } from "@/data/leagueTeams";
import "./league-detail.css";

const fixtures = [["Shogun Clan","F4 Sides","12 Sep","18:00","Featured"],["Red Team","Apex Unit","12 Sep","20:00","Upcoming"],["Nova Core","Vanguard","13 Sep","18:00","Upcoming"],["Titan Esports","Night Owls","13 Sep","20:00","Upcoming"]];
export default function LeagueMatches() {
  return <main className="league-detail"><div className="league-detail-container"><LeaguesNav/><header className="league-header"><div><p className="eyebrow">Season schedule</p><h1>Matches</h1><p>Browse weekly team fixtures and completed league results throughout the regular season.</p></div><span className="league-badge">Matchweek 4 of 14</span></header><section className="league-matchweek"><div className="league-section-heading"><div><p className="eyebrow">12–13 September</p><h2>Matchweek 4</h2></div></div><div className="league-fixtures">{fixtures.map(([home,away,date,time,status]) => { const homeTeam=getLeagueTeam(home); const awayTeam=getLeagueTeam(away); return <article key={`${home}-${away}`}><div className="fixture-date"><CalendarDays/><span>{date}</span><small><Clock3/>{time} WAT</small></div><Link className="fixture-team" to={`/teams/${homeTeam.slug}`}><img src={homeTeam.logo} alt=""/><strong>{home}</strong></Link><span className="fixture-versus">VS</span><Link className="fixture-team away" to={`/teams/${awayTeam.slug}`}><strong>{away}</strong><img src={awayTeam.logo} alt=""/></Link><span className="fixture-status">{status}</span></article>; })}</div></section></div></main>;
}
