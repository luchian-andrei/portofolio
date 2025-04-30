import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#footer", label: "Footer" },
];

const DesktopNav = () => {
  return (
    <section className="w-full sm:flex hidden fixed top-0 h-24  justify-center items-center backdrop-blur-xs z-30">
      <nav className="hidden w-fit sm:flex flex-row justify-center items-center py-2 px-3 gap-2 z-50 glass-container backdrop-blur-md">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="p-2 glass-component backdrop-blur-lg font-semibold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default DesktopNav;
