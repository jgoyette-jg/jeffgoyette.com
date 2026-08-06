---
title: Exportable order history for Lowe's Pro
summary: A Google Cloud application suite giving Lowe's Pro business customers exportable purchase history, replacing a flow that ran on IBM WebSphere Commerce.
rank: 6
period: '2019—2020'
role: Pod architect
stack: ['Spring Boot', 'Cloud Pub/Sub', 'GKE + Istio']
metric:
  value: '6'
  label: 'engineers led'
draft: false
---

Pro customers are businesses, and businesses need their purchase history in a
spreadsheet at tax time. The capability had never existed, and the system it
would have to live in was IBM WebSphere Commerce.

## The approach

Requests came off the front end through Cloud Pub/Sub rather than synchronously,
which meant a slow export couldn't hold a web thread and a burst of them
couldn't take the site down. Generated files landed in Cloud Storage and came
back out over REST, secured with JWTs from a central issuer. The suite ran
containerized on GKE with Istio handling routing and RBAC.

## Black Friday

The order-history store was re-platformed behind a circuit breaker specifically
to survive peak load — the deadline wasn't a sprint boundary, it was the fourth
Friday in November.

## The part that paid for it

Eliminating the WebSphere Commerce dependency generated recurring licensing
savings that outlasted the project.

<!-- TODO: the licensing saving is the number here, if you're able to quote it. -->
