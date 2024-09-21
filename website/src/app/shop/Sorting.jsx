import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import ProductList from '../products/components/ProductList';

export default function Sorting() {
  
  const result = 10;  
    
  return (
    <>
        <div className='bg-white'>
            <div className='w-[85%] mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2 border-red-500'>
                <div className='border-2 border-red-500 flex flex-col sm:flex-row justify-between items-center'>
                    <p className='text-[#a8a8a8] text-[15px]'>{`Showing all ${result} results`}</p>
                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-[14px] bg-white px-3 py-2 text-sm font-normal text-[#977b74] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Default sorting
                                <IoIosArrowDown aria-hidden="true" className="-mr-1 ms-4 sm:ms-20 h-5 w-5 text-gray-400" />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Default sorting
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Sort by popularity
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Sort by average rating
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Sort by latest
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Sort by price: low to high
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#977b74] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                        Sort by price: high to low
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <ProductList/>
            </div>
        </div>
    </>
  )
}
