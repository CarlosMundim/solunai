# Solunai Design System v1.1

**Status**: APPROVED - Production Ready
**Last Updated**: November 26, 2025
**Design Philosophy**: Japanese Corporate Aesthetic (Wa-inspired)

---

## DESIGN PRINCIPLES

1. **Ma (間)** - Embrace negative space. Let content breathe.
2. **Kanso (簡素)** - Simplicity. Remove the unnecessary.
3. **Seijaku (静寂)** - Tranquility. Calm, professional, trustworthy.
4. **Timeless** - Will look modern in 2030, not dated by 2026.

---

## 1. COLOR PALETTE

### Primary Brand Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Solunai Blaze | `#f5480a` | 245, 72, 10 | Primary CTAs only (sparingly) |
| Ember | `#c23800` | 194, 56, 0 | Hover states on primary |

### Secondary Accent (Corporate Harmony)
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Indigo Deep | `#1e3a5f` | 30, 58, 95 | Professional headers, trust |
| Slate Blue | `#475569` | 71, 85, 105 | Secondary text, icons |
| Warm Stone | `#78716c` | 120, 113, 108 | Subtle accents, borders |

### Neutral Colors (Ma - Negative Space)
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Sumi Black | `#1a1a1a` | 26, 26, 26 | Primary text |
| Charcoal | `#333333` | 51, 51, 51 | Body text |
| Stone | `#737373` | 115, 115, 115 | Secondary text |
| Mist | `#a3a3a3` | 163, 163, 163 | Captions, placeholders |
| Cloud | `#e5e5e5` | 229, 229, 229 | Borders, dividers |
| Snow | `#fafafa` | 250, 250, 250 | Section backgrounds |
| White | `#ffffff` | 255, 255, 255 | Primary background |

### Semantic Colors (Subdued)
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#059669` | Checkmarks (muted green) |
| Warning | `#d97706` | Alerts (muted amber) |
| Error | `#dc2626` | Errors (muted red) |
| Info | `#1e3a5f` | Information (uses Indigo Deep) |

### BANNED COLORS
- Purple/Violet: Any shade
- Pink: Any shade
- Bright neon colors
- Gradient overuse
- Colors that clash with orange brand mark

---

## 2. TYPOGRAPHY

### Font Stack
```css
/* English Headings */
--font-space-grotesk: 'Space Grotesk', system-ui, sans-serif;

/* English Body */
--font-inter: 'Inter', 'Open Sans', system-serif;

/* Japanese */
--font-noto-sans-jp: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif;
```

### Type Scale
| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 Hero | 64px | 40px | 700 | 1.1 |
| H2 Section | 48px | 32px | 700 | 1.2 |
| H3 Card Title | 28px | 24px | 700 | 1.3 |
| H4 Subheading | 20px | 18px | 600 | 1.4 |
| Body Large | 18px | 16px | 400 | 1.7 |
| Body | 16px | 15px | 400 | 1.7 |
| Body Small | 14px | 13px | 400 | 1.6 |
| Caption | 12px | 12px | 500 | 1.5 |

### Letter Spacing
- Headings: `-0.02em`
- Body: `0`
- Uppercase labels: `0.05em`

---

## 3. SPACING SYSTEM (Ma - 間)

### Philosophy
> "The space between elements is as important as the elements themselves."

**Rule**: When in doubt, add more space. Cramped layouts feel cheap.

### Base Unit: 8px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight inline spacing |
| sm | 8px | Icon gaps, tight groups |
| md | 16px | Default element spacing |
| lg | 24px | Card internal padding |
| xl | 32px | Between related sections |
| 2xl | 48px | Card padding |
| 3xl | 64px | Between major sections |
| 4xl | 80px | Section vertical padding |
| 5xl | 120px | Hero sections, major breaks |

### Section Padding (Generous)
- Desktop: `120px 48px` (vertical/horizontal)
- Tablet: `80px 32px`
- Mobile: `64px 24px`

### Content Width Breathing Room
- Max content width: 1200px
- But text blocks: max 680px (optimal reading)
- Cards in grid: min 24px gaps

---

## 4. LAYOUT

### Container Widths
| Name | Max Width | Usage |
|------|-----------|-------|
| Narrow | 800px | Text-focused content |
| Default | 1200px | Standard sections |
| Wide | 1400px | Hero, full-width |

### Grid System
- 12-column grid
- Gutter: 24px (desktop), 16px (mobile)
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

---

## 5. COMPONENTS

### Cards
```css
.card-default {
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.card-elevated {
  box-shadow: 0 8px 32px rgba(245, 72, 10, 0.1);
}

.card-hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(245, 72, 10, 0.15);
}
```

### Buttons
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `#f5480a` | `#ffffff` | none |
| Primary Hover | `#c23800` | `#ffffff` | none |
| Secondary | transparent | `#f5480a` | 2px `#f5480a` |
| Ghost | transparent | `#374151` | 1px `#e5e7eb` |

Button Sizing:
- Large: `padding: 16px 32px; font-size: 18px; border-radius: 8px;`
- Default: `padding: 12px 24px; font-size: 16px; border-radius: 6px;`
- Small: `padding: 8px 16px; font-size: 14px; border-radius: 4px;`

### Border Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| none | 0 | Sharp edges |
| sm | 4px | Small buttons, tags |
| md | 6px | Default buttons |
| lg | 8px | Cards, inputs |
| xl | 12px | Large cards |
| 2xl | 16px | Modals |
| 3xl | 20px | Hero cards |
| full | 9999px | Pills, avatars |

---

## 6. SECTION BACKGROUNDS

| Section Type | Background | Text Color |
|--------------|------------|------------|
| Default | `#ffffff` | `#171717` |
| Alternate | `#f8f9fa` | `#171717` |
| Dark | `#0d0d0d` | `#ffffff` |
| Accent | `#f5480a` gradient | `#ffffff` |
| Subtle Orange | `rgba(245, 72, 10, 0.04)` | `#171717` |

### Gradient Definitions
```css
--gradient-orange: linear-gradient(135deg, #f5480a 0%, #c23800 100%);
--gradient-dark: linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%);
--gradient-light: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
```

---

## 7. ICONS & IMAGERY

### Icon Style
- Line icons (stroke: 2px)
- Size: 20px (inline), 24px (default), 48px (feature)
- Color: Inherit from text or brand orange

### Image Treatment
- Aspect ratios: 16:9 (hero), 4:3 (cards), 1:1 (avatars)
- Border radius: 12px for cards, full for avatars
- Overlay for dark backgrounds: `rgba(13, 13, 13, 0.4)`

---

## 8. MOTION & ANIMATION

### Transitions
```css
--transition-fast: 150ms ease;
--transition-default: 300ms ease;
--transition-slow: 500ms ease;
```

### Hover Effects
- Cards: `translateY(-4px)` + shadow increase
- Buttons: Background color change only
- Links: Underline or color shift

### BANNED Animations (AI-Slop)
- `scale(1.05)` or `scale(1.1)` on hover (too aggressive)
- Excessive `backdrop-blur`
- Parallax scrolling
- Auto-playing carousels

---

## 9. ACCESSIBILITY

### Contrast Ratios (WCAG AA)
- Body text on white: 7:1 minimum
- Large text on white: 4.5:1 minimum
- Interactive elements: 3:1 minimum

### Focus States
```css
:focus-visible {
  outline: 2px solid #f5480a;
  outline-offset: 2px;
}
```

---

## 10. APPROVAL STATUS

**Approved by Carlos (Project Owner): November 26, 2025**

- [x] Color palette approved (Wa-inspired, corporate Japanese)
- [x] Typography approved
- [x] Spacing system approved (Ma philosophy)
- [x] Component styles approved
- [x] Section backgrounds approved
- [x] Animation guidelines approved
- [x] Agent orchestration approved
- [x] Full PM autonomy granted to Tiger

---

## REVISION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-26 | Initial draft |
| 1.1 | 2025-11-26 | Wa-inspired redesign, Ma spacing, corporate Japanese aesthetic |
