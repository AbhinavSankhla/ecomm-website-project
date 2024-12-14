'use client'

import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
import { PiHandbagFill } from "react-icons/pi";
import { useContext } from 'react';
import { myContext } from '../../../context/CartContext';
import { useParams } from 'next/navigation';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

export default function ProductDetails() {

  // const {addToCart} = useContext(myContext);

  // State for the current image and selected size
  const [selectedSize, setSelectedSize] = useState("");

  // State to hold the currently displayed image
  const [currentImage, setCurrentImage] = useState('');
  const [activeTab, setActiveTab] = useState('tab1');

  //fetch single product data using param
  const params = useParams();
  const [productData, setproductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async(id) =>{
    try{
      const url = `http://localhost:5200/product/fetch_product_with_id/${id}`;
      const response = await axios.get(url)

    // Safely access the product data
      const product = response.data?.data;
      if (!product) {
        console.error("Product data is missing in the response");
        setLoading(false);
        return;
      }
      // Split the image string into an array and ensure proper URLs
      const imagesArray = product.images[0]
        ?.split(',')
        .map((img) => (img.startsWith("http") ? img : `http://localhost:5200/uploads/${img}`)) || [];

      setproductData([{ ...product, images: imagesArray }]); // Correctly update the product data
      setCurrentImage(imagesArray[0]); // Set the first image as default
      setLoading(false);

    }
    
    catch(error){
      // console.error("Error fetching product details:", error);
      alert('something went wrong')
      setLoading(false);
    }
  }

  useEffect(() => {
    if (params.product_id) {
      fetchProduct(params.product_id);
    }
  }, [params.product_id]);

  //loading skeleton
  if (loading || !productData) return <div>
    <section>
      <div className='w-[85%] max-w-screen-xl mx-auto py-5 mt-6'>
        <div className='grid lg:grid-cols-2 gap-2'>
          <div>
            {/* {
                  productData.map()
              } */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
              <div
                className="w-[270px] lg:w-[360px] sm:w-1/2 h-[410px] md:h-[550px] lg:h-[480px] bg-cover bg-center border border-gray-300 bg-gray-300"
              >
              </div>
              <div className="flex justify-center gap-2 sm:flex-col w-full sm:w-1/4 bg-white">
                <div className='thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center bg-gray-300 rounded cursor-pointer'></div>
                <div className='thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center bg-gray-300 rounded cursor-pointer'></div>
                <div className='thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center bg-gray-300 rounded cursor-pointer'></div>
                <div className='thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center bg-gray-300 rounded cursor-pointer'></div>
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
            <div className='w-[30%] h-8 bg-gray-300'></div>
            <div className='w-[50%] h-5 mt-5 bg-gray-300'></div>
            <div className='flex items-center justify-start pt-4'>
              <div className="w-14 h-6 bg-gray-300 pe-1"></div>
              <div className="w-14 h-6 bg-gray-300 px-2"></div>
              <div className="w-14 h-6 bg-gray-300"></div>
            </div>
            <div className="grid grid-cols-[30%,auto] sm:grid-cols-[20%,auto] gap-4 items-center my-6">
              <div className='w-[90%] h-4 bg-gray-300 mb-4'></div>
              <div className='w-[50%] h-4 bg-gray-300 mb-4'></div>

              <div className='w-[90%] h-4 bg-gray-300 mb-4'></div>
              <div className='w-[50%] h-4 bg-gray-300 mb-4'></div>

              <div className='w-[90%] h-4 bg-gray-300 mb-4'></div>
              <div className='w-[50%] h-4 bg-gray-300 mb-4'></div>

              <div className='w-[90%] h-4 bg-gray-300 mb-4'></div>
              <div className='w-[50%] h-4 bg-gray-300 mb-4'></div>
            </div>

            <div className='w-[90%] h-4 bg-gray-300 mb-4'></div>
            <div className="flex gap-4">
              <div className='w-6 h-6 sm:w-10 sm:h-10 bg-gray-300'></div>
              <div className='w-6 h-6 sm:w-10 sm:h-10 bg-gray-300'></div>
              <div className='w-6 h-6 sm:w-10 sm:h-10 bg-gray-300'></div>
              <div className='w-6 h-6 sm:w-10 sm:h-10 bg-gray-300'></div>
              <div className='w-6 h-6 sm:w-10 sm:h-10 bg-gray-300'></div>
            </div>

            <div className="py-4 flex">
              <div className="bg-gray-300 sm:py-3 sm:px-10 py-2 px-3 w-20 hover:bg-opacity-80 transition-opacity duration-300 mx-4 h-2">
              </div>
              <div className=" bg-gray-300 sm:py-3 sm:px-10 py-2 px-3  hover:bg-opacity-80 transition-opacity duration-300 w-20 h-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;

  const handleBuyProduct = async(e) =>{

    const stripe =  await loadStripe('pk_test_51LiyTNSH4QsKt7gApjEgxNySurOKQbOlLuc0XxwsqJek8ItuUyPQLIwIThhZ7Q4Ut7dYzWkrlg15v5kgV2opUJF6002wEvois3')

    if(productData[0]._id === e.target.value) {

      const data = [{ 
        name : productData[0].name,  
        thumbnail : productData[0].thumbnail,
        price : productData[0].price,
        size : selectedSize,
        // qnt : 1
      }]

      try {
        const response = await axios.post('http://localhost:5200/payment/req-payment', {
          data : data
        });

        stripe.redirectToCheckout({
          sessionId: response.data.session
        })

      } 
      catch (error) {
        console.log(error)
        alert('something went wrogn')
      }
    }
  }

  return (
    <>
      <section>
        <div className='w-[85%] max-w-screen-xl mx-auto py-5 mt-6'>
          <div className='grid lg:grid-cols-2 gap-2'>
            <div>
              {/* {
                  productData.map()
              } */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden">
                <div
                  className="w-[270px] lg:w-[360px] sm:w-1/2 h-[410px] md:h-[550px] lg:h-[480px] bg-cover bg-center border border-gray-300 hover:scale-105 overflow-hidden duration-500 ease-in-out bg-gray-300"
                  style={{ backgroundImage: `url(${currentImage})` }}
                >
                </div>
                <div className="flex justify-center gap-2 sm:flex-col w-full sm:w-1/4 bg-white">
                  {productData[0].images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail w-14 h-14 sm:w-24 sm:h-24 bg-cover bg-center border border-gray-300 rounded cursor-pointer ${currentImage === image ? 'ring-2 ring-gray-300' : ''}`}
                      style={{ backgroundImage: `url(${image})`}}
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
              <h3 className='text-[35px] text-[#161922]'>{productData[0].name}</h3>
              <p className='text-[13px] lg:text-[20px] font-light text-[#626262]'>{productData[0].description}</p>
              <div className='flex items-center justify-start pt-4'>
                <p className="text-[22px] pe-1">{`Rs. ${productData[0].price}`}</p>
                <p className='text-[20px] font-light px-2 line-through text-[#161922]'>{`Rs. ${productData[0].mrp}`}</p>
                <p className='text-[20px] text-red-500 font-light'>{`(${productData[0].discount}% OFF)`}</p>
              </div>
              <div className="grid grid-cols-[30%,auto] sm:grid-cols-[20%,auto] gap-4 items-center my-6">
                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Occasion:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>{productData[0].occasion}</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Fit Type:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>{productData[0].fit}</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Color:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>{productData[0].color}</div>

                <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold border-b border-gray-300 pb-4">Fabric:</div>
                <div className='text-[13px] lg:text-[15px] text-[#626262] border-b border-gray-300 pb-4'>{productData[0].fabric}</div>
              </div>

              <div className="text-[13px] lg:text-[15px] text-[#626262] font-bold pb-4">Select Size:</div>
              <div className='text-[13px] lg:text-[15px] text-[#626262] pb-4'>
                <div className="flex gap-4">
                  {productData[0].size.map((size) => (
                    <button
                      key={size}
                      className={`px-3 py-[6px] sm:px-4 sm:py-2 border cursor-pointer ${selectedSize === size
                          ? 'bg-[#2d2d2d] text-white'
                          : 'bg-gray-100 text-gray-800'
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="pt-2 text-sm text-gray-500">Selected Size: {selectedSize.toUpperCase()}</p>
                )}
              </div>
              <div className=''>
                <div className="py-4 flex">
                  <button className="bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 mx-4 flex items-center font-medium">
                    <PiHandbagFill className='me-2'/>
                    <span>ADD TO BAG</span>
                  </button>
                  <button value={productData[0]._id} onClick={handleBuyProduct} className=" bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 font-medium">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Tabs Navigation */}
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveTab('tab1')}
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'tab1'
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500'
                  }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('tab2')}
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'tab2'
                    ? 'border-b-2 border-black text-black'
                    : 'text-gray-500'
                  }`}
              >
                Additional Information
              </button>
            </div>

            {/* Tabs Content */}
            <div className="mt-4 p-4">
              {activeTab === 'tab1' ? (
                <div>
                  <p>{productData[0].full_description}</p>
                </div>
              ) : (
                <div>Content for Tab 2 (To be fetch)</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}