export default function TournamentsNav() {
  const navItems = ["Overview", "Watch", "Matches", "Rules", "Standings"];

  return (
    <nav className="mb-8 pb-2">
      <ul className="flex items-center space-x-8 text-white text-sm md:text-base">
        {navItems.map((navitem, index) => (
          <li key={index} className="hover:text-primary cursor-pointer">
            {navitem}
          </li>
        ))}
      </ul>
    </nav>
  );
}
