# One-shot guides – progress (Summary Completion)

2026-11-25: all 11 exercises (ex1–ex11) have a Hướng dẫn One-Shot guide, shown on the results screen after submitting.

- `node _generator/oneshot-dump.mjs --list | <exId>` prints a passage, summary and key.
- Guide source: `_generator/strategy/<exId>.json` (same schema as the IELTS-Reading-Passages repo; `ans` must equal the key string, e.g. "F - communication").
- `node _generator/oneshot-apply.mjs --check` validates; without `--check` it writes `oneshot.js` (loaded by index.html). Re-run it after editing any guide, then commit `oneshot.js`.
- The guides are HIDDEN until released: set `const ONESHOT_RELEASED = true;` in index.html (near ANSWER_KEY_LINK) and push. oneshot.js is only fetched when released. Once released they reveal answers after submit.
