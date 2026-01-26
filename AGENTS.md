# AGENTS.md — Burrow Base

## Purpose of This File
This file defines **non-negotiable rules** for any AI agent (Cursor, Codex, or future agents) working in this repository.

Burrow Base is being built as a **production SaaS + services platform** with:
- Self-serve signup
- Stripe → GoHighLevel provisioning
- A flagship $297/mo Digital Operations Manager™

Agents must follow the roadmap and **never jump ahead**.

---

## CORE PRINCIPLES (READ FIRST)

1. **Do not jump ahead**
2. **Do not add features not explicitly requested**
3. **Do not refactor unless asked**
4. **Do not invent APIs, schemas, or integrations**
5. **Do not change architecture decisions**
6. **Do not optimize prematurely**

If something is unclear, the agent must **ask before acting**.

---

## PROJECT CONTEXT

### Product Structure
Burrow Base consists of **three product layers**:

1. **Automated Reviews (Self-Serve SaaS)**
   - 24-day free trial
   - Stripe checkout
   - Autosioned GHL snapshot
   - Narrow scope (reviews only)

2. **Websites / Online Presence (Optional / Secondary)**

3. **Digital Operations Manager™ ($297/mo)**
   - Installed system
   - Pipelines, calendars, workflows, payments, reputation
   - Owner sees only exceptions
   - Not DIY software

---

## BUILD ORDER (NON-NEGOTIABLE)

Agents must follow this order **exactly**:

1. GHL product builds (Reviews → DOM)
2. Stripe plans + provisioning
3. Marketing website
4. QA and dry runs
5. Launch polish

If asked to work on a later phase before earlier phases are complete, the agent must **stop and warn the user**.

---

## TECHNOLOGY STACK (LOCKED)

Agents must not suggest alternatives unless explicitly asked.

- Frontend: Next.js (Cursor / Codex)
- Hosting: Vercel
- Payments: Stripe
- CRM / Ops: GoHighLevel (GHL)
- Auth: GHL white-label
- Styling: Modern SaaS, minimal, calm
- Font: Archivo
- Brand colors: White, Black, Gold, Red

---

## WHAT THIS PROJECT IS NOT

Agents must not frame or build this project as A generic CRM
- A DIY automation tool
- A feature marketplace
- A no-code playground
- A clone of GHL’s UI

Burrow Base sells **installed outcomes**, not software access.

---

## AGENT BEHAVIOR RULES

### When writing code
- Make the **smallest change necessary**
- Prefer clarity over cleverness
- No abstractions unless required
- No premature optimization

### When writing copy
- No hype language
- No testimonials unless provided
- Calm, confident, operational tone
- Outcome-focused, not feature-focused

### When unsure
- Ask a clarification question
- Do not guess
- Do not “fill in the gaps”

---

## FILE-LEVEL RULES

- `AGENTS.md` is authoritative
- `IMPLEMENTATION_ROADMAP.md` defines scope
- Marketing copy files define messaging
- Agents must not overwrite files without instruction

---

## ESCALATION RULE

If an agent is asked to:
- Skip steps
- Add unplanned features
- Change the product model
- Alter Stripe/GHL logic

The agent must respond with:

> “This request conflicts with the current  Please confirm before proceeding.”

---

## SUCCESS CRITERIA

An agent is successful if:
- The system remains simple
- The roadmap is followed
- The product stays sellable
- The owner experience stays calm

---

## FINAL RULE

**Burrow Base is built to reduce chaos.  
Agents must never introduce it.**
