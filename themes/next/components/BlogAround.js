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
    <section className='whitespace-nowrap text-gray-800 border-t flex flex-wrap justify-between dark:text-gray-300 py-2 '>
      {prev && <Link
        href={`/${prev.slug}`}
        passHref
        className='justify-start text-sm py-3 text-gray-600 font-serif hover:text-blue-600 cursor-pointer'>

        <i className='mr-1 fa fa-chevron-left' />{prev.title}

      </Link>}
      {next && <Link
        href={`/${next.slug}`}
        passHref
        className='justify-end text-sm py-3 text-gray-600 font-serif hover:text-blue-600 cursor-pointer'>
        {next.title}
        <i className='ml-1 my-1 fa fa-chevron-right' />

      </Link>}
    </section>
  );
}
