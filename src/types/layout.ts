export type CategoryProps = {
  title: string
  description: string
}

export type TopBarProps = {
  title?: string
  isPinned?: boolean
  isOpen?: boolean
  setIsOpen?: (visible: boolean) => void
}

export type AvatarProps = {
  src: string
}

export interface LikeButtonProps extends LikeProps {
  isPinned: boolean
  handleLike: HandleLikeProps
  topicId: string
}

export type LikeProps = {
  topicId: string
  count: number
  liked: boolean
  isPinned: boolean
  handleLike: HandleLikeProps
}

export type HandleLikeProps = (
  topicId: string,
  isPinned: boolean,
  action: string
) => void

export type TopicProps = {
  title: string
  url: string
}
export type AuthorProps = {
  name: string
  authorUrl: string
  avatar: AvatarProps
}
export type TopicInfoProps = {
  topic: TopicProps
  author: AuthorProps
  likes: LikeProps
}

export type TopicItemProps = {
  id: string
  isPinned: boolean
  topicInfo: TopicInfoProps
}

export type ForumProps = {
  title?: string
  topbar?: TopBarProps
  topicList: TopicItemProps[]
}

export enum PinnedStatus {
  IS_PINNED = 'Tópico Oficial',
  NOT_PINNED = 'Tópico Regular',
}
