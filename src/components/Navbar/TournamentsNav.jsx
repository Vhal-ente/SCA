import { NavLink } from "react-router-dom";

export default function TournamentsNav() {
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
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? "is-active" : ""}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
