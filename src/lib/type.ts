export interface Meta {
  published: Date
  updated: Date
  title: string
  slug: string
}

export interface Read {
  meta: Meta
  html: string
}
