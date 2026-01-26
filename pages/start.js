import Link from "next/link";

export default function StartPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Start Free</p>
          <h1>Start with Automated Reviews.</h1>
          <p className="subhead">
            A focused system that makes review collection consistent and quiet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What you get</h2>
          <div className="list-grid">
            <ul>
              <li>Review requests sent by SMS and email</li>
              <li>A single follow-up if there&apos;s no response</li>
              <li>Private issue routing</li>
              <li>Reviews-only view (no extra tools)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section pricing-strip">
        <div className="container pricing-inline">
          <div>
            <h3>$49/month</h3>
            <p>24-day free trial. No setup fee.</p>
          </div>
          <a
            href="https://links.burrowbase.com/payment-link/697594d2c80eaf55228875f8"
            className="button button-light"
            rel="noreferrer"
          >
            Start Free
          </a>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>Start Free</h2>
              <p>Secure checkout. Cancel anytime.</p>
            </div>
            <a
              href="https://links.burrowbase.com/payment-link/697594d2c80eaf55228875f8"
              className="button button-primary"
              rel="noreferrer"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
