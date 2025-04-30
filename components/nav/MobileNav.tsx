"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#footer", label: "Footer" },
];

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const device = useScreenSize();

  useEffect(() => {
    if (openMenu && device === "mobile") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMenu, device]);

  return (
    <div
      className={`w-full flex sm:hidden fixed top-0 h-20   ${
        openMenu ? "justify-center" : "justify-end"
      } items-center z-30 px-4`}
    >
      <button
        className={`text-2xl font-semibold   ${openMenu ? "hidden" : "flex"} `}
        onClick={() => setOpenMenu(true)}
      >
        menu
      </button>
      {openMenu && (
        <div
          className="inset-0 w-full h-screen opacity-40 flex absolute top-0 z-20 bg-[#0a0a0a]"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      {openMenu && (
        <div className="bg-[#212121] border-[1px] border-[#ffffff26] w-[85vw] max-h-[70vh]  absolute z-50 top-20 flex flex-col py-4 rounded-2xl justify-center items-center justify-self-center place-self-center">
          <button
            className={`text-3xl font-semibold self-end mr-5 mb-2 text-red-500`}
            onClick={() => setOpenMenu(false)}
          >
            esc
          </button>
          <nav className="w-full h-full  flex flex-col justify-center items-center text-2xl">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="p-4 font-semibold glowing-text w-full flex justify-center items-center border-t-[1px] border-[#ffffff26]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
