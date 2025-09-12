import Button from "../Button";

export default function TournamentCard({ tournament }) {
  return (
    <div className="flex flex-col items-center border border-primary rounded-3xl overflow-hidden gap-2">
      <img
        src={tournament.image}
        alt={tournament.name}
        className="h-3/5 w-full object-cover"
      />
      <div className="flex flex-col items-start p-4 gap-2 w-full">
        <h3 className="font-bold text-sm">{tournament.name}</h3>
        <p className="text-sm">{tournament.date}</p>
        <div className="flex justify-between items-center mt-4 w-full">
          <p className="text-sm">
            <span className="font-bold">{tournament.participants}</span>{" "}
            Participants
          </p>

          <Button
            text="Join"
            size="small"
            fontSize="text-sm"
            iconLeft={
              <img
                src="/assets/icons/shield_check.svg"
                alt="Join Icon"
                className="w-5 h-5"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
