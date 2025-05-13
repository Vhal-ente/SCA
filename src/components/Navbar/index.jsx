import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [active, setActive] = useState("ABOUT US");
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  const navItems = ["ABOUT US", "WORK WITH US", "NEWS", "TOURNAMENTS"];
  const hideAvatarOnPaths = ["/login", "/signup"];

  return (
    <nav className="text-white flex flex-row-reverse lg:flex-row items-center justify-between ">
      {/* Logo */}

      <div className="w-32 lg:max-w-[183px]">
        <Link to="/">
          <img
            src="/assets/sca_logo.png"
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Nav and Search */}

      <div className="hidden lg:flex items-center gap-6 flex-wrap">
        <ul className="flex gap-7 text-sm">
          {navItems.map((item) => {
            const path = `/${item.toLowerCase().replace(/\s+/g, "")}`;
            return (
              <li key={item}>
                <Link
                  onClick={() => setActive(item)}
                  to="/" //please replace with {path}
                  className={`transition duration-300 ${
                    active === item ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH"
            className="px-4 py-2 w-60 rounded-lg text-white text-sm border focus:outline-none "
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
        </div>

        {/* Avatar / Hexagon */}
        {!hideAvatarOnPaths.includes(location.pathname) && (
          <div className="w-14 h-14">
            {isAuthenticated ? (
              <img
                src="/assets/admins/mightyness.svg" //{user.avatarUrl}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div>
                <img
                  src="/assets/admins/default_hexagon.svg"
                  alt="default_hexagon"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black p-4 z-10 lg:hidden transition-all duration-300">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase().replace(/\s+/g, "")}`;
              return (
                <li key={item}>
                  <Link
                    onClick={() => {
                      to = "/"; //please replace with {path}
                      setActive(item);
                      setIsOpen(false);
                    }}
                    className={`transition duration-300 ${
                      active === item ? "text-primary" : "hover:text-primary"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Search Bar (Mobile) */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="SEARCH"
              className="w-full px-4 py-2 rounded-lg text-white text-sm border focus:outline-none"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-white absolute right-3 top-2" />
          </div>

          {/* Avatar / Hexagon */}
          {!hideAvatarOnPaths.includes(location.pathname) && (
            <div className="w-14 h-14">
              {isAuthenticated ? (
                <img
                  src="/assets/admins/mightyness.svg" //{user.avatarUrl}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div>
                  <img
                    src="/assets/admins/default_hexagon.svg"
                    alt="default_hexagon"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
