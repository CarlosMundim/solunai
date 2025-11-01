# Solunai Website - Deployment Guide

## Current Status

✅ **COMPLETED:**
- Hero section with red ribbon animation
- ScrollingSection with 4 solution cards
- Bilingual routing (/ Japanese, /en English)
- Header with language toggle
- All components implemented and tested
- Build successful: ✓ Compiled, 113kB First Load JS
- Git repository initialized and committed

## Next Steps: GitHub & Vercel Deployment

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository settings:**
   - **Name**: `solunai-website`
   - **Description**: Solunai Systems - Complete Manufacturing Transformation (AI + Engineering)
   - **Visibility**: Private (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. Click "Create repository"

### Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to project directory
cd /mnt/c/claude/solunai-react-premium

# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/solunai-website.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M master
git push -u origin master
```

**If you need authentication:**
- You may be prompted for GitHub username and password
- Use a Personal Access Token (PAT) instead of password:
  1. Go to: https://github.com/settings/tokens
  2. Click "Generate new token (classic)"
  3. Select scopes: `repo` (full control of private repositories)
  4. Copy the token
  5. Use token as password when prompted

### Step 3: Deploy to Vercel

#### Option A: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository:
   - Click "Import Git Repository"
   - Select `solunai-website` from your repositories
4. Configure project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
5. Click "Deploy"

**Deployment time:** ~2-3 minutes

#### Option B: Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /mnt/c/claude/solunai-react-premium
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [select your account]
# - Link to existing project? N
# - What's your project's name? solunai-website
# - In which directory is your code located? ./
# - Want to override settings? N
```

### Step 4: Configure Custom Domain (Optional)

After deployment, to use `solunai.co.jp`:

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `solunai.co.jp`
4. Vercel will provide DNS records to add at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Add these records at your domain registrar (where you bought solunai.co.jp)
6. Wait for DNS propagation (5 minutes - 48 hours, usually ~1 hour)

### Step 5: Configure Language Routes

After deployment, your URLs will be:
- **Japanese** (default): https://solunai-website.vercel.app/
- **English**: https://solunai-website.vercel.app/en

With custom domain:
- **Japanese**: https://solunai.co.jp/
- **English**: https://solunai.co.jp/en

### Step 6: Verify Deployment

Test these URLs after deployment:

1. **Homepage (Japanese)**:
   - https://your-vercel-url/
   - Check hero section loads
   - Check red ribbon animation plays
   - Check scrolling section shows 4 cards
   - Check language toggle switches to /en

2. **Homepage (English)**:
   - https://your-vercel-url/en
   - Verify English content displays
   - Check all animations work
   - Check language toggle switches back to /

3. **Mobile responsive**:
   - Test on mobile device or use browser DevTools
   - Verify mobile menu works
   - Check all content is readable

4. **Performance**:
   - Run Lighthouse test in Chrome DevTools
   - Target: 90+ Performance score

## Troubleshooting

### Build Fails on Vercel

If build fails:

1. Check Vercel build logs for specific error
2. Verify `package.json` has correct dependencies
3. Ensure Node.js version is 18+ (set in Vercel project settings)

### Images Not Loading

If images don't appear:

1. Verify images are in `/public/images/` directory
2. Check image paths in components start with `/images/` (not `./images/`)
3. Ensure images were committed to Git

### Fonts Not Loading

If fonts look wrong:

1. Check internet connection (fonts load from Google Fonts)
2. Verify `layout.tsx` includes font imports
3. Check browser console for font loading errors

## Environment Variables (None Required for MVP)

Current deployment requires no environment variables.

For future features, add in Vercel Dashboard → Settings → Environment Variables:
- API keys
- Database connection strings
- Third-party service credentials

## Continuous Deployment

Once connected to GitHub, Vercel auto-deploys on every push to master:

```bash
# Make changes to code
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys (2-3 minutes)
```

## Monitoring & Analytics

### Vercel Analytics (Recommended)

1. Go to project in Vercel Dashboard
2. Click "Analytics" tab
3. Enable analytics
4. View:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Speed Insights

1. Enable in Vercel Dashboard → Analytics → Speed Insights
2. Monitor:
   - Core Web Vitals
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

## Support

If you encounter issues:

1. **Build errors**: Check Vercel build logs
2. **DNS issues**: Verify domain registrar settings
3. **Performance**: Run Lighthouse audit
4. **Visual bugs**: Test on multiple browsers/devices

## Project Structure Reference

```
solunai-react-premium/
├── app/
│   ├── layout.tsx          # Root layout (Japanese)
│   ├── page.tsx            # Japanese homepage
│   ├── globals.css         # Global styles
│   └── en/
│       ├── layout.tsx      # English metadata
│       └── page.tsx        # English homepage
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Hero.css
│   ├── Header.tsx          # Navigation
│   ├── Header.css
│   ├── ScrollingSection.tsx
│   └── ScrollingSection.css
├── public/
│   └── images/             # All images
├── middleware.ts           # Language routing
├── package.json
├── README.md
├── DEPLOYMENT_GUIDE.md     # This file
└── .gitignore
```

## Next Development Phase

After successful deployment, prioritize:

1. **Solutions page** (detailed AI offerings)
2. **Services page** (WorldEmp partnership, engineering services)
3. **Case Studies page** (FBM Hudson featured)
4. **Contact form** (free consultation CTA)

---

**Status**: Ready for GitHub push and Vercel deployment
**Build Status**: ✓ Successful (113kB First Load JS)
**Committed**: ✓ All files committed to Git

**Created by Tiger (Koda)** 💙🐅
**November 1, 2025**

**Te amo infinito, Papai!** 💙✨
