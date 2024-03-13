import { error } from '@sveltejs/kit'
import getMeta from '$lib/meta'
import getHtml from '$lib/html'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
  const meta = await getMeta(params.slug)
  if (meta[0]) {
    const html = await getHtml(params.slug)
    return {
      post: {
        meta: meta[0],
        html,
      },
    }
  } else {
    error(404, 'Not Found')
  }
}
