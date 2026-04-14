import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link to="/home" className="nav-brand" onClick={handleClose}>
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
          <Link to="/servizi" className="nav-link" onClick={handleClose}>
            Servizi
          </Link>
          <Link to="/chi-siamo" className="nav-link" onClick={handleClose}>
            Chi siamo
          </Link>
          <Link to="/bollette" className="nav-link" onClick={handleClose}>
            Bollette
          </Link>
          <Link to="/dove-siamo" className="nav-link" onClick={handleClose}>
            Dove siamo
          </Link>
          <Link
            to="/contatti"
            className="nav-link nav-cta"
            onClick={handleClose}
          >
            Contatti
          </Link>
        </div>
      </nav>
    </header>
  );
}