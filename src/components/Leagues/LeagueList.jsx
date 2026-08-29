import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { LeagueListingCard } from "../CompetitionCards";
import { api } from "@/lib/api";
import { toLeagueCard } from "@/lib/competitions";
import "../CompetitionCards/listing.css";



export default function LeagueList() {
  const [query, setQuery] = useState("");
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    api.get("/leagues")
      .then(({ leagues: items }) => active && setLeagues(items.map(toLeagueCard)))
      .catch(() => active && setLeagues([]))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);
  const filtered = useMemo(() => leagues.filter(item => `${item.name} ${item.game}`.toLowerCase().includes(query.toLowerCase())), [query, leagues]);
  return <div className="competition-list-page"><Navbar/><header className="competition-list-hero league-list-hero"><div className="container"><p className="eyebrow">Season-long competition</p><h1>Leagues</h1><p>Follow standings, schedules, and the teams competing across SCA’s active gaming leagues.</p></div></header><main className="competition-list-main"><div className="container"><div className="listing-toolbar"><div><p className="eyebrow">Current competitions</p><h2>Explore SCA leagues</h2></div><label className="listing-search"><span className="sr-only">Search leagues</span><Search/><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search leagues"/></label></div>{loading ? <p className="listing-empty">Loading leagues…</p> : filtered.length ? <div className="listing-league-grid">{filtered.map(item => <LeagueListingCard key={item.slug} league={item}/>)}</div> : <p className="listing-empty">{leagues.length ? "No leagues match your search." : "No leagues have been published yet. Check back soon."}</p>}</div></main><Footer/></div>;
}
