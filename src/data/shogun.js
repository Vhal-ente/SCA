export const shogunEvents = [
  { title: "Yami no Takai: Season 2", season: "Season 2", date: "September 12, 2026", category: "Call of Duty Mobile" },
  { title: "Path to Glory", season: "Qualifier", date: "October 03, 2026", category: "MLBB" },
  { title: "Night Raid Invitational", season: "Invitational", date: "October 24, 2026", category: "PUBG Mobile" },
  { title: "Shogun Open Cup", season: "Series 1", date: "November 08, 2026", category: "EA FC" },
];

export const shogunDivisions = [
  { slug: "codm", name: "Call of Duty Mobile", shortName: "CODM", image: "/assets/games/call_of_duty.png", description: "Fast, disciplined players built for high-pressure objective play." },
  { slug: "mlbb", name: "Mobile Legends: Bang Bang", shortName: "MLBB", image: "/assets/games/mobile_legend_bang_bang.png", description: "A coordinated five-player unit with sharp rotations and team fighting." },
  { slug: "pubg-mobile", name: "PUBG Mobile", shortName: "PUBG", image: "/assets/games/PUBG_new_state.png", description: "Calculated rotations, decisive engagements, and championship composure." },
  { slug: "ea-fc", name: "EA FC", shortName: "EA FC", image: "/assets/games/farlight84.png", description: "Elite one-on-one competitors representing Shogun on the virtual pitch." },
];

const portraits = ["/assets/admins/mightyness.svg", "/assets/admins/von.svg", "/assets/admins/misha.svg", "/assets/admins/manja.svg"];

export const shogunPlayers = {
  codm: [
    { name: "Giyu San", ign: "GIYU", role: "Slayer", image: portraits[0], bio: "The Killer Samurai. A composed entry player known for decisive reads and relentless pressure in championship rounds." },
    { name: "Kage Mori", ign: "KAGE", role: "Objective", image: portraits[1], bio: "A selfless objective specialist who creates space and keeps the team in control of every rotation." },
    { name: "Ren Akuma", ign: "AKUMA", role: "Flex", image: portraits[2], bio: "A versatile competitor whose calm decision-making allows Shogun to adapt in the middle of a series." },
    { name: "Tora Jin", ign: "TORA", role: "Main AR", image: portraits[3], bio: "A precise anchor with exceptional long-range control and a reputation for winning difficult holds." },
    { name: "Shin Rei", ign: "REI", role: "SMG", image: portraits[1], bio: "An explosive close-range player who turns narrow openings into momentum for the entire roster." },
    { name: "Haru Ken", ign: "HARU", role: "Substitute", image: portraits[2], bio: "A reliable all-rounder prepared to step into any role while maintaining the team’s competitive rhythm." },
  ],
};

shogunDivisions.slice(1).forEach((division) => {
  shogunPlayers[division.slug] = shogunPlayers.codm.map((player, index) => ({
    ...player,
    name: ["Kai Zen", "Riku Ash", "Sora Vex", "Jin Oda", "Yuki Ren", "Aki Ro"][index],
    ign: ["ZEN", "ASH", "VEX", "ODA", "YUKI", "AKI"][index],
    role: ["Captain", "Fragger", "Support", "Flex", "Strategist", "Substitute"][index],
  }));
});

export const shogunGallery = [
  "/assets/user_header.png",
  "/assets/tournament_images/tournament_list_img.png",
  "/assets/warzone_image.png",
  "/assets/PUBG_Global_Championship2.png",
  "/assets/the_colosseum.jpg",
  "/assets/league_images/league_list_img.png",
  "/assets/PUBG_Global_Championship.png",
  "/assets/ancient_greek.png",
];
