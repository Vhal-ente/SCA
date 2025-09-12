import { NavLink } from "react-router-dom";

export default function UserNav() {
  const navItems = [
    { name: "Overview", path: "/userpage/userpageoverview" },
    { name: "Friends", path: "/userpage/userpagefriends" },
    { name: "Team", path: "/userpage/userpageteam" },
    { name: "Registered", path: "/userpage/userpageregistered" },
    { name: "History", path: "/userpage/userpagehistory" },
  ];

  return (
    <nav className="">
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
