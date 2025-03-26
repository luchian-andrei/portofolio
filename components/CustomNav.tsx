import Link from "next/link";
import React from "react";

const CustomNav = () => {
  return (
    <nav className="bg-gray-600 rounded-4xl w-fit sticky top-5 flex flex-row justify-center items-center py-2 px-3 gap-2">
      <Link href={"/"} className="custom-link">
        Home
      </Link>
      <Link href={"#about"} className="custom-link">
        About
      </Link>
      <Link href={"#tech"} className="custom-link">
        Tech
      </Link>
      <Link href={"#projects"} className="custom-link">
        Projects
      </Link>
      <Link href={"#contact"} className="custom-link">
        Contact
      </Link>
      <Link href={"#footer"} className="custom-link">
        Footer
      </Link>
    </nav>
  );
};

export default CustomNav;
