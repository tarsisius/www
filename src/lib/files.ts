import fs from 'fs/promises'
import path from 'path'
import type { MarkdownFiles } from '$lib/const'

export default async function (
  dir: string,
  queue: string[],
  markdownFiles: MarkdownFiles
) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      queue.push(fullPath)
    } else if (entry.isFile() && entry.name.match('post.md')) {
      const pathParts = path.dirname(fullPath).split(path.sep)
      const content = await fs.readFile(fullPath, 'utf-8')

      markdownFiles[pathParts[pathParts.length - 1]] = content
    }
  }
}
