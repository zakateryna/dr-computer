import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleClose() {
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isServices = location.pathname === "/servizi";
  const isBills = location.pathname === "/bollette";
  const isContacts = location.pathname === "/contatti";

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link to="/" className="nav-brand" onClick={handleClose}>
          <span className="nav-brand-mark">dr</span>
          <span className="nav-brand-text">COMPUTER</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
        >
          <Link
            to="/servizi"
            className={`nav-link ${isServices ? "is-active" : ""}`}
            onClick={handleClose}
          >
            Servizi
          </Link>

          <Link
            to="/bollette"
            className={`nav-link ${isBills ? "is-active" : ""}`}
            onClick={handleClose}
          >
            Bollette
          </Link>

          <Link
            to="/contatti"
            className={`nav-link nav-cta ${isContacts ? "is-active-cta" : ""}`}
            onClick={handleClose}
          >
            Contatti
          </Link>
        </div>
      </nav>
    </header>
  );
}