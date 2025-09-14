import TournamentsNav from "../Navbar/TournamentsNav";
import HeaderInfoCards from "../InfoCard/HeaderInfoCards";
import MatchParticipantCard from "../InfoCard/MatchParticipantCard";
import ParticipantBoardHeading from "../ParticipantsBoardHeading";
import { ArrowCircleLeft2 } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";

const players = [
  {
    avatar: "/SCA/assets/admins/mightyness.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#1",
    wins: "01",
    kills: "12",
  },
  {
    avatar: "/SCA/assets/admins/von.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#2",
    wins: "01",
    kills: "07",
  },
  {
    avatar: "/SCA/assets/admins/manja.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#3",
    wins: "03",
    kills: "03",
  },
  {
    avatar: "/SCA/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#4",
    wins: "05",
    kills: "05",
  },
  {
    avatar: "/SCA/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#5",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/SCA/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#6",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/SCA/assets/admins/misha.svg",
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
    avatar: "/SCA/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#9",
    wins: "04",
    kills: "04",
  },
  {
    avatar: "/SCA/assets/admins/misha.svg",
    name: "MightyNess",
    username: "The Mighty_Ness",
    position: "#10",
    wins: "04",
    kills: "04",
  },
  // Add more players as needed...
];

export default function TournMatches2({ showWins = false }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 mb-10">
        <div>
          <TournamentsNav />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center self-start gap-2 text-primary cursor-pointer mb-4"
        >
          <span>
            <ArrowCircleLeft2 />
          </span>
          <span>Back</span>
        </button>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-start gap-2 lg:gap-16 text-center lg:text-left lg:self-start">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Call Of Duty: Warzone By HyperX
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <span className="text-primary text-2xl lg:text-3xl font-bold">
              Match #73456
            </span>
            <span className="text-sm md:text-lg">21:15 WAT 09 JAN</span>
          </div>
        </div>

        {/* <div className="flex items-center justify-center self-start gap-14 md:gap-16 ">
          <h1 className="text-2xl md:text-4xl font-bold ">
            Call Of Duty: Warzone By HyperX
          </h1>
          <div className="flex items-end gap-4">
            <span className="text-primary text-2xl md:text-4xl font-bold">
              Match #73456
            </span>
            <span className="">21:15 WAT 09 JAN</span>
          </div>
        </div> */}
      </div>

      <div className="mb-20">
        <HeaderInfoCards />
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
