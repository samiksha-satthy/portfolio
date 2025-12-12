import React from "react";
import headshot from "../assets/img/headshot.JPG";
import Contact from './Contact'

function About() {
  return (
    <div
      className="flex flex-col my-30 mx-8 sm:flex-wrap lg:flex-row gap-20 items-center justify-center py-30"
      id="about"
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 p-4 text-center">
          <b>About Me</b>
        </h1>
        <p className="text-white lg:w-125 text-center mx-4">
          Hello! 👋🏽 My name is Samiksha and I am a Computer Engineering Student
          at the University of Waterloo. I am dedicated to making a positive
          impact through the use of cutting-edge technology. Additionally, I am
          passionate about coding, hardware and robotics, and am on the journey
          to expand my learning. My other interests lie in social advocacy,
          business, and retail. Let's connect! I would be excited to talk with
          fellow enthusiasts, professionals, and anyone who shares my passions.
          📬
        </p>
        <Contact/>
      </div>
      <img
        className="lg:w-150 h-max w-100 mx-4 group bg-card rounded-xl overflow-hidden shadow-md bg-[#1d1836]/90 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-[#8c52ff] border border-white/10 "
        src={headshot}
        alt=""
      />
    </div>
  );
}

export default About;
