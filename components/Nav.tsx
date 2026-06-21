export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <span className="dot" />
          rahul<span style={{ color: 'var(--text-dimmer)' }}>.r</span>
        </div>
        <div className="nav-links">
          <a className="path" href="#summary">summary</a>
          <a className="path" href="#skills">skills</a>
          <a className="path" href="#experience">experience</a>
          <a className="path" href="#contact">contact</a>
        </div>
        <a className="nav-cta" href="mailto:rahulrajesh474@gmail.com">say hello</a>
      </div>
    </nav>
  );
}
