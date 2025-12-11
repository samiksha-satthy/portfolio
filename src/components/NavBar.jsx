import React from "react";
import Contact from "./Contact";
import { Link } from "react-scroll";

function NavLink(props) {
  return (
    <Link
      to={props.section}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <h3 className="text-white hover:underline text-lg hover:drop-shadow-[0_0_20px_#d498fb] hover:opacity-40 transition duration-300">
        {props.title}
      </h3>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className=" flex-row flex-wrap fixed z-10 top-0 bg-linear-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out opacity-50 w-full inline-flex justify-between items-center">
      <Link
        to="title"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:opacity-80"
      >
        <h3 className="z-20 font-bold m-4 text-white hover:opacity-50 hover:underline hover:drop-shadow-[0_0_20px_#d498fb] ">
          samiksha satthy
        </h3>
      </Link>

      <div className="hidden md:flex flex-row gap-10 m-4 justify-center items-center border-2 rounded-xl px-4">
        <NavLink section="about" title="About" />
        <NavLink section="projects" title="Projects" />
        <NavLink section="experiences" title="Experiences" />
      </div>

      <div className="md:hidden m-8">
        <button
          id="menu-button"
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden md:flex"><Contact /></div>
      
    </nav>
  );
}

export default NavBar;
