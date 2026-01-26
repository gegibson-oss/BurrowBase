import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Burrow Base">
            <img
              src="/logo.png"
              alt=""
              className="brand-logo"
            />
          </Link>
          <nav className="nav">
            <div className="nav-left">
              <div className="nav-item nav-dropdown">
                <button
                  type="button"
                  className="nav-link nav-dropdown-toggle"
                  aria-haspopup="true"
                >
                  Products
                </button>
                <div className="nav-dropdown-menu" role="menu">
                  <Link href="/reviews" className="nav-dropdown-link" role="menuitem">
                    Automated Reviews
                  </Link>
                  <Link
                    href="/digital-operations-manager"
                    className="nav-dropdown-link"
                    role="menuitem"
                  >
                    {"Digital Operations Manager"}
                  </Link>
                </div>
              </div>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/how-it-works" className="nav-link">
                How It Works
              </Link>
              <a href="https://app.burrowbase.com" className="nav-link" rel="noreferrer">
                Login
              </a>
            </div>
            <div className="nav-right">
              <Link href="/start" className="nav-link nav-link-primary">
                Start Free
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Burrow Base">
              <img src="/logo.png" alt="" className="footer-logo-image" />
            </Link>
            <p className="footer-line">
              Run your business. Not the office.
            </p>
          </div>
          <div className="footer-columns">
            <div className="footer-col">
              <p className="footer-title">Products</p>
              <Link href="/reviews">Automated Reviews</Link>
              <Link href="/digital-operations-manager">
                {"Digital Operations Manager"}
              </Link>
            </div>
            <div className="footer-col">
              <p className="footer-title">Company</p>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <div className="footer-col">
              <p className="footer-title">Start</p>
              <Link href="/start">Start Free</Link>
              <a href="https://app.burrowbase.com" rel="noreferrer">
                Login
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
