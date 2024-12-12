'use client'

import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaHeart} from "react-icons/fa";
import Link from 'next/link';
import { useContext } from 'react';
import { myContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '@/app/context/CartContext';


export default function ProductList({limit, productData, filePath}) {

  //var name can be any name.
  const { addToCart } = useContext(myContext);
  const { addToWishlist } = useContext(WishlistContext);

  // const [productData, setproductData] = useState([]);
  // const [filePath, setfilePath] = useState('');

  
  return (
    <div className="">
      <div className=" mx-auto w-[85%] max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
className="mt-16 z-50"
/>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.slice(0, limit).map((product) => (
            <div key={product._id} className="">
              <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-black lg:aspect-none lg:h-80">
                <Link href={`/products/${product._id}`}>
                  <img
                    alt={product.name}
                    src={`${filePath}/${product.thumbnail}`}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:opacity-80" 
                  />
                </Link>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100">
                    <button className="p-4 text-white bg-black bg-opacity-75 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out" onClick={()=>addToCart(product)}>
                        <FaShoppingCart className='text-2xl'/>
                    </button>
                    <button className="p-4 text-white bg-black bg-opacity-75 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out" onClick={()=>addToWishlist(product)}>
                        <FaHeart className='text-2xl'/>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                  <h3 className="text-[20px] text-[#161922] pt-2 font-roboto">
                      <Link href={`/products/${product._id}`}>
                        {product.name}
                      </Link>
                  </h3>
                  <p className='text-[15px] font-roboto font-light pb-1 text-[#161922]'>{product.description}</p>
                  <span className="text-base">Rs. {product.price}</span>
                  <span className='text-[12px] mx-2 line-through text-[#161922]'>Rs. {product.mrp}</span>
                  <span className='text-[12px] text-red-500'>({product.discount} off)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}