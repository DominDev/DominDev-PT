# Paweł Tracz - Konkretny Trener

Professional one-page website for Paweł Tracz, a personal kickboxing and MMA trainer based in Wrocław, Poland.

## Overview

A high-performance, conversion-focused landing page designed to drive WhatsApp contacts and phone calls. Dark theme with acid lime accents, video hero background, and smooth scroll animations.

## Tech Stack

- **HTML5** - Semantic markup, accessibility-first
- **CSS3** - BEM methodology, CSS Grid/Flexbox, CSS variables
- **Vanilla JavaScript** - No frameworks, IntersectionObserver for animations
- **Lucide Icons** - Modern icon library

## Project Structure

```
DominDev-PT/
├── index.html              # Main page
├── src/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main script
│   └── fonts/              # Local fonts (optional)
├── assets/
│   ├── img/                # Images (.webp)
│   │   ├── paweltracz-*.webp
│   │   ├── paweltracz-logo*.webp
│   │   └── paweltracz-logo.ico
│   └── videos/             # Video files (.mp4)
│       └── pawltracz-vid-*.mp4
├── _docs/                  # Documentation
│   ├── source-vision.txt   # Project brief
│   ├── source-code.txt     # Base code reference
│   └── guide-implementation.md
├── _scripts/               # Helper scripts
│   ├── optimize-images.js
│   └── ...
├── CLAUDE.md               # AI assistant rules
└── README.md               # This file
```

## Features

- **Hero Section** - Video background with call-to-action
- **Marquee Tapes** - Animated crossed tape banners
- **About Section** - Personal bio with hover effects
- **Offer Grid** - Bento-style cards for services
- **Process Steps** - Visual 4-step onboarding flow
- **FAQ Accordion** - Expandable questions
- **Contact Section** - Direct WhatsApp/Phone CTA + Google Maps
- **FABs** - Floating WhatsApp button + scroll-to-top

## Performance

- Lazy loading for images below fold
- Preconnect to Google Fonts
- Deferred script loading
- CSS animations with `prefers-reduced-motion` support
- Optimized WebP images

## Accessibility

- WCAG AA compliant contrast ratios
- Skip-to-content link
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements

## SEO

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org JSON-LD (LocalBusiness + Person)
- Canonical URL

## Quick Start

1. Open `index.html` in browser
2. Or use a local server:
   ```bash
   npx serve .
   ```

## Contact

- **Client:** Paweł Tracz
- **Location:** Awangarda 71, ul. Ołbińska 17, Wrocław
- **Phone:** +48 796 786 510
- **Instagram:** [@paweltracztrener](https://www.instagram.com/paweltracztrener/)

## License

All rights reserved © 2025 Paweł Tracz
