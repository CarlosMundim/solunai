# SOLUNAI TYPOGRAPHY - QUICK REFERENCE GUIDE

## At-a-Glance Font Sizes

### Headings (Desktop First)
- **H1**: 56px (Hero), 48px (Main sections) | Weight: 700
- **H2**: 36-46px | Weight: 600
- **H3**: 28-32px | Weight: 600
- **H4**: 24-28px | Weight: 600

### Body Text (Desktop First)
- **Large**: 20px (featured, subheadlines)
- **Regular**: 16px (standard body)
- **Small**: 14px (meta, labels)
- **Tiny**: 12px (fine print)

### Buttons & CTAs
- **Desktop**: 18px | Padding: 20px 48px
- **Mobile**: 16px | Padding: 16px 32px

### Navigation
- **Desktop Links**: 16px, weight 500
- **Mobile Links**: 18px, weight 500
- **Dropdowns**: 16px, weight 400

---

## Font Families

```
English: Inter (primary), Open Sans (fallback)
Japanese: Noto Sans JP (primary), Hiragino Kaku Gothic Pro (fallback)
Headings: Space Grotesk (all languages)
Special: Georgia serif (testimonial quotes)
```

---

## Spacing Values (CSS Variables)

### Between Sections (Vertical)
```
Desktop:  200px (--section-spacing-desktop)
Tablet:   120px (--section-spacing-tablet)
Mobile:   80px  (--section-spacing-mobile)
```

### Container Padding (Horizontal)
```
Desktop:  60px  (--container-padding-desktop)
Tablet:   40px  (--container-padding-tablet)
Mobile:   20px  (--container-padding-mobile)
```

### Component Padding
- Large: 40-48px
- Medium: 32px
- Small: 24px
- Compact: 16-20px

---

## Responsive Font Size Adjustments

### Hero Headlines
| Breakpoint | Size |
|-----------|------|
| Desktop (1365px+) | 56px |
| Tablet (1024px) | 42px |
| Mobile (768px) | 32px |
| Small Mobile (480px) | 28px |

### Section Titles
| Breakpoint | Size |
|-----------|------|
| Desktop | 48px |
| Tablet | 40px |
| Mobile | 32px |

### Body Text
| Breakpoint | Size |
|-----------|------|
| Desktop | 16-20px |
| Tablet | 15-18px |
| Mobile | 15-16px |

---

## Current Breakpoints

- **Desktop**: >= 1365px (main styles)
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 767px
- **Small**: <= 480px

---

## Key CSS Files

1. **globals.css** - Variables, base fonts, spacing scales
2. **Hero.css** - Homepage hero typography
3. **Header.css** - Navigation fonts
4. **Footer.css** - Footer typography
5. **PrimaryCTA.css** - CTA button styles
6. **AIFirstModel.css** - Large component example

---

## Line Heights & Letter Spacing

| Type | Line Height | Letter Spacing |
|------|------------|-----------------|
| Headings | 1.2 | -0.02em |
| Body (EN) | 1.6-1.7 | -0.01em |
| Body (JP) | 1.6 | 0.02em |
| Nav | 1.5 | default |

---

## Font Weights Used

- 400: Body text, regular content
- 500: Navigation, medium emphasis
- 600: Headings, subheadings, labels
- 700: Main headings (H1), display text

---

## Color Palette for Text

- **Primary**: #1a2332 (Steel Navy - headings, nav)
- **Secondary**: #475569 (Titanium Grey - body)
- **Accent**: #f5480a (Solunai Blaze - CTAs, highlights)
- **White**: #ffffff (on dark backgrounds)
- **Light**: #f8fafc (Precision White - backgrounds)

---

## Common Spacing Gaps

| Gap | Value | Usage |
|-----|-------|-------|
| Tight | 8-12px | Between small items |
| Compact | 16px | Inline spacing |
| Standard | 24-32px | Element spacing |
| Medium | 40-60px | Card/section spacing |
| Large | 80-100px | Grid items |

---

## Design System Recommendations

### Need: Font Size Scale (CSS Variables)
Create: `--font-size-xs` through `--font-size-9xl` (12px to 72px)

### Need: Spacing Scale (CSS Variables)
Create: `--spacing-xs` through `--spacing-7xl` (4px to 200px)

### Need: Typography Utilities
Create: `.font-display-xl`, `.font-heading-lg`, `.font-body-base` classes

### Need: Standardization
Consolidate font-family fallback chains across all components

---

## Files Documented

- `/mnt/c/claude/solunai-website/app/globals.css` (variables)
- `/mnt/c/claude/solunai-website/components/Hero.css`
- `/mnt/c/claude/solunai-website/components/Header.css`
- `/mnt/c/claude/solunai-website/components/Footer.css`
- `/mnt/c/claude/solunai-website/components/PrimaryCTA.css`
- All About page components
- All Services page components
- All Solutions page components
- Total: 90+ CSS files analyzed

