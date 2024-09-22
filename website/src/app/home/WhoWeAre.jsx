import React from 'react'

export default function WhoWeAre() {
  return (
    <>
      <section>
        <div className= "bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-sectionbg1.jpg')"}}>
          <div className='text-center pt-[80px] text-[65px] font-thin tracking-normal text-gray-900'>
            <h2>Who we are</h2>
          </div>
          <div className='w-[85%] mx-auto text-center grid items-center
          xl:w-[70%] md:grid-cols-2 mt-10 pb-20'>
            <div className='h-full'>
              <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-columnbg1.jpg" alt="" className='w-full h-full'/>
            </div>
            <div className='bg-white'>
              <div className='mx-auto text-center w-[90%] my-10'>
                <h2 className='mb-2 font-medium text-[18px] sm:text-[23px] md:text-[26px] lg:text-[30px]'>Our story</h2>
                <p className='text-[13px] md:text-[16px] lg:text-[19px]'>Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum eleifend erat at justo fringilla imperdiet id ac magna ac magna.</p>
                <br/>
                <p className='text-[13px] md:text-[16px] lg:text-[19px]'>Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna eu, molestie tortor lorem eget egestas.</p>
                <br />
                <button className="bg-black text-white font-bold py-3 px-5 hover:opacity-75 transition-opacity duration-300 text-[13px] md:text-[16px] lg:text-[19px]">
                    See all products
                </button>
              </div>
            </div>            
          </div>
        </div>  
      </section>
    </>
  )
}
