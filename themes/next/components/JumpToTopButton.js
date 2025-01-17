import { useGlobal } from '@/lib/global'
import React from 'react'
import CONFIG_NEXT from '../config_next'

/**
 * 跳转到网页顶部
 * 当屏幕下滑500像素后会出现该控件
 * @param targetRef 关联高度的目标html标签
 * @param showPercent 是否显示百分比
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = ({ showPercent = true, percent }) => {
  if (!CONFIG_NEXT.WIDGET_TO_TOP) {
    return <></>
  }
  const { locale } = useGlobal()
  return (<div className='flex space-x-1 rounded-md bg-gray-100 items-center transform hover:scale-105 duration-200 py-2 px-4 dark:bg-gray-700' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <div className='dark:text-gray-200' title={locale.POST.TOP} >
          <i className='fa fa-chevron-up' />
        </div>
        {showPercent && (<div className='text-xs dark:text-gray-200 block lg:hidden'>{percent}%</div>)}
    </div>)
}

export default JumpToTopButton
