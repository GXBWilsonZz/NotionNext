import BLOG from '@/blog.config'
import { useGlobal } from '@/lib/global'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from './Card'
import TagItemMini from './TagItemMini'
import CONFIG_NEXT from '../config_next'
import NotionPage from '@/components/NotionPage'
import NotionIcon from '@/components/NotionIcon'

const BlogPostCard = ({ post, showSummary }) => {
  const { locale } = useGlobal()
  const showPreview = CONFIG_NEXT.POST_LIST_PREVIEW && post.blockMap
  return (
    <Card className="w-full">
      <div
        key={post.id}
        className="flex flex-col-reverse justify-between duration-300"
      >
        <div className="lg:px-4 pt-1 p-4 flex flex-col w-full ">
          <Link
            href={`${BLOG.SUB_PATH}/${post.slug}`}
            passHref
            className={`cursor-pointer hover:none font-serif font-bold text-[28px] ${showPreview ? 'text-center' : ''
              } leading-tight text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400`}>

            <NotionIcon icon={post.pageIcon} /> {post.title}

          </Link>

          <div
            className={`flex mt-1.5 items-center ${showPreview ? 'justify-center' : 'justify-start'
              } flex-wrap dark:text-gray-500 text-gray-500 `}
          >
            <div>
              <>
                <Link
                  href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                  passHref
                  className="font-light font-serif hover:hover:text-blue-600 dark:hover:text-blue-400  cursor-pointer text-sm leading-4">

                  {post.date?.start_date}

                </Link>
                
              </>
              {post.category && (
                <>
                  <span className="mx-2">·</span>
                  <Link
                    href={`/category/${post.category}`}
                    passHref
                    className="cursor-pointer font-light font-serif text-sm hover:text-blue-600 dark:hover:text-blue-400  mr-3  transform">

                    <i className="mr-0" /> 
                    
                    {post.category}

                  </Link>

                </>
              )}

            </div>
            <div className="font-serif md:flex-nowrap flex-wrap md:justify-start inline-block">
              <div>
                {' '}
                {post.tagItems.map(tag => (
                  <TagItemMini key={tag.name} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          {(!showPreview || showSummary)&& post.summary && !post.results && (
            //这里加入&&post.summary 是为了在没有preview内容时不占用额外空间
            <p className="mt-6 mb-6 text-gray-600 dark:text-gray-300 font-sans text-[15px] font-light leading-7">
              {post.summary}
            </p>
          )}

          {/* 搜索结果 */}
          {post.results && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm font-light leading-7">
              {post.results.map(r => (
                <span key={r}>{r}</span>
              ))}
            </p>
          )}

          {showPreview && post?.blockMap && (
            <div className="overflow-ellipsis truncate">
              <NotionPage post={post} />
            </div>
          )}

          <div className="text-left border-t pt-4 border-none text-[12px] font-sans">
            <Link
              href={`${BLOG.SUB_PATH}/${post.slug}`}
              className="hover:bg-opacity-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 transform duration-300 py-1.5 px-2.5 font-serif font-light text-gray-700 bg-gray-100 cursor-pointer">

              {locale.COMMON.ARTICLE_DETAIL}


            </Link>
          </div>
        </div>

        {CONFIG_NEXT.POST_LIST_COVER && post?.page_cover && (
          <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
            <div className="h-72 w-full relative duration-200 cursor-pointer transform overflow-hidden">
              <Image
                className="hover:scale-105 transform duration-500"
                src={post?.page_cover}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </Link>
        )}
      </div>
    </Card>
  );
}

export default BlogPostCard
