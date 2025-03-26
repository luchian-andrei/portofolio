import React from "react";

const Introduction = () => {
  return (
    <div className="h-full justify-center items-center flex flex-col">
      <h2 className="text-5xl mb-6">
        Are you looking for the
        <span className="font-bold text-red-500"> PERFECT</span> person to join
        your team ?!{" "}
      </h2>
      <h2 className="text-2xl">
        I`m sure that the perfect person doesn`t exist.
      </h2>
      <h2 className="text-2xl">
        ...but since you`re here, let me introduce{" "}
        <span className="italic text-red-500">myself</span>{" "}
      </h2>
    </div>
  );
};

export default Introduction;
