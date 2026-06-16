import LeftPanel from './components/LeftPanel';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import kali from './assets/kali.jpg';
import networkDiagramImg from './assets/GSP_diagram_(1).png';
import JFX from './assets/images.png';

const skills = ['HTML', 'CSS', 'JS', 'React', 'Java', 'Bash', 'Git'];

const projects = [
  {
    title: 'Web Application Frontend',
    description: 'Built responsive single-page applications using React with modern hooks, CSS Grid/Flexbox layouts, and vanilla JavaScript DOM manipulation during university coursework and self-learning projects.',
    skills: ['HTML', 'CSS', 'JS', 'React'],
    image: "WEB",
    color: '#64ffda',
    link: '',
    repo: ''
  },
  {
    title: 'Cisco Packet Tracer Network',
    description: 'Designed and simulated complex network topologies using Cisco Packet Tracer, configuring VLANs, routing protocols (OSPF, EIGRP), and implementing network security with ACLs and NAT.',
    skills: ['', ''],
    image: networkDiagramImg,
    color: '#64ffda',
    repo: 'https://github.com/mahmoud-b45/Network-Simulation-Project',
    link: ''
  },
  {
    title: 'Kali Linux & Hashcat',
    description: 'Performed security assessments using Kali Linux, including wireless network security testing with aircrack-ng suite and password hash cracking with Hashcat using various attack modes.',
    skills: [''],
    image: kali,
    color: '#64ffda',
    repo: '',
    link: 'https://youtu.be/doM6DVnVjuM'
  },
  {
    title: 'JavaFX Desktop Application',
    description: 'Developed a cross-platform desktop application with JavaFX and Scene Builder, implementing MVC architecture, FXML-based UI design, and SQLite database for persistent storage.',
    skills: ['Java', 'Git'],
    image: JFX,
    color: '#64ffda',
    repo: 'https://github.com/mahmoud-b45/Company-Rental-System',
    link: ''
  },
];

function App() {
  return (
    <div className="app">
      <LeftPanel />
      <main className="right-content">
        <About skills={skills} />
        <Projects projects={projects} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
