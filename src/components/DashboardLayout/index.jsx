import { useState } from "react";
import { ArrowLeft, Bell, Menu } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import PasswordSettings from "@/components/PasswordSettings";
import { DashboardSidebar, dashboardNav } from "@/components/Dashboard";
import SocialLinksEditor from "@/components/ProfileSocialLinks";
import TeamCoachingStaff from "@/components/TeamCoachingStaff";
import "./dashboard.css";

export default function DashboardLayout() {
  const [open,setOpen]=useState(false);
  const {user}=useAuth();
  const {pathname}=useLocation();
  const title=dashboardNav.find(([, ,path]) => path === pathname || (path !== "/dashboard" && pathname.startsWith(path)))?.[1] || "Dashboard";
  const isTeamDetail=/^\/dashboard\/teams\/[^/]+$/.test(pathname)&&pathname!=="/dashboard/teams/create";
  const teamId=isTeamDetail?pathname.split("/").pop():null;
  return <div className="dashboard-shell"><DashboardSidebar open={open} onClose={() => setOpen(false)}/><div className="dashboard-content"><header className="dashboard-header"><button className="dashboard-menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open dashboard menu"><Menu/></button><div className="dashboard-title"><p>Player dashboard</p><h1>{title}</h1></div><div className="dashboard-header-actions"><Link className="dashboard-icon-button" to="/dashboard/notifications" aria-label="View notifications"><Bell/><span className="sr-only">Notifications</span></Link><ThemeToggle/><Link to="/dashboard/profile" className="dashboard-user"><span>{(user?.name || "P").slice(0,1).toUpperCase()}</span><div><strong>{user?.name || "Player"}</strong><small>View profile</small></div></Link></div></header><main className="dashboard-main">{isTeamDetail&&<Link className="dashboard-back-link" to="/dashboard/teams"><ArrowLeft/>Back to Teams</Link>}{pathname==="/dashboard/settings"&&<PasswordSettings/>}<Outlet/>{pathname==="/dashboard/profile"&&<SocialLinksEditor/>}{teamId&&<TeamCoachingStaff teamId={teamId}/>}</main></div></div>;
}
