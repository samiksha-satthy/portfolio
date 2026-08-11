import React, { useEffect, useState } from "react";
import { FaCode, FaMicrochip, FaRobot, FaServer, FaLaptopCode } from "react-icons/fa";

const figures = [
  {
    label: "Software Systems",
    Icon: FaCode,
    accent: "from-purple-500 to-fuchsia-300",
    chips: ["React", "API", "UI"],
  },
  {
    label: "Embedded Systems",
    Icon: FaMicrochip,
    accent: "from-violet-500 to-cyan-300",
    chips: ["STM32", "C", "IoT"],
  },
  {
    label: "Robotics",
    Icon: FaRobot,
    accent: "from-purple-400 to-pink-300",
    chips: ["AI", "Sensors", "Motion"],
  },
  {
    label: "Backend Engineering",
    Icon: FaServer,
    accent: "from-indigo-500 to-purple-200",
    chips: ["DB", "Cloud", "Logs"],
  },
  {
    label: "Computer Engineering",
    Icon: FaLaptopCode,
    accent: "from-purple-600 to-blue-300",
    chips: ["Code", "Hardware", "Design"],
  },
];

const initialFigureIndex = Math.floor(Math.random() * figures.length);

function TechFigure() {
  const [figureIndex, setFigureIndex] = useState(initialFigureIndex);
  const [tilt, setTilt] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFigureIndex((currentIndex) => (currentIndex + 1) % figures.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const figure = figures[figureIndex];
  const Icon = figure.Icon;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateY: x * 45,
      rotateX: -y * 45,
    });
  };

  const handleMouseLeave = () => setTilt(null);

  return (
    <div
      data-dots-ignore
      className="relative hidden w-full max-w-md items-center justify-center lg:flex"
      aria-label={`${figure.label} 3D figure`}
    >
      <div className="absolute h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute h-52 w-52 rounded-full bg-fuchsia-300/10 blur-2xl translate-x-16 translate-y-12" />

      <div className="relative [perspective:1000px]">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative h-auto w-80 rounded-[2rem] border border-purple-300/30 bg-[#120e27]/80 p-8 pb-10 shadow-[0_30px_80px_#8c52ff33] backdrop-blur-md ${
            tilt
              ? "transition-transform duration-75 ease-out"
              : "animate-[float_5s_ease-in-out_infinite] [transform:rotateX(12deg)_rotateY(-18deg)] transition-transform duration-500 ease-out"
          }`}
          style={
            tilt
              ? { transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` }
              : undefined
          }
        >
          <div className={`absolute inset-x-8 top-8 h-1 rounded-full bg-linear-to-r ${figure.accent}`} />

          <div className="absolute right-8 top-12 grid gap-2">
            <span className="h-3 w-3 rounded-full bg-purple-300 shadow-[0_0_12px_#d498fb]" />
            <span className="h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_12px_#8c52ff]" />
            <span className="h-3 w-3 rounded-full bg-fuchsia-200 shadow-[0_0_12px_#d498fb]" />
          </div>

          <div className="mt-10 flex h-36 items-center justify-center rounded-3xl border border-white/10 bg-black/25 shadow-[inset_0_0_35px_#00000055]">
            <Icon className="text-[6.5rem] text-purple-300 drop-shadow-[0_0_25px_#d498fb]" />
          </div>

          <h3 className="mt-6 text-center text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300">
            {figure.label}
          </h3>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {figure.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-purple-300/50 px-3 py-1 text-sm font-semibold text-purple-100"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 h-5 w-56 rounded-full bg-purple-300/20 blur-md" />
      </div>
    </div>
  );
}

export default TechFigure;
