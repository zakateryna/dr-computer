import { Check, Wrench, Printer, MapPin, Bolt } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="section" id="servizi">
      <div className="section-shell">
        <h2 className="section-title">Servizi e supporto</h2>
        <p className="section-intro">
          Assistenza tecnica, consulenza e supporto professionale per privati,
          uffici e attività del territorio.
        </p>

        <div className="services-simple-layout">
          <div className="services-simple-media">
            <img
              src="/img1.png"
              alt="Assistenza tecnica computer"
              loading="lazy"
            />
          </div>

          <div className="services-simple-main info-panel">
            <span className="services-simple-kicker">
              Assistenza · Riparazione · Consulenza
            </span>

            <p className="services-simple-lead">
              Supporto tecnico semplice, rapido e affidabile.
            </p>

            <p className="services-simple-text">
              dr COMPUTER offre assistenza su computer, software, stampanti e
              dispositivi, con un servizio pratico e diretto sul territorio.
            </p>

            <div className="services-simple-list">
              <div className="services-simple-item">
                <span className="services-simple-item-icon">
                  <Wrench size={16} strokeWidth={2} />
                </span>
                <span>Riparazione computer e notebook</span>
              </div>

              <div className="services-simple-item">
                <span className="services-simple-item-icon">
                  <Check size={16} strokeWidth={2} />
                </span>
                <span>Supporto software e configurazioni</span>
              </div>

              <div className="services-simple-item">
                <span className="services-simple-item-icon">
                  <Printer size={16} strokeWidth={2} />
                </span>
                <span>Stampanti professionali</span>
              </div>

              <div className="services-simple-item">
                <span className="services-simple-item-icon">
                  <MapPin size={16} strokeWidth={2} />
                </span>
                <span>Assistenza sul territorio</span>
              </div>

              <div className="services-simple-item">
                <span className="services-simple-item-icon">
                  <Bolt size={16} strokeWidth={2} />
                </span>
                <span>Supporto bollette e fornitori</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-simple-grid">
          <article className="service-card service-card-fire">
            <div className="service-icon">💻</div>
            <h3>Assistenza PC e Notebook</h3>
            <p>
              Riparazione computer, installazione software, aggiornamenti,
              configurazioni e ottimizzazione completa delle postazioni.
            </p>
            <Link to="/contatti" className="service-link">
              Richiedi assistenza
            </Link>
          </article>

          <article className="service-card service-card-water">
            <div className="service-icon">🖨️</div>
            <h3>Stampanti Professionali</h3>
            <p>
              Configurazione, manutenzione e supporto tecnico per stampanti da
              ufficio e attività commerciali.
            </p>
            <Link to="/contatti" className="service-link">
              Parla con noi
            </Link>
          </article>

          <article className="service-card service-card-mix">
            <div className="service-icon">🛠️</div>
            <h3>Assistenza sul Territorio</h3>
            <p>
              Interventi rapidi e supporto diretto per risolvere problemi
              tecnici in modo pratico e veloce.
            </p>
            <Link to="/contatti" className="service-link">
              Contattaci ora
            </Link>
          </article>

          <article className="service-card service-card-water">
            <div className="service-icon">⚡</div>
            <h3>Supporto Bollette e Fornitori</h3>
            <p>
              Analisi della bolletta, supporto nella lettura dei costi e
              consulenza per valutare il fornitore più adatto.
            </p>
            <Link to="/bollette" className="service-link">
              Analizza la tua bolletta
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}