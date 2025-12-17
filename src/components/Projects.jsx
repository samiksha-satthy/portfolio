import React from "react";
import projects from "../assets/arrays/projects";
import { FaGithub } from "react-icons/fa";

function Project(props) {
  return (
    <div className="flex flex-col group h-full min-h-[400px] bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10">
      <img
        className="border-indigo-500 h-80 pb-4"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex flex-col justify-start gap-8 hover:shadow-2xl h-full">
        <div className="flex flex-wrap lg:justify-between items-center">
          <h1 className="flex-1 whitespace-normal break-words min-w-0 text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 pl-3">
            <b>{props.name}</b>
          </h1>
          <a className="w-16 h-16 flex flex-none shrink-0 items-center justify-center hover:opacity-35 pr-2" href={props.github} target="__blank">
            <FaGithub size={50} color="white"/>
          </a>
        </div>

        <h3 className="text-white pl-4">
          {props.description}
        </h3>
        <div className="flex flex-wrap gap-2 justify-center p-4">
          {props.skills.map((skill) => (
            <p className="px-3 py-1 font-bold rounded-full border border-purple-300 text-transparent bg-linear-to-r from-purple-800 to-purple-300 bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-purple-200">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  console.log(projects);
  return (
    <div className="flex flex-col h-auto justify-center items-center gap-5 py-30 lg:px-15 mx-6">
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
        <b>Projects</b>
      </h1>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-10 md:m-4 w-full">
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
    </div>
  );
}

export default Projects;
