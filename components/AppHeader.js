import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const links = [
  {
    href: "/#welcome",
    label: "Home",
  },
  {
    href: "/#about",
    label: "Beschreibung",
  },
  {
    href: "/#prices",
    label: "Preise",
  },
  {
    href: "/#contact",
    label: "Kontakt",
  },
  {
    href: "/#map",
    label: "Karte",
  },
];
function AppHeader() {
  const { pathname } = useRouter();
  const collapseEl = useRef();
  const collapseInstance = useRef();

  useEffect(() => {
    // Bootstrap needs to be loaded dynamically to avoid SSR `document is not defined` issue
    import("bootstrap/js/dist/collapse").then(({ default: Collapse }) => {
      // https://getbootstrap.com/docs/5.0/components/collapse/#via-javascript
      collapseInstance.current = new Collapse(collapseEl.current, {
        offset: 56,
        toggle: false,
      });
    });
  }, []);

  useEffect(() => {
    if (collapseInstance.current) {
      collapseInstance.current.hide();
    }
  }, [pathname]);

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/#">
            <a className="navbar-brand">Pension Halstrup</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLinks"
            aria-controls="navbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarLinks"
            ref={collapseEl}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a
                    className="nav-link"
                    href={link.href}
                    aria-current="page"
                    onClick={() => collapseInstance.current.hide()}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
