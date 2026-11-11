import { createElement, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Check, ChevronDown, Gamepad2, Gift, Mail, Medal, ShieldCheck, Target, Trophy, Users, UserPlus } from "lucide-react";
import { SiActivision, SiDiscord, SiEa, SiHyperx, SiIntel, SiRedbull, SiUbisoft } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useApi, useSiteContent } from "@/hooks/useApi";
import { toLeagueCard, toTournamentCard } from "@/lib/competitions";
import { toNewsCard } from "@/lib/news";
import "./landing.css";

const games = [["Call of Duty", "/assets/games/call_of_duty.png"], ["Warzone Mobile", "/assets/games/warzone_mobile.png"], ["Mobile Legends", "/assets/games/mobile_legend_bang_bang.png"], ["Farlight 84", "/assets/games/farlight84.png"], ["Clash of Clans", "/assets/games/clash_of_clans.png"], ["Shadow Fight", "/assets/games/shadow_fight_arena.png"], ["Blood Strike", "/assets/games/project_blood_strike.png"], ["PUBG New State", "/assets/games/PUBG_new_state.png"]];
const partners = [["EA", SiEa], ["Activision", SiActivision], ["Ubisoft", SiUbisoft], ["Intel", SiIntel], ["Red Bull", SiRedbull], ["HyperX", SiHyperx], ["Discord", SiDiscord]];
// Shown until staff publish FAQs from the console.
const defaultFaqs = [
  ["How do SCA tournaments work?", "Choose an open competition, register as a player or team, and follow the published bracket, match schedule, and rules."],
  ["How do I register?", "Create an SCA account, complete your player profile, then select Join on any tournament accepting registrations."],
  ["Can I create or join a team?", "Yes. Players can create a team, invite teammates, or join an existing roster before registration closes."],
  ["How are prizes distributed?", "Prize details are listed on each event page. Verified winners receive payouts according to the tournament rules and timeline."],
  ["How can I organize a tournament?", "Use Host a Tournament to tell us about your event. Our team will help with structure, operations, and promotion."],
  ["How can brands partner with SCA?", "We offer event sponsorships, branded competitions, community activations, and tailored partnership packages."],
];

function SectionHeader({ eyebrow, title, copy, action }) { return <div className="section-header"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action}</div>; }
function TournamentCard({ tournament }) { return <article className="tournament-card"><div className="card-image"><img src={tournament.image || "/assets/tournament_images/tournament_list_img.png"} alt=""/><span className={`status ${tournament.status.toLowerCase()}`}>{tournament.status}</span></div><div className="card-body"><h3>{tournament.name}</h3><p><CalendarDays/>{tournament.date}</p><div className="tournament-meta"><span><Users/>{tournament.participants ? `${tournament.participants} ${tournament.mode === "solo" ? "players" : "teams"}` : "Open entry"}</span><span><Trophy/>{tournament.prize || "Prize to be announced"}</span></div><Link className="button button-full" to={`/tournamentspage/overview?tournament=${tournament.slug}`}>View tournament <ArrowRight/></Link></div></article>; }
// FAQs come from the console once staff have saved them; until then the built-in list shows.
function useFaqs() {
  const { content } = useSiteContent("website");
  return useMemo(() => Array.isArray(content.faqs)
    ? [...content.faqs].sort((a, b) => (a.order || 0) - (b.order || 0)).map(item => [item.question, item.answer])
    : defaultFaqs, [content.faqs]);
}
function FAQAccordion({ faqs }) { const [open, setOpen] = useState(0); return <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={question}><h3><button aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => setOpen(open === index ? -1 : index)}>{question}<ChevronDown aria-hidden="true"/></button></h3><div id={`faq-${index}`} className="faq-answer" role="region"><p>{answer}</p></div></div>)}</div>; }

const byStage = { Live: 0, Upcoming: 1, Ended: 2 };

export default function LandingPage() {
  const { data: tournamentData, loading: tournamentsLoading } = useApi("/tournaments");
  const { data: leagueData } = useApi("/leagues");
  const { data: newsData } = useApi("/news?limit=3");
  const faqs = useFaqs();
  const tournaments = (tournamentData?.tournaments || []).map(toTournamentCard)
    .sort((a, b) => (byStage[a.status] ?? 3) - (byStage[b.status] ?? 3)).slice(0, 3);
  const leagues = (leagueData?.leagues || []).map(toLeagueCard).slice(0, 3);
  const news = (newsData?.articles || []).map(toNewsCard);
  return <div className="landing-page"><Navbar/><main>
  <section className="hero" aria-labelledby="hero-title"><div className="container hero-content"><p className="eyebrow">Short Circuit Arena</p><h1 id="hero-title">Compete.<br/><span>Conquer.</span><br/>Make history.</h1><p className="hero-copy">SCA hosts online tournaments and leagues where competitive gamers, teams, and communities come to play at their best.</p><div className="button-row"><Link className="button" to="/tournaments/tournamentlist">Join a tournament <ArrowRight/></Link><a className="button button-secondary" href="#partners">Become a partner</a></div></div></section>
  <section className="stats" aria-label="SCA platform statistics"><div className="container stats-grid">{[[Users,"25K+","Active players"],[Trophy,"1.2K+","Tournaments"],[ShieldCheck,"8.6K+","Registered teams"],[Gift,"$250K+","Prize pools"]].map(([Icon,value,label]) => <div className="stat" key={label}>{createElement(Icon)}<div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>
  <section id="about" className="section"><div className="container intro-grid"><div><p className="eyebrow">Built for competition</p><h2>Where the gaming community levels up</h2></div><p>SCA brings players, teams, organizers, and brands together through well-run competitions built around fair play, strong communities, and unforgettable moments.</p></div></section>
  <section id="partners" className="partner-strip" aria-labelledby="partner-heading"><span id="community" className="anchor-target"/><div className="container"><p id="partner-heading">Trusted by leading brands</p><div className="partner-logos">{partners.map(([name, Logo]) => <div className="partner-logo" key={name} aria-label={name} title={name}>{createElement(Logo, { "aria-hidden": true })}<span className="sr-only">{name}</span></div>)}</div></div></section>
  <section id="how-it-works" className="section how-section"><div className="container"><SectionHeader eyebrow="Simple by design" title="How SCA works" copy="From signup to the final scoreboard, every step is clear."/><div className="steps">{[[UserPlus,"Create an account","Set up your competitive profile."],[Gamepad2,"Join or create","Choose a tournament or host one."],[Target,"Compete & track","Play matches and follow progress."],[Medal,"Win rewards","Earn prizes and build your rank."]].map(([Icon,title,copy],i)=><div className="step" key={title}><span className="step-number">0{i+1}</span>{createElement(Icon)}<h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>
  <section id="tournaments" className="section surface-section"><div className="container"><SectionHeader eyebrow="Featured competition" title="Tournaments" copy="Enter the arena in SCA’s live and upcoming events." action={<Link className="text-link" to="/tournaments/tournamentlist">View all tournaments <ArrowRight/></Link>}/>{tournaments.length ? <div className="tournament-grid">{tournaments.map(t=><TournamentCard key={t.slug} tournament={t}/>)}</div> : <p className="section-empty">{tournamentsLoading ? "Loading tournaments…" : "New tournaments are announced here. Check back soon."}</p>}</div></section>
  <section className="section"><div className="container split-sections"><div id="leagues"><SectionHeader eyebrow="Seasonal play" title="Leagues" action={<Link className="text-link" to="/leagues/leaguelist">View all <ArrowRight/></Link>}/>{leagues.length ? <div className="league-grid">{leagues.map(l=><Link to={`/leaguespage/leaguepageoverview?league=${l.slug}`} className="league-card" key={l.slug}><img src={l.image || "/assets/league_images/league_list_img.png"} alt={`${l.name} logo`}/><h3>{l.name}</h3><p>{l.description}</p></Link>)}</div> : <p className="section-empty">League seasons are announced here.</p>}</div><div id="games"><SectionHeader eyebrow="Supported titles" title="Games"/><div className="games-grid">{games.map(([name,image])=><div className="game-item" key={name}><img src={image} alt=""/><span>{name}</span></div>)}</div></div></div></section>
  <section className="section surface-section"><div className="container"><SectionHeader eyebrow="News & updates" title="What’s happening" copy="The latest from the SCA community." action={<Link className="text-link" to="/news">View all news <ArrowRight/></Link>}/>{news.length ? <div className="news-list">{news.map(article=><Link to={`/news/${article.slug}`} className="news-item" key={article.slug}><img src={article.image} alt=""/><div><span>{article.category}</span><h3>{article.title}</h3><time>{article.date}</time></div><ArrowRight aria-hidden="true"/></Link>)}</div> : <p className="section-empty">News and announcements appear here.</p>}</div></section>
  <section id="organizers" className="section"><div className="container organizer-panel"><div><p className="eyebrow">Build with SCA</p><h2>For Organizers & Partners</h2><p>Run professional tournaments, reach competitive gamers, and create measurable brand moments with a team that understands esports.</p><div className="benefit-list">{["Professional tournament operations","Brand exposure and sponsorships","Analytics and reporting"].map(x=><span key={x}><Check/>{x}</span>)}</div></div><div className="button-row"><Link className="button" to="/signup">Host a tournament</Link><a className="button button-secondary" href="mailto:info@sca.gg">Become a partner</a></div></div></section>
  <section id="faq" className="section surface-section"><div className="container faq-layout"><div><p className="eyebrow">Need to know</p><h2>Frequently asked questions</h2><p>Everything you need to get started as a player, organizer, or partner.</p></div>{faqs.length ? <FAQAccordion faqs={faqs}/> : <p className="section-empty">Questions and answers are coming soon.</p>}</div></section>
  <section className="section"><div className="container newsletter"><div><Mail/><div><h2>Never Miss a Tournament</h2><p>Get tournament announcements, league launches, prize updates, and SCA news.</p></div></div><form onSubmit={(e)=>e.preventDefault()}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="you@example.com"/><button className="button" type="submit">Subscribe</button></form></div></section>
  <section className="final-cta"><div className="container"><div><p className="eyebrow">Your next match starts here</p><h2>Ready to compete?</h2><p>Join players competing in SCA tournaments and leagues.</p></div><div className="button-row"><Link className="button" to="/signup">Join now</Link><Link className="button button-secondary" to="/tournaments/tournamentlist">Explore tournaments</Link></div></div></section>
</main><Footer/></div>; }
