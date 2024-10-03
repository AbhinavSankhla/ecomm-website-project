import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Header from './Header';
import Navbar from './Navbar';

export default function HeroSection({title}) {
    return (
    <>
    <div className='border-2 border-red-500 '>
        <div className="min-h-[64vh] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')"}}>
            <div className="w-[80%] lg:w-[80%] mx-auto max-w-screen-xl">
                <div className='hidden lg:inline text-md text-white py-4 lg:flex items-center gap-5 *:flex *:items-center *:justify-center *:gap-1'>
                    <div>Help Desk 24/7</div>
                    <div><FaPhone /> +61 (0) 383 766 284</div>
                    <div><MdOutlineAttachEmail /> noreply@envato.com</div>
                </div>
                <Navbar/>
                <div className='pt-[60px] text-[56px]'>
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
