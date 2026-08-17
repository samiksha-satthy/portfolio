import React from "react";
import experiences from "../assets/arrays/experiences";

function ExperienceItem({ experience, isLast }) {
  return (
    <li className="relative flex gap-5 pb-14 pl-10 last:pb-0 sm:gap-6 sm:pl-12">
      {/* timeline line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-6 h-full w-px bg-purple-300/30"
        />
      )}

      {/* timeline node */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-purple-300 bg-[#120e27] shadow-[0_0_12px_#a48fff88]"
      />

      {/* logo */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1 shadow-md sm:h-16 sm:w-16">
        <img
          className="h-full w-full rounded-lg object-contain"
          src={experience.image}
          alt={`${experience.company} logo`}
        />
      </div>

      {/* content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <div className="text-xl font-bold text-white sm:text-2xl">
            {experience.title}{" "}
            <span className="text-white/60">@</span>{" "}
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="text-purple-300! underline decoration-purple-300/60 underline-offset-4 transition hover:text-purple-200! hover:decoration-purple-200"
            >
              {experience.company}
            </a>
          </div>
          <div className="shrink-0 text-sm text-white/50 sm:text-base">
            {experience.date}
          </div>
        </div>
        <div className="mt-1 text-base text-white/75 sm:text-lg">
          {experience.subtitle}
        </div>
      </div>
    </li>
  );
}

function Experiences() {
  return (
    <section
      className="flex h-auto flex-col items-center gap-12 px-6 py-24"
      id="experiences"
    >
      <h1 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">
        Experiences
      </h1>

      <ul className="w-full max-w-4xl list-none p-0">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </ul>
    </section>
  );
}

export default Experiences;
