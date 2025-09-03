import InfoCardComponent from "./InfoCardComponent";

const ruleList = [
  {
    title: "Quick Rules",
    items: [
      "INFO",
      "HOW TO GET ROOM DETAILS",
      "HOW TO JOIN A ROOM",
      "REPORT RESULTS",
    ],
  },
  {
    sectionNumber: 1,
    title: "Game Specific",
    items: [
      "Proof Requirements",
      "Grace Period",
      "Emulators and Third-Party Devices",
      "Delays",
      "Drop locations:",
      "Disconnections",
      "Streamer mode:",
      "Match Schedule",
      "Normal Boundaries",
    ],
  },
  {
    sectionNumber: 2,
    title: "Points System",
    items: [
      "Communication",
      "Rule Changes",
      "Late Entries",
      "Misconduct and Unsportsmanlike Behaviour",
      "Conflict of interest",
      "Conditions",
      "Prize distribution",
      "Broadcastings",
      "Spectators",
      "Load shedding",
    ],
  },
  {
    sectionNumber: 3,
    title: "Account Rules",
    items: [
      "In-Game ID",
      "Multi accounts",
      "Names and Logos",
      "Roster Teams",
      "Account Sharing",
      "Roster Changes",
      "Substitutes",
      "Country Change",
      "Banned players",
    ],
  },

  {
    sectionNumber: 4,
    title: "Dispute Rules",
    items: [
      "Cheating",
      "Disputes & Proof",
      "Match-Fixing / Betting Fraud",
      "Doping",
      "Deception / Manipulation",
      "Game Modification",
      "Equipment",
      "IP Flooding (DDoS Attacks)",
      "Lack of Cooperation",
      "Punishments",
      ,
    ],
  },

  {
    title: "Dispute Rules",
  },
];

export default function RuleListCard() {
  return (
    <InfoCardComponent title="Rule List" dashed={false}>
      <div className="text-base break-words mt-4">
        {ruleList.map(({ title, items, sectionNumber }, sectionIndex) => (
          <section key={sectionIndex} className="mb-6">
            <h4 className="text-primary mb-2">{title}</h4>
            {items?.length > 0 && (
              <div className="">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="hover:underline cursor-pointer mb-1 flex gap-2"
                  >
                    {sectionNumber && (
                      <span className="">{`${sectionNumber}.${
                        index + 1
                      }`}</span>
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </InfoCardComponent>
  );
}
