"use client";

import React, { useEffect, useState } from "react";
import { RectangleEllipsis, CircleX } from "lucide-react";
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
    <div className="w-full flex sm:hidden fixed top-0 h-20  justify-end items-center glass-header z-30 px-4">
      <RectangleEllipsis
        width={40}
        height={40}
        onClick={() => setOpenMenu(true)}
        className={openMenu ? "hidden" : "flex"}
      />
      {openMenu && (
        <div className="inset-0 w-full h-screen opacity-40 flex absolute top-0 z-20 bg-[#0a0a0a]"></div>
      )}

      {openMenu && (
        <div className="inset-0 bg-[#212121] border-[1px] border-[#ffffff26] w-[85vw] h-[50vh] absolute z-50 top-20 flex flex-col py-4 rounded-xl justify-center items-center justify-self-center">
          <CircleX
            width={40}
            height={40}
            onClick={() => setOpenMenu(false)}
            className="self-end mx-4"
          />
          <nav className="w-full h-full  flex flex-col justify-center items-center text-2xl gap-4 ">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="p-2 font-semibold glowing-text w-full flex justify-center items-center"
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
