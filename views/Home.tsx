import React from "react";
import Introduction from "@/components/home/Introduction";

const Home = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center bg-[url(/gradient.png)] bg-center bg-cover"
      id="home"
    >
      <Introduction />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />
    </section>
  );
};

export default Home;
