import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadoutCard from "@/components/LoadoutCard";
import { configuredGames, getPublicLoadouts, getVoteSummary, loadoutTypes } from "@/data/loadouts";
import "./loadouts.css";

export default function LoadoutsPage() {
  const [params] = useSearchParams();
  const author = params.get("author") || "";
  const [query, setQuery] = useState(author);
  const [game, setGame] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("Newest");
  const [limit, setLimit] = useState(6);
  const all = useMemo(() => getPublicLoadouts(), []);
  const filtered = all.filter((item) => !query || `${item.title} ${item.author}`.toLowerCase().includes(query.toLowerCase())).filter((item) => !game || item.game === game).filter((item) => !type || item.loadoutType === type).sort((a, b) => sort === "Newest" ? new Date(b.createdAt) - new Date(a.createdAt) : getVoteSummary(b.id).score - getVoteSummary(a.id).score);
  return <div className="loadouts-page"><Navbar/><main><header className="loadouts-hero"><div className="container"><p className="eyebrow">SCA knowledge hub</p><h1>Loadouts &amp; Strategies</h1><p>Discover player-created builds, setups, gunsmiths, and strategies across SCA-supported games.</p><Link className="button" to="/dashboard/loadouts/create">Post Loadout</Link></div></header><section className="container loadouts-content"><div className="loadout-filters"><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or author" aria-label="Search loadouts"/><select value={game} onChange={(e) => setGame(e.target.value)} aria-label="Filter by game"><option value="">All games</option>{configuredGames.map((item) => <option key={item}>{item}</option>)}</select><select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by loadout type"><option value="">All types</option>{loadoutTypes.map((item) => <option key={item}>{item}</option>)}</select><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort loadouts"><option>Newest</option><option>Most Upvoted</option><option>Trending</option></select></div><section className="loadout-section"><div className="loadout-heading"><p className="eyebrow">Community builds</p><h2>All Loadouts</h2></div>{filtered.length ? <><div className="loadout-grid">{filtered.slice(0, limit).map((item) => <LoadoutCard key={item.id} loadout={item}/>)}</div>{limit < filtered.length && <button className="button button-secondary load-more" onClick={() => setLimit((value) => value + 6)}>Load More</button>}</> : <div className="loadout-empty"><h2>No Loadouts Found</h2><p>Try another game or filter.</p></div>}</section></section></main><Footer/></div>;
}
