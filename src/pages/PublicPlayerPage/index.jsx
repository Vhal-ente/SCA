import { ArrowLeft,Gamepad2,MapPin,Shield,Trophy,Users } from "lucide-react";
import { Link,useNavigate,useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadoutCard from "@/components/LoadoutCard";
import { getPlayerProfile } from "@/data/playerProfiles";
import { getAchievementPreferences,getVisibleAchievements } from "@/data/achievements";
import { AchievementBadge } from "@/components/Achievements";
import { getCoachingProfile } from "@/data/coaching";
import { getPublicSocials } from "@/data/socialLinks";
import { getAuthorLoadouts } from "@/data/loadouts";
import { SocialLinksDisplay } from "@/components/ProfileSocialLinks";
import { PublicGameList } from "@/components/PlayerGameAccounts";
import { getPublicPlayerGames } from "@/data/playerGameAccounts";
import "@/components/DashboardLayout/dashboard.css";
import "@/pages/LoadoutsPage/loadouts.css";

export default function PublicPlayerPage(){
  const{username}=useParams();const navigate=useNavigate();const player=getPlayerProfile(username);const teamSlug=player.team.toLowerCase().replace(/[^a-z0-9]+/g,"-");const achievements=getVisibleAchievements(player.slug);const preferences=getAchievementPreferences(player.slug);const featured=achievements.filter(item=>preferences.items[item.id]?.featured);const remaining=achievements.filter(item=>!preferences.items[item.id]?.featured);const coaching=getCoachingProfile(player.slug);const socials=getPublicSocials(player.slug);const loadouts=getAuthorLoadouts(player.slug).filter(item=>item.status==="Published").sort((a,b)=>Number(b.featured)-Number(a.featured)).slice(0,3);const games=getPublicPlayerGames(player.slug,player.game);const primaryGame=games.find(item=>item.isPrimary)||games[0];
  return <div className="public-player-page"><Navbar/><main>
    <header className="public-player-header"><div className="dashboard-main"><button className="public-player-back" type="button" onClick={()=>window.history.state?.idx>0?navigate(-1):navigate("/landingpage")}><ArrowLeft/>Back to previous page</button><div className="public-player-hero"><div className="public-avatar">{player.image?<img src={player.image} alt={`Portrait of ${player.name}`}/>:player.ign.slice(0,1).toUpperCase()}</div><div><p className="eyebrow">SCA player profile</p><h1>{player.ign}</h1><p>{player.name}</p><div className="public-player-meta"><span><Shield/>{player.role}</span><span><Users/>{player.team}</span>{primaryGame&&<span><Gamepad2/>{primaryGame.game}{primaryGame.ign&&` · ${primaryGame.ign}`}</span>}<span><MapPin/>{player.country}</span>{coaching?.enabled&&<span>Coach · {coaching.roles[0]}</span>}</div>{featured.length>0&&<div className="public-featured-achievements">{featured.map(item=><AchievementBadge key={item.id} achievement={item} compact/>)}</div>}</div></div></div></header>
    <div className="dashboard-main public-player-content"><section className="dashboard-panel public-player-about"><p className="eyebrow">Player overview</p><h2>About {player.ign}</h2><p>{player.bio}</p></section><section className="player-stats"><article><Trophy/><span>Tournaments</span><strong>4</strong></article><article><Shield/><span>Wins</span><strong>1</strong></article><article><Gamepad2/><span>Matches</span><strong>12</strong></article><article><Users/><span>Team</span><strong>{player.team==="No team"?"—":player.team}</strong></article></section>
      {games.length>0&&<section className="dashboard-panel public-games-section"><p className="eyebrow">Player accounts</p><h2>Games &amp; IGNs</h2><PublicGameList games={games}/></section>}
      {coaching?.enabled&&<section className="dashboard-panel public-coaching-profile"><p className="eyebrow">Coaching Profile</p><div className="public-coaching-heading"><div><h2>{coaching.displayName}</h2><p>{coaching.bio}</p></div><span>{coaching.status}</span></div><dl><div><dt>Coaching roles</dt><dd>{coaching.roles.join(", ")}</dd></div><div><dt>Games coached</dt><dd>{coaching.games.join(", ")}</dd></div><div><dt>Experience</dt><dd>{coaching.experience}</dd></div><div><dt>Current coaching team</dt><dd>{coaching.currentTeam||"Independent"}</dd></div></dl>{coaching.history?.length>0&&<div className="public-coaching-history"><h3>Coaching History</h3>{coaching.history.map(item=><p key={`${item.team}-${item.joined}`}><strong>{item.team}</strong> · {item.role} · {item.competitions} competitions</p>)}</div>}</section>}
      {achievements.length>0&&<section className="dashboard-panel public-achievements"><p className="eyebrow">Player record</p><h2>Achievements &amp; Badges</h2><div className="public-achievement-grid">{[...featured,...remaining].map(item=><article key={item.id}><AchievementBadge achievement={item}/><p>{item.description}</p><time>{item.dateEarned}</time>{item.competition&&<small>{item.competition}</small>}</article>)}</div></section>}
      <section className="dashboard-panel"><h2>Recent competition</h2><div className="public-competition-row"><div><span>Path of Legends</span><strong>Season 3</strong></div><small>Active</small></div></section>
      {loadouts.length>0&&<section className="dashboard-panel public-player-loadouts"><div className="dashboard-section-title"><div><p className="eyebrow">Knowledge shared</p><h2>Loadouts &amp; Strategies</h2></div><Link className="text-link" to={`/loadouts?author=${player.slug}`}>View All Loadouts</Link></div><div className="loadout-grid">{loadouts.map(item=><LoadoutCard key={item.id} loadout={item}/>)}</div></section>}
      {socials.showSocials&&(socials.links.length>0||socials.primaryStream)&&<section className="dashboard-panel"><p className="eyebrow">Connect</p><h2>Social &amp; Streaming</h2><SocialLinksDisplay profile={socials}/></section>}
      {player.team!=="No team"&&<section className="dashboard-panel public-team-cta"><div><p className="eyebrow">Current team</p><h2>{player.team}</h2></div><Link className="button button-secondary" to={`/teams/${teamSlug}`}>View team</Link></section>}
    </div>
  </main><Footer/></div>
}
