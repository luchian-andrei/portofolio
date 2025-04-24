"use client";

import React, { useState } from "react";
import InfoFilter from "./InfoFilter";
import InfoContainer from "./InfoContainer";

const Info = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("what-i-do");

  return (
    <div className="flex flex-col justify-start items-center glass-card sm:p-8 p-4 w-full sm:w-3/4 lg:w-1/2 min-h-[400px] h-fit">
      <InfoFilter handleFilter={(category) => setSelectedFilter(category)} />
      <InfoContainer selectedFilter={selectedFilter} />
    </div>
  );
};

export default Info;
