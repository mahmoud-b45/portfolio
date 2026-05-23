import ProjectCard from './ProjectCard';

function Projects({ projects, allSkills, selectedSkills, onToggleSkill, onClearFilters }) {
  const hasActiveFilter = selectedSkills.length > 0;

  const isProjectVisible = (project) => {
    if (!hasActiveFilter) return true;
    return selectedSkills.every((skill) => project.skills.includes(skill));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-heading">
        <span className="section-number">02.</span> Projects
      </h2>

      <div className="skill-filter">
        <p className="filter-label">Filter by skill:</p>
        <div className="filter-tags">
          {allSkills.map((skill) => (
            <button
              key={skill}
              className={`filter-tag ${selectedSkills.includes(skill) ? 'active' : ''}`}
              onClick={() => onToggleSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
        {hasActiveFilter && (
          <button className="filter-clear" onClick={onClearFilters}>
            Clear filters
          </button>
        )}
      </div>

      {hasActiveFilter && !projects.some(isProjectVisible) && (
        <p className="no-results">No projects match all selected skills.</p>
      )}

      <div className="projects-grid">
        {projects.map((project, index) => {
          const visible = isProjectVisible(project);
          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              visible={visible}
              hasActiveFilter={hasActiveFilter}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
