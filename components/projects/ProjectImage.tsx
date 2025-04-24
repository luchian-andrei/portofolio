"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { MousePointerClick } from "lucide-react";

import { useInView } from "react-intersection-observer";

import Link from "next/link";

const ProjectImage = ({
  imageCaption,
  projectImage,
  projectName,
  handleProjectInView,
  link,
}: {
  imageCaption: string;
  projectImage: string;
  projectName: string;
  handleProjectInView: (projectName: string) => void;
  colorTheme: string;
  link: string;
}) => {
  const { ref, inView, entry } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      handleProjectInView(projectName);
    }
  }, [entry]);

  return (
    <div
      className={`w-full h-[450px] sm:h-[600px] rounded-4xl border-[1px] border-[#ffffff26] p-3 bg-[#ffffff0d]`}
      ref={ref}
    >
      <div
        className={`h-full w-full flex flex-col justify-around items-center border-[1px] border-[#ffffff26] rounded-2xl glass-card`}
      >
        <div className="text-2xl font-[600] text-[#ffffffc4] h-2/5 flex flex-row justify-around items-start pt-10 w-full">
          <p className="flex flex-row justify-around items-center w-full">
            <span className="w-4/5"> {imageCaption}</span>
            <Link
              href={link}
              target="_blank"
              className="hover:bg-blue-200 hover:text-black text-blue-200 rounded-full p-2 transition-all duration-300"
            >
              <MousePointerClick width={35} height={35} />
            </Link>
          </p>
        </div>
        <span className="h-3/5 overflow-hidden rounded-t-xl shadow-[0_0_30px_#ffffffc4]">
          <Image
            src={projectImage}
            alt={projectImage}
            height={500}
            width={500}
          />
        </span>
      </div>
    </div>
  );
};

export default ProjectImage;
