function About({ skills }) {
  return (
    <section id="about" className="about">
      <h2 className="section-heading">
        <span className="section-number">01.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I&apos;m a recent graduate with a strong foundation in computer science,
            passionate about creating efficient and user-friendly software solutions.
            My journey in tech started with web development and has expanded into
            networking and cybersecurity.
          </p>
          <p>
            I&apos;m actively seeking a role in <strong>web development</strong>,
            <strong> IT</strong>, or <strong>cybersecurity</strong> where I can
            apply my skills, learn from experienced professionals, and contribute
            to meaningful projects.
          </p>
          <p>Here are the technologies I&apos;ve been working with:</p>
        </div>
        <ul className="skills-grid">
          {skills.map((skill) => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
