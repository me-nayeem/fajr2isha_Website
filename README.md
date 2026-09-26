# Fajr2Isha — Landing Page

Marketing/download site for the Fajr2Isha Android app, built with Next.js
(App Router, JavaScript) and Tailwind CSS v4.

## Local development

    npm install
    npm run dev

Open http://localhost:3000

## Deploying to Vercel

1. Push this project to a new GitHub repo (e.g. `fajr2isha-website`).
2. In Vercel, "Add New Project" and import that repo. No configuration
   needed — Vercel detects Next.js automatically.
3. Every push to `main` redeploys automatically.

## Wiring up the APK download

The download button currently points to:

    https://github.com/me-nayeem/fajr_to_isha/releases/latest

This will 404 until you actually publish a GitHub Release with the signed
APK attached as an asset on that repo:

1. Build your signed release APK.
2. On the `fajr_to_isha` repo, go to Releases -> Draft a new release.
3. Tag it (e.g. `v1.0.0`), attach the `.apk` file as a release asset,
   and publish.
4. The `/releases/latest` link will then always point at whichever
   release you tag as "Latest," so you never need to update this site
   when you ship an update — just publish a new release.

## Adding the intro video once it's ready

Open `components/Hero.js` and set:

    const INTRO_VIDEO_URL = "https://your-video-link";

The "Watch the intro" button is hidden automatically while this is null.

## Structure

    app/            Root layout, global styles, the single page route
    components/     One component per section
    public/images/  Logo + app screenshots
