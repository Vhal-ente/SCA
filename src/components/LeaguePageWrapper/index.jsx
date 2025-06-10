import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function LeaguePageWrapper() {
  return (
    <div className="min-w-full">
      <div className="min-h-[75vh] bg-[url('/assets/ancient_greek.png')] bg-cover bg-[center_top_-60px] relative px-6 py-10 flex flex-col justify-center">
        {/* AN OVERLAY */}
        <div className="absolute inset-0 bg-black/20 z-30"></div>
        {/* THE BLUR */}
        <div className="absolute inset-0 bg-black/0 bg-gradient-to-b from-[#000000] to-[#D9D9D900] max-h-30 z-40"></div>

        <div className="relative z-50">
          <div className="max-w-full bg-transparent mx-auto">
            <Navbar />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-50 flex items-center justify-center flex-1">
          <img
            src="/assets/academius_2.png"
            alt="Game Title"
            className="max-w-full max-h-40 object-contain"
          />
        </div>
      </div>

      <div className="bg-background text-general px-8">
        <Outlet />
      </div>

      <div className="max-w-full">
        <Footer />
      </div>
    </div>
  );
}
