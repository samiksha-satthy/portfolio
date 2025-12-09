import React from "react";
import projects from "../assets/projects/projects";
import popOut from "../assets/img/popOut.png";

function Project(props) {
  return (
    <div className="flex flex-col w-auto px-4">
      <img
        className="border-4 border-indigo-600"
        src={props.image}
        alt={props.alt}
      />
      <div className="flex flex-col justify-start gap-8 hover:shadow-2xl silver">
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
            <p className="p-1 border-4 rounded-xl w-auto whitespace-nowrap h-10 hover:border-black text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-500 border-purple-700">
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
    <div className="flex flex-col  h-auto w-full justify-center items-center gap-5">
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
        <b>Projects</b>
      </h1>
      <div className="grid grid-cols-3 gap-2 ">
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
