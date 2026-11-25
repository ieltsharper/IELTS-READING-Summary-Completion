import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function loadExercises() {
  const s = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const m = s.match(/const EXERCISES = (\[[\s\S]*?\]);\s*\n/);
  return JSON.parse(m[1]);
}
const ent = { '&nbsp;': ' ', '&ndash;': '–', '&mdash;': '—', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&lsquo;': '‘', '&rsquo;': '’', '&ldquo;': '“', '&rdquo;': '”' };
export const stripHtml = (h) => h.replace(/<[^>]+>/g, '').replace(/&#?\w+;/g, (e) => ent[e] ?? e);
export const norm = (s) => String(s).replace(/[‘’‛′`]/g, "'").replace(/[“”„]/g, '"').replace(/[–—−]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase();
