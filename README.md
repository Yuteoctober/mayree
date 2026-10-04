# MayRee 🌶️🍸

> **Michelin-Recognized Southern Thai Kitchen & Bespoke Cocktail Bar**  
> *58 East 1st Street, East Village, Manhattan, New York, NY 10003*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://yuteoctober.github.io/mayree/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Deployment](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions)](https://github.com/Yuteoctober/mayree/actions)

---

## 🌐 Live Website

Experience the live application here:  
👉 **[https://yuteoctober.github.io/mayree/](https://yuteoctober.github.io/mayree/)**

---

## 📖 About MayRee

**MayRee** is an authentic Southern Thai restaurant and bespoke cocktail haven situated in the heart of Manhattan’s East Village. Recognized by the prestigious **Michelin Guide**, MayRee celebrates the deep, uncompromising culinary traditions of Southern Thailand—featuring handmade yellow turmeric curries, slow-braised Massaman short ribs, fresh lump crab, and artisanal Thai-inspired mixology.

This repository contains the official responsive web application for MayRee, designed to provide guests with an immersive culinary journey, full interactive menus, and seamless table booking experiences.

---

## ✨ Features

- **🏆 Michelin Story & Heritage:** Immersive storytelling highlighting Southern Thai culinary history, chef philosophy, and critical acclaim (*Michelin Guide*, *The New York Times*, *Eater NY*).
- **🍛 Interactive Culinary Menu:**
  - Categorized browsing: *Southern Curries, Chef's Signatures, Noodles & Rice, Small Bites & Crudo, Bespoke Cocktails, and Desserts*.
  - Dietary filter tags (*Gluten-Free, Shellfish, Vegetarian, Spicy Levels*).
  - Sommelier and mixologist beverage pairing recommendations for each dish.
- **🍸 Bespoke Cocktail Lounge:** Highlighting handcrafted craft cocktails infused with Thai botanicals, chili liqueurs, and tropical flavors.
- **📅 Interactive Reservation Modal:** Instant table reservation request modal with party size, date/time pickers, and seating preference selections.
- **📱 Responsive Mobile Experience:**
  - Floating bottom action bar on mobile for instant calling and rapid reservations.
  - Seamless navigation across phones, tablets, and ultra-wide displays.
- **📍 Location & Service Hours:** Complete transit directions (F train / 6 train), daily operating hours, and happy hour schedules.
- **📸 Social Media Showcase:** Live previews connecting diners to MayRee’s vibrant Instagram and TikTok community.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)
- **Styling:** Custom Vanilla CSS Design System with responsive grid/flexbox layouts and micro-interactions
- **Typography:** Google Fonts (*Cormorant Garamond*, *DM Serif Display*, *Playfair Display*, *Plus Jakarta Sans*)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa6`)
- **Hosting & CI/CD:** GitHub Pages & GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/Yuteoctober/mayree.git
cd mayree
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173/mayree/` in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

This compiles optimized production assets into the `dist/` folder.

---

## 🚢 Deployment

The project is configured for continuous deployment to **GitHub Pages**.

### Automatic Deployment (GitHub Actions)
Every push to the `main` branch triggers the GitHub Actions workflow defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which automatically installs dependencies, builds the production bundle, and publishes the site.

### Manual Deployment via CLI
You can also deploy manually at any time using the `gh-pages` script:

```bash
npm run deploy
```

This runs `npm run build` and automatically pushes the compiled `dist/` directory to the `gh-pages` branch.

---

## 📂 Project Structure

```text
Mayree/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment workflow
├── public/                     # Static assets and favicon
├── src/
│   ├── assets/
│   │   └── picture/            # High-resolution dish and ambiance photography
│   ├── components/             # React functional components
│   │   ├── Navbar.jsx          # Header navigation and reservation trigger
│   │   ├── Hero.jsx            # Hero banner with chapter anchors
│   │   ├── MichelinStory.jsx   # Michelin recognition and culinary story
│   │   ├── MenuSection.jsx     # Interactive menu with category filtering
│   │   ├── CocktailBar.jsx     # Cocktail program showcase
│   │   ├── ReservationSection.jsx # Inquiry & booking section
│   │   ├── ReservationModal.jsx   # Interactive modal booking form
│   │   ├── SocialMediaSection.jsx # Instagram & TikTok social showcase
│   │   ├── LocationHours.jsx   # Map, address, hours & VIP sign-up
│   │   └── Footer.jsx          # Footer with quick links & credits
│   ├── css/                    # Component-specific stylesheets
│   ├── data/
│   │   └── menuData.js         # Structured menu, reviews, and restaurant info
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global application styles
│   ├── index.css               # Core styling resets & theme tokens
│   └── main.jsx                # Application root entry point
├── index.html                  # HTML entry point with SEO meta tags & fonts
├── package.json                # Project dependencies and deployment scripts
└── vite.config.js              # Vite configuration with GitHub Pages base path
```

---

## 📍 Restaurant Details

- **Address:** 58 East 1st Street, New York, NY 10003
- **Neighborhood:** East Village, Manhattan
- **Phone:** [(929) 989-6213](tel:9299896213)
- **Email:** [mayree58east@gmail.com](mailto:mayree58east@gmail.com)
- **Instagram:** [@mayreenyc](https://www.instagram.com/mayreenyc/)
- **TikTok:** [@mayreenyc](https://www.tiktok.com/@mayreenyc)

---

## 📄 License

This project is proprietary and created for **MayRee NYC**. All rights reserved.
