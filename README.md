# SyncFirst Management Consulting: website

Static HTML / CSS / JavaScript site (no framework, no build step needed to run it). English and Arabic (RTL), light and dark theme.

## Structure
```
index.html, about/, team/, services/, industries/, insights/, careers/, contact/, privacy/   one entry file per page (own title, description, canonical, Open Graph)
assets/css/main.css      original styles, cleaned (loader, cursor glow, 3D tilt and looping animations removed)
assets/css/refine.css    accessibility, new sections, responsive and reduced-motion rules
assets/js/main.js        original application logic (router, Arabic dictionary, animations, 3D logo), patched
assets/js/content.js     new bilingual content, service and industry dialogs, contact form, SEO meta
assets/js/config.js      public runtime configuration (form endpoint)
assets/images/           optimised WebP images, logo, favicon
robots.txt, sitemap.xml
```
Navigation inside the site still uses `#home`, `#about`, `#services` ... so the existing page transitions are preserved. Each folder entry (for example `/about/`) loads the same app but starts on that page with its own metadata, so pages can be listed in the sitemap and shared.

## Run locally
Serve the folder over HTTP (opening the file directly also works but the `/about/` style paths need a server):
```
cd syncfirst-website
python3 -m http.server 8080      # then open http://localhost:8080
```

## Publish
Upload the folder contents to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3/CloudFront, or the existing web server). Set the site root to this folder. No server-side code is required, except for the contact form (below).

## Required before go-live
1. **Contact form endpoint.** Edit `assets/js/config.js` and set `formEndpoint` to an HTTPS endpoint that accepts a JSON POST (a form service such as Formspree/Getform, or your own API). Until then the form validates, but honestly reports "online sending is not enabled" and offers a prepared email instead. It never shows a fake success. Server-side spam protection (CAPTCHA/Turnstile, rate limiting) must be configured at that endpoint: the site only provides a honeypot field and a minimum-fill-time check, which are client-side and weak on their own.
2. **Production domain.** Canonical URLs, Open Graph URLs, `sitemap.xml`, `robots.txt` and the JSON-LD use `https://syncfirst.com.sa` (inferred from the email domain, not confirmed). If different, regenerate: replace that string across the files.
3. **Business approval of content** (see list below).
4. **Privacy Policy** (`/privacy/`) is a plain-language draft built from what the form collects. Have counsel review it against the laws that apply to SyncFirst (for example Saudi PDPL) before publishing. Nothing on the site claims legal compliance.
5. **Careers email.** All addresses, including `careers@syncfirst.com.sa`, now use `syncfirst.com.sa` (the careers address was previously `.sa`).
6. **Hosting headers (recommended).** Add a Content-Security-Policy, `X-Content-Type-Options`, and HSTS at the host. The site loads Google Fonts and three.js (cdnjs) only. Add Subresource Integrity to the three.js tag if you pin the file.

## Content that needs business approval
- Service capabilities, deliverables and related frameworks (`SD` in `content.js`) were written from the supplied company profile and general practice. The profile does not list a standalone "Digital Transformation" or "Financial Advisory" service: they appear under existing service lines (IT Governance, Financial/Accounting/Management Consulting). Confirm or add dedicated pages.
- Frameworks section (`FWK`): described as references only, with a disclaimer that no certification or accreditation is implied. Confirm SyncFirst's real experience with each before expanding claims.
- Industry details (`ID`): overviews, challenges and deliverables are generic; no client experience is claimed.
- Engagement examples (`CASES`) are labelled "Illustrative example". To add an approved case study, add an object with `ill:false` and the same fields; no layout change is needed.
- Team credentials and the "Insights" articles: credentials are as supplied in the original file. The three insight cards had no articles behind them, so they now say "Article coming soon".
- Statistics: "9 service lines, 6 sectors, 5 core values, 2030" are counts taken from the site itself. The former "100% aligned with Vision 2030" badge was an unsupported claim and was replaced with "Supporting Saudi Vision 2030". "Decades of combined experience" was softened to "experience across the Gulf" (not verifiable from the supplied files).

## Summary of changes
- **Images:** 38 base64 images (1.8 MB HTML) became 31 optimised files (about 0.8 MB total), lazy-loaded; hero is `fetchpriority=high` with a preload, `srcset`, and explicit size. Team photos were replaced with the supplied high-resolution portraits (cropped and converted).
- **Logos:** the supplied framework logo sheet looks AI-generated and contains incorrect names (for example NCA shown as "National Center for Cybersecurity Compliance"), so it was not used. Frameworks are shown as text cards.
- **Fixes:** Saira Stencil One was never loaded, replaced with Sora (already loaded); `display=swap` added; headline line 2 ("Enabling Transformation.") did not render in Chromium; Arabic link text was mirrored; `#fs`-style stale references; modal had no dialog semantics or focus handling; service cards were not keyboard accessible; the page-wide loader hid all content for ~1 s and blocked on JS; content is now visible without the reveal animation if JS animation fails.
- **Motion:** removed loader, cursor glow, 3D tilt, logo flipping, floating chips and parallax; the 3D logo loads on idle, pauses off-screen and when the tab is hidden; reduced-motion is respected.
- **New content (EN + AR):** hero text and CTAs, "Who we are", 8 business challenges linking to services, service dialogs (challenges, capabilities, methodology, deliverables, frameworks, CTA with the service preselected), five-stage approach with deliverables, 8 framework cards, industry detail dialogs, "Why SyncFirst", illustrative engagement examples, privacy page, accessible validated contact form.
- **SEO:** per-page title, description, canonical, Open Graph, JSON-LD Organization (only details already on the site), sitemap, robots.

## Test results (headless Chromium, 1366x800 and 390x844)
Pass: no JavaScript errors on any page; no horizontal overflow on all 9 pages at both sizes; all asset links resolve; service and industry dialogs open and close (Escape, backdrop, button); challenge link opens the right service and the "Discuss" CTA preselects it in the form; empty submit shows 6 inline errors; the unconfigured form reports failure instead of success; Arabic switch sets `dir=rtl` and no untranslated English headings were found on the Arabic home page.
Not tested: real form delivery (no endpoint), Safari/Firefox/real phones, 3D logo rendering and web fonts (sandbox had no internet access, so they were not loaded), Lighthouse scores, screen readers. Please run these before launch.

## Known limitations
- Content is rendered by JavaScript (as in the original). Search engines that execute JS will index it, but a server-rendered or pre-rendered build would be stronger for SEO.
- The Arabic text of the original sections comes from the existing dictionary; the new Arabic should be reviewed by a native Saudi business editor.
