'use client'

import React, { useState } from 'react'
import { FaMinus,FaWhatsapp,FaFacebook,FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter, FaPlus } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';

export default function ProductDetails() {

  var [qnt, setqnt] = useState(1);

  let qntPlus = () =>{
    qnt++
    setqnt(prevQty => prevQty + 1);
  }

  let qntMinus = () =>{
    qnt--
    setqnt(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
  }

  return (
    <>
      <section>
        <div className='w-[80%] max-w-screen-xl border-2 border-red-500 mx-auto my-5'>
          <div className='grid lg:grid-cols-2 gap-4'>
            <div className='border-2 border-green-500'>
              {/* <div>
                <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8.jpg" alt="" />
              </div> */}
            </div>
            <div className='border-2 border-green-500'>
              <h3 className='text-[35px] text-[#161922]'>Quisque lorem tortor</h3>
              <p className='text-[30px] py-4'>$9.00</p>
              <p className='text-[13px] lg:text-[15px] text-[#626262]'>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula porta urna.</p>

              <div className="grid grid-cols-[30%,auto] sm:grid-cols-[20%,auto] gap-4 items-center my-8">
                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-6">Occasion:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-6'>Casual</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-6">Fit Type:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-6'>Regular</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-6">Style:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-6'>Elegant</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-6">Material:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-6'>Polyester</div>

              </div>   

              <div className='border-2 border-green-500 text-center'>
                  <div className="border-2 py-4 border-red-500">
                      <button onClick={qntMinus}><FaMinus /></button>
                      <span className='mx-2 p-3 font-bold shadow-inner border'>{qnt}</span>
                      <button onClick={qntPlus}><FaPlus /></button>
                      <button className="bg-black text-white font-bold py-3 px-4 hover:bg-opacity-80 transition-opacity duration-300 mx-4">
                      Add to Cart
                      </button>
                      <button className="hidden sm:inline bg-black text-white font-bold py-3 px-8 hover:bg-opacity-80 transition-opacity duration-300">
                      Buy Now
                      </button>
                  </div>
                  <div>
                      <button className="sm:hidden bg-black text-white font-bold py-3 px-16 hover:bg-opacity-80 transition-opacity duration-300">
                      Buy Now
                      </button>
                  </div>
              </div>    

              <div className="py-6 flex items-center">
                <span className='text-[13px] lg:text-[15px] text-[#626262] me-4 font-bold'>Share:</span>
                <button className='me-3 text-lg'><Link href={'#'}><FaInstagram/></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaWhatsapp/></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaFacebook/></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaSquareXTwitter/></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaLinkedinIn/></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><SiGmail/></Link></button>     
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}
