import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, Linkedin, Mail, ExternalLink, ChevronDown,
  Sparkles, Code2, Terminal, Database, Cloud, Cpu
} from 'lucide-react'
import './App.css'

// Components
const Hero = () => (
  <section id="hero" className="hero">
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="badge"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Sparkles size={14} />
        Available for opportunities
      </motion.div>
      
      <h1 className="hero-title">
        Hi, I'm <span className="gradient-text">Hank</span>
      </h1>
      
      <p className="hero-subtitle">
        Senior Software Engineer specializing in <br/>
        <span className="highlight">AI/ML Platforms</span> & <span className="highlight">Distributed Systems</span>
      </p>
      
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Get in Touch</a>
        <a href="#projects" className="btn-secondary">View Projects</a>
      </div>
      
      <motion.a 
        href="#about" 
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </motion.div>
  </section>
)

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate about building scalable AI infrastructure</p>
        
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon"><Terminal size={24} /></div>
            <h3>Backend Engineering</h3>
            <p>Building robust distributed systems and microservices at scale</p>
          </div>
          <div className="about-card">
            <div className="about-icon"><Database size={24} /></div>
            <h3>Big Data</h3>
            <p>Processing petabytes with Spark, Ray, and modern data pipelines</p>
          </div>
          <div className="about-card">
            <div className="about-icon"><Cloud size={24} /></div>
            <h3>Cloud Native</h3>
            <p>Kubernetes, Docker, and cloud-native architecture design</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

const Experience = () => {
  const experiences = [
    {
      company: 'Meituan',
      role: 'Senior Software Engineer',
      period: '2020 - Present',
      description: 'Leading AI/ML platform development. Built large-scale training infrastructure serving 1000+ ML engineers.',
      highlights: ['Spark/Ray distributed computing', 'Kubernetes orchestration', 'Model serving platform']
    },
    {
      company: 'HD Mapping Company',
      role: 'Software Engineer',
      period: '2018 - 2020',
      description: 'Developed high-precision mapping pipelines for autonomous vehicles.',
      highlights: ['Point cloud processing', 'Computer vision pipelines', 'Real-time data streaming']
    }
  ]
  
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Building production systems at scale</p>
          
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                  <div className="timeline-tags">
                    {exp.highlights.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Skills = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'Go', 'Java', 'Scala', 'TypeScript'] },
    { category: 'Big Data', items: ['Apache Spark', 'Ray', 'Flink', 'Kafka', 'Hive'] },
    { category: 'ML/AI', items: ['PyTorch', 'TensorFlow', 'Kubeflow', 'MLflow', 'Triton'] },
    { category: 'Infrastructure', items: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'ClickHouse'] },
    { category: 'Tools', items: ['Git', 'CI/CD', 'Prometheus', 'Grafana', 'Airflow'] }
  ]
  
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Tools and technologies I work with</p>
          
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <h3>{skill.category}</h3>
                <div className="skill-items">
                  {skill.items.map((item, i) => (
                    <span key={i} className="skill-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      name: 'Lunar Kanban',
      description: 'A modern drag-and-drop task management board with real-time sync, AI task breakdown, and dark mode.',
      tech: ['React', 'TypeScript', 'Express', 'WebSocket'],
      github: '#',
      demo: 'http://localhost:3000'
    },
    {
      name: 'ML Training Platform',
      description: 'Distributed ML training infrastructure supporting 1000+ users with auto-scaling and resource scheduling.',
      tech: ['Ray', 'Kubernetes', 'Python', 'gRPC'],
      github: '#',
      demo: '#'
    },
    {
      name: 'Data Pipeline Framework',
      description: 'High-throughput ETL framework processing petabytes of data daily with exactly-once semantics.',
      tech: ['Spark', 'Kafka', 'Scala', 'Airflow'],
      github: '#',
      demo: '#'
    }
  ]
  
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
          
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="project-header">
                  <Code2 size={24} className="project-icon" />
                  <div className="project-links">
                    <a href={project.github} className="icon-link" title="GitHub">
                      <Github size={18} />
                    </a>
                    <a href={project.demo} className="icon-link" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contact-content"
      >
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Open to new opportunities in AI/ML Platform Engineering</p>
        
        <div className="contact-links">
          <a href="mailto:hank@example.com" className="contact-card">
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a href="https://github.com" className="contact-card">
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com" className="contact-card">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© 2025 Hank. Built with React + TypeScript + ♥</p>
    </div>
  </footer>
)

// Main App
function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <Cpu size={20} />
            Hank
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
