import path from 'path'

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
  html?: string
}

export type MarkdownFiles = {
  [slug: string]: string
}

export const DELIMITER = '@@@'

export const FS_CONTENT_PATH = path.resolve('posts')
