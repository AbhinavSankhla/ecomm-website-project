import React from 'react'
import { IoClose } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className='my-12 border-2 border-red-500 w-[80%] mx-auto max-w-screen-xl'>
        <div className='border-2 border-green-500'>

             {/* Normal Table for larger screens */}
            <table className="hidden md:table w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr className=''>
                        <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-center">Product</th>
                        <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Price</th>
                        <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Quantity</th>
                        <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Subtotal</th>
                        <th className="px-4 py-2 border border-gray-200"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-[14px] font-bold px-4 py-2 border-b  border-gray-200 flex items-center">
                            <figure className='mr-8'>
                            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg" alt="" className="w-[100px] h-[100px] object-cover"/>
                            </figure>
                            Curabitur et ligula
                        </td>
                        <td className="text-[15px] text-[#626262] px-4 py-2 border-b border-gray-200">£11.20</td>
                        <td className="text-[14px] text-[#626262] px-4 py-2 border-b border-gray-200">1</td>
                        <td className="text-[15px] text-[#626262] px-4 py-2 border-b border-gray-200">£11.20</td>
                        <td className="text-[15px] px-4 py-2 border-b border-gray-200 text-center">
                            <button className="text-white bg-black p-1 hover:opacity-75 transition-opacity duration-300 font-bold">
                                <IoClose />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Mobile case for table */}
            <div className='md:hidden grid grid-cols-2 items-center p-3 w-[97%] mx-auto gap-2 border'>
                <div className='text-[13px]  text-[#626262]'>Product:</div>
                <div className='text-right text-[14px] font-bold'>lorem biscoit</div>

                <div className='text-[13px] text-[#626262]'>Price:</div>
                <div className='text-right text-[14px]'>$12.00</div>

                <div className='text-[13px]  text-[#626262]'>Quantity:</div>
                <div className='text-right text-[14px]'>1</div>

                <div className='text-[13px]  text-[#626262]'>Total:</div>
                <div className='text-right text-[14px]'>$12.00</div>
            </div>


            {/* Coupon code and buttons */}
            <div className="grid grid-cols-1 justify-between items-center my-4 md:grid-cols-2">
                <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 sm:mb-2">
                    <input
                        type="text"
                        placeholder="Coupon code"
                        className="border border-gray-300 rounded-br-3xl px-4 py-2 w-[97%] mx-auto"
                    />
                    <button className="bg-black text-white hover:bg-opacity-75 transition-opacity duration-300 px-4 py-2 mx-2 my-4 sm:my-0 font-semibold">
                        Apply coupon
                    </button>
                </div>
                <div className='flex md:justify-end mx-2'>
                    <button className="w-full md:w-[45%] hover:bg-opacity-75 transition-opacity duration-300 bg-gray-500 text-white px-4 py-2 font-semibold">
                    Update cart
                    </button>
                </div>
            </div>
        </div>

        
        {/* Cart totals section */}
        <div className='w-[full] mx-auto md:w-[50%] md:ml-[50%]'>
            <p className='text-[21px] font-light mt-5 text-[#161922]'>Cart Totals</p>
        <div className="border border-gray-300 mt-4">
            <div className="flex justify-between border-b border-gray-300 px-4 py-2">
                <span className="text-lg font-semibold">Subtotal</span>
                <span className="text-lg">£27.20</span>
            </div>  
            <div className="flex justify-between px-4 py-2">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg">£27.20</span>
            </div>
        </div>
        <button className="bg-black text-white hover:bg-opacity-75 transition-opacity duration-300 font-semibold px-4 py-2 mt-4 w-full">
            Proceed to checkout
        </button>
        </div>
      </div>
    </>
  )
}
