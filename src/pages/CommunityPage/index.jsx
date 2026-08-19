import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CommunityGuidelines, QuickHelpAccordion, ReportIssueForm, SocialCommunityCard } from "@/components/Community";
import { communityLinks } from "@/config/links";
import "./community.css";

export default function CommunityPage() {
  return <div className="community-page"><Navbar/><main>
    <header className="community-header"><div className="container"><p className="eyebrow">Connect · Support · Report</p><h1>Join the SCA Community</h1><p>Connect with players, teams, organizers, and the wider SCA community through our official WhatsApp channel.</p></div></header>
    <section className="community-section"><div className="container"><div className="community-section-heading"><p className="eyebrow">Official channel</p><h2>Connect With Us</h2></div><div className="community-social-grid is-single">{communityLinks.map(platform => <SocialCommunityCard key={platform.name} platform={platform}/>)}</div></div></section>
    <section className="community-section community-surface"><div className="container"><CommunityGuidelines/></div></section>
    <section id="report-issue" className="community-section"><div className="container"><div className="community-section-heading"><p className="eyebrow">SCA Support</p><h2>Report an Issue</h2><p>Report tournament problems, player misconduct, payment concerns, technical issues, or account problems privately to SCA administrators.</p></div><div className="support-grid report-only"><ReportIssueForm/></div><aside className="urgent-support">For urgent tournament-related issues during an active event, use the official tournament channel or contact the assigned tournament administrator.</aside></div></section>
    <section className="community-section community-surface"><div className="container quick-help-layout"><div><p className="eyebrow">Common questions</p><h2>Quick Help</h2><p>Short answers for joining the community and getting support.</p></div><QuickHelpAccordion/></div></section>
  </main><Footer/></div>;
}
