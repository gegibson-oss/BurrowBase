# BURROW BASE — FULL IMPLEMENTATION ROADMAP (V1)

## PHASE 0 — FOUNDATIONS (DO NOT SKIP)

**Goal:** Remove downstream friction.

### 0.1 Accounts & Infra

- [ ] GHL Agency account (SaaS mode enabled)
- [ ] Stripe connected to GHL (plans + trials)
- [ ] Domain:
  - [ ] burrowbase.com → marketing site
  - [ ] app.burrowbase.com → GHL
- [ ] Vercel account
- [ ] Cursor project initialized

### 0.2 Brand Assets (Lock These)

- [ ] Logo (you already saved)
- [ ] Colors:
  - [ ] White
  - [ ] Black
  - [ ] Gold
  - [ ] Red
- [ ] Font: Archivo
- [ ] Tone:
  - [ ] Modern SaaS
  - [ ] Calm authority
  - [ ] No hype language

## PHASE 1 — GHL PRODUCT BUILD (THIS IS THE CORE)

**You are not building a website yet.**
**You are building products.**

### 1.1 Build the REVIEWS-ONLY PRODUCT (Trojan Horse)

**Outcome:**
A standalone, self-serve SaaS product.

**GHL Tasks**

- [ ] Create Reviews-Only Snapshot
  - [ ] Reputation enabled
  - [ ] Review request workflow
  - [ ] Issue routing workflow
  - [ ] No pipelines
  - [ ] No calendars
  - [ ] No invoices
- [ ] Create Stripe plan
  - [ ] 24-day free trial
  - [ ] Monthly price
- [ ] Configure SaaS auto-provision
  - [ ] Stripe checkout → snapshot → sub-account
- [ ] Test
  - [ ] Buy yourfirm:
    - [ ] Sub-account created
    - [ ] Review requests fire
    - [ ] No extra clutter

**This product must feel clean and narrow.**

### 1.2 Build the DIGITAL OPERATIONS MANAGER™ Snapshot

**Outcome:**
Your $297/mo flagship product.

**Follow this order exactly:**

- [ ] Custom fields
- [ ] Pipelines
- [ ] Calendars
- [ ] Workflows
- [ ] Dashboard
- [ ] Roles
- [ ] Snapshot export

**Rules**

- [ ] No “optional” features
- [ ] No client-specific logic
- [ ] One calm dashboard
- [ ] Owner sees only exceptions

**Stripe**

- [ ] Create DOM plan
- [ ] No trial (or short trial)
- [ ] Setup fee optional

### 1.3 Upgrade Path Logic (Critical)

**Inside GHL:**

- [ ] Reviews-only users see:
  - [ ] “Add scheduling”
  - [ ] “Add payments”
  - [ ] “Upgrade to full operations”
- [ ] This can be:
  - [ ] In-app message
  - [ ] Email sequence
  - [ ] Button → DOM apply page

## PHASE 2 — MARKETING SITE (CURSOR)

**Now you sell what you already built.**

### 2.1 Project Structure (Cursor)

```
/burrowbase
  /app
  /components
  /pages
    index.tsx
    reviews.tsx
    digital-operations-manager.tsx
    how-it-works.tsx
    pricing.tsx
    start.tsx
    apply.tsx
  /styles
  /public
```

### 2.2 Orientation, not conversion.

**Sections only:**

- [ ] Hero (what you do)
- [ ] Problem
- [ ] System explanation
- [ ] Product entry cards
- [ ] Upgrade path
- [ ] CTA → Start Free

**No pricing. No checkout.**

### 2.3 Reviews Page (/reviews)

**This is your money page.**

Must include:

- [ ] Clear headline
- [ ] 3-step explanation
- [ ] What’s included
- [ ] Trial explanation
- [ ] Pricing
- [ ] CTA → Stripe Checkout

**Button behavior**

- [ ] Opens Stripe checkout
- [ ] Success → GHL handles the rest

### 2.4 DOM Page (/digital-operations-manager)

**This page qualifies buyers.**

Must include:

- [ ] What it replaces (roles)
- [ ] How it works
- [ ] Who it’s for / not for
- [ ] Pricing anchor
- [ ] CTA → Apply

### 2.5 Apply Page (/apply)

- [ ] GHL form embed
- [ ] Minimal questions
- [ ] Auto-approval OR review

**After submit:**

- [ ] Stripe checkout
- [ ] Snapshot provision
- [ ] Welcome email

## PHASE 3 — CONNECT SITE → GHL

### 3.1 Embeds & Links

- [ ] Stripe Checkout links (Reviews + DOM)
- [ ] GHL Form embed (Apply)
- [ ] Login button → app.burrowbase.com

### 3.2 Auth & Messaging

- [ ] Welcome emails per product
- [ ] Trial countdown email (Reviews)
- [ ] Upgrade nudges (Reviews)

## PHASE 4 — QA & DRY RUN

**You must do this yourself.**

**Test 1: Reviews-Only**

- [ ] Land on homepage
- [ ] Go to /reviews
- [ ] Checkout
- [ ] Receive review request
- [ ] See zero extra features

**Test 2: DOM**

- [ ] Apply
- [ ] Checkout
- [ ] Sub-account created
- [ ] Pipelines visible
- [ ] Dashboard calm
- [ ] Alerts only when triggered

**Test 3: Upgrade**

- [ ] Reviews user → DOM
- [ ] No duplicate accounts
- [ ] No broken permissions

## PHASE 5 — SOFT LAUNCH

**Do NOT advertise yet.**

- [ ] Use your own business
- [ ] Use a friend’s business
- [ ] Fix friction
- [ ] Remove confusion

**Only after this:**

- [ ] Cold outreach
- [ ] Ads
- [ ] SEO

## HOW YOU SHOULD USE THIS IN CURSOR

- [ ] Paste this roadmap into a markdown file
- [ ] Check off each task
- [ ] Build one phase at a time
- [ ] Do not jump ahead
