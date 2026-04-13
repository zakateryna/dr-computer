import { Wrench, Monitor, Printer, Settings } from "lucide-react";

export default function About() {
  return (
    <section className="section" id="chi-siamo">
      <div className="section-shell">
        <h2 className="section-title">Chi siamo</h2>

        <div className="about-layout">
          <div className="about-panel">
            <span className="about-kicker">
              Assistenza · Riparazione · Consulenza
            </span>

            <p className="about-lead">
              Supporto tecnico semplice, rapido e affidabile per privati,
              uffici e attività.
            </p>

            <p className="about-text">
              dr COMPUTER offre assistenza su computer, software, stampanti e
              dispositivi, con un servizio pratico e diretto sul territorio.
            </p>

            <div className="about-points-title">Possiamo aiutarti con:</div>

            <div className="about-cards">
              <div className="about-card">
                <div className="about-card-icon">
                  <Wrench size={18} strokeWidth={2} />
                </div>
                <span>Riparazione computer</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <Monitor size={18} strokeWidth={2} />
                </div>
                <span>Supporto software</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <Printer size={18} strokeWidth={2} />
                </div>
                <span>Stampanti professionali</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <Settings size={18} strokeWidth={2} />
                </div>
                <span>Consulenza tecnica</span>
              </div>
            </div>
          </div>

          <div className="about-media about-media-single">
            <div className="about-image about-image-main">
              <img
                src="/img1.png"
                alt="Assistenza tecnica computer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}