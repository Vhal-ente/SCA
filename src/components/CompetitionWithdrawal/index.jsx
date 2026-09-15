import { useEffect, useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { api } from "@/lib/api";

const nouns={tournament:"Tournament",league:"League"};

export default function CompetitionWithdrawal({type,name,slug,onWithdrawn,compact=false}) {
  const item={name:name||nouns[type],noun:nouns[type]};
  const [error,setError]=useState("");
  const [saving,setSaving]=useState(false);
  const [open,setOpen]=useState(false);
  const [reason,setReason]=useState("");
  const [details,setDetails]=useState("");
  const [submitted,setSubmitted]=useState(false);

  useEffect(()=>{
    if(!open)return;
    const close=event=>event.key==="Escape"&&setOpen(false);
    document.addEventListener("keydown",close);
    document.body.style.overflow="hidden";
    return()=>{document.removeEventListener("keydown",close);document.body.style.overflow=""};
  },[open]);

  const close=()=>{setOpen(false);setReason("");setDetails("")};
  const submit=async event=>{
    event.preventDefault();
    if(!slug){setSubmitted(true);setOpen(false);return}
    setError("");setSaving(true);
    try{
      await api.delete(`/${type}s/${slug}/registrations`);
      setSubmitted(true);setOpen(false);onWithdrawn?.();
    }catch(withdrawError){setError(withdrawError.message)}
    finally{setSaving(false)}
  };

  if(submitted)return <div className={`withdrawal-submitted${compact?" is-compact":""}`} role="status"><AlertTriangle/><span>{compact?"Withdrawal submitted":`Your withdrawal request for ${item.name} has been submitted for review.`}</span></div>;

  return <>{compact?<button className="button withdraw-card-button button-small" type="button" onClick={()=>setOpen(true)}>Withdraw</button>:<div className="withdrawal-action"><div><strong>Active {item.noun}</strong><span>{item.name}</span></div><button className="button button-secondary button-small" type="button" onClick={()=>setOpen(true)}>Withdraw</button></div>}{open&&<div className="dashboard-modal-backdrop" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&close()}><div className="dashboard-modal withdrawal-modal" role="dialog" aria-modal="true" aria-labelledby={`${type}-withdraw-title`}><button className="dashboard-modal-close" type="button" onClick={close} aria-label="Close withdrawal dialog"><X/></button><div className="withdrawal-modal-heading"><AlertTriangle/><div><h2 id={`${type}-withdraw-title`}>Withdraw from {item.noun}</h2><p>You are requesting to leave <strong>{item.name}</strong>. This may affect fixtures, standings, eligibility, or entry fees.</p></div></div><form className="dashboard-form" onSubmit={submit}><label>Reason for withdrawal<select value={reason} onChange={event=>setReason(event.target.value)} required autoFocus><option value="">Select a reason</option><option>Schedule conflict</option><option>Team unavailable</option><option>Technical or device issue</option><option>Personal circumstances</option><option>Registered by mistake</option><option>Other</option></select></label><label>Additional details<textarea rows="4" value={details} onChange={event=>setDetails(event.target.value)} placeholder="Briefly explain your reason" required={reason==="Other"}/></label><p className="withdrawal-warning">Withdrawal is subject to SCA competition and refund policies. Submission may require organizer approval.</p>{error&&<p className="dashboard-error" role="alert">{error}</p>}<div className="dashboard-form-actions"><button className="danger-button" type="submit" disabled={!reason||saving}><AlertTriangle/>{saving?"Submitting…":"Submit Withdrawal"}</button><button className="button button-secondary" type="button" onClick={close}>Cancel</button></div></form></div></div>}</>;
}
