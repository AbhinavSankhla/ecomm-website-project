'use client'

import React, { useState } from 'react'
import { FaWhatsapp, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
import { PiHandbagFill } from "react-icons/pi";
import { BsHandbagFill } from "react-icons/bs"

import { useContext } from 'react';
import { myContext } from '../../../context/CartContext';

export default function ProductDetails() {

  // const {addToCart} = useContext(myContext);
  // Define the image URLs
  const images = [
    'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28219632/2024/3/12/2f53aaab-40e1-4c5b-8148-6ad150e5f4341710256687634CampusSutraMenClassicOpaqueCheckedCasualShirt2.jpg',

    'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28219632/2024/3/12/4fc84572-cad2-4b42-9a39-006351e9db651710256687610CampusSutraMenClassicOpaqueCheckedCasualShirt1.jpg',

    'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28219632/2024/3/12/c7a70b3a-e915-4313-a3d3-b632d0121c691710256687658CampusSutraMenClassicOpaqueCheckedCasualShirt3.jpg',

    'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28219632/2024/3/12/9da6c838-2e37-451c-91ee-619d95be9a2b1710256687563CampusSutraMenClassicOpaqueCheckedCasualShirt4.jpg',
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // State for the current image and selected size
  const [selectedSize, setSelectedSize] = useState("");

  // State to hold the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <>
      <section>
        <div className='w-[85%] max-w-screen-xl mx-auto py-5 mt-6'>
          <div className='grid lg:grid-cols-2 gap-2'>
            <div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
              
                <div
                  className="w-[270px] lg:w-[360px] sm:w-1/2 h-[410px] md:h-[550px] lg:h-[480px] bg-cover bg-center border border-gray-300 hover:scale-105 overflow-hidden duration-500 ease-in-out bg-black"
                  style={{ backgroundImage: `url(${currentImage})` }}
                >
                </div>
          
                <div className="flex justify-center gap-2 sm:flex-col w-full sm:w-1/4 bg-white">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center border border-gray-300 rounded cursor-pointer ${currentImage === image ? 'ring-2 ring-gray-300' : ''}`}
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={() => setCurrentImage(image)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="py-10 flex items-center justify-center">
                <span className='text-[13px] lg:text-[15px] text-[#626262] me-4 font-bold'>Share:</span>
                <button className='me-3 text-lg'><Link href={'#'}><FaInstagram /></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaWhatsapp /></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaFacebook /></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaSquareXTwitter /></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><FaLinkedinIn /></Link></button>
                <button className='me-3 text-lg'><Link href={'#'}><SiGmail /></Link></button>
              </div>
            </div>
            <div>
              <h3 className='text-[35px] text-[#161922]'>Allen Soly</h3>
              <p className='text-[13px] lg:text-[20px] font-light text-[#626262]'>Classic color casual shirt for men</p>
              <div className='flex items-center justify-start pt-4'>
                <p className="text-[22px] pe-1">Rs. 799</p>
                <p className='text-[20px] font-light px-2 line-through text-[#161922]'>Rs.1599</p>
                <p className='text-[20px] text-red-500 font-light'>(50% off)</p>

              </div>
              <div className="grid grid-cols-[30%,auto] sm:grid-cols-[20%,auto] gap-4 items-center my-6">
                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Occasion:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>Casual</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Fit Type:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>Regular</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Color:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>Brown</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Material:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>Polyester</div>
              </div>

              <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold pb-4">Select Size:</div>
              <div className='text-[13px] lg:text-[15px] text-[#626262] pb-4'>
                <div className="flex gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border cursor-pointer ${selectedSize === size
                          ? 'bg-[#2d2d2d] text-white'
                          : 'bg-gray-100 text-gray-800'
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="pt-2 text-sm text-gray-500">Selected Size: {selectedSize}</p>
                )}
              </div>

              <div className=''>
                <div className="py-4 flex">
                  <button className="bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 mx-4 flex items-center font-medium">
                  <PiHandbagFill className='me-2'/>
                  <span>ADD TO BAG</span>
                  </button>
                  <button className=" bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 font-medium">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
