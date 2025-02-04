"use client";

import { AnimationContainer } from "@/components";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 mt-8 md:mt-12 lg:mt-16">
      <AnimationContainer delay={0.4} reverse viewport>
        {/* <h1 className="w-full text-2xl px-6 md:px-0 lg:px-0 md:text-5xl lg:text-6xl font-bold text-center max-w-full md:max-w-[768px] lg:max-w-[920px]">
          Everything you need to build your digital{" "}
          <span className="text-accent relative">empire</span>
        </h1> */}

        {/* Version 2 */}
        {/* <h1
          className="w-full text-2xl px-6 md:px-0 lg:px-0 md:text-5xl lg:text-6xl
  font-bold text-center max-w-full md:max-w-[768px] lg:max-w-[920px] text-gray-900"
        >
          Everything you need to build your digital{" "}
          <span className="text-[#3FA1D8] relative after:absolute after:w-full after:h-[3px] after:bg-[#3FA1D8] after:left-0 after:bottom-[-4px]">
            empire
          </span>
        </h1> */}

        <h1
          className="w-full text-2xl px-6 md:px-0 lg:px-0 md:text-5xl lg:text-6xl
  font-bold text-center max-w-full md:max-w-[768px] lg:max-w-[920px] text-gray-900"
        >
          Everything you need to build your digital{" "}
          <span className="relative text-[#3FA1D8]">
            empire
            <svg
              className="absolute -bottom-2 left-0 w-[110%] h-[12px]"
              viewBox="0 0 180 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 Q 40 18, 90 10 T 180 10"
                stroke="#3FA1D8"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </span>
        </h1>
      </AnimationContainer>

      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base md:text-lg lg:text-xl text-center max-w-full px-4 md:px-0 lg:px-0 md:max-w-[560px] lg:max-w-[660px]">
          Whether you're launching a new venture or scaling an established
          brand, our platform equips you to grow and thrive.
        </p>
      </AnimationContainer>

      <div className="flex flex-col gap-6 lg:gap-8 items-center sm:flex-row w-full sm:w-auto">
        <div className="w-full sm:w-auto">
          <AnimationContainer delay={0.6} reverse viewport>
            <button
              className="relative px-6 py-3 border-[1px] font-semibold border-[#3FA1D8] text-[#3FA1D8] rounded-[10px] 
        bg-transparent hover:bg-[#3FA1D8]/10 transition-colors duration-200 
        text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#3FA1D8] focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              How it works
            </button>
          </AnimationContainer>
        </div>

        <div className="w-full sm:w-auto">
          <AnimationContainer delay={0.7} reverse viewport>
            <button
              className="px-6 py-3 border-[1px] border-[#00B24B] bg-[#00B24B] text-white font-semibold rounded-[10px] 
        hover:bg-[#00A143] transition-colors duration-200 
        text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto "
            >
              Start Free Trial
            </button>
          </AnimationContainer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
