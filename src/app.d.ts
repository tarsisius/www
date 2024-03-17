declare global {
  namespace App {}

  interface Meta {
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

  interface MarkdownFiles {
    [slug: string]: string
  }
}

export {}
