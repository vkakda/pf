import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'


export default function Home() {
  useReveal()
  return (
    <section id="home" className="hero reveal">
      <div className="hero-text">
        <h1 className="display">{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <p className="summary">{profile.summary}</p>
        <div className="cta-row">
          <a className="btn primary" href="/projects#projects">View Projects</a>
          <a className="btn ghost" href={profile.github} target="_blank">GitHub</a>
          <a className="btn ghost cv" href={profile.resume} target="_blank">Resume</a>
        </div>
      </div>
      <div className="hero-media">
        <img
          className="hero-photo"
          src="src\assets\images\profile-pic.png"
          alt="Vishal-portrait"
        />
      </div>
    </section>
  )
}


