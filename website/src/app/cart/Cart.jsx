"use client"
import { React, useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { myContext } from '../context/CartContext';
import { FaSortDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Cart() {
    const { cart, removeFromCart } = useContext(myContext);
    const [update_cart, setupdate_cart] = useState([]);

    useEffect(() => {
        setupdate_cart(cart);
    }, [cart]);

    const handleQuantityChange = (cartIndex, delta) => {
        const _update_cart = update_cart.map((item, index) => {
            if (index === cartIndex) {
                const newQuantity = item.qnt + delta;
                return { ...item, qnt: newQuantity > 1 ? newQuantity : 1 };
            }
            return item;
        });
        setupdate_cart(_update_cart);
    };


    return (
        <>
            <div className='my-12 w-[80%] mx-auto max-w-screen-xl'>
                <div>
                    {/* Normal Table for larger screens */}
                    <table className="hidden md:table w-full table-auto border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-center">Product</th>
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Price</th>
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Size</th>
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Quantity</th>
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Subtotal</th>
                                <th className="px-4 py-2 border border-gray-200"></th>
                            </tr>
                        </thead>
                        {update_cart?.map((cartItem, cartIndex) => (
                            <tbody key={cartIndex}>
                                <tr>
                                    <td className="text-[14px] font-bold px-4 py-2 border-b border-r border-gray-200 flex items-center justify-start">
                                        <figure className='mr-8'>
                                            <img src={cartItem.imageSrc} alt="" className="w-[100px] h-[100px] object-cover" />
                                        </figure>
                                        <span>{cartItem.name} - {cartItem.description}</span>
                                        
                                    </td>
                                    <td className="text-[15px] text-[#626262] px-4 py-2 border-b-[1px] border-r border-gray-200">Rs. {cartItem.price}</td>
                                    <td className="text-[15px] text-[#626262] px-4 py-2 border-b-[1px] border-gray-200 border-r">
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-base font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                    L
                                                    <FaChevronDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                                                </MenuButton>
                                            </div>

                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-16 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div className="py-1">
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            S
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            M
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            L
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            XL
                                                        </a>
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <a
                                                            href="#"
                                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        >
                                                            XXL
                                                        </a>
                                                    </MenuItem>
                                                </div>
                                            </MenuItems>
                                        </Menu>
                                    </td>
                                    <td className="text-[14px] text-[#626262] px-4 py-2 border-b-[1px] border-r">
                                        <button onClick={() => handleQuantityChange(cartIndex, -1)}>
                                            <FaMinus />
                                        </button>
                                        <span className='px-2 py-1 mx-1 border'>{cartItem.qnt}</span>
                                        <button onClick={() => handleQuantityChange(cartIndex, 1)}>
                                            <FaPlus />
                                        </button>
                                    </td>
                                    <td className="text-[15px] text-[#626262] px-4 py-2 border-b-[1px] border-r">
                                        {`Rs. ${cartItem.price * cartItem.qnt}`}
                                    </td>
                                    <td className="text-[15px] px-4 py-2 border-b-[1px] text-center border-r">
                                        <button
                                            onClick={() => removeFromCart(cartItem.id)}
                                            className="text-white bg-black p-1 hover:opacity-75 transition-opacity duration-300 font-bold"
                                        >
                                            <IoClose />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                    {/* Mobile version for smaller screens */}
                    <div className='md:hidden w-[97%] mx-auto'>
                        {update_cart?.map((cartItem, cartIndex) => (
                            <div key={cartIndex} className='grid grid-cols-2 items-center p-3 gap-y-2 border mb-4'>
                                <div className='text-[13px] text-[#626262]'>Product:</div>
                                <div className='text-right text-[14px] font-bold'>{cartItem.name}</div>

                                <div className='text-[13px] text-[#626262]'>Price:</div>
                                <div className='text-right text-[13px]'>Rs. {cartItem.price}</div>

                                <div className='text-[13px] text-[#626262]'>Size</div>
                                <div className='text-right text-[13px]'>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-base font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                L
                                                <FaChevronDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        S
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        M
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        L
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        XL
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                    >
                                                        XXL
                                                    </a>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>

                                </div>

                                <div className='text-[13px] text-[#626262]'>Quantity:</div>
                                <div className='flex justify-end items-center text-[13px]'>
                                    <button onClick={() => handleQuantityChange(cartIndex, -1)}>
                                        <FaMinus className='text-[13px] text-[#626262]' />
                                    </button>
                                    <span className='px-2 py-1 mx-1 border'>{cartItem.qnt}</span>
                                    <button onClick={() => handleQuantityChange(cartIndex, 1)}>
                                        <FaPlus className='text-[13px] text-[#626262]' />
                                    </button>
                                </div>

                                <div className='text-[13px] text-[#626262] border-t-[1px] mt-2'><p className='pt-2'>Total:</p></div>
                                <div className='text-right text-[13px] border-t-[1px] mt-2'><p className='pt-2'>Rs. {cartItem.price * cartItem.qnt}</p></div>
                                <div className=''></div>
                                <div className='flex justify-end'>
                                    <button
                                        onClick={() => removeFromCart(cartItem.id)}
                                        className="text-white bg-black p-1 hover:opacity-75 transition-opacity duration-300 font-bold"
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            </div>
                        ))}
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
                    <div className="border border-gray-300 my-4">
                        <div className="flex justify-between border-b-[1px] border-gray-300 px-4 py-2">
                            <span className="text-lg font-semibold">Subtotal</span>
                            <span className="text-lg">Rs. {cart.length > 0 ? update_cart.map(item => item.price * item.qnt).reduce((total, value) => total + value, 0) : 0}</span>
                        </div>
                        <div className="flex justify-between px-4 py-2">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-lg">Rs. {cart.length > 0 ? update_cart.map(item => item.price * item.qnt).reduce((total, value) => total + value, 0) : 0}</span>
                        </div>
                    </div>
                    <button className="bg-black text-white hover:bg-opacity-75 transition-opacity duration-300 font-semibold px-4 py-2 w-full">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </>
    )
}