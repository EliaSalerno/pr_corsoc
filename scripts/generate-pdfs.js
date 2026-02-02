const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'pdfs') continue; // skip
      await walk(p, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(p);
    }
  }
  return files;
}

(async () => {
  const root = path.resolve(__dirname, '..', 'docs');
  const outDir = path.join(root, 'pdfs');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const files = await walk(root, []);
  if (!files.length) { console.log('No HTML files found under docs/'); return; }

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const f of files) {
    const rel = path.relative(root, f);
    const outPath = path.join(outDir, rel.replace(/\.html$/, '.pdf'));
    const outDirForFile = path.dirname(outPath);
    if (!fs.existsSync(outDirForFile)) fs.mkdirSync(outDirForFile, { recursive: true });

    const url = 'file://' + f;
    console.log('Printing', rel, '->', path.relative(root, outPath));
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: outPath, format: 'A4', printBackground: true });
  }

  await browser.close();
  console.log('PDF generation complete. Files saved in docs/pdfs/');
})();