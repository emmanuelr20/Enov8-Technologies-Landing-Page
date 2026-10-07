# Enov8 Technologies Landing Page

A modern, responsive landing page for Enov8 Technologies - a leading software development company specializing in custom mobile apps, web applications, and enterprise solutions.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **SEO Optimized** - Comprehensive SEO implementation with structured data
- **Performance Focused** - Fast loading with Next.js optimization
- **Modern UI/UX** - Clean design with smooth animations using ScrollReveal
- **Light Theme** - The current site uses a light-only theme; dark mode is not implemented
- **PWA Ready** - Progressive Web App capabilities
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React & React Icons
- **Animations**: ScrollReveal
- **Fonts**: Space Grotesk & Mulish (Google Fonts)
- **Theme**: Light-only CSS theme

## 📁 Project Structure

```
├── app/
│   ├── layouts/          # Page sections (Hero, About, Services, etc.)
│   ├── globals.css       # Global styles
│   ├── layout.jsx        # Root layout with SEO metadata
│   ├── page.jsx          # Home page
│   ├── sitemap.js        # Dynamic sitemap generation
│   └── robots.txt        # Search engine directives
├── components/
│   ├── ui/               # Reusable UI components
│   └── Analytics.jsx     # Google Analytics component
├── public/               # Static assets
└── SEO_CHECKLIST.md     # SEO optimization checklist
```

## Browser smoke tests

Run `pnpm run test:smoke` to build the production site and test it in Chromium
and Firefox. The suite covers the core routes, responsive widths, keyboard
navigation, the consultation dialog, hero-video fallback, and reduced motion.
Run `pnpm run test:smoke:webkit` separately where the Playwright WebKit runtime
can navigate to local HTTP pages.

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
- `npm run lint` - Run ESLint

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
