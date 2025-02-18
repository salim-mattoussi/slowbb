'use client'
import React, {  useState } from 'react'
import emailjs from"@emailjs/browser"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/Footer'
 const Page = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  


    const sendEmail = (e) => {
        e.preventDefault();
        
        const templateParams={
            from_name:name,
            from_email:email,
            to_name:"mattoussi salim",
            message:message,
        }
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then((result) => {
          toast.success("thank you for your message")
          console.log("seccess",result.text);
          setName('');
          setEmail('');
          setMessage('');
        }).catch ((error) => {
          console.log("faild",error.text);
        });
      
      }
  return (
    <>
    <ToastContainer theme="dark"/>
    <div className="flex justify-center items-center min-h-screen flex-col mx-6">
        <h1 className='font-goldman text-3xl my-8'> Contact page </h1>
        <div className="relative h-[50rem] sm:h-[50rem] w-[25rem] sm:w-[40rem] border border-black">
            <form   onSubmit={sendEmail} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
            <p className='mt-6 font-goldman text-xl'>Name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
            <p className='mt-6 font-goldman text-xl'>Email</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
            <p className='mt-6 font-goldman text-xl'>message</p>
            <textarea  value={message} onChange={(e)=>setMessage(e.target.value)}  rows={10} type="text" placeholder='Type here' required className='w-[250px] sm:w-[500px] mt-4 px-4 py-3 border-black border outline-none' />
            <button type='submit' className="mt-6 border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-gray-900 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman ">Send</button>

            </form>
        </div>
    </div>

    <Footer/>
    </>
    
  )
}
export default Page