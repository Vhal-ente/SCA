const events = [
  {
    title: "Path of Legends 1",
    description:
      "Held every month, Path of Legends will contestants battle it out for 12 months, each month having its own victor. Who dares to walk the path of legends?",
    image: "/assets/ancient_greek.png",
    logoTitle: "/assets/path_of_legends.png",
  },
  {
    title: "Academius Games 1",
    description:
      "Path of blood season 1 Path of blood season 1 Path of blood season 1 Path of blood season 1 Path of blood season 1 Path of blood season 1",
    image: "/assets/ancient_greek.png",
    logoTitle: "/assets/academius_2.png",
  },
];

export default function PreviousEvents() {
  return (
    <section className="bg-primary py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1E1E1E]">
        PREVIOUS EVENTS
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mx-auto">
        {events.map((event, index) => (
          <div key={index} className="text-left">
            {/* Image container */}
            <div
              className="relative overflow-hidden bg-cover bg-center min-h-80 flex items-center justify-center"
              style={{ backgroundImage: `url('${event.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* Content */}
              <div className="relative z-10 p-18">
                <img
                  src={event.logoTitle}
                  alt="Game Title"
                  className="max-w-full max-h-40 object-contain"
                />
              </div>
            </div>
            {/* Text content below image */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                {event.title}
              </h3>
              <p className="text-[#1E1E1E] text-xs">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
