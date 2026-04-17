import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BillsPage() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        message: "",
    });

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [status, setStatus] = useState({
        loading: false,
        success: "",
        error: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleFileChange(e) {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : "");
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!file) {
            setStatus({
                loading: false,
                success: "",
                error: "Allega una bolletta prima di inviare.",
            });
            return;
        }

        setStatus({
            loading: true,
            success: "",
            error: "",
        });

        try {
            const body = new FormData();
            body.append("name", formData.name);
            body.append("contact", formData.contact);
            body.append("message", formData.message);
            body.append("bill", file);

            const response = await fetch("https://dr-computer-8dho.onrender.com/api/bills-request", {
                method: "POST",
                body,
            });

            const data = await response.json();

            if (!response.ok || !data.ok) {
                throw new Error(data.message || "Invio non riuscito.");
            }

            setStatus({
                loading: false,
                success: "Richiesta inviata con successo. Ti ricontatteremo presto.",
                error: "",
            });

            setFormData({
                name: "",
                contact: "",
                message: "",
            });
            setFile(null);
            setFileName("");
            e.target.reset();
        } catch (error) {
            setStatus({
                loading: false,
                success: "",
                error: error.message || "Errore durante l'invio.",
            });
        }
    }

    return (
        <>
            <Navbar />

            <main className="site-main bills-page">
                <section className="section bills-page-hero">
                    <div className="section-shell">
                        <h1 className="section-title">Bollette e fornitori</h1>
                        <p className="section-intro">
                            Invia la tua bolletta e raccontaci la tua esigenza: possiamo
                            aiutarti a leggere meglio i costi, valutare il fornitore e capire
                            le alternative più adatte.
                        </p>
                    </div>
                </section>

                <section className="section bills-support-section" id="bollette">
                    <div className="section-shell">
                        <div className="bills-layout">
                            <div className="info-panel bills-info-panel">
                                <h2 className="bills-info-title">Come possiamo aiutarti</h2>

                                <p className="bills-info-text">
                                    Ti aiutiamo a leggere meglio la bolletta, comprendere costi e
                                    voci principali, confrontare offerte e valutare possibili
                                    alternative in base alle tue necessità.
                                </p>

                                <ul className="bills-points">
                                    <li>Analisi della bolletta</li>
                                    <li>Supporto nella valutazione dei fornitori</li>
                                    <li>Contatto diretto per chiarimenti e consulenza</li>
                                </ul>

                                <div className="bills-note">
                                    <strong>Richiesta semplice e senza impegno.</strong>
                                    <span>
                                        Carica il file, lascia un recapito e ti ricontattiamo con
                                        una valutazione iniziale.
                                    </span>
                                </div>
                            </div>

                            <form
                                className="bills-form"
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                            >
                                <div className="form-field">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Il tuo nome"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
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
                                        required
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
                                        required
                                    />

                                    {fileName ? (
                                        <p className="file-name">File selezionato: {fileName}</p>
                                    ) : null}

                                    <p className="file-name">
                                        Formati supportati: PDF, JPG, PNG — max 5 MB
                                    </p>
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

                                <button
                                    type="submit"
                                    className="hero-btn-primary bills-submit"
                                    disabled={status.loading}
                                >
                                    {status.loading ? "Invio..." : "Richiedi consulenza"}
                                </button>

                                {status.success ? (
                                    <p className="bills-success">{status.success}</p>
                                ) : null}

                                {status.error ? (
                                    <p className="bills-error">{status.error}</p>
                                ) : null}
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}