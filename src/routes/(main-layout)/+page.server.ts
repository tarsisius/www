import type { PageServerLoad } from './$types'
import meta from '$lib/all'

export const load: PageServerLoad = async () => {
  const data = await meta()
  return { meta: data }
}
