Generare PDF delle pagine HTML dei `docs/`

Requisiti:
- Node.js (14+)
- Installare le dipendenze: `npm install`

Esempio:
1. npm install
2. npm run pdf

I PDF verranno salvati sotto `docs/pdfs/` mantenendo la struttura delle cartelle.

Note:
- Lo script usa Puppeteer (Chromium). Se sei in un ambiente con restrizioni, puoi usare `puppeteer-core` e impostare `executablePath` nello script per il tuo Chrome/Chromium.
