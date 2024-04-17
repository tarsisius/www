import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '404.html',
    }),
    prerender: {
      concurrency: 1,
      crawl: true,
    },
    paths: {
      //only if using github pages and custom domain
      //if using custom domain leave empty
      //if using github.io second empty string should be the repo name
      base: process.argv.includes('dev') ? '' : '',
    },
  },
}

export default config
