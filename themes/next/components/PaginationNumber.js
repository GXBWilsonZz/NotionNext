import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 数字翻页插件
 * @param page 当前页码
 * @param showNext 是否有下一页
 * @returns {JSX.Element}
 * @constructor
 */
const PaginationNumber = ({ page, totalPage }) => {
  const router = useRouter()
  const currentPage = +page
  const showNext = page !== totalPage
  const pagePrefix = router.asPath.replace(/\/page\/[1-9]\d*/, '').replace(/\/$/, '')
  const pages = generatePages(pagePrefix, page, currentPage, totalPage)

  return (
    <div
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        // className="my-4 mx-4 w-full flex justify-center items-end font-medium text-black hover:shadow-xl duration-500 bg-white dark:bg-hexo-black-gray dark:text-gray-300 py-3 shadow space-x-2">
        className="my-4 mx-4 w-full flex justify-center items-end font-medium text-black duration-500 bg-none dark:bg-none dark:text-gray-300 py-3 space-x-2">
        {/* 上一页 */}
        <Link
          href={{
            pathname:
                  currentPage - 1 === 1
                    ? `${pagePrefix}/`
                    : `${pagePrefix}/page/${currentPage - 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          passHref
          legacyBehavior>
            <div
                rel="prev"
                className={`${currentPage === 1 ? 'invisible' : 'block'
                    } border-none dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400 w-6 text-center py-2 cursor-pointer duration-200  hover:font-bold`}
            >
                <i className="fas fa-angle-left" />
            </div>
        </Link>

        {pages}

        {/* 下一页 */}
        <Link
          href={{
            pathname: `${pagePrefix}/page/${currentPage + 1}`,
            query: router.query.s ? { s: router.query.s } : {}
          }}
          passHref
          legacyBehavior>
            <div
                rel="next"
                className={`${+showNext ? 'block' : 'invisible'
                    } border-none dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400 w-6 text-center py-2 cursor-pointer duration-500  hover:font-bold`}
            >
                <i className="fas fa-angle-right" />
            </div>
        </Link>
    </div>
  );
}

function getPageElement(pagePrefix, page, currentPage) {
  return (
    (<Link
      href={page === 1 ? `${pagePrefix}/` : `${pagePrefix}/page/${page}`}
      key={page}
      passHref
      className={
          (page + '' === currentPage + ''
            ? 'font-bold bg-blue-600 dark:bg-gray-400 text-white '
            : 'bg-white duration-500 border-none hover:border-gray-400 ') +
          'shadow rounded-md font-serif border-white dark:border-gray-700 dark:hover:border-gray-400 cursor-pointer px-4 py-2 text-center text-base font-normal hover:font-bold'
      }>

      {page}

    </Link>)
  );
}
function generatePages(pagePrefix, page, currentPage, totalPage) {
  const pages = []
  const groupCount = 7 // 最多显示页签数
  if (totalPage <= groupCount) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(getPageElement(pagePrefix, i, page))
    }
  } else {
    pages.push(getPageElement(pagePrefix, 1, page))
    const dynamicGroupCount = groupCount - 2
    let startPage = currentPage - 2
    if (startPage <= 1) {
      startPage = 2
    }
    if (startPage + dynamicGroupCount > totalPage) {
      startPage = totalPage - dynamicGroupCount
    }
    if (startPage > 2) {
      pages.push(<div key={-1}>... </div>)
    }

    for (let i = 0; i < dynamicGroupCount; i++) {
      if (startPage + i < totalPage) {
        pages.push(getPageElement(pagePrefix, startPage + i, page))
      }
    }

    if (startPage + dynamicGroupCount < totalPage) {
      pages.push(<div key={-2}>... </div>)
    }

    pages.push(getPageElement(pagePrefix, totalPage, page))
  }
  return pages
}
export default PaginationNumber
