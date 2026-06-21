import Reveal from './Reveal';

export default function Summary() {
  return (
    <section id="summary">
      <div className="endpoint-tag">
        <span className="method get">GET</span>
        <span className="route">/summary</span>
        <span className="status">200 · 18ms</span>
      </div>
      <div className="section-head">
        <Reveal>
          <h2 className="title"><span className="hash">#</span>Summary</h2>
        </Reveal>
      </div>
      <Reveal className="summary-panel">
        <p>
          Hello — I&apos;m <b>Rahul R</b>, a Software Developer with <span className="highlight">4 years</span> of
          experience designing efficient, scalable web applications. I specialize in{' '}
          <b>Node.js, React.js, and Next.js</b>, with a track record of integrating complex third-party APIs and
          managing diverse database systems — the unglamorous plumbing that keeps real products running reliably.
        </p>
      </Reveal>
    </section>
  );
}
