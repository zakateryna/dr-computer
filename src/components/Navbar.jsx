import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav">
        <a href="#top" className="nav-brand" onClick={handleClose}>
          <span className="nav-brand-mark">dr</span>
          <span className="nav-brand-text">COMPUTER</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Apri menu"
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
          <a href="#servizi" className="nav-link" onClick={handleClose}>
            Servizi
          </a>
          <a href="#chi-siamo" className="nav-link" onClick={handleClose}>
            Chi siamo
          </a>
          <a href="#bollette" className="nav-link" onClick={handleClose}>
            Bollette
          </a>
          <a href="#dove-siamo" className="nav-link" onClick={handleClose}>
            Dove siamo
          </a>
          <a
            href="#contatti"
            className="nav-link nav-cta"
            onClick={handleClose}
          >
            Contatti
          </a>
        </div>
      </nav>
    </header>
  );
}