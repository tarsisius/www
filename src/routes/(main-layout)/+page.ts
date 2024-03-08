import type { PageLoad } from "./$types"
import { getAllMeta } from "$lib/extract"

export const load: PageLoad = () => {
  return {
    meta: getAllMeta(),
  }
}
