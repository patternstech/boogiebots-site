# BoogieBots.ai

Landing page for BoogieBots.ai, a dancing, talking, stand-up comedy robot available for rent in Texas. Operated by Patterns Tech LLC.

Static HTML/CSS/JS with no build step. Open `index.html` to preview.

## Adding content later

`index.html` has hidden `videos`, `gallery` and `packages` sections. Remove the `hidden` attribute and add content. Put media in `assets/`.

## Hosting

The site is deployed to Azure Static Web Apps from the `main` branch by the GitHub Actions workflow in `.github/workflows/azure-static-web-apps.yml`. The app uses the Free plan and requires the `AZURE_STATIC_WEB_APPS_API_TOKEN` repository secret.

The Azure deployment endpoint is `green-pond-0e4f51910.6.azurestaticapps.net`. Configure `www.boogiebots.ai` as a custom domain on that app after its DNS CNAME points to this endpoint. GoDaddy forwarding sends the root domain to `www`.
