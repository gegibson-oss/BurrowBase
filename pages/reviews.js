import Link from "next/link";
import { FeatureSteps } from "../components/ui/feature-section";

const checkoutUrl = "/start";

const reviewFeatures = [
  {
    step: "Step 1",
    title: "Review Reactivation",
    content:
      "Reconnect with past customers automatically so your previous client list keeps generating new 5-star reviews.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Past customers re-engaged with automated requests.",
  },
  {
    step: "Step 2",
    title: "Personalized Image Review Requests",
    content:
      "Send branded review requests with personalized image creative so each request feels specific, not generic.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Branded image request templates built for your business.",
  },
  {
    step: "Step 3",
    title: "Dynamic Follow-ups",
    content:
      "Follow-ups adapt to customer behavior so reminders are only sent when needed, at the right intensity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Automated follow-up logic based on clicks and responses.",
  },
  {
    step: "Step 4",
    title: "Smart Messaging",
    content:
      "Message timing and copy improve continuously from live performance data to keep response rates steady.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Messaging optimized over time using real campaign outcomes.",
  },
  {
    step: "Step 5",
    title: "Review Website Widgets",
    content:
      "Display your strongest recent reviews on your website with easy install widgets that build trust fast.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Embedded review widgets for stronger social proof.",
  },
  {
    step: "Step 6",
    title: "Review Social Posting",
    content:
      "Turn 5-star reviews into branded social content automatically for Facebook and Instagram.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Review content repurposed into social posts.",
  },
  {
    step: "Step 7",
    title: "Automate Review Replies",
    content:
      "Respond to positive reviews with human-sounding replies that stay on-brand while saving owner time.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1800&auto=format&fit=crop",
    imageCaption: "Automated replies with a personal, professional tone.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="page reviews-page">
      <section className="section reviews-feature-fold" id="feature-list">
        <div className="container">
          <FeatureSteps
            features={reviewFeatures}
            title="No More Chasing Reviews"
            description="The hardest working member of your team that handles review requests, follow-ups, and replies without daily owner effort."
            actions={
              <>
                <a href={checkoutUrl} className="button button-primary" rel="noreferrer">
                  Start Free
                </a>
                <a href="#pricing" className="button button-ghost">
                  See Pricing
                </a>
              </>
            }
            autoPlayInterval={5000}
            className="reviews-feature-steps"
          />
        </div>
      </section>

      <section className="section muted reviews-included">
        <div className="container">
          <div className="reviews-included-grid">
            <div>
              <h2>What this replaces</h2>
              <ul className="reviews-list">
                <li>Manual review requests sent inconsistently</li>
                <li>Unread texts and delayed follow-up</li>
                <li>Unanswered reviews hurting trust</li>
                <li>Missed opportunities to repurpose social proof</li>
              </ul>
            </div>
            <div>
              <h2>What you get instead</h2>
              <ul className="reviews-list">
                <li>A focused review workflow with automatic delivery</li>
                <li>Structured follow-up logic tied to customer behavior</li>
                <li>Branded content across web widgets and social posts</li>
                <li>Consistent replies without daily owner involvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reviews-trial">
          <div>
            <h2>24 days to make it routine.</h2>
          </div>
          <p>
            Run it in your real workflow with no setup fee. If it doesn&apos;t reduce
            manual follow-up and protect your reputation, cancel anytime.
          </p>
        </div>
      </section>

      <section className="section pricing-strip" id="pricing">
        <div className="container pricing-inline">
          <div>
            <h3>$49/month</h3>
            <p>24-day free trial. No setup fee. Cancel anytime.</p>
          </div>
          <a href={checkoutUrl} className="button button-light" rel="noreferrer">
            Start Free
          </a>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container">
          <div className="cta-card reviews-cta-card">
            <div>
              <h2>Start with Automated Reviews</h2>
              <p>Secure checkout. Your account provisions automatically.</p>
            </div>
            <div className="cta-row">
              <a href={checkoutUrl} className="button button-primary" rel="noreferrer">
                Start Free
              </a>
              <Link href="/digital-operations-manager" className="button button-ghost">
                See Full Operations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
