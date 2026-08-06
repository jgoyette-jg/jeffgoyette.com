---
title: Reel Estate
summary: A platform that turns listing photos into staged images and AI-generated walkthrough video, built for residential real estate agents.
rank: 1
period: 'Since 2026'
role: Cofounder and CTO
stack: ['Next.js', 'MongoDB', 'AWS S3', 'Vercel']
draft: false
# Corrected down from "hundreds" — both current résumés say dozens, and they
# are the more recent documents. Swap in the exact count when you have it; a
# precise number beats either word on every reading of this page.
metric:
  # Keep the label short — the column is right-aligned and narrow, so a long
  # label ragged-wraps to four lines on a phone. The brokerage names are in
  # the body copy below, which is where they read properly.
  value: 'Dozens'
  label: 'agents, national brokerages'
---

Virtual staging is an old idea with a new constraint: the moment the image is
generated rather than photographed, it stops being a marketing asset and starts
being a regulated disclosure. Most of the engineering here is downstream of
that.

## The pipeline

A job takes a listing photo, runs it through image staging, and — when the
agent wants motion — hands the result to image-to-video generation. That chain
is slow, expensive, and fails in interesting ways, so none of it runs inline.
Work is queued, assets land in S3, and status returns by webhook. The front end
never waits on a model.

## Billing that survives concurrency

Credits are spent with atomic MongoDB operations behind guard clauses. The
naive version of this — read balance, generate, decrement — double-spends the
moment an agent fires two generations at once, which they do constantly. The
guard clause is the whole feature.

## Tooling the codebase itself

We run a custom MCP server for Reel Estate, so agentic tooling works against
the platform's own context rather than guessing at it from source alone. It
sits alongside integrated Atlassian, YouTrack, and GA4 servers and a library of
custom Claude skills that encode house style, MLS compliance rules, and Next.js
scaffolding patterns — which is what keeps AI-assisted contributions idiomatic
instead of merely syntactically valid.

## What I own

The technical roadmap, the compliance subsystem, the acquisition stack, and
production DNS across Route 53 and Vercel. I work directly with the CEO on
roadmap, hiring, and enterprise brokerage deals.

The platform currently serves dozens of agents across firms including Compass,
eXp Realty, and Dave Perry-Miller.

<!-- TODO: clips rendered, MRR, or retention would all be stronger than an
     agent count. Replace the metric above once you have one of them. -->
