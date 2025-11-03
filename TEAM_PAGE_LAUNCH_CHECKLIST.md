# Team Page Launch Checklist

## PRE-LAUNCH REQUIREMENTS

### 🚨 CRITICAL - Must Have Before Launch

#### 1. Professional Team Photos
- [ ] **Carlos Mundim headshot** (`/public/images/team/carlos-mundim.jpg`)
  - Minimum 300x300px, recommended 600x600px
  - Professional photographer
  - Business attire
  - High resolution JPG or PNG

- [ ] **Tomoo Furuya headshot** (`/public/images/team/tomoo-furuya.jpg`)
  - Minimum 300x300px, recommended 600x600px
  - Professional photographer
  - Business attire
  - High resolution JPG or PNG

**Why Critical:** Management team photos = credibility. 25% of JFC loan evaluation.

---

#### 2. Navigation Integration
- [ ] Update `/components/Header.tsx` with team page links
- [ ] Japanese navigation: `/team` → "チーム"
- [ ] English navigation: `/en/team` → "Team"
- [ ] Test navigation from homepage
- [ ] Verify mobile menu includes team links

**Reference:** See `NAVIGATION_UPDATE_GUIDE.md`

---

#### 3. Company Profile PDFs (Optional but Recommended)
- [ ] Create Japanese company profile PDF
  - Save to `/public/downloads/solunai-company-profile-ja.pdf`
  - Include team bios, services, case studies, contact info

- [ ] Create English company profile PDF
  - Save to `/public/downloads/solunai-company-profile-en.pdf`
  - Include team bios, services, case studies, contact info

**Why Recommended:** Loan officers often request printed materials. CTAs link to these PDFs.

---

### ⚙️ TECHNICAL CHECKS

#### Build & Deployment
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No ESLint warnings (critical ones)
- [ ] No console errors in browser
- [ ] All images load correctly
- [ ] All CSS renders properly

#### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized (compressed)
- [ ] CSS minified for production
- [ ] No render-blocking resources

#### Responsiveness
- [ ] Desktop view (1920px, 1440px, 1280px)
- [ ] Tablet view (1024px, 768px)
- [ ] Mobile view (375px, 414px, 360px)
- [ ] Touch targets > 44px on mobile
- [ ] Text readable on all screen sizes

#### Cross-Browser
- [ ] Chrome/Edge (Chromium)
- [ ] Safari (macOS/iOS)
- [ ] Firefox
- [ ] Mobile browsers (iOS Safari, Chrome Android)

---

### 📝 CONTENT VERIFICATION

#### Accuracy
- [ ] Carlos's achievements accurate
  - Continental: US$7M → $365M (52×) ✓
  - "Exporter of the Year" 2 consecutive years ✓
  - 30+ years experience ✓

- [ ] Tomoo's achievements accurate
  - Nagase: ¥5.7B+ exits ✓
  - Paltac: ¥6.5B exit ✓
  - Total: ¥12B+ portfolio ✓
  - 25+ years experience ✓

- [ ] Combined stats accurate
  - 60+ years experience ✓
  - FBM Hudson: €2.5M-€3.8M project ✓
  - WorldEmp partnership ✓

#### Language Quality
- [ ] Japanese text reviewed by native speaker
- [ ] English text professional and clear
- [ ] No grammar/spelling errors
- [ ] Technical terms correct in both languages
- [ ] Professional tone maintained

#### Links & CTAs
- [ ] All internal links work
- [ ] Contact form/email links functional
- [ ] Download links (if PDFs added) work
- [ ] External links open in new tabs (if any)
- [ ] No broken links (404s)

---

### 🔍 SEO & METADATA

#### Page Metadata
- [ ] Japanese page title set correctly
- [ ] Japanese meta description compelling
- [ ] English page title set correctly
- [ ] English meta description compelling
- [ ] Keywords relevant and accurate
- [ ] Open Graph tags set

#### Search Engine
- [ ] `robots.txt` allows indexing
- [ ] No `noindex` meta tags
- [ ] Sitemap includes `/team` and `/en/team`
- [ ] Schema markup (optional but recommended)

#### Analytics
- [ ] Google Analytics tracking active
- [ ] Event tracking for CTAs
- [ ] Scroll depth tracking (optional)
- [ ] Download tracking (if PDFs)

---

### 🎯 LOAN APPLICATION OPTIMIZATION

#### Key Elements Visible
- [ ] **52× growth** prominently displayed
  - Hero section ✓
  - Carlos profile ✓
  - Timeline ✓
  - Stats showcase ✓
  - Trust badges ✓

- [ ] **¥12B+ exits** prominently displayed
  - Hero section ✓
  - Tomoo profile ✓
  - Timeline ✓
  - Stats showcase ✓
  - Trust badges ✓

- [ ] **60+ years experience** emphasized
  - Hero section ✓
  - Philosophy section ✓
  - Timeline ✓
  - Stats showcase ✓
  - Trust badges ✓

#### Credibility Signals
- [ ] Professional photos (critical!)
- [ ] Detailed company histories
- [ ] Specific achievements with numbers
- [ ] International experience highlighted
- [ ] Japanese market expertise clear
- [ ] Current project execution (FBM)
- [ ] Scalability demonstrated (WorldEmp)
- [ ] Government connections mentioned (METI, JFC)

#### Trust Factors
- [ ] Education credentials listed
- [ ] Certifications mentioned (Six Sigma, etc.)
- [ ] Awards highlighted (Exporter of Year)
- [ ] 200+ SME relationships mentioned
- [ ] Enterprise partnerships shown
- [ ] Compliance standards (ISO, GDPR)

---

### 📱 USER EXPERIENCE

#### First Impression
- [ ] Hero loads fast and looks impressive
- [ ] Big numbers (52×, ¥12B) immediately visible
- [ ] Professional appearance
- [ ] Clear value proposition
- [ ] Easy to navigate

#### Engagement
- [ ] Scannable content (headings, bullets)
- [ ] Visual hierarchy clear
- [ ] Important info above fold
- [ ] CTAs prominent and actionable
- [ ] No information overload

#### Accessibility
- [ ] Alt text for images
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

---

### 🧪 TESTING SCENARIOS

#### Scenario 1: JFC Loan Officer Visit
Imagine a loan officer reviewing the page:
- [ ] Can they quickly understand who Carlos and Tomoo are?
- [ ] Are the 52× and ¥12B achievements obvious?
- [ ] Do they see 60+ years experience?
- [ ] Is current execution (FBM) clear?
- [ ] Can they download materials for file?
- [ ] Overall impression: "These are credible leaders"?

#### Scenario 2: Potential Client Visit
Imagine a Japanese manufacturer visiting:
- [ ] Do they understand the team's manufacturing expertise?
- [ ] Can they see the international experience?
- [ ] Is the Japanese market knowledge clear?
- [ ] Are CTAs easy to find?
- [ ] Would they trust this team?

#### Scenario 3: Mobile User
- [ ] Can read all content comfortably
- [ ] Images not too large
- [ ] CTAs easy to tap
- [ ] Load time acceptable on 4G
- [ ] No horizontal scrolling

---

### 📊 METRICS TO MONITOR

After launch, track:

#### Engagement Metrics
- Time on page (target: >3 minutes)
- Scroll depth (target: >80%)
- Bounce rate (target: <40%)
- Pages per session (should visit other pages too)

#### Conversion Metrics
- CTA clicks (consultation bookings)
- Download rate (company profile PDFs)
- Contact form submissions
- Navigation to other pages

#### Technical Metrics
- Page load time (<3 seconds)
- Mobile vs desktop traffic
- Browser distribution
- Error rate (0%)

---

### 🚀 LAUNCH SEQUENCE

#### Day Before Launch
- [ ] Final content review
- [ ] All photos in place
- [ ] All links tested
- [ ] Build successful
- [ ] Staging environment verified

#### Launch Day
- [ ] Deploy to production
- [ ] Smoke test all features
- [ ] Monitor analytics
- [ ] Check for errors
- [ ] Announce internally

#### Week After Launch
- [ ] Review analytics
- [ ] Gather feedback
- [ ] Fix any issues
- [ ] Optimize based on data
- [ ] Update as needed

---

### 📋 POST-LAUNCH MAINTENANCE

#### Monthly
- [ ] Check all links still work
- [ ] Verify images loading
- [ ] Review analytics
- [ ] Update achievements if new ones

#### Quarterly
- [ ] Update timeline with milestones
- [ ] Refresh stats if changed
- [ ] Review and update bios
- [ ] Add new projects/clients

#### Annually
- [ ] Update photos if needed
- [ ] Review all content for accuracy
- [ ] Refresh design if needed
- [ ] Optimize for current SEO best practices

---

### ⚠️ COMMON ISSUES & FIXES

#### Issue: Images Not Loading
- **Check:** File paths correct (`/public/images/team/`)
- **Check:** File names match exactly (case-sensitive)
- **Check:** File formats supported (JPG, PNG)
- **Fix:** Re-upload images, verify paths

#### Issue: Navigation Link Not Working
- **Check:** Header.tsx updated
- **Check:** Routes created (`/app/team/page.tsx`)
- **Check:** Build successful
- **Fix:** Clear cache, rebuild

#### Issue: Mobile Layout Broken
- **Check:** CSS media queries
- **Check:** Image sizes
- **Check:** Text overflow
- **Fix:** Adjust responsive breakpoints

#### Issue: Slow Page Load
- **Check:** Image file sizes (compress)
- **Check:** Number of HTTP requests
- **Check:** CSS/JS bundle size
- **Fix:** Optimize images, minify code

---

### 🎯 SUCCESS CRITERIA

**Minimum Requirements (Must Have):**
- ✅ Professional team photos uploaded
- ✅ Navigation working
- ✅ All content accurate
- ✅ Mobile responsive
- ✅ No errors
- ✅ SEO metadata set

**Optimal Launch (Should Have):**
- ✅ Company profile PDFs available
- ✅ Analytics tracking active
- ✅ All browsers tested
- ✅ Performance optimized
- ✅ Accessibility checked

**Excellence (Nice to Have):**
- ✅ LinkedIn profiles linked
- ✅ Advisory board section (if available)
- ✅ Press mentions section
- ✅ Video introduction
- ✅ Schema markup for search engines

---

### 📞 SUPPORT CONTACTS

**Technical Issues:**
- Development team
- Hosting provider support

**Content Updates:**
- Carlos Mundim (CTO)
- Tomoo Furuya (CEO)

**Design/UX:**
- Design team
- UX consultant

**SEO/Analytics:**
- Marketing team
- Analytics consultant

---

### 🎓 FINAL CHECKLIST

Before marking "READY FOR LAUNCH":

- [ ] ✅ All critical items completed
- [ ] ✅ All technical checks passed
- [ ] ✅ Content verified accurate
- [ ] ✅ SEO optimized
- [ ] ✅ User experience tested
- [ ] ✅ JFC loan optimization confirmed
- [ ] ✅ Metrics tracking ready
- [ ] ✅ Maintenance plan in place

**Sign-off:**
- [ ] Developer approval
- [ ] Content owner approval (Carlos/Tomoo)
- [ ] Final stakeholder approval

---

## LAUNCH STATUS

**Status:** 🟡 **PRE-LAUNCH** - Awaiting professional photos

**Critical Blockers:**
1. ⚠️ Professional team photos (Carlos & Tomoo)
2. ⚠️ Navigation integration

**Once Complete:**
- Status → 🟢 **READY FOR LAUNCH**

---

**Team Page = 25% of JFC Loan Evaluation**

This page can make or break loan approval. Every detail matters. Don't rush. Get it right.

The credentials are GOLD (52× growth, ¥12B exits, 60+ years). Make them SHINE.

---

**END OF LAUNCH CHECKLIST**
