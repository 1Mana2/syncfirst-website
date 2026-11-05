## v17
- Profile pages: removed the empty band above the hero (the generic first-section top padding was stacking on the hero margin); the hero now sits just under the header. Certification chips restored under the role.

## v16
- Team page: removed the bio text from the Mohamed Shawky and Amr Mahmoud cards (the View profile button remains).
- Profile pages: the connected-nodes network is now the background of the hero. Labels (Internal Audit, Risk Management, ...), the "NODES / LINKS" readout and the empty panel are gone; the person's photo sits at the hub of the network. Certification chips removed.

## v6
- Team: removed "View profile" buttons, the certification/tag chips, and the 01/02 numbering.
- Home hero: the six icons are hidden until the cursor is over the hero, then animate in one by one; they fade out when the cursor leaves. On touch devices (no hover) they stay visible.
- Team: added bios and emails for Walid Mahmoud (waleed@syncfirst.com.sa) and Abdelrahman Mohamed (a.shawky@syncfirst.com.sa), English and Arabic.
- Team: removed years-of-experience wording from all bios and removed every team member phone number (cards and profile dialogs).
- Header logo (top-left, all pages): same traced S, animated (pieces slide together on load, then the two cut pieces gently drift apart and rejoin; reduced-motion respected).
- Hero S logo (home 3D logo and the banner emblem on every inner page) redrawn from the supplied S: one continuous body with the vertical cuts through the top and bottom arcs. The 3D version is now extruded from the same outline (`window.SF_S` in `main.js`).

# Change summary and test report

## Files changed
- `assets/css/refine.css`: hero rebuild, overflow fixes, form grid fixes, Connected Intelligence styles.
- `assets/js/connected_intelligence.js`: rewritten (see below).
- `assets/js/content.js`: three.js now loads from `assets/js/vendor/three.min.js` (r128, self-hosted) instead of a CDN.
- All `*/index.html` and `index.html`: `connected_intelligence.js` is now loaded on every page (it was only on About, so arriving from another page missed it).
- New: `assets/js/vendor/three.min.js`, `assets/images/syncfirst-s-mark.webp` (clean circular emblem cropped from `syncfirst-s-logo.png`, which is a full dark poster, not a usable mark). Original logo file untouched.

## Fixes
- Hero: square network image was `cover`-cropped into a wide, tall box. Now shown whole (soft circular fade) beside the text on desktop and above the text on mobile; hero no longer 1076px tall on phones; tagline no longer overlaps the icon nodes; buttons full-width on small phones.
- Horizontal overflow on Home/About (13-17px) and Contact (up to 233px at 320px): caused by 60px slide-in transforms and unbreakable form/email content. Fixed; page-level overflow is now 0 at all tested widths.
- Header on inner pages looked grey over the dark banner; now near-opaque.
- "Request a Consultation" nav button reduced.
- Connected Intelligence: logo path used `../` (broke from the home route), no duplicate guard, no translations, hover-only-free but SVG nodes had no usable labels on small screens. Now: inserted once after `#about`, follows the router (`data-p="about"`), translated through the existing `AR`/`tl()` system, four accessible tab buttons (arrow keys, `aria-pressed`, visible focus) synced with the clickable SVG nodes, restrained animation (flowing line on the active link, slow emblem breathing), reduced-motion respected, 2x2 tabs and compact map on phones.

## Test report (headless Chromium 141 via Playwright, run locally)
| Area | Result | Notes |
|---|---|---|
| Responsive overflow, 9 pages x 9 widths (320-2560) | Pass | Page scrollWidth equals viewport everywhere. Only the intentionally off-screen spam-trap field is positioned outside. |
| Visual check | Partial | Home hero at 1440 and 375, About/Connected Intelligence at 1440 and 375 reviewed by eye. Other pages/widths checked by metrics only, not visually. |
| Navigation / mobile menu | Pass | Menu opens; Home to About shows the section; About to Home hides it; no duplicates. |
| Connected Intelligence | Pass | Tab click, ArrowRight key, SVG node click, Arabic panel text and RTL verified. |
| English/Arabic | Partial | Switch verified on About/CI. Full-site Arabic wording was not re-audited by a native speaker. |
| Forms | Pass (as designed) | Empty submit blocked with errors; valid submit honestly reports sending is not enabled (no endpoint set) and offers a prepared email. Real delivery untested: needs `formEndpoint` in `config.js`. |
| Console errors | Pass | No page errors. Only failures seen were Google Fonts, blocked because the test machine is offline. |
| Browser compatibility | Not tested | Only Chromium available. Firefox/WebKit/Edge/Safari not run. |
| Accessibility | Partial | Keyboard/ARIA on new component checked. No automated WCAG or contrast audit run. |
| Performance / Lighthouse | Not tested | No scores measured. three.js is lazy-loaded and self-hosted (~590 KB). |
| SEO | Not tested | Existing titles/canonicals/JSON-LD not re-audited. Domain `syncfirst.com.sa` is still an assumption (see README). |

## Run on Windows
Open PowerShell in the project folder: `py -m http.server 8080` then browse to http://localhost:8080 (a server is needed for the `/about/` style paths).

## v3 polish (banners, careers, mobile menu, theme)
- New `assets/css/polish.css` and `assets/js/polish.js`, loaded on every page after refine.css / main.js.
- Page banners are now contained rounded panels with a gap below; the old clipped dotted ring is replaced by a fully-contained emblem (rings, orbiting dots, S mark).
- Careers: contained panel, content always visible, same layout in EN/AR, perk cards.
- Mobile menu: theme-aware panel (readable in light and dark), theme switch + consultation button inside, closes on outside tap / Esc.
- Theme button now shows on mobile and the choice is remembered.

## v4
- Home hero: 3D camera pulled back so the particle ring is no longer clipped by the square canvas; renders at up to 2x pixel ratio with slightly larger particles; larger hero on mobile.
- Page banners: animated digital-architecture background (grid, circuit traces, server blocks, data pulses), RTL-aware.
- Team: past employers removed from bios (EN + AR); cards use a shared row grid so names, roles, bios and emails line up, with emails pinned at the bottom; 3 + 2 centered layout.

## v5
- Page banners: animated interconnected-node network (canvas, pauses off-screen, static with reduced motion) replaces the circuit drawing.
- Banner S emblem: vertically centered at every size, thicker S and rings.
- Team: El-Sayed Galal, Dina Farouk and Mohamed El-Hawary rebuilt from CV.pptx (titles, summary, services, sectors, education, areas of expertise, phone, email) in English and Arabic, with a "View profile" dialog. Titles follow the CV. Past employers are not shown.

## v7
- Team: emails removed from the management team (General Manager and CEO keep theirs); Abdelrahman Mohamed and Dina Farouk swapped places.
- Dialogs (service and sector "learn more"): content now scrolls (an overflow:hidden rule was overriding overflow:auto); sticky close button.
- Home hero: supplied artwork as background (mirrored in English, as supplied in Arabic); new English and Arabic descriptions; Arabic headline now "نُمكّن التحوّل الرقمي. ونُعزّز النمو المستدام."
- Language button: "عربي" is now "Ar." (and "En." in Arabic mode).
- Careers: rebuilt after the supplied mockup (hero panel, "Why SyncFirst" cards, "Life at SyncFirst", join banner) with natively written Arabic (assets/js/updates.js).
- Not updated: page meta descriptions and og:image still use the earlier wording/image.

## v14
- Frameworks slider: removed all framework/government logo images (and the `assets/images/fw/` folder). Cards are now designed text cards (icon tile, name, full title, category pill, hover glow), same auto-scroll/drag behaviour. The framework popup uses a gradient header and icon instead of a logo.
- Vision 2030 logo kept; the image file was clipped at the bottom, so it was trimmed to its complete part and sized/centred in its card.
- Careers email changed from `careers@syncfirst.sa` to `careers@syncfirst.com.sa` on every page.
