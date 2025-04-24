import React from "react";
import data from "../../data/info.json";

const InfoContainer = ({ selectedFilter }: { selectedFilter: string }) => {
  const selectedInfo = data.containerInfo.find(
    (information) => information.category === selectedFilter
  );

  return (
    <div className="py-10 flex flex-col gap-2 w-full justify-start text-start">
      {selectedInfo?.info.map((information: string, index: number) => (
        <p key={index} className="flex gap-3 flex-row items-center">
          <span className={`${selectedInfo.textColor} text-3xl glowing-text`}>
            ✦
          </span>{" "}
          <span className="text-xl font-semibold">{information}</span>
        </p>
      ))}{" "}
    </div>
  );
};

export default InfoContainer;
