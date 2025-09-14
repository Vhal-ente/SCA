import DashedTournBorderCard from "../InfoCard/DashedTournBorderCard";
import PictureClipCard from "../InfoCard/PictureClipCard";
import TournamentsNav from "../Navbar/TournamentsNav";

export default function TournWatch() {
  const clips = [
    {
      id: 1,
      image: "/SCA/assets/ancient_greek.png",
      imageTitle: "/SCA/assets/path_of_legends.png",
      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
    {
      id: 2,
      image: "/SCA/assets/ancient_greek.png",
      imageTitle: "/SCA/assets/path_of_legends.png",

      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
    {
      id: 3,
      image: "/SCA/assets/ancient_greek.png",
      imageTitle: "/SCA/assets/path_of_legends.png",

      title: "PATH OF LEGENDS JANUARY 2024",
      uploader: "Manjo",
      views: 860,
      date: "2024 JAN",
      since: "1 months ago",
    },
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

      <div>
        <h2 className="text-primary text-3xl mb-6">PARTICIPANT STREAMS</h2>
        <p className="text-2xl mb-6">
          Participants streaming on Twitch or YouTube link will automatically
          get added.
        </p>

        <div className="mb-12">
          <DashedTournBorderCard />
        </div>

        <div className="">
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
