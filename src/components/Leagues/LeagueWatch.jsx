import DashedLeagueBorderCard from "../InfoCard/DashedLeagueBorderCard";
import PictureClipCard from "../InfoCard/PictureClipCard";
import LeaguesNav from "../Navbar/LeaguesNav";

export default function LeagueWatch() {
  const clips = [
    {
      id: 1,
      image: "/assets/ancient_greek.png",
      imageTitle: "/assets/path_of_legends.png",
      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
    {
      id: 2,
      image: "/assets/ancient_greek.png",
      imageTitle: "/assets/path_of_legends.png",

      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
    {
      id: 3,
      image: "/assets/ancient_greek.png",
      imageTitle: "/assets/path_of_legends.png",

      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6 mb-10">
        <div>
          <LeaguesNav />
        </div>
      </div>

      <div>
        <h2 className="text-primary text-3xl mb-6">PARTICIPANT STREAMS</h2>
        <p className="text-2xl mb-6">
          Participants streaming on Twitch or YouTube link will automatically
          get added.
        </p>

        <div className="mb-12">
          <DashedLeagueBorderCard />
        </div>

        <div className="mb-10">
          <h2 className="text-primary text-3xl mb-6">TOURNAMENT CLIPS</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clips.map((clip) => (
              <PictureClipCard key={clip.id} {...clip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
