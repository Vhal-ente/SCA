import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getVoteSummary } from "@/data/loadouts";

export default function LoadoutCard({ loadout }) {
  const votes = getVoteSummary(loadout.id);
  return <article className="loadout-card"><Link className="loadout-card__media" to={`/loadouts/${loadout.slug}`}><img src={loadout.images?.[0] || "/assets/warzone_image.png"} alt={`${loadout.title} preview`}/><span className="loadout-card__badge">{loadout.loadoutType}</span></Link><div className="loadout-card__body"><p className="loadout-card__game">{loadout.game}</p><h3><Link to={`/loadouts/${loadout.slug}`}>{loadout.title}</Link></h3><p className="loadout-card__description">{loadout.description}</p><div className="loadout-card__meta"><span>By <Link className="loadout-card__author" to={`/players/${loadout.author}`}>{loadout.author}</Link></span><time>{new Date(loadout.createdAt).toLocaleDateString("en-NG", { dateStyle: "medium" })}</time></div><footer className="loadout-card__footer"><div className="loadout-card__votes" aria-label={`${votes.up} upvotes and ${votes.down} downvotes`}><span title="Upvotes"><ArrowUp aria-hidden="true"/><b>{votes.up}</b></span><span title="Downvotes"><ArrowDown aria-hidden="true"/><b>{votes.down}</b></span></div><Link className="text-link" to={`/loadouts/${loadout.slug}`}>View Loadout<ChevronRight/></Link></footer></div></article>;
}
