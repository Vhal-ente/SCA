import Button from "../Button";
import TournamentsNav from "../Navbar/TournamentsNav";
import HeaderInfoCards from "../InfoCard/HeaderInfoCards";
import AsideInfoCards from "../InfoCard/AsideInfoCards";
import Details from "../Details/index.jsx";
import Admins from "../Admins";
import DetailsParagraph from "../Details/DetailsParagraph";
import OrderedListParagraph from "../Details/OrderedListParagraph";
import RuleListCard from "../InfoCard/RuleListCard";
import GlobalRules from "../Details/GlobalRules";
import AccountRules from "../Details/AccountRules";
import DisputeRules from "../Details/DisputeRules";

export default function TournRules() {
  const quickRulesProps = {
    sectionTitle: "QUICK RULES",
    subsections: [
      {
        subheading: "INFO",
        items: [
          "Schedule: 3 matches are played one after the other. Players will have 15 minutes once the match is created to join the lobby before it is started",
          "Lobby ID and password: Will be posted on the match page once the tournament starts",
          "Mode: Classic Solo-TPP",
        ],
      },
      {
        subheading: "HOW TO GET ROOM DETAILS",
        items: [
          "Once the tournament starts at the Start Date, refresh the tournament page to view your matches",
          'On the match page is where you will find the invite link you will use to join the room in CODM itself. "Password" will be the Room Password you must enter in-game. (See "HOW TO JOIN A ROOM" below)',
          'If the Invite link/Password says "Not set", the admin has not yet created the room. Wait a few minutes, refresh the page, and check it again.',
          'If it says "Access restricted" then you are not part of the tournament/match',
          "Do not share the link or password!",
          "It is not required to be in a specific slot",
        ],
      },
      {
        subheading: "HOW TO JOIN A ROOM",
        items: [
          "Go to the match page on the SCA website / app which becomes available once the tournament starts",
          'Make note of the Password, then click on the link under "Invite link" which will take you to the CODM app',
          "If you are unable to join via the link, then use the Match ID instead. From the Battle Royale page on CODM, click on the menu icon in the top right corner, then click on Private. Then click on the home/search icon also in the top right corner, type in the match ID as found on the match page",
          "Enter the room password",
          "You are now in the custom room. Wait until the admin starts.",
        ],
      },
    ],
  };

  const reportResultsProps = {
    sectionTitle: "REPORT RESULTS",
    content: [
      {
        subheading: null,
        paragraphs: [
          'Each player must take a screenshot at the end-of-game displaying their kill score and placement and submit it on the match page, via the "Enter Result" button which will appear once the room is started. You must report scores before the next room starts.',
        ],
      },
    ],
  };

  const gameSpecificProps = {
    sectionTitle: "Game Specific",
    sectionNumber: 1,
    subsections: [
      {
        item: [
          "Proof Requirements:",
          "In the event of a dispute, the accusing team must provide a video as proof.",
        ],
      },
      {
        item: [
          "Grace Period",
          "Players will forfeit the game if they are not present by 15 minutes after a match is created",
        ],
      },
      {
        item: [
          "Emulators and Third-Party Devices",
          "The use of a PC emulator to compete in these tournaments is strictly prohibited and will result in a ban.",
          "We do not support Emulators OR Third-Party Devices, such as a controller, or other input devices outside of the device they are playing on. Players need to take a screenshot of their pre-lobby before joining the private game. If a player disconnects in the private game lobby, the team will need to go back into the pre-lobby and take another screenshot.",
          "Failing to submit proof of the home screen or pre-lobby when requested will result in the player/team forfeiting the match.",
        ],
      },
      {
        item: [
          "Delays",
          "Participants may not delay the start of a match without the approval of an admin. Participants may delay a match between games for up to five minutes.",
          "For any forfeit claim, evidence is required to substantiate your claim. In order to support your forfeit/claim, you must provide irrefutable evidence. Proof via video or a screenshot will be required and may be uploaded on the match page or https://streamable.com/(video) or https://imgur.com/ (images) if the proof is too large to upload on the match discussion",
        ],
      },
      {
        item: [
          "Drop locations:",
          "Players will forfeit the game if they are not present by 15 minutes after a match is created",
          "If you choose to land at a location, you are accepting all outcomes that come with dropping within that area. Including lag, glitches, etc. We will not cancel/replay any matches pertaining to lag or in-game glitches if you choose to drop in this location. There will be exceptions to this case and will be at the admin's discretion.",
        ],
      },
      {
        item: [
          "Disconnection",
          "There will be no game restarts if a player disconnects. Players are responsible for their own connection and technical issues",
        ],
      },
      {
        item: [
          "Streamer mode:",
          "Streamer mode must be disabled. Any player using streamer mode will be removed from the room.",
        ],
      },
      {
        item: [
          "Match Schedule",
          "In a knockout tournament, participants that have not completed their matches before the scheduled start time of the next round of fixtures must contact an admin. Participants that do not attempt to contact an admin will have their fixtures forfeit once the 'Grace Period' of the following fixture expires.",
        ],
      },
      {
        item: [
          "Normal Boundaries",
          "Players who move their character outside of the normal boundaries of a map may forfeit the game. Moving outside of the normal boundaries of a Map includes but is not limited to part of the Character’s body passing through what should be a non-permeable surface or object, and moving into any area from which your Character registers shots on an opponent who is not able to register shots on your Character.",
        ],
      },
    ],
  };

  const pointData = [
    { position: "1st", points: 10 },
    { position: "2nd – 5th", points: 7 },
    { position: "6th – 15th", points: 5 },
    { position: "16th – 25th", points: 3 },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div>
          <TournamentsNav />
        </div>

        <div className="max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Call Of Duty: Warzone By HyperX
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto py-8">
        <aside className="w-full md:w-1/4 pt-8">
          <RuleListCard />
        </aside>

        <div className="md:w-3/4 flex flex-col gap-2 ">
          <Details {...quickRulesProps} textClass="text-base" />

          <DetailsParagraph
            {...reportResultsProps}
            textClass="text-base"
            titleTextClass="text-base"
          />

          <OrderedListParagraph {...gameSpecificProps}>
            <div className="text-base mb-8">
              <h3 className="mb-2">TIE BREAKER</h3>
              <p className="mb-6">
                In the event that two or more teams have the same number of
                total points, the following rules shall be applied to break the
                tie:
              </p>
              <p>Tiebreaker 1 = Total wins</p>
              <p>Tiebreaker 2 = Highest eliminations</p>
              <p>Tiebreaker 3 = Highest average placement</p>
              <p>Tiebreaker 4 = Highest amount of eliminations in one game</p>
              <p>Tiebreaker 5 = Coin-Flip</p>
            </div>
          </OrderedListParagraph>

          {/* Points System */}
          <div className="mb-8">
            <h2 className="text-primary text-3xl mb-4">POINTS SYSTEM</h2>
            <p className="mb-6">1 point(s) per kill</p>

            {/* Table Header */}
            <div className="grid grid-cols-2 mb-4">
              <p className="">Position</p>
              <p className="">Points</p>
            </div>

            {/* Point Rows */}
            {pointData.map(({ position, points }, index) => (
              <div key={index} className="grid grid-cols-2 mb-1">
                <p>{position}</p>
                <p className="">{points}</p>
              </div>
            ))}
          </div>

          <GlobalRules />

          <AccountRules />

          <DisputeRules />
        </div>
      </div>
    </div>
  );
}
