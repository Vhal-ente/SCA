import { ArrowCircleRight2 } from "iconsax-reactjs";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import LeagueCard from "../InfoCard/LeagueCard";

const leagues = [
  {
    name: "Path of Legends",
    image: "/SCA/assets/path_of_legends.png",
    subtitle: "Path of Legends Gaming League",
  },
  {
    name: "Academius Games",
    image: "/SCA/assets/academius_2.png",
    subtitle: "Academius League",
  },
  {
    name: "Clan Senso",
    image: "/SCA/assets/clan_war_2.png",
    subtitle: "Clan Senso League",
  },
];

export default function Leagues() {
  const navigate = useNavigate();

  const handleLeagueClick = () => {
    navigate("/leagues/leaguelist");
  };

  const handleSeeAll = () => {
    navigate("/leaguespage/leaguepageoverview");
  };

  return (
    <section className="bg-background text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 onClick={handleLeagueClick} className="text-3xl md:text-4xl mb-12">
          LEAGUES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {leagues.map((league, index) => (
            <LeagueCard key={index} league={league} />
          ))}
        </div>

        <div className="mt-12 flex items center justify-center">
          <Button
            text="See all"
            size="small"
            fontSize="text-sm"
            iconLeft={<ArrowCircleRight2 variant="Bold" />}
            onClick={handleSeeAll}
          />
        </div>
      </div>
    </section>
  );
}
