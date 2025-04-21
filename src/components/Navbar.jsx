import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [active, setActive] = useState("ABOUT US");
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["ABOUT US", "WORK WITH US", "NEWS", "TOURNAMENTS"];

  return (
    <nav className="text-white flex flex-row-reverse md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="max-w-[183px]">
        <img src="/assets/sca_logo.png" alt="Logo" className="" />
      </div>

      {/* Desktop Nav and Search */}

      <div className="hidden md:flex items-center gap-7 flex-wrap">
        <ul className="flex gap-7 text-sm">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer transition duration-300 ${
                active === item ? "text-[#36f6c6]" : "hover:text-[#36f6c6]"
              }`}
            >
              {item}
            </li>
          ))}
          {/* <li className="hover:text-[#36f6c6] transition duration-300">
            ABOUT US
          </li>
          <li className="hover:text-[#36f6c6] transition duration-300">
            WORK WITH US
          </li>
          <li className="hover:text-[#36f6c6] transition duration-300">NEWS</li>
          <li className="hover:text-[#36f6c6] transition duration-300">
            TOURNAMENTS
          </li> */}
        </ul>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH"
            className="px-4 py-2 w-60 rounded-lg bg-gray-800 text-white text-sm border focus:outline-none "
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
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
        <div className="absolute top-full left-0 w-full bg-black p-4 z-10 md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                }}
                className={`cursor-pointer transition duration-300 ${
                  active === item ? "text-[#36f6c6]" : "hover:text-[#36f6c6]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Search Bar (Mobile) */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="SEARCH"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white text-sm border focus:outline-none"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
          </div>
        </div>
      )}
    </nav>
  );
}
