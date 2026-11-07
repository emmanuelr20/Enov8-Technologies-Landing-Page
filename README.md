# Enov8 Technologies Landing Page

A modern, responsive landing page for Enov8 Technologies - a leading software development company specializing in custom mobile apps, web applications, and enterprise solutions.

## 🚀 Features

- **Fully server-rendered** — every section is a React Server Component, so all copy is in the initial HTML for search engines
- **SEO** — per-page canonical URLs, Open Graph/Twitter tags, generated 1200×630 social images, sitemap, and JSON-LD (Organization, WebSite, Service, BreadcrumbList, FAQPage, ItemList)
- **Fast, CSS-first motion** — scroll reveals, marquees, scroll-driven effects and the cursor spotlight are CSS + one tiny client island (`components/Interactions.jsx`); no animation libraries
- **Accessible** — semantic landmarks, skip link, native `<dialog>`, keyboard-operable menus, `prefers-reduced-motion` respected everywhere
- **Light & dark themes** — no flash on load; preference stored per visitor
- **Data-driven** — all services live in `lib/servicesData.js`; one dynamic route renders every service page

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4 + design tokens in `app/globals.css`
- **Fonts**: Bricolage Grotesque (display), Geist (body), Instrument Serif (accents) via `next/font`
- **Icons**: Lucide

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx              # Root layout: fonts, metadata, Organization JSON-LD
│   ├── page.jsx                # Home page (composes components/home/*)
│   ├── services/[slug]/        # One statically generated page per service (+ OG image)
│   ├── opengraph-image.jsx     # Default social share image
│   └── sitemap.js
├── components/
│   ├── home/                   # Home page sections
│   ├── site/                   # Navbar, Footer, contact dialog & forms
│   ├── Interactions.jsx        # Global reveal / spotlight / magnetic / dialog behaviour
│   └── PageHero.jsx            # Shared inner-page hero with breadcrumbs
└── lib/
    ├── site.js                 # Brand, contact details, navigation (single source of truth)
    ├── servicesData.js         # All service content
    ├── content.js              # Testimonials, FAQs, stats, partners, process
    └── seoMetadata.js
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Enov8-Technologies-Landing-Page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables with your actual values.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Information

- **Email**: contact@enov8technologies.com
- **Phone**: +2347064838988
- **WhatsApp**: [Chat with us](https://wa.me/2347064838988)

## 🎯 Services

- **Mobile Development** - iOS, Android, React Native
- **Web Applications** - React, Next.js, Full-stack solutions
- **Enterprise Solutions** - Scalable business systems
- **UI/UX Design** - User-centered design approach
- **Developer Training** - Comprehensive training programs
- **Digital Transformation** - End-to-end modernization

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 📈 SEO Features

- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for better search visibility
- Optimized sitemap and robots.txt
- Performance optimizations for Core Web Vitals
- Social media sharing optimization

## 🌐 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## 📄 License

© 2024 Enov8 Technologies. All rights reserved.

---

Built with ❤️ by the Enov8 Technologies team
