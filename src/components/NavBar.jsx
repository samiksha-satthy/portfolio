import React, { useState } from "react";
import Contact from "./Contact";
import { Link } from "react-scroll";
import { FaBars, FaEnvelope, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

function NavLink({ section, title, onClick }) {
  return (
    <Link
      to={section}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={onClick}
      className="cursor-pointer"
    >
      <span className="block text-base dark:text-white hover:underline hover:drop-shadow-[0_0_20px_#d498fb] hover:opacity-60 transition duration-300 md:text-lg lg:text-xl">
        {title}
      </span>
    </Link>
  );
}

function NavSocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a href="https://github.com/samiksha-satthy" target="_blank" className="hover:opacity-35">
        <FaGithub className="text-[30px] dark:text-white md:text-[34px] lg:text-[40px]" />
      </a>
      <a href="https://www.linkedin.com/in/samikshasatthy/" target="_blank" className="hover:opacity-35">
        <FaLinkedin className="text-[30px] dark:text-white md:text-[34px] lg:text-[40px]" />
      </a>
      <a href="mailto:ssatthy@uwaterloo.ca" target="_blank" className="hover:opacity-35">
        <FaEnvelope className="text-[30px] dark:text-white md:text-[34px] lg:text-[40px]" />
      </a>
    </div>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 px-4 py-3 text-white backdrop-blur-md transition duration-300 ease-in-out sm:px-5 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link
          to="title"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="cursor-pointer hover:opacity-80"
        >
          <span className="whitespace-nowrap text-lg font-bold dark:text-white hover:opacity-60 hover:underline hover:drop-shadow-[0_0_20px_#d498fb] md:text-xl">
            samiksha s
          </span>
        </Link>

        <div className="hidden min-w-0 items-center gap-4 rounded-xl border border-white/20 px-4 py-2 sm:flex md:gap-6 lg:gap-8 lg:px-5">
          <NavLink section="about" title="About" />
          <NavLink section="skills" title="Skills" />
          <NavLink section="projects" title="Projects" />
          <NavLink section="experiences" title="Experiences" />
        </div>

        <div className="hidden shrink-0 sm:block">
          <NavSocialLinks />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white sm:hidden"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/85 p-4 shadow-lg sm:hidden">
          <NavLink section="about" title="About" onClick={closeMenu} />
          <NavLink section="skills" title="Skills" onClick={closeMenu} />
          <NavLink section="projects" title="Projects" onClick={closeMenu} />
          <NavLink section="experiences" title="Experiences" onClick={closeMenu} />
          <div className="border-t border-white/10 pt-2">
            <Contact />
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
