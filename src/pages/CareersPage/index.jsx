/* eslint-disable no-unused-vars */
import { Code2, Gamepad2, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CompanyHero, EmptyRoles, JobCard, UnavailablePage } from "@/components/Company";
import { useSiteContent } from "@/hooks/useApi";
import { pageVisible } from "@/lib/siteContent";
import { sampleRoles } from "@/data/company";
import "../CompanyPages/company.css";

const reasons = [[Gamepad2,"Growing industry","Work within the growing esports and gaming industry."],[Palette,"Player experiences","Help build products and experiences for competitive gamers."],[Users,"Cross-functional work","Collaborate across design, technology, operations, and community."],[Code2,"Meaningful events","Contribute to tournaments, leagues, and gaming events."]];
// A job staff publish in the console, in the shape the job cards show.
const toRole = job => ({ slug: job.id, title: job.title, department: job.department, location: job.location, type: job.type, summary: job.shortDescription });

export default function CareersPage() {
  const { content } = useSiteContent("website");
  if (!pageVisible(content, "careers")) return <div className="company-page"><Navbar/><main><UnavailablePage title="Careers"/></main><Footer/></div>;
  // Once staff manage careers, only their open jobs show; the sample profiles are for before then.
  const careers = content.careers;
  const roles = (careers?.jobs || []).filter(job => job.status === "Open").map(toRole);
  return <div className="company-page"><Navbar/><main><CompanyHero eyebrow="Careers at SCA" title={careers?.intro || "Build the Future of Competitive Gaming"} copy={careers?.description || "Join SCA and help us build better experiences for players, teams, tournament organizers, and gaming communities."}><a className="button" href="#open-roles">{careers?.cta || "View Open Roles"}</a></CompanyHero><section className="company-section"><div className="company-container"><div className="company-heading"><p className="eyebrow">Working at SCA</p><h2>Why Work With SCA</h2></div><div className="reason-grid">{reasons.map(([Icon,title,copy]) => <article key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section><section id="open-roles" className="company-section company-surface"><div className="company-container"><div className="company-heading"><p className="eyebrow">Current vacancies</p><h2>Open Roles</h2></div>{roles.length ? <div className="job-grid">{roles.map(role => <JobCard key={role.slug} role={role} sample={false}/>)}</div> : <EmptyRoles message={careers?.emptyMessage}/>}</div></section>{!careers && <section className="company-section"><div className="company-container"><div className="company-heading"><p className="eyebrow">For future planning</p><h2>Example Role Profiles</h2><p>These sample profiles show the types of opportunities SCA may recruit for. They are not active vacancies.</p></div><div className="job-grid">{sampleRoles.map(role => <JobCard key={role.slug} role={role}/>)}</div></div></section>}</main><Footer/></div>;
}
