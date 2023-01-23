import Link from 'next/link'
import React from 'react'
import { useGlobal } from '@/lib/global'

const CategoryList = ({ currentCategory, categories }) => {
  if (!categories) {
    return <></>
  }
  const { locale } = useGlobal()

  return (
    <ul className='flex px-1 py-4 space-x-1'>
      <li className='font-serif py-2 text-sm text-gray-400 dark:text-gray-200 whitespace-nowrap'>{'Categories  /'}</li>
      {categories.map(category => {
        const selected = category.name === currentCategory
        return (
          <Link
            key={category.name}
            href={`/category/${category.name}`}
            passHref
            legacyBehavior>
            <li
              className={`cursor-pointer  rounded-xl duration-200 mr-1 px-2 py-2 font-light text-sm whitespace-nowrap dark:text-gray-300 
                   ${selected
                  ? 'font-serif font-bold text-blue-600  dark:hover:bg-gray-900 dark:bg-gray-500 dark:border-gray-800'
                  : 'font-serif text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-600 dark:border-gray-600'
                }`}
            >
              <a>
              <i className={`${selected ? 'fa-folder-open ' : 'fa-folder '} fas mr-1`}/>
                {`${category.name} (${category.count})`}
              </a>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default CategoryList
