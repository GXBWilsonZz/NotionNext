import React from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <div
          className="font-serif max-w-max bg-blue-600 text-white p-2 py-1 ml-5  rounded-md text-sm dark:text-gray-300 font-normal"
          id={archiveTitle}
        >
          {archiveTitle}
        </div>
        <ul>
          {posts.map(post => (
            <li
              key={post.id}
              className="ml-9 border-l-2 p-1 pt-2 pb-4 text-xs md:text-base items-center   dark:border-gray-400 transform duration-500"
            >
              <div className='flex space-x-3.5'>
                <div class="bg-gray-300 rounded-full h-3 w-3 mt-1 -ml-2.5 "></div>
                <div id={post?.date?.start_date}>
                  <span className="font-serif text-gray-400">{post.date?.start_date}</span>{' '}
                  &nbsp;
                </div>
              </div>
              <Link
                    href={`${BLOG.SUB_PATH}/${post.slug}`}
                    passHref
                    className="flex font-serif ml-4 dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:text-blue-600 cursor-pointer">

                    {post.title}

              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlogPostArchive
