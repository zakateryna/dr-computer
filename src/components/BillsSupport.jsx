import { useState } from "react";

export default function BillsSupport() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    fileName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      fileName: file ? file.name : "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Richiesta bolletta:", formData);
    alert("Richiesta inviata. Collega poi questo form al backend o email.");
  }

  return (
    <section className="section" id="bollette">
      <div className="section-shell">
        <h2 className="section-title">Supporto Bollette e Fornitori</h2>
        <p className="section-intro">
          Invia la tua bolletta e raccontaci la tua esigenza: possiamo offrirti
          supporto pratico, chiarimenti e orientamento nella valutazione del
          fornitore più adatto.
        </p>

        <div className="bills-layout">
          <div className="info-panel bills-info-panel">
            <p>
              Ti aiutiamo a leggere meglio la bolletta, comprendere costi e voci
              principali, confrontare offerte e valutare possibili alternative
              in base alle tue necessità.
            </p>

            <ul className="bills-points">
              <li>Analisi della bolletta</li>
              <li>Supporto nella valutazione dei fornitori</li>
              <li>Contatto diretto per chiarimenti e consulenza</li>
            </ul>

            <div className="bills-note">
              <strong>Richiesta semplice e senza impegno.</strong>
              <span>
                Carica il file, lascia un recapito e ti ricontattiamo con una
                valutazione iniziale.
              </span>
            </div>
          </div>

          <form className="bills-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact">Telefono o email</label>
              <input
                id="contact"
                name="contact"
                type="text"
                placeholder="Inserisci un recapito"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="bill">Carica la bolletta</label>
              <input
                id="bill"
                name="bill"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
              {formData.fileName && (
                <p className="file-name">
                  File selezionato: {formData.fileName}
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="message">Messaggio</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Scrivi qui la tua richiesta"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="hero-btn-primary bills-submit">
              Richiedi consulenza
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}