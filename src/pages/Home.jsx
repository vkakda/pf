import { profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import {Typewriter} from 'react-simple-typewriter'



export default function Home() {
  useReveal()
  return (
    <section id="home" className="hero reveal">
      <div className="hero-text">


        <h1 className="display"><span className="intro-text">Hi, I'm </span>
        {profile.name}</h1>
        <p className="subtitle font-bold"><Typewriter
                words={[
  'MERN Full-Stack Developer',
  'Web Application Developer',
  'AI Enthusiast',
  'Creative Frontend Designer',
  'Digital Storyteller',
  'React.js Developer',
  'Node.js & Express Developer',
  'MongoDB Specialist',
  'Tailwind CSS & Modern UI',
  'Building Scalable Web Experiences',
  'Turning Ideas into Code',
  'Crafting Interactive Interfaces',
  'Driven by Simplicity, Inspired by Depth'
]}

                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              </p>
        <p className="summary">{profile.summary}</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href={profile.github} target="_blank">GitHub</a>
          <a className="btn ghost cv" href={profile.resume} target="_blank">Resume</a>
        </div>
      </div>
      <div className="hero-media">
        <img
          className="hero-photo"
          src='/profile-pic.png'
          alt="Vishal-portrait"
        />
      </div>
    </section>
  )
}


