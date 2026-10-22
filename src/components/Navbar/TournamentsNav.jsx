import { NavLink, useSearchParams } from "react-router-dom";
import { withCompetition } from "@/lib/competitionPage";

// The tabs keep ?tournament= so every tab shows the same tournament.
export default function TournamentsNav() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("tournament");
  const navItems = [
    { name: "Overview", path: "/tournamentspage/overview" },
    { name: "Watch", path: "/tournamentspage/watch" },
    { name: "Matches", path: "/tournamentspage/matches" },
    { name: "Rules", path: "/tournamentspage/rules" },
    { name: "Standings", path: "/tournamentspage/standings" },
  ];

  return (
    <nav className="tournament-subnav" aria-label="Tournament navigation">
      <ul>
        {navItems.map(item => (
          <li key={item.path}>
            <NavLink to={withCompetition(item.path, "tournament", slug)} className={({ isActive }) => isActive ? "is-active" : ""}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
