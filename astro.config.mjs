// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://chaosbit.dev',
	integrations: [sitemap()],
	// Astro 7 defaults to 'jsx', which drops whitespace between inline elements
	// (e.g. `<span>$</span> whoami`). Keep the pre-7 rules.
	compressHTML: true,
});
