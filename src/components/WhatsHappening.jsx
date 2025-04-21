import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { IoMdArrowRoundForward } from "react-icons/io";

const items = [
  { title: "Become a player", tag: "News" },
  { title: "Join a Tournament", tag: "News" },
  { title: "Join a Clan", tag: "NEWS" },
];

const slides = [
  {
    image: "/assets/whatshappening/whatshappening_pathoflegends_img.png",
    title: "/assets/path_of_legends.png",
    tag: "Blog",
  },
  {
    image: "/assets/whatshappening/whatshappening_colosseum_img.jpg",
    title: "/assets/academius_2.png",
    tag: "News",
  },
  {
    image: "/assets/whatshappening/whatshappening_battlearena_img.jpg",
    title: "public/assets/clan_war_2.png",
    tag: "Update",
  },
];

export default function WhatsHappening() {
  const [activeCard, setActiveCard] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative bg-[#292929] text-white pt-15 pb-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What’s Happening
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-96">
          {/* Left Column: Interactive Info Cards */}
          <div className="space-y-6 h-full flex flex-col justify-between">
            {items.map((item, index) => {
              const isActive = index === activeCard;
              return (
                <div
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`cursor-pointer flex justify-between items-center px-6 py-6 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#36f6c6] text-black"
                      : "bg-[#222222] text-white"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p
                      className={`text-xs mt-1 ${
                        isActive ? "text-black/60" : "text-gray-400"
                      }`}
                    >
                      {item.tag}
                    </p>
                  </div>
                  <ChevronRight
                    size={24}
                    className={`${isActive ? "text-black" : "text-white"}`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Slide */}
          <div
            className="relative rounded-xl overflow-hidden bg-cover bg-center h-full"
            style={{ backgroundImage: `url('${currentSlide.image}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 w-full h-full p-6 flex flex-col">
              <div className="font-semibold text-sm mb-2">Last Month's MVP</div>
              <div className="text-white text-xs py-1 mb-4 w-fit">
                {currentSlide.tag}
              </div>
              <div className="p-1">
                <img
                  src={currentSlide.title}
                  alt="Slide Title"
                  className="w-full max-h-40 object-contain mb-10"
                />
              </div>

              {/* Carousel dots */}
              <div className="absolute left-8 bottom-12 flex items-center gap-2 mb-4">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === activeSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Arrow Right */}
          <div className="absolute bottom-10 right-25 z-30">
            <div
              className="bg-white p-1 rounded-full w-fit cursor-pointer"
              onClick={nextSlide}
            >
              <IoMdArrowRoundForward className="text-black" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
