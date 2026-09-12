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

## 2. Connect the enquiry form (2 minutes)

The "Become a Partner" form on the site needs somewhere to send its submissions, since a plain static site has no backend. The easiest free option:

1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form, and copy the endpoint it gives you (looks like `https://formspree.io/f/abcd1234`).
3. Open `index.html`, find this line (search for `YOUR_FORM_ID`):
   ```html
   <form id="enquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with your real form ID and re-upload `index.html`.

Submissions will then land directly in your email inbox. (Web3Forms is a similar free alternative if you prefer.)

## 3. Things to personalize before launch

Search `index.html` for these and update with your real details:

- **Phone number** — currently `+91 90000 00000` (appears in the footer and the WhatsApp button `wa.me/919000000000`)
- **Email** — currently `hello@jaikisanoil.in`
- **Address / city** — currently "Dadri, Uttar Pradesh, India"
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
