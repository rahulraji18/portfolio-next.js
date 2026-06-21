const jsonLines: { html: string; delay: number }[] = [
  { html: '<span class="brace">{</span>', delay: 0.3 },
  { html: '&nbsp;&nbsp;<span class="k">"name"</span>: <span class="s">"Rahul R"</span>,', delay: 0.45 },
  { html: '&nbsp;&nbsp;<span class="k">"role"</span>: <span class="s">"Software Developer"</span>,', delay: 0.6 },
  {
    html:
      '&nbsp;&nbsp;<span class="k">"stack"</span>: [<span class="s">"Node.js"</span>, <span class="s">"React.js"</span>, <span class="s">"Next.js"</span>],',
    delay: 0.75,
  },
  { html: '&nbsp;&nbsp;<span class="k">"experience_years"</span>: <span class="n">4</span>,', delay: 0.9 },
  { html: '&nbsp;&nbsp;<span class="k">"location"</span>: <span class="s">"Kollam, Kerala"</span>,', delay: 1.05 },
  {
    html:
      '&nbsp;&nbsp;<span class="k">"specialties"</span>: [<span class="s">"REST APIs"</span>, <span class="s">"ORMs"</span>, <span class="s">"Payments"</span>],',
    delay: 1.2,
  },
  { html: '&nbsp;&nbsp;<span class="k">"available"</span>: <span class="n">true</span>', delay: 1.35 },
  { html: '<span class="brace">}</span>', delay: 1.5 },
];

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div>
          <div className="terminal-line">
            <span className="prompt">~/portfolio</span>curl https://rahulr.dev/api/v1/me
            <span className="cursor" />
          </div>
          <h1>
            RAHUL <span className="last">R.</span>
          </h1>
          <p className="role">
            Backend-leaning Full-Stack Developer, building with <b>Node.js, React.js &amp; Next.js</b>
          </p>
          <p className="desc">
            4 years turning third-party APIs, ORMs, and stubborn data into software that holds up in production —
            from logistics platforms to payment integrations.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">View experience →</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <div className="stat-row">
            <div className="stat"><div className="num">4+</div><div className="lab">years exp</div></div>
            <div className="stat"><div className="num">3</div><div className="lab">companies</div></div>
            <div className="stat"><div className="num">10+</div><div className="lab">apis integrated</div></div>
            <div className="stat"><div className="num">KL</div><div className="lab">kollam, kerala</div></div>
          </div>
        </div>

        <div className="json-panel">
          <div className="json-titlebar">
            <span className="tdot r" /><span className="tdot y" /><span className="tdot g" />
            <span className="fname">response.json</span>
            <span className="json-status">200 OK</span>
          </div>
          <div className="json-body">
            {jsonLines.map((line, i) => (
              <div
                key={i}
                className="ln"
                style={{ animationDelay: `${line.delay}s` }}
                dangerouslySetInnerHTML={{ __html: line.html }}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
