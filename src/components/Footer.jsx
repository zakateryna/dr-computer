export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-brand">
              <span>dr</span> COMPUTER
            </h3>
            <p className="footer-text">
              Assistenza informatica, vendita, consulenza hardware e software,
              supporto stampanti professionali e servizio sul territorio.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contatti</h4>
            <p className="footer-text">Via Piave, 39</p>
            <p className="footer-text">70038 Terlizzi (BA)</p>

            <a
              href="https://wa.me/393935820768"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              WhatsApp
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Navigazione</h4>
            <a href="/servizi" className="footer-link">
              Servizi
            </a>
            <a href="/chi-siamo" className="footer-link">
              Chi siamo
            </a>
            <a href="/bollette" className="footer-link">
              Bollette e fornitori
            </a>
            <a href="/dove-siamo" className="footer-link">
              Dove siamo
            </a>
            <a href="/contatti" className="footer-link">
              Contatti
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} dr COMPUTER — Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  );
}