import { error } from '@sveltejs/kit'
import generateData from '$lib/markdowns/data'
import generateHtml from '$lib/markdowns/parse'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const meta = await generateData().then(
    (data) => data.filter((item) => item.slug === params.slug)[0]
  )
  if (meta) {
    return {
      meta,
      html: await generateHtml(meta.slug),
    }
  } else {
    error(404, 'Not Found')
  }
}
