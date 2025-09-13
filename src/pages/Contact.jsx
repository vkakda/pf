import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  return (
    <section id="contact" className="section reveal">
      <h2>Contact</h2>
      <div className="contact">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div className="social" style={{marginTop:'0.5rem'}}>
        <a className="icon-btn" href={profile.github} target="_blank" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.77-1.62-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5z"/></svg>
        </a>
        <a className="icon-btn" href={profile.medium} target="_blank" aria-label="Medium">
          <svg viewBox="0 0 1043.63 592.71" fill="currentColor"><path d="M588.67 296.36c0 163.66-131.17 296.35-293.93 296.35S.82 460.02.82 296.36 132 0 294.74 0s293.93 132.7 293.93 296.36M948.45 296.36c0 154.2-65.6 279.3-146.53 279.3s-146.53-125.1-146.53-279.3 65.6-279.3 146.53-279.3 146.53 125.1 146.53 279.3M1043.63 296.36c0 141.73-21.2 256.67-47.35 256.67s-47.35-114.94-47.35-256.67 21.2-256.67 47.35-256.67 47.35 114.94 47.35 256.67"/></svg>
        </a>
        <a className="icon-btn" href={profile.linkedin} target="_blank" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.446-2.136 2.942v5.663H9.086V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.073-1.69 3.29 0 3.897 2.166 3.897 4.984v6.597zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.9 20.452H3.772V9H6.9v11.452z"/></svg>
        </a>
      </div>
    </section>
  )
}


