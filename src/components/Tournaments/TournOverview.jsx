import Button from "../Button";
import TournamentsNav from "../Navbar/TournamentsNav";
import HeaderInfoCards from "../InfoCard/HeaderInfoCards";
import AsideInfoCards from "../InfoCard/AsideInfoCards";
import Details from "../Details/index.jsx";
import Admins from "../Admins";
import DetailsParagraph from "../Details/DetailsParagraph";

export default function TournOverview() {
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
          "All players must reside/currently live in Nigeria.",
          "If fewer than 3 participants check in by the start time, the tournament will be cancelled.",
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
          "3 matches are played one after the other.",
          "Players have 15 minutes between each match.",
          "Lobby ID and password: Posted on match page.",
          "Mode: Classic Solo–TPP",
        ],
      },
      {
        subheading: "HOW TO GET ROOM DETAILS",
        items: [
          "Refresh the tournament page at the start time.",
          "If 'N/A' shows, wait and refresh until room is created.",
          "'Access restricted' means you're not part of the match.",
          "No specific slot is required.",
        ],
      },
      {
        subheading: "HOW TO JOIN A ROOM",
        items: [
          "Go to the match page on SCA website/app.",
          "Click on the 'Invite link' to join CODM room.",
          "For private rooms, tap the house icon and enter Match ID and Password.",
          "Wait for admin to start.",
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
          <TournamentsNav />
        </div>

        <div className="max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Call Of Duty: Warzone By HyperX
          </h1>
          <p className="text-lg md:text-2xl mb-2">
            Description of the tournament will contestants battle it out each
            month having it's own victor. Who dares to walk the path of legends?
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
        <HeaderInfoCards />
      </div>

      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto py-8">
        <aside className="w-full md:w-1/4 pt-8">
          <AsideInfoCards />
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
