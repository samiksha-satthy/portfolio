import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from "react-scroll";
import Contact from "./Contact";
import {FaEnvelope} from "react-icons/fa"

function Title() {
  return (
    <div
      className="flex flex-col min-h-svh lg:h-screen justify-center items-center gap-20"
      id="title"
    >
      <div className="flex flex-col lg:items-center text-center">
        <h1 className="text-white">Hello, I'm</h1>
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 py-4 lg:p-4">
          <b>Samiksha Satthy</b>
        </h1>
        <h2 className="lg:font-bold mb-7">Computer Engineering @ UWaterloo</h2>
        <div className="flex flex-row items-center gap-5 border-3 rounded-2xl px-8 border-purple-300 text-transparent bg-linear-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]">
          <FaEnvelope size={24} className="text-center text-white"/>
          <h3>ssatthy@uwaterloo.ca</h3>
        </div>
      </div>



      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:opacity-80"
      >
        <button className="animate-bounce ">
          <HiArrowSmDown size={24} />
        </button>
      </Link>
    </div>
  );
}

export default Title;
