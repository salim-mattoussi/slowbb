import Image from 'next/image'
import React from 'react'
import {assets ,blog_data} from '@/Assets/Assets'
import Link from 'next/link'

const Hero = ({title,description,category,image,id}) => {
  return (
    <div className='max-w-[380px]  sm:max-w-[320px] bg-white border rounded-md border-black hover:scale-105'>
      <Link href={`/blogs/${id}`}>
        <Image className='max-h-[200px]' src={image} alt='' width={400} height={400} />
      </Link>  
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm '>{category}</p>
        
        <div className="p-5">
           <h5 className='mb-2 text-lg font-medium tracking-tight font-goldman text-gray-900'>{title}</h5>
           <p className='mb-3 text-sm tracking-tight text-gray-750 font-goldman'>{description}</p> 
           <Link href={`/blogs/${id}`} className='inline-flex  items-center py-2 font-goldman font-semibold text-center '>
                Read more <Image src={assets.goIcon} alt='' width={20} height={20} className='rotate-180 ml-4'/>
            </Link>
        </div>
    </div>
  )
}

export default Hero