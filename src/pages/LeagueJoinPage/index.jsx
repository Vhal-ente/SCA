import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, CreditCard, ShieldCheck, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import { toEntry } from "@/lib/competitions";
import "../TournamentJoinPage/tournament-join.css";



const money=new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0});


export default function LeagueJoinPage(){
  const{user}=useAuth();const[searchParams]=useSearchParams();const slug=searchParams.get("league")||"path-of-legends";
  const[league,setLeague]=useState(null);const[loadError,setLoadError]=useState("");
  useEffect(()=>{let active=true;api.get(`/leagues/${slug}`).then(({league:data})=>active&&setLeague(toEntry(data))).catch(error=>active&&setLoadError(error.message));return()=>{active=false}},[slug]);
  const[loadedTeams,setLoadedTeams]=useState([]);
  useEffect(()=>{let active=true;api.get("/teams").then(({teams})=>active&&setLoadedTeams(teams.filter(item=>["Captain","Manager"].includes(item.currentRole)))).catch(()=>{}).finally(()=>active&&setLoadingTeams(false));return()=>{active=false}},[]);
  const[loadingTeams,setLoadingTeams]=useState(true);
  const teams=loadedTeams;const[teamId,setTeamId]=useState("");const team=teams.find(item=>item.id===teamId)||teams[0];
  const[form,setForm]=useState({captain:user?.ign||user?.name||team?.members?.find(member=>member.role==="Captain")?.name||"",email:user?.email||"",agreement:false});const[submitted,setSubmitted]=useState(false);const[paymentError,setPaymentError]=useState("");const[paying,setPaying]=useState(false);const paid=Boolean(league&&league.fee>0);const canRegister=Boolean(league?.open);
  const update=e=>setForm(current=>({...current,[e.target.name]:e.target.type==="checkbox"?e.target.checked:e.target.value}));
  const [pendingPayment,setPendingPayment]=useState(false);
  const submit=async e=>{
    e.preventDefault();setPaymentError("");
    if(!canRegister){setPaymentError("Team registration is not open for this league.");return}
    if(!team){setPaymentError("Select a team to register.");return}
    setPaying(true);
    try{
      const{registration}=await api.post(`/leagues/${league.slug||slug}/registrations`,{teamId:team.id,agreement:form.agreement});
      setPendingPayment(registration.paymentRequired);setSubmitted(true);
    }catch(registrationError){setPaymentError(registrationError.message)}
    finally{setPaying(false)}
  };
  if(!league)return <div className="tournament-join-page"><Navbar/><main><div className="tournament-join-container"><Link className="tournament-join-back" to="/leagues/leaguelist"><ArrowLeft/>Back to leagues</Link><section className="tournament-join-card"><div className="join-form-heading"><ShieldCheck/><div><h2>{loadError?"League unavailable":"Loading league…"}</h2>{loadError&&<p>{loadError} Browse the open leagues instead.</p>}</div></div>{loadError&&<div className="dashboard-form-actions"><Link className="button" to="/leagues/leaguelist">Browse Leagues</Link></div>}</section></div></main><Footer/></div>;
  if(!loadingTeams&&!teams.length)return <div className="tournament-join-page"><Navbar/><main><div className="tournament-join-container"><Link className="tournament-join-back" to={`/leaguespage/leaguepageoverview?league=${league.id}`}><ArrowLeft/>Back to league</Link><section className="tournament-join-card"><div className="join-form-heading"><Users/><div><h2>You need a team first</h2><p>League entry is by team. Create a squad, or ask your captain to register {league.name}.</p></div></div><div className="dashboard-form-actions"><Link className="button" to="/dashboard/teams/create">Create a Team</Link><Link className="button button-secondary" to="/dashboard/teams">My Teams</Link></div></section></div></main><Footer/></div>;
  return <div className="tournament-join-page"><Navbar/><main><div className="tournament-join-container"><Link className="tournament-join-back" to={`/leaguespage/leaguepageoverview?league=${league.id}`}><ArrowLeft/>Back to league</Link><div className="tournament-join-layout"><header><p className="eyebrow">Team league registration</p><h1>Enter your team.</h1><p>Confirm the roster representing your team in {league.name}.</p><div className="join-tournament-summary"><span className={paid?"paid-entry":"free-entry"}>{paid?`${money.format(league.fee)} team entry`:"Free team entry"}</span><span>{league.game} · {league.season}</span><span>Starts {league.starts}</span></div></header><section className="tournament-join-card">{submitted?<div className="join-success"><CheckCircle2/><p className="eyebrow">Team registration received</p><h2>{team.name} is registered.</h2>{pendingPayment&&<p className="payment-reference">Your place is held pending the team entry fee. Payment opens shortly.</p>}<p>League updates, fixtures, and approval status will appear on the team dashboard.</p><Link className="button" to="/dashboard/leagues">View my leagues</Link></div>:<><div className="join-form-heading"><ShieldCheck/><div><h2>Team entry form</h2><p>{paid?"Confirm your team to hold your place. The entry fee is collected in a separate step.":"This league is free to enter. Confirm your roster to register."}</p></div></div><form onSubmit={submit}><label>Select team<select value={teamId} onChange={event=>setTeamId(event.target.value)} required>{teams.map(item=><option value={item.id} key={item.id}>{item.name} · {item.game}</option>)}</select></label><label>Captain / Manager IGN<input name="captain" value={form.captain} onChange={update} required/></label><label>Contact email<input name="email" type="email" value={form.email} onChange={update} placeholder="captain@example.com" required/></label><div className="join-payment-summary"><div><span>Confirmed roster</span><strong>{team?.members?.length||0} players</strong></div><p><Users/>{team?.members?.map(member=>member.name).join(", ")||"Add players from the team dashboard"}</p></div>{paid&&<div className="join-payment-summary"><div><span>Team entry fee</span><strong>{money.format(league.fee)}</strong></div><p><CreditCard/>Collected separately once payments go live</p></div>}<label className="join-consent"><input name="agreement" type="checkbox" checked={form.agreement} onChange={update} required/><span>I am authorized to register this team and confirm that its roster agrees to the league rules, Refund Policy, and Fair Play Policy.</span></label>{paymentError&&<p className="join-payment-error" role="alert">{paymentError}</p>}<button className="button" type="submit" disabled={paying}>{paying?"Submitting…":paid?"Hold our place":"Complete free team registration"}</button></form></>}</section></div></div></main><Footer/></div>;
}
