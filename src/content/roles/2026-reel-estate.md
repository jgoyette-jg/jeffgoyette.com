---
company: Reel Estate
title: Cofounder & Chief Technology Officer
note: Founding technical partner, alongside the Ytel role
start: 'Mar 2026'
location: Remote
order: 110
domain: ai

projects:
  - name: Generative staging and listing video
    summary: >-
      The product itself — image staging feeding Runway Gen-4 image-to-video,
      behind queue-based job orchestration, S3 asset storage, and webhook-driven
      status callbacks, so the front end never waits on a model.
  - name: AI provenance and compliance subsystem
    summary: >-
      The layer that determines whether a brokerage can adopt the product at
      all: California AB 723 and SB 942, the NAR Code of Ethics, and C2PA
      provenance, enforced in the system rather than in an agent's memory.

highlights:
  - Own the full technical roadmap for a Next.js, Vercel, and MongoDB platform serving dozens of agents across firms including Compass, eXp Realty, and Dave Perry-Miller.
  - Architected the generative pipeline — image staging feeding Runway Gen-4 image-to-video generation, with queue-based job orchestration, S3 asset storage, and webhook-driven status callbacks.
  - Designed and shipped an AI and MLS compliance subsystem covering California AB 723 and SB 942, the NAR Code of Ethics, and C2PA provenance, with per-image watermarking, QR-linked original preservation, listing-state-aware export gates, and server-side attestation logging.
  - Built credit-based billing on MongoDB using atomic operations with guard clauses, so concurrent generation requests cannot double-spend a credit — and modelled tier economics against per-clip generation cost.
  - Manage production DNS and infrastructure across AWS Route 53 and Vercel, including the deploy pipeline, environment separation, and asset delivery.
  - Stood up the acquisition stack end to end — GA4 and Tag Manager event taxonomy, Enhanced Conversions with hashed email, UTM attribution, and a four-ad-group Google Ads architecture.
  - Built a custom MCP server for Reel Estate and integrated Atlassian, YouTrack, and GA4 servers into the workflow, so agentic tasks carry ticket, spec, and live product analytics context from pickup through deploy.
  - Authored a library of custom Claude skills encoding house style, MLS compliance rules, and Next.js scaffolding patterns, so AI-assisted contributions land idiomatically.

stack:
  - TypeScript
  - Next.js
  - React
  - Node.js
  - MongoDB
  - Vercel
  - AWS S3
  - AWS Route 53
  - Runway Gen-4
  - Replicate
  - C2PA
  - Anthropic API
  - Claude Code
  - GA4
---
