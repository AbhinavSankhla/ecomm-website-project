'use client';

import React, { useState } from 'react';
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

function Header() {

  const [menuStatus, setmenuStatus] = useState(false);
  
  return (
    <>
      <header className='bg-white shadow-lg'>
        <nav className='flex items-center justify-between p-4'>
          <div>
            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png" width={180} height={200} alt=""/>
          </div>
          <div className={`lg:static absolute bg-gray-900 lg:bg-white min-h-[100vh] lg:min-h-fit right-0 ${menuStatus==true ? 'top-0' :'top-[-100%]'} w-[50%] lg:w-auto duration-500 lg:duration-0`}>
            {
              menuStatus==true?
                <ul className='text-[#747474] text-[15px] p-4 flex flex-col gap-y-8 lg:hidden hover:duration-300'>
                  <li>
                    <div className='flex justify-end text-2xl md:text-3xl mb-2'>
                      <IoMdClose onClick={() => setmenuStatus(false)}/>
                    </div>
                    <div className='py-2 flex justify-center'>
                      <button className='w-[100%] text-[#747474] bg-slate-50 hover:bg-[#747474] flex justify-center gap-2 p-3'>
                      My account
                      <FaAngleRight/>
                      </button>
                    </div>
                    <div className='flex justify-center gap-4 py-3 text-2xl md:text-3xl'>
                      <div><SlHandbag /></div>
                      <div><BsSearch /></div>
                    </div>  
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/about'}>About us</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/shop'}>Shop</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/contact'}>Contact</Link>
                  </li>
                </ul> 
              :
                <ul className='text-black flex flex-col lg:flex-row lg:items-center p-4 gap-8 lg:gap-[3vw] text-[15px] hover:duration-300'>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black active:text-white' href={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/about'}>About us</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/shop'}>Shop</Link>
                  </li>
                  <li>
                    <Link className='hover:border-b hover:border-black hover:text-black' href={'/contact'}>Contact</Link>
                  </li>
                </ul>                
            }
            
          </div>
          <div className='flex items-center justify-end gap-[2vw]'>
            <div><Link href={'/cart'}><SlHandbag /></Link></div>
            <div><BsSearch /></div>
            <div className='hidden md:block'>
              <button className='text-[#747474] hover:bg-[#e2e2e2] flex items-center gap-2 p-3'>
                My account
                <FaAngleRight />
              </button>
            </div>
            <div className='lg:hidden'>
              <AiOutlineMenu name='menu' onClick={() =>setmenuStatus(true)} className='text-2xl cursor-pointer'/>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header