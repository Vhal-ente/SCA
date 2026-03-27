import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "ABOUT US", href: "/#about" },
    { label: "WORK WITH US", href: "/#workwithus" },
    { label: "NEWS", href: "/#news" },
    { label: "TOURNAMENTS", href: "/#tournaments" },
  ];

  const hideAvatarOnPaths = ["/login", "/signup"];

  const handleUserClick = () => {
    navigate("/userpage/userpageoverview");
  };

  return (
    <nav className="w-full text-white px-4 py-3 flex items-center justify-between relative z-30">
      {/* Logo */}
      <NavLink to="/" className="w-24 sm:w-28 lg:w-32">
        <img src="/assets/sca_logo.png" alt="Logo" className="w-full" />
      </NavLink>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-primary transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="SEARCH"
            className="px-4 py-2 w-56 rounded-lg text-white text-sm border bg-transparent focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
        </div>

        {/* Avatar */}
        {!hideAvatarOnPaths.includes(location.pathname) && (
          <div className="w-12 h-12 cursor-pointer" onClick={handleUserClick}>
            {isAuthenticated ? (
              <img
                src="/assets/admins/mightyness.svg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/assets/admins/default_hexagon.svg"
                alt="default"
                className="w-full h-full"
              />
            )}
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-3 lg:hidden">
        {!hideAvatarOnPaths.includes(location.pathname) && (
          <div className="w-9 h-9" onClick={handleUserClick}>
            {isAuthenticated ? (
              <img
                src="/assets/admins/mightyness.svg"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <img src="/assets/admins/default_hexagon.svg" alt="default" />
            )}
          </div>
        )}

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
    <div
  className={`absolute left-0 top-full w-full bg-black/80 backdrop-blur-md transition-all duration-300 overflow-hidden ${
    isOpen ? "max-h-[500px] py-4" : "max-h-0"
  }`}
>
        <div className="px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 border-b border-gray-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="w-full px-4 py-2 rounded-lg text-white text-sm border bg-transparent focus:outline-none"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2" />
          </div>
        </div>
      </div>
    </nav>
  );
}
