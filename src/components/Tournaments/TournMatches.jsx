import MatchRoundCard from "../InfoCard/MatchRoundCard";
import TournamentsNav from "../Navbar/TournamentsNav";
import { useNavigate } from "react-router-dom";

export default function TournMatches() {
  const navigate = useNavigate();

  const goToTournamentMatches2 = () => {
    navigate("/tournamentspage/matches2");
  };

  // const dummyAvatar = "https://i.pravatar.cc/40?img=";

  const matchGroupData = [
    {
      round: 1,
      matches: [
        {
          time: "21:15 WAT",
          date: "09 JAN",
          avatars: [
            "/SCA/assets/admins/mightyness.svg",
            "/SCA/assets/admins/von.svg",
            "/SCA/assets/admins/manja.svg",
            "/SCA/assets/admins/misha.svg",
          ],
          extraPlayers: 67,
          status: "Finished",
        },
      ],
    },
    {
      round: 2,
      matches: [
        {
          time: "21:15 WAT",
          date: "10 JAN",
          avatars: [
            "/SCA/assets/admins/mightyness.svg",
            "/SCA/assets/admins/von.svg",
            "/SCA/assets/admins/manja.svg",
            "/SCA/assets/admins/misha.svg",
          ],
          extraPlayers: 67,
          status: "Finished",
        },
      ],
    },
    {
      round: 3,
      matches: [
        {
          time: "21:15 WAT",
          date: "10 JAN",
          avatars: [
            "/SCA/assets/admins/mightyness.svg",
            "/SCA/assets/admins/von.svg",
            "/SCA/assets/admins/manja.svg",
            "/SCA/assets/admins/misha.svg",
          ],
          extraPlayers: 67,
          status: "Finished",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div>
          <TournamentsNav />
        </div>

        <div className="max-w-4xl flex flex-col items-center justify-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Call Of Duty: Warzone By HyperX
          </h1>
        </div>
      </div>

      <div className="mb-16">
        {matchGroupData.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-10">
            <h2 className="text-primary text-3xl mb-4">ROUND #{group.round}</h2>
            <div onClick={goToTournamentMatches2}>
              {group.matches.map((match, matchIndex) => (
                <MatchRoundCard key={matchIndex} {...match} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
