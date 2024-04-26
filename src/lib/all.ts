import { join } from 'node:path'
import { createReadStream } from 'node:fs'
import readline from 'node:readline'
import { matter } from '$lib/utils'
import type { Meta } from '$lib/type'

export default async function (): Promise<Meta[]> {
  const modules = import.meta.glob('$lib/@contents/*.md', {
    query: 'raw',
    import: 'default',
  })

  const meta: Meta[] = []
  const rawFrontmatter: Record<string, [number, string]> = {}

  for (const path in modules) {
    const _stream = createReadStream(join(process.cwd(), path))
    const _readLine = readline.createInterface({ input: _stream })

    rawFrontmatter[path] = [0, '']

    for await (const line of _readLine) {
      rawFrontmatter[path][1] += `${line}\n`

      if (line === '@@@') {
        rawFrontmatter[path][0] += 1
      }

      if (rawFrontmatter[path][0] === 2) {
        _readLine.close()
        _stream.close()
      }
    }

    meta.push(await matter(path, rawFrontmatter[path][1]))
  }

  meta.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime()
  })
  return meta
}
