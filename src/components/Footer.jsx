import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-brand">dr COMPUTER</h3>
            <p className="footer-text">
              Assistenza informatica, vendita, consulenza hardware e software,
              supporto stampanti professionali e servizio sul territorio.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contatti</h4>
            <a href="mailto:info@dr-computer.it" className="footer-link">
              info@dr-computer.it
            </a>
            <a href="tel:+393935820768" className="footer-link">
              +39 393 582 0768
            </a>
            <p className="footer-text">Via Piave, 39</p>
            <p className="footer-text">70038 Terlizzi (BA)</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Navigazione</h4>
            <Link to="/home" className="footer-link">
              Home
            </Link>
            <Link to="/servizi" className="footer-link">
              Servizi
            </Link>
            <Link to="/bollette" className="footer-link">
              Bollette e fornitori
            </Link>
            <Link to="/contatti" className="footer-link">
              Contatti e sede
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} dr COMPUTER — Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
}