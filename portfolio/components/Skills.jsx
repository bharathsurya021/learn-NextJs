import React from "react";
import { skillsData } from "@/lib/data";
export const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center space-y-8"
    >
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-900  ">
        {skillsData.map((skill, index) => {
          return (
            <li
              className="bg-white border-black/[0.1] px-5 py-3 rounded-md"
              key={index}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
