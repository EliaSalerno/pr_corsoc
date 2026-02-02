const fs = require('fs');
const path = require('path');

function walk(dir, files=[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'pdfs') continue;
      walk(p, files);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(p);
    }
  }
  return files;
}

const root = path.resolve(__dirname, '..', 'docs');
const files = walk(root, []);
let changed = 0;
files.forEach(f => {
  let txt = fs.readFileSync(f, 'utf8');
  // replace markdown links like [text](./foo.md#anchor) -> .html
  const updated = txt.replace(/\[([^\]]+)\]\(([^)]+?\.md)(#[^)]+)?\)/g, (m, text, href, hash) => {
    const newHref = href.replace(/\.md$/, '.html');
    return `[${text}](${newHref}${hash || ''})`;
  });
  if (updated !== txt) {
    fs.writeFileSync(f, updated, 'utf8');
    changed++;
    console.log('Updated links in', path.relative(root, f));
  }
});
console.log(`Done. Files updated: ${changed}`);
