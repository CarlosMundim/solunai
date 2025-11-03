# Navigation Update Guide - Add Team Page Links

## Quick Reference

To add the Team page to the website navigation, update the Header component.

---

## File to Update

**Location:** `/mnt/c/claude/solunai-react-premium/components/Header.tsx`

---

## Current Navigation Structure

```typescript
const navigation = {
  ja: {
    links: [
      { href: '#solutions', label: 'ソリューション' },
      { href: '#services', label: 'サービス' },
      { href: '#case-studies', label: '事例紹介' },
      { href: '#company', label: '会社情報' },
      { href: '#contact', label: 'お問い合わせ' }
    ],
    languageToggle: { href: '/en', label: 'English' }
  },
  en: {
    links: [
      { href: '#solutions', label: 'Solutions' },
      { href: '#services', label: 'Services' },
      { href: '#case-studies', label: 'Case Studies' },
      { href: '#company', label: 'Company' },
      { href: '#contact', label: 'Contact' }
    ],
    languageToggle: { href: '/', label: '日本語' }
  }
};
```

---

## Update to Add Team Page

### Option 1: Replace #company with /team (Recommended)

```typescript
const navigation = {
  ja: {
    links: [
      { href: '#solutions', label: 'ソリューション' },
      { href: '#services', label: 'サービス' },
      { href: '#case-studies', label: '事例紹介' },
      { href: '/team', label: 'チーム' },  // Changed from #company
      { href: '#contact', label: 'お問い合わせ' }
    ],
    languageToggle: { href: '/en', label: 'English' }
  },
  en: {
    links: [
      { href: '#solutions', label: 'Solutions' },
      { href: '#services', label: 'Services' },
      { href: '#case-studies', label: 'Case Studies' },
      { href: '/en/team', label: 'Team' },  // Changed from #company
      { href: '#contact', label: 'Contact' }
    ],
    languageToggle: { href: '/', label: '日本語' }
  }
};
```

---

### Option 2: Add Team as Additional Link

```typescript
const navigation = {
  ja: {
    links: [
      { href: '#solutions', label: 'ソリューション' },
      { href: '#services', label: 'サービス' },
      { href: '#case-studies', label: '事例紹介' },
      { href: '/team', label: 'チーム' },  // New
      { href: '#company', label: '会社情報' },
      { href: '#contact', label: 'お問い合わせ' }
    ],
    languageToggle: { href: '/en', label: 'English' }
  },
  en: {
    links: [
      { href: '#solutions', label: 'Solutions' },
      { href: '#services', label: 'Services' },
      { href: '#case-studies', label: 'Case Studies' },
      { href: '/en/team', label: 'Team' },  // New
      { href: '#company', label: 'Company' },
      { href: '#contact', label: 'Contact' }
    ],
    languageToggle: { href: '/', label: '日本語' }
  }
};
```

---

## Alternative Labels (Choose What Fits Best)

### Japanese Options:
- `チーム` (Team - simple, modern)
- `私たちのチーム` (Our Team)
- `経営陣` (Management)
- `会社概要` (Company Overview - if replacing #company)
- `About` (English loanword, commonly used)

### English Options:
- `Team` (simple, direct)
- `Our Team`
- `About`
- `About Us`
- `Leadership`

---

## Implementation Steps

1. Open `/mnt/c/claude/solunai-react-premium/components/Header.tsx`

2. Locate the `navigation` object (around lines 15-36)

3. Add the team page links:
   - Japanese: `{ href: '/team', label: 'チーム' }`
   - English: `{ href: '/en/team', label: 'Team' }`

4. Save the file

5. Test both language versions:
   - Japanese: `http://localhost:3000/team`
   - English: `http://localhost:3000/en/team`

6. Verify navigation link works from homepage

---

## Recommended Position

**Best Practice:** Place "Team" between "Case Studies" and "Contact"

**Why:**
- Logical flow: Solutions → Services → Proof (Cases) → People (Team) → Action (Contact)
- Team page builds trust before asking for contact
- Consistent with standard website navigation patterns

---

## Mobile Navigation

The Header component already handles mobile responsively. The team links will automatically appear in the mobile menu.

No additional changes needed for mobile.

---

## Testing Checklist

After updating navigation:

- [ ] Japanese homepage navigation shows "チーム"
- [ ] English homepage navigation shows "Team"
- [ ] Clicking Japanese "チーム" goes to `/team`
- [ ] Clicking English "Team" goes to `/en/team`
- [ ] Mobile menu includes team links
- [ ] Active state styling works (if applicable)
- [ ] Language toggle preserves team page context

---

## Complete Header.tsx Example

```typescript
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

interface HeaderProps {
  lang: 'ja' | 'en';
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = {
    ja: {
      links: [
        { href: '#solutions', label: 'ソリューション' },
        { href: '#services', label: 'サービス' },
        { href: '#case-studies', label: '事例紹介' },
        { href: '/team', label: 'チーム' },
        { href: '#contact', label: 'お問い合わせ' }
      ],
      languageToggle: { href: '/en', label: 'English' }
    },
    en: {
      links: [
        { href: '#solutions', label: 'Solutions' },
        { href: '#services', label: 'Services' },
        { href: '#case-studies', label: 'Case Studies' },
        { href: '/en/team', label: 'Team' },
        { href: '#contact', label: 'Contact' }
      ],
      languageToggle: { href: '/', label: '日本語' }
    }
  };

  const currentNav = navigation[lang];

  return (
    <header className="site-header">
      {/* Rest of component unchanged */}
    </header>
  );
};

export default Header;
```

---

## Notes

- The team page is **critical for JFC loan evaluation** (25% of assessment)
- Make it easily discoverable in navigation
- Consider making it prominent (bold or highlighted) during loan application period
- Ensure it's indexed by search engines for credibility

---

**End of Navigation Update Guide**
