import { createElement, useState } from "react";
import { AlertTriangle, ArrowRight, Check, ChevronDown, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";

const icons = { whatsapp: FaWhatsapp };

export function SocialCommunityCard({ platform }) {
  return <article className="community-social-card">{createElement(icons[platform.icon], { "aria-hidden": true })}<h3>{platform.name}</h3><p>{platform.description}</p><a className="text-link" href={platform.url} target="_blank" rel="noreferrer" aria-label={`${platform.action} (opens in a new tab)`}>{platform.action}<ArrowRight/></a></article>;
}

export function CommunityGuidelines() {
  const guidelines = ["Respect other players and community members.", "No harassment, hate speech, or abusive behaviour.", "Do not share scams, spam, or misleading links.", "Follow SCA’s Fair Play Policy and community rules."];
  return <section className="community-guidelines"><div><p className="eyebrow">Play together</p><h2>Community Guidelines</h2><p>Simple standards that help keep SCA welcoming and competitive.</p><Link className="text-link" to="/fair-play-policy">Read Fair Play Policy <ArrowRight/></Link></div><ul>{guidelines.map(item => <li key={item}><Check/>{item}</li>)}</ul></section>;
}

function Field({ label, children, hint }) { return <label className="support-field"><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>; }

export function ReportIssueForm() {
  const [status, setStatus] = useState("");
  const submit = (event) => { event.preventDefault(); if (!event.currentTarget.reportValidity()) return; setStatus("Your report is ready. Connect a secure support backend before accepting live reports."); event.currentTarget.reset(); };
  return <article className="support-card report-card"><div className="support-card-heading"><AlertTriangle/><div><h3>Report an Issue</h3><p>Privately document misconduct, technical, payment, or tournament issues.</p></div></div><form onSubmit={submit}><div className="field-pair"><Field label="Full Name (optional)"><input name="name" autoComplete="name"/></Field><Field label="Email Address" hint="Required only if you want a response."><input name="email" type="email" autoComplete="email"/></Field></div><Field label="Report Type"><select name="type" required defaultValue=""><option value="" disabled>Select report type</option>{["Player Misconduct","Cheating / Fair Play","Tournament Issue","Payment Issue","Technical Problem","Account Issue","Harassment","Other"].map(item => <option key={item}>{item}</option>)}</select></Field><div className="field-pair"><Field label="Tournament (optional)"><input name="tournament"/></Field><Field label="Player / Team Username (optional)"><input name="player"/></Field></div><Field label="Description"><textarea name="description" rows="6" required placeholder="Describe what happened and include as much relevant information as possible."/></Field><Field label="Evidence" hint="File uploads will be enabled when secure report storage is connected."><input type="file" disabled/></Field><button className="button" type="submit">Submit Report</button>{status && <p className="form-status" role="status">{status}</p>}<p className="report-privacy"><ShieldCheck/>Reports are reviewed privately by SCA administrators. Please provide accurate information and avoid submitting false or misleading reports. <Link to="/privacy-policy">Privacy Policy</Link></p></form></article>;
}

const quickHelp = [["How do I join the SCA community?", "Use the official WhatsApp Community link above to join."], ["How do I report a player?", "Use the Report an Issue form and include the player name, tournament, and any relevant evidence."], ["How long does support take to respond?", "Response times vary with tournament activity and the type of request."], ["Where can I get help during a live tournament?", "Use the official tournament channel or contact the assigned tournament administrator."]];

export function QuickHelpAccordion() {
  const [open, setOpen] = useState(0);
  return <div className="quick-help-list">{quickHelp.map(([question, answer], index) => <div className={`quick-help-item ${open === index ? "is-open" : ""}`} key={question}><h3><button type="button" aria-expanded={open === index} aria-controls={`quick-help-${index}`} onClick={() => setOpen(open === index ? -1 : index)}>{question}<ChevronDown/></button></h3><div id={`quick-help-${index}`} className="quick-help-answer"><p>{answer}</p></div></div>)}</div>;
}
