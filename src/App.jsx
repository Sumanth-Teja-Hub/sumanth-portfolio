import "./App.css";

const CONTACT = {
  email: "ssumanthteja@gmail.com",
  phone: "9985286465",
  phoneLink: "+919985286465",
  github: "https://github.com/Sumanth-Teja-Hub",
  linkedin: "https://www.linkedin.com/in/sumanth-teja-725b34290/",
};

const skills = [
  "Python",
  "Artificial Intelligence",
  "Machine Learning",
  "Java",
  "Spring Boot",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "React",
  "Generative AI",
  "Large Language Models",
  "Git & GitHub",
  "Data Analysis",
  "SQL",
  "PostgreSQL",
];

const projects = [
  {
    number: "01",
    name: "AlumniTracker",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A college-focused application for tracking student progress and course or certificate completion.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    theme: "blue",
    link: "https://alumnitracker-jzc8.onrender.com",
  },
  {
    number: "02",
    name: "INTELLIGAP",
    category: "AI-POWERED LEARNING",
    description:
      "A student analysis project focused on identifying knowledge gaps, recommending study priorities, and providing chatbot assistance.",
    technologies: ["Python", "Django", "AI/ML"],
    theme: "purple",
    link: null,
  },
  {
    number: "03",
    name: "Student Course Tracker",
    category: "EDUCATION TECHNOLOGY",
    description:
      "A course and certificate tracking system with status calculations, certificate submissions, notifications, and administration.",
    technologies: ["React", "FastAPI", "SQLite"],
    theme: "cyan",
    link: null,
  },
  {
    number: "04",
    name: "CareerAI",
    category: "AI & CAREER DEVELOPMENT",
    description:
      "An AI resume analysis project exploring job recommendations and skill-gap identification using natural language processing.",
    technologies: ["Python", "FastAPI", "NLP"],
    theme: "indigo",
    link: null,
  },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SocialLinks() {
  const socials = [
    {
      label: "GitHub",
      symbol: "GH",
      href: CONTACT.github,
      external: true,
    },
    {
      label: "LinkedIn",
      symbol: "in",
      href: CONTACT.linkedin,
      external: true,
    },
    {
      label: "Email",
      symbol: "@",
      href: `mailto:${CONTACT.email}`,
      external: false,
    },
    {
      label: "Phone",
      symbol: "☎",
      href: `tel:${CONTACT.phoneLink}`,
      external: false,
    },
  ];

  return (
    <div className="social-links" aria-label="Contact and social links">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.external ? "_blank" : undefined}
          rel={social.external ? "noopener noreferrer" : undefined}
          aria-label={social.label}
          title={social.label}
        >
          {social.symbol}
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art art-${project.theme}`}>
        <div className="art-top">
          <span>PROJECT / {project.number}</span>
          <span className="art-arrow">↗</span>
        </div>

        <div className="art-center">
          <span className="art-category">{project.category}</span>
          <h3>{project.name}</h3>

          <div className="art-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="art-bottom">
          <span>SUMANTH TEJA</span>
          <span>SELECTED WORK</span>
        </div>
      </div>

      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>

        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.link ? (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore live project <span>↗</span>
          </a>
        ) : (
          <span className="project-status">
            More project details coming soon
          </span>
        )}
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="portfolio" id="home">
      {/* Navigation */}

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home">
            <span className="brand-symbol">
              ST<span>.</span>
            </span>
            <span className="brand-name">Sumanth Teja</span>
          </a>

          <div className="nav-links">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Let's connect <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}

        <section className="hero hero-banner" id="home-hero">
          <div className="hero-copy">
            <SocialLinks />

            <p className="hero-eyebrow">
              COMPUTER SCIENCE · AI & MACHINE LEARNING
            </p>

            <h1>
              I'm <span>Sumanth Teja</span>
            </h1>

            <p className="hero-description">
              AI/ML enthusiast and software developer exploring intelligent
              applications, modern web technologies, and practical solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                MY WORK <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                CONTACT ME
              </a>
            </div>
          </div>

          <a
            className="hero-scroll"
            href="#about"
            aria-label="Scroll to about section"
          >
            <span>↓</span>
            SCROLL TO EXPLORE
            <span>↓</span>
          </a>
        </section>

        {/* Technology strip */}

        <div className="technology-strip">
          <div className="technology-track">
            {[
              "PYTHON",
              "ARTIFICIAL INTELLIGENCE",
              "MACHINE LEARNING",
              "JAVA",
              "GENERATIVE AI",
              "SOFTWARE DEVELOPMENT",
            ].map((item) => (
              <span className="technology-item" key={item}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </div>

        {/* About */}

        <section className="section container" id="about">
          <div className="section-header">
            <span className="section-number">01</span>
            <span className="section-label">ABOUT ME</span>
            <span className="section-line" />
          </div>

          <div className="about-grid">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE ABOUT MYSELF</p>

              <h2>
                Curious mind.
                <br />
                <span>Creative thinking.</span>
                <br />
                Practical solutions.
              </h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                I'm a Computer Science and Engineering student specializing
                in Artificial Intelligence and Machine Learning.
              </p>

              <p>
                I enjoy exploring how technology works and how software can
                make everyday tasks easier. Through academic and personal
                projects, I'm practising programming, AI, backend development,
                databases, and application design.
              </p>

              <p>
                I'm continuing to develop my skills through hands-on projects
                and new technologies, with the goal of creating software that
                is useful, thoughtful, and easy to use.
              </p>

              <div className="about-facts">
                <div>
                  <span>01 / INTEREST</span>
                  <strong>AI & Software</strong>
                </div>

                <div>
                  <span>02 / APPROACH</span>
                  <strong>Learn by building</strong>
                </div>

                <div>
                  <span>03 / FOCUS</span>
                  <strong>Practical solutions</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}

        <section className="skills-section" id="skills">
          <div className="section container">
            <div className="section-header">
              <span className="section-number">02</span>
              <span className="section-label">MY SKILLS</span>
              <span className="section-line" />
            </div>

            <div className="skills-intro">
              <h2>
                Technologies to
                <br />
                create <span>what's next.</span>
              </h2>

              <p>
                My technical toolkit is growing through coursework,
                experiments, and hands-on development projects.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="skill-name">{skill}</span>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>

            <p className="skills-note">
              These skills reflect my learning and project work. My practical
              experience varies by technology.
            </p>
          </div>
        </section>

        {/* Projects */}

        <section className="section container projects-section" id="projects">
          <div className="section-header">
            <span className="section-number">03</span>
            <span className="section-label">SELECTED PROJECTS</span>
            <span className="section-line" />
          </div>

          <div className="projects-intro">
            <div>
              <h2>
                Ideas into
                <br />
                <span>digital experiences.</span>
              </h2>

              <p>
                A growing collection of projects across software development,
                education technology, and Artificial Intelligence.
              </p>
            </div>

            <span className="projects-count">04 / PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          <p className="projects-note">
            Project artwork is illustrative rather than a screenshot of the
            actual applications. Real screenshots and source-code links can
            be added as they become available.
          </p>
        </section>

        {/* Contact */}

        <section className="contact-section" id="contact">
          <div className="container contact-content">
            <div className="section-header">
              <span className="section-number">04</span>
              <span className="section-label">CONTACT</span>
              <span className="section-line" />
            </div>

            <div className="contact-main">
              <p className="eyebrow">LET'S CONNECT</p>

              <h2>
                Let's make
                <br />
                something <span>meaningful.</span>
              </h2>

              <p>
                Interested in AI, software development, or collaborating on a
                project? Reach out through email, phone, LinkedIn, or GitHub.
              </p>

              <div className="hero-actions contact-actions">
                <a
                  className="button button-primary"
                  href={`mailto:${CONTACT.email}`}
                >
                  EMAIL ME ↗
                </a>

                <a
                  className="button button-secondary"
                  href={`tel:${CONTACT.phoneLink}`}
                >
                  CALL ME
                </a>

                <a
                  className="button button-secondary"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN ↗
                </a>

                <a
                  className="button button-secondary"
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB ↗
                </a>
              </div>

              {/* Formatted email and phone details */}

              <div
                className="contact-details"
                style={{
                  display: "grid",
                  gap: "15px",
                  marginTop: "28px",
                  maxWidth: "420px",
                }}
              >
                <p
                  style={{
                    display: "grid",
                    gridTemplateColumns: "65px minmax(0, 1fr)",
                    alignItems: "start",
                    gap: "12px",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "#67b1ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    Email
                  </span>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      color: "#f3f5fa",
                      fontSize: "13px",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {CONTACT.email}
                  </a>
                </p>

                <p
                  style={{
                    display: "grid",
                    gridTemplateColumns: "65px minmax(0, 1fr)",
                    alignItems: "start",
                    gap: "12px",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "#67b1ff",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    Phone
                  </span>

                  <a
                    href={`tel:${CONTACT.phoneLink}`}
                    style={{
                      color: "#f3f5fa",
                      fontSize: "13px",
                    }}
                  >
                    +91 {CONTACT.phone}
                  </a>
                </p>
              </div>
            </div>

            <footer className="footer">
              <a className="footer-brand" href="#home">
                ST<span>.</span>
              </a>

              <span>SUMANTH TEJA · PERSONAL PORTFOLIO</span>

              <a href="#home">BACK TO TOP ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;