export const newsArticles = [
  {
    slug: "next-path-of-legends-tournament",
    featured: true,
    category: "Tournament",
    title: "SCA Announces the Next Path of Legends Tournament",
    excerpt: "Get ready for another round of competitive gaming as players battle for rankings, prizes, and a place among SCA’s top competitors.",
    date: "August 12, 2026",
    image: "/assets/ancient_greek.png",
    content: [
      "The Path of Legends returns with a new competitive season built for ambitious players and established teams across the SCA community.",
      "Registration opens this month, followed by a structured group stage and elimination bracket. Every match contributes to player rankings, while the strongest competitors advance to a live championship final.",
      "Full rules, match schedules, prize information, and eligibility requirements will be published on the tournament page before registration closes.",
    ],
  },
  {
    slug: "academius-games-season-one",
    featured: true,
    category: "League",
    title: "Academius Games Season One Is Now Live",
    excerpt: "A new league season gives rising teams a consistent stage to compete, improve, and earn recognition.",
    date: "August 8, 2026",
    image: "/assets/academius_2.png",
    content: ["Academius Games has officially begun its first SCA season, bringing together emerging rosters for regular competitive play.", "Teams will compete across scheduled match weeks with standings updated after every verified result. The format rewards consistency as much as standout performances."],
  },
  {
    slug: "sca-hyperx-partnership",
    featured: true,
    category: "Partnership",
    title: "SCA and HyperX Expand Their Tournament Partnership",
    excerpt: "The partnership will support more community tournaments and stronger competitive experiences for SCA players.",
    date: "August 2, 2026",
    image: "/assets/warzone_image.png",
    content: ["SCA is expanding its partnership with HyperX to support upcoming community and championship events.", "The collaboration focuses on player experience, tournament production, and new opportunities for competitors to connect with leading gaming brands."],
  },
  {
    slug: "community-night-returns",
    category: "Community",
    title: "SCA Community Night Returns This Month",
    excerpt: "Join players, organizers, and creators for friendly matches, challenges, and community highlights.",
    date: "July 27, 2026",
    image: "/assets/the_colosseum.jpg",
    content: ["Community Night is back with open matches and challenges across supported titles.", "Players of every competitive level are welcome. Event details and lobby information will be shared through the SCA community channel."],
  },
  {
    slug: "fair-play-policy-update",
    category: "Announcement",
    title: "An Update to SCA’s Fair Play Standards",
    excerpt: "Clearer competition standards help protect players and keep every SCA event fair and enjoyable.",
    date: "July 21, 2026",
    image: "/assets/tournament_images/tournament_list_img.png",
    content: ["We have updated our fair play guidance to make tournament expectations clearer for players, teams, and organizers.", "The update covers match conduct, result reporting, roster eligibility, and the review process for disputed outcomes."],
  },
  {
    slug: "mobile-esports-growth",
    category: "Esports",
    title: "Why Mobile Esports Keeps Growing Across Africa",
    excerpt: "Accessible competition, passionate communities, and stronger events are creating a new generation of players.",
    date: "July 15, 2026",
    image: "/assets/PUBG_Global_Championship.png",
    content: ["Mobile esports continues to attract talented competitors and highly engaged communities across Africa.", "SCA is building tournament and league formats that turn that energy into structured opportunities for players, organizers, and partners."],
  },
];

export const newsCategories = ["All", "Tournaments", "Leagues", "Partnerships", "Community", "Announcements"];

export function matchesCategory(article, category) {
  if (category === "All") return true;
  return `${article.category}s`.toLowerCase() === category.toLowerCase();
}
