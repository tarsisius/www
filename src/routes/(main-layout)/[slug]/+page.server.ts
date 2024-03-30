import { error } from '@sveltejs/kit'
import read from '$lib/read'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const data = await read(params.slug)
  if (data) {
    return { read: data }
  } else {
    error(404, 'Not Found')
  }
}
