import { Medal } from "lucide-react";

const ordinal = place => (place === 1 ? "1st" : place === 2 ? "2nd" : place === 3 ? "3rd" : `${place}th`);

function Entrant({ entrant }) {
  return <div className="standing-player">{entrant?.logoUrl ? <img src={entrant.logoUrl} alt=""/> : <span className="fixture-initials" aria-hidden="true">{(entrant?.name || "?").slice(0, 2).toUpperCase()}</span>}<div><strong>{entrant?.name || "To be decided"}</strong></div></div>;
}

// TournamentStandingsTable ranks entrants from verified results: a points
// table for round robin, finishing places for a knockout bracket.
export default function TournamentStandingsTable({ standings }) {
  if (!standings) return <p className="secondary-empty">Loading standings…</p>;
  if (standings.structure === "round_robin" && standings.table.length) {
    return <div className="standings-wrap"><table className="standings-table"><thead><tr><th>Rank</th><th>Entrant</th><th>P</th><th>W</th><th>D</th><th>L</th><th>Diff</th><th>Points</th></tr></thead><tbody>{standings.table.map(row => <tr key={row.entrant?.id || row.rank}><td><span className={`standing-rank rank-${row.rank}`}>{row.rank <= 3 ? <Medal/> : row.rank}</span></td><td><Entrant entrant={row.entrant}/></td><td>{row.played}</td><td>{row.won}</td><td>{row.drawn}</td><td>{row.lost}</td><td>{row.goalsFor - row.goalsAgainst}</td><td><strong>{row.points}</strong></td></tr>)}</tbody></table></div>;
  }
  const placed = standings.placements.filter(item => item.place > 0).sort((a, b) => a.place - b.place);
  if (!placed.length) return <p className="secondary-empty">Standings appear once the first results are verified.</p>;
  return <div className="standings-wrap"><table className="standings-table"><thead><tr><th>Place</th><th>Entrant</th><th>Reached</th></tr></thead><tbody>{placed.map(item => <tr key={item.entrant?.id || `${item.place}-${item.round}`}><td><span className={`standing-rank rank-${item.place}`}>{item.place <= 3 ? <Medal/> : item.place}</span></td><td><Entrant entrant={item.entrant}/></td><td>{item.place === 1 ? "Champion" : item.round || ordinal(item.place)}</td></tr>)}</tbody></table></div>;
}
