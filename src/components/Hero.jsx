export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      <div className="hero-content">
        <h1 className="hero-title">dr COMPUTER</h1>

        <p className="hero-subtitle">
          Assistenza tecnica, vendita e riparazione hardware e software,
          supporto per stampanti professionali e consulenza diretta sul
          territorio.
        </p>

        <div className="hero-actions">
          <a href="#contatti" className="hero-btn-primary">
            Contattaci
          </a>

          <a href="#dove-siamo" className="hero-btn-secondary">
            Dove siamo
          </a>
        </div>
      </div>
    </section>
  );
}