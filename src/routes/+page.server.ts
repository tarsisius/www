import { getAllMeta } from "$lib/extract"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = () => {
  const meta = getAllMeta()
  return {
    meta,
  }
}
