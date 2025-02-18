import { assets } from '@/Assets/Assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-white border-t-2 border-black items-center py-5'>
       <Link href={'/'}>
        <Image src={assets.logo} alt='' width={120} height={100} className='cursor-pointer'/>
        </Link>
        <p className='font-goldman  text-sm'>All right reserved . copyright @SlowB By Salim Mattoussi</p>
        <div className="flex gap-1 ">
          <a href='https://www.linkedin.com/in/mattoussi-salim-9237b1181/'>
            <Image src={assets.linkedinIcon} alt='' width={40} className='cursor-pointer'/>
          </a>
          <a href="https://github.com/salim-mattoussi">
            <Image src={assets.githubIcon} alt='' width={40} className='cursor-pointer'/>
          </a>
          <Link href={'/contact'}>
            <Image src={assets.gmailIcon} alt='' width={40} className='cursor-pointer'/>
          </Link>
        </div>
    </div>
  )
}

export default Footer