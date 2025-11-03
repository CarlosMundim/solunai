# Contact Page - Quick Start Guide

## View the Contact Page

### Development Server
```bash
npm run dev
```

Then visit:
- Japanese: http://localhost:3000/contact
- English: http://localhost:3000/en/contact

---

## File Locations

### Components
```
/components/contact/
  ├── ContactHero.tsx              # Hero section
  ├── FreeConsultationOffer.tsx    # Value prop
  ├── ContactForm.tsx              # Main form (4 steps)
  ├── OfficeInformation.tsx        # Address/contact
  ├── MapLocation.tsx              # Map & access
  ├── AlternativeContacts.tsx      # Other inquiries
  ├── QuickLinks.tsx               # Resources
  ├── TrustIndicators.tsx          # Credibility
  ├── ContactFAQ.tsx               # FAQs
  └── FinalCTA.tsx                 # Final CTA
```

### Routes
```
/app/contact/
  ├── page.tsx       # Japanese page
  └── layout.tsx     # Japanese SEO

/app/en/contact/
  ├── page.tsx       # English page
  └── layout.tsx     # English SEO
```

---

## Customize Before Launch

### 1. Office Information (HIGH PRIORITY)
**File**: `/components/contact/OfficeInformation.tsx`

Replace placeholders:
```typescript
address: '〒[郵便番号]\n神奈川県[市区町村]\n[番地・建物名]'
phone: '[電話番号]'
line: 'LINE ID: [LINE ID]'
```

### 2. Map Location (HIGH PRIORITY)
**File**: `/components/contact/MapLocation.tsx`

Add Google Maps embed:
```typescript
// Line ~58, replace:
const mapUrl = "your-google-maps-embed-url";

// And uncomment the iframe (lines ~70-77)
```

### 3. Final CTA Phone (HIGH PRIORITY)
**File**: `/components/contact/FinalCTA.tsx`

Replace:
```typescript
phoneNumber: '[電話番号]'
```

### 4. Form Submission (CRITICAL)
**File**: `/components/contact/ContactForm.tsx`

Implement API call in `handleSubmit` function (line ~461):
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

const result = await response.json();
if (result.success) {
  setIsSubmitted(true);
}
```

---

## Create Backend API

### Example: Next.js API Route

Create `/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate honeypot
    if (data.honeypot) {
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      );
    }

    // TODO: Save to database
    // await db.contactSubmissions.create({ data });

    // TODO: Send emails
    // await sendConfirmationEmail(data.email, data);
    // await sendNotificationEmail('info@solunai.co.jp', data);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
```

---

## Set Up Email Service

### Option 1: SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: data.email,
  from: 'info@solunai.co.jp',
  subject: 'Thank you for contacting Solunai',
  text: `Dear ${data.name}, ...`,
  html: '<strong>...</strong>',
};

await sgMail.send(msg);
```

### Option 2: Nodemailer

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

await transporter.sendMail({
  from: 'info@solunai.co.jp',
  to: data.email,
  subject: 'Thank you for contacting Solunai',
  html: '<h1>...</h1>',
});
```

---

## Set Up Database

### Option 1: Prisma + PostgreSQL

```bash
npm install prisma @prisma/client
npx prisma init
```

Create schema in `prisma/schema.prisma`:
```prisma
model ContactSubmission {
  id            String   @id @default(uuid())
  companyName   String
  industry      String
  employeeCount String
  revenue       String?
  website       String?
  name          String
  title         String
  email         String
  phone         String
  contactMethod String
  challenges    String
  solutions     Json
  timeline      String
  budget        String?
  source        String
  sourceDetail  String?
  createdAt     DateTime @default(now())
  status        String   @default("new")
}
```

```bash
npx prisma migrate dev --name init
```

Use in API:
```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

await prisma.contactSubmission.create({
  data: formData
});
```

### Option 2: Supabase

```bash
npm install @supabase/supabase-js
```

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const { data, error } = await supabase
  .from('contact_submissions')
  .insert([formData]);
```

---

## Add Analytics

### Google Analytics 4

Add to `/app/layout.tsx`:
```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

Track form events in `ContactForm.tsx`:
```typescript
// Add to handleNext function
if (typeof window.gtag !== 'undefined') {
  window.gtag('event', 'form_step_completed', {
    step: currentStep,
    page: '/contact'
  });
}

// Add to handleSubmit function
if (typeof window.gtag !== 'undefined') {
  window.gtag('event', 'form_submission', {
    category: 'Contact',
    label: 'Free Consultation'
  });
}
```

---

## Environment Variables

Create `.env.local`:
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/solunai"

# Email Service
SENDGRID_API_KEY="SG.xxxxx"
# or
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
SUPABASE_SERVICE_KEY="xxxxx"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="xxxxx"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# reCAPTCHA (optional)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="xxxxx"
RECAPTCHA_SECRET_KEY="xxxxx"
```

---

## Testing

### Manual Testing Checklist

1. Fill out form step by step
2. Test validation errors
3. Submit form successfully
4. Check email received
5. Verify database entry
6. Test on mobile device
7. Test language toggle
8. Test all CTAs scroll to form

### Automated Testing (Optional)

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Create `__tests__/ContactForm.test.tsx`:
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '@/components/contact/ContactForm';

describe('ContactForm', () => {
  it('validates required fields', () => {
    render(<ContactForm lang="en" />);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t solunai-website .
docker run -p 3000:3000 solunai-website
```

---

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify API endpoint exists
- Check CORS settings
- Verify environment variables

### Emails not sending
- Check email service credentials
- Verify sender email is verified
- Check spam folder
- Review email service logs

### Database errors
- Verify connection string
- Check table schema
- Ensure migrations ran
- Review database logs

### Styling issues
- Clear browser cache
- Rebuild: `npm run build`
- Check Tailwind config
- Verify CSS classes exist

---

## Next Steps

1. Customize placeholder content
2. Implement backend API
3. Set up email service
4. Configure database
5. Add analytics tracking
6. Test thoroughly
7. Deploy to staging
8. User acceptance testing
9. Deploy to production
10. Monitor and optimize

---

## Support

- Full docs: `/CONTACT_PAGE_DOCUMENTATION.md`
- Summary: `/CONTACT_PAGE_SUMMARY.md`
- This guide: `/CONTACT_PAGE_QUICKSTART.md`

---

**Estimated Setup Time**: 4-6 hours for full integration

**Priority Tasks**:
1. Backend API (2 hours)
2. Email service (1 hour)
3. Database setup (1 hour)
4. Content customization (30 min)
5. Testing (1 hour)

Good luck! 🚀
