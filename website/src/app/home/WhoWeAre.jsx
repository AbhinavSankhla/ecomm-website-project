import React from 'react'

export default function WhoWeAre({about_heading, about_para1, about_para2, about_img}) {
  return (
    <>
      <section className=''>
        <div className= "bg-cover bg-no-repeat bg-top bg-fixed" style={{ backgroundImage: "url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-sectionbg1.jpg')"}}>
          <div className='text-center pt-[80px] text-[65px] tracking-normal text-gray-900'>
            <h2 className='font-light'>{about_heading}</h2>
          </div>
          <div className='w-[85%] mx-auto text-center grid items-center
          xl:w-[70%] md:grid-cols-2 mt-10 pb-20'>
            <div className='h-full'>
              <img src={about_img} alt="image" className='w-full h-full'/>
            </div>
            <div className='bg-white'>
              <div className='mx-auto text-center w-[90%] my-16'>
                <h2 className='mb-3 text-[18px] sm:text-[23px] md:text-[26px] lg:text-[30px] text-[#161922]'>Our story</h2>
                <p className='text-[13px] md:text-[16px] lg:text-[19px] text-[#161922] font-light'>{about_para1}</p>
                <br/>
                <p className='text-[13px] md:text-[16px] lg:text-[15px] text-[#626262] pb-1'>{about_para2}</p>
                <br />
                  <button className="bg-black text-white py-2 px-12 hover:opacity-75 transition-opacity duration-300 text-[13px] font-semibold md:text-[15px]">
                    Learn more
                  </button>
              </div>
            </div>            
          </div>
        </div>  
      </section>
    </>
  )
}