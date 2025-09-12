export default function MatchRoundCard({
  time,
  date,
  avatars,
  extraPlayers,
  status,
}) {
  return (
    <div className="border border-white p-4 rounded-lg md:grid md:grid-cols-3 items-center w-full md:gap-4">
      <div className="text-3xl text-white mb-10 md:mb-4">
        <p>{time}</p>
        <p>{date}</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 mb-10 md:mb-4">
        <div className="flex items-center -space-x-6">
          {avatars.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`avatar-${index}`}
              className="w-20 h-20"
              style={{ zIndex: avatars.length - index }}
            />
          ))}
        </div>
        <span className="text-2xl">+{extraPlayers}</span>
      </div>

      <div className="text-lg md:text-2xl md:text-center">{status}</div>
    </div>
  );
}
