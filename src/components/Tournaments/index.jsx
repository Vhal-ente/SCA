import { ArrowCircleRight2 } from "iconsax-reactjs";
import Button from "../Button";

const tournaments = [
  {
    name: "Call of duty:  Warzone by HyperX",
    image: "/assets/warzone_image.png",
    date: "Jul 01 - Jul 03, 2025",
    participants: 256,
    subtitle: "Path of Legends Gaming Event",
  },
  {
    name: "PUBG Global Championship",
    image: "/assets/PUBG_Global_Championship.png",
    date: "Jun 24 - Jun 26, 2025",
    participants: 1024,
    subtitle: "Academius Games",
  },
  {
    name: "PUBG Global Championship",
    image: "/assets/PUBG_Global_Championship2.png",
    date: "Jun 24 - Jun 26, 2025",
    participants: 1024,
    subtitle: "Clan Senso",
  },
];

export default function Tournaments() {
  return (
    <section className="bg-background py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
          TOURNAMENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-primary rounded-3xl overflow-hidden gap-2"
            >
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
          ))}
        </div>

        <div className="mt-12 flex items center justify-center">
          <Button
            text="See all"
            size="small"
            fontSize="text-sm"
            iconLeft={<ArrowCircleRight2 variant="Bold" />}
          />
        </div>
      </div>
    </section>
  );

  // return (
  //   <section className="bg-background text-white py-20 px-6 md:px-16">
  //     <div className="max-w-7xl mx-auto text-center">
  //       <h2 className="text-3xl md:text-4xl mb-12">TOURNAMENTS</h2>

  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
  //         {tournaments.map((item, index) => (
  //           <div key={index} className="flex flex-col items-center space-y-4">
  //             <img
  //               src={item.image}
  //               alt={item.name}
  //               className="h-24 w-52 object-contain"
  //             />
  //             {/* <p className="font-semibold">{item.name}</p> */}
  //             <span className="text-sm text-gray-300">{item.subtitle}</span>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
