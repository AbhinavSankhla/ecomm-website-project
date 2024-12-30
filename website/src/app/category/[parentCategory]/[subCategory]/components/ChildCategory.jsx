'use client'

import ProductList from '@/app/products/components/ProductList';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ChildCategory() {

    const params = useParams();
    console.log(params.subCategory);

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filePath, setfilePath] = useState('');
     

    useEffect(() => {
      // Fetch products related to the selected category
      const fetchProducts = async () => {
        try {
          setLoading(true);
      
          // const categoryId = params.parentCategory// Use the category ID from the params
          const subCategoryId = params.subCategory
          // console.log("sub Category from Params (ID):", subCategoryId)
      
          // Fetch products using the matched category ID
          const productResponse = await axios.get(
            `http://localhost:5200/product/filter_product?subcategory=${subCategoryId}`
          );
          setProductData(productResponse.data.data || []);
          setfilePath(productResponse.data.filepath)
          console.log(productResponse.data)
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [params]);
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (!products.length) {
    //   return <div>No products found for this category.</div>;
    // }
  
  return (
    <div>
      <div className='pt-12 py-5 w-[80%] mx-auto max-w-screen-xl'>
        <p className='pt-16 text-[#161922] text-[13px] lg:text-[15px]'>Products for Selected Category</p>
      </div>
      <ProductList loading={loading} productData={productData} limit={productData.length} filePath={filePath}/>
    </div>
  )
}