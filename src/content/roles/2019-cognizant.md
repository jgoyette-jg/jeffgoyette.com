---
company: Cognizant
title: Principal Engineer Full Stack
note: Pod architect on the Lowe's digital pod
start: 'Jun 2019'
end: 'Jan 2021'
location: Charlotte, NC
order: 70
domain: commerce

projects:
  - name: Exportable and online purchase history
    summary: >-
      A new application suite letting Lowe's Pro customers — businesses, with
      organisation metadata behind them — export purchase history for a date
      range to CSV. The capability had never existed, and the online history
      piece had to move onto a new enterprise order management system at the
      same time.
  - name: Maturity Governance Application
    summary: >-
      An internal tool that tracked and measured a delivery pod's progress
      toward a mature delivery model, so a team could see at a glance which
      practices they were running and which they were not.

highlights:
  - Designed and shipped a Google Cloud application suite giving Lowe's Pro business customers exportable purchase history — a capability the client had never offered.
  - Led a team of six developers from stakeholder discovery through delivery, partnering directly with product managers and business stakeholders.
  - Routed front-end traffic through Cloud Pub/Sub for asynchronous request handling and back-pressure tolerance, so a slow export could not hold a web thread.
  - Re-platformed the order-history store behind a circuit-breaker pattern in time for Black Friday peak load.
  - Eliminated a critical IBM WebSphere Commerce dependency, generating recurring licensing savings that outlasted the project.
  - Containerized on GKE with Istio RBAC and VirtualServices, and ran internal lunch-and-learn sessions to bring the team up on the setup rather than owning it alone.
  - Acted as front-end lead on the internal governance application — React and Material-UI, reusable components, Context API for shared state instead of Redux, covered with Jest, Enzyme, React Testing Library, and Codecept.

stack:
  - Java
  - Spring Boot
  - Spring Cloud GCP
  - Spring Data
  - Hibernate
  - React
  - Material-UI
  - GKE
  - Istio
  - Cloud Pub/Sub
  - Cloud Storage
  - Postgres
  - WireMock
  - JUnit 5
  - Mockito
  - Feign
  - Docker
  - Maven
---
