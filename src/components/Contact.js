import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import PopupModal from './PopupModal';

import portfolio from '../properties/portfolio';

const Contact = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const form = useRef();

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")
    }

    function handleSubmit(e) {
      e.preventDefault();

      emailjs.sendForm(portfolio.SERVICE_ID, portfolio.TEMPLATE_ID, form.current, portfolio.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    function handleSubmitMock(e) {
      e.preventDefault();

      console.log("Submitted Mock");
    }

  return (
    <section id="contact" class="">
      {/* <div class="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"> */}
      <div class="container px-10 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            class="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a class="text-indigo-400 leading-relaxed">
                reedbarger@email.com
              </a>
              <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div> */}
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          ref={form}
        //   class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          class="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p class="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div class="relative mb-4">
            <label htmlFor="name" class="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="relative mb-4">
            <label htmlFor="email" class="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="relative mb-4">
            <label
              htmlFor="message"
              class="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <PopupModal type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
        </form>
      </div>
    </section>
  )
}

export default Contact