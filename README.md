# Jhey Marc Abad — Portfolio

> A personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

🌐 **Live Site:** [jmarc.vercel.app](https://jmarc.vercel.app)

![Portfolio Preview](public/preview.png)

---

## 📖 About

Built from scratch as a personal project to showcase my work, skills, and journey as a Full Stack Developer. Every component, layout, and animation was designed and implemented with attention to detail — from the tech orbit visualization to the horizontal experience timeline. The goal was to build something that reflects both my technical abilities and my philosophy: *I build things that help make the world a better place.*

---

## ✨ Features

- 🎨 &nbsp;**Modern dark design** with a consistent charcoal + orange color system
- 📱 &nbsp;**Fully responsive** — mobile, tablet, and desktop layouts
- 🎬 &nbsp;**Smooth animations** powered by Framer Motion with scroll-triggered reveals
- ✍️ &nbsp;**Typewriter animation** on hero tagline with infinite loop
- 🌌 &nbsp;**Tech orbit visualization** — interactive rotating satellite icon system
- 📋 &nbsp;**Project filtering** by category and platform with real-time search
- 🖼️ &nbsp;**Image slider** on project detail pages with dot indicators and thumbnails
- 📬 &nbsp;**Working contact form** via EmailJS — sends directly to inbox
- 📄 &nbsp;**Resume download** from the hero section
- 🏆 &nbsp;**Certifications modal** with PDF viewing
- 🗂️ &nbsp;**Experience timeline** — horizontal (desktop), vertical alternating (tablet), stacked cards (mobile)
- 🔗 &nbsp;**Project detail pages** with previous/next navigation
- 🚀 &nbsp;**Auto-deploy** on every push to main via Vercel

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Routing** | React Router v6 |
| **Email** | EmailJS (`@emailjs/browser`) |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18+`
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ShepherdBoyy/your-repo-name.git

# 2. Navigate into the project
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Create your environment file
cp .env.example .env
# Fill in your EmailJS credentials (see Environment Variables below)

# 5. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is generated in the `/dist` folder.

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following variables.
Get these from your [EmailJS dashboard](https://www.emailjs.com):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> ⚠️ Never commit your `.env` file — it is already listed in `.gitignore`

---

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── layout/              # Navbar, Footer, PageTransition
│   ├── projects/            # ProjectCard, FeaturedCard, ImageSlider, filters
│   ├── contact/             # ContactSuccess modal
│   ├── ui/icons/            # Custom SVG icons (GitHub, LinkedIn)
│   └── sections/elements/   # Section-specific sub-components
│       ├── experience/      # Timeline variants, CertModal
│       └── skills/          # TechOrbitSystem, SatelliteIcon
│
├── sections/                # Main page sections (Home, About, Skills...)
├── pages/                   # Route-level pages (Projects, ProjectDetail)
├── data/                    # All static content (projects, skills, experience)
├── types/                   # TypeScript interfaces and types
├── hooks/                   # Custom React hooks (useWindowSize, useTypewriter)
├── utils/                   # Helper functions (animations, slug, emailjs, validation)
└── styles/                  # Global CSS and Tailwind theme
    └── index.css
```

---

## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com)** with continuous deployment.

Every push to the `main` branch automatically triggers a new build and deployment — no manual steps required.

A `vercel.json` rewrite rule handles client-side routing so direct URL access and page refreshes work correctly on all routes:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📬 Contact

Feel free to reach out — I'm open to freelance work, full-time roles, and collaborations.

| Platform | Link |
|---|---|
| 🐙 **GitHub** | [github.com/ShepherdBoyy](https://github.com/ShepherdBoyy) |
| 💼 **LinkedIn** | [linkedin.com/in/jmarcabad](https://www.linkedin.com/in/jmarcabad) |
| 📧 **Email** | [jmarc.abad26@gmail.com](mailto:jmarc.abad26@gmail.com) |

---

<p align="center">
  Built with ♥ in the Philippines by <strong>Jhey Marc Abad</strong>
</p>