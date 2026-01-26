# Phase 1.1 — Reviews-Only Product Spec

## Outcome
A standalone, self-serve SaaS product.

## Stripe Plan
- Price: $49/month
- Trial: 24 days
- Setup fee: none
- Cancel anytime

## Sub-Account Naming
- Format: `BB-REV-{{BusinessName}}`

## Custom Fields
- None required

## Snapshot Scope (Reviews-Only)
- Reputation enabled
- Review request workflow
- Issue routing workflow
- No pipelines
- No calendars
- No invoices

## Review Request Workflow
- Channels: SMS primary, email fallback
- Trigger: job complete or manual trigger
- Initial send: 15 minutes after completion
- Reminder: single follow-up at 48h if no response
- Tone: professional, neutral, no hype, no emojis

## Issue Routing Workflow
- Issue definition: review ≤3 stars or negative sentiment
- Route: internal only
- Notify: business owner (primary sub-account user)
- No public review link shown on issue path

## SaaS Auto-Provision
- Stripe checkout → Reviews-only snapshot → sub-account

## Validation Checklist
- [ ] Stripe checkout completes and provisions sub-account
- [ ] Sub-account name follows `BB-REV-{{BusinessName}}`
- [ ] Review requests send via SMS and fallback to email
- [ ] Reminder fires at 48h if no response
- [ ] Issue routing triggers on ≤3 stars or negative sentiment
- [ ] Issue route notifies business owner only
- [ ] No public review link on issue path
- [ ] No extra clutter (pipelines/calendars/invoices absent)
