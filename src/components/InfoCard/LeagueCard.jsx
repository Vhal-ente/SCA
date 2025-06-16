export default function LeagueCard({ league }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        src={league.image}
        alt={league.name}
        className="h-24 w-52 object-contain"
      />
      <span className="text-sm text-gray-300">{league.subtitle}</span>
    </div>
  );
}
