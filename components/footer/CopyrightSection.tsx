import React from "react";
import { Copyright } from "lucide-react";

const CopyrightSection = () => {
  return (
    <div className="w-3/4 pt-6 border-t-[1px] border-blue-200 flex justify-center items-center mb-10">
      <p className="flex flex-row gap-1 font-semibold">
        Copyright <Copyright size={20} /> 2025 Luchian Andrei. All rights
        reserved.
      </p>
    </div>
  );
};

export default CopyrightSection;
