# SOLUNAI WEBSITE - TYPOGRAPHY & SPACING SYSTEM AUDIT

## DOCUMENT DATE
Generated: November 14, 2025

---

## 1. CORE FONT FAMILIES & CSS VARIABLES

### Font Definitions (from globals.css)
```css
--font-inter: 'Inter', sans-serif;
--font-space-grotesk: 'Space Grotesk', sans-serif;
--font-noto-sans-jp: 'Noto Sans JP', sans-serif;
--font-heading: var(--font-space-grotesk), var(--font-inter), sans-serif;
```

### Font Application Rules
- **Body Text (English)**: `var(--font-inter), 'Open Sans', sans-serif`
- **Body Text (Japanese)**: `var(--font-noto-sans-jp), 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif`
- **Headings (All Languages)**: `var(--font-heading)` = Space Grotesk as primary
- **Global Body**: Inter with fallbacks to Arial, Helvetica, sans-serif

### Font Weights
- **Headings (h1-h6)**: 600 default, 700 for h1
- **Body**: 400 (regular)
- **Emphasis**: 500 (medium), 600 (semibold), 700 (bold)

---

## 2. HEADING FONT SIZES

### Desktop (Full-width displays)
| Element | Size | Component | Weight |
|---------|------|-----------|--------|
| H1 / Hero Headline | 56px | Hero.css | 700 |
| Large Title | 72px | ValueProposition.css | 700 |
| Main Section Heading | 48px-56px | Various | 700 |
| Subheading | 40px-48px | Various | 600+ |
| H2 Style | 36px-46px | Various | 600 |
| H3 / Card Title | 28px-32px | Various | 600 |
| H4 | 24px-28px | Various | 600 |
| Small Heading | 20px-24px | Various | 600 |

### Tablet (1024px and below)
| Element | Size | Change |
|---------|------|--------|
| Hero Headline | 42px | -14px |
| Large Title | 44px | -12px |
| Main Section | 40px | -8px |
| Subheading | 32px-40px | -8px |
| H2 Style | 32px | -14px |
| H3 / Card | 28px | -4px |

### Mobile (768px and below)
| Element | Size | Change |
|---------|------|--------|
| Hero Headline | 32px | -24px |
| Large Title | 36px | -36px |
| Main Section | 32px | -24px |
| Subheading | 24px-28px | -20px |
| H2 Style | 24px-28px | -18px |
| H3 / Card | 20px-24px | -8px |

### Extra Small Mobile (480px and below)
| Element | Size | Change |
|---------|------|--------|
| Hero Headline | 28px-32px | -28px |
| Large Title | 24px | -48px |
| Main Section | 24px | -32px |

---

## 3. BODY TEXT & PARAGRAPH FONT SIZES

### Desktop
| Type | Size | Usage |
|------|------|-------|
| Large Body | 20px | Hero subheadlines, featured text |
| Regular Body | 18px | Primary paragraph text |
| Body Standard | 16px | General content, body text |
| Small Body | 15px | Secondary text, captions |
| Extra Small | 14px | Metadata, timestamps, small labels |
| Micro | 13px | Minor notes, badges |
| Tiny | 12px | Scroll indicators, fine print |

### Tablet
| Type | Size | Notes |
|------|------|-------|
| Large Body | 18px | Slightly reduced |
| Regular Body | 16px | Slightly reduced |
| Body Standard | 15px | Slightly reduced |
| Small Body | 14px | Reduced |

### Mobile
| Type | Size | Notes |
|------|------|-------|
| Large Body | 16px | Reduced from 20px |
| Regular Body | 15px-16px | Reduced |
| Body Standard | 15px | Reduced |
| Small Body | 14px | Same as tablet |

---

## 4. CTA BUTTON & INTERACTIVE TEXT

### Button Text
| Breakpoint | Font Size | Padding |
|-----------|-----------|---------|
| Desktop | 18px | 20px 48px (rounded), 18px 48px (square) |
| Tablet | 16px-18px | 18px 40px |
| Mobile | 16px | 16px 32px |
| Small Mobile | 15px | 16px 32px |

### Navigation & Links
| Element | Font Size | Weight |
|---------|-----------|--------|
| Main Nav Links | 16px | 500 |
| Dropdown Menu | 16px | 400 |
| Mobile Nav | 18px | 500 |
| Mobile Dropdown | 16px | 400 |
| Footer Links | 15px | 400 |
| Language Toggle | 14px | 400 |

---

## 5. SPACING & PADDING SYSTEM

### CSS Variables (defined in globals.css)
```css
/* Section Spacing - Vertical Spacing Between Sections */
--section-spacing-mobile: 80px;
--section-spacing-tablet: 120px;
--section-spacing-desktop: 200px;
--section-spacing-xl: 280px;

/* Container Padding - Horizontal Padding Inside Containers */
--container-padding-mobile: 20px;
--container-padding-tablet: 40px;
--container-padding-desktop: 60px;
--container-padding-xl: 80px;
```

### Section Spacing Usage
- **Mobile**: 80px vertical spacing between major sections
- **Tablet**: 120px vertical spacing between major sections
- **Desktop**: 200px vertical spacing between major sections
- **Extra Large**: 280px for premium spacing

### Component-Level Padding
| Component Type | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero Section | 0px horizontal | 0px horizontal | 24px horizontal |
| Card/Box | 40px-48px | 32px-40px | 24px-32px |
| Section Container | 40px-60px | 24px-40px | 20px-24px |
| Button | 20px 48px (H×V) | 18px 40px | 16px 32px |

### Common Padding Patterns
- **Large Padding**: 80px (top/bottom), 60px (sides)
- **Medium Padding**: 40px-48px
- **Standard Padding**: 32px
- **Compact Padding**: 24px
- **Small Padding**: 16px-20px
- **Micro Padding**: 8px-12px

### Gap & Spacing
| Type | Value | Usage |
|------|-------|-------|
| Large Gap | 80px-100px | Between major grid items |
| Medium Gap | 40px-60px | Between cards |
| Standard Gap | 24px-32px | Between elements |
| Compact Gap | 16px | Between inline items |
| Tight Gap | 8px-12px | Between small elements |

### Margin Patterns
- **Between Headings & Text**: 24px-32px
- **Between Sections**: 80px-200px (uses --section-spacing variables)
- **List Item Gap**: 16px
- **Grid Gaps**: 40px-80px
- **Card Spacing**: 32px-60px

---

## 6. LINE HEIGHT & TEXT SPACING

### Line Height Values
```css
Headings: 1.2
Body Text: 1.6 - 1.7
Navigation: 1.5
Footer/Small: 1.4
```

### Letter Spacing
- **Headings**: -0.02em (tight, modern)
- **Body Text (English)**: -0.01em (tight)
- **Body Text (Japanese)**: 0.02em (loose, for readability)
- **Small Text**: 0.05em (uppercase labels)
- **Navigation**: default

---

## 7. RESPONSIVE BREAKPOINTS

### Current Breakpoints Used
```css
Desktop: >= 1365px (and default)
Tablet: 768px - 1024px
Mobile: 480px - 767px
Small Mobile: <= 480px
```

### Key Breakpoint Thresholds
- **1365px**: Hero and large component adjustments
- **1024px**: Major layout shifts, header changes
- **768px**: Mobile menu activation, single column layouts
- **480px**: Extra small optimizations

---

## 8. FONT SIZE SUMMARY TABLE

### Quick Reference - All Font Sizes Used

#### Extra Large (Display)
- 120px (Testimonial quote mark)
- 100px (Testimonial quote mark - mobile)
- 80px (Charts, large metrics)
- 72px (Maximum headline)

#### Large (Headline)
- 56px (Main H1, hero headline)
- 48px (Section titles, hero subheading)
- 46px (AI model headings)
- 44px (CTA title - tablet)
- 42px (Hero - tablet)
- 40px (Subheading - tablet)

#### Medium (Subheading)
- 38px (Testimonial - tablet)
- 36px (H2, featured content)
- 32px (H3, hero mobile, footer headline)
- 30px (Large featured text)
- 28px (Card title, H3)
- 24px (H4, featured text)

#### Small (Body Large)
- 22px (Featured body text)
- 20px (Hero subheadline, body large)
- 18px (Hero subheadline - tablet, body)

#### Standard (Body)
- 16px (Standard body, nav)
- 15px (Body, secondary)
- 14px (Meta, labels, small body)

#### Tiny (Small)
- 13px (Fine print)
- 12px (Scroll indicator, tiny)

---

## 9. TYPOGRAPHY CONSISTENCY NOTES

### Inconsistencies Found
1. **Multiple measurement units**: Mix of px and rem (1.5rem = 24px, 2.5rem = 40px, etc.)
2. **Navigation font**: Header uses specific fallback chain (Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)
3. **Testimonial quotes**: Unique font-family: Georgia, serif (different from system)
4. **Padding inconsistency**: Some components use --section-spacing-desktop while others hardcode 40px-60px

### Recommended Standardization
- **Use px consistently** (more predictable than rem for this design)
- **Create explicit font size scale** with CSS variables
- **Consolidate font-family fallbacks** to one standard
- **Use spacing variables** everywhere instead of hardcoding

---

## 10. COMPONENT BREAKDOWN BY PAGE

### HOME PAGE
- **Hero**: 56px desktop, 42px tablet, 32px mobile
- **Section Titles**: 48px+ desktop, 40px tablet, 32px mobile
- **Body**: 20px desktop, 18px tablet, 16px mobile
- **CTA Buttons**: 18px desktop, 16px mobile

### SERVICES PAGES (AI Implementation, Global Engineering)
- **Hero**: 56px-48px desktop
- **Section Titles**: 48px desktop
- **Feature Cards**: 28px titles, 16px body
- **Buttons**: 18px desktop, 16px mobile

### SOLUTIONS PAGES (Overview, Digital Twin, etc.)
- **Hero**: Consistent 56px desktop
- **Subheading**: 24px-28px
- **Key Points**: 20px desktop
- **Section Spacing**: 200px desktop, 120px tablet, 80px mobile

### ABOUT PAGE
- **Hero**: 48px desktop, 40px tablet, 32px mobile
- **Section Titles**: 48px desktop
- **Content**: 20px-18px body
- **Case Studies**: 36px-56px titles, 18px body

### CONTACT PAGE
- **Follow terms.css**: 2rem+ titles (32px+)
- **Body**: 1rem (16px) standard
- **Labels**: 0.875rem (14px)

### FOOTER
- **Section Title**: 56px desktop, 44px tablet, 32px mobile
- **Column Headers**: 16px uppercase
- **Links**: 15px
- **Copyright**: 14px

---

## 11. SHADOW & EFFECTS (Typography Context)

### Shadow Variables
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
--shadow-orange: 0 8px 32px rgba(245, 72, 10, 0.25);
--shadow-forge: 0 12px 32px rgba(245, 72, 10, 0.3);
```

### Transitions for Text/Buttons
```css
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

---

## 12. COLOR SYSTEM (Affects Text Readability)

### Primary Text Colors
- **White**: #ffffff (on dark backgrounds)
- **Dark Navy**: var(--steel-navy) = #1a2332 (headings, nav)
- **Dark Grey**: var(--titanium-grey) = #475569 (body)
- **Foreground**: #171717 (main text)

### Text Opacity
- **Full**: 1.0 (primary text)
- **High**: 0.9 (secondary headings)
- **Medium**: 0.7 (tertiary text, footer)
- **Low**: 0.6 (disabled, copyright)

---

## RECOMMENDATIONS FOR DESIGN SYSTEM

1. **Create CSS Variable Scale for Font Sizes**
   ```css
   --font-size-xs: 12px;
   --font-size-sm: 14px;
   --font-size-base: 16px;
   --font-size-lg: 18px;
   --font-size-xl: 20px;
   --font-size-2xl: 24px;
   --font-size-3xl: 28px;
   --font-size-4xl: 32px;
   --font-size-5xl: 36px;
   --font-size-6xl: 40px;
   --font-size-7xl: 48px;
   --font-size-8xl: 56px;
   --font-size-9xl: 72px;
   ```

2. **Create Consistent Padding Scale**
   ```css
   --spacing-xs: 4px;
   --spacing-sm: 8px;
   --spacing-md: 16px;
   --spacing-lg: 24px;
   --spacing-xl: 32px;
   --spacing-2xl: 40px;
   --spacing-3xl: 48px;
   --spacing-4xl: 60px;
   --spacing-5xl: 80px;
   --spacing-6xl: 120px;
   --spacing-7xl: 200px;
   ```

3. **Unify Font Family Fallback**
   - Use consistent: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
   - Separate rule for Japanese: 'Noto Sans JP', 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif

4. **Document Responsive Breakpoints Clearly**
   - Mobile: max-width: 480px
   - Tablet: 481px - 1024px
   - Desktop: 1025px+

5. **Create Typography Scale Components**
   - `font-display-xl`: 72px, 700, -0.02em
   - `font-display-lg`: 56px, 700, -0.02em
   - `font-heading-xl`: 48px, 700, -0.02em
   - `font-heading-lg`: 36px, 600, -0.02em
   - `font-body-lg`: 20px, 400, -0.01em
   - `font-body-base`: 16px, 400, -0.01em

