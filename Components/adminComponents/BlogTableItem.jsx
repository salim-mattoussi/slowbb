import { assets } from '@/Assets/Assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({title,date,deleteBlog,mongoId}) => {
    const blogDate = new Date(date)
  return (
  <tr className='bg-white border-b'>
    <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-goldman text-gray-900 whitespace-nowrap '>
        <Image src={assets.user} alt='' height={50} width={50}/> mattoussi salim

    </th>
    <td className='px-6 py-4'>
        {title?title:"no Title"}
    </td>
    <td className='px-6 py-4'>
        {blogDate.toDateString()}
    </td>
    <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer text-center'>
        x
    </td>
  </tr>
  )
}

export default BlogTableItem