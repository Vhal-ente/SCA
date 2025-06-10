import { NavLink } from "react-router-dom";

export default function TournamentsNav() {
  const navItems = [
    { name: "Overview", path: "/leaguespage/leaguespageoverview" },
    { name: "Watch", path: "/leaguespage/watch" },
    { name: "Matches", path: "/leaguespage/matches" },
    { name: "Rules", path: "/leaguespage/rules" },
    { name: "Standings", path: "/leaguespage/standings" },
  ];

  return (
    <nav className="mb-8 pb-2">
      <ul className="flex flex-wrap items-center gap-x-8 text-white text-sm md:text-base">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer transition duration-200 ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
