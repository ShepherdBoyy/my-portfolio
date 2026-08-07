<div align="center">

# Jhey Marc Abad — Portfolio

**A personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.**

[![Live Site](https://img.shields.io/badge/Live%20Site-jmarc.vercel.app-FF6B35?style=for-the-badge&logo=vercel&logoColor=white)](https://jmarc-dev.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#-license)
[![Deploy](https://img.shields.io/github/deployments/ShepherdBoyy/my-portfolio/production?style=for-the-badge&label=Vercel&logo=vercel)](https://jmarc-dev.vercel.app)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

<br />

<div align="center">
  <img src="public/preview.png" alt="Portfolio Preview" width="90%" />
</div>

<br />

## 📖 About

Built from scratch as a personal project to showcase my work, skills, and journey as a Full Stack Developer. Every component, layout, and animation was designed and implemented with attention to detail — from the tech orbit visualization to the horizontal experience timeline.

The goal was to build something that reflects both my technical abilities and my philosophy:

> *I build things that help make the world a better place.*

<br />

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Build for Production](#build-for-production)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)

<br />

## ✨ Features

| | |
|---|---|
| 🎨 | **Modern dark design** with a consistent charcoal + orange color system |
| 📱 | **Fully responsive** — mobile, tablet, and desktop layouts |
| 🎬 | **Smooth animations** powered by Framer Motion with scroll-triggered reveals |
| ✍️ | **Typewriter animation** on hero tagline with infinite loop |
| 🌌 | **Tech orbit visualization** — interactive rotating satellite icon system |
| 📋 | **Project filtering** by category and platform with real-time search |
| 🖼️ | **Image slider** on project detail pages with dot indicators and thumbnails |
| 📬 | **Working contact form** via EmailJS — sends directly to inbox |
| 📄 | **Resume download** from the hero section |
| 🏆 | **Certifications modal** with PDF viewing |
| 🗂️ | **Experience timeline** — horizontal (desktop), vertical alternating (tablet), stacked cards (mobile) |
| 🔗 | **Project detail pages** with previous/next navigation |
| 🚀 | **Auto-deploy** on every push to `main` via Vercel |

<br />

## 🛠️ Tech Stack

<div align="center">

| Category | Technology |
|:---|:---|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Routing** | React Router v6 |
| **Email** | EmailJS (`@emailjs/browser`) |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

</div>

<br />

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `18+`
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ShepherdBoyy/my-portfolio.git

# 2. Navigate into the project
cd my-portfolio

# 3. Install dependencies
npm install

# 4. Create your environment file
cp .env.example .env
# Fill in your EmailJS credentials (see Environment Variables below)

# 5. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

### Build for Production

```bash
npm run build
```

Output is generated in the `/dist` folder.

<br />

## 🔑 Environment Variables

Create a `.env` file in the project root with the following variables. Get these from your [EmailJS dashboard](https://www.emailjs.com):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> ⚠️ **Never commit your `.env` file** — it is already listed in `.gitignore`

<br />

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── layout/              # Navbar, Footer, PageTransition
│   ├── projects/             # ProjectCard, FeaturedCard, ImageSlider, filters
│   ├── contact/              # ContactSuccess modal
│   ├── ui/icons/             # Custom SVG icons (GitHub, LinkedIn)
│   └── sections/elements/    # Section-specific sub-components
│       ├── experience/       # Timeline variants, CertModal
│       └── skills/           # TechOrbitSystem, SatelliteIcon
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

<br />

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

<br />

## 🗺️ Roadmap

- [ ] Add automated tests (Vitest / React Testing Library)
- [ ] Add light mode theme toggle
- [ ] Add blog section
- [ ] Improve accessibility (ARIA labels, keyboard navigation audit)

> Have an idea? Feel free to [open an issue](https://github.com/ShepherdBoyy/my-portfolio/issues).

<br />

## 📄 License

This project is licensed under the **MIT License** — feel free to use it as a reference or starting point for your own portfolio.

<br />

## 📬 Contact

**Jhey Marc Abad**

[![Portfolio](https://img.shields.io/badge/Portfolio-jmarc.vercel.app-FF6B35?style=flat-square&logo=vercel&logoColor=white)](https://jmarc-dev.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-ShepherdBoyy-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ShepherdBoyy)

<br />

<div align="center">

⭐ If you like this project, consider giving it a star on GitHub!

</div>