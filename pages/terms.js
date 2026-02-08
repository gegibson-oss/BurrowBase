import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="page">
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Terms</p>
          <h1>Terms of Service</h1>
          <p className="subhead">
            These Terms and Conditions govern your use of Burrow Base services,
            including SMS communications used for customer review requests and
            service updates.
          </p>
          <p className="terms-meta">Effective date: February 6, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container terms-content">
          <h2>1. Company Information</h2>
          <p>
            Burrow Base LLC (&quot;Burrow Base,&quot; &quot;we,&quot; &quot;our,&quot;
            or &quot;us&quot;) provides review request and operational automation
            services for service businesses.
          </p>
          <p>Mailing Address: 3113 Sugar Mountain 2 Rd, Newland, NC 28657</p>
          <p>Phone: (828) 260-7119</p>
          <p>Email: grant@burrowbase.com</p>

          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing our website or using our services, you agree to these
            Terms and Conditions and our Privacy Policy. If you do not agree,
            do not use our services.
          </p>

          <h2>3. Services</h2>
          <p>
            Burrow Base, LLC provides review request and reputation operations
            services for local service businesses. Our services may include:
          </p>
          <ul className="terms-list">
            <li>
              Automated review requests sent by SMS and other channels after
              customer jobs or appointments.
            </li>
            <li>
              Review follow-up messaging designed to increase response rates and
              collect authentic customer feedback.
            </li>
            <li>
              Reputation workflow setup, including routing, monitoring, and
              response operations support.
            </li>
            <li>
              Integration and configuration support for systems used to deliver
              and track review communications.
            </li>
          </ul>
          <p>
            Our goal is to help businesses run a consistent review request
            process with less manual follow-up. We may update, modify, or
            discontinue parts of the service at any time.
          </p>

          <h2>4. Eligibility and Authority</h2>
          <p>
            You represent that you are at least 18 years old and authorized to
            act on behalf of the business account you enroll.
          </p>

          <h2>5. Fees, Billing, and Cancellation</h2>
          <p>
            Paid services are billed under the plan you select. Unless stated
            otherwise in your service agreement, subscription services renew
            automatically until canceled.
          </p>
          <p>
            Carrier and registration fees related to A2P 10DLC messaging
            (including brand and campaign registration fees, carrier surcharges,
            and related pass-through costs) may apply when SMS services are
            enabled.
          </p>

          <h2>6. Customer Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="terms-list">
            <li>Provide accurate business and contact information.</li>
            <li>
              Obtain proper consent before sending SMS messages to any
              recipient.
            </li>
            <li>
              Only upload or provide end-customer phone numbers and contact
              information that were collected lawfully and with the required
              permissions for the intended communication method.
            </li>
            <li>
              Maintain reasonable records of consent (for example, a copy of a
              form, intake agreement language, or other proof) and honor opt-out
              requests. If an end customer revokes consent or opts out, you are
              responsible for ensuring no further messages are sent to that
              end customer.
            </li>
            <li>
              Use our services in compliance with applicable laws, carrier
              rules, and industry standards, including CTIA and A2P 10DLC
              requirements.
            </li>
            <li>
              Avoid prohibited content and prohibited use cases (including
              unlawful or deceptive messaging, lead generation spam, or
              disallowed verticals).
            </li>
          </ul>

          <h2>7. SMS Terms and A2P Disclosure</h2>
          <p>
            These Terms govern SMS messaging services provided by Burrow Base,
            LLC. By opting in to receive SMS messages from Burrow Base, LLC,
            you agree to these Terms.
          </p>
          <p>
            Burrow Base, LLC uses SMS messaging as a first-party sender for
            Burrow Base business purposes. We do not use purchased lists, and
            we do not use SMS for third-party lead generation.
          </p>
          <p>
            By opting in to receive text messages from Burrow Base or from our
            clients through systems we configure, you consent to receive SMS
            communications related to:
          </p>
          <p>
            When a business that uses Burrow Base (a &quot;Client&quot;) sends
            messages to its customers through systems we configure, the message
            content is intended to identify the Client as the business context
            of the message and may include a notice such as &quot;Sent via
            Burrow Base&quot; to indicate the messaging service provider.
            Clients are responsible for obtaining consent from their customers
            before any SMS is sent.
          </p>
          <p>
            By using the Services, you authorize Burrow Base to transmit SMS
            messages to your end customers on your behalf using the sender
            identity information you provide (such as your business name and an
            assigned phone number). You remain responsible for the content,
            timing, and legality of the messages sent to your end customers,
            including any customized messaging you enable.
          </p>
          <p>
            Burrow Base may rely on your representations regarding consent and
            does not independently verify consent by default. We may suspend
            messaging for accounts that appear to be sending messages without
            valid consent or that receive repeated spam or compliance
            complaints.
          </p>
          <p>
            Customers opt in via job intake forms, online booking or contact
            forms, service agreements, or written/verbal consent captured at
            the point of service.
          </p>
          <ul className="terms-list">
            <li>Review requests and review follow-up messages.</li>
            <li>Service updates and account notifications.</li>
            <li>Appointment or job-related communication when applicable.</li>
          </ul>
          <p>Message frequency may vary.</p>
          <p>Message and data rates may apply.</p>
          <p>
            Reply STOP at any time to opt out of SMS messages. Reply HELP for
            support. For help, contact{" "}
            <a href="mailto:grant@burrowbase.com">grant@burrowbase.com</a> or
            call (828) 260-7119.
          </p>
          <p>
            Consent to receive SMS is not a condition of purchase. We only send
            SMS to recipients who have provided consent through a valid opt-in
            process.
          </p>

          <h2>8. Privacy and Data Use</h2>
          <p>
            Your use of our services is subject to our Privacy Policy at{" "}
            <Link href="/privacy">/privacy</Link>.
          </p>
          <p>
            Mobile opt-in data and consent information will not be shared with
            third parties or affiliates for their marketing or promotional
            purposes.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our services may integrate with third-party providers, including
            communications platforms, payment processors, and CRM systems. We
            are not responsible for third-party platform downtime, policy
            changes, or service interruptions outside our control.
          </p>

          <h2>10. Intellectual Property</h2>
          <p>
            All content, branding, workflows, and software components provided
            by Burrow Base remain our property or the property of our licensors.
            You may not copy, reverse engineer, resell, or misuse our materials
            without written permission.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            Services are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis. We do not guarantee uninterrupted service,
            specific delivery rates, or guaranteed business outcomes.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Burrow Base is not liable
            for indirect, incidental, special, consequential, or punitive
            damages, including loss of profits, revenue, data, or goodwill.
          </p>
          <p>
            Our aggregate liability for any claim arising out of these Terms or
            the services will not exceed the amount paid by you to Burrow Base
            in the three (3) months preceding the event giving rise to the
            claim.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Burrow Base from
            claims, damages, liabilities, and expenses arising from your use of
            the services, your messaging content, or your violation of law or
            these Terms.
          </p>

          <h2>14. Termination</h2>
          <p>
            We may suspend or terminate access to the services if you violate
            these Terms, applicable law, or carrier/compliance requirements.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina,
            without regard to conflict of law principles.
          </p>

          <h2>16. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms become
            effective when posted on this page.
          </p>

          <h2>17. Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href="mailto:grant@burrowbase.com">grant@burrowbase.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
