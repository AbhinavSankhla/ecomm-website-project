import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks';

const Navbar = () => {

  // const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <nav className='bg-white relative'>
        <div className='text-[15px] flex items-center justify-around'>
          <div>
            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png" alt="logo" className='w-[140px] h-auto sm:w-[180px]' />
          </div>
          <ul>
            <li className='py-5 border-2 border-rose-300'>
              <Link className='px-5 pb-3 hover:border-b hover:border-black hover:text-black duration-300 ease-in-out' href={"/"}>Home
              </Link>
            </li>
            <NavLinks/>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar


{/* onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false) in li}*/}
   {/* {isHovering && (
                <div className="absolute w-full left-0 top-full">
                  <ShopMenu />
                </div>
              )} */}
