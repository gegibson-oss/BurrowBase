import { useEffect, useRef } from "react";

const bookingId = "XtIFpCS0inL1TeUPRb6y";
const bookingScriptSrc = "https://links.burrowbase.com/js/form_embed.js";

export default function BookingPage() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const initIframeResize = () => {
      if (typeof window !== "undefined" && typeof window.iFrameResize === "function") {
        window.iFrameResize(
          {
            checkOrigin: false,
            autoResize: true,
            sizeHeight: true,
            sizeWidth: false,
            scrolling: true,
            heightCalculationMethod: "max",
          },
          iframe
        );
      }
    };

    const runInit = () => {
      initIframeResize();
      window.setTimeout(initIframeResize, 350);
    };

    const existingScript = document.querySelector(`script[src="${bookingScriptSrc}"]`);

    if (existingScript) {
      runInit();
    } else {
      const script = document.createElement("script");
      script.src = bookingScriptSrc;
      script.async = true;
      script.addEventListener("load", runInit);
      document.body.appendChild(script);
    }

    const onIframeLoad = () => runInit();
    iframe.addEventListener("load", onIframeLoad);

    return () => {
      iframe.removeEventListener("load", onIframeLoad);
    };
  }, []);

  return (
    <div className="page booking-page">
      <section className="booking-wrap">
        <div className="container booking-shell">
          <div className="booking-head">
            <p className="booking-kicker">Onboarding</p>
            <h1>Book Your Setup Call</h1>
            <p>
              Pick a time that works for you. We&apos;ll help you launch quickly and make
              sure your review flow is configured correctly.
            </p>
          </div>

          <div className="booking-embed">
            <iframe
              ref={iframeRef}
              src={`https://links.burrowbase.com/widget/booking/${bookingId}`}
              className="booking-iframe"
              style={{ width: "100%", border: "none", overflow: "hidden", height: "900px" }}
              scrolling="no"
              id={`${bookingId}_1770567630839`}
              title="Burrow Base onboarding booking"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
