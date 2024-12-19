"use client"

import Link from 'next/link'
// import { useRouter } from 'next/router';
import {  React, useState, useContext, useEffect } from 'react'
import { myContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import ShopMenu from './ShopMenu';
import {categories} from './Categories';
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";

const Navbar = ({logo}) => {

  // const router = useRouter();
  const {count} = useContext(myContext);
  const {WishCount} = useContext(WishlistContext);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringUser, setIsHoveringUser] = useState(false);
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   console.log(router); // Ensure this only logs after component mounts
  // }, [router]);



  // useEffect(() => {
  //   if (MenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  //   }, [MenuOpen]);

  return (
    <>
      {/* relative (navbar) */}
      <nav className='z-20 fixed bg-white shadow-md w-full mx-auto'>
        <div className='text-[15px] relative flex items-center justify-between px-3 sm:px-6'>
          <div>
            <Link href={'/'}>
              <img src={logo} alt="BeClothing logo" className='w-[140px] h-auto sm:w-[180px]'/>
            </Link>
          </div>
          <ul className='hidden lg:flex items-center gap-x-4'>
            <li className='py-6'>
              <Link className='px-4 pb-[24px] hover:border-b-[2px] hover:border-[#212121] hover:text-black duration-100 ease-in-out capitalize' href={"/"}>Home
              </Link>
            </li>
            <li className='py-6' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              {
              isHovering && (
                <div className="absolute w-full left-0 top-full"> 
                  {/* //mega menu component */}
                  <ShopMenu />
                </div>
              )
              }
              {/* <Link className='px-4 pb-6 hover:border-b hover:border-black hover:text-black duration-300 ease-in-out capitalize' href={"/shop"}>Women
              </Link> */}
              <Link className={`px-4 pb-[24px] ${isHovering ? 'border-b-2 border-[#212121]' : 'hover:border-b-4 hover:border-[#212121]'} duration-100 ease-in-out capitalize`} href={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className='px-4 pb-[24px] hover:border-b-[2px] hover:border-[#212121] hover:text-black duration-100 ease-in-out capitalize' href={"/about"}>about
              </Link>
            </li>
            <li>
              <Link className='px-4 pb-[24px] hover:border-b-[2px] hover:border-[#212121] hover:text-black duration-100 ease-in-out capitalize' href={"/contact"}>contact
              </Link>
            </li>
          </ul>
          <div>
            <div className='flex items-center justify-between gap-[2vw] gap-x-3 sm:gap-x-6'>
              <div className='text-[#626262]'><BsSearch className='text-[18px]' /></div>
              <div className='py-5 relative text-[#626262]'>
                <Link href={'/cart'}><FiHeart className='text-[19px]'/></Link>
                {/* bg-[#232323] */}
                <div className='bg-red-500 text-[white] font-semibold text-[11px] py-[1px] px-2 top-[10%] left-[85%] absolute rounded-full'>{WishCount}</div>
              </div>
              <div className='py-5 px-2 relative text-[#626262]'>
                <Link href={'/cart'}><SlHandbag className='text-[18px]'/></Link>
                {/* bg-[#232323] */}
                <div className='bg-red-500 text-[white] font-semibold text-[11px] py-[1px] px-2 top-[10%] left-[63%] absolute rounded-full'>{count}</div>
              </div>
              <div
                className="hidden lg:block py-[26px] pe-3"
                onMouseEnter={() => setIsHoveringUser(true)}
                onMouseLeave={() => setIsHoveringUser(false)}
              >
                {/* Profile Icon */}
                <div className="cursor-pointer">
                  <FaRegUser className="text-[18px] text-[#626262]"/>
                </div>

                {/* Hover Menu */}
                {isHoveringUser && (
                  <div className="absolute top-full right-2 p-4 bg-[#232323] shadow-lg border border-black text-gray-300 cursor-pointer w-[20%] h-[200px] text-[14px]">
                    {/* Content of the hover menu */}
                    <ul className='space-y-2'>
                      <li className='space-y-2'>
                        <p className='text-gray-100'>Welcome</p>
                        <p className='text-[12px]'>To access account and manage orders</p>
                        <div className='text-center space-x-2 space-y-2'>
                          <Link href={'/login'}><button className='px-4 py-1 border border-gray-300 hover:border-gray-100 hover:text-gray-100 duration-200 ease-in-out rounded'>Login</button></Link>
                          <Link href={'/register'}><button className='px-4 py-1 border border-gray-300 hover:border-gray-100 hover:text-gray-100 duration-200 ease-in-out rounded'>Sign Up</button></Link>
                          
                        </div>
                        {/* <div className='border-t border-gray-300  my-5'></div> */}
                        <div className='py-3'>
                          <div className='border-t border-gray-300'></div>
                        </div>
                      </li>
                      <li>My orders</li>
                    </ul>
                  </div>
                )}
              </div>

                
              {/* <div className='lg:hidden'>
                <AiOutlineUser className='text-[18px] font-thin'/>
              </div> */}
              <div className='lg:hidden' onClick={()=>setMenuOpen(!MenuOpen)}>
                  { 
                    MenuOpen ? (
                      <IoCloseOutline className="text-2xl cursor-pointer" />
                    ) : (
                      <AiOutlineMenu className="text-2xl cursor-pointer" />
                    )
                  }
              </div>
            </div>
          </div>
          {/* mobile nav */}
          {/* 'overflow-y-scroll' (add in below div for scrolling) */}
          <div className={`lg:hidden absolute z-10 bg-[#191919] text-gray-300 text-13px top-full w-[50%] h-[100vh] duration-700  ease-in-out transform ${MenuOpen ? 'right-0' : 'right-[-100%]'}`}>
            <ul className='px-3'>
              <li className='flex items-center justify-center gap-2 border-b-[1px] border-[#212121]'>
                <AiOutlineUser/>
                <Link className='py-5 text-[13px] inline-block text-grey-300' href={"/"}>My account
                </Link>
              </li>
              <li className='border-b-[1px] border-[#212121]'>
                <Link className='py-4 text-[13px] hover:text-white inline-block' href={"/"}>Home
                </Link>
              </li>
              <li className='border-b-[1px] border-[#212121]'>
                <div className='flex justify-between items-center'>
                  <Link className='py-4 inline-block text-[13px]' href={"/shop"}>Shop</Link>
                  <div onClick={()=>setMobileMenuOpen(!MobileMenuOpen)}>
                    {
                      MobileMenuOpen ? (
                        <IoIosArrowUp/>
                      ) 
                      :
                      (
                        <IoIosArrowDown/>   
                      )                    
                    }
                  </div>
                </div>
                {/* Open this div on click of icon */}
                <div className={`${MobileMenuOpen ? 'block' : 'hidden'}`}>
                  <ul className='pl-3'>
                    {categories.map((category, index) => {
                      return (
                          <li key={index} className='capitalize text-[13px] pt-1 text-grey-300'>{category.name}
                            <ul className='pl-3'>
                              {category.subcategories.map((subcategory,index)=>{
                                return(
                                  <li key={index} className='py-3 text-[13px] capitalize hover-text-white border-b-[1px] border-[#212121] text-grey-300'>{subcategory}</li>
                                )
                              })}
                            </ul>
                          </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
              <li className='border-b-[1px] border-[#212121]'>
                <Link className='py-4 inline-block text-[13px]' href={"/about"}>About us
                </Link>
              </li>
              <li className='border-b-[1px] border-[#212121]'>
                <Link className='py-4 inline-block text-[13px]' href={"/contact"}>Contact
                </Link>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar