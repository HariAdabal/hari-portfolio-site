import { useState, useEffect } from "react";
import profileImg from "./assets/profile.jpg";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Project" },
    { href: "#contact", label: "Contact" },
    {
      href: "https://drive.google.com/file/d/1F2nQosTb9jUTMI7zBV1aQr5iUub2sQaF/view?usp=sharing",
      label: "Resume",
      isResume: true,
    },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".section-pop");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="nav-wrapper">
        <nav className="top-nav">
          <a href="#home" className="nav-logo">
            Hari<span>.</span>
          </a>

          <div className="nav-links">
            {links.map((link) =>
              link.isResume ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-resume"
                >
                  <span>Resume</span>
                  <svg
                    className="nav-resume-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v12m0 0l-4-4m4 4l4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M5 17.5a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
              ) : (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="home-section">
          <div className="home-text">
            <p className="home-tag">Hello, I'm</p>
            <h1 className="home-name">Hari Adabala</h1>
            <p className="home-tagline">Building Reliable Web Experiences</p>
            <p className="home-intro">
              A frontend developer crafting fast, responsive and visually
              polished web applications with clean, modern JavaScript and React.
            </p>
          </div>

          <div className="home-photo">
            <div className="home-photo-wrapper">
              <img src={profileImg} alt="Hari profile" className="home-img" />
            </div>
          </div>
        </section>

        <section id="about" className="section about-section section-pop">
          <h2>About Me</h2>
          <p className="about-intro">
            A frontend developer focused on building fast, responsive and
            visually polished web applications. Enjoys combining clean design
            with solid engineering practices to deliver smooth user experiences.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Education</h3>
              <div className="about-item">
                <h4>Full Stack Web Development</h4>
                <p className="about-sub">Masai School</p>
                <p className="about-meta">2024 – Present</p>
              </div>
              <div className="about-item">
                <h4>B.Tech Computer Science Engineering</h4>
                <p className="about-sub">
                  BVC College of Engineering, Rajahmundry, Andhra Pradesh
                </p>
                <p className="about-meta">2019 – 2023</p>
              </div>
              <div className="about-item">
                <h4>Intermediate (12th) – Science</h4>
                <p className="about-sub">
                  Narayana Junior College, Rajahmundry, Andhra Pradesh
                </p>
                <p className="about-meta">2017 – 2019</p>
              </div>
              <div className="about-item">
                <h4>Matriculation (10th)</h4>
                <p className="about-sub">
                  Narayana EM School, Rajahmundry, Andhra Pradesh
                </p>
                <p className="about-meta">2016 – 2017</p>
              </div>
            </div>

            <div className="about-card" id="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">Express.js</span>
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">Tailwind CSS</span>
                <span className="skill-pill">HTML & CSS</span>
                <span className="skill-pill">Git & GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section section-pop">
          <h2>Projects</h2>
          <p className="section-note">
            Click any project card to explore key features, tech stack, and
            links to the live demo and source code.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-cover-img cover-memory">
                <span>MemoryLane – Personal Memory Tracker</span>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>DOM</span>
                </div>
                <h3 className="project-title">
                  MemoryLane – Smart Memory Sharing Platform
                </h3>
                <p className="project-description">
                  Web app that lets users capture, organize and revisit personal
                  memories with dates, tags and media in a clean, responsive UI.
                </p>
                <div className="project-buttons">
                  <a
                    href="https://memorylan.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/HariAdabal/Memory_Lane/tree/main/MemoryLane"
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-cover-img cover-artcollab">
                <span>ArtCollab – Collaborative Drawing App</span>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <h3 className="project-title">
                  ArtCollab – Real‑time Art Collaboration
                </h3>
                <p className="project-description">
                  Collaborative art board where multiple users can draw, share
                  and update artwork in real time with smooth canvas
                  interactions.
                </p>
                <div className="project-buttons">
                  <a
                    href="https://art-colab.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/HariAdabal/ArtCollab"
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section section-pop">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out — I'm always open to new opportunities!
          </p>

          <div className="contact-grid">
            <div className="contact-card wide">
              <div className="contact-icon">✉</div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">hariadabala2403@gmail.com</p>
              </div>
            </div>
            <div className="contact-card wide">
              <div className="contact-icon">📞</div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91 9614451666</p>
              </div>
            </div>
            <div className="contact-card wide">
              <div className="contact-icon">in</div>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">
                  <a
                    href="https://www.linkedin.com/in/hari-adabala-6bb1361b1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    hari adabala
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-card wide">
              <div className="contact-icon">🐙</div>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">
                  <a
                    href="https://github.com/HariAdabal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HariAdabal
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-subscribe">
            <h3>Stay Updated</h3>
            <p>Subscribe to get updates about my latest projects!</p>
            <form
              className="subscribe-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:hariadabala2403@gmail.com";
              }}
            >
              <input
                type="email"
                placeholder="your-email@example.com"
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
            <p className="subscribe-hint">
              Clicking "Subscribe" will open your email client with a
              ready-to-send message.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
