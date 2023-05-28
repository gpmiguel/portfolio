import React from 'react'

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-20">
          <ChipIcon class="w-10 inline-block mb-4" />
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon class="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span class="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills