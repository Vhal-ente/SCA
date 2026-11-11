import { NavLink, useSearchParams } from "react-router-dom";
import { withCompetition } from "@/lib/competitionPage";

const navItems = [
  ["Overview", "/leaguespage/leaguepageoverview"], ["Watch", "/leaguespage/leaguepagewatch"],
  ["Matches", "/leaguespage/leaguepagematches"], ["Rules", "/leaguespage/leaguepagerules"],
  ["Standings", "/leaguespage/leaguepagestandings"],
];

// The tabs keep ?league= so every tab shows the same league.
export default function LeaguesNav() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("league");
  return <nav className="league-subnav" aria-label="League navigation"><ul>{navItems.map(([name,path]) => <li key={name}><NavLink to={withCompetition(path, "league", slug)} className={({ isActive }) => isActive ? "is-active" : undefined}>{name}</NavLink></li>)}</ul></nav>;
}
