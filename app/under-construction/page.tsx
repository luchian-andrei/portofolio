import Image from "next/image";
import Link from "next/link";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="w-full max-h-screen flex flex-col justify-start items-center mt-10">
      <Image
        src={"/construction.svg"}
        alt="under-construction"
        width={600}
        height={600}
        className="mb-10"
        unoptimized
      />
      <h1 className="text-5xl font-bold mb-6">Under construction</h1>
      <p className="text-xl mb-10 w-1/3 flex flex-col">
        <span className="font-semibold mb-5">
          At the moment, this project is still in the development process but
          you can :
        </span>
        <span className="mb-2 italic">
          ✧ go back to the main page to see my other projects
        </span>
        <span className="italic">
          ✧ come back later to see the final result of this one
        </span>
      </p>

      <Link
        href={"/"}
        className="glass-card px-4 py-2 font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default UnderConstruction;
