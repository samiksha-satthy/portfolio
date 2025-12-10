import React from "react";
import projects from "../assets/projects/projects";
import popOut from "../assets/img/popOut.png";

function Project(props) {
  return (
    <div className="flex flex-col px-2 pt-2 mx-4 group h-full min-h-[400px] bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10">
      <img
        className="border-indigo-500"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex flex-col justify-start gap-8 hover:shadow-2xl h-full">
        <div className="flex gap-20 place-content-between">
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
            <b>{props.name}</b>
          </h1>
          <a className="w-16 h-16 self-center" href={props.github} target="__blank">
            <img
              
              src={popOut}
              alt="external link"
              
            />
          </a>
        </div>

        <h2 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
          {props.description}
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {props.skills.map((skill) => (
            <p className="px-3 py-1 font-bold rounded-full border border-purple-300 text-transparent bg-linear-to-r from-[#e59cff] via-[#ba9cff] to-[#9cb2ff] bg-clip-text backdrop-blur-md shadow-[inset_0_-7px_11px_#a48fff1f] transition duration-300 ease-in-out hover:shadow-[0_0_20px_#d498fb] hover:border-[#d498fb]">
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
    <div className="flex flex-col h-auto w-full justify-center items-center gap-5 p-30">
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
        <b>Projects</b>
      </h1>
      <div className="grid grid-cols-3 gap-4">
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
