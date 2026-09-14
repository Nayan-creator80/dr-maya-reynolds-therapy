# 🌿 Grow My Therapy - Stage 2 Internship Assignment: Dr. Maya Reynolds, PsyD Website Redesign

This project represents the complete **Stage 2 Practical Assignment** for the Front-End Developer Internship at **Grow My Therapy**. 

It features a faithful layout clone of [Conejo Valley Counseling](https://www.conejovalleycounseling.com/home) combined with an elegant, high-end creative redesign built specifically for **Dr. Maya Reynolds, PsyD**, a Licensed Clinical Psychologist based in **Santa Monica, CA**.

---

## 🚀 Live Demo & Submission Deliverables

- **Tech Stack:** Next.js (App Router), Tailwind CSS (v4), TypeScript, Lucide Icons
- **Local Dev Server:** `http://localhost:3000`
- **Video Walkthrough Script:** [loom_script.md](./loom_script.md)

---

## 🧩 Assignment Checklist & Completion Summary

### Part 1: Homepage UI Cloning Accuracy
- [x] **Layout & Structure Replication:** Recreated exact section sequence (Header, Hero, Trust Pillars, Services, About, Modalities, Office, Client Focus, FAQs, CTA, Footer).
- [x] **Mobile Responsiveness:** Fully responsive across Desktop (1440px+), Tablet (768px), and Mobile (375px/390px) viewports with mobile menu drawer.
- [x] **Typography & Hierarchy:** Elegant serif headings (`Playfair Display` / `Outfit`) with clean sans-serif body text (`Plus Jakarta Sans`).
- [x] **Spacing & Margins:** Reusable Tailwind utility classes and design tokens in `src/app/globals.css`.

### Part 2: Creative Redesign for Dr. Maya Reynolds, PsyD
- [x] **New Color Palette:**
  - Primary: Deep Sage Green (`#1E342B`, `#2C4A3E`)
  - Accent: Warm Terracotta & Amber (`#C87D55`, `#D98E66`)
  - Backgrounds: Sand & Warm Off-White (`#FAF7F3`, `#F4EFEA`)
- [x] **Copywriting 100% Derived from Profile:**
  - Dr. Maya Reynolds, PsyD (Licensed Clinical Psychologist, Santa Monica, CA)
  - 3 Core Services: *Anxiety & Panic Therapy*, *Trauma & EMDR Therapy*, *Burnout & Perfectionism Counseling*.
  - Bio, clinical approach, modalities (CBT, EMDR, Mindfulness, Somatic), target populations (high achievers, entrepreneurs, creatives).
  - Local SEO optimized for Santa Monica, CA & California Telehealth.
- [x] **High Quality Intentional Images:**
  - Professional portrait of Dr. Maya Reynolds (`/images/dr-maya-reynolds.png`)
  - Office main room & seating nook (`/images/office-main.png`, `/images/office-seating.png`)
  - Practice service visuals (`/images/service-anxiety.png`, `/images/service-emdr.png`, `/images/service-burnout.png`)

### Part 3: Custom "Our Office" Section
- [x] **New Custom Section Added:** "Our Office: A Calm Space for Healing in Santa Monica"
- [x] **Profile Alignment:** Showcases office details at *123th Street 45 W, Santa Monica, CA 90401*, featuring natural daylight, quiet soundproof privacy, comfortable uncluttered seating, and hybrid/in-person availability.

### Part 4: Video Walkthrough Plan
- [x] **5-Minute Client Demo Script:** Word-for-word presentation script ([loom_script.md](./loom_script.md)) written in non-technical, client-facing language demoing the website to Dr. Maya Reynolds.

---

## ⚙️ Getting Started & Running Locally

1. **Clone the Repository:**
   ```bash
   git clone <your-repo-url>
   cd dr-maya-reynolds-therapy
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🎨 Design System Summary

```css
/* Primary Sage Green */
--sage-900: #1E342B;
--sage-800: #2C4A3E;

/* Warm Terracotta Accent */
--terracotta-600: #C87D55;
--terracotta-500: #D98E66;

/* Sand Background */
--sand-50: #FAF7F3;
--sand-100: #F4EFEA;
```
