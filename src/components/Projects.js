import React from 'react'

import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-10 mx-auto text-center lg:px-40">
        <div class="flex flex-col w-full mb-20">
          <CodeIcon class="mx-auto inline-block w-10 mb-4" />
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              class="sm:w-1/2 w-100 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div class="px-8 py-10 relative z-18 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p class="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects