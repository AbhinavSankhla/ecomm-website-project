import Link from 'next/link'
import React from 'react'

export default function AboutLower() {
  return (
    <>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[85%] max-w-screen-xl mx-auto mt-20'>
          <div>
            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic3.jpg" alt="" className='w-[90%] mx-auto'/>
            <p className='text-[13px] lg:text-[15px] pt-6 text-[#161922] border-2 border-blue-500'>PROIN RISUS ERAT</p>
            <h2 className='text-[#030305] text-[20px] py-4 sm:text-[23px] md:text-[26px] lg:text-[30px]'>Fringilla vel purus sit amet, mattis porta enim</h2>
            <p className='text-[#161922] text-[14px] md:text-[16px] lg:text-[19px]'>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim. Duis fermentum faucibus est, sed vehicula velit sodales vitae.</p>
            <p className='text-[#626262] text-[13px] lg:text-[15px] py-3'>Duis fermentum faucibus est, sed vehicula velit sodales vitae. Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est accumsan ante aliquam quis.</p>
            <div className='border-2 border-red-500'>
              <Link href="/contact"><button className="bg-black text-white font-bold py-3 px-10 hover:opacity-80 transition-opacity duration-300 ">
              Contact with us
              </button></Link>
            </div>
          </div>
          
          <div className='border border-red-400'>
            <p className='text-[#161922] text-[13px] lg:text-[15px]'>FUSCE UT VELIT LAOREET</p>
            <h2 className='text-[#161922] text-[20px] py-4 sm:text-[23px] md:text-[26px] lg:text-[30px]'>Nam vel justo cursus faucibus lorem tortor eget</h2>
            <p className='text-[#161922] text-[14px] md:text-[16px] lg:text-[19px]'>Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis odio, at ornare nibh. In malesuada, tortor eget</p>
            <p className='text-[#626262] text-[13px] lg:text-[15px] pt-3 pb-6'>Sodales mollis, mauris lectus hendrerit purus, porttitor finibus eros lorem eget mauris. Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum.</p>
            <div className=''>
            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic2.jpg" alt="" className='h-[60%] mx-auto'/>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
