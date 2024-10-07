import React from 'react'
import { categories } from './Categories'

export default function ShopMenu() {
  return (
    <>
      <div className='grid grid-cols-4 gap-4 p-6 bg-[#232323] w-[75%] mx-auto'>
        {
          categories.map((category,index) => {
            return(
            <div key={index} className='text-gray-300 cursor-pointer'>
              {/* Main category */}
              <h3 className='font-bold uppercase mb-3 text-[15px] pl-2 py-1 hover:bg-[#212121] hover:text-white duration-200 ease-in-out'>{category.name}</h3>
              {/* Sub-category */}
              <ul className='space-y-2'>
                {
                  category.subcategories?.map((subcategory, subindex) =>(
                    
                    <li key={subindex} className='text-[15px] pl-2 py-1 hover:bg-[#202020] hover:text-white'>{subcategory}</li>
                  ))
                }
                
              </ul>
            </div>
            )
          })
        }

      </div>
    </>
  )
}

