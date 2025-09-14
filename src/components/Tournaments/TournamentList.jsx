import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../Button";
import TournamentCard from "../InfoCard/TournamnetCard";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const tournaments = [
  {
    name: "PUBG tournament by Red Bull",
    image: "/SCA/assets/tournament_images/battlegrounds.png",
    date: "Jun 26 - Jun 27, 2020",
    participants: 128,
    subtitle: "Clan Senso",
  },
  {
    name: "Apex Legends tournament by Xbox",
    image: "/SCA/assets/tournament_images/apex.png",
    date: "Jun 27 - Jun 29, 2020",
    participants: 64,
    subtitle: "Clan Senso",
  },
  {
    name: "Rocket League Finals",
    image: "/SCA/assets/tournament_images/rocket.png",
    date: "Jul 01 - Jul 02, 2020",
    participants: 1024,
    subtitle: "Clan Senso",
  },
  {
    name: "Call of duty:  Warzone by HyperX",
    image: "/SCA/assets/warzone_image.png",
    date: "Jul 01 - Jul 03, 2025",
    participants: 256,
    subtitle: "Path of Legends Gaming Event",
  },
  {
    name: "PUBG Global Championship",
    image: "/SCA/assets/PUBG_Global_Championship.png",
    date: "Jun 24 - Jun 26, 2025",
    participants: 1024,
    subtitle: "Academius Games",
  },
  {
    name: "PUBG Global Championship",
    image: "/SCA/assets/PUBG_Global_Championship2.png",
    date: "Jun 24 - Jun 26, 2025",
    participants: 1024,
    subtitle: "Clan Senso",
  },
];

export default function TournamentList() {
  return (
    <div className="min-w-full">
      <div className="min-h-[75vh] bg-[url('/assets/tournament_images/tournament_list_img.png')] bg-contain md:bg-cover bg-top relative px-6 py-10">
        {/* AN OVERLAY */}
        <div className="absolute inset-0 bg-black/20 z-30"></div>
        {/* THE BLUR */}
        <div className="absolute inset-0 bg-black/0 bg-gradient-to-b from-[#000000] to-[#D9D9D900] max-h-30 z-40"></div>

        <div className="relative z-50">
          <div className="max-w-full bg-transparent mx-auto">
            <Navbar />
          </div>
        </div>
      </div>

      <div className="bg-background text-general px-10 py-20">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl text-center mb-12">
            TOURNAMENTS
          </h2>
          <div className="relative lg:w-1/2 mx-auto mb-16">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-4 pr-10 py-2 border rounded-full w-full"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
          {tournaments.map((tournament, index) => (
            <TournamentCard key={index} tournament={tournament} />
            
          ))}
        </div> */}

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
                         src="/SCA/assets/icons/shield_check.svg"
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
      </div>

      <div className="max-w-full">
        <Footer />
      </div>
    </div>
  );
}
