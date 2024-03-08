import { unified } from "unified"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"

export type Meta = {
  title: string
  slug: string
  published: {
    date: string
    time: string
  }
  updated: {
    date: string
    time: string
  }
}

const DELIMITER = "@@@"

export function getAllMeta(): Meta[] {
  const meta: Meta[] = []

  const files = import.meta.glob("/content/*/post.md", {
    eager: true,
    import: "default",
    query: "raw",
  })

  for (const [path, file] of Object.entries(files)) {
    const metaData = (file as string).split(DELIMITER)[0]

    const publishedMatch = metaData.match(/^published: (.*)/m)
    const updatedMatch = metaData.match(/^updated: (.*)/m)

    meta.push({
      title: metaData.match(/^title: (.*)/m)?.[1]!,
      slug: path.split("/")[2],
      published: {
        date: publishedMatch![1].split("/")[0].replaceAll("-", "/"),
        time: publishedMatch![1].split("/")[1],
      },
      updated: {
        date: updatedMatch![1].split("/")[0].replaceAll("-", "/"),
        time: updatedMatch![1].split("/")[1],
      },
    })
  }

  return meta
}

export function getMetaBySlug(slug: string): Meta {
  return getAllMeta().find((meta) => meta.slug === slug)!
}

export async function getContentBySlug(slug: string): Promise<string> {
  const content: string[] = []

  const files = import.meta.glob("/content/*/post.md", {
    eager: true,
    import: "default",
    query: "raw",
  })

  for (const [path, file] of Object.entries(files)) {
    const contentData = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process((file as string).split(DELIMITER)[1])
    path.split("/")[2] === slug && content.push(contentData.toString())
  }

  return content[0]
}
