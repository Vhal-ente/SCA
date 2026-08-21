import { NavLink } from "react-router-dom";

const navItems = [
  ["Overview", "/leaguespage/leaguepageoverview"], ["Watch", "/leaguespage/leaguepagewatch"],
  ["Matches", "/leaguespage/leaguepagematches"], ["Rules", "/leaguespage/leaguepagerules"],
  ["Standings", "/leaguespage/leaguepagestandings"],
];

export default function LeaguesNav() {
  return <nav className="league-subnav" aria-label="League navigation"><ul>{navItems.map(([name,path]) => <li key={name}><NavLink to={path} className={({ isActive }) => isActive ? "is-active" : undefined}>{name}</NavLink></li>)}</ul></nav>;
}
