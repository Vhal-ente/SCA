import { useState } from "react";
import LeaguesNav from "../Navbar/LeaguesNav";
import LeagueMatchRoundCard from "../InfoCard/LeagueMatchRoundCard";
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";

export default function LeagueMatches() {
  const [openMatchday, setOpenMatchday] = useState([1, 2]); // initially open matchdays

  const toggleMatchday = (round) => {
    setOpenMatchday((prev) =>
      prev.includes(round) ? prev.filter((r) => r !== round) : [...prev, round]
    );
  };

  const leagueMatchGroupData = [
    {
      round: 1,
      matches: [
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Not played",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Finished",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Postponed",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Tie breaker",
        },
      ],
    },
    {
      round: 2,
      matches: [
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Not played",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Finished",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Postponed",
        },
        {
          time: "21:15 WAT",
          date: "09 JAN",
          teamA: {
            name: "F4 Sides",
            logo: "/assets/league_logo/teamwhite.svg",
          },
          teamB: { name: "Red Team", logo: "/assets/league_logo/teamred.svg" },
          status: "Tie breaker",
        },
      ],
    },
    // Add rounds 3 - 10 with no matches or dummy ones
    ...Array.from({ length: 8 }, (_, i) => ({
      round: i + 3,
      matches: [],
    })),
  ];

  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <LeaguesNav />
      </div>

      {/* Matchday Accordions */}
      <div className="mb-16 px-4 md:px-12">
        {leagueMatchGroupData.map((group) => (
          <div key={group.round} className="mb-8">
            {/* Matchday Header */}
            <button
              onClick={() => toggleMatchday(group.round)}
              className="flex justify-between items-center w-full text-left text-primary text-lg md:text-3xl"
            >
              <span>Matchday #{group.round}</span>
              {openMatchday.includes(group.round) ? (
                <ArrowUp2 size={40} />
              ) : (
                <ArrowDown2 size={40} />
              )}
            </button>

            {/* Match Cards */}
            {openMatchday.includes(group.round) && group.matches.length > 0 && (
              <div className="mt-4 space-y-4">
                {group.matches.map((match, idx) => (
                  <LeagueMatchRoundCard
                    key={idx}
                    time={match.time}
                    date={match.date}
                    teamA={match.teamA}
                    teamB={match.teamB}
                    status={match.status}
                    showTeamNames={false}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
