import type { BaseToolContext } from './base-tool-context'

export interface WebSearchResult {
  url: string
  title: string
  content: string
}

export interface WebContext extends BaseToolContext {
  webSearchResults: WebSearchResult[]
}
