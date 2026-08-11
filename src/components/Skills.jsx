import React, { useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiSharp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiRubyonrails,
  SiReact,
  SiThreedotjs,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiFastapi,
  SiFlask,
  SiSupabase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiDocker,
  SiHuggingface,
  SiLangchain,
  SiPytorch,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaWindows, FaDatabase } from "react-icons/fa";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend & APIs",
  "Databases",
  "Cloud, DevOps & AI",
  "Systems & Tools",
];

const skills = [
  // Languages
  { name: "C++", Icon: SiCplusplus, category: "Languages" },
  { name: "C", Icon: SiC, category: "Languages" },
  { name: "C#", Icon: SiSharp, category: "Languages" },
  { name: "Python", Icon: SiPython, category: "Languages" },
  { name: "Java", Icon: FaJava, category: "Languages" },
  { name: "JavaScript", Icon: SiJavascript, category: "Languages" },
  { name: "TypeScript", Icon: SiTypescript, category: "Languages" },
  { name: "Ruby on Rails", Icon: SiRubyonrails, category: "Languages" },

  // Frontend
  { name: "React.js", Icon: SiReact, category: "Frontend" },
  { name: "Three.js", Icon: SiThreedotjs, category: "Frontend" },
  { name: "Figma", Icon: SiFigma, category: "Frontend" },

  // Backend & APIs
  { name: "Node.js", Icon: SiNodedotjs, category: "Backend & APIs" },
  { name: "Express.js", Icon: SiExpress, category: "Backend & APIs" },
  { name: "Spring Boot", Icon: SiSpringboot, category: "Backend & APIs" },
  { name: "FastAPI", Icon: SiFastapi, category: "Backend & APIs" },
  { name: "Flask", Icon: SiFlask, category: "Backend & APIs" },
  { name: "Supabase", Icon: SiSupabase, category: "Backend & APIs" },

  // Databases
  { name: "MySQL", Icon: SiMysql, category: "Databases" },
  { name: "ActiveRecord", Icon: FaDatabase, category: "Databases" },
  { name: "PostgreSQL", Icon: SiPostgresql, category: "Databases" },
  { name: "MongoDB", Icon: SiMongodb, category: "Databases" },
  { name: "Firebase Firestore", Icon: SiFirebase, category: "Databases" },

  // Cloud, DevOps & AI
  { name: "AWS", Icon: SiAmazonwebservices, category: "Cloud, DevOps & AI" },
  { name: "Docker", Icon: SiDocker, category: "Cloud, DevOps & AI" },
  { name: "Hugging Face", Icon: SiHuggingface, category: "Cloud, DevOps & AI" },
  { name: "LangChain", Icon: SiLangchain, category: "Cloud, DevOps & AI" },
  { name: "PyTorch", Icon: SiPytorch, category: "Cloud, DevOps & AI" },

  // Systems & Tools
  { name: "Windows", Icon: FaWindows, category: "Systems & Tools" },
  { name: "Git", Icon: SiGit, category: "Systems & Tools" },
  { name: "Postman", Icon: SiPostman, category: "Systems & Tools" },
];

function CategoryButton({ category, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-semibold transition duration-300 sm:text-base ${
        isActive
          ? "border-purple-300 bg-purple-300/15 text-purple-200 shadow-[0_0_20px_#d498fb55]"
          : "border-white/15 bg-transparent text-white/70 hover:border-purple-300/60 hover:text-purple-200"
      }`}
    >
      {category}
    </button>
  );
}

function SkillTile({ skill }) {
  const Icon = skill.Icon;

  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#120e27]/90 p-5 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8c52ff] hover:shadow-[0_0_20px_#d498fb55]">
      <Icon className="text-4xl text-purple-300 transition duration-300 group-hover:drop-shadow-[0_0_15px_#d498fb]" />
      <p className="text-center text-sm text-white/90">{skill.name}</p>
    </div>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      className="flex h-auto flex-col items-center gap-10 px-6 py-24"
      id="skills"
    >
      <h1 className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-800 to-purple-300 text-center">
        Skills & Frameworks
      </h1>

      <div className="flex w-full max-w-6xl flex-wrap justify-center gap-3 lg:flex-nowrap">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      <div className="grid w-full max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {visibleSkills.map((skill) => (
          <SkillTile key={`${skill.category}-${skill.name}`} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
