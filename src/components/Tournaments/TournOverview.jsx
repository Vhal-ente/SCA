import { Check, Clock3, Gamepad2, Headphones, Medal, ShieldCheck, Trophy, Users } from "lucide-react";
import { createElement } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import "./tournament-overview.css";

const facts = [[Gamepad2, "Game", "COD Mobile"], [Trophy, "Format", "Battle Royale TPP"], [Users, "Mode", "Solo"], [Medal, "Scoring", "BR Positions"]];
const timeline = [["Signup deadline", "22 Dec · 20:55 WAT"], ["Check-in", "22 Dec · 20:00–20:55 WAT"], ["Tournament start", "22 Dec · 21:00 WAT"]];
const prizes = [["1st place", "3,280 CP"], ["2nd place", "2,640 CP"], ["3rd place", "1,760 CP"], ["4th place", "1,300 CP"]];
const detailSections = [
  { title: "How to sign up", items: ["Join the tournament before the signup deadline.", "Check in during the published check-in period.", "Match and lobby details are generated at the tournament start time."] },
  { title: "Requirements", items: ["All players must currently reside in Nigeria.", "If fewer than three participants check in by the start time, the tournament may be cancelled."] },
  { title: "Quick rules", items: ["Three matches are played consecutively, with 15 minutes between matches.", "Lobby ID and password are published on the match page.", "Mode: Classic Solo – TPP.", "No specific room slot is required."] },
  { title: "Joining the room", items: ["Open the match page at the scheduled start time.", "Use the invite link or enter the published Match ID and password.", "Wait for the tournament administrator to start the room."] },
];
const admins = [["Mightyness", "/assets/admins/mightyness.svg"], ["Von", "/assets/admins/von.svg"], ["Manja", "/assets/admins/manja.svg"], ["Misha", "/assets/admins/misha.svg"]];

function FactCard({ icon, label, value }) { return <div className="tournament-fact">{createElement(icon)}<span>{label}</span><strong>{value}</strong></div>; }

export default function TournOverview() {
  const[searchParams]=useSearchParams();const tournamentId=searchParams.get("tournament")||"warzone-hyperx-2026";const tournamentStates={"warzone-hyperx-2026":["Call of Duty: Warzone by HyperX","Upcoming"],"sca-mobile-masters":["SCA Mobile Masters","Upcoming"],"pubg-red-bull":["PUBG Tournament by Red Bull","Upcoming"],"apex-legends-open":["Apex Legends Open","Live"],"rocket-league-finals":["Rocket League Finals","Ended"],"pubg-global-championship":["PUBG Global Championship","Registered"]};const[name,status]=tournamentStates[tournamentId]||tournamentStates["warzone-hyperx-2026"];const isFree=tournamentId==="sca-mobile-masters";const canRegister=status==="Upcoming";const joinPath=`/tournamentspage/join?tournament=${tournamentId}`;
  return <main className="tournament-overview"><div className="tournament-overview-container">
    <TournamentsNav/>
    <header className="tournament-title-block"><div><p className="eyebrow">Featured tournament</p><h1>{name}</h1><p>{isFree?"Mobile squads compete for the SCA Masters title in a free-entry tournament built for emerging teams.":"Contestants battle through a competitive series where every placement and result matters. Who will rise and claim the arena?"}</p></div><div className="tournament-title-actions"><span className="live-pill">{status}</span>{canRegister?<Link className="button" to={joinPath}><ShieldCheck/>Join tournament</Link>:<span className="button button-disabled" aria-disabled="true">{status==="Registered"?"Already registered":status==="Live"?"Registration closed":"Tournament ended"}</span>}</div></header>
    <section className="tournament-facts" aria-label="Tournament information">{facts.map(([Icon,label,value]) => <FactCard key={label} icon={Icon} label={label} value={value}/>)}</section>
    <div className="tournament-content-grid"><aside className="tournament-sidebar">
      <section className="tournament-panel registration-panel"><p className="panel-label">Registration</p><strong>{status==="Registered"?"Registration confirmed":canRegister?(isFree?"Free entry":"Paid entry"):"Registration closed"}</strong><span>{status==="Registered"?"You are already entered in this tournament.":canRegister?(isFree?"No payment is required. Complete the player entry form before check-in begins.":"Registration closes before check-in begins. Payment is completed securely with Paystack."):`This tournament is ${status.toLowerCase()} and no longer accepts entries.`}</span>{canRegister&&<Link className="button button-full" to={joinPath}>Join now</Link>}</section>
      <section className="tournament-panel"><div className="panel-heading"><Clock3/><h2>Timeline</h2></div><div className="timeline-list">{timeline.map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></section>
      <section className="tournament-panel"><div className="panel-heading"><Trophy/><h2>Prizes</h2></div><div className="prize-list">{prizes.map(([place,value],index) => <div key={place}><span className={`prize-rank rank-${index + 1}`}>{index + 1}</span><span>{place}</span><strong>{value}</strong></div>)}</div></section>
      <section className="tournament-panel support-panel"><Headphones/><h2>Need support?</h2><p>Report a tournament issue or contact the assigned administrator.</p><Link className="text-link" to="/community#report-issue">Get tournament help</Link></section>
    </aside><div className="tournament-details">
      <section className="overview-section"><div className="overview-section-heading"><p className="eyebrow">Before you compete</p><h2>Tournament details</h2></div><div className="detail-grid">{detailSections.map(section => <article className="detail-card" key={section.title}><h3>{section.title}</h3><ul>{section.items.map(item => <li key={item}><Check/>{item}</li>)}</ul></article>)}</div></section>
      <section className="overview-section"><div className="overview-section-heading"><p className="eyebrow">Tournament team</p><h2>Administrators</h2></div><div className="admin-grid">{admins.map(([name,image]) => <article key={name}><img src={image} alt={`Tournament administrator ${name}`}/><div><strong>{name}</strong><span>Administrator</span></div></article>)}</div></section>
    </div></div>
  </div></main>;
}
