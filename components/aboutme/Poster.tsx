import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="drop-shadow-2xl hidden lg:flex">
      <Image
        src={"/bg-square.png"}
        alt="poster"
        height={400}
        width={400}
        className="content-end bg-transparent object-cover rounded-3xl border-[1px] border-[#ffffff33] glowing-image"
      />
    </div>
  );
};

export default Poster;
