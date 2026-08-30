import { useMemo, useState } from "react";
import { Eye, Plus, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/components/Dashboard";
import { GameAccountCard, PublicGameList, VisibilityToggle } from "@/components/PlayerGameAccounts";
import { useAuth } from "@/context/AuthContext";
import { getPlayerGameAccounts, playerGamePlatforms, playerGames, savePlayerGameAccounts } from "@/data/playerGameAccounts";

const blank = { game:"", ign:"", playerId:"", platform:"", isPrimary:false, isIgnPublic:false };

export default function DashboardProfilePage(){
  const { user } = useAuth();
  const identifiers = useMemo(() => [user?.id,user?.ign,user?.name,user?.email].filter(Boolean), [user]);
  const primaryIdentifier = identifiers[0] || "demo-player";
  const [accounts,setAccounts] = useState(() => getPlayerGameAccounts(primaryIdentifier));
  const [draft,setDraft] = useState(blank);
  const [editingId,setEditingId] = useState(null);
  const [message,setMessage] = useState("");
  const publicGames = accounts.map(account => ({...account,ign:account.isIgnPublic?account.ign:""}));
  const update = (field,value) => setDraft(current => ({...current,[field]:value}));
  const reset = () => { setDraft(blank); setEditingId(null); setMessage(""); };
  const submit = (event) => {
    event.preventDefault(); setMessage("");
    const duplicate = accounts.find(account => account.game===draft.game && account.id!==editingId);
    if(duplicate){ setMessage("You already have a game account for this game. Edit the existing account instead."); return; }
    let next = editingId ? accounts.map(account => account.id===editingId ? {...account,...draft,id:editingId} : account) : [...accounts,{...draft,id:`game-${Date.now()}`}];
    if(!next.some(account=>account.isPrimary)) next = next.map((account,index)=>({...account,isPrimary:index===0}));
    if(draft.isPrimary) next = next.map(account=>({...account,isPrimary:account.id===(editingId||next.at(-1).id)}));
    const saved = savePlayerGameAccounts(identifiers,next); setAccounts(saved); reset(); setMessage("Game account saved.");
  };
  const edit = account => { setEditingId(account.id); setDraft({...account}); setMessage(""); document.getElementById("game-account-form")?.scrollIntoView({behavior:"smooth",block:"center"}); };
  const remove = account => { if(!window.confirm(`Remove your ${account.game} game account?`)) return; let next=accounts.filter(item=>item.id!==account.id); if(next.length&&!next.some(item=>item.isPrimary)) next=next.map((item,index)=>({...item,isPrimary:index===0})); setAccounts(savePlayerGameAccounts(identifiers,next)); if(editingId===account.id)reset(); };
  const makePrimary = account => setAccounts(savePlayerGameAccounts(identifiers,accounts.map(item=>({...item,isPrimary:item.id===account.id}))));
  return <div className="dashboard-stack"><section className="dashboard-panel"><SectionTitle title="Player Profile" copy="Manage the public identity attached to your SCA account."/><div className="profile-preview-identity"><span>{(user?.ign||user?.name||user?.email||"P").slice(0,1).toUpperCase()}</span><div><small>IGN / Gamer Tag</small><h3>{user?.ign||user?.name||"IGN not set"}</h3><p>{user?.email}</p></div></div><div className="dashboard-inline-actions"><Link className="button button-secondary" to={`/players/${user?.ign||user?.name||user?.email||"player"}`}><Eye/>Preview Public Profile</Link></div></section>
  <section className="dashboard-panel"><SectionTitle title="Game Accounts" copy="Add one account per game, choose a primary game, and control whether each IGN is public."/>
    <form id="game-account-form" className="dashboard-form game-account-form" onSubmit={submit}><div className="dashboard-form-grid"><label>Game<select value={draft.game} onChange={e=>update("game",e.target.value)} required><option value="">Select game</option>{playerGames.map(game=><option key={game}>{game}</option>)}</select></label><label>IGN / Gamer Tag<input value={draft.ign} onChange={e=>update("ign",e.target.value)} placeholder="Your in-game name" required/></label><label>Player ID <small>(private, optional)</small><input value={draft.playerId} onChange={e=>update("playerId",e.target.value)} placeholder="Player ID"/></label><label>Platform <small>(optional)</small><select value={draft.platform} onChange={e=>update("platform",e.target.value)}><option value="">Select platform</option>{playerGamePlatforms.map(platform=><option key={platform}>{platform}</option>)}</select></label></div><div className="game-account-options"><VisibilityToggle checked={draft.isIgnPublic} onChange={value=>update("isIgnPublic",value)}/><label className="game-visibility-toggle"><span>Primary game</span><input type="checkbox" checked={draft.isPrimary} onChange={e=>update("isPrimary",e.target.checked)}/></label></div>{message&&<p className={message.startsWith("You already")?"dashboard-error":"dashboard-success"} role="status">{message}</p>}<div className="dashboard-form-actions"><button className="button" type="submit"><Save/>{editingId?"Update":"Save"} Game Account</button>{editingId&&<button className="button button-secondary" type="button" onClick={reset}>Cancel</button>}</div></form>
    {accounts.length>0?<div className="game-account-list-v2">{accounts.map(account=><GameAccountCard key={account.id} account={account} onEdit={()=>edit(account)} onRemove={()=>remove(account)} onPrimary={()=>makePrimary(account)}/>)}</div>:<div className="dashboard-empty"><Plus/><h3>No game accounts yet</h3><p>Add the games you play and give each one its own IGN.</p></div>}
  </section>
  <section className="dashboard-panel"><SectionTitle title="Public Games Preview" copy="Player IDs are never shown. Private IGNs are omitted."/><PublicGameList games={publicGames}/></section></div>;
}
