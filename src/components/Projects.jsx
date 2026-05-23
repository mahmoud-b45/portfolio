import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2 className="section-heading">
        <span className="section-number">02.</span> Projects
      </h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
