import React from 'react'
import Link from 'next/link'
import ProductList from '../products/components/ProductListing'


export default function Featured({bgColor}) {
  return (
    <>
      <section>
        <div className={`${bgColor} pt-110px`}>
          <div className="w-[85%] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <p>Featured</p>
            <div>
              <div>
                <h2 className="text-[65px] tracking-normal text-gray-900 pb-8">weekly deals</h2>
              </div>
              <ProductList/>
            </div>
          </div>
           
          <div className="flex justify-center pb-[100px] border-2 border-gray-400 border-solid">
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
