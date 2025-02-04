"use client";

import React from "react";
import { AnimationContainer } from "@/components";

const ExplorerCard = () => {
  return (
    <>
      <section className="w-full bg-[#F8F4EB] py-10 md:py-14 text-center flex flex-col items-center gap-5 px-6">
        <AnimationContainer delay={0.3}>
          <span
            className="text-base sm:text-lg font-semibold text-[#00B24B]"
            aria-label="Create your own success story"
          >
            Create your own success story
          </span>
        </AnimationContainer>

        <AnimationContainer delay={0.4}>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-screen-lg leading-snug">
            Join our exclusive community to stay ahead of the curve. Get early
            access to our platform.
          </h3>
        </AnimationContainer>

        <AnimationContainer delay={0.5}>
          <button
            className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-[#00B24B] text-white font-semibold text-sm sm:text-base rounded-full hover:bg-[#00A143] focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 transition duration-200"
            aria-label="Join the waitlist"
          >
            Join Waitlist
          </button>
        </AnimationContainer>
      </section>

      {/* <section className="w-full bg-[#3FA1D8] py-10 md:py-14 text-center flex flex-col items-center gap-5 px-6">
        <span
          className="text-base sm:text-lg font-semibold text-[#F8F4EB]"
          aria-label="Create your own success story"
        >
          Create your own success story
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 max-w-screen-lg leading-snug">
          Join our exclusive community to stay ahead of the curve. Get early
          access to our platform.
        </h2>

        <button
          className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 bg-[#00B24B] text-white font-semibold text-sm sm:text-base rounded-full hover:bg-[#00A143] focus:outline-none focus:ring-2 focus:ring-[#00B24B] focus:ring-offset-2 transition duration-200"
          aria-label="Join the waitlist"
        >
          Join Waitlist
        </button>
      </section> */}
    </>
  );
};

export default ExplorerCard;
