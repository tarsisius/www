import { basename, extname } from 'node:path'
import type { Meta } from '$lib/markdowns/type'

export default async function (
  fileName: string,
  source: string
): Promise<Meta> {
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
