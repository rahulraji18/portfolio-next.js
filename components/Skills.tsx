import Reveal from './Reveal';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="endpoint-tag">
        <span className="method get">GET</span>
        <span className="route">/skills</span>
        <span className="status">200 · 9ms</span>
      </div>
      <div className="section-head">
        <Reveal>
          <h2 className="title"><span className="hash">#</span>Skills</h2>
        </Reveal>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <Reveal key={group.key} className={`skill-card${group.wide ? ' wide' : ''}`}>
            <div className="sk-head">
              <span className="sk-key">{group.key}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
