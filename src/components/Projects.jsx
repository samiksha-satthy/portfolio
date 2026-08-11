import React from "react";
import projects from "../assets/arrays/projects";
import { FaGithub } from "react-icons/fa";

function Project(props) {
  return (
    <div className="group flex h-full min-h-[520px] flex-col rounded-2xl border border-white/10 bg-[#120e27]/90 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8c52ff] hover:shadow-lg">
      <img
        className="mb-6 h-64 w-full rounded-xl border border-white/10 object-cover object-top"
        src={props.image}
        alt={props.alt}
      />

      <div className="flex h-full flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="min-w-0 flex-1 break-words text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 lg:text-4xl">
            {props.name}
          </h2>
          <a
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white hover:opacity-70"
            href={props.github}
            target="__blank"
          >
            <FaGithub size={34} color="#120e27" />
          </a>
        </div>

        <p className="text-base leading-relaxed text-white sm:text-lg">
          {props.description}
        </p>

        <div className="mt-auto flex flex-wrap justify-center gap-2 pt-2">
          {props.skills.map((skill) => (
            <p
              key={skill}
              className="rounded-full border border-purple-300 px-3 py-1 font-bold text-transparent bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:border-purple-200 hover:shadow-[0_0_20px_#d498fb]"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="flex h-auto flex-col items-center justify-center gap-5 px-6 py-24 lg:px-15" id="projects">
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
        <b>Projects</b>
      </h1>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-y-12 md:m-4 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {projects.map((project) => (
          <Project
            key={project.id}
            alt={project.alt}
            image={project.image}
            name={project.name}
            description={project.description}
            skills={project.skills}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
