# Berlin Lions Club — Branding Guide

Reference this document before making any visual or content changes to the site.

---

## Identity

| | |
|---|---|
| **Organisation** | Berlin Lions Club |
| **Parent body** | Lions Clubs International |
| **Location** | Berlin, CT 06037 |
| **Founded** | 1941 |
| **Mission** | Community service — "Whenever a Lions Club gets together, problems get smaller and communities get better." |

---

## Colour Palette

These are the colours defined in the site's CSS. Always draw from this palette — don't introduce new colours without a reason.

### Primary

| Name | Hex | Usage |
|---|---|---|
| Black / Near-black | `#222` (`--black`) | Primary text, dark backgrounds, nav |
| Gold (bright) | `#ffde03` (`--gold`) | Lions branding accent, highlights |
| Gold (deep) | `#facb05` (`--gold-2`) | Hover states, secondary gold accents |
| Navy / Lions Blue | `#1c4f9c` | Hero backgrounds, section backgrounds |
| White Smoke | `#f9f9f9` (`--white-smoke`) | Text on dark backgrounds, light surfaces |

### Secondary / Supporting

| Name | Hex | Usage |
|---|---|---|
| Off-white | `#fafafa` | Page backgrounds, cards |
| Mid grey | `#999` | Muted/placeholder text |
| Dark grey | `#333` | Body text on light backgrounds |
| Dim grey | `#525252` (`--dim-grey`) | Subtle UI elements |
| Indian Red | `#eb5757` (`--indian-red`) | Alerts, error states |
| Sea Green | `#20c788` (`--medium-sea-green`) | Success states |

### Do not use
- The purple (`#7f56d9`) — this is a leftover Webflow default, not part of the Berlin Lions brand.
- `#3898ec` — another Webflow default blue, not brand-appropriate.

---

## Typography

Fonts are loaded via Google Fonts (direct `<link>` tag in each page's `<head>`).

| Role | Font | Weights | Notes |
|---|---|---|---|
| **Headings / Display** | `Sen` | 400, 700, 800 | Geometric sans-serif. Used for all `h1`–`h3`, hero text, section titles. |
| **Body / UI** | `Roboto` | 100, 300, 400, 500, 700, 900 | Clean and neutral. Used for paragraphs, nav links, buttons, captions. |

### Scale (from CSS)

| Size | Usage |
|---|---|
| `40px` / `38px` | Hero headings (`h1`) |
| `32px` / `30px` | Section headings (`h2`) |
| `26px` / `24px` | Sub-headings (`h3`) |
| `20px` / `18px` | Large body / intro text |
| `16px` / `14px` | Standard body text |
| `12px` / `13px` | Captions, labels, fine print |

---

## Logo

The Lions Clubs International logo is used as the site's brand mark.

| File | Usage |
|---|---|
| `assets/images/6413d466976598272d9b6f7b_Lions_Clubs_International_logo.svg.png` | Nav bar, footer (primary logo) |
| `assets/images/6413dea9f4c32a8089a8ba12_Lions_Clubs_International_logo.svg.png` | Favicon |
| `assets/images/6413df35eb1179bc7def6053_Lions_Clubs_International_logo.svg-2.png` | Apple touch icon |

**Sizing in use:** 80px wide in nav, 50px wide in footer. Always maintain aspect ratio. Do not place on busy backgrounds without a clear background behind it.

---

## Navigation

The site has 5 nav links, in this order:

1. Home (`index.html`)
2. Berlin Fair (`https://ctberlinfair.com/`) — external link
3. Charity (`charity.html`)
4. Support Us (`support.html`)
5. About Us (`about.html`)

The active page link gets the `.w--current` class. The mobile hamburger menu is powered by `assets/js/nav.js` (vanilla JS, no jQuery).

---

## Iconography & Social

Social icons are flat SVG files in `assets/images/`:

| Platform | File |
|---|---|
| Facebook | `6413d30124cfc2fc43f24b1f_Facebook Logo.svg` |
| Instagram | `6413d30124cfc279d9f24b1d_Insta.svg` |
| LinkedIn | `64d8ff27399cb463eb11ce80_linkedin.svg` |

Social links:
- Facebook: `https://www.facebook.com/BerlinCTLionsClub/`
- Instagram: `https://www.instagram.com/ctberlinfair/`
- LinkedIn: `https://www.linkedin.com/company/berlin-lions-club/`

---

## Contact & Address

```
Berlin Lion's Club
430 Beckley Road
P.O. Box 23
Berlin CT, 06037

secretary@berlinlions.org
860-828-0063
```

---

## Tone of Voice

- Warm, community-focused, inclusive
- Proud of local roots (Berlin, CT)
- Emphasise volunteer effort and charitable impact
- Use concrete numbers when available (e.g. "$12,000 donated", "since 1941")
- Avoid corporate or formal language

---

## Photography

Photos live in `assets/images/`. Key images currently used on the site:

| File | Subject |
|---|---|
| `67510ec02a382a1c6d6ccf04_2024 Check Presentaion to the Veterans.jpg` | Veterans $12K check presentation |
| `673d3420aabe2d2cb57e3ef7_illuminated...jpg` | Christmas lights (hero/seasonal) |
| `6413e290be9e5244e8a7957c_slider-christmas.jpg` | Christmas slider |
| `64d9099ee5135a6a82d23bb3_vipfishing2023.jpg` | VIP Fishing event 2023 |
| `64d90aaccfc1e7e6c65a342b_slider-wine.jpg` | Wine tasting event |
| `66047ab07de3c97af4216032_Wine-tasting.jpg` | Wine tasting fundraiser |
| `64d2f9195c69208bdfba242a_...jpg` | Community group photo |
| `030226113744Blue_White_Minimalist_Closed.jpg` | Flyer / poster design |
| `061125173521memorial.jpg` | Memorial event |
| `FB_IMG_176...` (11 files) | Recent Facebook event photos |

**Photo style:** Real community events, candid group shots, outdoor and seasonal imagery. Avoid stock photography.

---

## CSS Architecture

The site uses a single shared Webflow-exported stylesheet:

```
assets/css/berlin-lions-club.webflow.shared.37d15e43c.css
```

This file is minified and should **not be edited directly**. Add overrides using `<style>` blocks within individual pages or a new supplementary CSS file.

### Key CSS classes to know

| Class | Purpose |
|---|---|
| `.treewalkcontainer` | Main content width container |
| `.navbar` / `.w-nav` | Navigation bar |
| `.w-nav-menu` | Nav link list (hidden on mobile until toggled) |
| `.w-nav-button` | Hamburger menu button |
| `.w--open` | Applied by `nav.js` when mobile menu is open |
| `.w-mod-js` | Added to `<html>` on load — enables JS-dependent CSS |
| `.hero-wrapper` | Home page hero section wrapper |
| `.safe-heading` / `.safe-paragraph` | Section heading/body text styles |
| `.footer-wrapper` | Footer layout container |
| `.w-button` | Standard button style |
| `.btn.light.outline` | Outlined light variant button |

---

## JavaScript

Only one JS file is actively used:

| File | Purpose |
|---|---|
| `assets/js/nav.js` | Mobile hamburger nav toggle (vanilla JS, 28 lines) |

Google Analytics is loaded via inline script in every page's `<head>` (ID: `G-NKDQXY9X1W`).
