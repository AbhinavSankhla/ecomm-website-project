'use client'

import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import axios from 'axios';

export default function RelatedProducts() {
  const [productData, setproductData] = useState([]);
  const [filePath, setfilePath] = useState('');
  const [loading, setLoading] = useState(true);
  
  const getProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5200/product/true_product')

      if(response.status !== 200) return alert('something went wrong')

      setproductData(response.data.data)
      setfilePath(response.data.filepath)
      setLoading(false);    
    } 

    catch (error) {
      console.log(error)
      setLoading(false);    
      alert('something went wrong')

    }
  };

  useEffect(() => {
    getProduct();
  }, [])


  return (
    <>
        <div className='py-4'>
            <div className='w-[80%] max-w-screen-xl mx-auto'>
                <h1 className='py-4 text-xl'>Related Products</h1>
            </div>
            <ProductList loading={loading} productData={productData} limit={4} filePath={filePath}/>            
        </div>
    </>
  )
}
