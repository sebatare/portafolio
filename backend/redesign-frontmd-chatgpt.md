# Portfolio Redesign Instructions — Apple × Vercel Style

## Goal

Redesign the current portfolio frontend into a modern premium engineering portfolio inspired by:

- Apple
- Vercel
- Linear
- Raycast
- Stripe

The final result should feel:
- minimalist
- premium
- technical
- clean
- elegant
- modern
- engineering-focused

Avoid making it look like:
- a Tailwind starter template
- a student portfolio
- an overly colorful landing page
- a dashboard

---

# IMPORTANT CONSTRAINTS

## KEEP THESE TECHNOLOGIES

DO NOT replace the existing stack.

Keep:
- React 18
- Vite
- TypeScript
- TailwindCSS
- Existing i18n implementation
- Existing modular structure

---

# LIBRARIES

Install the MINIMUM amount of libraries possible.

Preferred:
- No additional libraries if possible

Optional:
- Framer Motion ONLY if animations are necessary

DO NOT install:
- Material UI
- Chakra UI
- Ant Design
- Heavy animation libraries
- Large UI frameworks

The design should rely mostly on:
- TailwindCSS
- typography
- spacing
- layout
- subtle transitions

---

# DESIGN DIRECTION

## General Style

Dark mode first.

Use:
- large typography
- clean spacing
- minimal surfaces
- subtle borders
- soft gradients
- soft hover states
- premium spacing
- minimal animations

Avoid:
- colorful gradients everywhere
- pastel colors
- glassmorphism abuse
- huge shadows
- exaggerated hover effects
- bouncing animations

---

# COLOR PALETTE

## Background
Use:
- #0A0A0A
- #111111
- #171717

Examples:
```tsx
bg-[#0A0A0A]
bg-[#111111]
bg-[#171717]
```

## Borders
```tsx
border-white/10
border-white/5
```

## Text
```tsx
text-white
text-zinc-300
text-zinc-400
text-zinc-500
```

## Accent Colors
Use VERY little accent color.

Preferred:
```tsx
text-cyan-400
text-blue-500
```

Only for:
- buttons
- links
- small highlights

---

# TYPOGRAPHY

Typography is extremely important.

Use:
- large titles
- tight tracking
- strong hierarchy
- short paragraphs

Examples:
```tsx
text-6xl md:text-7xl
font-semibold
tracking-tight
leading-[0.95]
```

Body text:
```tsx
text-zinc-400
leading-relaxed
text-lg
```

---

# MAIN LAYOUT

## Structure

The page should be:

Navbar
Hero
Projects
Experience / Skills
Contact
Footer

Everything should feel:
- centered
- spacious
- clean

Use generous vertical spacing.

---

# NAVBAR

Minimal navbar.

Left:
- initials or name

Right:
- Projects
- Experience
- Contact
- GitHub

Requirements:
- sticky top
- backdrop blur on scroll
- transparent background
- subtle border

Example:
```tsx
backdrop-blur-xl
bg-black/30
border-b border-white/5
```

---

# HERO SECTION

The hero section is the most important part.

It should occupy almost the full screen height.

Example structure:

```txt
Sebastián Tapia

Fullstack Engineer crafting scalable
web systems and backend architectures.

Currently based in Berlin.

[ View Projects ]
```

Requirements:
- huge title
- minimal description
- strong typography
- minimal CTA
- centered vertically

Avoid:
- long paragraphs
- too many buttons
- too many badges

---

# BACKGROUND EFFECTS

Use VERY subtle background effects.

Allowed:
- radial gradients
- subtle glow
- soft blur

Example:
```tsx
bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]
```

Avoid:
- particles
- animated backgrounds
- grids everywhere
- noisy textures

---

# PROJECTS SECTION

This section should feel like a premium SaaS showcase.

Use:
- dark cards
- soft borders
- smooth hover transitions
- optional screenshots
- clean spacing

Card example:
```tsx
rounded-3xl
border border-white/10
bg-white/[0.03]
hover:bg-white/[0.05]
transition-all
duration-500
```

Each project should include:
- title
- short description
- tech stack
- GitHub link
- demo link if available

Descriptions should be SHORT.

---

# SKILLS SECTION

Do NOT use colorful pills everywhere.

Preferred layout:
- categorized grid
- simple text lists
- elegant spacing

Example:

Frontend
- React
- TypeScript
- Vue

Backend
- Node.js
- Express
- PostgreSQL

Cloud
- AWS
- Docker
- Linux

---

# EXPERIENCE SECTION

Use a minimal timeline style.

Example:

2025
Amazon Logistics
Berlin

2024
Fullstack Developer
Chile

Very clean.
Very spacious.

---

# CONTACT SECTION

Minimal contact section.

Example:

Available for opportunities.

GitHub
LinkedIn
Email

Avoid:
- giant forms
- unnecessary inputs

---

# FOOTER

Extremely minimal.

Example:
```txt
Built with React, TypeScript and TailwindCSS.
```

---

# ANIMATIONS

Animations should be:
- subtle
- smooth
- premium

Allowed:
- fade-in
- slight translate-y
- opacity transitions

Avoid:
- bounce
- scale effects
- dramatic motion

If possible:
- use pure Tailwind transitions
- only install Framer Motion if truly necessary

---

# MOBILE DESIGN

The mobile experience is VERY important.

Requirements:
- readable typography
- large touch targets
- no compressed layouts
- proper spacing
- responsive typography

---

# PERFORMANCE

Prioritize:
- simplicity
- readability
- maintainability
- performance

Avoid:
- overengineering
- unnecessary abstractions
- excessive component nesting

---

# CLEANUP TASKS

Remove from the current design:
- pastel gradients
- white translucent cards
- excessive cyan/purple
- old glassmorphism style
- colorful badges
- excessive borders
- overly soft UI

---

# FINAL EXPECTED RESULT

The final portfolio should feel similar to:
- Vercel
- Linear
- Raycast
- modern Apple landing pages

The user should think:

"This developer probably works with modern architecture,
cloud systems and real production software."

---

# IMPLEMENTATION PRIORITIES

Priority order:
1. Typography
2. Layout spacing
3. Hero section
4. Projects section
5. Dark premium palette
6. Responsive design
7. Subtle animations

---

# IMPORTANT

DO NOT rewrite the entire project architecture.

The redesign should:
- reuse the current structure
- preserve modularity
- preserve multilingual support
- modernize ONLY the UI/UX layer

Focus on:
- premium frontend polish
- visual hierarchy
- spacing
- typography
- consistency