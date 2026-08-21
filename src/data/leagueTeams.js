export const leagueTeams = [
  { name: "Shogun Clan", slug: "shogun-clan", logo: "/assets/league_logo/teamwhite.svg", game: "EA FC", founded: "2024", location: "Nigeria", description: "A disciplined competitive squad built around smart preparation, composure, and consistent league performances.", captain: "Giyu", members: ["Giyu", "Kage", "Akuma", "Rei"], record: { played: 7, won: 6, drawn: 1, lost: 0, points: 19 } },
  { name: "F4 Sides", slug: "f4-sides", logo: "/assets/league_logo/teamred.svg", game: "EA FC", founded: "2025", location: "Nigeria", description: "A fast, direct team known for aggressive transitions and confident tournament play.", captain: "MightyNess", members: ["MightyNess", "VON.exe", "Manja Prime", "MishaGG"], record: { played: 7, won: 5, drawn: 1, lost: 1, points: 16 } },
  { name: "Apex Unit", slug: "apex-unit", logo: "/assets/league_logo/teamwhite.svg", game: "EA FC", founded: "2025", location: "Nigeria", description: "A rising competitive unit combining patient build-up play with decisive finishing.", captain: "ApexOne", members: ["ApexOne", "Tactic", "Prime", "Volt"], record: { played: 7, won: 4, drawn: 2, lost: 1, points: 14 } },
  { name: "Red Team", slug: "red-team", logo: "/assets/league_logo/teamred.svg", game: "EA FC", founded: "2024", location: "Nigeria", description: "A competitive roster focused on high-tempo play and strong team coordination.", captain: "RedAce", members: ["RedAce", "Blaze", "Rook", "Dex"], record: { played: 7, won: 4, drawn: 1, lost: 2, points: 13 } },
  ...["Nova Core", "Vanguard", "Titan Esports", "Night Owls"].map((name, index) => ({
    name, slug: name.toLowerCase().replace(/\s+/g, "-"), logo: index % 2 ? "/assets/league_logo/teamred.svg" : "/assets/league_logo/teamwhite.svg", game: "EA FC", founded: "2025", location: "Nigeria",
    description: `${name} competes in SCA leagues with a focus on teamwork, improvement, and fair play.`, captain: ["NovaX", "VanguardOne", "Titan", "NightAce"][index],
    members: [["NovaX", "Core", "Halo", "Nexus"], ["VanguardOne", "Guard", "Vex", "Sage"], ["Titan", "Atlas", "Nova", "Echo"], ["NightAce", "Owl", "Luna", "Noir"]][index],
    record: [{ played: 7, won: 3, drawn: 1, lost: 3, points: 10 }, { played: 7, won: 2, drawn: 1, lost: 4, points: 7 }, { played: 7, won: 1, drawn: 0, lost: 6, points: 3 }, { played: 7, won: 0, drawn: 1, lost: 6, points: 1 }][index],
  })),
];

export const getLeagueTeam = (identifier = "") => {
  const normalized = identifier.toLowerCase().trim();
  return leagueTeams.find((team) => team.slug === normalized || team.name.toLowerCase() === normalized);
};
