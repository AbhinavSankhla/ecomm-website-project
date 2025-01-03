"use client"

import { React, useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { myContext } from '../context/CartContext';
import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

export default function Cart() {
    //address modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState({
        cust_name: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        postal_code: "",
        country: ""
    });

    const { cart, removeFromCart } = useContext(myContext);
    const [update_cart, setupdate_cart] = useState([]);

    // console.log(cart)

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

    // console.log(update_cart);

    const handleBuyProduct = async (e) => {
        setIsModalOpen(false);

        const productId = e.target.value; // Get the product ID from the button value
        const selectedProduct = update_cart.find(item => item._id === productId); // Find the product in the cart

        if (!selectedProduct) {
            alert('Product not found in the cart!');
            return;
        }

        try {
            const stripe = await loadStripe('pk_test_51LiyTNSH4QsKt7gApjEgxNySurOKQbOlLuc0XxwsqJek8ItuUyPQLIwIThhZ7Q4Ut7dYzWkrlg15v5kgV2opUJF6002wEvois3');

            // const totalPrice = selectedProduct.price * selectedProduct.qnt;

            const data = [{
                name: selectedProduct.name,
                description: selectedProduct.description,
                thumbnail: selectedProduct.thumbnail,
                price: selectedProduct.price,
                size: selectedProduct.size || 'L', // Provide size if available, or fallback
                qnt: selectedProduct.qnt,
                cust_name: deliveryAddress.cust_name,
                line1: deliveryAddress.line1,
                line2: deliveryAddress.line2,
                city: deliveryAddress.city,
                state: deliveryAddress.state,
                postal_code: deliveryAddress.postal_code,
                country: deliveryAddress.country
            }];

            const response = await axios.post('http://localhost:5200/payment/req-payment', {
                data: data,
            });

            await stripe.redirectToCheckout({
                sessionId: response.data.session,
            });
        } catch (error) {
            console.error('Payment error:', error);
            alert('Something went wrong during payment.');
        }
    };

    //address model
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleBuyNow = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                                <th className="text-[13px] lg:text-[15px] text-[#444] px-4 py-2 border border-gray-200 text-left">Checkout</th>
                                <th className="px-4 py-2 border border-gray-200"></th>
                            </tr>
                        </thead>
                        {update_cart?.map((cartItem, cartIndex) => (
                            <tbody key={cartIndex}>
                                <tr>
                                    <td className="text-[14px] font-bold px-4 py-2 border-b border-r border-gray-200 flex items-center justify-start">
                                        <figure className='mr-8'>
                                            <img
                                                src={
                                                    cartItem.thumbnail.startsWith('http')
                                                        ? cartItem.thumbnail
                                                        : `http://localhost:5200/uploads/${cartItem.thumbnail}`
                                                }
                                                alt=""
                                                className="w-[100px] h-[100px] object-cover"
                                            />
                                        </figure>
                                        <Link href={`/products/${cartItem._id}`}>{cartItem.name} - {cartItem.description}</Link>
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
                                    <td className="text-[15px] text-[#626262] px-4 py-2 border-b-[1px] border-r">
                                        {/* <button value={cartItem._id} onClick={handleBuyProduct} className="text-white bg-black px-2 py-1 hover:opacity-75 transition-opacity duration-300  text-[13px]">
                                                BUY NOW
                                        </button> */}
                                        <button onClick={handleBuyNow} className="text-white bg-black px-2 py-1 hover:opacity-75 transition-opacity duration-300  text-[13px]">
                                            BUY NOW
                                        </button>
                                        {/* Modal */}
                                        {isModalOpen && (
                                            <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
                                                <div
                                                    className="w-[90%] max-w-lg bg-white rounded-md shadow-lg my-auto transform transition-transform duration-300 ease-in-out animate-slide-down"
                                                >
                                                    {/* Modal Header */}
                                                    <div className="flex justify-between items-center p-4 border-b">
                                                        <h2 className="flex items-center text-lg font-semibold">Delivery Address <IoLocationSharp className='pb-[2px] text-[20px]' /></h2>
                                                        <button
                                                            onClick={handleCloseModal}
                                                            className="text-gray-600 hover:text-gray-800"
                                                        >
                                                            <IoMdCloseCircle className='text-[25px] pb-[2px]' />
                                                        </button>
                                                    </div>

                                                    {/* Modal Body */}
                                                    <div className="p-4 space-y-4">
                                                        <input
                                                            type="text"
                                                            name="cust_name"
                                                            value={deliveryAddress.cust_name}
                                                            onChange={handleInputChange}
                                                            placeholder="Full Name"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="line1"
                                                            value={deliveryAddress.line1}
                                                            onChange={handleInputChange}
                                                            placeholder="Address Line 1"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="line2"
                                                            value={deliveryAddress.line2}
                                                            onChange={handleInputChange}
                                                            placeholder="Address Line 2"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            value={deliveryAddress.city}
                                                            onChange={handleInputChange}
                                                            placeholder="City"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            value={deliveryAddress.state}
                                                            onChange={handleInputChange}
                                                            placeholder="State"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="postal_code"
                                                            value={deliveryAddress.postal_code}
                                                            onChange={handleInputChange}
                                                            placeholder="Postal code"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            value={deliveryAddress.country}
                                                            onChange={handleInputChange}
                                                            placeholder="country"
                                                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        />
                                                    </div>

                                                    {/* Modal Footer */}
                                                    <div className="p-4 border-t flex justify-end space-x-2">
                                                        <button
                                                            onClick={handleCloseModal}
                                                            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition"
                                                        >
                                                            Cancel
                                                        </button>

                                                        <button value={cartItem._id} onClick={handleBuyProduct} className=" bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 font-medium rounded-md">
                                                        Proceed to checkout
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Tailwind Animation */}
                                        <style jsx>{`
                                                @keyframes slide-down {
                                                  from {
                                                    transform: translateY(-100%);
                                                  }
                                                  to {
                                                    transform: translateY(0);
                                                  }
                                                }
                                                .animate-slide-down {
                                                  animation: slide-down 0.3s ease-in-out;
                                                }
                                              `}</style>
                                    </td>
                                    <td className="text-[15px] px-4 py-2 border-b-[1px] text-center border-r">
                                        <button
                                            onClick={() => removeFromCart(cartItem._id)}
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

                                <div className='py-4 text-[13px] text-[#626262]'>Product:</div>
                                {/* <div className='py-4 text-right text-[14px] font-bold'>{cartItem.name} - {cartItem.description}</div> */}

                                <Link className='py-4 text-right text-[14px] font-bold' href={`/products/${cartItem._id}`}>{cartItem.name} - {cartItem.description}</Link>

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
                                        onClick={() => removeFromCart(cartItem._id)}
                                        className="text-white bg-black p-1 hover:opacity-75 transition-opacity duration-300 font-bold me-1"
                                    >
                                        <IoClose />
                                    </button>
                                    <button onClick={handleBuyNow} className="text-white bg-black px-2 py-1 hover:opacity-75 transition-opacity duration-300  text-[10px] ">
                                        BUY NOW
                                    </button>
                                    {/* Modal */}
                                    {isModalOpen && (
                                        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
                                            <div
                                                className="w-[90%] max-w-lg bg-white rounded-md shadow-lg my-auto transform transition-transform duration-300 ease-in-out animate-slide-down"
                                            >
                                                {/* Modal Header */}
                                                <div className="flex justify-between items-center p-4 border-b">
                                                    <h2 className="flex items-center text-lg font-semibold">Delivery Address <IoLocationSharp className='pb-[2px] text-[20px]' /></h2>
                                                    <button
                                                        onClick={handleCloseModal}
                                                        className="text-gray-600 hover:text-gray-800"
                                                    >
                                                        <IoMdCloseCircle className='text-[25px] pb-[2px]' />
                                                    </button>
                                                </div>

                                                {/* Modal Body */}
                                                <div className="p-4 space-y-4">
                                                    <input
                                                        type="text"
                                                        name="cust_name"
                                                        value={deliveryAddress.cust_name}
                                                        onChange={handleInputChange}
                                                        placeholder="Full Name"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="line1"
                                                        value={deliveryAddress.line1}
                                                        onChange={handleInputChange}
                                                        placeholder="Address Line 1"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="line2"
                                                        value={deliveryAddress.line2}
                                                        onChange={handleInputChange}
                                                        placeholder="Address Line 2"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={deliveryAddress.city}
                                                        onChange={handleInputChange}
                                                        placeholder="City"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        value={deliveryAddress.state}
                                                        onChange={handleInputChange}
                                                        placeholder="State"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="postal_code"
                                                        value={deliveryAddress.postal_code}
                                                        onChange={handleInputChange}
                                                        placeholder="Postal code"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        value={deliveryAddress.country}
                                                        onChange={handleInputChange}
                                                        placeholder="country"
                                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                    />
                                                </div>

                                                {/* Modal Footer */}
                                                <div className="p-4 border-t flex justify-end space-x-2">
                                                    <button
                                                        onClick={handleCloseModal}
                                                        className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 transition"
                                                    >
                                                        Cancel
                                                    </button>

                                                    <button value={cartItem._id} onClick={handleBuyProduct} className=" bg-black text-white sm:py-3 sm:px-10 py-2 px-3 text-[14px] sm:text-[16px] hover:bg-opacity-80 transition-opacity duration-300 font-medium rounded-md">
                                                    Proceed to checkout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Tailwind Animation */}
                                    <style jsx>{`
                                                @keyframes slide-down {
                                                  from {
                                                    transform: translateY(-100%);
                                                  }
                                                  to {
                                                    transform: translateY(0);
                                                  }
                                                }
                                                .animate-slide-down {
                                                  animation: slide-down 0.3s ease-in-out;
                                                }
                                              `}</style>
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
                            <Link href={'/shop'} className="text-center w-full md:w-[45%] hover:bg-opacity-75 transition-opacity duration-300 bg-gray-500 text-white px-4 py-2 font-semibold">
                                Update cart
                            </Link>
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
                    {/* <button className="bg-black text-white hover:bg-opacity-75 transition-opacity duration-300 font-semibold px-4 py-2 w-full">
                        Proceed to checkout
                    </button> */}
                </div>
            </div>
        </>
    )
}