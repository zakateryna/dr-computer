import {
  PhoneCall,
  MessageCircle,
  Headphones,
  Clock3,
  Wrench,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="section" id="contatti">
      <div className="section-shell">
        <div className="contact-section-layout">
          <div className="contact-media">
            <img src="/negozio.png" alt="Negozio dr COMPUTER" />
          </div>

          <div className="contact-content">
            <h2 className="section-title">Contattaci</h2>

            <p className="section-intro">
              Hai bisogno di assistenza tecnica, informazioni o una consulenza?
              Contattaci direttamente: ti aiutiamo a trovare la soluzione più
              adatta.
            </p>

            <div className="info-panel contact-modern-card">
              <div className="contact-modern-top">
                <div className="contact-modern-badge">
                  <Headphones size={18} strokeWidth={2} />
                </div>

                <div className="contact-modern-copy">
                  <h3 className="contact-modern-title">
                    Assistenza rapida e diretta
                  </h3>

                  <p className="contact-modern-text">
                    Supporto pratico e contatto semplice per ricevere aiuto su
                    computer, software, stampanti, dispositivi e consulenze.
                  </p>
                </div>
              </div>

              <div className="contact-modern-features">
                <div className="contact-feature">
                  <span className="contact-feature-icon">
                    <Clock3 size={16} strokeWidth={2} />
                  </span>
                  <span>Risposta veloce</span>
                </div>

                <div className="contact-feature">
                  <span className="contact-feature-icon">
                    <Wrench size={16} strokeWidth={2} />
                  </span>
                  <span>Supporto pratico e chiaro</span>
                </div>
              </div>

              <div className="contact-modern-actions">
                <a
                  href="tel:+393935820768"
                  className="contact-modern-phone"
                  aria-label="Chiama Dr Computer"
                  title="Chiama Dr Computer"
                >
                  <span className="contact-modern-icon">
                    <PhoneCall size={18} strokeWidth={2} />
                  </span>
                  <span>Chiama ora</span>
                </a>

                <a
                  href="https://wa.me/393935820768"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-modern-whatsapp"
                >
                  <span className="contact-modern-icon">
                    <MessageCircle size={18} strokeWidth={2} />
                  </span>
                  <span>Scrivici su WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}