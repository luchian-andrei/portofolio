import React from "react";
import TechSection from "@/components/tech/TechSection";

const Tech = () => {
  return (
    <section
      className="min-h-screen w-full sm:w-3/4 flex flex-col items-center justify-start py-10 text-center"
      id="tech"
    >
      <h2 className="text-5xl font-semibold my-20 glowing-text">
        Technologies I use on a daily basis
      </h2>
      <TechSection
        category="base"
        label="Base level"
        colorTheme="text-red-500"
      />
      <TechSection
        category="front-end"
        label="Front End"
        colorTheme="text-blue-500"
      />
      <TechSection
        category="back-end"
        label="Back End"
        colorTheme="text-yellow-500"
      />
      <TechSection
        category="database"
        label="Database"
        colorTheme="text-pink-500"
      />
      <TechSection
        category="devOps"
        label="Dev Ops"
        colorTheme="text-orange-500"
      />
      <TechSection
        category="additional"
        label="Additional"
        colorTheme="text-green-500"
      />
    </section>
  );
};

export default Tech;
