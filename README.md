# Jai Kisan — Website Package

A ready-to-upload, single-page website for the Jai Kisan mustard oil brand. Green + gold theme pulled straight from your label artwork.

## What's inside

```
index.html              → the whole site (one page, anchor-linked sections)
css/style.css           → all styling (colors, fonts, layout)
js/main.js              → nav scroll effect, mobile menu, form handling
assets/images/          → your logo/label, product photo, and generated favicons
```

## 1. Upload to GoDaddy (cPanel / File Manager hosting)

1. Log in to GoDaddy → **My Products** → next to your hosting plan click **Manage**.
2. Open **File Manager** (or connect via FTP with the credentials in your hosting dashboard).
3. Go into the `public_html` folder (this is what your domain points to).
4. Delete/back up any placeholder `index.html` GoDaddy put there by default.
5. Upload **all the contents of this folder** (not the folder itself — the `index.html` file and the `css`, `js`, `assets` folders should sit directly inside `public_html`).
6. Visit your domain — the site should load immediately (allow a few minutes for DNS/cache).

> If your GoDaddy plan is the drag-and-drop **Website Builder** (not cPanel hosting), it can't accept custom HTML files directly — you'd need to either switch to a cPanel/"Web Hosting" plan, or embed sections of this using an HTML embed block. Let me know which plan you have if you're unsure, and I can adjust the approach.

## 2. The enquiry form sends straight to WhatsApp

No backend, no third-party form service needed. When someone fills in the "Become a Partner" form and taps **Send via WhatsApp**, it opens WhatsApp (app on mobile, WhatsApp Web on desktop) with all their details already typed into a message addressed to your business number — they just tap Send in WhatsApp to complete it.

This is already wired to the site's real number:
```html
<form id="enquiryForm" data-whatsapp-number="919454809300">
```
If that number ever changes, update it here and in the floating WhatsApp button near the bottom of `index.html` (`href="https://wa.me/919454809300"`), then re-upload.

**Good to know:**
- This only works if the *visitor's* device can open WhatsApp (app installed, or WhatsApp Web logged in on desktop) — true for the vast majority of Indian mobile users.
- Every submission requires the visitor to tap Send once inside WhatsApp — nothing is sent silently in the background; that's a WhatsApp/browser restriction, not something a static site can route around.
- Want an email backup too? A free form service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) can be added alongside this.

## 3. Things to personalize before launch

Search `index.html` for these and update with your real details:

- **Phone number** — footer and WhatsApp button are already set to `+91-94548 09300`; update in both places if this ever changes
- **Email** — check the footer's current address matches your live inbox
- **Address / city** — check the footer's current address is correct
- **FSSAI license number** — currently a placeholder in the footer; this is mandatory for any packaged food product sold in India
- **Prices** — ₹185 (1L) and ₹99 (500ml) are placeholders; set your real MRP
- **Social links** — the Facebook/Instagram icons in the footer currently link to `#`; paste your real profile URLs

## 4. Swapping or adding images

All images live in `assets/images/`. To add more (e.g. a real factory photo, farm photo, or founder photo):
1. Drop the new image file into `assets/images/`.
2. Reference it in `index.html` as `assets/images/your-file-name.jpg`.

## 5. Domain & DNS

Since your domain is already in GoDaddy and hosting is also GoDaddy, no DNS changes should be needed — they're linked automatically. If the domain was pointed elsewhere before, make sure under **DNS Management** the domain's nameservers are GoDaddy's default hosting nameservers.

---

Built with a single HTML page for simplicity — fast to load, easy to edit, and works on any standard web host.
