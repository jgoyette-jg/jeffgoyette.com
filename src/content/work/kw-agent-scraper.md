---
title: Keller Williams agent index
summary: A resumable crawler that turns kw.com's geography-gated agent directory into a clean, deduplicated dataset for a whole state.
rank: 5
period: '2025'
role: Built and shipped solo
stack: ['Python', 'Playwright', 'CSV/JSON export']
draft: false
# Approximate — recalled, not read off the export. The tilde is deliberate:
# drop it and set the exact figure once you check the file.
metric:
  value: '~2,000'
  label: 'agents indexed'
---

`kw.com/agents` only answers questions you ask by geography, and only a page at
a time. Getting a statewide picture meant treating the directory as a pipeline
problem rather than a scraping problem.

## The shape of it

1. Enumerate the ZIP codes for a state.
2. Resolve each ZIP to the internal boundary ID the site actually searches on —
   the step that isn't visible from the outside, and the one that makes or
   breaks the run.
3. Paginate every result set to exhaustion.
4. Deduplicate across overlapping boundaries and export.

## What made it hold up

A statewide crawl runs for hours, so every stage checkpoints to disk. Interrupt
it and re-run the identical command and it picks up where it stopped rather
than starting over — which is the difference between a script and something you
can actually operate.

A completed run indexes roughly two thousand agents.

<!-- TODO: confirm the exact count against the export and drop the tilde. What
     the dataset was used for downstream would strengthen this further. -->
