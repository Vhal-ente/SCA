const games = [
  { name: "Call of Duty Mobile", image: "/assets/games/call_of_duty.png" },
  {
    name: "Call of Duty Warzone Mobile",
    image: "/assets/games/warzone_mobile.png",
  },
  {
    name: "Mobile Legends Bang Bang",
    image: "/assets/games/mobile_legend_bang_bang.png",
  },
  { name: "Farlight 84", image: "/assets/games/farlight84.png" },
  { name: "Clash of Clans", image: "/assets/games/clash_of_clans.png" },
  { name: "Shadow fight Arena", image: "/assets/games/shadow_fight_arena.png" },
  {
    name: "Project Bloodstrike",
    image: "/assets/games/project_blood_strike.png",
  },
  { name: "PUBG New state", image: "/assets/games/PUBG_new_state.png" },
];

export default function Games() {
  return (
    <section className="bg-[#292929] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-12">GAMES</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {games.map((game, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={game.image}
                alt={game.name}
                className="h-16 md:h-20 object-contain"
              />
              <span className="text-sm text-gray-300">{game.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
