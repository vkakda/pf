import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  useReveal()
  return (
    <section id="projects" className="section reveal">
      <h2>Projects</h2>
      <div className="cards projects">
        {profile.projects.map((p, idx) => (
          <article key={p.name} className="card project">
            <div className="thumb">
              <img src={p.src} alt={p.name} />
            </div>
            <div className="pbody">
              <h3>{p.name}</h3>
              <p className="meta">• {p.stack}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}


