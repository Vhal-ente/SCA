import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  const [active, setActive] = useState("ABOUT US");
  const footerItems = [
    "ABOUT US",
    "WORK WITH US",
    "NEWS",
    "TOURNAMENTS",
    "F.A.Q",
  ];

  return (
    <section className="bg-background text-white mx-auto py-10 px-6 md:px-16">
      {/* <div className="flex items-center justify-between"> */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Logo */}
        <div className="max-w-36">
          <Link to="/">
            <img
              src="/SCA/assets/sca_logo.png"
              alt="Logo"
              className="mx-auto md:mx-0 cursor-pointer"
            />
          </Link>
        </div>

        {/* Footer Navigation Links */}
        {/* <div className="flex items-center gap-7 "> */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-7 text-sm">
          {footerItems.map((fooitem) => (
            <li
              key={fooitem}
              onClick={() => setActive(fooitem)}
              className={`cursor-pointer transition duration-300 ${
                active === fooitem ? "text-primary" : "hover:text-primary"
              }`}
            >
              {fooitem}
            </li>
          ))}
        </ul>
        {/* </div> */}
        {/* Social Icons */}
        <div className="flex gap-3">
          {[FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                target="_blank"
                className="bg-[#42433e] rounded-full p-2"
              >
                <Icon className="h-6 w-6" />
              </a>
            )
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-xs mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-x-24 text-center md:text-left">
        {/* <div className="text-xs flex items-center justify-center gap-x-24 mt-36 "> */}
        <p>@2023 SCA. All rights reserved.</p>
        <div className="flex items-center gap-x-4">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Cookies Settings
          </a>
        </div>
      </div>
    </section>
  );
}
