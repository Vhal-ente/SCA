import DetailsParagraph from "./DetailsParagraph";
import OrderedListParagragh from "./OrderedListParagraph";
import PenaltyRules from "./PenaltyRules";

export default function DisputeRules({ id }) {
  const disputeRulesProps = {
    sectionTitle: "Dispute Rules",
    sectionNumber: 4,
    subsections: [
      {
        item: [
          "Cheating",
          "Breaking any rule and any form of cheating, hacking, abusing in-game mechanics, mods or unsportsmanlike behavior may be punished.",
        ],
      },
      {
        item: [
          "Disputes & Proof",
          "All disputes must have evidence submitted to an SCA admin for a ruling to be made. The burden of proof is on the accuser. In order to dispute game results, players must do so on the match page or Discord either before/during the match or no longer than 15 minutes after the end of the match.",
        ],
      },

      {
        item: [
          "Match-Fixing / Betting Fraud",
          "Engaging in any action that improperly influences the outcome of a game or match by any means is strictly prohibited.",
        ],
      },
      {
        item: [
          "Doping",
          "Any kind of doping is forbidden. Mild cases of doping will be punished with a warning. Severe cases (i.e. use of drugs containing performance-enhancing substances, like Adderall) will be punished.",
        ],
      },
      {
        item: [
          "Deception/Manipulation",
          "The attempt to deceive admins or other players with wrong or fake statements, information, or data will not be tolerated. Players found bribing or attempting to bribe an SCA admin or trying to manipulate the competition will be punished accordingly.",
        ],
      },
      {
        item: [
          "Game Modification",
          "Programs that provide an unfair advantage or make changes to the game itself are forbidden. Scripts and changes to the game's configuration are not allowed unless otherwise stated in the tournament rules.",
        ],
      },

      {
        item: [
          "Equipment",
          "Players may not use a Turbo/Button Macro controller. For all console tournaments, the use of a Keyboard/Mouse is strictly prohibited.",
        ],
      },

      {
        item: [
          "IP Flooding (DDoS Attacks)",
          "Performing or assisting with a DDoS attack of your opponent or SCA will be punished severely.",
        ],
      },

      {
        item: [
          "Lack of Cooperation",
          "Failing to comply with a tournament admin's directions and/or requests may result in the forfeit of a game or the entire match.",
        ],
      },
      {
        item: [
          "Punishments",
          "The following punishments for breaking rules may be enforced by an admin: Loss of Honour, a Game Forfeit, a Match Forfeit, or a ban for a specified duration.",
        ],
      },
    ],
  };

  return (
    <div>
      <OrderedListParagragh {...disputeRulesProps} />

      <PenaltyRules />
    </div>
  );
}
