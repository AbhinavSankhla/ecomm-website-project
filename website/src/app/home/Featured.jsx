'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductList from '../products/components/ProductList'
import axios from 'axios';

export default function Featured({bgColor}) {

  const [productData, setproductData] = useState([]);
  const [filePath, setfilePath] = useState('');
  
  const getProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5200/product/true_product')

      if(response.status !== 200) return alert('something went wrong')

      setproductData(response.data.data)
      setfilePath(response.data.filepath)    
      console.log(response.data.data)
    } 

    catch (error) {
      console.log(error)
      alert('something went wrong')  
    }
  };

  useEffect(() => {
    getProduct();
  }, [])


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
          <ProductList productData={productData} limit={4} filePath={filePath}/>
           
          <div className="flex justify-center py-[60px] border-solid">
            <Link href="/shop">
            <button className="bg-black text-white font-semibold py-3 px-10 hover:opacity-75 transition-opacity duration-300 text-[15px]">
              See all products
            </button>
            </Link> 
          </div>
        </div>        
      </section>
    </>
  )
}
