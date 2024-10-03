'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
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
                <div style={{ backgroundImage: `url('${sliders[0].bg}')` }} className="h-[100vh] bg-cover bg-no-repeat bg-center">
                </div>
            </div>
        </>
    )
}

export default HeroSection