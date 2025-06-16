import Button from "../Button";
import InfoCardComponent from "./InfoCardComponent";
import { Calendar, Cup, Medal, Messages, Moneys } from "iconsax-reactjs";

const leagueAsideInfoCards = [
  {
    title: "Registration",
    icon: <Moneys size="32" color="#36f6c6" />,
    content: (
      <div className="text-2xl space-y-4 text-left">
        <p className="">Free</p>
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
    ),
  },
  {
    title: "Timeline",
    icon: <Calendar size="32" color="#36f6c6" />,
    content: (
      <div className="text-sm space-y-2 text-left">
        <div>
          <p className="text-primary">SIGNUP DEADLINE</p>
          <p>22 Dec 20:55 WAT</p>
        </div>
        <div>
          <p className="text-primary">CHECK IN</p>
          <p>22 Dec 20:00 - 20:55 WAT</p>
        </div>
        <div>
          <p className="text-primary">START DATE</p>
          <p>22 Dec 21:00 WAT</p>
        </div>
      </div>
    ),
  },
  {
    title: "Prizes",
    icon: <Cup size="32" color="#36f6c6" />,
    content: (
      <div className="text-sm space-y-4 text-left">
        <div className="grid grid-cols-2 items-center gap-12">
          <div className="text-[#FFD700]">
            <p>#50,000</p>
            <p>1st place</p>
          </div>
          <Medal size="32" color="#FFD700" variant="Bold" />
        </div>

        <div className="grid grid-cols-2 items-center gap-12">
          <div className="text-[#C0C0C0]">
            <p>#40,000</p>
            <p>2nd place</p>
          </div>
          <Medal size="32" color="#C0C0C0" variant="Bold" />
        </div>

        <div className="grid grid-cols-2 items-center gap-12">
          <div className="text-[#CD7F32]">
            <p>#30,000</p>
            <p>3rd place</p>
          </div>
          <Medal size="32" color="#CD7F32" variant="Bold" />
        </div>

        <div className="grid grid-cols-2 items-center gap-12">
          <div>
            <p>#10,000</p>
            <p>4th place</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: (
      <>
        Individual play
        <br />& team rewards
      </>
    ),
    icon: <Cup size="32" color="#36f6c6" />,
    content: (
      <div className="text-sm space-y-4 text-left">
        <div className="">
          <p>#5,000</p>
          <p>Most MVPs</p>
        </div>

        <div className="">
          <p>#5,000</p>
          <p>Most Kills</p>
        </div>

        <div className="">
          <p>4 Merch</p>
          <p>Best Team</p>
        </div>

        <div>
          <p>#10,000</p>
          <p>4th place</p>
        </div>
      </div>
    ),
  },

  {
    title: "Support",
    icon: <Messages size="50" color="#36f6c6" />,
    content: "First time? Check the Rules tab above and visit our Contact.",
  },
];

export default function LeagueAsideInfoCards() {
  return (
    <div className="flex flex-col gap-10">
      {leagueAsideInfoCards.map((card, index) => (
        <InfoCardComponent key={index} title={card.title} icon={card.icon}>
          {card.content}
        </InfoCardComponent>
      ))}
    </div>
  );
}
