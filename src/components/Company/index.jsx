import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Building2, Check, Copy, Download, Image as ImageIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function CompanyHero({ eyebrow, title, copy, children }) { return <header className="company-hero"><div className="company-container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p>{children && <div className="button-row">{children}</div>}</div></header>; }

export function JobCard({ role }) { return <article className="job-card"><span className="sample-label">Sample role profile</span><h3>{role.title}</h3><div className="job-meta"><span><BriefcaseBusiness/>{role.department}</span><span><MapPin/>{role.location}</span><span><Building2/>{role.type}</span></div><p>{role.summary}</p><Link className="text-link" to={`/careers/${role.slug}`}>View role profile <ArrowRight/></Link></article>; }

export function CareerApplicationForm({ position }) {
  const [sent,setSent] = useState(false);
  return <form className="company-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="company-form-grid"><label>Full Name<input required name="fullName" autoComplete="name"/></label><label>Email Address<input required type="email" name="email" autoComplete="email"/></label><label>Phone Number<input required type="tel" name="phone" autoComplete="tel"/></label><label>Location<input required name="location" autoComplete="address-level1"/></label><label className="form-wide">LinkedIn / Portfolio URL<input type="url" name="portfolio" placeholder="https://"/></label><label className="form-wide">Position<input name="position" value={position} readOnly/></label><label className="form-wide">Short Cover Note<textarea required name="coverNote" rows="5"/></label><label className="form-wide file-field">CV Upload<input required type="file" name="cv" accept=".pdf,.doc,.docx"/><small>PDF, DOC, or DOCX</small></label></div><button className="button" type="submit">Apply for This Role <ArrowRight/></button>{sent && <p className="form-success" role="status">Application captured in this demo. Connect a recruitment service before launch to receive submissions.</p>}</form>;
}

export function SponsorshipCard({ title, copy }) { return <article className="sponsorship-card"><span><Check/></span><h3>{title}</h3><p>{copy}</p></article>; }

export function SponsorEnquiryForm() {
  const [sent,setSent] = useState(false);
  return <form className="company-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="company-form-grid"><label>Company / Brand Name<input required name="company"/></label><label>Contact Name<input required name="contact" autoComplete="name"/></label><label>Work Email<input required type="email" name="email" autoComplete="email"/></label><label>Phone Number<input required type="tel" name="phone" autoComplete="tel"/></label><label>Website<input type="url" name="website" placeholder="https://"/></label><label>Industry<input required name="industry"/></label><label>Type of Partnership<select required defaultValue=""><option value="" disabled>Select an option</option><option>Tournament Sponsorship</option><option>League Sponsorship</option><option>Prize Sponsorship</option><option>Content Partnership</option><option>Team Sponsorship</option><option>Custom Partnership</option></select></label><label>Estimated Budget Range<select required defaultValue=""><option value="" disabled>Select a range</option><option>To be discussed</option><option>Community activation</option><option>Campaign partnership</option><option>Long-term partnership</option></select></label><label className="form-wide">Message<textarea required name="message" rows="5"/></label></div><button className="button" type="submit">Submit Partnership Enquiry <ArrowRight/></button>{sent && <p className="form-success" role="status">Enquiry captured in this demo. Connect the form to the partnerships inbox before launch.</p>}</form>;
}

export function PressAssetCard({ name, format, src, preview = src }) { return <article className="press-asset-card"><div><img src={preview} alt={`${name} preview`}/></div><section><span>{format}</span><h3>{name}</h3><a className="text-link" href={src} download>Download {format} <Download/></a></section></article>; }

export function BrandColorItem({ name, value }) {
  const [copied,setCopied] = useState(false);
  return <article className="brand-color-item"><span style={{ background:value }}/><div><strong>{name}</strong><code>{value}</code></div><button type="button" onClick={() => { navigator.clipboard?.writeText(value); setCopied(true); }} aria-label={`Copy ${name} color value`}><Copy/>{copied ? "Copied" : "Copy"}</button></article>;
}

export function MediaAssetCard({ name, src }) { return <article className="media-asset-card"><img src={src} alt={name}/><div><h3>{name}</h3><a href={src} download aria-label={`Download ${name}`}><Download/></a></div></article>; }

export function EmptyRoles() { return <div className="empty-roles"><BriefcaseBusiness/><h3>No Open Roles Right Now</h3><p>We currently do not have any open positions. Follow SCA or check back later for future opportunities.</p><a className="button" href="mailto:info@sca.gg?subject=Career interest">Send Your Interest</a></div>; }

export function AssetPlaceholder() { return <div className="asset-placeholder"><ImageIcon/><span>Asset unavailable</span></div>; }
