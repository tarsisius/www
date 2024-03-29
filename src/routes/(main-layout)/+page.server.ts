import type { PageServerLoad } from './$types'
import generateData from '$lib/markdowns/data'

export const load: PageServerLoad = async () => {
  const meta = await generateData()
  return {
    meta,
  }
}
