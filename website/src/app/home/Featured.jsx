'use client'

import React from 'react'
import Link from 'next/link'
import ProductList from '../products/components/ProductList'

export default function Featured({bgColor}) {
  return (
    <>
      <section>
        <div className={`${bgColor} pt-110px`}>
          <div className="w-[85%] mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8">
            <p className='text-[13px] md:text-[16px] lg:text-[19px] font-light text-[#161922]'>Featured</p>
            <div>
              <div>
                <h2 className="text-[#161922] text-[39px] sm:text-[45px] md:text-[55px] lg:text-[65px] tracking-normal pb-8 font-light">weekly deals</h2>
              </div>
            </div>
          </div>
          <ProductList/>
           
          <div className="flex justify-center py-[60px] border-2 border-gray-400 border-solid">
            <Link href="/shop">
            <button className="bg-black text-white font-bold py-3 px-10 hover:opacity-75 transition-opacity duration-300 ">
            See all products
            </button>
            </Link> 
          </div>
        </div>        
      </section>
    </>
  )
}
