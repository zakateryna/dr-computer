import {
  MapPin,
  PhoneCall,
  MessageCircle,
  Navigation,
} from "lucide-react";

export default function Location() {
  return (
    <section className="section" id="dove-siamo">
      <div className="section-shell">
        <h2 className="section-title">Dove siamo</h2>
        <p className="section-intro">
          Vieni a trovarci oppure contattaci direttamente per informazioni,
          assistenza e consulenza.
        </p>

        <div className="contact-layout">
          <div className="contact-card location-card">
            <div className="location-list">
              <div className="location-item">
                <div className="location-item-icon">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="contact-label">Indirizzo</span>
                  <p>Via Piave, 39, 70038 Terlizzi BA</p>
                </div>
              </div>

              <div className="location-item">
                <div className="location-item-icon">
                  <PhoneCall size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="contact-label">Telefono</span>
                  <a href="tel:+393935820768" className="contact-link">
                    +39 393 582 0768
                  </a>
                </div>
              </div>

              <div className="location-item">
                <div className="location-item-icon">
                  <MessageCircle size={18} strokeWidth={2} />
                </div>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <p>
                    Scrivici rapidamente per richieste, informazioni o supporto.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Piave+39+70038+Terlizzi+BA"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                <Navigation size={18} strokeWidth={2} />
                <span>Apri su Maps</span>
              </a>

              <a
                href="https://wa.me/393935820768"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={18} strokeWidth={2} />
                <span>Apri WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="map-card">
            <iframe
              title="Mappa Dr Computer"
              src="https://www.google.com/maps?q=Via%20Piave%2C%2039%2C%2070038%20Terlizzi%20BA&z=16&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}