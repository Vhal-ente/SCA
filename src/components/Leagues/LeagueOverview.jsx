import Button from "../Button";
import LeaguesNav from "../Navbar/LeaguesNav";
import HeaderInfoCards from "../InfoCard/HeaderInfoCards";
import LeagueAsideInfoCards from "../InfoCard/LeagueAsideInfoCards";
import Details from "../Details/index.jsx";
import Admins from "../Admins";
import DetailsParagraph from "../Details/DetailsParagraph";
import LeagueHeaderCards from "../InfoCard/LeagueHeaderCards";

export default function LeaguesOverview() {
  const detailsProps = {
    sectionTitle: "DETAILS",
    subsections: [
      {
        subheading: "HOW TO SIGN UP",
        items: [
          "Join the tournament before the Signup Deadline",
          "Check in during the Check-in Period",
          "Matches and lobby details will be generated at the tournament Start Date",
        ],
      },
      {
        subheading: "REQUIREMENTS",
        items: [
          "All players must reside (currently live) in Nigeria.",
          "If we fail to get at least 3 participants checked in by the time the tournament starts, the tournament will be cancelled.",
        ],
      },
    ],
  };

  const quickRulesProps = {
    sectionTitle: "QUICK RULES",
    subsections: [
      {
        subheading: "INFO",
        items: [
          "Schedule: 20 matches are played. Players will have 15 minutes once the match is created to join the lobby before it is started",
          "Lobby ID and password: Will be posted on the match page once the tournament starts",
          "Mode: Classic Sqaud–TPP",
        ],
      },
      {
        subheading: "HOW TO GET ROOM DETAILS",
        items: [
          "Once the tournament starts at the Start Date, refresh the tournament page to view your matches",
          'On the match page is where you will find the invite link you will use to join the room in CODM itself. "Password" will be the Room Password you must enter in-game. (See "HOW TO JOIN A ROOM" below)',
          'If the Invite link/Password says "Not set", the admin has not yet created the room. Wait a few minutes, refresh the page, and check it again.',
          'If it says "Access restricted" then you are not part of the tournament/match. Do not share the link or password!',
          "It is not required to be in a specific slot",
        ],
      },
      {
        subheading: "HOW TO JOIN A ROOM",
        items: [
          "Go to the match page on the SCA website / app which becomes available once the tournament starts",
          'Make note of the Password, then click on the link under "Invite link" which will take you to the CODM app',
          "If you are unable to join via the link, then use the Match ID instead. From the Battle Royale page on CODM, click on the menu icon in the top right corner, then click on Private. Then click on the home/search icon also in the top right corner, type in the match ID as found on the match page",
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

  const adminsProps = {
    sectionTitle: "ADMINS",
    admins: [
      { name: "Mightyness", image: "/SCA/assets/admins/mightyness.svg" },
      { name: "Von", image: "/SCA/assets/admins/von.svg" },
      { name: "Manja", image: "/SCA/assets/admins/manja.svg" },
      { name: "Misha", image: "/SCA/assets/admins/misha.svg" },
    ],
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 mb-12">
        <div>
          <LeaguesNav />
        </div>

        <div className="max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
          <p className="text-lg md:text-2xl mb-2">
            Held every month, Path of Legends will contestants battler it out
            for 12 months. each month having it’s own victor. Who dares to walk
            the path of legends ?
          </p>

          <div>
            <Button
              text="Join"
              iconLeft={
                <img
                  src="/SCA/assets/icons/shield_check.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              }
            />
          </div>
        </div>
      </div>

      <div>
        <LeagueHeaderCards />
      </div>

      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto py-8">
        <aside className="w-full md:w-1/4 pt-8">
          <LeagueAsideInfoCards />
        </aside>
        <div className="md:w-3/4 flex flex-col gap-2 ">
          <Details {...detailsProps} />
          <Details {...quickRulesProps} />
          <DetailsParagraph {...reportResultsProps} />
          <Admins {...adminsProps} />
        </div>
      </div>
    </div>
  );
}
