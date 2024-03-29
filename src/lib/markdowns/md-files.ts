import { glob } from 'glob'

const globCacheByPath = new Map() // Cache for glob results

export default async function () {
  const cacheKey = `${process.cwd}.content}`

  if (!globCacheByPath.has(cacheKey)) {
    globCacheByPath.set(
      cacheKey,
      glob('**/*.md', { root: process.cwd(), cwd: 'content' })
    )
  }
  return globCacheByPath.get(cacheKey)
}
