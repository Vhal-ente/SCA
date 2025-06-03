import React from "react";

export default function PenaltyRules() {
  const penaltyRules = {
    sectionTitle: "DISPUTE RULES",
    content: [
      {
        heading: "PENALTY RULES",
        subheading: "MINOR VIOLATION",
        items: [
          "No show [-------]",
          "Incorrect game account [------]",
          "Fake result [------]",
          "Unregistered player [------]",
          "Deception [------]",
          "Unsportsmanlike Behaviour [-------]",
          "Abandoning Free Agent team after check-in [------]",
          "3x FA team abandons [----------]",
        ],
        note: "Once a player reaches -------- they will receive a one week ban, any subsequent violations may result in a permanent ban.",
      },
      {
        subheading: "MAJOR VIOLATION BAN DURATION",
        items: [
          "Playing with a banned player [---------]",
          "5x FA team abandons [--------]",
          "Boosting [----------]",
          "Hostile language or Personal threats [----------]",
          "Smurf account [--------]",
          "Racism, hate speech [Permanent]",
        ],
        note: "This list does not include violations such as cheating or use of illegal hardware as those are handled on a case by case basis. All bans are first reviewed by the SCA admin team before they are confirmed.",
      },
    ],
  };

  return (
    <div className="">
      <h2 className="text-primary text-3xl mb-6">
        {penaltyRules.sectionTitle}
      </h2>

      {penaltyRules.content.map((penalty, index) => (
        <div key={index} className="">
          {penalty.heading && <h3 className="mb-2">{penalty.heading}</h3>}
          {penalty.subheading && <h4 className="mb-4">{penalty.subheading}</h4>}
          <div className="mb-8">
            {penalty.items.map((item, i) => (
              <p className="mb-1" key={i}>
                {item}
              </p>
            ))}
          </div>
          {penalty.note && <p className="mb-10">{penalty.note}</p>}
        </div>
      ))}
    </div>
  );
}
