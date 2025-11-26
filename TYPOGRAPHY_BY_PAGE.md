# SOLUNAI TYPOGRAPHY - DETAILED BREAKDOWN BY PAGE

---

## HOME PAGE COMPONENTS

### Hero Section (Hero.css)
**Desktop**
- Headline: 56px, weight 700, line-height 1.3
- Subheadline: 20px, weight 400, line-height 1.7
- Trust indicators: 16px, weight 500
- CTA Button: 18px, padding 18px 48px

**Tablet (max-width: 1365px)**
- Headline: 42px
- Subheadline: 18px
- Button: 18px, padding 18px 40px

**Mobile (max-width: 767px)**
- Headline: 32px
- Subheadline: 16px
- CTA Button: 16px, padding 16px 32px
- Full-width button with max-width: 300px

**Small Mobile (max-width: 480px)**
- Headline: 32px (same)
- Subheadline: 16px (same)

**Spacing**
- Hero section: Full viewport height (100vh)
- Bottom padding: 32px (scroll indicator)
- Content padding-left: 8% (desktop), 6% (tablet), 24px (mobile)

### Value Proposition (ValueProposition.css)
**Desktop**
- Large Title: 72px, weight 700, margin-bottom 120px
- Subheading: 20px, weight 400
- Card title: 28px, weight 600
- Card body: 16px, weight 400
- Small text: 14px-15px, weight 400

**Responsive Reductions**
- Tablet: 56px title, 24px subheading
- Mobile: 36px title, 28px card title
- Padding: Desktop uses --section-spacing-desktop

---

## SERVICES PAGES

### AI Implementation Hero (AIImplementationHero.css)
**Desktop**
- Headline: 56px, weight 700
- Subheadline: 20px
- Padding: --section-spacing-desktop 24px (vertical spacing)

**Responsive**
- Tablet: 120px section spacing (--section-spacing-tablet)
- Mobile: 80px section spacing (--section-spacing-mobile), padding 20px

### Global Engineering Components

#### GlobalEngineeringHero.css
**Desktop**
- Padding: --section-spacing-desktop 24px
- Headline styling for both English and Japanese
- Font-family: var(--font-inter), 'Open Sans', sans-serif (EN)
- Font-family: var(--font-noto-sans-jp), 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif (JP)

**Responsive**
- Tablet: --section-spacing-tablet 24px
- Mobile: --section-spacing-mobile 20px

#### GlobalEngineeringBenefits.css
**Desktop**
- Section title: 48px
- Benefit headline: 24px
- Body text: 16px-18px
- Small text: 14px
- Padding: --section-spacing-desktop horizontally

**Responsive**
- Tablet: --section-spacing-tablet
- Mobile: --section-spacing-mobile

#### GlobalEngineeringTalentPool.css
**Desktop**
- Title: 48px
- Subheading: 24px
- Body: 18px
- Card title: 28px
- Card subtitle: 16px
- Padding: --section-spacing-desktop full spacing

**Responsive**
- Tablet: 40px title (max-width: 1024px)
- Mobile: 32px title, 20px subheading

### AI Implementation Services

#### AIFirstModel.css (Large Complex Component)
**Desktop**
- Top padding: --section-spacing-desktop 0
- Container padding: 0 --container-padding-desktop
- Section titles: 56px, weight 700
- Subheading: 20px
- Feature label: 14px
- Feature title: 24px
- Benefit cards: 28px title, 18px body
- Quote/testimonial: 48px
- Metrics: 32px

**Tablet (max-width: 1024px)**
- Top padding: --section-spacing-tablet 0
- Container: 0 --container-padding-tablet
- Titles reduced to 48px-42px
- Body: 18px, subtitle 14px

**Mobile (max-width: 768px)**
- Top padding: --section-spacing-mobile 0
- Container: 0 --container-padding-mobile
- Titles: 40px-36px
- Body: 16px

**Small Mobile (max-width: 480px)**
- Further reductions to 24px-28px
- Card padding: 24px
- Compact spacing: 16px-20px

### AI Implementation CTA (AIImplementationCTA.css)
**Desktop**
- Title: 48px, weight 700
- Subtitle: 20px, weight 400
- Button: 18px, weight 600, padding 20px 48px

**Responsive**
- Tablet: 120px section spacing
- Mobile: 32px title, 18px subtitle, 16px button text

---

## SOLUTIONS PAGES

All Solutions pages follow consistent patterns with language-specific font families:

### English Text
```css
font-family: var(--font-inter), 'Open Sans', sans-serif;
letter-spacing: -0.01em;
```

### Japanese Text
```css
font-family: var(--font-noto-sans-jp), 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif;
letter-spacing: 0.02em;
```

### Digital Twin Solutions Hero (DigitalTwinHero.css)
**Desktop**
- Padding: --section-spacing-desktop 24px
- Headline: 56px
- Subheading: 24px

**Responsive**
- Tablet: 120px spacing
- Mobile: 32px headline, 18px subheading

### Solutions Overview (OverviewHero.css)
**Desktop**
- Headline: 56px
- Body: 18px
- Padding: --section-spacing-desktop

**Responsive patterns consistent across**
- Predictive Maintenance
- Computer Vision
- Production Optimization
- Global Engineering

---

## ABOUT PAGE

### About Hero (AboutHero.css)
**Desktop**
- Headline: 48px
- Subheading: 24px
- Meta text: 20px (gray)
- Padding: --section-spacing-desktop 0

**Tablet**
- Headline: 40px
- Subheading: 20px

**Mobile**
- Headline: 32px
- Subheading: 18px
- Meta: 16px

### Core Values (CoreValues.css)
**Desktop**
- Section title: 48px
- Subheading: 20px
- Value card title: 48px
- Value description: 24px
- Body: 16px

**Responsive**
- Tablet: 40px title
- Mobile: 40px title, 20px description

### Mission & Vision (MissionVision.css)
**Desktop**
- Title: 48px
- Content title: 28px
- Body: 16px

**Responsive**
- Mobile: 24px content title

### Case Studies Section (OtherCaseStudies.css)
**Desktop**
- Small title: 48px
- Main title: 56px
- Case card title: 28px
- Body: 16px-20px

**Responsive**
- Tablet: 40px, 32px, 48px
- Mobile: 32px, 24px

### Featured Case Study (FeaturedCaseStudy.css)
**Desktop**
- Tag: 14px
- Title: 36px
- Subtitle: 18px
- Body: 16px
- Large metrics: 32px

**Responsive**
- Tablet: 32px title, 28px metrics
- Mobile: 12px tag

---

## CONTACT PAGE (terms.css)

### Main Contact Section
**Desktop**
- Page title: 56px (3.5rem)
- Subheading: 20px (1.25rem)
- Section heading: 28px (1.75rem)
- Body: 16px (1rem)
- Small text: 14px (0.875rem)

**Responsive**
- Tablet: Titles reduced to 40px range
- Mobile: 32px title, 20px subheading

### Form Elements
- Form labels: 16px
- Form body: 14px-16px
- Required notation: 12px (0.75rem)

**Padding**
- Desktop: 6rem top, 2rem sides, 4rem bottom
- Tablet: 3rem sides, 4rem padding
- Mobile: 1.5rem-3rem

---

## HEADER / NAVIGATION (Header.css)

### Desktop Navigation
- Logo height: 40px
- Nav link: 16px, weight 500
- Dropdown items: 16px, weight 400
- Language toggle: 14px
- Padding: 0 40px

### Floating Header
- Height: 80px (desktop)
- Border-radius: 16px
- Box shadow: 0 4px 20px rgba(0,0,0,0.08)

### Tablet (max-width: 1024px)
- Logo height: 32px
- Header height: 60px
- Border-radius: 12px
- Padding: 0 20px

### Mobile Navigation
- Nav link: 18px
- Dropdown trigger: 18px, weight 500
- Dropdown menu items: 16px, weight 400
- Padding: 24px horizontal

---

## FOOTER (Footer.css)

### Footer Section
**Desktop**
- Impact headline: 56px, weight 700
- Column title: 16px, weight 600, uppercase, letter-spacing 0.5px
- Link: 15px, weight 400
- Copyright: 14px
- Office info: 14px

**Padding**
- Desktop: 80px top/bottom, 20px sides
- Tablet: 60px top/bottom
- Mobile: 48px top, 24px bottom, 16px sides

### Logo Container
**Desktop**
- Padding: 40px 60px
- Border-radius: 24px
- Box shadow: 0 4px 24px rgba(0,0,0,0.1)

**Tablet**
- Padding: 32px 48px

**Mobile**
- Padding: 24px 36px

### Footer Grid
**Desktop**
- 4-column grid
- Gap: 60px
- Margin-bottom: 60px

**Tablet**
- 2-column grid
- Gap: 40px

**Mobile**
- 1-column grid
- Gap: 32px

---

## SPECIAL COMPONENTS

### Testimonial (Testimonial.css)
**Desktop**
- Quote mark: 120px, Georgia serif
- Quote text: 22px
- Attribution: 20px
- Author title: 16px
- Padding: 56px 48px
- Section padding: 80px 0

**Responsive**
- Tablet: 100px quote, 38px quote text
- Mobile: 80px quote, 28px quote text, padding 40px 28px

### Button Styles (PrimaryCTA.css)
**Desktop**
- Title: 56px
- Subtitle: 20px
- Button: 18px, padding 20px 48px

**Responsive**
- Tablet: 44px title, 18px subtitle
- Mobile: 36px title, 16px subtitle, 16px button

---

## SPACING PATTERNS SUMMARY

### Vertical Spacing Between Sections
```
Desktop:  200px (--section-spacing-desktop)
Tablet:   120px (--section-spacing-tablet)  
Mobile:   80px  (--section-spacing-mobile)
Extra:    280px (--section-spacing-xl) - rarely used
```

### Horizontal Container Padding
```
Desktop:  60px  (--container-padding-desktop)
Tablet:   40px  (--container-padding-tablet)
Mobile:   20px  (--container-padding-mobile)
Extra:    80px  (--container-padding-xl)
```

### Component Gaps
- Hero content: padding-left 8% (desktop)
- Card grid: gap 40px-80px
- Feature grid: gap 24px-32px
- Navigation: gap 32px
- Footer grid: gap 40px-60px

---

## LINE HEIGHT REFERENCE

| Type | Value | Context |
|------|-------|---------|
| Headings | 1.2 | All h1-h6 |
| Display | 1.3 | Large hero text |
| Body Large | 1.6-1.7 | Paragraphs |
| Body Small | 1.4-1.5 | Captions, meta |
| Navigation | 1.5 | Nav items |
| Footer | 1.6 | Footer text |

---

## RESPONSIVE BREAKPOINT SUMMARY

### Media Query Thresholds
```css
Desktop:        (default styles - no media query needed)
Tablet:         @media (max-width: 1024px)
Mobile:         @media (max-width: 768px)
Small Mobile:   @media (max-width: 480px)
Tablet Large:   @media (max-width: 1365px) - Hero only
```

### Font Size Scaling Pattern
Most components follow this pattern:
1. Define desktop sizes (default)
2. Reduce 10-20% for tablet
3. Reduce 30-40% for mobile
4. Further reduce for small mobile

Example: 56px → 42px → 32px → 28px

