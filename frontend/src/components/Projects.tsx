import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 text-center">
        My <span className="text-purple-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
