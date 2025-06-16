import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import LeagueCard from "../InfoCard/LeagueCard";

const leagues = [
  {
    name: "Path of Legends",
    image: "/assets/path_of_legends.png",
    subtitle: "Path of Legends Gaming League",
  },
  {
    name: "Academius Games",
    image: "/assets/academius_2.png",
    subtitle: "Academius League",
  },
  {
    name: "Clan Senso",
    image: "/assets/clan_war_2.png",
    subtitle: "Clan Senso League",
  },
  {
    name: "Path of Legends",
    image: "/assets/path_of_legends.png",
    subtitle: "Path of Legends Gaming League",
  },
  {
    name: "Academius Games",
    image: "/assets/academius_2.png",
    subtitle: "Academius League",
  },
  {
    name: "Clan Senso",
    image: "/assets/clan_war_2.png",
    subtitle: "Clan Senso League",
  },
];

export default function LeagueList() {
  return (
    <div className="min-w-full">
      <div className="min-h-[75vh] bg-[url('/assets/league_images/league_list_img.png')] bg-contain md:bg-cover bg-top relative px-6 py-10">
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
          <h2 className="text-3xl md:text-5xl text-center mb-12">LEAGUES</h2>
          <div className="relative lg:w-1/2 mx-auto mb-20">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-4 pr-10 py-2 border rounded-full w-full"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {leagues.map((league, index) => (
            <LeagueCard key={index} league={league} />
          ))}
        </div>
      </div>

      <div className="max-w-full">
        <Footer />
      </div>
    </div>
  );
}
