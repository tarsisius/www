import { join } from 'node:path'
import { createReadStream } from 'node:fs'
import readline from 'node:readline'
import type { Meta } from '$lib/markdowns/type'
import files from '$lib/markdowns/md-files'
import matter from '$lib/markdowns/simple-matter'

const contentPath = join(process.cwd(), 'content')

export default async function (): Promise<Meta[]> {
  const fileNames = (await files()) as string[]

  return new Promise(async (resolve) => {
    const meta: Meta[] = []
    const rawFrontmatter: Record<string, [number, string]> = {}

    await Promise.all(
      fileNames.map(async (fileName) => {
        const _stream = createReadStream(join(contentPath, fileName))
        const _readLine = readline.createInterface({ input: _stream })

        rawFrontmatter[fileName] = [0, '']

        for await (const line of _readLine) {
          rawFrontmatter[fileName][1] += `${line}\n`

          if (line === '@@@') {
            rawFrontmatter[fileName][0] += 1
          }

          if (rawFrontmatter[fileName][0] === 2) {
            _readLine.close()
            _stream.close()
          }
        }

        const data = await matter(fileName, rawFrontmatter[fileName][1])
        meta.push(data)

        if (meta.length === fileNames.length) {
          resolve(
            meta.sort((a, b) => {
              return (
                new Date(b.published).getTime() -
                new Date(a.published).getTime()
              )
            })
          )
        }
      })
    )
  })
}
