import React from "react";
import * as motion from "motion/react-client";

const Introduction = () => {
  const hookTransition = {
    duration: 1,
    delay: 0.5,
  };

  const introductionTransition = {
    duration: 1,
    delay: 3,
  };

  const introductionTransition2 = {
    duration: 1,
    delay: 4,
  };

  return (
    <div className="sm:w-full w-3/4 h-full justify-center items-center flex flex-col pb-28 sm:pb-0">
      {/* first text - title */}
      <div className="text-5xl sm:mb-20 mb-5 font-semibold">
        <motion.p
          className="text-5xl sm:mb-20 mb-12 font-semibold text-center leading-14"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={hookTransition}
        >
          {" "}
          Are you looking for the
          <span className="font-bold text-yellow-300 glowing-text">
            {" "}
            perfect
          </span>{" "}
          person to join your team ?!{" "}
        </motion.p>
      </div>

      {/* second text - subtitle */}
      <div className="flex flex-col justify-center items-center">
        <motion.p
          className="text-2xl font-semibold text-center"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={introductionTransition}
        >
          I don`t know if the perfect person exists
        </motion.p>

        <motion.p
          className="text-2xl font-semibold text-center"
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={introductionTransition2}
        >
          but let me introduce{" "}
          <span className=" text-purple-400 glowing-text">myself</span>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Introduction;
