export default function ParticipantBoardHeading({ showWins }) {
  return (
    <div
      className={`grid [grid-template-columns:2fr_1fr_1fr] items-center text-primary text-3xl mb-4 ${
        showWins
          ? "[grid-template-columns:2fr_1fr_1fr_1fr]"
          : "[grid-template-columns:2fr_1fr_1fr]"
      }`}
    >
      <p>PARTICIPANTS</p>
      <p className="text-center">Pos.</p>
      {showWins && <p className="text-center">Wins</p>}
      <p className="text-center">Kills</p>
    </div>
  );
}
