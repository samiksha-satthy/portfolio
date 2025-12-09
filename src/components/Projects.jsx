import React from "react";
import projects from "../assets/projects/projects";

function Project(props) {
  return (

      <div className="flex flex-col">
        <img className="border-4 border-indigo-600" src={props.img} alt={props.alt} />
        <div className="flex flex-col justify-start gap-8 bg-neutral-300">
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4"><b>{props.name}</b></h1>
          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">{props.description}</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {props.skills.map(skill => <p className="p-1 border-4 rounded-xl w-auto whitespace-nowrap h-10 hover:border-red-600 text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 border-purple-700" >{skill}</p>)}

          </div>
        </div>
      </div>

  );
}

function Projects() {
    console.log(projects)
  return (<div className="grid grid-cols-3 gap-4  h-screen w-full bg-amber-50">
   { projects.map((project) => (<Project key={project.id} name={project.name} description={project.description} skills={project.skills}/>))}
  </div>)
}

export default Projects;
