import ProjectCard from './ProjectCard';
import { Grid } from '../utils/LayoutComponents/layout.js';
import projectList from '../assets/projectlist.js';

export default function Projects() {
  return (
        <grid-l min='calc(var(--measure) / 3)'>
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </grid-l>
  );
}
