# Open Community

A free template for a community website: groups, local business listings,
service providers, emergency contacts, events and more — installable as a
PWA and deployable straight to GitHub Pages. Clone it, rebrand it, and
publish it as your own community's site.

## Getting started

1. Use the "Use this template" button on GitHub (or fork/clone this repo).
2. Rebrand it: edit [`config.js`](./config.js) — it's the single place that
   drives the site's name, tagline, theme color, GitHub link, and group
   links. Every page reads it, so one edit updates the whole site (page
   titles, home screen name, PWA manifest, and the homepage).
3. Swap `favicon.ico` and the images in [`icons/`](./icons) for your own.
4. Enable GitHub Pages: Settings → Pages → deploy from the `main` branch,
   root folder.

Once enabled, visitors can "Add to Home Screen" on mobile to install it like
an app.

## Groups

Edit the `whatsappGroups` list in [`config.js`](./config.js) with links to
your own community's group chats (WhatsApp, Telegram, etc.), or set it to an
empty array to hide the section on the homepage.

## Business Listings

Local business listings live under [`businesses/`](./businesses) — see that
folder's README for the listing format and how to add one. Listings with an
`area` set can also be browsed by area on the [Areas](./areas.html) page.

## Service Providers

Plumbers, handymen and other tradespeople without a fixed premises live
under [`services/`](./services) and are browsable on the
[Services](./services.html) page — see that folder's README for the entry
format and how to add one.

## Emergency Services

Emergency services contacts (police, fire, medical, etc.) live under
[`emergency-services/`](./emergency-services) — see that folder's README for
the entry format and how to add one.

## Music

Local artists and venues live under [`music/`](./music) and are browsable on
the [Music](./music.html) page — see that folder's README for the entry
format and how to add one.
