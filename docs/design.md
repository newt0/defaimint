# 🎨 DeFAI Mint Design Guidelines

This document outlines the core visual identity and UI/UX design principles for the DeFAI Mint project. It ensures a consistent, minimalistic, and functional user experience across the app.

---

## 1. Color Palette

DeFAI Mint uses a **monochrome-first** design approach. The visual tone emphasizes clarity, contrast, and minimalism, with very limited use of accent colors.

| Name          | HEX     | Usage                               |
| ------------- | ------- | ----------------------------------- |
| Primary Black | #000000 | Headlines, buttons, primary text    |
| Pure White    | #FFFFFF | Backgrounds                         |
| Accent Gray   | #888888 | Borders, secondary text, muted UI   |
| Alert Red     | #FF3B3B | Error messages, destructive actions |
| Success Green | #00C78C | Positive feedback (used sparingly)  |

> Note: Avoid using saturated colors unless functionally necessary (e.g. alerts, confirmations).

---

## 2. Typography

The app uses a **clean, readable, and modern type system** to align with its technical yet minimalist aesthetic.

- **Font Family**: `Inter`, with `system-ui` fallback
- **Font Sizes**:
  - Headings: `text-3xl font-bold` (e.g., Mint page title)
  - Subheadings: `text-xl font-semibold`
  - Body Text: `text-base`
  - Captions / Metadata: `text-sm text-muted`

> All text should maintain high contrast and sufficient padding. No text shadows.

---

## 3. Layout & Spacing

- Use generous whitespace to separate components clearly.
- Maintain consistent margins and paddings between sections.
- Prefer vertical stacking on mobile; use flex/grid layouts on desktop for balanced alignment.

---

## 4. UI Components

DeFAI Mint is built using [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/). All components should:

- Follow atomic design principles
- Be accessible (WCAG-compliant)
- Support light and dark mode (default is **light mode**)

---

## 5. Branding Guidelines

- **Logo**: Monochrome version only (no gradients or color fills)
- **Tone**: Serious, autonomous, conviction-driven. Avoid playful or overly friendly visuals.
- **Icons**: Use minimalist SVG icons, preferably from [Lucide](https://lucide.dev/)

---

## 6. Do's and Don'ts

**Do:**

- Use neutral colors and minimalist layouts
- Prioritize information clarity
- Make status indicators explicit

**Don't:**

- Use bright or saturated UI colors
- Rely on hover effects for critical UX
- Mix more than 1 accent color on a single view

---

## 7. Responsive Design

All views should be responsive using the `app/` directory structure (Next.js App Router). Test across:

- Desktop (primary)
- Tablet
- Mobile

---

For any updates or questions, please contact the design lead or check the `/mint` page layout as the UI baseline.
