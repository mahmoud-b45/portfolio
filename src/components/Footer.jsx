function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Built with React &amp; Vite. Design inspired by{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
          Brittany Chiang
        </a>.
      </p>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} Mah Moud</p>
    </footer>
  );
}

export default Footer;
