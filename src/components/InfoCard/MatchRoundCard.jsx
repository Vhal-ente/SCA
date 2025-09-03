export default function MatchRoundCard({
  time,
  date,
  avatars,
  extraPlayers,
  status,
}) {
  return (
    <div className="border border-white p-2 rounded-lg flex flex-col md:items-center md:flex-row justify-between w-full gap-4">
      <div className="text-3xl text-white">
        <p>{time}</p>
        <p>{date}</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-center gap-2">
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

      <div className="text-2xl mr-4">{status}</div>
    </div>
  );
}
