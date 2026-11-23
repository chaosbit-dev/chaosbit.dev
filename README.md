<p align="center">
  <a href="https://chaosbit.dev"><img src="public/chaosbit-logo.gif" alt="~/chaosbit → 0x43_ — engineering leadership from the terminal" width="720"></a>
</p>

# chaosbit.dev

```console
$ cat README.md
```

The source for **[chaosbit.dev](https://chaosbit.dev)**: notes from the messy middle of
engineering leadership, plus a landing page for the open-source projects under
[chaosbit-dev](https://github.com/chaosbit-dev).

It's a static [Astro](https://astro.build) site. Posts are Markdown files in this repo. No
CMS and no database. Vercel builds it on every push.

## Run it locally

You need Node `18.20.8`, `^20.3.0` or `>=22` (Astro 5's floor) and npm.

```sh
npm install
npm run dev        # http://localhost:4321, hot reload
```

| Command                | What it does                                   |
| :--------------------- | :--------------------------------------------- |
| `npm run dev`          | Dev server on `localhost:4321`                 |
| `npm run build`        | Production build to `./dist/`                  |
| `npm run preview`      | Serve the production build locally             |
| `npm run astro -- ...` | Any Astro CLI command (`astro check`, `astro add`) |

Run `npm run build` before you push. A bad frontmatter field fails the build here
before it fails on Vercel.

## Layout

```text
src/
├── content/blog/     # the posts: one .md or .mdx file each
├── content.config.ts # frontmatter schema for posts
├── data/projects.ts  # project cards on the landing page (hand-maintained)
├── consts.ts         # site title, description, tagline
├── pages/            # routes: /, /about, /blog, /blog/<slug>, /rss.xml
├── layouts/          # BlogPost.astro wraps every post
├── components/       # header, footer, <head> tags
└── styles/global.css # dark theme, accent #10B981
public/               # served as-is: logo, favicon, OG image, fonts, security.txt,
                      # and a few standalone static pages
```

## Add a post

Drop a file in `src/content/blog/`. The filename is the slug, so
`src/content/blog/calibrated-defiance.md` is served at `/blog/calibrated-defiance/`.

```markdown
---
title: 'Post Title'
description: 'One sentence. Shows on the index, in RSS, and in link previews.'
pubDate: 'Nov 23 2026'
updatedDate: 'Dec 01 2026'   # optional
heroImage: './hero.png'      # optional, path relative to the post
---

Body in Markdown, or MDX if the file ends in .mdx.
```

The schema in `src/content.config.ts` checks the frontmatter: `title`, `description` and
`pubDate` are required. There is no draft flag. A file in `src/content/blog/` on `master`
is published, so keep drafts on a branch.

The home page shows the three newest posts, `/blog` lists all of them, and the RSS feed
and sitemap pick new posts up on their own.

## Deploy

Vercel's GitHub integration does it. There is no workflow in this repo and nothing to
run by hand.

- **Push or merge to `master`**: production build, live at chaosbit.dev.
- **Open a pull request**: preview deployment. Its URL shows up in the PR's checks.

DNS is on Cloudflare and points at Vercel.

## License

There is no license file, so nothing here is licensed for reuse: the posts and the site
are © Brandon Luttrell, all rights reserved (as the site footer says). The projects linked
from the site carry their own licenses in their own repos.

The theme started life as Astro's blog template, which is based on
[Bear Blog](https://github.com/HermanMartinus/bearblog/).
