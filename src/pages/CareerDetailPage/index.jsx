import { ArrowLeft, BriefcaseBusiness, Building2, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CareerApplicationForm } from "@/components/Company";
import { sampleRoles } from "@/data/company";
import { useSiteContent } from "@/hooks/useApi";
import { lines } from "@/lib/siteContent";
import "../CompanyPages/company.css";

// A job staff publish in the console, in the shape this page shows.
const toRole = job => ({
  slug: job.id, title: job.title, department: job.department, location: job.location, type: job.type,
  about: job.description || job.shortDescription, responsibilities: lines(job.responsibilities), requirements: lines(job.requirements),
  preferred: [], applicationLink: job.applicationLink, live: true,
});

export default function CareerDetailPage() {
  const { slug } = useParams();
  const { content, loading } = useSiteContent("website");
  const job = content.careers?.jobs?.find(item => item.id === slug && item.status === "Open");
  const role = job ? toRole(job) : content.careers ? null : sampleRoles.find(item => item.slug === slug);
  if (loading && !role) return <div className="company-page"><Navbar/><main/><Footer/></div>;
  if (!role) return <Navigate to="/careers" replace/>;
  const sections = [["Responsibilities", role.responsibilities], ["Requirements", role.requirements], ["Preferred qualifications", role.preferred]].filter(([, items]) => items?.length);
  const link = role.applicationLink?.trim();
  return <div className="company-page"><Navbar/><main><header className="job-detail-header"><div className="company-reading"><Link to="/careers"><ArrowLeft/>Back to Careers</Link>{!role.live && <span className="sample-label">Sample role profile · Not currently open</span>}<h1>{role.title}</h1><div className="job-meta"><span><BriefcaseBusiness/>{role.department}</span><span><MapPin/>{role.location}</span><span><Building2/>{role.type}</span></div></div></header><article className="company-reading job-detail-content">{role.about && <section><h2>About the role</h2><p>{role.about}</p></section>}{sections.map(([title,items]) => <section key={title}><h2>{title}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>)}<section className="application-section"><p className="eyebrow">{role.live ? "Applications open" : "Expression of interest"}</p><h2>Apply for This Role</h2>{role.live ? <a className="button" href={/^https?:/i.test(link || "") ? link : `mailto:${link || "info@sca.gg"}?subject=${encodeURIComponent(`Application: ${role.title}`)}`} target="_blank" rel="noreferrer">Apply now</a> : <><p>This sample form is UI-only and does not currently send application data.</p><CareerApplicationForm position={role.title}/></>}</section></article></main><Footer/></div>;
}
