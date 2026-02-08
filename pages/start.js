import Link from "next/link";
import Script from "next/script";

const formId = "6ubufZicFdLa7tPP8mur";

export default function StartPage() {
  return (
    <div className="page start-funnel-page">
      <Script src="https://links.burrowbase.com/js/form_embed.js" strategy="afterInteractive" />

      <section className="start-funnel-wrap">
        <div className="container">
          <div className="start-funnel-grid">
            <aside className="start-funnel-panel" aria-label="Burrow Base onboarding highlights">
              <div className="start-funnel-card">
                <h1>Let&apos;s 4x Your Reviews!</h1>
                <ul>
                  <li>
                    <span aria-hidden>📈</span>
                    <div>
                      <strong>More Reviews = More Revenue</strong>
                      <p>Attract more local customers without chasing follow-ups.</p>
                    </div>
                  </li>
                  <li>
                    <span aria-hidden>⚡</span>
                    <div>
                      <strong>Set &amp; Forget in Minutes</strong>
                      <p>Simple setup, then automation handles the heavy lifting.</p>
                    </div>
                  </li>
                  <li>
                    <span aria-hidden>🤖</span>
                    <div>
                      <strong>Automate Your Reviews</strong>
                      <p>Send requests and reminders automatically with calm cadence.</p>
                    </div>
                  </li>
                  <li>
                    <span aria-hidden>⭐</span>
                    <div>
                      <strong>Increase Social Proof</strong>
                      <p>Turn positive feedback into trust that drives new business.</p>
                    </div>
                  </li>
                  <li>
                    <span aria-hidden>🕒</span>
                    <div>
                      <strong>Save Hours Every Month</strong>
                      <p>Less manual outreach, more focus on operations.</p>
                    </div>
                  </li>
                </ul>
                <p className="start-funnel-note">
                  Best results come from messaging customers who already gave consent to
                  receive texts.
                </p>
              </div>
            </aside>

            <section className="start-funnel-form-col" aria-label="Create your account">
              <div className="start-funnel-form-shell">
                <p className="start-funnel-step">Step 1 of 2</p>
                <h2>Create Your Account</h2>
                <p className="start-funnel-subhead">
                  Submit your details to create your Burrow Base account, then continue to
                  checkout.
                </p>

                <div className="start-funnel-embed-wrap">
                  <iframe
                    src={`https://links.burrowbase.com/widget/form/${formId}`}
                    className="start-funnel-iframe"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "0" }}
                    id={`inline-${formId}`}
                    data-layout='{"id":"INLINE","minimizedTitle":"","isLeftAligned":false,"isRightAligned":true,"allowMinimize":false}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Reputation Management Onboarding"
                    data-height="689"
                    data-layout-iframe-id={`inline-${formId}`}
                    data-form-id={formId}
                    title="Reputation Management Onboarding"
                  />
                </div>

                <p className="start-funnel-help">
                  Need help first? <Link href="/booking">Book onboarding</Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
