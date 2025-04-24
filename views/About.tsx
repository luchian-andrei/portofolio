import React from "react";
import Info from "@/components/aboutme/Info";
import Poster from "@/components/aboutme/Poster";

const About = () => {
  return (
    <section
      className="h-screen sm:w-full w-3/4 flex flex-col items-center justify-around text-center py-10"
      id="about"
    >
      <h2 className="text-5xl font-semibold my-20 glowing-text">
        You (may) ask, I answer
      </h2>
      <div className="w-full flex flex-row items-center justify-around mb-44">
        <Info />
        <Poster />
      </div>
    </section>
  );
};

export default About;
