import React from "react";
import Contact from "./Contact";
import { Link } from "react-scroll";

function NavLink(props) {
  return (
    <Link to={props.section} smooth={true} duration={500} className="cursor-pointer hover:opacity-80 font-bold text-lg">
      <p className="text-white">{props.title}</p>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="flex-row fixed z-10 top-0 bg-linear-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out opacity-50 w-full inline-flex justify-between items-center">
      <Link to="title" smooth={true} duration={500} className="cursor-pointer hover:opacity-80">
        <h2 className="z-20 text-lg pl-4 font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">
          samiksha satthy
        </h2>
      </Link>

      <div className="flex flex-row gap-4 m-4 justify-center items-center ">
        <NavLink section="about" title="About" />
        <NavLink section="projects" title="Projects"/>
        <NavLink section="experiences" title="Experiences"/>
      </div>
      <Contact />
    </nav>
  );
}

export default NavBar;
