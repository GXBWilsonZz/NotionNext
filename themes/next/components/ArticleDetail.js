import BLOG from '@/blog.config'
import BlogAround from './BlogAround'
import Comment from '@/components/Comment'
import RecommendPosts from './RecommendPosts'
import ShareBar from './ShareBar'
import TagItem from './TagItem'
import formatDate from '@/lib/formatDate'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ArticleCopyright from './ArticleCopyright'
import WordCount from './WordCount'
import NotionPage from '@/components/NotionPage'
import CONFIG_NEXT from '../config_next'
import NotionIcon from '@/components/NotionIcon'

/**
 *
 * @param {*} param0
 * @returns
 */
export default function ArticleDetail(props) {
  const { post, recommendPosts, prev, next, showArticleInfo } = props
  const url = BLOG.LINK + useRouter().asPath
  const { locale } = useGlobal()
  const date = formatDate(post?.date?.start_date || post?.createdTime, locale.LOCALE)

  return (
      <div id="container"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"

            //下面这里删掉了原有的w-screen
            className="shadow md:hover:shadow-2xl overflow-x-auto  flex-grow mx-auto  md:w-full">
            <div itemScope itemType="https://schema.org/Movie"
                className="subpixel-antialiased py-10 px-5 pt-2 md:px-6  dark:border-gray-700 bg-white dark:bg-hexo-black-gray"
            >

                {showArticleInfo && <header className='animate__slideInDown animate__animated'>
                    {/* meta */}
                    {/* 下面这里加whitespace-nowrap是为了防止文本中含有的空格导致强行换行 */}
                    <section className=" whitespace-nowrap overflow-x-auto space-x-2 -mx-1 my-2 text-gray-500 dark:text-gray-400 font-light font-serif leading-7 text-sm">
                        <div className='flex flex-nowrap justify-left'>
                            {post?.type !== 'Page' && (<>
                                <Link
                                    href={`/archive#${post?.date?.start_date?.substr(0, 7)}`}
                                    passHref
                                    legacyBehavior>
                                    <div className="pl-1 mr-1 cursor-pointer hover:text-blue-600 dark:hover:text-gray-200 border-b dark:border-gray-500 border-none">
                                        {/* <i className='far fa-calendar mr-1' /> {date} */}
                                        {'POSTED: ' + date}
                                    </div>
                                </Link>
                                {/* <span className='mr-2'> | <i className='far fa-calendar-check mr-2' />{post.lastEditedTime} </span> */}
                                <span className='mr-1'> / {'UPDATED: ' + post.lastEditedTime} </span>
                                
                                {/* 分类 */}
                                {post.category && <>
                                        <Link href={`/category/${post.category}`} passHref legacyBehavior>
                                            <div className="mr-1 cursor-pointer my-auto text-md  hover:text-blue-600 dark:hover:text-white border-b dark:text-gray-500 border-none">
                                                {/* <><i className="far fa-folder-open" /> {post.category}</> */}
                                                <> / {post.category}</>
                                            </div>
                                        </Link>
                                </>}
                                
                                <div className="hidden busuanzi_container_page_pv font-light mr-3">
                                    <span className='mr-1'>/</span>
                                    <i className='mr-1 fas fa-eye' /> 
                                    <span className="busuanzi_value_page_pv" />
                                </div>

                            </>)}


                        </div>
                        


                        {/* <WordCount /> */}
                    </section>

                    {/* 头图 */}
                    {CONFIG_NEXT.POST_HEADER_IMAGE_VISIBLE && post?.type && !post?.type !== 'Page' && post?.page_cover && (
                        <div className="w-full relative md:flex-shrink-0 overflow-visible">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={post.title} src={post?.page_cover} className='object-center w-full' />
                        </div>
                    )}

                    {/* title */}
                    <div className=" text-left font-bold text-3xl text-black dark:text-white font-serif pt-3
                    ">
                        <NotionIcon icon={post.pageIcon} />{post.title}
                    </div>

                </header>}

                {/* Notion内容主体 */}
                <article id='notion-article' className='px-0 -my-2'>
                    {post && (<NotionPage post={post} />)}
                </article>

                <section className="px-1 py-2 my-1 text-sm font-light overflow-auto text-gray-600  dark:text-gray-400">
                    {/* 文章内嵌广告 */}
                    <ins className="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-adtest="on"
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        data-ad-client="ca-pub-2708419466378217"
                        data-ad-slot="3806269138" />
                </section>

                {showArticleInfo && <>
                    {/* 版权声明 */}
                    {post.type === 'Post' && <ArticleCopyright author={BLOG.AUTHOR} url={url} />}

                    {/* 推荐文章 */}
                    {post.type === 'Post' && <RecommendPosts currentPost={post} recommendPosts={recommendPosts} />}

                    <section>
                        {/* 分类 */}
                        {/* {post.category && <>
                            <div className="cursor-pointer my-auto text-md mr-2 hover:text-black dark:hover:text-white border-b dark:text-gray-500 border-dashed">
                                <Link href={`/category/${post.category}`} passHref legacyBehavior>
                                    <><i className="mr-1 far fa-folder-open" /> {post.category}</>
                                </Link>
                            </div>

                        </>} */}

                        {/* 标签列表 */}
                        {post.type === 'Post' && (
                            <>
                                {post.tagItems && (
                                    <div className="flex flex-nowrap leading-8 p-1 py-4 overflow-x-auto">
                                        {/* <div className="mr-1 mt-0.5 hidden md:block dark:text-gray-300 whitespace-nowrap"> */}
                                            {/* {locale.COMMON.TAGS}： */}
                                            {/* {'#'}  */}
                                        {/* </div>  */}
                                        {post.tagItems.map(tag => (
                                            <TagItem key={tag.name} tag={tag} />
                                        ))}
                                    </div>
                                )}
                                <ShareBar post={post} />
                            </>
                        )}
                    </section>
                    {post.type === 'Post' && <BlogAround prev={prev} next={next} />}
                </>}

                {/* 评论互动 */}
                <div className="duration-200 w-full dark:border-gray-700 bg-white dark:bg-hexo-black-gray">
                    {post.type === 'Post' &&<Comment frontMatter={post} />}
                </div>
            </div>

        </div>
  );
}
