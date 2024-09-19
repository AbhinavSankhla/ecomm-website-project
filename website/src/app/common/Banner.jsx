import React from 'react'

export default function Banner() {
  return (
    <>
        <section>
            <div className='mx-auto items-center text-center my-[100px] grid grid-cols-1 md:grid-cols-3 w-[85%] max-w-screen-xl bg-orange-200'>
                <div className=''>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg1.jpg" alt="" className='w-full h-full'/>
                </div>
                <div className='items-center py-20 md:py-0'>
                    <p className='uppercase text-[23px] lg:text-[36px]'>GET 20% OFF</p>
                    <p className='py-5 text-[12px] lg:text-[15px]'>Fusce dolor velit laoreet</p>
                    <button className="bg-black text-white font-bold py-3 px-10 hover:opacity-80 transition-opacity duration-300 text-[12px] lg:text-[15px]">
                    Learn more
                    </button>
                </div>
                <div className=''>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg2.jpg" alt="" className='w-full h-full'/>
                </div>
            </div>
        </section>
    </>
  )
}
