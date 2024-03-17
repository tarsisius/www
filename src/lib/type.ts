export interface Meta {
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

export interface MarkdownFiles {
  [slug: string]: string
}
