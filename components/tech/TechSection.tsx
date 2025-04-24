import React from "react";
import data from "../../data/tech.json";
import TechCard from "./TechCard";

const TechSection = ({
  category,
  label,
  colorTheme,
}: {
  category: string;
  label: string;
  colorTheme: string;
}) => {
  const technologies = data.techStack.filter(
    (technology) => technology.purpose === category
  );
  return (
    <div className="flex flex-col sm:w-2/3 w-3/4 mb-8">
      <p className="text-2xl font-semibold text-white mb-5 gap-2 flex flex-row">
        <span className={colorTheme}>✧</span>
        <span>{label}</span>
      </p>
      <div className="flex flex-row gap-4 w-full flex-wrap">
        {technologies.map((tech) => (
          <TechCard icon={tech.icon} key={tech.name} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default TechSection;
