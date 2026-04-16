import {
  PhoneCall,
  MessageCircle,
  Headphones,
  Navigation,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="section" id="contatti">
      <div className="section-shell">
        <div className="contact-section-layout">
          <div className="contact-media">
            <img src="/negozio.png" alt="Negozio dr COMPUTER" />
          </div>

          <div className="contact-content">
            <h2 className="section-title">Contatti e sede</h2>

            <p className="section-intro">
              Hai bisogno di assistenza tecnica o informazioni? Contattaci
              direttamente oppure vieni a trovarci in negozio.
            </p>

            <div className="info-panel contact-modern-card contact-intro-card">
              <div className="contact-modern-top">
                <div className="contact-modern-badge">
                  <Headphones size={18} strokeWidth={2} />
                </div>

                <div className="contact-modern-copy">
                  <h3 className="contact-modern-title">
                    Assistenza rapida e diretta
                  </h3>

                  <p className="contact-modern-text">
                    Supporto pratico per computer, software, stampanti e
                    dispositivi.
                  </p>
                </div>
              </div>
            </div>

            <div className="info-panel contact-modern-card contact-details-card">
              <div className="contact-details-row">
                <div className="contact-details-info">
                  <span className="contact-label">Indirizzo</span>
                  <p>Via Piave, 39, 70038 Terlizzi BA</p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+Piave+39+70038+Terlizzi+BA"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-side-btn contact-side-btn-maps"
                >
                  <Navigation size={16} strokeWidth={2} />
                  <span>Apri su Maps</span>
                </a>
              </div>

              <div className="contact-details-row">
                <div className="contact-details-info">
                  <span className="contact-label">Telefono</span>
                  <a href="tel:+393935820768" className="contact-link">
                    +39 393 582 0768
                  </a>
                </div>

                <a
                  href="tel:+393935820768"
                  className="contact-side-btn contact-side-btn-phone"
                >
                  <PhoneCall size={16} strokeWidth={2} />
                  <span>Chiama ora</span>
                </a>
              </div>

              <div className="contact-details-row">
                <div className="contact-details-info">
                  <span className="contact-label">WhatsApp</span>
                  <p>Scrivici rapidamente per richieste e supporto.</p>
                </div>

                <a
                  href="https://wa.me/393935820768"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-side-btn contact-side-btn-whatsapp"
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}