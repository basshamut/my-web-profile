import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { statSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const htmlPath = resolve(root, 'CV_Jesus_Fajardo_Web.html');
const pdfPath = resolve(root, 'public', 'CV_Jesus_Fajardo.pdf');

try {
  const srcTime = statSync(htmlPath).mtimeMs;
  let dstTime = 0;
  try { dstTime = statSync(pdfPath).mtimeMs; } catch { /* not exists */ }
  if (dstTime >= srcTime) {
    console.log('PDF is up to date, skipping generation.');
    process.exit(0);
  }
} catch {
  console.error('Source HTML not found:', htmlPath);
  process.exit(1);
}

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '10mm', bottom: '10mm' },
});

await browser.close();
console.log(`PDF generated: ${pdfPath}`);
