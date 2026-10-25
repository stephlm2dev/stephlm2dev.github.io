# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/Vanilla JS. Minification via npx (clean-css-cli, terser). Deployed on GitHub Pages with custom domain koveleo.fr.

## Users

**Primary:** CEOs, founders, and managing directors of French SMEs (PME/ETI), 20–250 employees. Non-technical decision-makers who have a clear business vision and competent teams but lack someone to bridge the gap between strategic intent and on-the-ground execution across departments. Sweet spot: 30–150 people with organizational complexity (multiple teams interacting with the same systems or processes).

**Profile — the "CEO in motion":** Has decided the status quo is no longer an option. Has energy, projects, and ambitions but no one between their vision and the operational reality. Not in crisis, not in panic — in momentum. They want a partner who understands where they're going, not an executor who waits for instructions.

**Not for:** CTOs/lead devs (they need hands, not a translator), large corporations (too many layers), solopreneurs without organizational complexity, people shopping for a dev at a daily rate.

## Product Purpose

koveleo.fr is the single-page marketing site for KOVELEO — Stéphane Schmidely's consulting practice as "bras droit tech des dirigeants de PME" (technical right-hand for SME leaders). The site must convert visiting CEOs into a 30-minute discovery call via Google Calendar.

KOVELEO exists because in growing companies, no one has the three-layer view simultaneously: what teams live daily (operations), what's technically possible (tech), and what the business needs (vision). The gap between these layers is where opportunities are lost and frictions become normalized. KOVELEO fills that structural position — one that doesn't exist in any org chart.

## Positioning

**Big Idea:** "Plus ta boîte avance, plus les opportunités t'échappent." (The more your company grows, the more opportunities slip through the cracks.)

**Mechanism:** Triple immersion — in the business domain, in the technology, and in the timeline of the business — combined with hands-on building. Not an auditor who diagnoses from the outside, but a colleague who decodes from the inside. The distinguishing trait is the multi-perspective synthesis with a technical filter: sitting with every team (ops, sales, finance, marketing, tech), crossing what nobody connects, and building what emerges.

**vs. Fractional CTO:** A CTO pilots the tech stack. KOVELEO sits with finance, ops, and sales — and sees what tech can change from there. The holistic view, not the technical corridor.

**vs. Freelance developer:** A freelancer takes a spec and codes. KOVELEO starts by sitting with the teams before opening an editor.

**vs. Consulting firms:** No slide decks that end up in a drawer. Everything built is operational, documented, and owned by the client. Zero lock-in.

## Operating Context

Three service tiers (each self-sufficient):

1. **Révéler** (P1) — Immersion + structured diagnostic. 2–3 weeks, fixed price from 4 000 € HT (credited if the client continues with Forger). Deliverable: a standalone document mapping blockers, opportunities, evaluated solutions (retained and rejected), cost estimates, and prioritized action plan. The CEO can hand it to anyone.

2. **Forger** (P2) — Build what's missing. Project-scoped, project-priced. Short cycles with weekly demos, team testing, and CEO weeklies. Two variants: Stéphane builds or Stéphane pilots the client's dev team. Client never manages a developer directly.

3. **Ancrer** (P3) — Ongoing partnership. 7 500 € HT/month, 2 days/week, 3-month renewable periods, one Ancrer client at a time. Continuous radar: detect, prioritize, build, anticipate, upskill teams. Weekly CEO sync with 360° scope. The relationship that produced the Japan Experience case (4 years, ~90 people).

Underlying 5-step framework: Immersion → Fonder → Forger → Ancrer → Éclairer.

Primary CTA: 30-minute discovery call via Google Calendar link.

## Capabilities and Constraints

- Single-page site with a secondary mentions-légales page
- French-language only (English testimonials preserved as-is)
- Google Analytics 4 via tarteaucitron cookie consent
- Trustpilot domain verification
- JSON-LD structured data (Organization + Service + FAQPage)
- Client logos: Japan Experience, Neuroprofiler, Orange, Collège des Bernardins, Libon
- 7 static client quotes, no ticker: Claire Colin as a lead quote, three cards (Thierry Maincent, Eric Cestari, Rosanna Suarez), and three more folded under a "Voir les autres témoignages" toggle (Bruno Hug, Josquin Bossut, Julien Perrier)
- 8 FAQ items (also in FAQPage JSON-LD)
- Pricing displayed on site: Révéler from 4 000 € HT, Ancrer 7 500 € HT/month, Forger priced per project
- Deployed automatically via GitHub Pages on push to master

## Brand Commitments

**Binding:**
- KOVELEO wordmark (text-only, no logo graphic beyond the word itself)
- The name etymology: "Schmidely" = "petit forgeron" (little blacksmith) in Swiss German — drives the forge metaphor across the brand

**Flexible (open to evolution):**
- Color palette (currently dark green #07251F + coral #FF7F50)
- Typography (currently DM Serif Display + Inter)
- Imagery style and photography
- Visual layout and design system

**Voice (confirmed, from ma-voix.md):**
- Direct, incarné, précis, humain, engagé, sans bullshit
- Writes from the CEO's lived experience, not from their pain point
- Never sounds corporate, never sounds AI-generated
- The communication IS the proof of the empathy — if the CEO reads it and thinks "he sees my world," it's the same capability that operates in the mission

## Evidence on Hand

**Primary case study:** Japan Experience (~90 people, 90% of revenue online, 4-year partnership, mission ongoing)
- New product launched in 6 months when the flagship product increased by 70%
- 8 hours/week returned to the teams (a verification that took 45 minutes now takes 2)
- Page load time from 8 s to 1.5 s
- 200+ backlog requests triaged and prioritised with the teams and the CEO
- Tariff migration in 2 hours, one Saturday, no lost order

**7 static quotes** from: Claire Colin (DAF externalisée), Thierry Maincent (CEO, Japan Experience, two comments merged into one), Eric Cestari (CEO, cstar Industries), Rosanna Suarez (Directrice opérationnelle, Japan Experience, in English), Bruno Hug (CEO, BH SEO), Josquin Bossut (Head of Supplier Operations, Japan Experience) and Julien Perrier (Chef de projet, Japan Experience). The Bossut verification figure also lives in the case-study narrative.

**Case study + 3 scenarios** on the site (drawn from real missions).

**No fabricated content.** Testimonials, metrics, and case studies are real. Future work must not invent customers, benchmarks, or claims.

## Product Principles

1. **Immersion before action** — Never propose a solution before understanding the business from the inside. The first deliverable is visibility and trust, not code.

2. **Zero lock-in** — Everything produced belongs to the client. Documentation, code, and knowledge transfer ensure autonomy. The client stays because the relationship creates value, not because they're captive.

3. **Impact visible or it's worthless** — Every engagement must produce a concrete, measurable change in someone's daily work. No theoretical frameworks, no slide decks that end up in a drawer.

4. **The human is the entry point** — Not data, not systems, not the stack. Understanding starts with sitting with people, not reading dashboards.

5. **Commitment over comfort** — When a subject is taken on, it's carried to the end. Not by contract — by conviction.
