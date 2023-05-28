import React from 'react'

import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { work } from "../data";

const Work = () => {
  return (
    <section id="work">
      <div class="container px-5 py-10 mx-auto text-center">
        <UsersIcon class="w-10 inline-block mb-4" />
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Work Experience
        </h1>
        <div class="flex flex-wrap m-4">
          {work.map((work) => (
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon class="block w-8 text-gray-500 mb-4" />
                <p class="leading-relaxed mb-6">{work.quote}</p>
                <div class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={work.image}
                    class="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-white">
                      {work.name}
                    </span>
                    <span class="text-gray-500 text-sm uppercase">
                      {work.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work