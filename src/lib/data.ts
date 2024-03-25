import fs from 'node:fs/promises'
import path from 'node:path'
import type { MarkdownFiles, Meta } from '$lib/type'
import { DELIMITER, FS_CONTENT_PATH } from '$lib/const'
import getBySlug from '$lib/slug'

export default async function (slug?: string): Promise<Meta[]> {
  if (slug) {
    return await getBySlug(slug)
  }

  const queue = [path.resolve(FS_CONTENT_PATH)]
  const markdownFiles: MarkdownFiles = {}

  while (queue.length > 0) {
    const currentDir = queue.shift() as string
    const entries = await fs.readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        queue.push(fullPath)
      } else if (entry.isFile() && entry.name.match('post.md')) {
        const content = await fs.readFile(fullPath, 'utf-8')
        const pathParts = path.dirname(fullPath).split(path.sep)
        markdownFiles[pathParts[pathParts.length - 1]] = content
      }
    }
  }

  const meta: Meta[] = []

  for (const [slug, file] of Object.entries(markdownFiles)) {
    const metaData = (file as string).split(DELIMITER)[0]
    const published = metaData.match(/^published: (.*)/m)
    const updated = metaData.match(/^updated: (.*)/m)

    const title = slug
      .replace(/\b\w/g, (match) => match.toUpperCase())
      .replaceAll('-', ' ')

    const publishedDate = published![1].split('/')[0]
    const publishedTime = published![1].split('/')[1]

    const updatedDate = updated ? updated[1].split('/')[0] : ''
    const updatedTime = updated ? updated[1].split('/')[1] : ''

    meta.push({
      title,
      slug,
      published: {
        date: publishedDate,
        time: publishedTime,
      },
      updated: {
        date: updatedDate,
        time: updatedTime,
      },
    })
  }

  return meta.sort((a, b) => {
    return (
      new Date(b.published.date + ' ' + b.published.time).getTime() -
      new Date(a.published.date + ' ' + a.published.time).getTime()
    )
  })
}
