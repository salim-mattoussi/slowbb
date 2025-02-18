import { assets } from '@/Assets/Assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className="px-2 sm:pl-14 py-3 border border-black">
            <Image src={assets.logo} width={120} alt=''/>
        </div>
        <div className="w-36 sm:w-80 h-[100vh] relative py-12 border border-black">
            <Link href='/admin/addProject' className="flex items-center border border-black gap-3 font-goldman px-3 py-2 bg-white mb-[20px] ">
                <Image src={assets.addIcon} alt='' width={28}/><p> Add New Project</p>
            </Link>
            <Link href='/admin/listBlog' className="flex items-center border border-black gap-3 font-goldman px-3 py-2 bg-white mb-[20px]">
                <Image src={assets.list} alt='' width={28}/><p> Blog List </p>
            </Link>
            <Link href='/admin/subscribe' className="flex items-center border border-black gap-3 font-goldman px-3 py-2 bg-white mb-[20px]">
                <Image src={assets.gmailIcon} alt='' width={28}/><p> Subscribe </p>
            </Link>
        </div>
    </div>
  )
}

export default SideBar