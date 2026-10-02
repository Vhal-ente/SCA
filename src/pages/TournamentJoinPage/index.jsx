import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"; import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import { toEntry } from "@/lib/competitions";
import "./tournament-join.css";


const money=new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0});

export default function TournamentJoinPage(){
  const[searchParams]=useSearchParams();const slug=searchParams.get("tournament")||"warzone-hyperx-2026";
  const[tournament,setTournament]=useState(null);const[loadError,setLoadError]=useState("");
  useEffect(()=>{let active=true;api.get(`/tournaments/${slug}`).then(({tournament:data})=>active&&setTournament(toEntry(data))).catch(error=>active&&setLoadError(error.message));return()=>{active=false}},[slug]);
  const{user}=useAuth();const[submitted,setSubmitted]=useState(false);const[paymentError,setPaymentError]=useState("");const[paying,setPaying]=useState(false);const[form,setForm]=useState({ign:user?.ign||user?.name||"",email:user?.email||"",gameId:"",platform:"PC",team:"",agreement:false});
  const paid=Boolean(tournament&&tournament.fee>0);const canRegister=Boolean(tournament?.open); const update=e=>setForm(current=>({...current,[e.target.name]:e.target.type==="checkbox"?e.target.checked:e.target.value}));
  const [pendingPayment,setPendingPayment]=useState(false);
  const submit=async e=>{
    e.preventDefault();setPaymentError("");
    if(!canRegister){setPaymentError("Registration is not available for this tournament.");return}
    setPaying(true);
    try{
      const{registration}=await api.post(`/tournaments/${tournament.slug||slug}/registrations`,{
        ign:form.ign,gamePlayerId:form.gameId,platform:form.platform,email:form.email,agreement:form.agreement,
      });
      setPendingPayment(registration.paymentRequired);setSubmitted(true);
    }catch(registrationError){setPaymentError(registrationError.message)}
    finally{setPaying(false)}
  };
  if(!tournament)return <div className="tournament-join-page"><Navbar/><main><div className="tournament-join-container"><Link className="tournament-join-back" to="/tournaments/tournamentlist"><ArrowLeft/>Back to tournaments</Link><section className="tournament-join-card"><div className="join-form-heading"><ShieldCheck/><div><h2>{loadError?"Tournament unavailable":"Loading tournament…"}</h2>{loadError&&<p>{loadError} Browse the open competitions instead.</p>}</div></div>{loadError&&<div className="dashboard-form-actions"><Link className="button" to="/tournaments/tournamentlist">Browse Tournaments</Link></div>}</section></div></main><Footer/></div>;
  return <div className="tournament-join-page"><Navbar/><main><div className="tournament-join-container"><Link className="tournament-join-back" to={`/tournamentspage/overview?tournament=${tournament.id}`}><ArrowLeft/>Back to tournament</Link><div className="tournament-join-layout"><header><p className="eyebrow">Tournament registration</p><h1>Join the arena.</h1><p>Confirm your player details to enter {tournament.name}.</p><div className="join-tournament-summary"><span className={paid?"paid-entry":"free-entry"}>{paid?`${money.format(tournament.fee)} entry fee`:"Free entry"}</span><span>{tournament.format}</span><span>Starts {tournament.starts}</span></div></header><section className="tournament-join-card">{submitted?<div className="join-success"><CheckCircle2/><p className="eyebrow">Registration received</p><h2>{pendingPayment?"Your seat is held.":"You’re registered."}</h2>{pendingPayment&&<p className="payment-reference">Your seat is held pending the entry fee. Payment opens shortly — we will email you when it does.</p>}<p>Your entry has been saved. Check your dashboard for tournament and check-in updates.</p><Link className="button" to="/dashboard/tournaments">View my tournaments</Link></div>:<><div className="join-form-heading"><ShieldCheck/><div><h2>Player entry form</h2><p>{paid?"Complete your details to hold your seat. The entry fee is collected in a separate step.":"This tournament is free to enter. Confirm your in-game details to register."}</p></div></div><form onSubmit={submit}><label>IGN / Gamer Tag<input name="ign" value={form.ign} onChange={update} required/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label><label>{tournament.game} player ID<input name="gameId" value={form.gameId} onChange={update} placeholder="Enter your player ID" required/></label><label>Platform<select name="platform" value={form.platform} onChange={update}><option>PC</option><option>PlayStation</option><option>Xbox</option><option>Mobile</option></select></label><label>Team name <small>(optional)</small><input name="team" value={form.team} onChange={update} placeholder="Solo players can leave this blank"/></label>{paid&&<div className="join-payment-summary"><div><span>Entry fee</span><strong>{money.format(tournament.fee)}</strong></div><p><CreditCard/>Collected separately once payments go live</p></div>}<label className="join-consent"><input name="agreement" type="checkbox" checked={form.agreement} onChange={update} required/><span>I confirm that my details are correct and agree to the tournament rules, Refund Policy, and Fair Play Policy.</span></label>{paymentError&&<p className="join-payment-error" role="alert">{paymentError}</p>}<button className="button" type="submit" disabled={paying}>{paying?"Submitting…":paid?"Hold my seat":"Complete free registration"}</button></form></>}</section></div></div></main><Footer/></div>}
