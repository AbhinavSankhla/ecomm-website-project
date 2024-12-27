// 'use client'

// import axios from 'axios';
// import { useParams } from 'next/navigation';
// import React from 'react'

// const ParentCatList = () => {
//     const params = useParams();
//     console.log(params)

//     const response = axios.get(''); 

//   return (
//     <div>
//         hello
//     </div>
//   )
// }

// export default ParentCatList;

'use client';

import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ParentCatList = () => {
  const params = useParams(); // Get category from dynamic route
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(params)
  useEffect(() => {
    // Fetch products related to the selected category
    const fetchProducts = async () => {
      try {
        setLoading(true);
    
        const categoryId = params.parentCategory// Use the category ID from the params
        // console.log("Parent Category from Params (ID):", categoryId);
    
        // // Fetch all active categories
        // const categoryResponse = await axios.get(`http://localhost:5200/category/true_category`);
        // const categories = categoryResponse.data.data || [];
        // console.log("Fetched Categories:", categories);
    
        // // Find the category using the _id
        // const category = categories.find((cat) => cat._id === categoryId);
    
        // if (!category) {
        //   console.error("Category not found! Params:", params.parentCategory, "Categories:", categories);
        //   setProducts([]);
        //   setLoading(false);
        //   return;
        // }
    
        // console.log("Matched Category:", category);
    
        // Fetch products using the matched category ID
        const productResponse = await axios.get(
          `http://localhost:5200/product/filter_product?category=${categoryId}`
        );
        setProducts(productResponse.data.data || []);
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
      {/* <h1>Products for {params.parentCategory}</h1> */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img
              src={`/uploads/${product.thumbnail}`}
              alt={product.name}
              className="product-thumbnail"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>MRP: ₹{product.mrp}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentCatList;


// const fetchProductsByCategory = async (categoryId, subcategoryId = null) => {
//   try {
//     let url = `http://localhost:5200/products?category=${categoryId}`;
//     if (subcategoryId) {
//       url += `&subcategory=${subcategoryId}`;
//     }
//     const response = await axios.get(url);
//     return response.data.data; // Assuming API returns { message, data, filepath }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   }
// };

