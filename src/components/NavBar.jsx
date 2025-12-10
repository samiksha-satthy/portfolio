import React from "react";
import Contact from "./Contact";
import { Link } from "react-scroll";

function NavLink(props) {
  return (
    <Link to={props.section} smooth={true} duration={500} className="cursor-pointer">
      <h3 className="text-white hover:underline text-lg hover:drop-shadow-[0_0_20px_#d498fb] hover:opacity-40 transition duration-300">{props.title}</h3>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="flex-row fixed z-10 top-0 bg-linear-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out opacity-50 w-full inline-flex justify-between items-center">
      <Link to="title" smooth={true} duration={500} className="cursor-pointer hover:opacity-80">
        <h3 className="z-20 font-bold m-4 text-white hover:opacity-50 hover:underline hover:drop-shadow-[0_0_20px_#d498fb]">
          samiksha satthy
        </h3>
      </Link>

      <div className="flex flex-row gap-10 m-4 justify-center items-center border-2 rounded-xl px-4">
        <NavLink section="about" title="About" />
        <NavLink section="projects" title="Projects"/>
        <NavLink section="experiences" title="Experiences"/>
      </div>
      <Contact />
    </nav>
  );
}

export default NavBar;
