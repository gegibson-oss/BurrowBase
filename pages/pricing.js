import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Simple pricing. Clear boundaries.</h1>
          <p className="subhead">
            Choose the product that fits your current operation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-grid">
          <div className="card">
            <div className="card-header">
              <h2>Automated Reviews</h2>
              <p className="price">$49/month</p>
              <p className="muted-text">24 days free</p>
            </div>
            <ul>
              <li>SMS-first review requests</li>
              <li>Email fallback</li>
              <li>48-hour reminder</li>
              <li>Issue routing for low ratings</li>
              <li>Reviews-only dashboard</li>
            </ul>
            <Link href="/start" className="button button-primary">
              Start Free
            </Link>
          </div>

          <div className="card card-outline">
            <div className="card-header">
              <h2>Digital Operations Manager</h2>
              <p className="price">Starts at $297/month</p>
              <p className="muted-text">
                Built for businesses that want a fully installed system.
              </p>
            </div>
            <p>
              Installed operations for owners who want fewer exceptions and a
              calm dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container">
          <h2>Start small. Expand later.</h2>
          <div className="cta-row">
            <Link href="/start" className="button button-primary">
              Start Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
