import { useGlobal } from '@/lib/global'
import LayoutBase from './LayoutBase'
import Link from 'next/link'

export const LayoutCategoryIndex = (props) => {
  const { allPosts, categories } = props
  const { locale } = useGlobal()
  return (
    <LayoutBase totalPosts={allPosts} {...props}>
      <div className='bg-white dark:bg-hexo-black-gray px-10 py-5 shadow h-full'>
        <div className='-mx-2 font-medium text-gray-400 font-serif dark:text-gray-200 mb-3'>
          {'CATEGORIES'}
        </div>
        <div id='category-list' className='border-l border-gray-300
         duration-200 flex flex-col space-y-1'>
          {categories.map(category => {
            return (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                passHref
                legacyBehavior>
                <div
                  className={' flex justify-between hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
                    <div className='mt-1 font-serif font-medium'>
                      {category.name}
                    </div>
                    <div className='text-center font-serif rounded-md bg-gray-100 py-1 px-3'>
                      {category.count}
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </LayoutBase>
  );
}
