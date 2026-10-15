import './App.css'
import selfPhoto from './assets/self.jpg'

type Project = {
  name: string
  description: string
}

const projects: Project[] = [
  {
    name: 'Student Planner',
    description:
      'Built a complete web application with a team using Agile development and project management practices.',
  },
  {
    name: 'Ant Colony Optimization',
    description:
      'Implemented a maze-solving optimization algorithm from scratch with a custom user interface.',
  },
  {
    name: 'Sleep Efficiency Model',
    description:
      'Explored a sleep dataset and trained a machine learning model to predict sleep efficiency through regression.',
  },
]

const languages: string[] = [
  'Rust',
  'TypeScript',
  'Java',
  'Python',
  'C',
  'C#',
  'JavaScript',
  'Scala',
  'SQL',
]

function App() {
  return (
    <main className="site">
      <header className="site-header">
        <a className="wordmark" href="#home">
          Cole Amacker
        </a>

        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Computer Science · Economics</p>

        <img
          className="profile-photo"
          src={selfPhoto}
          alt="Cole Amacker"
          width={180}
          height={180}
        />

        <h1>Cole Amacker</h1>

        <p className="hero-description">
          I’m a student at Grove City College pursuing degrees in Computer
          Science and Economics, with a minor in Machine Learning and AI.
          My experience includes blockchain development, web applications,
          and machine learning.
        </p>

        <div className="contact-links">
          <a href="mailto:cole@amacker.io">Email</a>
          <a href="https://github.com/daughlin">GitHub</a>
          <a href="https://www.linkedin.com/in/camacker/">LinkedIn</a>
        </div>
      </section>

      <section className="content-section" id="experience">
        <h2>Experience</h2>

        <div className="card-list">
          <article className="project-card">
            <div className="project-heading">
              <h3>Software Engineering Intern</h3>
              <span className="date">May 2026 – Present</span>
            </div>

            <p className="organization">TurbineOne</p>

            <p>Working part time as a software engineering intern.</p>
          </article>

          <article className="project-card">
            <div className="project-heading">
              <h3>Solana Development Intern</h3>
              <span className="date">May 2025 – August 2025</span>
            </div>

            <p className="organization">URnetwork</p>

            <ul className="detail-list">
              <li>Designed a token minting system.</li>
              <li>
                Developed blockchain APIs for distribution and payment.
              </li>
              <li>Served as the company’s sole blockchain developer.</li>
            </ul>
          </article>

          <article className="project-card">
            <div className="project-heading">
              <h3>Manager, Team Lead, and Coach</h3>
              <span className="date">May 2021 – May 2022</span>
            </div>

            <p className="organization">Explorer Scholars</p>

            <p>
              Managed and coached Venezuelan and Filipino teams in an
              Axie Infinity scholar program.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section" id="projects">
        <h2>Class Projects</h2>

        <div className="card-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="education">
        <h2>Education</h2>

        <article className="project-card section-card">
          <div className="project-heading">
            <h3>Grove City College</h3>
            <span className="date">Expected graduation: May 2027</span>
          </div>

          <p className="organization">Grove City, Pennsylvania</p>

          <ul className="detail-list">
            <li>Bachelor of Science in Computer Science</li>
            <li>Bachelor of Arts in Economics</li>
            <li>Minor in Machine Learning and AI</li>
            <li>
              Overall GPA: 3.88 / 4.00 · In-major GPA: 4.00 / 4.00
            </li>
            <li>Dean’s List with High Distinction</li>
          </ul>

          <h4>Relevant coursework</h4>

          <p>
            Software Engineering, Machine Learning, Data Structures and
            Algorithms, Theory of Algorithms, Parallel Computing, Database
            Management Systems, Operating Systems, Automata Theory,
            Computer Architecture, and Communications and Networking.
          </p>

          <p>
            Economic Expansion and Development, Economics of
            Entrepreneurship, Public Policy, and Law and Economics.
          </p>
        </article>
      </section>

      <section className="content-section" id="skills">
        <h2>Technical Skills</h2>

        <div className="project-card section-card">
          <h3>Languages</h3>

          <ul className="tags" aria-label="Programming languages">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <h3 className="subsection-heading">Tools and Platforms</h3>

          <p>
            Git, Linux, Bash, Vim, Jira, scikit-learn, JUnit, MySQL,
            Cisco Packet Tracer, Mathematica, and Excel.
          </p>

          <h3 className="subsection-heading">Additional Experience</h3>

          <p>
            Agile development, Solana development and testing, smart
            contracts, machine learning training, CAD, and circuitry.
          </p>
        </div>
      </section>

      <section className="content-section" id="leadership">
        <h2>Leadership and Activities</h2>

        <div className="project-card section-card">
          <h3>Ballroom Dance Club</h3>

          <p className="organization">
            Treasurer and Co-President · August 2024 – Present
          </p>

          <p>
            Managed finances, budgets, and transactions, organized
            lessons, and supported the club community.
          </p>

          <h3 className="subsection-heading">Robotics Team</h3>

          <p className="organization">
            Founder and Leader · October 2022 – May 2023
          </p>

          <p>
            Established a robotics team that won a championship and an
            award for engineering excellence.
          </p>

          <h3 className="subsection-heading">
            GCC Roundtable Honor Society
          </h3>

          <p className="organization">August 2024 – May 2025</p>

          <p>
            Participated in Christian fellowship and community service.
          </p>

          <h3 className="subsection-heading">Activities</h3>

          <p>
            Ballroom Dance Club, Swing Dance Club, Line Dance Club,
            and Orchesis Dance Company.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <p>Cole Amacker</p>
        <a href="mailto:cole@amacker.io">cole@amacker.io</a>
      </footer>
    </main>
  )
}

export default App