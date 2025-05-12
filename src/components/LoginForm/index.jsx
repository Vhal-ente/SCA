import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); //For validation messages

  const handleSubmit = (e) => {
    e.preventDefault();

    //Basic Validation
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username/email and password.");
      return;
    }

    setError(""); //to clear any previous error

    //We will replace with real API later
    const fakeUser = {
      id: 1,
      name: username,
      email: username.includes("@") ? username : `${username}@example.com`,
    };
    login(fakeUser);

    // Go back to original protected page, or home if none
    const redirectTo = location.state?.from?.pathname || "/";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="max-h-fit max-w-screen-sm bg-background rounded-xl py-6 px-12 mx-auto my-40">
      <h2 className="text-4xl font-normal text-white mb-16">Log in</h2>

      {error && (
        <p className="text-red-500 text-sm font-medium mb-6">{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-12">
          <label htmlFor="username" className="mb-2 block text-white">
            Username/Email
          </label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-white text-white p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>

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

      {/* Link to Signup page */}
      <p className="text-white mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary font-bold underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
