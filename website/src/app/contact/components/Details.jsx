import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaYoutube,  FaWhatsapp ,FaSquareXTwitter, FaInstagram} from "react-icons/fa6";

export default function Details({address, weekday_time, weekend_time, banner, whatsapp, email}) {
  return (
    <>
      <section>
        <div className='flex flex-wrap gap-2 mb-10 mt-28 w-[85%] max-w-screen-xl mx-auto'>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(50%-0.5rem)] text-[#161922]'>
                <p className='font-light text-[13px] lg:text-[18px]'>Our address</p>
                <p className='text-[21px] md:text-[26px] lg:text-[30px] py-4'>{address}</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] text-[#161922] text-center'>
                <p className='font-light text-[13px] lg:text-[15px]'>Monday - Friday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>{weekday_time}</p>
                <p className='font-light text-[13px] lg:text-[15px]'>Saturaday - Sunday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>{weekend_time}</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] text-[#161922] justify-center text-center'>
                <p className='text-[14px] lg:text-[19px] text-[#161922]'>Do you have any questions?</p>
                <div className='flex items-center justify-center py-3'>
                  <div className='text-[18px] pb-1'><FaWhatsapp/></div>
                  <div className='text-[16px] ml-2 font-medium'>{whatsapp}</div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='text-[18px]'><MdOutlineMailOutline/></div>
                  <div className='text-[16px] ml-2 font-medium text-[#161922]'>{email}</div>
                </div>
            </div>
        </div>
        <div className='w-[85%] mx-auto max-w-screen-xl my-28'>
            <div className='flex justify-center'>
                <img src={banner} alt="" />
            </div>
        </div>
      </section>
    </>
  )
}