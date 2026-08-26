import { ArrowLeft, BriefcaseBusiness, Building2, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CareerApplicationForm } from "@/components/Company";
import { sampleRoles } from "@/data/company";
import "../CompanyPages/company.css";

export default function CareerDetailPage() { const { slug } = useParams(); const role = sampleRoles.find(item => item.slug === slug); if (!role) return <Navigate to="/careers" replace/>; return <div className="company-page"><Navbar/><main><header className="job-detail-header"><div className="company-reading"><Link to="/careers"><ArrowLeft/>Back to Careers</Link><span className="sample-label">Sample role profile · Not currently open</span><h1>{role.title}</h1><div className="job-meta"><span><BriefcaseBusiness/>{role.department}</span><span><MapPin/>{role.location}</span><span><Building2/>{role.type}</span></div></div></header><article className="company-reading job-detail-content"><section><h2>About the role</h2><p>{role.about}</p></section>{[["Responsibilities",role.responsibilities],["Requirements",role.requirements],["Preferred qualifications",role.preferred]].map(([title,items]) => <section key={title}><h2>{title}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>)}<section className="application-section"><p className="eyebrow">Expression of interest</p><h2>Apply for This Role</h2><p>This sample form is UI-only and does not currently send application data.</p><CareerApplicationForm position={role.title}/></section></article></main><Footer/></div>; }
