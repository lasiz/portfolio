export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  role: string;
  schemaType: "SoftwareApplication" | "WebApplication" | "CreativeWork";
  applicationCategory?: string;
  operatingSystem?: string;
  inLanguage?: string[];
  tags: string[];
  lastModified?: string;
}

export const projects: Project[] = [
  {
    id: "chinora-academy",
    name: "Chinora Academy",
    url: "https://chinoraacademy.uz",
    description:
      "Tikuvchilik va dizaynerlik bo'yicha onlayn ta'lim platformasi (uz/ru). Mening rolim: frontend dasturchi. Backend boshqa dasturchi tomonidan yozilgan.",
    role: "Frontend Developer",
    schemaType: "WebApplication",
    inLanguage: ["uz", "ru"],
    tags: ["React", "Frontend", "E-learning"],
    lastModified: "2024-05-15",
  },
  {
    id: "qrsnip",
    name: "QRSnip: QR Code & Barcode Scanner",
    url: "https://chromewebstore.google.com/detail/qrsnip-qr-code-barcode-sc/pjecadbnlcipeofmeammkpchfgeagmmg",
    description:
      "Chrome kengaytmasi. Ekrandagi QR kod va shtrix-kodlarni snip orqali offline o'qiydi, 14 tilda.",
    role: "Creator & Developer",
    schemaType: "SoftwareApplication",
    applicationCategory: "BrowserExtension",
    operatingSystem: "Cross-platform (Google Chrome)",
    tags: ["Chrome Extension", "JavaScript", "Scanner", "Offline"],
    lastModified: "2024-08-20",
  },
  {
    id: "tmdb-teasers",
    name: "TMDB Teasers",
    // TODO: Telegram kanal yoki bot havolasi qo'shilishi kerak (hozircha GitHub repo ko'rsatilgan)
    url: "https://github.com/lazizbekdev/tmdb",
    description: "Telegram bot va kanal, filmlar haqida tizer/ma'lumot.",
    role: "Creator & Developer",
    schemaType: "SoftwareApplication",
    applicationCategory: "TelegramBot",
    tags: ["Telegram Bot", "API Integration", "Bot"],
    lastModified: "2024-09-01",
  },
];

