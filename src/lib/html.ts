import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { DELIMITER } from '$lib/const'

export default async function (slug: string): Promise<string> {
  const files = import.meta.glob('$lib/posts/*/post.md', {
    eager: true,
    import: 'default',
    query: 'raw',
  })

  const html: string[] = []
  for (const [path, file] of Object.entries(files)) {
    const url = path.split('/')
    if (url[url.length - 2] === slug) {
      html.push(
        (
          await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeSanitize)
            .use(rehypeStringify)
            .process((file as string).split(DELIMITER)[1])
        ).toString()
      )
    }
  }

  return html[0]
}
