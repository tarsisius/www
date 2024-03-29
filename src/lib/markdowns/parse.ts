import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { join } from 'node:path'
import { createReadStream } from 'node:fs'
import readline from 'node:readline'

const contentPath = join(process.cwd(), 'content')

export default async function (slug: string): Promise<string> {
  return new Promise((resolve) => {
    const fileName = `${slug}.md`

    const _stream = createReadStream(join(contentPath, fileName))
    const _readLine = readline.createInterface({ input: _stream })
    const rawContent: string[] = []

    _readLine.on('line', (line) => {
      rawContent.push(line)
    })

    _readLine.on('close', async () => {
      rawContent.splice(0, 5)

      resolve(
        (
          await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeSanitize)
            .use(rehypeStringify)
            .process(rawContent.join('\n'))
        ).toString()
      )
    })
  })
}
