import { Crown, Game, Shapes, Triangle, Diamonds } from "iconsax-reactjs";
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
    icon: <Diamonds size="24" color="#36f6c6" />,
    content: "Solo",
  },
  {
    title: "Winner",
    icon: <Crown size="24" color="#36f6c6" />,
    content: "BR Positions",
  },
];

export default function HeaderInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl 2xl:max-w-7xl mx-auto mb-10 px-4">
      {headerInfoCards.map((card, index) => (
        <InfoCardComponent key={index} title={card.title} icon={card.icon}>
          <p className="">{card.content}</p>
        </InfoCardComponent>
      ))}
    </div>
  );
}
