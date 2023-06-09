import React from 'react'

import { ArrowRightIcon } from "@heroicons/react/solid"

const Nav = () => {
  return (
    <header class="bg-gray-800 md:sticky top-0 z-10">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" class="ml-3 text-xl">
            Giuliano Miguel
          </a>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#work" class="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#projects" class="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" class="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon class="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  )
}

export default Nav