import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [ctaLoading, setCtaLoading] = useState(false);
  const featureItems = [
    {
      title: "Website That Converts",
      description:
        "A professional website built to turn visitors into booked jobs, not just look good.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 6.5h18M6.5 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "5-Star Review Funnel",
      description:
        "Automatically requests reviews after jobs and routes happy customers to Google.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m12 4 2.3 4.7 5.2.8-3.8 3.7.9 5.3L12 15.9 7.4 18.5l.9-5.3-3.8-3.7 5.2-.8L12 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Missed-Call Text Back",
      description:
        "Every missed call gets an instant text so opportunities aren’t lost.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 6.5h6.5M7 10h10M7 13.5h7.5M14.5 16.5l2.8 2.8 5.2-1.7-1.7-5.2-2.8 2.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4h12a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Appointment Booking",
      description:
        "Customers booly on your website based on real availability and rules.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 3v3M17 3v3M4 9h16M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Automated Lead Follow-Up",
      description:
        "Every lead is contacted instantly and followed up with until resolved.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 7h8l-2.5-2.5M20 17h-8l2.5 2.5M6 12h12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Local SEO Foundation",
      description:
        "Built-in systems that help your business show up when local customers search.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const setupDemo = (rootSelector, cycleTime, play) => {
      const root = document.querySelector(rootSelector);
      if (!root) return null;

      let loopId = null;
      let stepTimeouts = [];

      const clearSteps = () => {
        stepTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
        stepTimeouts = [];
      };

      const schedule = (fn, delay) => {
        stepTimeouts.push(window.setTimeout(fn, delay));
      };

      const run = () => {
        clearSteps();
        play(root, schedule);
        loopId = window.setTimeout(run, cycleTime);
      };

      const init = () => {
        if (loopId) {
          window.clearTimeout(loopId);
        }
        run();
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              init();
            }
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(root);
      const startDelay = window.setTimeout(init, 120);

      return () => {
        window.clearTimeout(startDelay);
        if (loopId) {
          window.clearTimeout(loopId);
        }
        clearSteps();
        observer.disconnect();
      };
    };

    const cleanups = [
      setupDemo(".bb-frontdesk", 12000, (root, schedule) => {
        root.querySelectorAll(".show").forEach((el) => {
          el.classList.remove("show");
        });

        const missed = root.querySelector("#frontdesk-missed");
        const bubble1 = root.querySelector("#frontdesk-b1");
        const bubble2 = root.querySelector("#frontdesk-b2");
        const bubble3 = root.querySelector("#frontdesk-b3");
        const booking = root.querySelector("#frontdesk-booking");

        schedule(() => missed?.classList.add("show"), 180);
        schedule(() => bubble1?.classList.add("show"), 900);
        schedule(() => bubble2?.classList.add("show"), 1700);
        schedule(() => bubble3?.classList.add("show"), 2500);
        schedule(() => booking?.classList.add("show"), 3400);
      }),
      setupDemo(".bb-sched", 13000, (root, schedule) => {
        root.querySelectorAll(".show").forEach((el) => {
          el.classList.remove("show");
        });

        const sequence = [
          root.querySelector("#sched-e1"),
          root.querySelector("#sched-b1"),
          root.querySelector("#sched-e2"),
          root.querySelector("#sched-b2"),
          root.querySelector("#sched-e3"),
          root.querySelector("#sched-p1"),
          root.querySelector("#sched-p2"),
        ];

        let delay = 180;
        sequence.forEach((item) => {
          schedule(() => item?.classList.add("show"), delay);
          delay += 700;
        });
      }),
      setupDemo(".bb-jobflow", 9000, (root, schedule) => {
        root.querySelectorAll(".active, .done, .show").forEach((el) => {
          el.classList.remove("active", "done", "show");
        });

        const s1 = root.querySelector("#jobflow-s1");
        const s2 = root.querySelector("#jobflow-s2");
        const s3 = root.querySelector("#jobflow-s3");
        const s4 = root.querySelector("#jobflow-s4");
        const card = root.querySelector("#jobflow-card");
        const handoff = root.querySelector("#jobflow-handoff");

        s1?.classList.add("active");

        schedule(() => card?.classList.add("show"), 180);
        schedule(() => {
          s1?.classList.replace("active", "done");
          s2?.classList.add("active");
        }, 1100);
        schedule(() => {
          s2?.classList.replace("active", "done");
          s3?.classList.add("active");
        }, 1900);
        schedule(() => {
          s3?.classList.replace("active", "done");
          s4?.classList.add("active");
          handoff?.classList.add("show");
        }, 2700);
        schedule(() => {
          s4?.classList.replace("active", "done");
        }, 3400);
      }),
      setupDemo(".bb-payments", 9000, (root, schedule) => {
        root.querySelectorAll(".active, .done, .show").forEach((el) => {
          el.classList.remove("active", "done", "show");
        });

        const f1 = root.querySelector("#payments-f1");
        const f2 = root.querySelector("#payments-f2");
        const f3 = root.querySelector("#payments-f3");
        const invoice = root.querySelector("#payments-invoice");
        const status1 = root.querySelector("#payments-s1");
        const status2 = root.querySelector("#payments-s2");
        const status3 = root.querySelector("#payments-s3");
        const snapshot = root.querySelector("#payments-snapshot");

        f1?.classList.add("active");

        schedule(() => invoice?.classList.add("show"), 180);
        schedule(() => {
          f1?.classList.replace("active", "done");
          f2?.classList.add("active");
          status1?.classList.add("active");
        }, 1100);
        schedule(() => {
          f2?.classList.replace("active", "done");
          f3?.classList.add("active");
          status2?.classList.add("active");
        }, 1900);
        schedule(() => {
          status3?.classList.add("active");
          snapshot?.classList.add("show");
          f3?.classList.replace("active", "done");
        }, 2700);
      }),
      setupDemo(".bb-reputation", 9000, (root, schedule) => {
        root.querySelectorAll(".show").forEach((el) => {
          el.classList.remove("show");
        });

        const good = root.querySelector("#reputation-good");
        const bad = root.querySelector("#reputation-bad");
        const review = root.querySelector("#reputation-review");
        const alert = root.querySelector("#reputation-alert");
        const owner = root.querySelector("#reputation-owner");

        schedule(() => good?.classList.add("show"), 180);
        schedule(() => review?.classList.add("show"), 900);
        schedule(() => bad?.classList.add("show"), 1600);
        schedule(() => alert?.classList.add("show"), 2300);
        schedule(() => owner?.classList.add("show"), 3000);
      }),
    ].filter(Boolean);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="page homepage">
      <section className="hero hero-has-slider">
        <div className="hero-slider" aria-hidden="true">
          <img className="hero-slide hero-slide-static" src="/images/hero-1.png?v=2" alt="" />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="hero-card hero-card-wide">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">For contractors &amp; service businesses</p>
                <h1>
                  <span className="hero-line">Run your business.</span>
                  <span className="hero-line">Not the office.</span>
                </h1>
                <p className="subhead">
                  A digital operations manager that handles leads, scheduling,
                  payments, and customer communication, automatically.
                </p>
                <div className="cta-row">
                  <Link
                    href="/how-it-works"
                    className={`button button-primary${
                      ctaLoading ? " is-loading" : ""
                    }`}
                    onClick={() => setCtaLoading(true)}
                    aria-busy={ctaLoading}
                  >
                    {ctaLoading ? "Building your site..." : "See How It Works"}
                  </Link>
                </div>
                <p className="hero-trust">
                  $297/month &middot; No contracts &middot; Cancel anytime
                </p>
              </div>
              <div className="hero-phone">
                <img
                  src="/hero-phone.svg"
                  alt="Phone diagram showing leads, scheduling, payments, and reviews."
                  className="hero-phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-overview">
        <div className="container">
          <div className="features-overview-top">
            <div className="features-media-card">
              <div className="slider-embed">
                <iframe
                  src="/image-slider"
                  title="Burrow Base image slider"
                  loading="lazy"
                  allow="payment *"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="features-overview-copy">
              <h2>Everything Your Business Needs to Run Smooth Operations</h2>
              <p>
                Burrow Base replaces scattered tools and manual follow-ups with a
                single, quiet system that handles leads, bookings, reviews, and
                customer communication automatically.
              </p>
              <p>No software to figure out. No workflows to manage.</p>
            </div>
          </div>
          <div className="features-grid">
            {featureItems.map((item, index) => (
              <div className="feature-card" key={item.title}>
                <div className={`feature-icon feature-icon-${index + 1}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="demo-band">
      <section className="section">
        <div className="container split split-top">
          <div className="demo-copy demo-copy-centered">
            <h2>Digital Front Desk</h2>
            <p className="section-lead">Never miss a lead again.</p>
            <div className="feature-list">
              <div className="feature">
                <p className="feature-title">Instant response, every time</p>
                <p>
                  When a call, text, or form comes in, the system responds
                  automatically and keeps the conversation moving.
                </p>
              </div>
              <div className="feature">
                <p className="feature-title">Leads handled while you&apos;re working</p>
                <p>
                  On a job site, driving, or with a customer -- incoming
                  inquiries are acknowledged and guided forward.
                </p>
              </div>
              <div className="feature">
                <p className="feature-title">A calm, organized inbox</p>
                <p>
                  No call anxiety. No message pileups. Conversations stay clean
                  and tracked.
                </p>
              </div>
            </div>
            <p className="feature-replaces">
              <strong>This replaces</strong> Manually returning missed calls and
              hoping the lead didn&apos;t move on.
            </p>
          </div>
          <div className="demo-phone bb-frontdesk">
            <div className="bb-phone">
              <div className="bb-notch"></div>
              <div className="bb-screen bb-demo">
                <div className="bb-demo-header">
                  <span>Messages</span>
                  <span>0 unread</span>
                </div>
                <div className="frontdesk-missed" id="frontdesk-missed">
                  <div className="frontdesk-icon"></div>
                  <div>
                    Missed call &middot; +1 (423) 555-0184
                    <small>Handled automatically</small>
                  </div>
                </div>
                <div className="frontdesk-messages">
                  <div className="frontdesk-bubble out" id="frontdesk-b1">
                    Hey! Sorry we missed your call -- we&apos;re on a job right now.
                    You can book instantly using the link below.
                  </div>
                  <div className="frontdesk-bubble in" id="frontdesk-b2">
                    Just booked for Friday morning. Thanks!
                  </div>
                  <div className="frontdesk-bubble out" id="frontdesk-b3">
                    You&apos;re all set. We&apos;ll see you then.
                  </div>
                </div>
                <div className="frontdesk-booking" id="frontdesk-booking">
                  <h4>Appointment Confirmed</h4>
                  <p>
                    Friday &middot; 9:00 AM
                    <br />
                    Confirmation sent automatically
                  </p>
                  <div className="frontdesk-badge">No action required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top reverse">
          <div className="demo-copy demo-copy-centered">
            <h2>Guarded Scheduling</h2>
            <p className="section-lead">Your calendar, protected by rules.</p>
            <div className="feature-list">
              <div className="feature">
                <p className="feature-title">Built-in buffers and limits</p>
                <p>Jobs are spaced properly. No double bookings. No impossible days.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Automatic confirmations and reminders</p>
                <p>Customers know exactly when you&apos;re coming.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Changes handled automatically</p>
                <p>Reschedules and updates happen without back-and-forth.</p>
              </div>
            </div>
            <p className="feature-replaces">
              <strong>This replaces</strong> Constant calendar checking and schedule chaos.
            </p>
          </div>
          <div className="demo-phone bb-sched">
            <div className="bb-phone">
              <div className="bb-notch"></div>
              <div className="bb-screen bb-demo">
                <div className="bb-demo-header">
                  <span>Schedule</span>
                  <span>Guardrailed</span>
                </div>
                <div className="sched-cal">
                  <div className="sched-cal-top">
                    <div>
                      Today <small>3 jobs &middot; buffers enforced</small>
                    </div>
                    <small>Auto</small>
                  </div>
                  <div className="sched-cal-grid">
                    <div className="sched-times">
                      <div>8:00</div>
                      <div>9:00</div>
                      <div>10:00</div>
                      <div>11:00</div>
                      <div>12:00</div>
                      <div>1:00</div>
                    </div>
                    <div className="sched-slots">
                      <div className="sched-slot-line" style={{ top: "52px" }}></div>
                      <div className="sched-slot-line" style={{ top: "104px" }}></div>
                      <div className="sched-slot-line" style={{ top: "156px" }}></div>
                      <div className="sched-slot-line" style={{ top: "208px" }}></div>
                      <div className="sched-slot-line" style={{ top: "260px" }}></div>
                      <div
                        className="sched-event"
                        id="sched-e1"
                        style={{ top: "12px", height: "70px" }}
                      >
                        <strong>Service Visit</strong>
                        <span>8:15 - 9:30</span>
                      </div>
                      <div
                        className="sched-buffer"
                        id="sched-b1"
                        style={{ top: "92px", height: "34px" }}
                      >
                        Buffer &middot; 30 min
                      </div>
                      <div
                        className="sched-event"
                        id="sched-e2"
                        style={{ top: "136px", height: "70px" }}
                      >
                        <strong>Install</strong>
                        <span>10:00 - 11:15</span>
                      </div>
                      <div
                        className="sched-buffer"
                        id="sched-b2"
                        style={{ top: "216px", height: "30px" }}
                      >
                        Buffer &middot; 20 min
                      </div>
                      <div
                        className="sched-event"
                        id="sched-e3"
                        style={{ top: "254px", height: "60px" }}
                      >
                        <strong>Follow-up</strong>
                        <span>12:00 - 1:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sched-pills">
                  <div className="sched-pill confirm" id="sched-p1">
                    <span className="sched-dot"></span>
                    Confirmation sent
                  </div>
                  <div className="sched-pill reminder" id="sched-p2">
                    <span className="sched-dot"></span>
                    Reminder scheduled
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top">
          <div className="demo-copy demo-copy-centered">
            <h2>Job Flow &amp; Handoff</h2>
            <p className="section-lead">Every job moves forward without friction.</p>
            <div className="feature-list">
              <div className="feature">
                <p className="feature-title">Clear job stages</p>
                <p>
                  Leads, booked jobs, active work, and completed jobs are always
                  visible.
                </p>
              </div>
              <div className="feature">
                <p className="feature-title">Automatic technician handoff</p>
                <p>Job details, timing, and notes are delivered automatically.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Owner stays out of the middle</p>
                <p>Techs know what to do without asking.</p>
              </div>
            </div>
            <p className="feature-replaces">
              <strong>This replaces</strong> Acting as dispatcher and repeating job details.
            </p>
          </div>
          <div className="demo-phone bb-jobflow">
            <div className="bb-phone">
              <div className="bb-notch"></div>
              <div className="bb-screen bb-demo">
                <div className="bb-demo-header">
                  <span>Job Flow</span>
                  <span>Auto-routed</span>
                </div>
                <div className="jobflow-pipeline">
                  <div className="jobflow-stage" id="jobflow-s1">
                    Lead
                  </div>
                  <div className="jobflow-stage" id="jobflow-s2">
                    Booked
                  </div>
                  <div className="jobflow-stage" id="jobflow-s3">
                    In Progress
                  </div>
                  <div className="jobflow-stage" id="jobflow-s4">
                    Completed
                  </div>
                </div>
                <div className="jobflow-card" id="jobflow-card">
                  <h4>Service Call &middot; HVAC</h4>
                  <p>
                    Friday &middot; 9:00 AM
                    <br />
                    123 Maple St
                  </p>
                </div>
                <div className="jobflow-handoff" id="jobflow-handoff">
                  <div className="jobflow-handoff-title">Sent to technician</div>
                  <div className="jobflow-handoff-card">
                    <strong>Assigned Job</strong>
                    Location, time, notes, and contact details delivered automatically.
                  </div>
                  <div className="jobflow-pill">
                    <span className="jobflow-dot"></span>
                    Tech has everything needed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top reverse">
          <div className="demo-copy demo-copy-centered">
            <h2>Payments &amp; Follow-Up</h2>
            <p className="section-lead">Get paid without chasing.</p>
            <div className="feature-list">
              <div className="feature">
                <p className="feature-title">Invoices sent automatically</p>
                <p>When the job is complete, the invoice goes out.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Friendly payment reminders</p>
                <p>Unpaid invoices follow up on their own.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Clear visibility</p>
                <p>Paid, unpaid, and overdue amounts at a glance.</p>
              </div>
            </div>
            <p className="feature-replaces">
              <strong>This replaces</strong> Late invoices and awkward reminders.
            </p>
          </div>
          <div className="demo-phone bb-payments">
            <div className="bb-phone">
              <div className="bb-notch"></div>
              <div className="bb-screen bb-demo">
                <div className="bb-demo-header">
                  <span>Payments</span>
                  <span>Auto-collected</span>
                </div>
                <div className="payments-flow">
                  <div className="payments-step" id="payments-f1">
                    Job Completed
                  </div>
                  <div className="payments-step" id="payments-f2">
                    Invoice Sent
                  </div>
                  <div className="payments-step" id="payments-f3">
                    Payment Received
                  </div>
                </div>
                <div className="payments-invoice" id="payments-invoice">
                  <h4>Invoice &middot; Service Call</h4>
                  <p>$420 &middot; Sent automatically</p>
                  <div className="payments-statuses">
                    <div className="payments-status sent" id="payments-s1">
                      Sent
                    </div>
                    <div className="payments-status viewed" id="payments-s2">
                      Viewed
                    </div>
                    <div className="payments-status paid" id="payments-s3">
                      Paid
                    </div>
                  </div>
                </div>
                <div className="payments-snapshot" id="payments-snapshot">
                  <div className="payments-row paid">
                    <span>Paid</span>
                    <span>$2,140</span>
                  </div>
                  <div className="payments-row unpaid">
                    <span>Unpaid</span>
                    <span>$0</span>
                  </div>
                  <div className="payments-badge">
                    <span className="payments-dot"></span>
                    No follow-up required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-top">
          <div className="demo-copy demo-copy-centered">
            <h2>Reputation &amp; Owner Alerts</h2>
            <p className="section-lead">You&apos;re notified only when it matters.</p>
            <div className="feature-list">
              <div className="feature">
                <p className="feature-title">Automatic review requests</p>
                <p>Happy customers are prompted without you asking.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Private issue detection</p>
                <p>Problems surface internally before going public.</p>
              </div>
              <div className="feature">
                <p className="feature-title">Exception-only alerts</p>
                <p>If everything is handled, you hear nothing.</p>
              </div>
            </div>
            <p className="feature-replaces">
              <strong>This replaces</strong> Manually asking for reviews and surprise bad
              feedback.
            </p>
          </div>
          <div className="demo-phone bb-reputation">
            <div className="bb-phone">
              <div className="bb-notch"></div>
              <div className="bb-screen bb-demo">
                <div className="bb-demo-header">
                  <span>Reputation</span>
                  <span>Exception-only alerts</span>
                </div>
                <div className="reputation-paths">
                  <div className="reputation-path good" id="reputation-good">
                    <div className="reputation-indicator"></div>
                    Happy customer
                  </div>
                  <div className="reputation-path bad" id="reputation-bad">
                    <div className="reputation-indicator"></div>
                    Unhappy customer
                  </div>
                </div>
                <div className="reputation-card" id="reputation-review">
                  <h4>Review Request Sent</h4>
                  <p>Public feedback requested automatically</p>
                </div>
                <div className="reputation-card" id="reputation-alert">
                  <h4>Private Owner Alert</h4>
                  <p>Customer issue flagged before review</p>
                </div>
                <div className="reputation-owner" id="reputation-owner">
                  <div className="reputation-row alert">
                    <span>Alerts</span>
                    <span>1</span>
                  </div>
                  <div className="reputation-row ok">
                    <span>Everything else</span>
                    <span>Handled</span>
                  </div>
                  <div className="reputation-pill">
                    <span className="reputation-dot"></span>
                    Human decision required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="section model-diff">
        <div className="container">
          <div className="section-heading centered">
            <h2>Why Burrow Base Works Differently</h2>
            <p className="section-lead">
              Burrow Base isn&apos;t another tool to manage. It&apos;s a system that&apos;s installed,
              configured, and runs in the background.
            </p>
          </div>
          <div className="model-diff-grid">
            {[
              [
                "Installed, Not DIY",
                "You don’t build workflows or connect tools. We install and configure the system around how your business actually runs.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 12h16M12 4v16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                ),
              ],
              [
                "One System, Multiple Layers",
                "Start with one layer or add more over time. Everything runs inside the same system—no rebuilds or migrations.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 8h12M6 12h12M6 16h12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 6h8v12H8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                ),
              ],
              [
                "Quiet by Design",
                "If everything is handled, you hear nothing. You’re notified only when a human decision is required.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 8c0 3.3 0 4.7 6 9 6-4.3 6-5.7 6-9a6 6 0 0 0-12 0Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
              ],
              [
                "Built for Service Businesses",
                "Designed specifically for contractors and service businesses—not generic startups or online brands.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 16l4-8h8l4 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 16v4M17 16v4M9 20h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              ],
              [
                "No Software to Learn",
                "There’s nothing to configure or manage. You just respond when needed while everything else runs automatically.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 7h12v10H6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 10h6M9 13h6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              ],
              [
                "Grows Without Rebuilding",
                "As your business grows, the system expands with it—without changing how you operate day to day.",
                (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 16l4-4 3 3 5-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19h14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              ],
            ].map(([title, body, icon]) => (
              <div className="model-diff-card" key={title}>
                <div className="model-diff-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted" id="how-it-works">
        <div className="container">
          <div className="section-heading centered">
            <h2>How It Works</h2>
            <p className="section-lead">
              Certainty, not complexity. Everything is installed for you.
            </p>
          </div>
          <div className="step-grid">
            {[
              [
                "1",
                "We learn how your business runs",
                "Answer a few setup questions about your services, hours, and preferences. No technical setup required.",
              ],
              [
                "2",
                "We install and configure everything",
                "We build the system, connect what’s needed, and test it end-to-end. You don’t touch workflows or settings.",
              ],
              [
                "3",
                "You go live",
                "Calls, messages, bookings, payments, and reviews begin working automatically. You’re notified only when needed.",
              ],
            ].map(([number, title, description]) => (
              <div className="step-card" key={title}>
                <div className="step-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="step-emphasis">
            <p>You don&apos;t build anything.</p>
            <p>You don&apos;t manage anything.</p>
            <p className="step-emphasis-strong">You just use it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Common Questions</h2>
          </div>
          <div className="faq-grid">
            {[
              [
                "Is this software I have to learn?",
                "No. This is a done-for-you digital operations manager. We set it up, configure it to your business, and you just use it.",
              ],
              [
                "What if I already have tools?",
                "Burrow Base can work alongside your existing tools or replace them. During setup, we configure the system based on what you use today.",
              ],
              [
                "How quickly can I get started?",
                "Most businesses are live within 24-48 hours. Calls and email work immediately. Texting activates after carrier approval.",
              ],
              [
                "What if my business is different?",
                "Every contractor and service business has unique workflows. During setup, we tailor the system to how you actually operate.",
              ],
              [
                "Can I cancel anytime?",
                "Yes. No contracts. No commitments.",
              ],
              [
                "What kind of support do I get?",
                "Direct support via email and text. If something isn&apos;t working right, we fix it quickly.",
              ],
            ].map(([question, answer]) => (
              <div className="card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container">
          <h2>
            Digital operations manager for businesses that serve{" "}
            <span className="cta-accent">real customers</span>.
          </h2>
          <div className="cta-row">
            <Link href="/start" className="button button-primary">
              Start free
            </Link>
            <Link href="/how-it-works" className="button button-ghost">
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
