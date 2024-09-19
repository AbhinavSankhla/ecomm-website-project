'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Header from '../common/Header';
import Navbar from '../common/Navbar';
function HeroSection() {
    
    const [sliders, setSliders] = useState([
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic1-1.jpg'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic5.jpg'
        }
    ]);
    return (
        <>
            <div>
                <div style={{ backgroundImage: `url('${sliders[0].bg}')` }} className="min-h-[100vh] bg-cover bg-no-repeat bg-center">
                    <div className="w-full md:w-[80%] mx-auto max-w-screen-xl">
                        <div className='max-w-screen-xl mx-auto hidden md:inline text-md text-white py-4 md:flex items-center gap-5 *:flex *:items-center *:justify-center *:gap-1'>
                            <div>Help Desk 24/7</div>
                            <div><FaPhone /> +61 (0) 383 766 284</div>
                            <div><MdOutlineAttachEmail /> noreply@envato.com</div>
                        </div>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection