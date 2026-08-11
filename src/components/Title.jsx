import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaEnvelope } from "react-icons/fa";
import TechFigure from "./TechFigure";
import DotsBackground from "./DotsBackground";

function Title() {
  return (
    <section
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-24 sm:px-10 lg:h-screen lg:px-16"
      id="title"
    >
      <DotsBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full flex-col items-start text-left lg:w-1/2">
          <h1 className="dark:text-white">Hello, I'm</h1>
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 py-4 lg:py-4">
            <b>Samiksha Satthy</b>
          </h1>
          <h2 className="mb-7 lg:font-bold">Computer Engineering @ UWaterloo</h2>
          <a href="mailto:ssatthy@uwaterloo.ca" target="_blank">
            <div className="inline-flex flex-row items-center justify-center gap-3 rounded-2xl border border-purple-300/30 bg-[#120e27]/80 px-3 py-2 shadow-[0_30px_80px_#8c52ff33] backdrop-blur-md transition duration-300 ease-in-out hover:-translate-y-1 hover:border-[#8c52ff] hover:shadow-[0_0_20px_#d498fb] sm:gap-5 lg:px-8">
              <FaEnvelope size={24} className="m-0 p-0 text-center text-black dark:text-white" />
              <h3 className="m-0 p-0 break-all text-transparent bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text">ssatthy@uwaterloo.ca</h3>
            </div>
          </a>
        </div>

        <div className="flex w-full justify-center lg:w-1/2">
          <TechFigure />
        </div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-80}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-80"
      >
        <button className="animate-bounce">
          <HiArrowSmDown size={24} />
        </button>
      </Link>
    </section>
  );
}

export default Title;
