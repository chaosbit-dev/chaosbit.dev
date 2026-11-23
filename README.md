<p align="center">
  <a href="https://chaosbit.dev"><img src="public/chaosbit-logo.gif" alt="chaosbit" width="720"></a>
</p>

# chaosbit.dev

[![License: all rights reserved](https://img.shields.io/badge/license-all%20rights%20reserved-10B981)](#license)
[![Site](https://img.shields.io/website?url=https%3A%2F%2Fchaosbit.dev&label=chaosbit.dev)](https://chaosbit.dev)
[![Astro](https://img.shields.io/github/package-json/dependency-version/chaosbit-dev/chaosbit.dev/astro?branch=master)](package.json)
[![Last commit](https://img.shields.io/github/last-commit/chaosbit-dev/chaosbit.dev/master?label=last%20commit)](https://github.com/chaosbit-dev/chaosbit.dev/commits/master)

```console
$ cat README.md
```

The source for **[chaosbit.dev](https://chaosbit.dev)**: a landing page for the
open-source projects under [chaosbit-dev](https://github.com/chaosbit-dev), plus an about
page.

It's a static [Astro](https://astro.build) site with no CMS and no database. Vercel builds
it on every push.

The site used to carry a blog. It was retired in November 2026: the posts are still in
this repo's git history, and the old `/blog/...` and `/rss.xml` URLs redirect to the home
page (`vercel.json`).

## Run it locally

You need Node `>=22.23.4` (Astro 7.4's floor; Vercel builds on 24.x, set in the project settings) and npm.

```sh
npm install
npm run dev        # http://localhost:4321, hot reload
```

| Command                | What it does                                   |
| :--------------------- | :--------------------------------------------- |
| `npm run dev`          | Dev server on `localhost:4321`                 |
| `npm run build`        | Production build to `./dist/`                  |
| `npm run preview`      | Serve the production build locally             |
| `npm run astro -- ...` | Any Astro CLI command (`astro add`, `astro info`) |

Run `npm run build` before you push, so a broken page fails here before it fails on Vercel.

## Layout

```text
src/
├── data/projects.ts  # project cards on the landing page (hand-maintained)
├── consts.ts         # site title and tagline
├── pages/            # routes: / and /about
├── components/       # header, footer, <head> tags
└── styles/global.css # dark theme, accent #10B981
public/               # served as-is: logo, favicon, OG image, fonts, security.txt,
                      # and a few standalone static pages
vercel.json           # redirects from the retired blog URLs
```

## Add a project

Add an entry to `PROJECTS` in `src/data/projects.ts` when its repo goes public. Each one
is a card on the home page: name, repo URL, a one-line summary and a few tags.

## Deploy

Vercel's GitHub integration does it. There is no workflow in this repo and nothing to
run by hand.

- **Push or merge to `master`**: production build, live at chaosbit.dev.
- **Push any other branch or open a PR**: preview deployment. On a PR, the Vercel bot
  comments the preview URL.

DNS is on Cloudflare and points at Vercel.

## License

There is no license file, so nothing here is licensed for reuse: the site and its
content, including the retired posts in history, are © Brandon Luttrell, all rights
reserved (as the site footer says). The projects linked from the site carry their own
licenses in their own repos.

The theme started life as Astro's MIT-licensed blog template, which is based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/). Code that came from that
template stays under its MIT license.
