"use client";
import { assets } from "@/Assets/Assets";
import SideBar from "@/Components/adminComponents/SideBar";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}){
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
      };
    return (
        <>
        <div className="flex">
            <ToastContainer theme="dark"/>
            <SideBar/>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-6 max-h-[70px] px-12 border-b-2 border-black">
                    <h3 className="font-goldman ">Admin Side</h3>
                    <div className="flex items-center gap-4">
                    <button onClick={handleLogout} className="mt-2 border-2 border-black rounded-lg h-[50px] w-[120px] flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer sm:h-[50px] sm:w-[150px] font-goldman ">Logout</button>
                    <Image src={assets.user} alt="" width={40}/>
                    </div>
                </div>
                {children}
            </div>
        </div>
          
        </>
    )
}