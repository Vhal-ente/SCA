import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      {/* The HERO SECTION */}
      <section className="w-full min-h-screen">
        <div className="relative w-full h-full min-h-screen bg-[url('/assets/the_landing_colosseum.jpg')] bg-cover bg-center h-full relative p-6">
          {/* AN OVERLAY */}
          <div className="absolute inset-0 bg-black/40 z-30"></div>
          {/* THE BLUR */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-40"></div> */}

          <div className="relative z-50 ">
            <div>
              <Navbar />
            </div>

            <div className="flex-grow flex flex-col items-center justify-center text-center gap-5 mt-12 xl:mt-36">
              <div className="max-w-sm p-2">
                <img
                  src="\assets\sca_logo.png"
                  alt="sca logo"
                  className="w-full "
                />
              </div>

              <p className="text-[#D9D9D9] text-lg md:text-lg leading-relaxed max-w-2xl">
                We pride ourselves on delivering seamless events that celebrate
                the diverse and vibrant gaming community. Join us as we redefine
                gaming, one event at a time!"
              </p>

              <Button className="flex items-center bg-[#36f6c6] text-[#1E1E1E] rounded-lg font-bold text-sm px-5 py-2 hover:bg-[#2fe4b5] transition-all duration-300 mt-4 gap-3">
                <FaArrowCircleRight />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
