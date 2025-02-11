"use client";

import React from "react";

import { AnimationContainer } from "@/components";
import HeroHeading from "./HeroHeading";

// mt-8 md:mt-12 lg:mt-32

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-16 px-4 space-y-6 lg:space-y-12 h-screen">
      <AnimationContainer delay={0.4} reverse viewport>
        <HeroHeading />
      </AnimationContainer>

      {/* Our Motto:  self-discovery leads to excellence */}

      <AnimationContainer delay={0.5} reverse viewport>
        <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[1200px] px-4 sm:px-8 md:px-0 leading-relaxed">
          <span className="hidden sm:block">
            Coaching individuals to thrive in their careers through the{" "}
            <span className="whitespace-nowrap">self-discovery</span> of their{" "}
            <span className="text-accent font-bold">&quot;why&quot;</span>
            <br />
            Knowing your purpose brings clarity, builds confidence, and reduces
            stress, leading to a more purposeful career
            <br />
          </span>
          Our Motto: self-discovery leads to excellence
        </p>

        {/* <p className="w-full text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-xs sm:max-w-[600px] px-4 sm:px-8 md:px-0 leading-relaxed">
          Coaching individuals to thrive in their careers through the{" "}
          <span className="whitespace-nowrap">self-discovery</span> of their{" "}
          <span className="text-primary1 font-bold">&quot;why&quot;</span>
        </p> */}
      </AnimationContainer>

      <div className="flex items-center justify-center">
        <AnimationContainer delay={0.7} reverse viewport>
          <button
            className="relative px-6 py-3 border-[1px] border-[#00B24B] bg-[#00B24B] text-white font-semibold rounded-[10px] 
      hover:bg-[#00A143] transition-colors duration-200 
      text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto 
      before:absolute before:inset-0 before:rounded-[10px] before:border-[2px] before:border-[#3FA1D8] before:opacity-0
      before:transition-opacity before:duration-300 before:animate-border-glow"
          >
            Begin Your Journey
          </button>
        </AnimationContainer>
      </div>
    </section>
  );
};

export default HeroSection;
