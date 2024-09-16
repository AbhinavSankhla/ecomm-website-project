import React from 'react'

export default function Facilities() {
  return (
    <>
      <section className='border-2 border-red-500'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-28 mx-auto text-center w-[85%] border-2 border-blue-800'>
            <div className='w-[85%] mx-auto my-10 border-2 border-green-500'>
                <div className='mx-auto flex justify-center border-2 border-blue-500 mb-6 w-[50px]'>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon1.png" alt="" className='w-full h-full'/>
                </div>
                <p className='border-2 border-red-500 mb-4 text-[19px]'>Always free shipping</p>
                <p className=''>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </div>
            <div className='w-[85%] mx-auto my-10 border-2 border-green-500'>
                <div className='mx-auto flex justify-center border-2 border-blue-500 mb-6 w-[50px]'>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon2.png" alt="" className='w-full h-full'/>
                </div>
                <p className='border-2 border-red-500 mb-4 text-[19px]'>14 days return policy</p>
                <p className=''>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </div>
            <div className='w-[85%] mx-auto my-10 border-2 border-green-500'>
                <div className='mx-auto flex justify-center border-2 border-blue-500 mb-6 w-[50px]'>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon3.png" alt="" className='w-full h-full'/>
                </div>
                <p className='border-2 border-red-500 mb-4 text-[19px]'>Quick delivery in 48h</p>
                <p className=''>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </div>
            <div className='w-[85%] mx-auto my-10 border-2 border-green-500'>
                <div className='mx-auto flex justify-center border-2 border-blue-500 mb-6 w-[50px]'>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon4.png" alt="" className='w-full h-full'/>
                </div>
                <p className='border-2 border-red-500 mb-4 text-[19px]'>Online payment</p>
                <p className=''>Lorem ipsum dolor sit amet mauris dolor bibendum sapien</p>
            </div> 
        </div>
      </section>
    </>
  )
}
