import { blog_data } from '@/Assets/Assets'
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import axios from 'axios'

const BlogList = () => {

  const [menu, setMenu] = useState('All')
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
    console.log(response.data.blogs);
    
  }

  useEffect(() => {
  fetchBlogs()   

  }, [])
  
  let itemFilter = () => {
    return blogs.filter((item)=> menu === 'All'? true: item.category===menu)
  }
  const filteredItems = itemFilter()
  // console.log(filteredItems);

  
  return (
    <div>
      {/* update the bg of the element open  */}
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=> setMenu('All')} className={menu === 'All' ?'bg-black text-white py-1 px-4 rounded-md':""}> All </button>
            <button onClick={()=> setMenu('Components')}  className={menu === 'Components' ?'bg-black text-white py-1 px-4 rounded-md':""} >Components</button>
            <button onClick={()=> setMenu('Trics')}  className={menu === 'Trics' ?'bg-black text-white py-1 px-4 rounded-md':""}>Trics</button>
            <button onClick={()=> setMenu('3D & other')}  className={menu === '3D & other' ?'bg-black text-white py-1 px-4 rounded-md':""}>3D & others</button>
        </div>
        {/* end here the bg  */}
        {/* filter  and maping the element in dom start here*/}
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
           {filteredItems.map((item,index)=>{
            return <Hero 
                    key={index}
                    id={item._id}
                    image={item.image}
                    title = {item.title}
                    description = {item.description}
                    category = {item.category}
            />
           })} 
        </div>
        {/* end here  */}
    </div>
  )
}

export default BlogList