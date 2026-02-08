import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";

const paymentBaseUrl = "https://links.burrowbase.com/payment-link/6987908888cc475f35cbb7d6";
const ghlEmbedScriptSrc = "https://links.burrowbase.com/js/form_embed.js";

const pickFirst = (params, keys) => {
  for (const key of keys) {
    const value = params.get(key);
    if (value) return value.trim();
  }
  return "";
};

export default function PaymentPage() {
  const iframeRef = useRef(null);
  const { asPath } = useRouter();

  const paymentUrl = useMemo(() => {
    const query = asPath.includes("?") ? asPath.split("?")[1] : "";
    const params = new URLSearchParams(query);
    const firstName = pickFirst(params, ["firstName", "first_name", "firstname"]);
    const lastName = pickFirst(params, ["lastName", "last_name", "lastname"]);
    const email = pickFirst(params, ["email"]);
    const phone = pickFirst(params, ["phone", "phone_raw", "mobile", "mobilePhone"]);

    const checkoutParams = new URLSearchParams();
    if (firstName) checkoutParams.set("firstName", firstName);
    if (lastName) checkoutParams.set("lastName", lastName);
    if (email) checkoutParams.set("email", email);
    if (phone) checkoutParams.set("phone", phone);

    return checkoutParams.toString()
      ? `${paymentBaseUrl}?${checkoutParams.toString()}`
      : paymentBaseUrl;
  }, [asPath]);

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

    const existingScript = document.querySelector(`script[src="${ghlEmbedScriptSrc}"]`);

    if (existingScript) {
      runInit();
    } else {
      const script = document.createElement("script");
      script.src = ghlEmbedScriptSrc;
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
    <div className="page payment-page">
      <section className="payment-wrap">
        <div className="container payment-shell">
          <div className="payment-head">
            <p className="payment-kicker">Step 2 of 2</p>
            <h1>Complete Secure Checkout</h1>
            <p>
              Finish checkout to activate your Burrow Base account and start getting
              reviews.
            </p>
          </div>

          <div className="payment-embed">
            <iframe
              ref={iframeRef}
              src={paymentUrl}
              className="payment-iframe"
              style={{ width: "100%", border: "none", overflow: "hidden", height: "980px" }}
              scrolling="no"
              title="Burrow Base secure checkout"
            />
          </div>

          <p className="payment-help">
            If checkout does not load,{" "}
            <a href={paymentUrl} rel="noreferrer">
              open secure checkout
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
