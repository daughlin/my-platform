import './App.css'

const focusAreas: string[] = [
  'Building clear, usable interfaces with React and TypeScript',
  'Connecting frontend features to reliable backend services',
  'Documenting engineering decisions as projects develop',
]

function App() {
  return (
    <main className="site">
      <header className="site-header">
        <a className="wordmark" href="#home">
          Cole Amacker
        </a>

        <nav aria-label="Main navigation">
          <a href="#project">Project</a>
          <a href="#approach">Approach</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Computer science student · Software developer</p>

        <h1>Learning by building systems that work.</h1>

        <p className="hero-description">
          I’m Cole Amacker. This is where I share my software projects,
          explore engineering decisions, and document the process of
          bringing applications into production.
        </p>

        <a className="button" href="#project">
          Explore my current project <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="content-section" id="project">
        <p className="eyebrow">Current project</p>

        <article className="project-card">
          <div className="project-heading">
            <h2>Senior Capstone Production Platform</h2>
            <span className="status">In development</span>
          </div>

          <p>
            A platform taking shape through my senior capstone work.
            I’ll use this space to share its features, architecture,
            and the decisions behind its implementation.
          </p>

          <ul className="tags" aria-label="Frontend technologies">
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
          </ul>
        </article>
      </section>

      <section className="content-section" id="approach">
        <p className="eyebrow">Engineering approach</p>
        <h2>Understand the decisions. Build with purpose.</h2>

        <ul className="focus-list">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <p>Cole Amacker · A work in progress, by design.</p>
      </footer>
    </main>
  )
}

export default App