import { AlertTriangle, Check, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import "./tournament-secondary.css";

const rules = [
  ["Quick rules", ["Three matches are played consecutively.", "Players have 15 minutes to enter each generated lobby.", "Mode: Classic Solo – TPP.", "Do not share private lobby credentials."]],
  ["Room access", ["Refresh the match page when the tournament begins.", "Use the invite link or published Match ID and password.", "A restricted message means you are not assigned to that match.", "Wait for the administrator to start the room."]],
  ["Fair competition", ["PC emulators and third-party input devices are prohibited.", "Streamer mode must be disabled.", "Players may not exploit map boundaries, bugs, or glitches.", "Participants are responsible for their own connection and equipment."]],
  ["Results & evidence", ["Capture your final placement and elimination score after every game.", "Submit results before the next room starts.", "Disputes must include a screenshot or video as evidence.", "Submitting false or altered results may lead to disqualification."]],
  ["Scheduling", ["Do not delay a match without administrator approval.", "Players absent after the 15-minute grace period may forfeit.", "Contact an administrator before the next fixture if a match remains incomplete."]],
];
const points = [["1st",10],["2nd – 5th",7],["6th – 15th",5],["16th – 25th",3]];

export default function TournRules() {
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Competition integrity</p><h1>Rules</h1><p>Review the tournament format, room requirements, scoring, and conduct standards before competing.</p></div><Link className="text-link" to="/fair-play-policy">Full Fair Play Policy <ExternalLink/></Link></header><div className="rules-layout"><aside className="rules-index"><strong>On this page</strong>{rules.map(([title],index) => <a key={title} href={`#rule-${index}`}>{title}</a>)}<a href="#points-system">Points system</a></aside><div className="rules-content"><div className="rule-notice"><AlertTriangle/><p>Breaking tournament rules may result in a reversed result, point deduction, disqualification, or account suspension.</p></div>{rules.map(([title,items],index) => <section id={`rule-${index}`} className="rule-section" key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{title}</h2><ul>{items.map(item => <li key={item}><Check/>{item}</li>)}</ul></div></section>)}<section id="points-system" className="points-section"><div><p className="eyebrow">Scoring</p><h2>Points system</h2><p>Players receive one additional point per elimination.</p></div><div className="points-table">{points.map(([position,value]) => <div key={position}><span>{position}</span><strong>{value} points</strong></div>)}</div></section><div className="rules-footer-note"><ShieldCheck/><div><strong>Questions or disputes?</strong><p>Use the official tournament support channel and provide accurate match evidence.</p></div><Link className="text-link" to="/community#report-issue">Report an issue</Link></div></div></div></div></main>;
}
