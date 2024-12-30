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

import ProductList from '@/app/products/components/ProductList';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ParentCatList = () => {
  const params = useParams(); // Get category from dynamic route
  const [productData, setProductData] = useState([]);
  const [filePath, setfilePath] = useState('');
  const [loading, setLoading] = useState(true);

  // console.log(params)
  useEffect(() => {
    // Fetch products related to the selected category
    const fetchProducts = async () => {
      try {
        setLoading(true);
    
        const categoryId = params.parentCategory// Use the category ID from the params      
        // Fetch products using the matched category ID
        const productResponse = await axios.get(
          `http://localhost:5200/product/filter_product?category=${categoryId}`
        );
        setProductData(productResponse.data.data || []);
        setfilePath(productResponse.data.filepath)
                
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  console.log(productData)

  return (
    <div>
      <div className='pt-12 py-5 w-[80%] mx-auto max-w-screen-xl'>
        <p className='pt-16 text-[#161922] text-[13px] lg:text-[15px]'>Products for Selected Category</p>
      </div>

      <ProductList loading={loading} productData={productData} limit={productData.length} filePath={filePath}/>
      
      {/* <div className="product-list">
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
      </div> */}
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

