# Development portfolio website repository

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00DC82?logo=nuxt.js&logoColor=white)](https://nuxtjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ravesandstorm/portfolio-on-nuxt-vue/nuxtjs.yml?branch=main)](https://github.com/ravesandstorm/portfolio-on-nuxt-vue/actions)

A modern, interactive portfolio website built using Nuxt.js and Vue.js, featuring dynamic animations, stateful dark mode, and flexible routing for multiple pages.

## Features
-  Built with Vue.js & Nuxt.js
-  Animated components using VueBits and GSAP for smooth interactions
- 3D visuals using OGL
- Dark mode with persistent state across pages
- Static & dynamic routing using Vue Router
- [slug] path templating for multiple pages using a single file
- Responsive and dynamic design for desktop, tablet, and mobile
- Easy package management with npm and Node.js

### [Live Demo](https://ravesandstorm.github.io/portfolio-on-nuxt-vue/)

## Tech Stack
| Frontend           | Libraries & Tools |
| ------------------ | ----------------- |
| Nuxt.js            | Vue.js            |
| Vue Router         | GSAP              |
| VueBits Animations | OGL               |
| CSS/SCSS           | Node.js & npm     |

## How to run

### 1. Clone Repository
```bash
git clone https://github.com/ravesandstorm/portfolio-on-nuxt-vue.git
cd portfolio-on-nuxt-vue
```

### 2. Install Node Dependencies
```bash
cd nuxt-app
npm install
```

### 3. Run Application on Localhost
```bash
npm run dev
```

## Dark Mode Implementation
- Stateful dark mode
- Persists user preference across sessions
- Toggle component available on all pages

## Routing (Vue-Router)
- Static (Home) and Dynamic routes: /posts/[id].vue for portfolio projects

## Library Animations with Vuebits Components
- GSAP: Timeline-based animations for smooth transitions
- OGL: Prism WebGL background effect

