import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { Link } from "react-scroll";
import Contact from "./Contact";

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
        <h2 className="lg:font-bold">Computer Engineering @ UWaterloo</h2>
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
