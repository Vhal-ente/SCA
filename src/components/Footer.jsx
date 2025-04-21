import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

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
    <section className="bg-[#292929] text-white max-h-72 mx-auto py-10 px-6 md:px-16">
      <div className="flex items-center justify-between">
        <div className="max-w-36">
          <img src="/assets/sca_logo.png" alt="Logo" className="" />
        </div>

        <div className="flex items-center gap-7 flex-wrap">
          <ul className="flex gap-7 text-sm">
            {footerItems.map((fooitem) => (
              <li
                key={fooitem}
                onClick={() => setActive(fooitem)}
                className={`cursor-pointer transition duration-300 ${
                  active === fooitem ? "text-[#36f6c6]" : "hover:text-[#36f6c6]"
                }`}
              >
                {fooitem}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <a href="#" target="_blank" className="bg-[#42433e] rounded-full p-1">
            <FaFacebookF className="h-3 w-3" />
          </a>

          <a href="#" target="_blank" className="bg-[#42433e] rounded-full p-1">
            <FaXTwitter className="h-3 w-3 " />
          </a>

          <a href="#" target="_blank" className="bg-[#42433e] rounded-full p-1">
            <FaYoutube className="h-3 w-3" />
          </a>

          <a href="#" target="_blank" className="bg-[#42433e] rounded-full p-1">
            <FaLinkedinIn className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="text-xs flex items-center justify-center gap-x-24 mt-36 ">
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
