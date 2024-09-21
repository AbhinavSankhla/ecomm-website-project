import React from 'react'

export default function Details() {
  return (
    <>
      <section>
        <div className='flex flex-wrap gap-2 border-2 border-green-500 mb-10 mt-28 w-[85%] max-w-screen-xl mx-auto'>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(50%-0.5rem)] border-2 border-red-500 text-[#161922]'>
                <p className='font-light text-[13px] lg:text-[15px]'>Our address</p>
                <p className='text-[21px] md:text-[26px] lg:text-[30px] py-4'>Level 13, 2 Elizabeth St,
                Melbourne, Victoria 3000,
                Australia</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] border-2 border-blue-500 text-[#161922] text-center'>
                <p className='font-light text-[13px] lg:text-[15px]'>Monday - Friday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>8 AM — 10 PM</p>
                <p className='font-light text-[13px] lg:text-[15px]'>Monday - Friday</p>
                <p className='text-[14px] lg:text-[19px] py-4'>8 AM — 10 PM</p>
            </div>
            <div className='flex-1 min-w-[100%] md:min-w-[calc(25%-0.5rem)] border-2 border-red-500 text-[#161922] justify-center text-center'>
                <p className='text-[14px] lg:text-[19px]'>Do you have any questions?</p>
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