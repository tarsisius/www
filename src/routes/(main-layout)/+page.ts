import type { PageLoad } from './$types'
import meta from '$lib/meta'

export const load: PageLoad = async () => {
  return {
    meta: await meta(),
  }
}
