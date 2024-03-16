import type { PageServerLoad } from './$types'
import getData from '$lib/data'

export const load: PageServerLoad = async () => {
  return {
    posts: await getData(),
  }
}
