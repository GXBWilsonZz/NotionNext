import React from 'react'
import TagItem from './TagItem'
/**
 * 横向的标签列表
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const TagList = ({ tags, currentTag }) => {
  if (!tags) {
    return <></>
  }
  return <ul className='flex px-1 py-4 space-x-3'>
    <li className='text-sm text-gray-500 font-serif py-2 dark:text-gray-200 whitespace-nowrap'>#TAGS</li>
    {tags.map(tag => {
      const selected = tag.name === currentTag
      return <TagItem key={tag.name} tag={tag} selected={selected}/>
    })}
  </ul>
}

export default TagList
