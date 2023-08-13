import Link from 'next/link'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function BlogAround ({ prev, next }) {
  if (!prev || !next) {
    return <></>
  }
  return (
    <section className=' flex flex-wrap justify-between text-gray-800 border-tdark:text-gray-300 py-2 '>
      {prev && <Link
        href={`/${prev.slug}`}
        passHref
        className='mr-auto flex flex-row items-center text-sm py-1 text-gray-600 dark:text-white font-serif hover:text-blue-600 cursor-pointer'>

        <i className='mr-2 fa fa-chevron-left' /> <>{prev.title}</>
        

      </Link>}
      {next && <Link
        href={`/${next.slug}`}
        passHref
        className='ml-auto flex flex-row items-center text-sm py-1 text-gray-600 dark:text-white font-serif hover:text-blue-600 cursor-pointer'>
        {next.title} <i className='ml-2 fa fa-chevron-right' />
        

      </Link>}
    </section>
  );
}
