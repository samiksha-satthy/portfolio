import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import experiences from "../assets/arrays/experiences";

function splitExperienceInfo(info) {
  const [company = "", date = ""] = info.split("||").map((item) => item.trim());
  return { company, date };
}

function getVisibleExperiences(startIndex, visibleCount) {
  return Array.from(
    { length: Math.min(visibleCount, experiences.length) },
    (_, offset) => experiences[(startIndex + offset) % experiences.length],
  );
}

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(() =>
    window.matchMedia("(min-width: 768px)").matches ? 3 : 1,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateCount = () => setVisibleCount(mediaQuery.matches ? 3 : 1);

    mediaQuery.addEventListener("change", updateCount);
    return () => mediaQuery.removeEventListener("change", updateCount);
  }, []);

  return visibleCount;
}

function ExperienceCard({ experience }) {
  const { company, date } = splitExperienceInfo(experience.extra);

  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="mb-5 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-white p-5 shadow-[0_0_35px_#00000055] sm:h-44 sm:w-44 lg:h-48 lg:w-48">
        {experience.image ? (
          <img
            className="h-full w-full object-contain"
            src={experience.image}
            alt={`${experience.title} logo`}
          />
        ) : (
          <span className="text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">
            +
          </span>
        )}
      </div>

      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 lg:text-[1.7rem]">
        {experience.title}
      </h2>
      <h3 className="mt-2 text-lg font-normal text-white/90 lg:text-xl">
        {company}
      </h3>
      <p className="mt-2 text-lg text-white/90 lg:text-xl">
        {date}
      </p>
    </div>
  );
}

function Experiences() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const visibleExperiences = getVisibleExperiences(startIndex, visibleCount);

  const showPrevious = () => {
    setStartIndex((currentIndex) =>
      currentIndex === 0 ? experiences.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setStartIndex((currentIndex) => (currentIndex + 1) % experiences.length);
  };

  return (
    <section
      className="flex h-auto flex-col items-center gap-12 px-6 py-24"
      id="experiences"
    >
      <h1 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">
        Experiences
      </h1>

      <div className="relative w-full max-w-6xl px-14 py-6 sm:px-16">
        {experiences.length > visibleCount && (
          <button
            type="button"
            aria-label="Show previous experiences"
            onClick={showPrevious}
            className="absolute left-0 top-[7.5rem] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/65 p-0 text-white transition duration-300 hover:bg-black/90 hover:text-purple-200 sm:left-2"
          >
            <FaChevronLeft size={28} />
          </button>
        )}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {visibleExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {experiences.length > visibleCount && (
          <button
            type="button"
            aria-label="Show next experiences"
            onClick={showNext}
            className="absolute right-0 top-[7.5rem] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/65 p-0 text-white transition duration-300 hover:bg-black/90 hover:text-purple-200 sm:right-2"
          >
            <FaChevronRight size={28} />
          </button>
        )}
      </div>
    </section>
  );
}

export default Experiences;
