import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4545;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "uploads");
await fs.mkdir(uploadsDir, { recursive: true });

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

const upload = multer({
  dest: uploadsDir,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Formato non supportato. Usa PDF, JPG o PNG."));
    }

    cb(null, true);
  },
});

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === "true",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/bills-request", upload.single("bill"), async (req, res) => {
  const uploadedFile = req.file;

  try {
    const { name, contact, message } = req.body;

    if (!name || !contact || !uploadedFile) {
      if (uploadedFile) {
        await fs.unlink(uploadedFile.path).catch(() => {});
      }

      return res.status(400).json({
        ok: false,
        message: "Compila nome, contatto e allega la bolletta.",
      });
    }

    await transporter.sendMail({
      from: `"Sito dr COMPUTER" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Nuova richiesta bolletta - dr COMPUTER",
      text: `
Nuova richiesta dal sito dr COMPUTER

Nome: ${name}
Contatto: ${contact}

Messaggio:
${message || "(nessun messaggio)"}

Servizio richiesto:
Analisi bolletta / valutazione offerte luce, gas, internet
      `.trim(),
      attachments: [
        {
          filename: uploadedFile.originalname,
          path: uploadedFile.path,
          contentType: uploadedFile.mimetype,
        },
      ],
    });

    await fs.unlink(uploadedFile.path).catch(() => {});

    return res.json({
      ok: true,
      message: "Richiesta inviata con successo.",
    });
  } catch (error) {
    if (uploadedFile) {
      await fs.unlink(uploadedFile.path).catch(() => {});
    }

    console.error("Errore invio richiesta:", error);

    return res.status(500).json({
      ok: false,
      message: "Errore durante l'invio della richiesta.",
    });
  }
});

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      ok: false,
      message: "Errore upload file: " + error.message,
    });
  }

  if (error) {
    return res.status(400).json({
      ok: false,
      message: error.message || "Errore richiesta.",
    });
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});