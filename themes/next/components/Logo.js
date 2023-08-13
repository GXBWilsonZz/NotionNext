import Link from 'next/link'
import React from 'react'

const Logo = props => {
  const { siteInfo, className } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div className={'flex flex-row justify-center items-center cursor-pointer dark:bg-gray-800  font-bold ' + className}>
        {/*<div className='font-serif text-xl text-white'> {siteInfo?.title}</div>
        <div className='text-sm text-gray-300 font-light text-center'> {siteInfo?.description}</div>*/}
        <img src={"/icon_nav.png"} className='rounded-md' width={50}/>
        
        {/*<div className='mx-3 font-sans text-[24px] text-white'> {"Home"}</div>*/}
      </div>
    </Link>
  );
}
export default Logo
