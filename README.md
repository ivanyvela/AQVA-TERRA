# AQVA TERRA (`aqvaterra.org`)

Preliminary landing website for **AQVA TERRA**, an independent hydrogeology, surface-water, and water-policy research institute dedicated to advancing clean water through applied geophysics, remote sensing, open low-cost monitoring, water economics, and evidence-backed capital allocation.

---

## 🌊 Architecture & Technical Overview

- **Pure Static Stack:** Pure HTML5, modern CSS custom properties, and vanilla JavaScript (zero heavy frameworks, zero build steps, zero third-party telemetry).
- **GitHub Pages Hosting:** Built specifically for instant deployment via GitHub Pages with root `CNAME` targeting `aqvaterra.org`.
- **Search & AI Crawler Ready:** Complete OpenGraph, Twitter Cards, semantic HTML5, JSON-LD `ResearchOrganization` structured data, `robots.txt`, `sitemap.xml`, and `llms.txt`.
- **Live Update & Cache Control:** Configured with HTTP cache-control meta tags and asset query versioning (`?v=2026.1`) so shared links always display the live page without browser caching freezes.
- **Accessibility & Motion Safety:** Full support for `prefers-reduced-motion` with static poster fallback and deep abyssal navy gradient backing.
- **Brand Palette:**
  - `--bg-abyssal-navy: #072B49;`
  - `--aqva-deep-blue: #104E7A;`
  - `--aqva-cerulean: #247BA0;`
  - `--terra-ochre: #B57E3C;`
  - `--terra-umber: #6E4721;`
  - `--surface-ivory: #F7F6F2;`
- **Transparent Logo:** `assets/logo.png` features an alpha-transparent background around the emblem and typography, ensuring seamless integration on any container surface.

---

## 📁 Repository Structure

```text
.
├── CNAME                         # Custom domain: aqvaterra.org
├── README.md                     # Documentation & deployment guide
├── favicon.png                   # 32x32 transparent favicon
├── favicon.svg                   # Scalable vector favicon
├── index.html                    # Single-page preliminary landing site (v2026.1)
├── llms.txt                      # AI & LLM crawler documentation
├── robots.txt                    # Search crawler indexing rules
├── sitemap.xml                   # XML sitemap for search engines
├── script.js                     # Vanilla JavaScript (email copy, scroll, video handling)
├── styles.css                    # Modern CSS (glassmorphism, typography, responsive)
└── assets/
    ├── favicon-32.png            # 32px favicon
    ├── favicon-192.png           # 192px touch icon
    ├── favicon-512.png           # 512px icon
    ├── favicon.svg               # Vector favicon asset
    ├── hero-bg.mp4               # Widescreen desktop video loop (H.264)
    ├── hero-bg.webm              # WebM VP8 video loop fallback
    ├── hero-bg-mobile.mp4        # Mobile-optimized balanced video loop
    ├── hero-poster.jpg           # Desktop video poster fallback
    ├── hero-poster-mobile.jpg    # Mobile video poster fallback
    └── logo.png                  # Transparent logo (droplets removed, alpha unmixed)
```

---

## 🚀 One.com Domain & GitHub Pages Setup

### Step 1: Deploy Repository to GitHub Pages
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Launch AQVA TERRA preliminary landing site (2026–27)"
   git branch -M main
   git remote add origin https://github.com/<your-username-or-org>/<repo-name>.git
   git push -u origin main
   ```
2. In GitHub, go to **Settings** → **Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`
   - **Custom domain:** `aqvaterra.org` (verified from root `CNAME`)
   - **Enforce HTTPS:** Checked (SSL certificate automatically provisions via Let's Encrypt).

---

### Step 2: One.com DNS Configuration for `aqvaterra.org` (Primary Domain)
In your One.com Control Panel for `aqvaterra.org`:
1. Navigate to **DNS settings** → **DNS records**:
2. Add the **4 GitHub Pages Apex A Records** (for `@` or blank host):
   | Type | Host | Points to | TTL |
   | :--- | :--- | :--- | :--- |
   | **A** | `@` | `185.199.108.153` | 3600 |
   | **A** | `@` | `185.199.109.153` | 3600 |
   | **A** | `@` | `185.199.110.153` | 3600 |
   | **A** | `@` | `185.199.111.153` | 3600 |

3. Add the **4 GitHub Pages IPv6 AAAA Records** (recommended):
   | Type | Host | Points to | TTL |
   | :--- | :--- | :--- | :--- |
   | **AAAA** | `@` | `2606:50c0:8000::153` | 3600 |
   | **AAAA** | `@` | `2606:50c0:8001::153` | 3600 |
   | **AAAA** | `@` | `2606:50c0:8002::153` | 3600 |
   | **AAAA** | `@` | `2606:50c0:8003::153` | 3600 |

4. Add the **CNAME record for `www`**:
   | Type | Host | Points to | TTL |
   | :--- | :--- | :--- | :--- |
   | **CNAME** | `www` | `<your-username>.github.io.` (or `aqvaterra.org.`) | 3600 |

---

### Step 3: Redirect `aqvaterra.es` and `aqvaterra.dk` to `aqvaterra.org`
In your One.com Control Panel:
1. Switch to the domain **`aqvaterra.es`**:
   - Go to **Web forwarding** (or **URL Forwarding / Web alias**).
   - Set forward destination to: `https://aqvaterra.org/`
   - Select **301 Permanent Redirect**.
   - Enable for both apex (`aqvaterra.es`) and `www.aqvaterra.es`.
2. Switch to the domain **`aqvaterra.dk`**:
   - Go to **Web forwarding**.
   - Set forward destination to: `https://aqvaterra.org/`
   - Select **301 Permanent Redirect**.
   - Enable for both apex (`aqvaterra.dk`) and `www.aqvaterra.dk`.

---

## 🔄 Why Shared Links Won't Freeze on Old Versions

When sharing links to the site (`https://aqvaterra.org`):
1. **GitHub Pages Edge CDN:** Every time you push a new commit to GitHub, GitHub Pages automatically deploys the latest version to its global CDN within 30–60 seconds.
2. **Client Browser Cache-Busting:** The site includes `Cache-Control: no-cache, no-store, must-revalidate` in `<head>` and versioned query strings on all core assets (`styles.css?v=2026.1`, `script.js?v=2026.1`, `logo.png?v=2026.1`). Browsers will always fetch live code immediately.
3. **Social Preview Cache Refresh:** Social messaging apps (WhatsApp, LinkedIn, Twitter/X, iMessage) scrape link previews once and cache them. When you make a major visual change, you can instantly refresh the crawler cache using:
   - **LinkedIn:** [Post Inspector](https://www.linkedin.com/post-inspector/)
   - **Facebook/WhatsApp:** [Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - **Twitter/X:** [Card Validator](https://cards-dev.twitter.com/validator)
   - Or simply share with a query param like `https://aqvaterra.org/?v=2`.
