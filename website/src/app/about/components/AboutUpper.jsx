import React from 'react'

export default function AboutUpper() {
  return (
    <>
      <section>
        <div className='w-[85%] max-w-screen-xl mx-auto'>
            <h2 className='text-[#161922] pt-16 md:w-[65%] text-[39px] sm:text-[49px] lg:text-[65px]'>Mauris maximus velit commodo varius ligula consequat vel.</h2>
            <p className='text-[#161922] text-[13px] lg:text-[15px] pb-4'>LONDON, UK</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
                <div className='border-2 border-blue-500'>
                    <div className='border-2 border-red-500'>
                        <p className='text-[14px] md:text-[16px] lg:text-[19px] text-[#161922]'>Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus sit amet, mattis porta enim.</p>
                        <p className='text-[13px] lg:text-[15px] py-3 text-[#626262]'>Duis fermentum faucibus est, sed vehicula velit sodales vitae. Mauris mollis lobortis turpis, eget accumsan ante aliquam quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a orci fermentum ultricies. Mauris maximus velit commodo, varius ligula vel, consequat est.</p>
                    </div>
                    <div>
                        <h2 className='text-[20px] py-4 sm:text-[23px] md:text-[26px] lg:text-[30px] text-[#161922]'>Aliquam fringill</h2>
                        <p className='text-[14px] md:text-[16px] lg:text-[19px] text-[#161922]'>Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium</p>
                        <p className='text-[13px] lg:text-[15px] py-3 text-[#626262]'>Auctor sapien. In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula rhoncus dui.</p>
                    </div>
                </div>
                <div className='col-span-2 border-2 border-red-500 flex justify-center'>
                    <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic1.jpg" className='md:h-[80%] lg:h-full' alt="" />
                </div>
            </div>
        </div>    
      </section>
    </>
  )
}
