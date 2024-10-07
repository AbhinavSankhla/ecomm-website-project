'use client'

import React from 'react'
import { FaShoppingCart, FaHeart} from "react-icons/fa";
import Link from 'next/link';
import { useContext } from 'react';
import { myContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
// import { CartContext } from '@/app/context/CartContext';

const products = [
  {
    id: 1,
    name: 'Basic Tee Black',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'black',
    occasion : 'casual',
    fit : 'normal',
    style : 'urban',
    fabric : 'cotton' 
  },
  {
    id: 2,
    name: 'Basic Tee White',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '30',
    color: 'white',
    occasion : 'casual',
    fit : 'normal',
    style : 'urban',
    fabric : 'cotton'
  },
  {
    id: 3,
    name: 'Basic Tee Gray',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '20',
    color: 'gray',
    occasion : 'casual',
    fit : 'normal',
    style : 'urban',
    fabric : 'cotton'
  },
  {
    id: 4,
    name: 'Basic Tee Pink',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '25',
    color: 'pink',
    occasion : 'casual',
    fit : 'normal',
    style : 'urban',
    fabric : 'cotton'
  }
  // More products...
]

export default function ProductList() {

  //var name can be any name.
  const {addToCart} = useContext(myContext);
  const {addToWishlist} = useContext(WishlistContext);

  return (
    <div className="">
      <div className=" mx-auto w-[85%] max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="">
              <div className="group relative aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-black lg:aspect-none lg:h-80">
                <Link href={`/products/${product.id}`}>
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:opacity-80" 
                  />
                </Link>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center transition-transform duration-300 ease-in-out transform scale-0 group-hover:scale-100">
                    <button className="p-4 text-white bg-black bg-opacity-75 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out" onClick={()=>addToCart(product)}>
                        <FaShoppingCart className='text-2xl'/>
                    </button>
                    <button className="p-4 text-white bg-black bg-opacity-75 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out" onClick={()=>addToWishlist(product)}>
                        <FaHeart className='text-2xl '/>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                  <h3 className="text-[20px] text-[#161922] pt-2 font-roboto font-light">
                      <Link href={`/products/${product.id}`}>
                        {product.name}
                      </Link>
                  </h3>
                  <p className='text-[15px] font-roboto font-light pb-1 text-[#161922]'>Mens solid t-shirt</p>
                  <span className="text-base">Rs. {product.price}</span>
                  <span className='text-[12px] mx-2 line-through text-[#161922]'>Rs. 50</span>
                  <span className='text-[12px] text-red-500'>(50% off)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}