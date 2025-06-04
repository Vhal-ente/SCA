import TournamentsNav from "../Navbar/TournamentsNav";
import HeaderInfoCards from "../InfoCard/HeaderInfoCards";
import MatchParticipantCard from "../InfoCard/MatchParticipantCard";
import ParticipantBoardHeading from "../ParticipantsBoardHeading";
import { ArrowCircleLeft2 } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";

const players = [
  {
    avatar: "/assets/admins/mightyness.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#1",
    wins: "01",
    kills: "12",
  },
  {
    avatar: "/assets/admins/von.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#2",
    wins: "01",
    kills: "07",
  },
  {
    avatar: "/assets/admins/manja.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#3",
    wins: "03",
    kills: "03",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#4",
    wins: "05",
    kills: "05",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#5",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#6",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#7",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#8",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#9",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#10",
    wins: "04",
    kills: "04",
  },
  // Add more players as needed...
];

export default function TournStandings({ showWins = true }) {
  const navigate = useNavigate();

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

      <div className="">
        <ParticipantBoardHeading showWins={showWins} />
      </div>

      <div>
        {players.map((player, index) => (
          <MatchParticipantCard key={index} {...player} showWins={showWins} />
        ))}
      </div>
    </div>
  );
}
