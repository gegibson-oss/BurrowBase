import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

const paymentPath = "/payment";

const pickFirst = (params, keys) => {
  for (const key of keys) {
    const value = params.get(key);
    if (value) return value.trim();
  }
  return "";
};

export default function StartCheckoutPage() {
  const router = useRouter();
  const fallbackUrl = useMemo(() => paymentPath, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstName = pickFirst(params, ["firstName", "first_name", "firstname"]);
    const lastName = pickFirst(params, ["lastName", "last_name", "lastname"]);
    const email = pickFirst(params, ["email"]);
    const phone = pickFirst(params, ["phone", "phone_raw", "mobile", "mobilePhone"]);

    const checkoutParams = new URLSearchParams();
    if (firstName) checkoutParams.set("firstName", firstName);
    if (lastName) checkoutParams.set("lastName", lastName);
    if (email) checkoutParams.set("email", email);
    if (phone) checkoutParams.set("phone", phone);

    const target = checkoutParams.toString()
      ? `${paymentPath}?${checkoutParams.toString()}`
      : paymentPath;

    router.replace(target);
  }, [router]);

  return (
    <div className="page start-checkout-page">
      <section className="section">
        <div className="container start-checkout-shell">
          <p>Taking you to secure checkout...</p>
          <a href={fallbackUrl} className="button button-primary">
            Continue to Checkout
          </a>
        </div>
      </section>
    </div>
  );
}
