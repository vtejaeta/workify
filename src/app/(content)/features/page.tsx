"use client";

import React from "react";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const Features = () => {
  const availableFeatures = [
    {
      heading: "Explorer",
      description: "Never build and maintain a data importer again",
      redirectUrl: "",
    },
    {
      heading: "CoCo",
      description:
        "Deliver fully-featured data importing capabilities in the next sprint",
      redirectUrl: "",
    },
    {
      heading: "Journey",
      description:
        "Automate any workflows that involve internal spreadsheets or third party software.",
      redirectUrl: "",
    },
    {
      heading: "Behavioral Tool",
      description:
        "Delight new customers with seamless, self-serving data onboarding",
      redirectUrl: "",
    },
  ];

  return (
    <div className="m-4">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title="The Process" />

          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-onBackground mt-6 sm:px-6">
            <span className="text-primary font-bold whitespace-nowrap">
              Various Features
            </span>
            <span className="block text-3xl">
              {" "}
              That Can Increase Your Productivity
            </span>
          </h2>
        </div>
      </AnimationContainer>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full max-w-[800px]">
          {availableFeatures.map((eachFeature, index) => {
            return (
              <div
                className="p-6 rounded-xl border border-gray-300/50 h-[250px] shadow-sm"
                key={index}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <AnimationContainer delay={0.3} key={index}>
                      <h2 className="text-2xl font-extrabold mb-2 text-onBackground">
                        {eachFeature.heading}
                      </h2>
                      <p className="text-base leading-5">
                        {eachFeature.description}
                      </p>
                    </AnimationContainer>
                  </div>

                  <AnimationContainer delay={0.4} key={index}>
                    <button className="border-[1px] border-accent/10 m-0 h-8 w-28 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-200 focus: outline-accent">
                      <div className="w-fit relative inline-flex rounded-full focus:outline-none">
                        <span className="text-accent inline-flex w-full cursor-pointer items-center justify-center rounded-full text-sm font-medium">
                          Learn More
                        </span>
                      </div>
                    </button>
                  </AnimationContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
