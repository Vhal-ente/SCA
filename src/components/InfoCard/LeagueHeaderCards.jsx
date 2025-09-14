import { Crown1, Game, Shapes, Triangle } from "iconsax-reactjs";
import InfoCardComponent from "./InfoCardComponent";

const headerInfoCards = [
  {
    title: "Game",
    icon: <Game size="24" color="#36f6c6" />,
    content: "COD Mobile",
  },
  {
    title: "Type",
    icon: <Triangle size="24" color="#36f6c6" />,
    content: "Battle Royale TPP",
  },
  {
    title: "Mode",
    icon: (
      <img
        src="/SCA/assets/icons/shapes_1.svg"
        alt="Type Icon"
        className="w-6 h-6"
      />
    ),
    content: "Squad",
  },
  {
    title: "Winner",
    icon: <Crown1 size="24" color="#36f6c6" />,
    content: "BR Positions",
  },
];

export default function LeagueHeaderCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl 2xl:max-w-7xl mx-auto mb-10 px-4">
      {headerInfoCards.map((card, index) => (
        <InfoCardComponent
          key={index}
          title={card.title}
          icon={card.icon}
          headerPosition="bottom"
        >
          <p className="text-2xl">{card.content}</p>
        </InfoCardComponent>
      ))}
    </div>
  );
}
