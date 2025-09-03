import DetailsParagraph from "./DetailsParagraph";
import OrderedListParagragh from "./OrderedListParagraph";

export default function GlobalRules() {
  const globalRulesProps = {
    sectionTitle: "Global Rules",
    sectionNumber: 2,
    subsections: [
      {
        item: [
          "Communication:",
          "Only communication via the SCA Discord chat lobby, Match Chat, and SCA Personal Messages will be accepted.",
        ],
      },
      {
        item: [
          "Rule Changes",
          "SCA has the right to (1) decide outside or even against the rulebook and (2) make changes to any of these rules before or during the tournament. This is to ensure fair play and the smooth progression of the tournament",
        ],
      },
      {
        item: [
          "Late Entries",
          "Participants will not be able to sign up to tournaments once the sign-up deadline the has been reached",
        ],
      },
      {
        item: [
          "Misconduct and Unsportsmanlike Behaviour",
          "All players are asked to behave in a respectful way towards other competitors and SCA admins. Toxic behavior, flaming and unsportsmanlike behavior are not allowed and may be punished",
        ],
      },
      {
        item: [
          "Conflict of interest",
          "Participation in prize tournaments, unless otherwise explicitly permitted, is not allowed for employees of SCA, its partners, or tournament sponsors.",
        ],
      },
      {
        item: [
          "Connections",
          "Should we deem that your in-game connection is regularly in conflict with others or too unstable to fairly compete against others, you may be forfeited or blacklisted from our matches. The use of a VPN when connecting to our website/app is strictly prohibited and may result in you getting banned. Use of a GPN/Gaming VPN to connect to game-servers is allowed.",
        ],
      },

      {
        item: [
          "Prize distribution",
          "In tournaments with a monetary payout, unless otherwise stated, payment will be made within (or by) 30 days following receipt of confirmed bank details. Please note that all prize payments must be done to a Nigerian bank account. Any cash prizes not claimed after 3 months will be subject to forfeit.",
          'Tournaments with a "sliding scale prize pool" have participation-dependant prizes, meaning a certain number of confirmed participants must be reached before a prize becomes valid and claimable.',
        ],
      },

      {
        item: [
          "Broadcasting",
          "SCA reserves the right to use any material cast or streamed by a player when participating in SCA Tournaments. All personal streaming is allowed.",
        ],
      },

      {
        item: [
          "Spectators",
          "Other than SCA admins, spectators are only allowed if both participants agree. Any disputes on spectators must be made before the start of the first game.",
        ],
      },

      {
        item: [
          "Loadshedding",
          "Standard cups:",
          "Standard cups will always go ahead regardless of the stage of loadshedding. As long as the tournament reaches the minimum amount of players needed for a tournament to start, it will start.",
        ],
      },
    ],
  };

  const finalEventsProps = {
    sectionTitle: "Event Finals:",
    content: [
      {
        subheading: null,
        paragraphs: [
          "If loadshedding is scheduled for stage 4 or above on the same day as an Event Series Finals, the dates of the finals may be moved to accommodate to all teams taking part.",
        ],
      },
    ],
  };

  return (
    <div>
      <OrderedListParagragh {...globalRulesProps}>
        <div className="text-base mb-8">
          <p className="mb-6">
            By signing up to this tournament all participants agree that they
            have read and accept our{" "}
            <span className="text-primary">Terms of Use</span> and{" "}
            <span className="text-primary">Privacy Policy</span>.
          </p>
        </div>
      </OrderedListParagragh>

      <DetailsParagraph
        {...finalEventsProps}
        textClass="text-base"
        titleTextClass="text-base"
      />
    </div>
  );
}
