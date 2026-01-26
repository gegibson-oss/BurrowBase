import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Automated Reviews</p>
          <h1>Automated Reviews, without the noise.</h1>
          <p className="subhead">
            A clean, self-serve system that sends review requests and routes
            issues privately.
          </p>
          <div className="cta-row">
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

      <section className="section">
        <div className="container">
          <h2>Three calm steps.</h2>
          <div className="step-grid">
            <div className="step-card">
              <h3>1. Connect your business</h3>
              <p>
                We use your business name and contact details to send review
                requests.
              </p>
            </div>
            <div className="step-card">
              <h3>2. Requests go out automatically</h3>
              <p>SMS first, email fallback, with one calm reminder.</p>
            </div>
            <div className="step-card">
              <h3>3. Issues route internally</h3>
              <p>
                Low ratings or negative sentiment never go public. You see the
                issue and decide what to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <h2>What&apos;s included</h2>
          <div className="list-grid">
            <ul>
              <li>SMS-first review requests with email fallback</li>
              <li>One reminder after 48 hours</li>
              <li>Private issue routing for low ratings</li>
              <li>A clean, narrow dashboard focused on reviews only</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>24 days to make it routine.</h2>
          </div>
          <p>
            Try it in a real workflow. If it doesn&apos;t reduce follow-up and protect
            your reputation, cancel anytime.
          </p>
        </div>
      </section>

      <section className="section pricing-strip">
        <div className="container pricing-inline">
          <div>
            <h3>$49/month</h3>
            <p>24-day free trial. No setup fee. Cancel anytime.</p>
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
              <p>Secure checkout. You can cancel anytime.</p>
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
