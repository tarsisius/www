import { error } from "@sveltejs/kit"
import { getContentBySlug, getMetaBySlug } from "$lib/extract"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
  const meta = getMetaBySlug(params.slug)
  if (meta) {
    const content = await getContentBySlug(params.slug)
    return {
      post: {
        meta,
        content,
      },
    }
  } else {
    error(404, "Not Found")
  }
}
