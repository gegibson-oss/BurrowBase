import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="subhead">
            This Privacy Policy explains how Burrow Base, LLC collects, uses,
            stores, and protects personal information when you use our website
            and services.
          </p>
          <p className="terms-meta">Effective date: February 6, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container terms-content">
          <h2>1. Who We Are</h2>
          <p>
            Burrow Base, LLC (&quot;Burrow Base,&quot; &quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;) provides review request and
            reputation operations services for local service businesses.
          </p>
          <p>Mailing Address: 3113 Sugar Mountain 2 Rd, Newland, NC 28657</p>
          <p>Phone: (828) 260-7119</p>
          <p>Email: grant@burrowbase.com</p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul className="terms-list">
            <li>
              Contact information such as name, business name, email address,
              phone number, and mailing address.
            </li>
            <li>
              Account and onboarding information you submit when requesting or
              using services.
            </li>
            <li>
              Customer communication data needed to deliver review request and
              follow-up workflows.
            </li>
            <li>
              Technical data such as IP address, browser type, and device data
              collected through website analytics and cookies.
            </li>
            <li>
              Payment and transaction details handled through our payment
              providers.
            </li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We use information to:</p>
          <ul className="terms-list">
            <li>Provide, maintain, and improve our services.</li>
            <li>
              Send review request messages and related customer communications.
            </li>
            <li>
              Communicate with you about onboarding, support, billing, and
              service updates.
            </li>
            <li>Monitor performance, security, and service reliability.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h2>4. SMS Communications and Consent</h2>
          <p>
            If you or your customers opt in to SMS communications through our
            workflows, message frequency may vary and message/data rates may
            apply.
          </p>
          <p>
            Some SMS messages may be sent by businesses that use Burrow Base
            (our &quot;Clients&quot;) to communicate with their own customers
            through systems we configure. In those cases, messages are intended
            to identify the Client as the business context of the message and
            may include a notice such as &quot;Sent via Burrow Base&quot; to
            indicate the messaging service provider.
          </p>
          <p>
            SMS recipients can reply STOP to opt out and HELP for support. For
            support, contact{" "}
            <a href="mailto:grant@burrowbase.com">grant@burrowbase.com</a> or
            call (828) 260-7119.
          </p>
          <p>
            We require clear opt-in before SMS is sent. Opt-in may occur through
            intake forms, booking/contact forms, service agreements, or other
            clear consent capture methods.
          </p>

          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell personal information. We may share information only
            as needed with service providers that help us operate our business
            (such as messaging, CRM, hosting, analytics, and payment platforms),
            and only for legitimate business purposes.
          </p>
          <p>
            When Clients use Burrow Base to message their own customers, we may
            process end-customer contact information and communication data to
            deliver those workflows. Clients are responsible for obtaining any
            required permissions and providing any required notices to their
            customers.
          </p>
          <h2>6. No Third-Party Messaging or Lead Sharing</h2>
          <p>
            Burrow Base does not sell, rent, share, or transfer personal
            information, phone numbers, or SMS consent to third parties.
          </p>
          <p>
            Burrow Base may operate messaging workflows for Clients to send SMS
            communications to their own customers through systems we configure.
            We do not use purchased lists, and we do not engage in third-party
            lead generation, list purchasing, list sharing, or multi-level
            marketing (MLM) activities.
          </p>
          <p>
            No mobile information will be shared with third parties or
            affiliates for marketing or promotional purposes.
          </p>
          <p>
            All categories above exclude text messaging originator opt-in data
            and consent; this information will not be shared with any third
            parties.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal information only as long as needed for service
            delivery, legal compliance, dispute resolution, and enforcement of
            agreements.
          </p>

          <h2>8. Data Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational
            safeguards to protect personal information. No method of storage or
            transmission is guaranteed to be 100% secure.
          </p>

          <h2>9. Your Choices</h2>
          <p>You may:</p>
          <ul className="terms-list">
            <li>Opt out of SMS by replying STOP.</li>
            <li>
              Opt out of marketing emails using unsubscribe instructions in the
              message.
            </li>
            <li>
              Request access, correction, or deletion of your personal
              information by contacting us.
            </li>
          </ul>

          <h2>10. Cookies and Analytics</h2>
          <p>
            We may use cookies and analytics tools to understand website usage
            and improve performance. You can control cookies through your
            browser settings.
          </p>

          <h2>11. Third-Party Links and Services</h2>
          <p>
            Our website or services may contain links to third-party websites or
            tools. We are not responsible for third-party privacy practices.
          </p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>

          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates are
            effective when posted on this page.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact{" "}
            <a href="mailto:grant@burrowbase.com">grant@burrowbase.com</a>.
          </p>
          <p>
            Related documents: <Link href="/terms">Terms and Conditions</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
