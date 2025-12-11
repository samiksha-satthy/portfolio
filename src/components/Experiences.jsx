import React from "react";
import experiences from "../assets/arrays/experiences";

function Experience(props) {
  return (
    <div className="flex flex-row gap-10 justify-between items-center px-2 pt-2 mx-20 group w-2/3 lg:w-2/3 bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10">
        <div className="flex flex-row gap-8">
            <img className="h-60 w-60 p-4" src={props.img} alt="" />
            <div className="flex flex-col gap-3 p-4">
                <h2 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">{props.title}</h2>
                <h3>{props.info}</h3>
                <ul className="list-disc pl-6">
                    {props.points.map(point => {
                        return (<li>{point}</li>)
                    })}
                </ul>
            </div> 
        </div>
    </div>
  );
}

function Experiences() {
    console.log(experiences)
  return (
    <div className="flex flex-col gap-10 items-center h-auto p-30 ">
      <h1 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">Experiences</h1>
      {experiences.map(experience => {
        return <Experience key={experience.id} img={experience.image} title={experience.title} info={experience.extra} points={experience.points}/>
      })}
    </div>
  );
}

export default Experiences;
