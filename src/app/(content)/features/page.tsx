"use client";

import React from "react";

import { AnimationContainer } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const Features = () => {
  const availableFeatures = [
    {
      heading: "Explorer",
      description:
        "Explorer lets you discover a wide range of career options, offering valuable insights into the skills, abilities, and knowledge required for each course and occupation. It serves as a helpful tool for preliminary information and awareness. Whether you’re exploring new opportunities or refining your goals, Explorer is your first step toward clarity on your career path.",
      redirectUrl: "",
      oneLiner:
        "Explorer helps you find different career options and understand what skills and knowledge you need.",
    },
    {
      heading: "CoCo",
      description:
        "Coco is your personal AI agent, designed to help you access career information, make informed decisions about your day-to-day career activities, and maintain your overall wellbeing. With Coco by your side, you can continuously monitor and evaluate your choices, ensuring a balanced approach to career growth and personal wellbeing.",
      redirectUrl: "",
      oneLiner:
        "Coco is your personal AI Agent that provides career information, helps with decisions, and supports your overall wellbeing.",
    },
    {
      heading: "Coaching",
      description:
        "The 1:1 Personalised Career coaching with a psychologist will assist you in realising strengths, interests, and abilities. Through this process, we help you gain clarity about your personal story, rewrite it with confidence, and align your career path with your goals, all while prioritising your wellbeing.",
      redirectUrl: "",
      oneLiner:
        "1:1 personalized career coaching with a psychologist will assist you in understanding your purpose and strengths, setting goals, and taking action.",
    },
    {
      heading: "Behavioural Tools",
      description:
        "Behavioural Tools help individuals stay productive, calm, and focused while evaluating daily progress and learning key career strategies. Designed for behavioural change, these tools support you throughout your self-discovery journey and keep you on track afterwards.",
      redirectUrl: "",
      oneLiner:
        "B-Tools help you stay productive, focused, and on track, supporting your self-discovery journey and career progress.",
    },
  ];

  return (
    <div className="m-4">
      <AnimationContainer delay={0.2}>
        <div className="flex flex-col items-center justify-center lg:items-center w-full py-8 max-w-4xl mx-auto">
          <MagicBadge title="Features" />
          <h2 className="text-center lg:text-center text-2xl md:text-3xl !leading-[1.1] font-medium font-heading text-onBackground mt-6 xl:px-6">
            Resolve career dilemmas and prioritise your wellbeing with the
            rigour of{" "}
            <span className="text-primary1 font-bold whitespace-nowrap">
              {/* Resolve career dilemmas and prioritise your wellbeing with the rigour of psychology ( Green ) and AI ( Blue ) . */}
              Psychology{" "}
            </span>
            and{" "}
            <span className="text-accent font-bold whitespace-nowrap">
              {/* Resolve career dilemmas and prioritise your wellbeing with the rigour of psychology ( Green ) and AI ( Blue ) . */}
              AI
            </span>
            {/* <span className="block text-3xl">
              {" "}
              That Can Increase Your Productivity
            </span> */}
          </h2>

          {/* TODO:- Adjust font size, margin and colors (slightly lighter version) */}
          <p className="w-full text-sm md:text-lg lg:text-xl text-center max-w-full px-4 md:px-0 lg:px-0 md:max-w-[560px] lg:max-w-[720px] mt-4 text-neutral-600">
            Inwesol integrates psychological evidence with GenAI&apos;s scale to
            democratise career information, provide personalised career
            coaching, and create wellbeing-enabled communities.
          </p>
        </div>
      </AnimationContainer>

      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full max-w-[800px]">
          {availableFeatures.map((eachFeature, index) => {
            return (
              <div
                className={`p-6 rounded-xl border border-gray-300/50 h-[350px] shadow-sm ${
                  index == 1 || index == 2 ? "bg-[#F8F4EB]" : "bg-[#f2fff2]"
                }`}
                key={index}
              >
                <div className="flex flex-col justify-end h-full">
                  <div>
                    <AnimationContainer delay={0.3} key={index}>
                      <h2 className="text-2xl font-extrabold mb-2 text-onBackground">
                        {eachFeature.heading}
                      </h2>
                      {/* BG Color -> #f2fff2 */}
                      <p className="text-base leading-5 text-gray-600">
                        {eachFeature.oneLiner}
                      </p>
                    </AnimationContainer>
                  </div>

                  <AnimationContainer delay={0.4} key={index}>
                    <button className="border-[1px] border-accent/10 m-0 h-8 w-28 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors duration-200 focus: outline-accent mt-4">
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
