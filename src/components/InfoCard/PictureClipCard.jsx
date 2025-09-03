// components/TournamentClipCard.jsx

export default function PictureClipCard({
  image,
  imageTitle,
  title,
  uploader,
  views,
  date,
  since,
}) {
  return (
    <div className="text-left space-y-2 ">
      {/* Background image container */}
      <div
        className="relative bg-[length:130%] bg-top h-52 flex items-center justify-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Image title on top */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full">
          <img
            src={imageTitle}
            alt={title}
            className="max-w-48 h-auto object-contain mb-2"
          />
          <span className="text-xs text-[#CD7F32]">{date}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base font-semibold">{uploader}</p>
      <p className="text-base font-semibold">
        {views} views || {since}
      </p>
    </div>
  );
}
