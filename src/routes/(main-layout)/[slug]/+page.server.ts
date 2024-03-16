import { error } from '@sveltejs/kit'
import getData from '$lib/data'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const posts = await getData(params.slug)
  if (posts[0]) {
    return {
      post: posts[0],
    }
  } else {
    error(404, 'Not Found')
  }
}
