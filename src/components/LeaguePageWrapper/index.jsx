import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../Leagues/league-detail.css";
import { useCompetitionPage } from "@/lib/competitionPage";

// The cover shows the league's banner, or the default artwork without one.
export default function LeaguePageWrapper() {
  const { competition } = useCompetitionPage("league");
  const name = competition?.name || "SCA league";
  return <div className="league-page-shell"><Navbar/><header className="league-cover" aria-label={name}><div className="league-cover-overlay"/><img src={competition?.bannerUrl || "/assets/path_of_legends.png"} alt={name}/></header><Outlet/><Footer/></div>;
}
