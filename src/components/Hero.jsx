import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      <div className="hero-content">
        <img src="/logonav.svg" alt="dr COMPUTER" className="hero-logo" />

        <p className="hero-subtitle">
          Assistenza tecnica, vendita e riparazione hardware e software,
          supporto per stampanti professionali e consulenza diretta sul
          territorio.
        </p>

        <div className="hero-actions">
          <Link to="/contatti" className="hero-btn-primary">
            Contattaci
          </Link>

          <Link to="/bollette" className="hero-btn-secondary">
            Bollette
          </Link>
        </div>
      </div>
    </section>
  );
}