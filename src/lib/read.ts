import { getHtml, matter } from '$lib/utils'

export default async function (slug: string) {
  const isPage = slug === 'contact' || slug === 'about'
  if (isPage)
    return await import(`$lib/@contents/pages/${slug}.md?raw`).then(
      async (m) => {
        const module = m['default']

        return {
          meta: await matter(slug, module),
          html: await getHtml(module),
        }
      }
    )
  return await import(`$lib/@contents/${slug}.md?raw`).then(async (m) => {
    const module = m['default']
    return {
      meta: await matter(slug, module),
      html: await getHtml(module),
    }
  })
}
