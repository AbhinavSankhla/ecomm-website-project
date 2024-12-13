// "use client";

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function ShopPage() {
//   const searchParams = useSearchParams();
//   const type = searchParams.get('type');
//   const id = searchParams.get('id');
//   const name = searchParams.get('name');
//   const categoryId = searchParams.get('categoryId');
//   const [products, setProducts] = useState([]);
//   const [filePath, setfilePath] = useState('');

//   useEffect(() => {
//     if (!type) return; // Wait for the query parameters to load

//     const fetchProducts = async () => {
//       try {
//         let url = 'http://localhost:5200/product/true_product';

//         if (type === 'category') {
//           url += `?category=${id}`;
//         } else if (type === 'subcategory') {
//           url += `?subcategory=${name}&category=${categoryId}`;
//         }

//         const response = await fetch(url);
//         const data = await response.json();
//         setfilePath(response.data.filepath)
//         setProducts(data.data || []);
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [type, id, name, categoryId]);

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-2xl font-bold mb-6">
//         {type === 'category'
//           ? 'Products in Selected Category'
//           : 'Products in Selected Subcategory'}
//       </h1>
//       <div className="grid grid-cols-4 gap-6">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product._id} className="p-4 shadow-lg rounded bg-gray-100">
//               <img
//                 src={`${filePath}/${product.thumbnail}`}
//                 alt={product.name}
//                 className="h-40 w-full object-cover mb-4"
//               />
//               <h3 className="font-bold text-lg">{product.name}</h3>
//               <p className="text-gray-500">{product.description}</p>
//               <p className="text-green-600 font-bold mt-2">${product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found for the selected category or subcategory.</p>
//         )}
//       </div>
//     </div>
//   );
// }
