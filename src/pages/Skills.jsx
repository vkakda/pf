import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  useReveal()
  return (
    <section id="skills" className="section reveal">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill-group">
          <h4>Languages</h4>
          <div className="skills-icons">
            {[
              'https://javascriptair.com/episodes/2016-02-10/',
              'https://www.learn-c.org/',
              'isocpp.org#c',
              'python.org',
            ].map((domain, idx) => (
              <a key={`lang-${idx}`} className="skill-icon" href={`https://${domain.split('#')[0]}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain.split('#')[0]}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Frontend</h4>
          <div className="skills-icons">
            {[
              'react.dev',
              'HTML5.com',
              'css3.com',
              'tailwindcss.com',
              'greensock.com',
              'threejs.org',
            ].map((domain, idx) => (
              <a key={`fe-${idx}`} className="skill-icon" href={`https://${domain.split('#')[0]}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain.split('#')[0]}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Backend</h4>
          <div className="skills-icons">
            {['nodejs.org','expressjs.com'].map((domain,idx) => (
              <a key={`be-${idx}`} className="skill-icon" href={`https://${domain}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Databases</h4>
          <div className="skills-icons">
            {['mongodb.com','postgresql.org'].map((domain,idx) => (
              <a key={`db-${idx}`} className="skill-icon" href={`https://${domain}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>AI & Data</h4>
          <div className="skills-icons">
            {['gemini.google.com','https://www.perplexity.ai/','openai.com'].map((domain,idx) => (
              <a key={`ai-${idx}`} className="skill-icon" href={`https://${domain}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Development Tools</h4>
          <div className="skills-icons">
            {['git-scm.com','github.com','postman.com','code.visualstudio.com','vercel.com','netlify.com'].map((domain,idx) => (
              <a key={`tool-${idx}`} className="skill-icon" href={`https://${domain}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Other Skills</h4>
          <div className="skills-icons">
            {['medium.com','wordpress.com','canva.com','adobe.com'].map((domain,idx) => (
              <a key={`other-${idx}`} className="skill-icon" href={`https://${domain}`} target="_blank" rel="noreferrer">
                <img alt={domain} src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


