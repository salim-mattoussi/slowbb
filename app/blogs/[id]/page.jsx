'use client'
import { assets, blog_data } from '@/Assets/Assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    //to unwrap the promis in this params / in this version the params are promis so we need that to unwrap it 
    const param = React.use(params)
     const [data, setData] = useState(0)
     //console.log(blog_data);
     
        const fetchBlogData = async()=>{
            const unwrappedParams = await params;
        const response = await axios.get('/api/blog',{
            params:{
                id:unwrappedParams.id
            }
        })
        setData(response.data);
        }
    
        
    useEffect(()=>{
            fetchBlogData();
    },[])
   
    
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href={'/'}>
            <Image src={assets.logo} alt='' width={120} className='w-[130px] sm:w-auto'/>
            </Link>
            <button className="border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman ">Contact Us </button>
        </div>
        <div className="text-center my-32 font-goldman  ">
           <h1 className='text-2xl sm:text-5xl max-w-[700px] mx-auto '>{data.title}</h1>
        </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 font-goldman">
        <Image src={data.image} width={1280} height={720} alt='' className='border-solid border-2 border-black rounded-md' />
        <h1 className='my-8 text-[26px] font-goldman'> Description :</h1>
        <p>{data.description}</p>
        <div className='py-5 '>{data.fullDescription}</div>
        <div className='flex justify-between flex-col gap-2 sm:gap-0 sm:flex-row items-center py-5'>
            <p className='my-4'>To take a look to demo visit this link :  </p>
            <div className='flex gap-1'>
                <a href={data.projectLink}>

                <Image src={assets.githubIcon} alt='' width={40} />
                </a>
               

            </div>
        </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page













// The [id] folder in the blogs folder is a dynamic route in Next.js.
//  Dynamic routes allow you to create pages that are based on dynamic
//  parameters. In this case, [id] is a placeholder for any blog ID, 
// and the page.jsx file inside it will render the content for that 
// specific blog ID.