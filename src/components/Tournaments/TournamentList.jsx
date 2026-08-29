import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { TournamentListingCard } from "../CompetitionCards";
import { api } from "@/lib/api";
import { toTournamentCard } from "@/lib/competitions";
import "../CompetitionCards/listing.css";



export default function TournamentList() {
  const [query, setQuery] = useState("");
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    api.get("/tournaments")
      .then(({ tournaments: items }) => active && setTournaments(items.map(toTournamentCard)))
      .catch(() => active && setTournaments([]))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);
  const filtered = useMemo(() => tournaments.filter(item => `${item.name} ${item.organizer}`.toLowerCase().includes(query.toLowerCase())), [query, tournaments]);
  return <div className="competition-list-page"><Navbar/><header className="competition-list-hero tournament-list-hero"><div className="container"><p className="eyebrow">Enter the arena</p><h1>Tournaments</h1><p>Discover live and upcoming SCA competitions, find your game, and secure your place in the bracket.</p></div></header><main className="competition-list-main"><div className="container"><div className="listing-toolbar"><div><p className="eyebrow">Competitive events</p><h2>Find your next tournament</h2></div><label className="listing-search"><span className="sr-only">Search tournaments</span><Search/><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search tournaments"/></label></div>{loading ? <p className="listing-empty">Loading tournaments…</p> : filtered.length ? <div className="listing-tournament-grid">{filtered.map(item => <TournamentListingCard key={item.slug} tournament={item}/>)}</div> : <p className="listing-empty">{tournaments.length ? "No tournaments match your search." : "No tournaments have been published yet. Check back soon."}</p>}</div></main><Footer/></div>;
}
