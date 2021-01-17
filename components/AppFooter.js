import Link from "next/link";

function AppFooter() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5 text-center">
        <nav className="navbar justify-content-center">
          <Link href="/privacy">
            <a className="nav-link link-light text-decoration-underline">
              Datenschutz
            </a>
          </Link>
          <Link href="/legal">
            <a className="nav-link link-light text-decoration-underline">
              Impressum
            </a>
          </Link>
        </nav>
        <small>Made with ❤</small>
      </div>
    </footer>
  );
}

export default AppFooter;
