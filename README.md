<<<<<<< HEAD
# SfYnds website starter

A responsive, static, blog-first website for SfYnds. It is designed to deploy on GitHub Pages or Cloudflare Pages without a build step.

## Files
- `index.html` — homepage, category filters, article cards, newsletter demo
- `styles.css` — responsive styling
- `script.js` — mobile navigation, filtering, search and demo form handling
- `articles/` — three starter articles
- `about.html`, `affiliate-disclosure.html`, `privacy.html`, `contact.html`
- `robots.txt`, `sitemap.xml`, `assets/favicon.svg`

## Before you publish
1. Replace the placeholder social links in `index.html` with your actual profile URLs.
2. Replace `hello@yourdomain.com` on `contact.html` with an email address you control.
3. Update `sitemap.xml` and `robots.txt` to use your final domain or public site URL.
4. Connect a real email newsletter provider. The homepage signup is only a demo and does not collect or send email addresses.
5. Add your actual affiliate links only after you are accepted into each program. Add program-required disclosures near links and recommendations.
6. Customize the privacy policy for the analytics, email, affiliate and payment services you actually use.
7. Check all links and details on mobile and desktop before launch.

## Run locally
Open `index.html` in your browser. For a local server, from this directory run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository, e.g. `sfynds`.
2. Upload the **contents** of this folder (so `index.html` is at the repository root).
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. The public URL will appear in Settings → Pages.

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repository.
4. For a plain static site, leave the build command empty and set the build output directory to `/` or the repository root as requested by the current Cloudflare UI.
5. Deploy. Cloudflare will provide a `*.pages.dev` address.
6. Add a custom domain later if you own one.

Do not deploy the ZIP file itself as the website root. Extract it and upload the files and folders inside it.
=======
# SfYnds
>>>>>>> 1fe6e2e847f0d486a18e5f8fd8b4895bf1e7e5f3
