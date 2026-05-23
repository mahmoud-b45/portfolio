function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Mahmoud.</h1>
      <h2 className="hero-subtitle">I build things for the web.</h2>
      <p className="hero-description">
        I&apos;m a junior developer passionate about building accessible,
        performant web applications. Currently exploring opportunities in
        <strong> web development</strong>, <strong>IT</strong>, and
        <strong> cybersecurity</strong>.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary" onClick={(e) => {
          e.preventDefault();
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Check out my projects
        </a>
        <a href="#about" className="btn btn-secondary" onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          More about me
        </a>
      </div>
    </section>
  );
}

export default Hero;
