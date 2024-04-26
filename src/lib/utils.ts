import { basename, extname } from 'node:path'
import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import type { Meta } from '$lib/type'

export async function matter(fileName: string, source: string): Promise<Meta> {
  const lines = source.split('\n')
  const meta = {
    published: new Date(),
    updated: new Date(),
    title: 'Untitled',
    slug: basename(fileName, extname(fileName)),
  }

  for (const line of lines) {
    const [key, value] = line.trim().split(': ')
    switch (key) {
      case 'published':
      case 'updated':
        meta[key] = new Date(value)
        break
      case 'title':
        meta.title = value
        break
    }
  }
  return meta
}

export async function getHtml(module: string) {
  const rawContent = module.split('@@@')[2].trim()
  return (
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(rawContent)
  ).toString()
}
