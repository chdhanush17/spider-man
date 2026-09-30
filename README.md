# 🕷️ Spider-Man Cinematic Universe Web Portal

[![Spider-Man Tribute](https://img.shields.io/badge/Marvel-Spider--Man%20Universe-e62429?style=for-the-badge&logo=marvel&logoColor=white)](https://marvel.com)
[![Tech-HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#tech-stack)
[![Tech-CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#tech-stack)
[![Tech-JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#tech-stack)
[![Web Audio](https://img.shields.io/badge/Web_Audio-Synthesizer-00d2ff?style=for-the-badge)](#interactive-audio)
[![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-brightgreen?style=for-the-badge)](#features)

Welcome to the **Spider-Man Cinematic Universe Web Portal** — an ultra-premium, interactive fan portal and filmography guide celebrating every cinematic adaptation of Spider-Man from the groundbreaking 2002 Sam Raimi classic to Tom Holland's 2026 *Spider-Man: Brand New Day*.

---

## 🌟 Live Preview & Highlights

- **Live Search & Multiverse Filters**: Instantly find movies by title, year, actor, director, or villain.
- **Cinematic Detail Modal**: Watch high-definition official YouTube trailers and browse HD wallpapers.
- **OTT Streaming Availability**: One-click direct watch links for platforms available in India (Disney+ Hotstar, Amazon Prime Video, MX Player).
- **Dual Watch Order Guide**: Toggle between *Release Order (2002 — 2026)* and *Multiverse Chronological Timeline*.
- **Multiverse Character Roster**: Detailed stat sheets for Spider-Heroes (Peter Parker, Miles Morales, Gwen Stacy, Miguel O'Hara) and Iconic Villains (Green Goblin, Doc Ock, Venom, Mysterio, Electro).
- **Interactive Audio & Web Effects**: Built-in Web Audio API synthesizer for web-shooting sounds (*Thwip!*), interactive Spidey Sense radar alerts, and particle silk background canvas.

---

## 🚀 Key Features

### 1. 🎬 Complete 11-Movie Filmography
Detailed archives for all major theatrical and multiverse releases:
1. **Spider-Man (2002)** – *Tobey Maguire | Dir. Sam Raimi*
2. **Spider-Man 2 (2004)** – *Tobey Maguire | Dir. Sam Raimi*
3. **Spider-Man 3 (2007)** – *Tobey Maguire | Dir. Sam Raimi*
4. **The Amazing Spider-Man (2012)** – *Andrew Garfield | Dir. Marc Webb*
5. **The Amazing Spider-Man 2 (2014)** – *Andrew Garfield | Dir. Marc Webb*
6. **Spider-Man: Homecoming (2017)** – *Tom Holland | Dir. Jon Watts (MCU)*
7. **Spider-Man: Into the Spider-Verse (2018)** – *Miles Morales | Academy Award Winner*
8. **Spider-Man: Far From Home (2019)** – *Tom Holland | Dir. Jon Watts (MCU)*
9. **Spider-Man: No Way Home (2021)** – *Tobey, Andrew & Tom | Multiverse Reunion*
10. **Spider-Man: Across the Spider-Verse (2023)** – *Miles Morales & Spider Society*
11. **Spider-Man: Brand New Day (2026)** – *Tom Holland | Upcoming Street-Level Saga*

### 2. 📺 Modal Video Player & HD Wallpapers
- Embedded responsive 16:9 YouTube trailer players with automated playback.
- Interactive slide carousel showcasing high-resolution desktop wallpapers and movie stills.
- Story synopsis and key plot milestones for every movie.

### 3. 🗺️ Dual Watch Order Roadmap
- **Release Order Timeline**: Experience the evolution of CGI, suits, and storytelling as movies hit the box office from 2002 to 2026.
- **Multiverse Chronology**: Follow the narrative threads through dimensional rifts, MCU timelines, and Spider-Verse crossovers.

### 4. 🦹 Multiverse Heroes & Villains Database
- Interactive character cards with attributes for **Combat Power**, **Agility / Speed**, and **Scientific Intellect**.
- Covers Earth-96283 (Raimi), Earth-120703 (Webb), Earth-616 (MCU), Earth-1610 (Miles), Earth-65 (Gwen), and Earth-928 (2099).

### 5. 🔊 Interactive Audio Synthesizer & Web Particles
- **Web Audio API**: Real-time synthesized *Thwip!* web shooter sound effects without needing external heavy audio files.
- **Spidey-Sense Generator**: Triggers animated radar notifications with classic Spider-Man quotes.
- **Interactive Silk Canvas**: Physics-based interactive web lines and nodes that follow the user's cursor.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, SEO OpenGraph meta tags, and accessible markup |
| **Vanilla CSS3** | Custom CSS properties, glassmorphism (`backdrop-filter: blur`), CSS Grid, Flexbox, keyframe animations |
| **Vanilla JavaScript (ES6+)** | Dynamic movie filtering, modal state management, Web Audio API synthesis, HTML5 Canvas animation |
| **FontAwesome 6** | Modern vector iconography |
| **Google Fonts** | Typography: `Outfit`, `Bebas Neue`, and `Inter` |

---

## 📂 Project Structure

```bash
spider-man/
├── index.html       # Main semantic single-page web portal
├── style.css        # Glassmorphic design system, responsive styles & animations
├── app.js           # Movie dataset, filter engine, modal player, audio & canvas FX
└── README.md        # Comprehensive documentation & project guide
```

---

## 💻 Getting Started & Local Usage

No build tools or Node.js installations required! You can run this web portal directly in any modern browser.

### Method 1: Direct File Opening
Simply double-click [`index.html`](index.html) or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Method 2: Local HTTP Server (Optional)
If you prefer running via a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

**Using VS Code Live Server:**
Right-click `index.html` inside VS Code and select **"Open with Live Server"**.

**Using npx serve:**
```bash
npx serve .
```

---

## 📱 Responsive Testing

The portal is designed with a mobile-first philosophy and optimized across standard breakpoints:
- 📱 **Mobile Phones** (320px - 640px)
- 📱 **Tablets & iPads** (641px - 1024px)
- 💻 **Laptops & Desktops** (1025px - 1440px)
- 🖥️ **Ultra-wide & 4K Displays** (1440px+)

---

## ⚖️ Disclaimer & Credits

- **Spider-Man**, characters, logos, and related marks are trademarks of **MARVEL Entertainment, LLC** and **Sony Pictures Entertainment Inc.**
- Created in honor of **Stan Lee** and **Steve Ditko**.
- This project is an open-source educational fan tribute.
