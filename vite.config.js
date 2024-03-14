import { sveltekit } from '@sveltejs/kit/vite'

import { visualizer } from 'rollup-plugin-visualizer'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    visualizer({ emitFile: true, filename: 'stats.html' }),
  ],
  ssr: {
    noExternal: ['three'],
  },
}
export default config
