import { Gamepad2, Pencil, Star, Trash2 } from "lucide-react";

export function VisibilityToggle({ checked, onChange, label = "Show IGN on public profile" }) {
  return <label className="game-visibility-toggle"><span>{label}</span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)}/></label>;
}

export function GameAccountCard({ account, onEdit, onRemove, onPrimary }) {
  return <article className="game-account-card"><Gamepad2/><div className="game-account-main"><div><strong>{account.game}</strong>{account.isPrimary&&<span className="primary-game-badge"><Star/>Primary</span>}</div><span>{account.ign}</span>{account.platform&&<small>{account.platform}</small>}</div><div className="game-account-visibility"><span>{account.isIgnPublic ? "IGN public" : "IGN private"}</span></div><div className="game-account-card-actions">{!account.isPrimary&&<button type="button" onClick={onPrimary}><Star/>Make primary</button>}<button type="button" onClick={onEdit}><Pencil/>Edit</button><button type="button" className="is-danger" onClick={onRemove}><Trash2/>Remove</button></div></article>;
}

export function PublicGameList({ games, compact = false }) {
  if (!games.length) return null;
  return <div className={compact ? "public-game-list is-compact" : "public-game-list"}>{games.map((account) => <article key={account.id || account.game}><Gamepad2/><div><strong>{account.game}</strong>{account.ign&&<span>{account.ign}</span>}{!compact&&account.platform&&<small>{account.platform}</small>}</div>{account.isPrimary&&<span className="primary-game-badge"><Star/>Primary</span>}</article>)}</div>;
}
