import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export default function Details() {
  return (
    <>
      <section>
        <div className='flex flex-wrap gap-2 mb-10 mt-28 w-[85%] max-w-screen-xl mx-auto'>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(50%-0.5rem)] text-[#161922]'>
                <p className='font-light text-[13px] lg:text-[18px]'>Our address</p>
                <p className='text-[21px] md:text-[26px] lg:text-[30px] py-4'>Level 13, 2 Elizabeth St,
                Melbourne, Victoria 3000,
                Australia</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] text-[#161922] text-center'>
                <p className='font-light text-[13px] lg:text-[15px]'>Monday - Friday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>8 AM — 10 PM</p>
                <p className='font-light text-[13px] lg:text-[15px]'>Saturaday - Sunday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>8 AM — 12 PM</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] text-[#161922] justify-center text-center'>
                <p className='text-[14px] lg:text-[19px] text-[#161922]'>Do you have any questions?</p>
                <div className='flex items-center justify-center py-3'>
                  <div className='text-[16px]'><FaMobileAlt/></div>
                  <div className='text-[16px] ml-2 font-medium'>+91 98971 0000X</div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='text-[16px]'><FaEnvelope/></div>
                  <div className='text-[16px] ml-2 font-medium text-[#161922]'>tony@drdoom.com</div>
                </div>
            </div>
        </div>
        <div className='w-[85%] mx-auto max-w-screen-xl my-28'>
            <div className='flex justify-center'>
                <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-contact-pic1.jpg" alt="" />
            </div>
        </div>
      </section>
    </>
  )
}