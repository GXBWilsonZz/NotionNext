import BLOG from '@/blog.config'
import Router from 'next/router'
import React from 'react'
import SocialButton from './SocialButton'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <>
    <div className='flex flex-col items-center justify-center '>
        <div className='transform duration-200 cursor-pointer' onClick={ () => { Router.push('/') }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={siteInfo?.icon} className='rounded-full' width={120} alt={BLOG.AUTHOR}/>
        </div>
        <div className='text-2xl font-serif dark:text-white py-2 transform duration-200'>{BLOG.AUTHOR}</div>
        <div className='font-light font-serif text-sm text-gray-600 dark:text-white pb-4 transform duration-200 text-center'>{BLOG.BIO}</div>
        <SocialButton/>
    </div>
  </>
}

export default InfoCard
