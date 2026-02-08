import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";

const pickName = (value) => {
  if (!value) return "";
  if (Array.isArray(value)) return value[0] || "";
  return value;
};

export default function StartSuccessPage() {
  const { query } = useRouter();

  const firstName = useMemo(() => {
    const value = pickName(query.firstName || query.first_name || query.firstname);
    return value ? value.trim() : "";
  }, [query.firstName, query.first_name, query.firstname]);

  return (
    <div className="page confirmation-page">
      <section className="confirmation-wrap">
        <div className="container confirmation-shell">
          <p className="confirmation-kicker">Payment Confirmed</p>
          <h1>{firstName ? `${firstName}, you are in.` : "You are in."}</h1>
          <p className="confirmation-subhead">
            Your Burrow Base account is now provisioning. Most accounts are ready quickly.
            We&apos;ll also email setup details to the address used at checkout.
          </p>

          <div className="confirmation-grid">
            <article className="confirmation-card">
              <h2>What Happens Next</h2>
              <ol>
                <li>We create your Burrow Base subaccount and user access.</li>
                <li>We connect your automated review workflow settings.</li>
                <li>You receive login and setup confirmation by email.</li>
              </ol>
            </article>

            <article className="confirmation-card">
              <h2>Recommended Next Step</h2>
              <p>
                Book a short onboarding call so we can confirm setup and help you get your
                first review fast.
              </p>
              <div className="confirmation-actions">
                <Link href="/booking" className="button button-primary">
                  Book Onboarding
                </Link>
                <a href="https://app.burrowbase.com" className="button button-ghost" rel="noreferrer">
                  Go to Login
                </a>
              </div>
            </article>
          </div>

          <p className="confirmation-help">
            Need help now? <Link href="/contact">Contact support</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
