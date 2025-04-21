import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function LoginForm() {
  return (
    <div className="max-h-fit max-w-screen-sm bg-[#292929] rounded-xl py-6 px-12 mx-auto my-40">
      <h2 className="text-4xl font-normal text-white mb-16">Log in</h2>
      <form action="">
        <div className="mb-12">
          <label htmlFor="username" className="mb-2 block text-white">
            Username/Email
          </label>

          <input
            id="username"
            type="text"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="mb-16">
          <label htmlFor="password" className="mb-2 block text-white">
            Password
          </label>

          <input
            id="password"
            type="password"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="flex items-center gap-10">
          <button
            type="submit"
            className="flex items-center bg-[#36f6c6] rounded py-2 px-5 gap-3"
          >
            <span>
              <IoArrowForwardCircle className="h-8 w-8 text-[#1E1E1E]" />
            </span>
            <span className="text-[#1E1E1E] font-bold">LOG IN</span>
          </button>
          <p className="font-bold text-xl text-[#36f6c6]">Forgot password</p>
        </div>
      </form>

      {/* Link to Signup page */}
      <p className="text-white mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#36f6c6] font-bold underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
