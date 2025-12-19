# Blog Technical Setup: Astro + Vercel + Custom Domain

## Overview

A minimal markdown-based blog using Astro, deployed to Vercel, with a custom domain. No database, no CMS—just markdown files in a repo.

---

## Stack

- **Framework**: Astro (static site generator)
- **Hosting**: Vercel (free tier)
- **Content**: Markdown files with frontmatter
- **Styling**: Keep default theme initially, customize later
- **Domain**: Custom domain via Vercel

---

## Setup Steps

### 1. Initialize Astro Blog

```bash
# Create new Astro project with blog template
npm create astro@latest -- --template blog

# Follow prompts:
# - Project name: your-blog-name
# - Install dependencies: Yes
# - TypeScript: Your preference (strict or relaxed, either works)
# - Initialize git: Yes
```

### 2. Project Structure (What You Get)

```
/
├── src/
│   ├── content/
│   │   └── blog/           # Your markdown posts go here
│   │       ├── first-post.md
│   │       └── second-post.md
│   ├── layouts/
│   │   └── BlogPost.astro  # Post layout template
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   └── blog/
│   │       └── [...slug].astro  # Dynamic post routing
│   └── styles/
│       └── global.css      # Global styles
├── public/                 # Static assets (images, etc.)
├── astro.config.mjs        # Astro configuration
└── package.json
```

### 3. Markdown Post Format

Each post in `src/content/blog/` uses this frontmatter structure:

```markdown
---
title: 'The Mask'
description: 'On authentic leadership and the cost of professional fakeness'
pubDate: 'Dec 18 2024'
heroImage: '/blog-placeholder.jpg'  # Optional
---

Your content here. Standard markdown.

## Headings work

So do **bold**, *italics*, `code`, and [links](https://example.com).
```

### 4. Local Development

```bash
# Start dev server
npm run dev

# Site available at http://localhost:4321
# Hot reloads on file changes
```

### 5. Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

#### Option B: Via GitHub Integration (Recommended)
1. Push repo to GitHub
2. Go to vercel.com → "Add New Project"
3. Import your GitHub repo
4. Vercel auto-detects Astro, no config needed
5. Click Deploy

Future pushes to `main` auto-deploy.

### 6. Custom Domain Setup

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Vercel provides DNS instructions:
   - **Option A**: Use Vercel nameservers (easiest)
   - **Option B**: Add A record and CNAME record to existing DNS
4. SSL certificate is automatic

#### Typical DNS Records (if not using Vercel nameservers)
```
Type  | Name | Value
------|------|------
A     | @    | 76.76.21.21
CNAME | www  | cname.vercel-dns.com
```

---

## Workflow After Setup

1. Write post in markdown (Obsidian, VS Code, whatever)
2. Save to `src/content/blog/your-post-slug.md`
3. `git add . && git commit -m "New post: Title" && git push`
4. Vercel auto-deploys in ~30 seconds
5. Live at `yourdomain.com/blog/your-post-slug`

---

## Customization (Later, Not Now)

Things you might want to tweak eventually, but **don't touch yet**:

- **Theme/styling**: `src/styles/global.css` and component files
- **Site metadata**: `src/consts.ts` (site title, description)
- **Layout**: `src/layouts/BlogPost.astro`
- **Home page**: `src/pages/index.astro`
- **Add RSS feed**: Astro has an official RSS integration
- **Add analytics**: Vercel Analytics or Plausible

---

## Commands Reference

| Command           | Action                                   |
|-------------------|------------------------------------------|
| `npm run dev`     | Start local dev server (port 4321)       |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview production build locally         |
| `vercel`          | Deploy to preview URL                    |
| `vercel --prod`   | Deploy to production                     |

---

## Troubleshooting

**Build fails on Vercel?**
- Check `npm run build` locally first
- Common issue: frontmatter formatting errors in markdown

**Posts not showing up?**
- Verify frontmatter has required fields (title, description, pubDate)
- Check file is in `src/content/blog/` with `.md` extension
- Restart dev server after adding new posts

**Domain not working?**
- DNS propagation can take up to 48 hours (usually faster)
- Verify records with `dig yourdomain.com` or online DNS checker

---

## Notes for Claude Code

When working with Claude Code on this project:

- Blog posts go in `src/content/blog/`
- Frontmatter schema is defined in `src/content/config.ts`
- Keep the default theme until at least 3 posts are published
- If adding features, prefer Astro integrations over custom code
- Don't over-engineer—this is a blog, not a product

---

## First Post Checklist

- [ ] Astro project initialized
- [ ] Pushed to GitHub
- [ ] Connected to Vercel
- [ ] Custom domain configured
- [ ] Site loads at custom domain
- [ ] `the-mask.md` added to `src/content/blog/`
- [ ] Post visible at `yourdomain.com/blog/the-mask`
- [ ] Read it one more time, then stop editing
- [ ] Share it somewhere (LinkedIn, Twitter, wherever)
