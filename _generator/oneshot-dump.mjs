// node _generator/oneshot-dump.mjs --list | <exId>   prints passage (paragraphs), summary with blanks, and the key
import { loadExercises, stripHtml } from './lib.mjs';
const E = loadExercises();
const id = process.argv[2];
if (!id || id === '--list') { for (const e of E) console.log(e.id, e.title, '| Q' + e.questions.map((q) => q.num).join(',')); process.exit(0); }
const e = E.find((x) => x.id === id);
if (!e) { console.log('unknown exercise'); process.exit(1); }
console.log('# ' + e.title + '\n');
console.log(e.passage.split(/<\/p>/).map((p) => stripHtml(p).trim()).filter(Boolean).join('\n\n'));
console.log('\n## Task: ' + e.instructions + '\n');
console.log(stripHtml(e.summaryHtml.replace(/<\/(p|h4)>/g, '\n').replace(/\{\{(\d+)\}\}/g, '[$1]')));
console.log('## Key');
for (const q of e.questions) console.log(`Q${q.num} (${q.type}): ${q.answers.join(' / ')}`);
