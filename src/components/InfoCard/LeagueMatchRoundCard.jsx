export default function LeagueMatchRoundCard({
  time,
  date,
  teamA,
  teamB,
  status = "Not played",
  showTeamNames = false,
}) {
  return (
    <div className="border border-white p-4 rounded-lg md:grid md:grid-cols-3 items-center w-full gap-4">
      {/* Time and Date */}
      <div className="text-xl md:text-3xl text-left text-white">
        <p className="">{time}</p>
        <p className="">{date}</p>
      </div>

      {/* Team Logos & Names */}
      <div className="flex items-center justify-center gap-2 mb-4 md:mb-0">
        <div className="flex flex-col items-center">
          <img
            src={teamA.logo}
            alt={teamA.name}
            className="object-contain w-16 h-16 md:w-20 md:h-20"
          />
          {showTeamNames && <span className="text-xs mt-1">{teamA.name}</span>}
        </div>

        <span className="text-2xl">vs</span>

        <div className="flex flex-col items-center">
          <img
            src={teamB.logo}
            alt={teamB.name}
            className="object-contain w-16 h-16 md:w-20 md:h-20"
          />
          {showTeamNames && <span className="text-xs mt-1">{teamB.name}</span>}
        </div>
      </div>

      {/* Match Status */}
      <div className="text-base md:text-2xl text-center">{status}</div>
    </div>
  );
}
