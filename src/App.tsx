import { Routes, Route, Link } from "react-router-dom"
import SmartWaiter from "./SmartWaiter"
import AntiFraudBot from "./AntiFraudBot"
import "./index.css"

function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            Charlie<span>.</span>
          </Link>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a
              href="https://github.com/koyuki-chan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <p className="hero-eyebrow">
            COMPUTER SCIENCE · SOFTWARE · AI
          </p>

          <h1>
            Computer Science graduate
            <br />
            <span>exploring software and AI.</span>
          </h1>

          <p className="hero-description">
            Computer Science graduate from The Hong Kong Polytechnic University,
            interested in software development, AI applications, and practical
            system engineering.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects →
            </a>

            <a
              href="https://github.com/koyuki-chan"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="content-section about-section">
        <div className="container">
          <p className="section-label">ABOUT</p>

          <h2>A developer who likes<br />building things.</h2>

          <div className="about-content">
            <p>
              I'm a Computer Science graduate from The Hong Kong Polytechnic
              University with an interest in software development, AI
              applications, and practical IT systems.
            </p>

            <p>
              My experience includes developing software prototypes, working
              with computer vision and machine learning, testing real-world
              systems, and supporting Linux-based environments.
            </p>

            <p>
              During my internship, I worked with system requirements,
              software testing, technical coordination, and remote Linux
              server administration.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="content-section projects-section">
        <div className="container">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>Things I've built.</h2>

          <div className="projects-grid">

            {/* Smart Waiter */}
            <Link
              to="/projects/smart-waiter"
              className="project-card"
            >
              <div className="project-card-top">
                <span className="project-label">
                  AI · COMPUTER VISION · FULL-STACK
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <h3>Smart Waiter</h3>

              <p>
                A multimodal AI-powered café service system combining
                computer vision, conversational interaction, and proactive
                recommendations.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Python</span>
                <span>FastAPI</span>
                <span>YOLOv8</span>
              </div>
            </Link>

            {/* AI Anti-Fraud Bot */}
            <Link
              to="/projects/anti-fraud-bot"
              className="project-card"
            >
              <div className="project-card-top">
                <span className="project-label">
                  AI · MACHINE LEARNING
                </span>

                <span className="project-arrow">↗</span>
              </div>

              <h3>AI Anti-Fraud Chatbot</h3>

              <p>
                An AI-powered fraud detection chatbot combining BERT-based
                text classification, rule-based risk analysis, and an LLM
                for human-readable explanations.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>BERT</span>
                <span>Ollama</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="content-section skills-section">
        <div className="container">
          <p className="section-label">SKILLS</p>

          <h2>Tools I work with.</h2>

          <div className="skills-grid">

            <div className="skill-group">
              <h3>Programming</h3>
              <p>
                Java · Python · C/C++ · JavaScript · SQL
              </p>
            </div>

            <div className="skill-group">
              <h3>AI & Machine Learning</h3>
              <p>
                BERT · PyTorch · Computer Vision · Object Detection · LLM
              </p>
            </div>

            <div className="skill-group">
              <h3>Systems</h3>
              <p>
                Linux · SSH · Remote Server Administration · Service Deployment
              </p>
            </div>

            <div className="skill-group">
              <h3>Development Tools</h3>
              <p>
                GitHub · Postman · Navicat · DBeaver · Gradio
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact / Closing */}
      <section className="closing-section">
        <div className="container closing-inner">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Let's build something.</h2>

          <p>
            I'm interested in software development, AI,
            and building practical applications.
          </p>

          <a
            href="mailto:yuimesandesu@gmail.com"
            className="contact-button"
          >
            Contact Me →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Charlie</span>

          <a
            href="https://github.com/koyuki-chan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/projects/smart-waiter"
        element={<SmartWaiter />}
      />
      <Route
        path="/projects/anti-fraud-bot"
        element={<AntiFraudBot />}
      />
    </Routes>
  )
}

export default App