# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML website for **Berlin Lions Club** (Berlin, CT), hosted on Cloudflare Workers (static assets) at `new.berlinlions.org`. There is no build step — all files are served as-is.

## Development

Preview locally with any static server:
```
npx serve .
# or
python3 -m http.server 8080
```

There is no package.json, build tool, linter, or test suite. Validation is visual (open in browser).

## Architecture

Five standalone HTML pages — each is self-contained with its own `<head>`, inline `<style>` overrides, and script tags:

| Page | File |
|------|------|
| Home | `index.html` |
| Charity | `charity.html` |
| Support Us | `support.html` |
| About Us | `about.html` |
| Contact | `contact.html` |

Each page shares the same nav markup, footer markup, and asset references — there is no templating engine; changes to shared sections (nav, footer) must be replicated across all pages manually.

Desktop nav order on every page: Home · Berlin Fair (external, `https://ctberlinfair.com/`) · Charity · Support Us · About Us · Contact. The current page's link gets `aria-current="page"` and the `w--current` class.

## CSS Rules

- `assets/css/berlin-lions-club.webflow.shared.37d15e43c.css` — Webflow export, **do not edit**. Add overrides in inline `<style>` blocks within each page, or a new supplementary CSS file.
- `assets/css/nav-mobile.css` — styles for the mobile full-screen overlay nav. Edit this file for mobile nav appearance changes.

## JavaScript

`assets/js/nav.js` — the only active custom JS file. It dynamically builds a full-screen mobile nav overlay and attaches it to `.w-nav-button` (the hamburger). Breakpoint: overlay closes at `window.innerWidth > 991`. To add or reorder nav links, edit the `pages` array inside this file (and mirror the change in each HTML page's desktop nav). Current-page highlighting maps Cloudflare's extensionless paths (`/charity`) back to `charity.html`.

## Branding

**Always consult `BRANDING.md` before making visual or content changes.** It documents:
- Exact hex values for the colour palette (gold `#ffde03`/`#facb05`, navy `#1c4f9c`, etc.)
- Typography: `Sen` for headings, `Roboto` for body/UI (loaded via Google Fonts in each `<head>`)
- Logo file paths and sizing rules
- Tone of voice guidelines
- Key CSS class names from the Webflow stylesheet

Two colours to **never** use: `#7f56d9` (Webflow purple) and `#3898ec` (Webflow blue).

## Content Source

The club's older Lions e-Clubhouse site at `berlinlions.org` (PHP pages, images hosted under `e-clubhouse.org/userfiles/30537/`) is the source for club news and events. When syncing, pull new content from it, copy images into `assets/images/` with descriptive names, and avoid publishing past dates as "upcoming" — phrase recurring events as annual.

Luminary sales link: `https://berlin-lions-club.square.site/`. `tickets.berlinlions.org` is currently not working (returns 400), so don't link to it.

## Deployment

Pushing to `main` deploys automatically via **Cloudflare Workers Builds** (Worker `blc`; live within about 1–2 minutes). There is no wrangler config in the repo — the repo root is uploaded as static assets. Files listed in `.assetsignore` (gitignore syntax) are not uploaded; `CLAUDE.md` is excluded there. A GitHub Pages workflow also still runs on push, but the custom domain is served by Cloudflare. The `CNAME` file sets the custom domain (`new.berlinlions.org`) — do not modify it.

Cloudflare serves pretty URLs: `/charity.html` 307-redirects to `/charity`. When verifying a deploy with curl, use `-L`. Internal links should keep using the `.html` filenames so local preview still works.
