import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../Leagues/league-detail.css";

export default function LeaguePageWrapper() {
  return <div className="league-page-shell"><Navbar/><header className="league-cover" aria-label="Path of Legends league"><div className="league-cover-overlay"/><img src="/assets/path_of_legends.png" alt="Path of Legends"/></header><Outlet/><Footer/></div>;
}
