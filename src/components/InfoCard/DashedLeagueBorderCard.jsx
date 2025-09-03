import { DocumentCopy } from "iconsax-reactjs";
import InfoCardComponent from "./InfoCardComponent";

export default function DashedLeagueBorderCard() {
  const DashedBorderCard = [
    {
      title: "Twitch",
      icon: <DocumentCopy size="24" color="#36f6c6" />,
      content: "https://nkkkknkvnkjdjvdvnkdvndvtn",
    },
    {
      title: "YouTube",
      icon: <DocumentCopy size="24" color="#36f6c6" />,
      content: "https://nkkkknkvnkjdjvdvnkdvndvtn",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {DashedBorderCard.map((card, index) => (
        <InfoCardComponent
          key={index}
          title={card.title}
          icon={card.icon}
          dashed
        >
          <p className="break-all">{card.content}</p>
        </InfoCardComponent>
      ))}
    </div>
  );
}
