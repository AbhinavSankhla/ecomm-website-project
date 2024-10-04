import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Header from './Header';
import Navbar from './Navbar';

export default function HeroSection({title}) {
    return (
    <>
    <div>
        <div className="min-h-[64vh] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')"}}>
            <div className="w-full max-w-screen-xl">
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
