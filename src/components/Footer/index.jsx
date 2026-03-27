import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const [active, setActive] = useState("");

  const footerItems = [
    { label: "ABOUT US", href: "/#about" },
    { label: "WORK WITH US", href: "/#workwithus" },
    { label: "TOURNAMENTS", href: "/#tournaments" },
    { label: "LEAGUES", href: "/#leagues" },
    { label: "SHOGUN", href: "/shogun" },
  ];

  return (
    <section className="bg-background text-white mx-auto py-10 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div className="w-28 md:w-36">
          <Link to="/">
            <img
              src="/assets/sca_logo.png"
              alt="Logo"
              className="mx-auto lg:mx-0"
            />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-7 text-sm text-center">
          {footerItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`transition ${
                  active === item.label
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="bg-[#42433e] rounded-full p-2 hover:bg-primary transition"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          )}
        </div>
      </div>

      {/* Bottom */}
      <div className="text-xs mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p>© 2023 SCA. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="underline hover:text-primary">
            Cookies Settings
          </a>
        </div>
      </div>
    </section>
  );
}