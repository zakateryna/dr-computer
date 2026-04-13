export default function Services() {
  return (
    <section className="section" id="servizi">
      <div className="section-shell">
        <h2 className="section-title">Servizi</h2>
        <p className="section-intro">
          Assistenza tecnica, consulenza e supporto professionale per privati,
          attività e aziende del territorio.
        </p>

        <div className="cards-grid">
          <article className="service-card service-card-fire">
            <div className="service-icon">💻</div>
            <h3>Assistenza PC e Notebook</h3>
            <p>
              Riparazione computer, installazione software, aggiornamenti,
              configurazioni e ottimizzazione completa delle postazioni.
            </p>
            <a href="#contatti" className="service-link">
              Richiedi assistenza
            </a>
          </article>

          <article className="service-card service-card-water">
            <div className="service-icon">🖨️</div>
            <h3>Stampanti Professionali</h3>
            <p>
              Configurazione, manutenzione e supporto tecnico per stampanti da
              ufficio e attività commerciali.
            </p>
            <a href="#contatti" className="service-link">
              Parla con noi
            </a>
          </article>

          <article className="service-card service-card-mix">
            <div className="service-icon">🛠️</div>
            <h3>Assistenza sul Territorio</h3>
            <p>
              Interventi rapidi e supporto diretto per risolvere problemi tecnici
              in modo pratico e veloce.
            </p>
            <a href="#contatti" className="service-link">
              Contattaci ora
            </a>
          </article>

          <article className="service-card service-card-water">
            <div className="service-icon">⚡</div>
            <h3>Supporto Bollette e Fornitori</h3>
            <p>
              Analisi della bolletta, supporto nella lettura dei costi e
              consulenza per valutare il fornitore più adatto.
            </p>
            <a href="#bollette" className="service-link">
              Analizza la tua bolletta
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}