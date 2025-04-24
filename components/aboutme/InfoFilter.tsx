"use client";

import React, { useState } from "react";

const infoCategories = [
  { label: "Who", category: "who-am-i" },
  { label: "What", category: "what-i-do" },
  { label: "Why me", category: "why-me" },
  { label: "Location", category: "location" },
  {
    label: "Disponibility",
    category: "disponibility",
    textColor: "text-pink-500",
  },
];

const InfoFilter = ({
  handleFilter,
}: {
  handleFilter: (category: string) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("what-i-do");

  return (
    <div className="flex flex-row gap-5 sm:justify-center justify-start items-center w-full h-1/6 overflow-x-scroll">
      {infoCategories.map((category) => (
        <button
          key={category.category}
          className={` ${
            selectedCategory === category.category
              ? " text-2xl border-b-2 border-white font-bold glowing-text "
              : " text-xl font-normal"
          } cursor-pointer  transition-all duration-150 whitespace-nowrap `}
          onClick={() => [
            setSelectedCategory(category.category),
            handleFilter(category.category),
          ]}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default InfoFilter;
