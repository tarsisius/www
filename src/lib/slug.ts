import fs from 'node:fs/promises'
import path from 'node:path'

import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { DELIMITER, FS_CONTENT_PATH } from '$lib/const'

export default async function (slug: string) {
  const file = await fs.readFile(
    path.join(FS_CONTENT_PATH, slug, 'post.md'),
    'utf-8'
  )
  const metaData = (file as string).split(DELIMITER)[0]
  const published = metaData.match(/^published: (.*)/m)
  const updated = metaData.match(/^updated: (.*)/m)

  const title = slug
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .replaceAll('-', ' ')

  const publishedDate = published![1].split('/')[0]
  const publishedTime = published![1].split('/')[1]

  const updatedDate = updated![1].split('/')[0]
  const updatedTime = updated![1].split('/')[1]

  const htmlData = (file as string).split(DELIMITER)[1]

  const html = (
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(htmlData)
  ).toString()

  return [
    {
      title,
      slug: slug,
      published: {
        date: publishedDate,
        time: publishedTime,
      },
      updated: {
        date: updatedDate,
        time: updatedTime,
      },
      html,
    },
  ]
}
