import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG_NEXT from '../config_next'

export default function ArticleCopyright ({ author, url }) {
  if (!CONFIG_NEXT.ARTICLE_COPYRIGHT) {
    return <></>
  }
  const { locale } = useGlobal()
  return (
    <section className="dark:text-gray-300 mt-6">
      <ul className="overflow-x-auto whitespace-nowrap text-sm dark:bg-gray-700 bg-gray-100 p-5 leading-8 border-none border-blue-500 rounded-md">
        <li>
          <strong className='mr-2 font-serif'>{locale.COMMON.AUTHOR}:</strong>
          <Link href={'/about'} className="font-serif hover:text-blue-600">
            {author}
          </Link>
        </li>
        <li>
        <strong className='mr-2 font-serif'>{locale.COMMON.URL}:</strong>
          <a className="font-serif hover:text-blue-600" href={url}>
            {url}
          </a>
        </li>
        <li>
          <strong className='mr-2 font-serif'>{locale.COMMON.COPYRIGHT}:</strong>
          <a className='font-serif'>
          {locale.COMMON.COPYRIGHT_NOTICE}
          </a>
        </li>
      </ul>
    </section>
  );
}
