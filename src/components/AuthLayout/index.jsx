import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingPage from "@/pages/LandingPage";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignupForm";

export default function AuthLayout() {
  return (
    <div className="min-w-full">
      <div className="bg-[url('/assets/the_colosseum.jpg')] bg-cover bg-center min-h-screen relative px-6 py-10">
        {/* AN OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-30"></div>
        {/* THE BLUR */}
        <div className="absolute inset-0 bg-black/0 bg-gradient-to-b from-[#000000] to-[#D9D9D900] max-h-96 z-40"></div>

        <div className="relative z-50">
          <div className="max-w-full bg-transparent mx-auto">
            <Navbar />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="max-w-full">
        <Footer />
      </div>
    </div>
  );
}
