export default function HowItWorksPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">How It Works</p>
          <h1>How It Works</h1>
          <p className="subhead">Certainty, not complexity.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Who We Help</h2>
            <div className="section-intro">
              <p>
                Burrow Base is built for contractors and service businesses that
                want their day-to-day operations handled without adding staff or
                juggling tools.
              </p>
              <p>
                If your business answers calls, schedules jobs, sends invoices,
                and depends on reviews -- this is for you.
              </p>
            </div>
          </div>
          <div className="card-grid who-grid">
            <div className="card">
              <h3>General Contractors</h3>
              <p>
                Keep projects moving without chasing calls, follow-ups, or
                payments.
              </p>
            </div>
            <div className="card">
              <h3>Remodelers</h3>
              <p>
                Protect your schedule, handle inquiries automatically, and stay
                focused on the work.
              </p>
            </div>
            <div className="card">
              <h3>Service Businesses</h3>
              <p>
                HVAC, plumbing, electrical, cleaning, pressure washing, and more
                -- where missed calls mean lost jobs.
              </p>
            </div>
          </div>
          <p className="section-note">
            Start with one system. Expand only when you need it.
          </p>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading centered">
            <h2>Problems → Solutions</h2>
            <p className="section-lead">Common pain points, handled automatically</p>
          </div>
          <div className="problem-grid">
            {[
              ["Missed calls", "Always-on digital front desk"],
              ["Slow response times", "Instant lead acknowledgment"],
              ["Scheduling chaos", "Protected booking with buffers"],
              ["Owner as dispatcher", "Automated job handoff"],
              ["Late invoices", "Auto-invoicing on completion"],
              ["Awkward payment follow-ups", "Automated reminders"],
              ["Review inconsistency", "Post-job review requests"],
              ["Constant interruptions", "Exception-only alerts"],
            ].map(([problem, solution]) => (
              <div className="problem-card" key={problem}>
                <span className="problem-text">{problem}</span>
                <span className="problem-arrow">→</span>
                <span className="solution-text">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container owner-grid">
          <div className="section-heading centered">
            <h2>The Owner Experience</h2>
            <p className="section-lead accent-text">This is the product.</p>
          </div>
          <div className="owner-columns">
            <div className="owner-card">
              <h3>What you see</h3>
              <ul className="owner-list">
                <li>Today&apos;s and tomorrow&apos;s jobs</li>
                <li>New leads (already handled)</li>
                <li>Pending estimates</li>
                <li>Outstanding invoices</li>
                <li>Alerts only when needed</li>
              </ul>
            </div>
            <div className="owner-card muted-card">
              <h3>What you stop doing</h3>
              <ul className="owner-list muted-list">
                <li>Manually replying to every lead</li>
                <li>Scheduling every single job</li>
                <li>Chasing down payments</li>
                <li>Remembering to follow up</li>
                <li>Asking for reviews</li>
              </ul>
            </div>
          </div>
          <p className="owner-quote">You finally get your head back.</p>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="section-heading centered">
            <h2>Built for Owners</h2>
            <p className="section-lead">Proof of fit, not fluff.</p>
          </div>
          <div className="card-grid proof-grid">
            <div className="card">
              <h3>Installed, not DIY</h3>
              <p>We configure, integrate, and test. You just operate.</p>
            </div>
            <div className="card">
              <h3>Exception-only alerts</h3>
              <p>You hear from the system only when a human decision is needed.</p>
            </div>
            <div className="card">
              <h3>Built for field work</h3>
              <p>Designed for owners who are on-site, not behind a desk.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
