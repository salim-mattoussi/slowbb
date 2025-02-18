import Image from "next/image"
import {assets} from '@/Assets/Assets'
import Link from "next/link"
import { useRouter } from "next/navigation"


const Header = () => {

    const router = useRouter()
  
  return (
   <div className="py-5 px-5 md:px-12 lg:px-28">
    <div className="flex justify-between items-center">      
        <Image src={assets.logo}  width={120} height={50} alt="logo" className="sm:w-auto "/>
        
        <button onClick={()=>{router.push("/contact")}}  className="border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman ">Contact Us </button>
        
        
    </div>
    <div className="text-center my-20">
        <h1 className="text-3xl sm:text-5xl font-medium font-goldman">Latest Projects</h1>
        <p className="mt-10 max-w-[500px] m-auto text-[15px] sm:text-bas font-goldman">This is the main blog where you can find my projects and tutorials in HTML, CSS, JS, and Block Design. All open source and totally free.</p>
        <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border-2 border-solid rounded-md border-black  " action="">
            <input type="email" placeholder="Enter your Email to subscribe" className="pl-4 outline-none w-[500px] "  />
            <button type="submit" className=" border-l-2 border-solid border-black py-4 px-4 sm:px-8  hover:bg-gray-900 hover:text-white cursor-pointer font-goldman">Subscribe</button>
        </form>
    </div>
   </div>
  )
}

export default Header