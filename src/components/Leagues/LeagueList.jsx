import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { LeagueListingCard } from "../CompetitionCards";
import "../CompetitionCards/listing.css";

const leagues = [
  { name: "Path of Legends", image: "/assets/path_of_legends.png", game: "Multi-title league", description: "A seasonal competition for established teams pursuing the SCA championship.", season: "Season 3", format: "12 teams", status: "Active" },
  { name: "Academius Games", image: "/assets/academius_2.png", game: "Collegiate esports", description: "Structured league play designed to develop and showcase rising competitive talent.", season: "Season 1", format: "8 teams", status: "Active" },
  { name: "Clan Sense", image: "/assets/clan_war_2.png", game: "Community league", description: "Team-first competition with regular match weeks and an elimination championship.", season: "Season 2", format: "16 teams", status: "Registration" },
  { name: "Path of Legends Open", image: "/assets/path_of_legends.png", game: "Open division", description: "An accessible route into the Path of Legends competitive ecosystem.", season: "Open Series", format: "32 teams", status: "Upcoming" },
  { name: "Academius Challengers", image: "/assets/academius_2.png", game: "Development league", description: "A proving ground for new rosters preparing for premier SCA competition.", season: "Split 2", format: "10 teams", status: "Upcoming" },
  { name: "Clan Sense Masters", image: "/assets/clan_war_2.png", game: "Invitational", description: "A compact invitational featuring high-performing community teams.", season: "Masters 2026", format: "8 teams", status: "Upcoming" },
];

export default function LeagueList() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => leagues.filter(item => `${item.name} ${item.game}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="competition-list-page"><Navbar/><header className="competition-list-hero league-list-hero"><div className="container"><p className="eyebrow">Season-long competition</p><h1>Leagues</h1><p>Follow standings, schedules, and the teams competing across SCA’s active gaming leagues.</p></div></header><main className="competition-list-main"><div className="container"><div className="listing-toolbar"><div><p className="eyebrow">Current competitions</p><h2>Explore SCA leagues</h2></div><label className="listing-search"><span className="sr-only">Search leagues</span><Search/><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search leagues"/></label></div>{filtered.length ? <div className="listing-league-grid">{filtered.map(item => <LeagueListingCard key={item.name} league={item}/>)}</div> : <p className="listing-empty">No leagues match your search.</p>}</div></main><Footer/></div>;
}
