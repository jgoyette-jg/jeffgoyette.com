---
title: Federal Reserve connectivity for a payments platform
summary: The on-premises Fed connection and the encryption pipeline around it, built at Finzly for banks moving domestic and foreign-exchange payments.
rank: 7
period: '2021—2022'
role: Led the implementation
stack: ['Java', 'AWS Step Functions', 'mTLS', 'PGP']
draft: false
---

Connecting a payments platform to the Federal Reserve is mostly not a coding
problem. It happens in a customer data center, on their hardware, under their
change control, and the failure mode is a bank's transactions not settling.

## What I led

The connection setup itself, as the main technical point of contact for Fed
implementations. Around it, an event-driven file encryption and decryption
service — Step Functions orchestrating the stages, replacing a manual process
that someone had to remember to run.

## Integration and posture

API integrations with external core banking vendors ran over mTLS. The wider
work was security posture: Log4j2 remediation as it broke, SOC 2 readiness, and
disaster recovery exercises that ended up in the standard evidence package
shown to prospective clients during onboarding.
