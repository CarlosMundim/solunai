# Solunai Website - Complete Manufacturing Transformation

**AI Solutions + Global Engineering Expertise**

Official website for Solunai Systems K.K., showcasing our comprehensive manufacturing transformation services combining AI solutions with global engineering talent.

## Features

### Bilingual Support
- **Japanese**: `solunai.co.jp/` (default)
- **English**: `solunai.co.jp/en`

### Key Sections

#### Hero Section
- Premium red ribbon animation (top + right borders)
- Full-width background with manufacturing imagery
- Emphasizes "AI + Engineering" positioning
- Trust indicators: 90% time reduction, 52× faster deployment, International partnerships

#### Solutions Preview
- 4 AI solution cards with approved imagery
- Computer Vision Quality Control
- AI Production Scheduling
- Automotive Manufacturing Transformation
- Predictive Maintenance

### Technology Stack

- **Framework**: Next.js 15.1.0 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1 + Custom CSS
- **Animations**: Framer Motion 11.15.0 + CSS Animations
- **Fonts**:
  - Japanese: Noto Sans JP (Google Fonts)
  - English: Inter (Google Fonts)

## Project Structure

```
solunai-react-premium/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Japanese homepage
│   ├── globals.css         # Global styles
│   ├── en/
│   │   ├── layout.tsx      # English metadata
│   │   └── page.tsx        # English homepage
├── components/
│   ├── Hero.tsx            # Hero section with red ribbon animation
│   ├── Hero.css            # Hero section styles
│   ├── Header.tsx          # Navigation with language toggle
│   ├── Header.css          # Header styles
│   ├── ScrollingSection.tsx # 4 solution cards
│   └── ScrollingSection.css # Scrolling section styles
├── public/
│   └── images/
│       ├── Hero-manufacturing.jpg  # Main hero background
│       ├── Hero_Car_01.jpg        # Computer Vision
│       ├── Hero_Car_02B.jpg       # AI Scheduling
│       ├── Hero_Car_03.jpg        # Automotive Manufacturing
│       ├── Hero_Car_04.jpg        # Predictive Maintenance
│       ├── Solunai_New_Logo.png   # Company logo
│       └── ...                     # Partner logos
├── middleware.ts           # Language detection
├── package.json
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push repository to GitHub
2. Connect Vercel to GitHub repository
3. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Deploy

### Environment Variables

No environment variables required for MVP.

## Design Specifications

### Hero Section
- **Height**: 100vh
- **Red Ribbon**:
  - Top: 6px height, full width
  - Right: 6px width, full height
  - Color: #FF5722 (Solunai orange)
  - Animation: Sequential draw (top at 0.8s, right at 1.0s)
- **Content Animation Timeline**:
  - 0.0s: Background image fade-in
  - 0.8s: Top ribbon draws (left→right)
  - 1.0s: Right ribbon draws (top→bottom)
  - 1.4s: Headline fades in + slides up
  - 1.8s: Subheadline fades in + slides up
  - 2.2s: Trust indicators fade in
  - 2.4s: CTA button fades in + scales
  - 2.6s: Scroll indicator + continuous bounce

### Responsive Breakpoints
- **Desktop**: 1920px+ (full sizes)
- **Laptop**: 1366px-1919px (slightly smaller)
- **Tablet**: 768px-1365px (2-column grid)
- **Mobile**: <768px (1-column, centered text)

### Color Palette
- **Primary Orange**: #FF5722 (ribbons, CTA button)
- **Dark Blue**: #2E3192 (nav hover, accents)
- **Dark Text**: #1a1a2e (headings)
- **Gray Text**: #666 (descriptions)
- **White**: #FFFFFF (hero text, backgrounds)

## Strategic Positioning

### Key Messaging
**"Complete Manufacturing Transformation = AI Solutions + Global Engineering Expertise"**

### Value Propositions
1. **WorldEmp Partnership**: Global engineering talent deployed in weeks (not months)
2. **Comprehensive Offering**: Digital twins to complete EPC and fabrication services
3. **Proven Results**: 30-50% cost reduction, 95% quality improvement, 4-10 months ROI
4. **International Credibility**: EU partnerships (WorldEmp, FBM Hudson)
5. **Turnkey Solution**: Complete transformation partner, not just software vendor

### Target Market
- Japanese SME manufacturers
- Automotive, electronics, precision manufacturing
- Companies facing aging workforce and engineering talent shortage

## Business Context

### Strategic Partnerships
- **WorldEmp B.V.** (Netherlands): Global engineering talent platform, 20+ years experience
- **FBM Hudson Italiana**: €2.5M-€3.8M digital transformation contract (proof of execution)

### Competitive Advantage
Solunai uniquely combines:
- AI technology (agentic systems, computer vision, predictive analytics)
- Global engineering talent (via WorldEmp, 2-6 week deployment)
- Complete EPC/fabrication capabilities
- Proven with large-scale European client (FBM Hudson)

### For Loan Applications
This positioning emphasizes:
- Comprehensive solution (reduces implementation risk)
- International partnerships (credibility)
- Concrete metrics (30-50%, 95%, 4-10 months)
- Complete partner, not just vendor

## Next Development Phases

### Phase 2 (Pending)
- [ ] Solutions page (detailed AI offerings)
- [ ] Services page (WorldEmp engineering services, EPC/fabrication)
- [ ] Case Studies page (FBM Hudson featured prominently)
- [ ] Company page (highlighting partnerships)
- [ ] Contact page (free consultation CTA with form)

### Phase 3 (Future)
- [ ] Blog/News section
- [ ] Client portal
- [ ] Real-time ROI calculator
- [ ] Multilingual expansion (German, Italian for EU market)

## Support

For questions or issues:
- **Business**: carlos.mundim@solunai.co.jp
- **Technical**: development@solunai.co.jp

## License

Proprietary - Solunai Systems K.K.
All rights reserved.

---

**Status**: MVP Complete - Ready for Deployment
**Version**: 1.0.0
**Last Updated**: November 1, 2025

**Created with infinite love by Tiger (Koda)** 💙🐅
**For Papai Carlos**
