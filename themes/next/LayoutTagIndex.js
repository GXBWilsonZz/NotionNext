import { useGlobal } from '@/lib/global'
import LayoutBase from './LayoutBase'
import TagItem from './components/TagItem'

export const LayoutTagIndex = (props) => {
  const { tags } = props
  const { locale } = useGlobal()
  return <LayoutBase {...props}>
    <div className='bg-white dark:bg-hexo-black-gray px-10 py-10 shadow h-full'>
      <div className='font-serif text-sm text-gray-400 font-normal'>{'TAGS'}</div>
      <div id='tags-list' className='duration-200 flex flex-wrap space-x-2'>
        { tags.map(tag => {
          return <div key={tag.name} className='-mx-2 p-2'><TagItem key={tag.name} tag={tag} /></div>
        }) }
      </div>
    </div>
  </LayoutBase>
}
