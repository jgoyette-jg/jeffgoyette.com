---
company: Allstate
title: Sr. Fullstack Software Developer
note: Roadside Services
start: 'Jun 2018'
end: 'Jun 2019'
location: Charlotte, NC
order: 60
domain: finance

projects:
  - name: Allstate Motor Club account management
    summary: >-
      A self-service application built to take load off the call centre, letting
      Motor Club members manage their profile, make payments, and add or remove
      members. It replaced an ageing JSF application.
  - name: Pronet data transfer
    summary: >-
      A vendor-bought legacy system holding group insurance data for small
      businesses. Slated for retirement, but still earning — so the data had to
      move from Sybase ASE to Oracle before the server could go. The master
      database password had been lost years earlier.

highlights:
  - Built the Allstate Motor Club self-service account management application, replacing a legacy JSF system and reducing inbound call volume.
  - Reworked authentication and authorization onto the enterprise Tivoli Access Manager standard with Spring Security and JWT.
  - Recovered access to the Pronet database after the master password had been lost, then dumped, restored, and exported the production data for the Oracle DBA team to consume.
  - Worked in XP — pair programming and test-driven development — with Jest, Enzyme, and Codecept/Puppeteer end-to-end coverage.
  - Cut reliance on stored procedures and worked SonarQube findings down to shorten development cycles.
  - Built CSR-facing member search on Spring Data's query-by-example API rather than a hand-written predicate tree.

stack:
  - Java
  - Spring Boot
  - Spring Data
  - Spring Security
  - Spring Cloud
  - Zuul
  - React
  - Jest
  - Enzyme
  - Puppeteer
  - Oracle
  - Sybase ASE
  - Pivotal Cloud Foundry
  - Jenkins
  - SonarQube
  - Gradle
---
