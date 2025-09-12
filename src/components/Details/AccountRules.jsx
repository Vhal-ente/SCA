import DetailsParagraph from "./DetailsParagraph";
import OrderedListParagragh from "./OrderedListParagraph";

export default function AccountRules({ id }) {
  const accountRulesProps = {
    sectionTitle: "Account Rules",
    sectionNumber: 3,
    subsections: [
      {
        item: [
          "In-Game ID",
          "Players must ensure that their in-game ID (relating to the tournament) is up-to-date on their SCA account. Per admin discretion, players may be deducted honour or forfeited from the match/tournament.",

          "Players with profanity, vulgar text or foreign characters that cannot be typed on a standard keyboard, console, or mobile device in their ID will be requested to remove the text or risk being banned.",
        ],
      },
      {
        item: [
          "Multi accounts",
          [
            "Each tournament participant must only have one account. If a player cannot access their account, they must contact an admin on Discord or email ",
            <span key="" className="text-primary">
              admin@sca
            </span>,
          ],
        ],
      },

      {
        item: [
          "Names and Logos",
          "We reserve the right to edit user/team names or logos and deduct Honour if they resemble copyrighted content, are offensive/vulgar, or incite hatred.",
        ],
      },
      {
        item: [
          "Team Roster",
          "A player may only play for one team in a tournament. The only players allowed to play for a team are the players listed under that team on the match page.",
        ],
      },
      {
        item: [
          "Account Sharing",
          "Players are forbidden to allow others to play in tournaments in place of them by sharing game accounts.",
        ],
      },
      {
        item: [
          "Roster Changes",
          "Changes to a team's roster may only be made before the start of a tournament and up to the end of the first round grace period. Teams may request via the admins for a roster change to be made with a player that is not a player already participating in the tournament.",
        ],
      },

      {
        item: [
          "Substitutes",
          "For specified tournaments, sub players will be allowed. These players are not required to check in and will also not receive any ELO or count towards team seeding. Substitutes will not be awarded trophies or embers either.",
        ],
      },

      {
        item: [
          "Country",
          "Deliberately faking the country of residence is punishable. If a player does so and plays in a team match, the team will be punished as well.",
          [
            "Participants must reside in one of the following Sub Saharan African countries: Angola, Benin, Botswana, Burkina Faso, Burundi, Cameroon, Cape Verde, Central African Republic, Chad, Comoros, Congo, Côte d'Ivoire, Djibouti, Equatorial Guinea, Eritrea, Ethiopia, Gabon, The Gambia, Ghana, Guinea, Guinea-Bissau, Kenya, Lesotho, Liberia Madagascar, Malawi, Mali, Mauritania, Mauritius, Mozambique, Namibia, Niger, ",
            <span key="" className="text-primary">
              Nigeria,
            </span>,
            " Réunion, Rwanda, Sao Tome and Principe, Senegal, Seychelles, Sierra Leone, Somalia, South Africa, Sudan, Swaziland, Tanzania, Togo, Uganda, Western Sahara, Zambia, and Zimbabwe.",
          ],
          "Hosting rights for private matches will be given to Nigerian players.",
        ],
      },

      {
        item: [
          "Banned players",
          "Playing with a banned player may result in the entire team also being banned. A list of players banned from competing on the ACGL platform can be found here",
        ],
      },
    ],
  };

  return (
    <div>
      <OrderedListParagragh {...accountRulesProps} />
    </div>
  );
}
