import React from "react";
import headshot from "../assets/img/headshot.JPG";

function About() {
  return (
    <div
      className="flex flex-col m-4 sm:flex-wrap lg:flex-row gap-20 h-screen w-full items-center justify-center"
      id="about"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4">
          <b>About Me</b>
        </h1>
        <p className="text-white w-100 self-center">
          Hello! 👋🏽 My name is Samiksha and I am a Computer Engineering Student
          at the University of Waterloo. I am dedicated to making a positive
          impact through the use of cutting-edge technology. Additionally, I am
          passionate about coding, hardware and robotics, and am on the journey
          to expand my learning. My other interests lie in social advocacy,
          business, and retail. Let's connect! I would be excited to talk with
          fellow enthusiasts, professionals, and anyone who shares my passions.
          📬
        </p>
      </div>
      <img
        className="w-150 h-max mx-4 group min-h-[400px] bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10 "
        src={headshot}
        alt=""
      />
    </div>
  );
}

export default About;
