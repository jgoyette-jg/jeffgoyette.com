---
title: AI provenance and MLS compliance
summary: The subsystem that lets AI-altered listing photos go out legally — watermarking, C2PA provenance, and export gates that know what state a listing is in.
rank: 3
period: '2026'
role: Designed and built
stack: ['C2PA', 'AB 723 / SB 942', 'Next.js']
# Countable, not estimated: AB 723, SB 942, the NAR Code of Ethics, and C2PA.
metric:
  value: '4'
  label: 'compliance regimes covered'
draft: false
---

California AB 723 and SB 942, the NAR Code of Ethics, and MLS rules all landed
on generative real estate imagery at roughly the same time, and they don't say
the same thing. Shipping staged photos without a compliance layer stopped being
viable.

## What it does

- **Per-image watermarking** on every generated asset.
- **QR-linked original preservation**, so anyone looking at a staged photo can
  reach the unmodified one.
- **Listing-state-aware export gates** — what you're allowed to export depends
  on where the listing is in its lifecycle, so the rule lives in the system
  rather than in an agent's memory.
- **Server-side attestation logging**, because the defensible position is a log
  you didn't write after the fact.
- **C2PA provenance** embedded in the asset itself.

## Why it's here

Compliance subsystems are unglamorous and rarely make portfolios. This one is
on the list because it's the part of the product that determines whether a
brokerage can adopt it at all — legal review is the gate, not the demo.
