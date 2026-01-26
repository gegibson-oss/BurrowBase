Below is a **single, complete instruction file** 

Cursor / Codex can read this file and then **apply the changes directly to your codebase**.

You do **not** need to edit this file after uploading it.

---

## 📄 FILE: `BRAND_UI_UPGRADE.md`

````md
# Burrow Base — Brand & Hero UI Upgrade Instructions

## PURPOSE

Upgrade the Burrow Base marketing site to feel:
- Modern SaaS
- Premium and calm
- Installed, not experimental
- With a *very subtle western character* (felt, not visible)

This is a **visual + structural refinement**, not a copy rewrite.

---

## BRAND PRINCIPLES (DO NOT VIOLATE)

- This is NOT playful startup UI
- This is NOT rustic or novelty western
- This is NOT flat or generic Tailwind styling

The brand should feel like:
> Software built for real-world operators who run physical businesses.

---

## COLOR SYSTEM

### Core Direction
- Dark, grounded foundation
- Warm metallic accents
- Soft gradients instead of flat fills
- High contrast, excellent readability

### Color Palette (Define as CSS Variables)

Create or update global CSS variables:

```css
:root {
  /* Neutrals */
  --bb-black: #0b0b0d;
  --bb-charcoal: #141417;
  --bb-slate: #1e1f24;
  --bb-offwhite: #f5f5f2;

  /* Brand Accent (Gold / Brass) */
  --bb-gold: #d4af37;
  --bb-gold-soft: #e2c766;
  --bb-gold-muted: #bfa24a;

  /* Optional Subtle Western Warmth */
  --bb-clay: #8b6f4e; /* very subtle, sparing use */

  /* Gradients */
  --bb-gradient-dark: linear-gradient(
    180deg,
    rgba(11,11,13,0.85),
    rgba(11,11,13,0.95)
  );

  --bb-gradient-gold: linear-gradient(
    135deg,
    #d4af37,
    #bfa24a
  );
}
````

Rules:

* Gold is for emphasis only (CTAs, highlights)
* Do NOT use bright blues or neon accents
* Gradients must be soft and slow

---

## WESTERN CHARACTER (SUBTLE ONLY)

Allowed:

* Warm undertones
* Slight grain/noise overlays at 2–4% opacity
* Strong typography and spacing
* Squared or softly rounded corners (6–10px)

Not allowed:

* Western icons
* Stars, rope, badges
* Rustic fonts
* Distressed textures

This should feel **grounded**, not themed.

---

## HERO SECTION — REQUIRED STRUCTURE

The hero must have **three layers**:

### Layer Order (bottom → top)

1. Image slider (background)
2. Gradient overlay (darkening layer)
3. Hero content (text, CTAs, phone mockup)

---

## IMAGE SLIDER (BACKGROUND)

### Behavior

* Slow cross-fade between images
* No visible controls
* No user interaction
* Purely atmospheric

### Implementation

* Use absolute positioning
* Full viewport width
* Height = hero height
* Images should be easy to swap

Example structure:

```html
<div class="hero">
  <div class="hero-slider">
    <img src="/images/hero-1.jpg" />
    <img src="/images/hero-2.jpg" />
    <img src="/images/hero-3.jpg" />
  </div>

  <div class="hero-overlay"></div>

  <div class="hero-content">
    <!-- headline, subheadline, CTAs, phone visual -->
  </div>
</div>
```

Slider rules:

* `position: absolute`
* `z-index: 0`
* `pointer-events: none`

---

## OVERLAY (CRITICAL)

Overlay must:

* Ensure text readability on all images
* Use a dark gradient
* Optionally include subtle noise

Example:

```css
.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--bb-gradient-dark);
  z-index: 1;
}
```

Optional enhancement:

* Add low-opacity noise texture using `background-image`

---

## HERO CONTENT

Hero content must:

* Sit above overlay
* Be calm and uncluttered
* One primary headline
* One subheadline
* One primary CTA
* One secondary CTA (optional)

Rules:

* No feature lists in hero
* No badges or clutter
* Focus on outcome, not tools

---

## CTA STYLING

Primary CTA:

* Uses gold gradient
* Solid button
* Calm hover (slight brightness increase)

```css
.btn-primary {
  background: var(--bb-gradient-gold);
  color: #0b0b0d;
  border-radius: 8px;
  font-weight: 600;
}
```

Secondary CTA:

* Outline or ghost
* No gradient

---

## GLOBAL UI CLEANUP

Apply across the site:

* Increase spacing between sections
* Reduce visual noise
* Use fewer colors, more contrast
* Prefer depth over decoration

Remove:

* Flat blue gradients
* Generic SaaS glow effects
* Overly playful shadows

---

## FINAL CHECKS

Before completion, verify:

* Text is readable on all hero images
* Gold is used sparingly
* The site feels premium, calm, and confident
* Nothing looks “theme-like” or gimmicky

---

## SUCCESS CRITERIA

If the site feels like:

> “A serious operating system for service businesses”

This task is complete.

```

---

## HOW TO USE THIS IN CURSOR (IMPORTANT)

1. Create a new file in your repo  
   Example:
```

/docs/BRAND_UI_UPGRADE.md

```

2. Paste **everything above** into the file.

3. In Cursor chat, say:
> “Read and follow the instructions in `BRAND_UI_UPGRADE.md` and update the site accordingly.”

Cursor/Codex will now:
- Understand your brand rules
- Apply consistent color + gradient changes
- Implement the hero overlay + image slider correctly
- Avoid breaking your positioning

---


