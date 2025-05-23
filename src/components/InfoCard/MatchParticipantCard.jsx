export default function ParticipantBoardCard({
  avatar,
  name,
  username,
  position,
  wins,
  kills,
  showWins,
}) {
  return (
    <div
      className={`grid [grid-template-columns:2fr_1fr_1fr] items-center text-2xl border border-white rounded-lg p-2 mb-4 ${
        showWins
          ? "[grid-template-columns:2fr_1fr_1fr_1fr]"
          : "[grid-template-columns:2fr_1fr_1fr]"
      }`}
    >
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full" />
        <div>
          <p className="text-2xl">{name}</p>
          <p className="text-base text-primary">{username}</p>
        </div>
      </div>
      <p className="text-center">{position}</p>
      {showWins && <p className="text-center">{wins}</p>}
      <p className="text-center">{kills}</p>
    </div>
  );
}
