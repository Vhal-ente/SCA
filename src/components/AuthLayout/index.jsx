import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./auth.css";

export default function AuthLayout() {
  return <div className="auth-page"><Navbar/><main className="auth-main"><section className="auth-visual" aria-label="Short Circuit Arena"><div><p className="eyebrow">Short Circuit Arena</p><h1>Your next match starts here.</h1><p>Join competitive players, build your team, and enter SCA tournaments and leagues.</p><div className="auth-points"><span>Online tournaments</span><span>Seasonal leagues</span><span>Competitive community</span></div></div></section><section className="auth-form-panel"><Outlet/></section></main><Footer/></div>;
}
