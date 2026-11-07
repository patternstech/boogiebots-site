# BoogieBots.ai

Website for BoogieBots.ai, robot and tech entertainment for parties and events in Texas. Operated by Patterns Tech LLC.

Static HTML/CSS/JS with no build step. Pages use root-relative paths (`/css/...`), so preview through a local server (for example `npx serve .`) rather than opening the files directly.

## Pages

- `index.html`: home page with the six service tiles
- `services.html`: one section per service (`#humanoid`, `#vr`, `#sketch`, `#print`, `#laser`, `#photobooth`) with photo galleries
- `packages.html`: placeholder until packages are ready
- `contact.html`: contact details and an inquiry form that opens the visitor's email app. `?service=NAME` pre-checks a service.

Shared styles are in `css/styles.css` and behavior is in `js/main.js`.

## Adding photos and videos

Put files in `assets/images/` (WebP, about 1000px wide) or `assets/videos/`. In `services.html`, add a `<button>` with an `<img>` to a service's `.thumbs` list to add a gallery photo. A comment at the top of the services list shows how to replace the main image with a `<video>`.

The BoogieBots brand logo is `assets/images/boogiebots-logo.png`; it is used in the page headers and footers, as the browser icon, and in the home-page hero.

Current photos are representative images from Wikimedia Commons. Their credits are listed in the `#credits` section in the footer of `services.html`. Update that list if you add or remove third-party images.

## Hosting

The site is deployed to Azure Static Web Apps from the `main` branch by the GitHub Actions workflow in `.github/workflows/azure-static-web-apps.yml`. The app uses the Free plan and requires the `AZURE_STATIC_WEB_APPS_API_TOKEN` repository secret.

The Azure deployment endpoint is `green-pond-0e4f51910.6.azurestaticapps.net`. Configure `www.boogiebots.ai` as a custom domain on that app after its DNS CNAME points to this endpoint. GoDaddy forwarding sends the root domain to `www`.
