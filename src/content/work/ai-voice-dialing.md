---
title: Outbound dialing for AI voice agents
summary: A dialing system at Ytel that let customers point AI voice agents at outbound campaigns, removing the per-seat telephony overhead the old flow required.
rank: 2
period: '2022—2026'
role: Engineered and shipped
stack: ['Java', 'FreeSWITCH', 'Lua', 'Kafka']
metric:
  value: '$15k'
  label: 'customer cost, per month'
  positive: true
draft: false
---

Telephony platforms price around seats and concurrency. AI voice agents break
that model — they need dialing capacity without the human capacity attached to
it, and the existing path made customers pay for both.

## What changed

The dialing system was rebuilt so an AI agent could be the endpoint of an
outbound campaign rather than a bolt-on to a human one. For the customer this
came out as roughly **$15,000 a month** off their operating cost.

## Around it

The same period covered a Lua and FreeSWITCH IVR that improved call routing and
DTMF handling, a billing reporting microservice on Spring Boot and Kafka that
replaced a brittle nightly batch, and a rebuilt DNC and LRN importer on Spring
Reactive and Apache Camel.

<!-- Note: `period` reflects the Ytel tenure, not this project specifically.
     Tighten it if you want the actual build window on the page. -->
