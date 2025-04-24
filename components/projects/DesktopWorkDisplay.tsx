"use client";

import React, { useState } from "react";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

import data from "../../data/projects.json";

const DesktopWorkDisplay = () => {
  const [projectInView, setProjectInView] = useState<string>("");
  const [shownProjectsNumber, setShownProjectsNumber] = useState<number>(3);

  return (
    <div className="w-full hidden lg:flex flex-col justify-center items-center">
      <div className="w-full hidden lg:flex flex-row  p-10 gap-20">
        <div className="lg:w-3/5 w-full flex flex-col gap-52">
          {data.projects.slice(0, shownProjectsNumber).map((project) => (
            <ProjectImage
              projectImage={project.image}
              imageCaption={project.imageCaption}
              key={project.name}
              projectName={project.name}
              handleProjectInView={(projectName) =>
                setProjectInView(projectName)
              }
              colorTheme={project.colorTheme}
              link={project.link}
            />
          ))}
        </div>
        <ProjectDescription projectInView={projectInView} />
      </div>
      {shownProjectsNumber < 4 && (
        <button
          onClick={() => setShownProjectsNumber(10)}
          className="glass-card px-4 py-2 font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300 w-1/6"
        >
          See more
        </button>
      )}
    </div>
  );
};

export default DesktopWorkDisplay;
