export default function WhyChooseUs() {
  return (
    <section className="section" id="perche-noi">
      <div className="section-shell">
        <h2 className="section-title">Perché sceglierci</h2>
        <p className="section-intro">
          Un supporto pratico, diretto e orientato alla soluzione, per aiutarti
          a risolvere esigenze tecniche e richieste quotidiane con maggiore
          chiarezza e rapidità.
        </p>

        <div className="why-grid">
          <article className="why-card why-card-fire">
            <div className="why-icon">⚙️</div>
            <h3>Supporto pratico e diretto</h3>
            <p>
              Ogni richiesta viene affrontata con un approccio concreto: meno
              complicazioni, più soluzioni chiare e operative.
            </p>
          </article>

          <article className="why-card why-card-water">
            <div className="why-icon">🧠</div>
            <h3>Esperienza tecnica e consulenziale</h3>
            <p>
              Non solo assistenza informatica, ma anche orientamento utile per
              capire meglio problemi, costi e alternative disponibili.
            </p>
          </article>

          <article className="why-card why-card-mix">
            <div className="why-icon">📍</div>
            <h3>Presenza sul territorio</h3>
            <p>
              Un punto di riferimento vicino, rapido e affidabile per privati,
              attività e aziende che cercano supporto reale.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}