import type { BaseToolContext } from './base-tool-context'

export interface DocInfo {
  title: string
  content: string
  url?: string
}

export interface DocContext extends BaseToolContext {
  allowSearchSiteUrls: string[]
  relevantDocs: DocInfo[]
}
