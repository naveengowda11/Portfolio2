# Naveen Kumar B — Portfolio

A responsive personal portfolio for Naveen Kumar B, a Computer Science & Data Science undergraduate at ATME College of Engineering, Mysore.

The design combines a cinematic portrait composition, editorial typography, custom project artwork, interactive Three.js visuals and a persistent light/dark theme switcher.

## Live website

https://naveengowda11.github.io/Portfolio2/

## Run locally

This is a static website. From the project root:

```bash
python -m http.server 8000
```

Open http://localhost:8000 in your browser. You can also use the VS Code Live Server extension.

> The Three.js hero object is loaded as an ES module from jsDelivr, and the typefaces are loaded from Google Fonts. An internet connection is needed for those external assets. The rest of the page remains usable if the 3D visual cannot initialize.

## Features

- Distinct dark and light themes, with the visitor's choice saved in local storage
- Theme default follows the visitor's operating-system preference
- Responsive navigation for mobile screens
- Custom Three.js orbital object with pointer-responsive hero composition
- Animated role text, scroll progress and section reveal effects
- Reduced-motion support
- Project case studies with repository links

## Built with

- HTML5
- CSS3 (responsive layouts, design tokens, animations and theme variables)
- Vanilla JavaScript
- Three.js
- Google Fonts: Space Grotesk, Manrope and DM Mono

## Project structure

- `index.html` — portfolio content and section structure
- `style.css` — visual system, responsive layouts, dark/light themes and animations
- `app.js` — theme persistence, navigation, role text and interaction
- `main.js` — Three.js hero object
- `assets/naveen-profile.jpg` — professional portrait
- `assets/favicon.svg` — browser icon

## Featured projects

- **Nxture EventOS** — campus event discovery, registration and administration platform.
- **MaxY-AI** — personal assistant project focused on voice interaction and permission-aware automation.
- **SkillForge** — adaptive learning platform.
- **ResumeRanker** — resume-to-job-description matching and ranking.
- **ResQTrace AI** — rescue-support and emergency-response concept.
- **QR HealthCare** — QR-based access to essential patient information in emergencies.

Project descriptions are intentionally concise; open the linked repositories for implementation details.

## Connect

- Email: naveenbgowda11@gmail.com
- LinkedIn: https://www.linkedin.com/in/naveen-kumar-b-n41s17p
- GitHub: https://github.com/naveengowda11

## Deployment

GitHub Pages can serve this static site directly from the repository. No paid custom domain or separate hosting plan is required.

---

Designed with intention. Built with curiosity.
