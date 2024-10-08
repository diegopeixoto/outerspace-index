import type { TopicItemProps } from './layout'

export type TopicAPIResponse = {
  length: number
  topics: TopicItemProps[]
  page: number
  pageSize: number
}
export type TopicType = {
  regular: TopicItemProps[]
  pinned: TopicItemProps[]
}
