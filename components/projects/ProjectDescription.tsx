import React from "react";
import data from "../../data/projects.json";
import TechCard from "../tech/TechCard";

const ProjectDescription = ({ projectInView }: { projectInView: string }) => {
  const project = data.projects.find(
    (project) => project.name === projectInView
  );

  return (
    <div className="lg:w-2/5 w-full max-h-[600px] h-fit lg:sticky sm:top-48 z-20 flex flex-col justify-center items-start">
      <h2 className="text-3xl font-semibold mb-4"> {projectInView} </h2>
      <span className="text-[#a3a3a3] text-xl mb-4 text-start">
        {" "}
        {project?.introduction}
      </span>

      {/* missions */}
      <div className="flex flex-col my-8 justify-start items-start">
        {project?.projectMission.map((mission) => (
          <p
            key={mission}
            className="gap-2 flex items-center justify-start text-start"
          >
            <span className="text-2xl text-pink-500">✦</span>
            <span> {mission}</span>
          </p>
        ))}
      </div>

      {/* tech stack */}
      <div className="flex flex-row gap-4 w-full flex-wrap">
        {project?.techStack.map((tech) => (
          <TechCard icon={tech.icon} name={tech.name} key={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
