import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoArrowForwardCircle } from "react-icons/io5";

export default function SignupForm() {
  const [dob, setDob] = useState(null);
  return (
    <div className="max-h-fit max-w-screen-sm bg-background rounded-xl py-6 px-12 mx-auto my-40">
      <h2 className="text-4xl font-normal text-white mb-16">Sign up</h2>
      <form action="">
        <div className="mb-12">
          <label htmlFor="username" className="mb-2 block text-white">
            Username
          </label>

          <input
            id="username"
            type="text"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="mb-12">
          <label htmlFor="email" className="mb-2 block text-white">
            Email address
          </label>

          <input
            id="email"
            type="email"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="mb-12">
          <label htmlFor="password" className="mb-2 block text-white">
            Password
          </label>

          <input
            id="password"
            type="password"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

        <div className="mb-16">
          <label htmlFor="dob" className="mb-2 block text-white">
            Date of birth
          </label>

          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="dd/MM/yy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            placeholderText="dd / mm / yy"
            wrapperClassName="w-full"
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
            id="dob"
          />
        </div>

        <p className="mb-16  text-white">
          By clicking on Create Account, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            {" "}
            Terms & conditions{" "}
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>

        <div className="flex items-center gap-10">
          <button
            type="submit"
            className="flex items-center bg-primary rounded py-2 px-5 gap-3"
          >
            <span>
              <IoArrowForwardCircle className="h-8 w-8 text-[#1E1E1E]" />
            </span>
            <span className="text-[#1E1E1E] font-bold">LOG IN</span>
          </button>
          <p className="font-bold text-xl text-primary">Forgot password</p>
        </div>
      </form>

      {/* Link to Login page */}
      <p className="mt-6 text-white">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-bold underline">
          Login
        </Link>
      </p>
    </div>
  );
}
