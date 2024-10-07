import React from 'react'
// import { FaPhone } from "react-icons/fa";
// import { MdOutlineAttachEmail } from "react-icons/md";


export default function HeroSection({title}) {
    return (
    <>
    <div>
        <div className="min-h-[64vh] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')"}}>
                <h2 className='text-[60px] absolute top-[28%] left-[11%] font-light'>{title}</h2>
        </div>
    </div>
    </>
  )
}
