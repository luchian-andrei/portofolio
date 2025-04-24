import Link from "next/link";
import React from "react";

const InternalLinks = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <span className="glowing-text text-2xl font-semibold mb-2">
        Website map
      </span>
      <div className="flex flex-col justify-center sm:items-start items-center w-full gap-2 font-semibold *:hover:text-blue-200 text-[#a3a3a3]">
        <Link href={"/"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#tech"}>Tech</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default InternalLinks;
