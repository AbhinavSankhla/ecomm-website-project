'use client'

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ChildCategory() {

    const params = useParams();
    console.log(params.subCategory);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
          setProducts(productResponse.data.data || []);
          console.log(productResponse.data)
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [params]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!products.length) {
      return <div>No products found for this category.</div>;
    }
  
    

  return (
    <div>
      <div>
      {/* <h1>Products for {params.parentCategory}</h1> */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {/* <img
              src={`/uploads/${product.thumbnail}`}
              alt={product.name}
              className="product-thumbnail"
            /> */}
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>MRP: ₹{product.mrp}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
