import { DELIMITER, type Meta } from '$lib/const'

export default async function (slug?: string): Promise<Meta[]> {
  const files = import.meta.glob('$lib/posts/*/post.md', {
    eager: true,
    import: 'default',
    query: 'raw',
  })

  let meta: Meta[] = []
  for (const [path, file] of Object.entries(files)) {
    const metaData = (file as string).split(DELIMITER)[0]

    const url = path.split('/')
    const slug = url[url.length - 2]

    const published = metaData.match(/^published: (.*)/m)
    const updated = metaData.match(/^updated: (.*)/m)

    const title = slug
      .replace(/\b\w/g, (match) => match.toUpperCase())
      .replaceAll('-', ' ')

    const publishedDate = published![1].split('/')[0].replaceAll('-', '/')
    const publishedTime = published![1].split('/')[1]

    const updatedDate = updated![1].split('/')[0].replaceAll('-', '/')
    const updatedTime = updated![1].split('/')[1]

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

  if (slug) {
    return meta.filter((meta) => meta.slug === slug)
  }

  return meta.sort((a, b) => {
    return (
      new Date(b.published.date + ' ' + b.published.time).getTime() -
      new Date(a.published.date + ' ' + a.published.time).getTime()
    )
  })
}
