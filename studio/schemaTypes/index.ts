import author from './author'
import blockContent from './blockContent'
import category from './category'
import course from './course'
import event from './event'
import homepage from './homepage'
import post from './post'
import speaker from './speaker'

export const schemaTypes = [
  // Document types
  homepage,
  post,
  event,
  author,
  speaker,
  category,
  course,
  // Object types
  blockContent,
]
