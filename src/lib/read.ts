import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

import matter from '$lib/matter'

export default async function (slug: string) {
  return await import(`$lib/_posts/${slug}.md?raw`).then(
    async (m) => {
      const module = m['default']
      const rawContent = module.split('@@@')[2].trim()
      const html = (
        await unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeSanitize)
          .use(rehypeStringify)
          .process(rawContent)
      ).toString()

      return {
        meta: await matter(slug, module),
        html,
      }
    }
  )
}
