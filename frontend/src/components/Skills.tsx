import React, { ReactNode } from "react";
import SkillBar from "./SkillBar";
import { DiResponsive } from "react-icons/di";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiBootstrapFill, RiNextjsFill } from "react-icons/ri";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiSwagger,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="text-[#61DAFB] text-3xl" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[#38BDF8] text-3xl" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapFill className="text-[#7952B3] text-3xl" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="text-black dark:text-white text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#339933] text-3xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-400 text-3xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-3xl" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#F29111] text-3xl" />,
  },
  {
    name: "Swagger",
    icon: <SiSwagger className="text-[#85EA2D] text-3xl" />,
  },
  {
    name: "Responsive",
    icon: <DiResponsive className="text-[#25D366] text-3xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032] text-3xl" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-purple-500">Tech Stack</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            index={index}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
