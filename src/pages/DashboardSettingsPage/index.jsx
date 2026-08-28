import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { SectionTitle } from "@/components/Dashboard";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { getGamesPrivacy, saveGamesPrivacy } from "@/data/playerGameAccounts";

export default function DashboardSettingsPage(){const{logout,user}=useAuth();const navigate=useNavigate();const{theme,setThemeMode,mode}=useTheme();const ids=useMemo(()=>[user?.id,user?.ign,user?.name,user?.email].filter(Boolean),[user]);const[showGames,setShowGames]=useState(()=>getGamesPrivacy(ids[0]||"demo-player"));const toggle=value=>{setShowGames(value);saveGamesPrivacy(ids,value)};return <div className="dashboard-stack"><section className="dashboard-panel"><SectionTitle title="Appearance"/><div className="appearance-options">{["light","dark","system"].map(value=><button type="button" className={(mode||theme)===value?"is-active":""} key={value} onClick={()=>setThemeMode(value)}>{value}</button>)}</div></section><section className="dashboard-panel"><SectionTitle title="Privacy" copy="Private player IDs, email, phone, and payment details are never shown publicly."/><div className="settings-list"><label><span><strong>Show Games on Public Profile</strong><small>When enabled, games appear publicly and each game's IGN visibility is respected.</small></span><input type="checkbox" checked={showGames} onChange={e=>toggle(e.target.checked)}/></label></div></section><section className="dashboard-panel danger-zone"><SectionTitle title="Account Actions"/><div><button className="button button-secondary" type="button" onClick={()=>{logout();navigate("/login")}}><LogOut/>Logout</button></div></section></div>}
