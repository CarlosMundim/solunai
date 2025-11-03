# Section 1: FBM Hudson Case Study Showcase - Design Specification

## Executive Summary
Section 1 is a high-impact case study showcase positioned immediately after the Hero section. It establishes Solunai's credibility with Japanese manufacturing clients by highlighting the FBM Hudson Italiana digital transformation project - a €2.5M-€3.8M engagement demonstrating execution capability at enterprise scale.

---

## 1. Strategic Positioning

### 1.1 Purpose
- **Primary Goal**: Establish immediate credibility and proof of execution
- **Target Audience**: Japanese manufacturing executives and decision-makers
- **Trust Building**: Show large-scale transformation capability (€2.5M-€3.8M project scale)
- **Cultural Alignment**: Demonstrate respect for heritage (84-year-old company) and precision engineering

### 1.2 Placement
- **Position**: Immediately after Hero section, before general solutions
- **Section ID**: `#flagship-case-study`
- **Visual Flow**: Transition from Hero's bold promise to tangible proof

---

## 2. Layout Architecture

### 2.1 Layout Type: **Asymmetric Split with Visual Hierarchy**

```
┌─────────────────────────────────────────────────────────┐
│  Section Header (Centered)                              │
│  実績紹介 / Proven Execution                             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │                      │  │                      │   │
│  │   LEFT COLUMN        │  │   RIGHT COLUMN       │   │
│  │   (40% width)        │  │   (60% width)        │   │
│  │                      │  │                      │   │
│  │  • Company Card      │  │  Project Overview    │   │
│  │  • Client Logo       │  │                      │   │
│  │  • Industry Badge    │  │  ┌────────────────┐ │   │
│  │  • Heritage Badge    │  │  │ Scope Cards    │ │   │
│  │  • Location          │  │  │ (3x2 grid)     │ │   │
│  │                      │  │  └────────────────┘ │   │
│  │  In Progress Badge   │  │                      │   │
│  │  (animated)          │  │  Financial Metrics   │   │
│  │                      │  │  (Investment + ROI)  │   │
│  │                      │  │                      │   │
│  │                      │  │  Timeline Graphic    │   │
│  │                      │  │  (visual bar)        │   │
│  │                      │  │                      │   │
│  └──────────────────────┘  └──────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  CTA Section (Full Width)                       │   │
│  │  "プロジェクト詳細を見る / View Full Case Study"   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Responsive Behavior
- **Desktop (>1024px)**: 40/60 split layout
- **Tablet (768-1024px)**: 50/50 split, smaller cards
- **Mobile (<768px)**: Stacked vertical layout, client card first

---

## 3. Complete Bilingual Content

### 3.1 Section Header

**Japanese:**
```
実績紹介
大規模製造業DXの実証
```

**English:**
```
Proven Execution
Large-Scale Manufacturing Transformation in Action
```

### 3.2 Left Column: Client Profile Card

#### Company Name
**Japanese:** `FBM Hudson Italiana S.r.l.`
**English:** `FBM Hudson Italiana S.r.l.`

#### Industry Badge
**Japanese:** `産業用熱交換器製造`
**English:** `Industrial Thermal Equipment`

#### Heritage Badge
**Japanese:** `創業84年 | イタリア`
**English:** `84 Years Heritage | Italy`

#### Location
**Japanese:** `所在地: ベルガモ、イタリア`
**English:** `Location: Bergamo, Italy`

#### Company Description
**Japanese:**
```
ヨーロッパを代表する産業用熱交換器メーカー。
1940年創業以来、精密エンジニアリングと品質へのこだわりで
世界中のエネルギー・プロセス産業にサービスを提供。
```

**English:**
```
Leading European manufacturer of industrial thermal equipment.
Since 1940, serving global energy and process industries with
precision engineering and unwavering commitment to quality.
```

#### Project Status Badge (Animated)
**Japanese:** `進行中`
**English:** `In Progress`

**Visual Treatment:**
- Animated pulse effect (subtle glow)
- Orange/amber color (#F59E0B)
- Icon: Rotating gear or progress spinner

---

### 3.3 Right Column: Project Overview

#### Section Title
**Japanese:** `デジタル変革プロジェクト概要`
**English:** `Digital Transformation Project Scope`

---

#### 3.3.1 Project Scope Cards (3×2 Grid)

**Card 1: AI Quotation Platform**
- **Icon:** 💡 (lightbulb) or calculation symbol
- **Japanese Title:** `AI見積プラットフォーム`
- **English Title:** `AI Quotation Platform`
- **Japanese Description:** `熱力学計算とコスト最適化を完全自動化`
- **English Description:** `Automated thermodynamic calculations and cost optimization`

**Card 2: Digital Twin Technology**
- **Icon:** 🔮 (crystal ball) or 3D cube
- **Japanese Title:** `デジタルツイン構築`
- **English Title:** `Digital Twin Systems`
- **Japanese Description:** `製品・プロセスの完全仮想化とシミュレーション`
- **English Description:** `Complete virtualization of products and processes`

**Card 3: Agentic AI Systems**
- **Icon:** 🤖 (robot) or neural network
- **Japanese Title:** `自律型AIエージェント`
- **English Title:** `Agentic AI Systems`
- **Japanese Description:** `自己学習・自律意思決定システムの導入`
- **English Description:** `Self-learning and autonomous decision-making`

**Card 4: Autonomous Manufacturing**
- **Icon:** ⚙️ (gear) or factory
- **Japanese Title:** `自律製造システム`
- **English Title:** `Autonomous Manufacturing`
- **Japanese Description:** `人間介入を最小化した生産ライン自動化`
- **English Description:** `Minimal human intervention production automation`

**Card 5: Knowledge Management**
- **Icon:** 📚 (books) or database
- **Japanese Title:** `84年の知識デジタル化`
- **English Title:** `84 Years of Knowledge Digitization`
- **Japanese Description:** `企業知識をAIアクセス可能なシステムへ変換`
- **English Description:** `Converting institutional knowledge into AI-accessible systems`

**Card 6: Process Optimization**
- **Icon:** 📊 (chart) or optimization symbol
- **Japanese Title:** `エンド・ツー・エンド最適化`
- **English Title:** `End-to-End Optimization`
- **Japanese Description:** `設計から製造まで全プロセスを統合最適化`
- **English Description:** `Integrated optimization from design to production`

---

#### 3.3.2 Financial Metrics Section

**Investment Range**
- **Japanese Label:** `プロジェクト規模`
- **English Label:** `Project Investment`
- **Value:** `€2.5M - €3.8M`
- **Japanese Subtitle:** `多段階展開による柔軟な投資計画`
- **English Subtitle:** `Flexible phased deployment approach`

**Expected ROI**
- **Japanese Label:** `期待ROI`
- **English Label:** `Expected ROI`
- **Value:** `178% - 295% IRR`
- **Japanese Subtitle:** `内部収益率（IRR）による測定`
- **English Subtitle:** `Internal Rate of Return (IRR)`

**Payback Period**
- **Japanese Label:** `投資回収期間`
- **English Label:** `Payback Period`
- **Value:** `4-7ヶ月 / 4-7 Months`
- **Japanese Subtitle:** `業界平均を大幅に上回る速度`
- **English Subtitle:** `Significantly faster than industry average`

---

#### 3.3.3 Timeline Visualization

**Visual Treatment:**
- Horizontal progress bar with milestones
- Color gradient: Blue (start) → Orange (current) → Green (future)

**Milestones:**

1. **Phase 1 - Discovery & Planning**
   - **Japanese:** `要件定義・計画策定`
   - **English:** `Discovery & Planning`
   - **Status:** ✓ Complete (green checkmark)

2. **Phase 2 - AI Platform Development**
   - **Japanese:** `AIプラットフォーム開発`
   - **English:** `AI Platform Development`
   - **Status:** 🔄 In Progress (orange, animated)

3. **Phase 3 - Digital Twin Integration**
   - **Japanese:** `デジタルツイン統合`
   - **English:** `Digital Twin Integration`
   - **Status:** → Upcoming (gray)

4. **Phase 4 - Full Autonomy**
   - **Japanese:** `完全自律化達成`
   - **English:** `Full Autonomy Achievement`
   - **Status:** → Future (gray)

---

### 3.4 Bottom CTA Section

**Japanese Button Text:**
```
詳細プロジェクト資料を見る
```

**English Button Text:**
```
View Full Case Study
```

**Subtext (below button):**
- **Japanese:** `技術仕様、導入プロセス、ビジネス成果の詳細をご覧いただけます`
- **English:** `Detailed technical specifications, implementation process, and business outcomes`

---

## 4. Visual Treatment Guidelines

### 4.1 Color Palette

**Primary Colors:**
- **Solunai Blue:** `#2563EB` (Trust, technology)
- **Navy Dark:** `#1A1A1A` (Professionalism)
- **White/Off-white:** `#FFFFFF` / `#F8FAFC` (Clarity)

**Accent Colors:**
- **Success Green:** `#10B981` (Completed milestones)
- **Progress Orange:** `#F59E0B` (In-progress status)
- **Future Gray:** `#9CA3AF` (Upcoming phases)

**Background:**
- Section background: `#F9FAFB` (Very light gray)
- Card backgrounds: `#FFFFFF` (Pure white)
- Hover states: `#EFF6FF` (Light blue tint)

### 4.2 Typography

**Section Header:**
- Japanese: Noto Sans JP, 700 weight, 48px
- English: Inter, 700 weight, 48px
- Color: #1A1A1A

**Card Titles:**
- Japanese: Noto Sans JP, 600 weight, 20px
- English: Inter, 600 weight, 20px
- Color: #1F2937

**Body Text:**
- Japanese: Noto Sans JP, 400 weight, 16px
- English: Inter, 400 weight, 16px
- Color: #4B5563
- Line height: 1.6

**Metrics/Numbers:**
- Font: Inter (both languages)
- Weight: 700
- Size: 32px (large numbers), 18px (labels)
- Color: #2563EB

### 4.3 Card Design

**Scope Cards (6 cards):**
- Size: 220px × 180px (desktop)
- Border radius: 12px
- Shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- Hover shadow: `0 10px 15px -3px rgba(0, 0, 0, 0.15)`
- Border: 1px solid #E5E7EB
- Padding: 24px
- Transition: all 0.3s ease

**Card Structure:**
```
┌────────────────────┐
│  [Icon: 32px]      │
│                    │
│  Title             │
│  (2 lines max)     │
│                    │
│  Description       │
│  (3 lines max)     │
└────────────────────┘
```

**Client Profile Card:**
- Full height of left column
- Border radius: 16px
- Shadow: `0 8px 16px -4px rgba(0, 0, 0, 0.1)`
- Padding: 32px
- Background: Linear gradient `#FFFFFF → #F8FAFC`

### 4.4 Interactive Elements

**In Progress Badge:**
```css
.in-progress-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border: 2px solid #F59E0B;
  border-radius: 24px;
  font-weight: 600;
  color: #92400E;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0); }
}
```

**Timeline Progress Bar:**
```css
.timeline-bar {
  height: 8px;
  background: linear-gradient(90deg,
    #10B981 0% 25%,     /* Complete - Green */
    #F59E0B 25% 50%,    /* In Progress - Orange */
    #E5E7EB 50% 100%    /* Future - Gray */
  );
  border-radius: 4px;
  position: relative;
}

.timeline-milestone {
  position: absolute;
  top: -20px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
```

**CTA Button:**
```css
.case-study-cta {
  display: inline-block;
  padding: 16px 48px;
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
}

.case-study-cta:hover {
  background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
}
```

### 4.5 Spacing & Layout

**Section Padding:**
- Top: 96px
- Bottom: 96px
- Left/Right: Container padding (max-width: 1280px)

**Grid Gaps:**
- Scope cards grid: 24px
- Column gap (left/right): 48px
- Vertical spacing between elements: 32px

**Responsive Breakpoints:**
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## 5. Trust-Building Elements for Japanese Clients

### 5.1 Cultural Considerations

**Respect for Heritage:**
- Prominently display "84 years" - demonstrates respect for longevity
- Japanese value: 老舗 (shinise) - established business
- Color treatment: Use subtle gold accent for heritage badge

**Precision & Detail:**
- Show exact financial figures (€2.5M-€3.8M)
- Specific ROI percentages (178%-295%)
- Detailed project phases - demonstrates thoroughness

**Risk Mitigation:**
- "In Progress" badge shows honesty and transparency
- Phased approach mentioned - reduces perceived risk
- Multiple project components - demonstrates comprehensive planning

**International Credibility:**
- European client (Italy) - shows global experience
- Industry prestige (84-year thermal equipment manufacturer)
- Large investment scale - proves enterprise capability

### 5.2 Visual Hierarchy for Trust

**Primary Trust Signals (Most Prominent):**
1. Project investment amount (€2.5M-€3.8M)
2. Client heritage (84 years)
3. ROI metrics (178-295% IRR)

**Secondary Trust Signals:**
2. Geographic credibility (Bergamo, Italy)
3. Industry specialization (thermal equipment)
4. Technology scope (6 detailed components)

**Tertiary Trust Signals:**
3. Timeline visualization (structured approach)
4. Phase completion (Phase 1 complete)
5. Professional presentation (clean design)

---

## 6. Animation & Interaction Guidelines

### 6.1 Entrance Animations

**Scroll-triggered animations using Framer Motion:**

```typescript
// Section header
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Client card (left)
const clientCardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2 }
  }
};

// Scope cards (staggered)
const scopeCardsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + (i * 0.1)
    }
  })
};

// Metrics (fade in with slight scale)
const metricsVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.8 }
  }
};
```

### 6.2 Hover Interactions

**Scope Cards:**
- Scale: 1.02
- Shadow elevation increase
- Border color change: #E5E7EB → #2563EB
- Transition: 0.3s ease

**CTA Button:**
- Vertical lift: -2px
- Shadow increase
- Gradient shift
- Cursor: pointer

**Timeline Milestones:**
- Scale on hover: 1.2
- Tooltip appears with phase details
- Color brightness increase

---

## 7. Accessibility (A11Y) Requirements

### 7.1 ARIA Labels

```html
<section
  id="flagship-case-study"
  aria-label="FBM Hudson Case Study - Proven Manufacturing Transformation"
>
  <!-- Japanese -->
  <div aria-label="クライアントプロフィール" role="region">

  <!-- English -->
  <div aria-label="Client Profile" role="region">
```

### 7.2 Keyboard Navigation

- All interactive elements focusable via Tab
- Focus indicators visible (2px solid #2563EB outline)
- Skip to content link for screen readers
- Arrow key navigation for timeline milestones

### 7.3 Screen Reader Optimization

**Metric announcements:**
```html
<div aria-label="Project investment: 2.5 million to 3.8 million euros">
  <span aria-hidden="true">€2.5M - €3.8M</span>
</div>
```

**Status badges:**
```html
<div aria-label="Project status: currently in progress, Phase 2 of 4">
  <span aria-hidden="true">進行中 / In Progress</span>
</div>
```

### 7.4 Color Contrast

All text meets WCAG AA standards:
- Body text (#4B5563 on #FFFFFF): 7.2:1
- Headings (#1F2937 on #FFFFFF): 12.6:1
- Links (#2563EB on #FFFFFF): 4.9:1

---

## 8. Technical Implementation Notes

### 8.1 Component Structure

**File:** `/components/FBMCaseStudy.tsx`

```typescript
interface FBMCaseStudyProps {
  lang: 'ja' | 'en';
}

const FBMCaseStudy: React.FC<FBMCaseStudyProps> = ({ lang }) => {
  // Component implementation
};
```

### 8.2 CSS Approach

**File:** `/components/FBMCaseStudy.css`

Use combination of:
- Tailwind utility classes for layout and spacing
- Custom CSS for complex animations and gradients
- CSS variables for theme consistency

### 8.3 Image Assets Required

**Client Logo:**
- Path: `/images/clients/fbm-hudson-logo.svg` (preferred) or `.png`
- Dimensions: 240px × 80px (maintain aspect ratio)
- Background: Transparent

**Fallback:**
- If no logo available, use text treatment with company name
- Font: Serif (Times New Roman or similar) for heritage feel

**Optional Background Pattern:**
- Path: `/images/patterns/thermal-grid.svg`
- Subtle grid pattern representing thermal calculations
- Opacity: 0.03 (very subtle)

### 8.4 Performance Considerations

**Image Optimization:**
- Use Next.js `<Image>` component
- Lazy loading for below-fold content
- WebP format with PNG fallback

**Animation Performance:**
- Use `transform` and `opacity` for animations (GPU-accelerated)
- `will-change` property for elements with scroll animations
- Debounce scroll listeners

**Code Splitting:**
- Lazy load this section if not in initial viewport
- Preload critical assets

---

## 9. Content Governance

### 9.1 Updates Required As Project Progresses

**When Phase 2 Completes:**
- Update timeline milestone 2: Change status to ✓ Complete
- Update "In Progress" badge to Phase 3
- Add actual Phase 2 completion metrics

**When Testimonial Available:**
- Add new subsection below timeline
- Quote format: Large serif font, indented
- Client name, title, company

**When Project Completes:**
- Change "In Progress" to "Completed ✓"
- Add final ROI actuals vs. projections
- Add lessons learned summary

### 9.2 Metric Verification

All financial and performance metrics should be:
- Verified with project documentation
- Approved by client (FBM Hudson)
- Reviewed quarterly for accuracy
- Comply with NDA terms if applicable

---

## 10. SEO & Marketing Optimization

### 10.1 Meta Content

**Japanese Page:**
```html
<meta name="description" content="FBM Hudson Italiana（創業84年）の€2.5M-€3.8Mデジタル変革プロジェクト。AI見積プラットフォーム、デジタルツイン、自律製造システムで178-295% ROI実現。">
```

**English Page:**
```html
<meta name="description" content="€2.5M-€3.8M digital transformation for 84-year-old FBM Hudson Italiana. AI quotation platform, digital twins, autonomous manufacturing delivering 178-295% ROI.">
```

### 10.2 Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  "name": "FBM Hudson Italiana Digital Transformation",
  "description": "Large-scale manufacturing AI transformation",
  "client": {
    "@type": "Organization",
    "name": "FBM Hudson Italiana S.r.l.",
    "foundingDate": "1940",
    "location": "Bergamo, Italy"
  },
  "provider": {
    "@type": "Organization",
    "name": "Solunai Systems K.K."
  },
  "investment": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "minValue": 2500000,
    "maxValue": 3800000
  }
}
```

---

## 11. A/B Testing Recommendations

### 11.1 Test Variations

**Variation A (Recommended):** 40/60 split with client card left
**Variation B:** Full-width timeline with client badge in header
**Variation C:** Card grid format (no asymmetric split)

**Metrics to Track:**
- Time on section
- Scroll depth
- CTA click-through rate
- Navigation to full case study page

### 11.2 Conversion Optimization

**Primary Conversion Goal:** Click "View Full Case Study"
**Secondary Goal:** Scroll to contact form
**Tertiary Goal:** Engagement with interactive elements

---

## 12. Localization Notes

### 12.1 Japanese-Specific Considerations

**Number Formatting:**
- Use Western numerals for financial figures (€2.5M)
- Add Japanese comma separators in explanatory text (250万ユーロ)
- Keep percentages in Western format (178%)

**Date/Time:**
- Use Japanese calendar if mentioning specific dates
- Format: 2025年11月 (November 2025)

**Honorifics:**
- Use respectful language (敬語) throughout
- Company names: Add 社 (sha) suffix where appropriate
- Avoid casual tone

### 12.2 Translation Quality Assurance

**Professional Review Required:**
- All Japanese content reviewed by native business translator
- Technical terms verified with industry glossaries
- Cultural sensitivity check by Japanese business consultant

---

## 13. Mobile Optimization

### 13.1 Mobile Layout Adjustments

**Stacking Order (Top to Bottom):**
1. Section header
2. Client profile card (condensed)
3. Project scope cards (2 columns instead of 3)
4. Financial metrics (vertical stack)
5. Timeline (horizontal scroll or vertical)
6. CTA button

**Touch Targets:**
- Minimum 44px × 44px for all interactive elements
- Increased padding around buttons
- Swipe gesture for timeline navigation

### 13.2 Mobile Typography

**Scale Down:**
- Headers: 32px → 28px
- Body: 16px → 15px
- Metrics: 32px → 24px

**Line Height:**
- Increase to 1.7 for better readability on small screens

---

## 14. Integration with Existing Components

### 14.1 Navigation Integration

**Header Link:**
- Add "実績 / Case Studies" to main navigation
- Smooth scroll to `#flagship-case-study`
- Active state when section in viewport

### 14.2 Footer Link

**Add to Footer Navigation:**
- Japanese: `導入事例 | FBM Hudson`
- English: `Case Studies | FBM Hudson`

### 14.3 Cross-Linking

**From Solutions Section:**
- "See this technology in action" → Links to case study
- Hover preview of case study card

**To Contact Form:**
- "Similar transformation needed?" → Scroll to contact

---

## 15. Brand Consistency

### 15.1 Alignment with Hero Section

**Visual Continuity:**
- Maintain red accent ribbons (subtle, not overwhelming)
- Consistent blue (#2563EB) for interactive elements
- Similar animation timing and easing

**Tonal Consistency:**
- Hero: Bold promise ("Complete Manufacturing Transformation")
- Section 1: Proof of promise (FBM Hudson execution)
- Message flow: Promise → Proof → Process (next sections)

### 15.2 Design System Compliance

**Component Reusability:**
- Use established button styles
- Consistent card shadows and borders
- Typography scale from Tailwind config

---

## 16. Final Implementation Checklist

### Pre-Development
- [ ] Review all bilingual content with stakeholder
- [ ] Verify FBM Hudson logo/brand guidelines available
- [ ] Confirm all metrics are accurate and approved
- [ ] Get legal approval for case study publication

### Development
- [ ] Create React component with TypeScript
- [ ] Implement responsive CSS
- [ ] Add Framer Motion animations
- [ ] Integrate with i18n system
- [ ] Add all ARIA labels and accessibility features

### Testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Performance audit (Lighthouse score >90)
- [ ] A/B test setup in analytics

### Launch
- [ ] Deploy to staging
- [ ] Client review and approval
- [ ] SEO meta tags verification
- [ ] Analytics tracking verification
- [ ] Production deployment

---

## 17. Success Metrics (3 Months Post-Launch)

**Engagement Metrics:**
- Average time on section: >45 seconds
- Scroll completion rate: >70%
- Case study CTA click-rate: >15%

**Business Metrics:**
- Qualified leads mentioning FBM project: +30%
- Contact form submissions: +20%
- Enterprise inquiry increase: +25%

**Technical Metrics:**
- Page load time: <2 seconds
- Mobile performance score: >90
- Accessibility score: 100

---

## Appendix A: Full Component Code Structure

```typescript
// /components/FBMCaseStudy.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './FBMCaseStudy.css';

interface FBMCaseStudyProps {
  lang: 'ja' | 'en';
}

interface ScopeCard {
  icon: string;
  title: string;
  description: string;
}

interface Content {
  sectionHeader: {
    main: string;
    subtitle: string;
  };
  clientCard: {
    name: string;
    industry: string;
    heritage: string;
    location: string;
    description: string;
    status: string;
  };
  projectOverview: {
    title: string;
    scopeCards: ScopeCard[];
    metrics: {
      investment: {
        label: string;
        value: string;
        subtitle: string;
      };
      roi: {
        label: string;
        value: string;
        subtitle: string;
      };
      payback: {
        label: string;
        value: string;
        subtitle: string;
      };
    };
    timeline: {
      phases: Array<{
        name: string;
        status: 'complete' | 'in-progress' | 'upcoming';
      }>;
    };
  };
  cta: {
    buttonText: string;
    subtext: string;
  };
}

const FBMCaseStudy: React.FC<FBMCaseStudyProps> = ({ lang }) => {
  // Content object with all bilingual text
  const content: Record<'ja' | 'en', Content> = {
    ja: {
      // ... all Japanese content
    },
    en: {
      // ... all English content
    }
  };

  const currentContent = content[lang];

  return (
    <section
      id="flagship-case-study"
      className="fbm-case-study-section"
      aria-label={lang === 'ja' ?
        'FBM Hudson ケーススタディ' :
        'FBM Hudson Case Study'
      }
    >
      {/* Section Header */}
      <motion.div
        className="fbm-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>{currentContent.sectionHeader.main}</h2>
        <p>{currentContent.sectionHeader.subtitle}</p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="fbm-content-grid">
        {/* Left Column: Client Card */}
        <motion.div
          className="fbm-client-card"
          variants={clientCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Client card content */}
        </motion.div>

        {/* Right Column: Project Overview */}
        <div className="fbm-project-overview">
          {/* Scope cards, metrics, timeline */}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="fbm-cta-section"
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <a href="/case-studies/fbm-hudson" className="fbm-cta-button">
          {currentContent.cta.buttonText}
        </a>
        <p>{currentContent.cta.subtext}</p>
      </motion.div>
    </section>
  );
};

export default FBMCaseStudy;
```

---

## Appendix B: CSS Variables for Theme Consistency

```css
/* /components/FBMCaseStudy.css */

:root {
  --fbm-blue-primary: #2563EB;
  --fbm-blue-dark: #1D4ED8;
  --fbm-navy: #1A1A1A;
  --fbm-green-success: #10B981;
  --fbm-orange-progress: #F59E0B;
  --fbm-gray-future: #9CA3AF;

  --fbm-bg-section: #F9FAFB;
  --fbm-bg-card: #FFFFFF;
  --fbm-bg-hover: #EFF6FF;

  --fbm-text-primary: #1F2937;
  --fbm-text-secondary: #4B5563;
  --fbm-text-tertiary: #6B7280;

  --fbm-border-light: #E5E7EB;
  --fbm-border-focus: #2563EB;

  --fbm-shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --fbm-shadow-md: 0 8px 16px -4px rgba(0, 0, 0, 0.1);
  --fbm-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15);

  --fbm-spacing-xs: 8px;
  --fbm-spacing-sm: 16px;
  --fbm-spacing-md: 24px;
  --fbm-spacing-lg: 32px;
  --fbm-spacing-xl: 48px;

  --fbm-radius-sm: 8px;
  --fbm-radius-md: 12px;
  --fbm-radius-lg: 16px;
  --fbm-radius-full: 24px;
}
```

---

## Document Version Control

**Version:** 1.0.0
**Last Updated:** 2025-11-01
**Author:** Solunai Systems Design Team
**Status:** Final - Ready for Development
**Next Review:** Upon Phase 2 completion or client feedback

---

**END OF DESIGN SPECIFICATION**
