import { useCallback, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlayerCard, PlayerModal, ShogunMark } from "@/components/Shogun";
import { shogunDivisions, shogunPlayers } from "@/data/shogun";
import "../ShogunPage/shogun.css";

export default function ShogunRosterPage() {
  const { division: divisionSlug } = useParams();
  const division = shogunDivisions.find(item => item.slug === divisionSlug);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const closeModal = useCallback(() => setSelectedPlayer(null), []);
  if (!division) return <Navigate to="/shogun" replace/>;

  return <div className="shogun-page roster-page"><Navbar/><main><div className="container roster-shell"><div className="roster-topline"><ShogunMark compact/><span>Official SCA Sponsored Team</span></div><Link className="roster-back" to="/shogun"><ArrowLeft/>Back to Shogun</Link><header className="roster-header"><img src={division.image} alt=""/><div><p className="shogun-eyebrow">Shogun division</p><h1>{division.name}</h1><p>{division.description}</p></div></header><section className="player-grid" aria-label={`${division.name} roster`}>{shogunPlayers[division.slug].map(player => <PlayerCard key={player.ign} player={player} onSelect={setSelectedPlayer}/>)}</section></div></main><PlayerModal player={selectedPlayer} onClose={closeModal}/><Footer/></div>;
}
