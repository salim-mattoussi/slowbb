'use client'
import { assets } from '@/Assets/Assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title :"",
    description:"",
    fullDescription:"",
    category : "Components",
    projectLink:""
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({
      ...data,[name]:value
    }));
    console.log(data);

  }
   const onSubmitHandler = async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('title',data.title);
      formData.append('description',data.description);
      formData.append('fullDescription',data.fullDescription);
      formData.append('category',data.category);
      formData.append('image',image);
      formData.append('projectLink',data.projectLink);
    const response = await axios.post('/api/blog',formData)
    if(response.data.success){
      toast.success(response.data.msg)
      console.log("add blog with toast ");
      setImage(false);
      setData({
        title :"",
        description:"",
        fullDescription:"",
        category : "Components",
        projectLink:""
      })
      
    }else{
      toast.error("error")
    }
   }

  return (
   <>
   <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
    <p className='text-xl font-goldman'>Upload thumbnail</p>
    <label htmlFor="image">
      <Image className='mt-4 cursor-pointer' alt='' src={!image?assets.uploadimg:URL.createObjectURL(image)} width={140} height={70}/>
    </label>
    <input onChange={(e)=> setImage(e.target.files[0])} type="file" id='image' hidden required />
    <p className='mt-6 font-goldman text-xl'>Blog title</p>
    <input name='title' onChange={onChangeHandler} value={data.title} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
    <p className='mt-6 font-goldman text-xl'>Blog description</p>
    <input name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
    <p className='mt-6 font-goldman text-xl'>Blog full-description</p>
    <textarea name='fullDescription' onChange={onChangeHandler} value={data.fullDescription} type="text" placeholder='Type here' required rows={6} className='w-[250px]  sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
    <p className='mt-6 font-goldman text-xl'>Blog link</p>
    <input name='projectLink' onChange={onChangeHandler} value={data.projectLink} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />

    <p className='mt-6 font-goldman text-xl'>Blog category</p>
    <select className='mt-4 outline-none py-4 border border-black w-[250px] sm:w-[500px] font-goldman' name="category" onChange={onChangeHandler} value={data.category} >
      <option value="Components">Components</option>
      <option value="Trics">Trics</option>
      <option value="3D & others">3D & others</option>
    </select>
    
    <button type='submit' className="mt-6 border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman ">ADD  </button>

   </form>
   </>
    )
}

export default page