import Reveal from './Reveal';
import { jobs } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience">
      <div className="endpoint-tag">
        <span className="method get">GET</span>
        <span className="route">/experience?order=desc</span>
        <span className="status">200 · 24ms</span>
      </div>
      <div className="section-head">
        <Reveal>
          <h2 className="title"><span className="hash">#</span>Experience</h2>
        </Reveal>
      </div>

      <div className="timeline">
        {jobs.map((job) => (
          <Reveal key={job.company} className={`job${job.status === 'active' ? ' active' : ''}`}>
            <span className="node" />
            <div className="job-head">
              <h3>{job.role} · {job.company}</h3>
              <span className={`badge ${job.status}`}>{job.status}</span>
            </div>
            <div className="job-meta">
              <span>{job.dates}</span>
              <span>{job.location}</span>
            </div>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
              ))}
            </ul>
            {job.link && (
              <a className="job-link" href={job.link.href} target="_blank" rel="noopener noreferrer">
                {job.link.label}
              </a>
            )}
            {job.stack && (
              <div className="chip-row" style={{ marginTop: 12 }}>
                {job.stack.map((tech) => (
                  <span className="chip" key={tech}>{tech}</span>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
