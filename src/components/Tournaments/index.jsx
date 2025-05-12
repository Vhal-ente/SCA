const tournaments = [
  {
    name: "Path of Legends",
    image: "/assets/path_of_legends.png",
    subtitle: "Path of Legends Gaming Event",
  },
  {
    name: "Academius Games",
    image: "/assets/academius_2.png",
    subtitle: "Academius Games",
  },
  {
    name: "Clan Senso",
    image: "/assets/clan_war_2.png",
    subtitle: "Clan Senso",
  },
];

export default function Tournaments() {
  return (
    <section className="bg-background text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-12">TOURNAMENTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {tournaments.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-52 object-contain"
              />
              {/* <p className="font-semibold">{item.name}</p> */}
              <span className="text-sm text-gray-300">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
