---
title: Acquisition and attribution stack
summary: GA4, Tag Manager, and Google Ads wired together so Reel Estate can say which ad group produced a paying agent rather than which one produced clicks.
rank: 4
period: '2026'
role: Built and shipped solo
stack: ['GA4', 'GTM', 'Google Ads', 'Enhanced Conversions']
metric:
  value: '+110%'
  label: 'SEMrush visibility, first month'
  positive: true
draft: false
---

Most early-stage analytics setups can tell you traffic went up. Far fewer can
connect a paying customer back to the ad group that produced them, because the
identity chain breaks somewhere between the click and the signup.

## The chain

A deliberate GA4 and Tag Manager event taxonomy, defined before any tags were
placed rather than accreted afterwards. Enhanced Conversions carry a hashed
email so the conversion survives the gap between ad click and account creation.
UTM parameters are captured on landing and persisted through signup instead of
being lost on the first client-side navigation.

## On the ads side

Four ad groups, each with its own conversion-optimized landing page, so the
reporting distinguishes between intent types instead of averaging them into one
blended number that can't be acted on. The landing pages were built to rank as
well as convert — which is where the visibility gain came from.

## What moved

SEMrush visibility rose **110% in the first month**, with overall traffic up
alongside it.

<!-- TODO: CAC or conversion rate would be the stronger pair of numbers here,
     and the attribution chain above was built precisely to produce them. -->

