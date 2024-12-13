// import React from 'react'
// import { categories } from './Categories' 

// export default function ShopMenu() {
//   return (
//     <>
//       <div className='grid grid-cols-4 gap-4 p-6 bg-[#232323] w-[75%] mx-auto shadow-lg'>
//         {
//           categories.map((category,index) => {
//             return(
//             <div key={index} className='text-gray-300 cursor-pointer'>
//               {/* Main category */}
//               <h3 className='font-bold uppercase mb-3 text-[15px] pl-2 py-1 hover:bg-[#212121] hover:text-white duration-200 ease-in-out'>{category.name}</h3>
//               {/* Sub-category */}
//               <ul className='space-y-2'>
//                 {
//                   category.subcategories?.map((subcategory, subindex) =>(
                    
//                     <li key={subindex} className='text-[15px] pl-2 py-1 hover:bg-[#202020] hover:text-white'>{subcategory}</li>
//                   ))
//                 }
                
//               </ul>
//             </div>
//             )
//           })
//         }

//       </div>
//     </>
//   )
// }

import React, { useEffect, useState } from 'react';

export default function ShopMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetching categories
    const fetchCategories = async () => {
      try {
        const categoryResponse = await fetch('http://localhost:5200/category/true_category'); // Replace with your actual API endpoint
        const categoryData = await categoryResponse.json();

        const subcategoryResponse = await fetch('http://localhost:5200/subcategory/true_subcategory'); // Replace with your actual API endpoint
        const subcategoryData = await subcategoryResponse.json();

        // Combining categories with their corresponding subcategories
        const combinedData = categoryData.data.map((category) => {
          return {
            ...category,
            subcategories: subcategoryData.data
              .filter((subcategory) => subcategory.category === category._id)
              .map((subcategory) => subcategory.subCatName),
          };
        });

        setCategories(combinedData);
      } catch (error) {
        console.error('Error fetching categories and subcategories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className='grid grid-cols-4 gap-4 p-6 bg-[#232323] w-[75%] mx-auto shadow-lg'>
        {categories.map((category, index) => (
          <div key={index} className='text-gray-300 cursor-pointer'>
            {/* Main category */}
            <h3 className='font-bold uppercase mb-3 text-[15px] pl-2 py-1 hover:bg-[#212121] hover:text-white duration-200 ease-in-out'>
              {category.categoryName}
            </h3>
            {/* Sub-category */}
            <ul className='space-y-2'>
              {category.subcategories?.map((subcategory, subindex) => (
                <li
                  key={subindex}
                  className='text-[15px] pl-2 py-1 hover:bg-[#202020] hover:text-white'
                >
                  {subcategory}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

