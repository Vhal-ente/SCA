import { AlertTriangle, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import TournamentsNav from "../Navbar/TournamentsNav";
import Markdown from "../Markdown";
import { CompetitionMissing } from "./TournOverview";
import { useCompetitionPage } from "@/lib/competitionPage";
import "./tournament-secondary.css";

// CompetitionRules shows the rules staff wrote for this competition.
export function CompetitionRules({ competition, kind = "tournament" }) {
  return <div className="rules-content"><div className="rule-notice"><AlertTriangle/><p>Breaking {kind} rules may result in a reversed result, point deduction, disqualification, or account suspension.</p></div>{competition.rules?.trim() ? <section className="rule-section rule-markdown"><div><Markdown source={competition.rules}/></div></section> : <p className="secondary-empty">The rules for this {kind} will be published before it starts. The SCA Fair Play Policy applies in the meantime.</p>}<div className="rules-footer-note"><ShieldCheck/><div><strong>Questions or disputes?</strong><p>Use the official support channel and provide accurate match evidence.</p></div><Link className="text-link" to="/community#report-issue">Report an issue</Link></div></div>;
}

export default function TournRules() {
  const { competition, loading, missing } = useCompetitionPage("tournament");
  if (loading || missing) return <CompetitionMissing loading={loading}/>;
  return <main className="tournament-secondary"><div className="tournament-secondary-container"><TournamentsNav/><header className="secondary-header"><div><p className="eyebrow">Competition integrity</p><h1>Rules</h1><p>Review the format, requirements and conduct standards for {competition.name} before competing.</p></div><Link className="text-link" to="/fair-play-policy">Full Fair Play Policy <ExternalLink/></Link></header><CompetitionRules competition={competition}/></div></main>;
}
