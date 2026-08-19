import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { TournamentListingCard } from "../CompetitionCards";
import "../CompetitionCards/listing.css";

const tournaments = [
  { name: "PUBG Tournament by Red Bull", image: "/assets/tournament_images/battlegrounds.png", date: "Sep 26 – Sep 27, 2026", participants: 128, organizer: "Clan Sense", status: "Upcoming", prize: "$5,000" },
  { name: "Apex Legends Open", image: "/assets/tournament_images/apex.png", date: "Sep 27 – Sep 29, 2026", participants: 64, organizer: "SCA Open Series", status: "Upcoming", prize: "$3,500" },
  { name: "Rocket League Finals", image: "/assets/tournament_images/rocket.png", date: "Oct 01 – Oct 02, 2026", participants: 128, organizer: "Academius Games", status: "Upcoming", prize: "$4,000" },
  { name: "Call of Duty: Warzone by HyperX", image: "/assets/warzone_image.png", date: "Aug 01 – Aug 05, 2026", participants: 256, organizer: "Path of Legends", status: "Live", prize: "$10,000" },
  { name: "PUBG Global Championship", image: "/assets/PUBG_Global_Championship.png", date: "Oct 24 – Oct 26, 2026", participants: 1024, organizer: "Academius Games", status: "Upcoming", prize: "$7,500" },
  { name: "SCA Mobile Masters", image: "/assets/PUBG_Global_Championship2.png", date: "Aug 15 – Aug 20, 2026", participants: 64, organizer: "Clan Sense", status: "Live", prize: "$5,000" },
];

export default function TournamentList() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => tournaments.filter(item => `${item.name} ${item.organizer}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="competition-list-page"><Navbar/><header className="competition-list-hero tournament-list-hero"><div className="container"><p className="eyebrow">Enter the arena</p><h1>Tournaments</h1><p>Discover live and upcoming SCA competitions, find your game, and secure your place in the bracket.</p></div></header><main className="competition-list-main"><div className="container"><div className="listing-toolbar"><div><p className="eyebrow">Competitive events</p><h2>Find your next tournament</h2></div><label className="listing-search"><span className="sr-only">Search tournaments</span><Search/><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search tournaments"/></label></div>{filtered.length ? <div className="listing-tournament-grid">{filtered.map(item => <TournamentListingCard key={item.name} tournament={item}/>)}</div> : <p className="listing-empty">No tournaments match your search.</p>}</div></main><Footer/></div>;
}
