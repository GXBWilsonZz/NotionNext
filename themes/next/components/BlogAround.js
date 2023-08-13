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
    <section className='text-gray-800 border-t dark:text-gray-300 flex flex-wrap  py-2 lg:flex-nowrap lg:space-x-10 '>
      {prev && <Link
        href={`/${prev.slug}`}
        passHref
        className='justify-start text-sm py-3 text-gray-600 font-serif hover:text-blue-600 cursor-pointer'>

        <i className='mr-1 fa fa-chevron-left' />{prev.title}

      </Link>}
      {next && <Link
        href={`/${next.slug}`}
        passHref
        className='justify-end text-sm flex py-3 text-gray-600 font-serif hover:text-blue-600 cursor-pointer'>
        {next.title}
        <i className='ml-1 my-1 fa fa-chevron-right' />

      </Link>}
    </section>
  );
}
