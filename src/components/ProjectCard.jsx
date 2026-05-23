function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image" style={{ backgroundColor: 'var(--light-navy)' }}>
        <span className="project-image-text" style={{ color: 'var(--green)' }}>
          {project.image}
        </span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-skills">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
