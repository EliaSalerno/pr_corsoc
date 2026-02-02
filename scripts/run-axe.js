const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const outDir = path.resolve(__dirname, '..', 'docs', 'pdfs');

async function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'pdfs') continue;
      await walk(p, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(p);
    }
  }
  return files;
}

(async () => {
  const root = path.resolve(__dirname, '..', 'docs');
  const files = await walk(root, []);
  if (!files.length) { console.log('No HTML files found under docs/'); return; }

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const reports = [];
  for (const f of files) {
    const rel = path.relative(root, f);
    const url = 'file://' + f;
    console.log('Testing accessibility:', rel);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // inject axe
    const axeSource = require('axe-core').source;
    await page.addScriptTag({ content: axeSource });

    const result = await page.evaluate(async () => {
      return await axe.run();
    });

    const violations = result.violations || [];
    console.log(`  Violations found: ${violations.length}`);
    reports.push({ file: rel, summary: { violations: violations.length }, violations });

    // Save per-file report
    const outFile = path.join(outDir, rel + '.axe.json');
    const outDirForFile = path.dirname(outFile);
    if (!fs.existsSync(outDirForFile)) fs.mkdirSync(outDirForFile, { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
  }

  await browser.close();
  const summaryPath = path.join(outDir, 'axe-summary.json');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(summaryPath, JSON.stringify(reports, null, 2));
  console.log('Accessibility tests complete. Reports saved to docs/pdfs/*.axe.json and docs/pdfs/axe-summary.json');
})();