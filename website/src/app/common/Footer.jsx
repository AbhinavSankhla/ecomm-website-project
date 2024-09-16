import Link from 'next/link';
import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className='bg-rose-100'>
        <div className='grid grid-cols-1 md:grid-cols-4 border-2 border-red-500  mx-auto w-[80%] text-center md:text-left'>
            <div className='mt-[100px] border-2 border-blue-600'>
              <ul className=''>
                  <li>
                      <div className='w-[30%] h-auto mb-[30px] mx-auto md:ms-0 md:w-[60%]'>
                        <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png" className='w-full h-full' alt=""/>
                      </div>
                  </li>
                  <li className='mt-6 mb-[10px]'>
                    <div className='flex items-center justify-center md:justify-start ps-[10px]'>
                      <div className="w-[20px] h-[20px]">
                      <FaMobileAlt className="w-full h-full"/>
                      </div>
                      <span className='text-base ml-[10px]'>+61 (0) 383 766 284</span>
                    </div>
                  </li>
                  <li className='mb-[30px] ps-[10px]'>
                    <div className='flex items-center justify-center md:justify-start'>
                      <div className="w-[18px] h-[18px]">
                        <FaEnvelope className="w-full h-full"/>
                      </div>
                      <a href="#" className="text-[18px] ml-[10px]">noreply@envato.com</a>
                    </div>
                  </li>
                  {/* <li>
                    <div className='grid-cols-1 md:grid-cols-2 items-center'>
                      <div className="w-[18px] h-[18px]">
                        <FaEnvelope className="w-full h-full"/>
                      </div>
                      <div>
                      <a href="#" className="text-[18px] ml-[10px]">noreply@envato.com</a>
                      </div>
                    </div>
                  </li> */}
                  <li className='mb-[10px] ps-[10px]'>
                    <div className='w-[45%] h-auto border-2 mb-[30px] mx-auto md:ms-0 md:w-[90%]'>
                      <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-footer-pic1.png" alt="" />
                    </div>
                  </li>
              </ul>
            </div>
            <div className='mt-[100px] ps-[20px]'>
              <ul>
                <li className='text-lg font-bold mb-[20px]'>Delivery</li>
                <div className='leading-snug'>
                <li><a href="#">- How it Works</a></li>
                <li><a href="#">- Free Delivery</a></li>
                <li><a href="#">- FAQ</a></li>
                <li><a href="#">- Payment methods</a></li>
                <li><a href="#">- Delivery areas</a></li>
                </div>
              </ul>
            </div>
            <div className='mt-[100px] ps-[20px]'>
              <ul>
                <li className='text-lg font-bold mb-[20px]'>Customer service</li>
                <div className='leading-snug'>
                <li><a href="#">- Orders</a></li>
                <li><a href="#">- Downloads</a></li>
                <li><a href="#">- FAQ</a></li>
                <li><a href="#">- Account details</a></li>
                <li><a href="#">- Logout</a></li>
                <li><a href="#">- Lost password</a></li>
                </div>
              </ul>
            </div>
            <div className='mt-[100px] ps-[20px]'>
              <ul>
                <li className='text-lg font-bold mb-[20px]'>Useful links</li>
                <div className='leading-snug'>
                <li><a href="#">- Contact us</a></li>
                <li><a href="#">- Help & About us</a></li>
                <li><a href="#">- Shipping & Returns</a></li>
                <li><a href="#">- Refund Policy</a></li>
                </div>
              </ul>
            </div>
        </div>

        <div className="border-t-2 border-gray-300 mt-[150px]"></div>

        {/* <div className="grid grid-col-1 md:grid-cols-3 w-[80%] mx-auto py-5">
          <div className="mx-auto">
            <p>
            © 2024 Betheme by <a href="">Muffin group</a> | All Rights Reserved | Powered by <a href="WordPress"></a>
            </p>
          </div>  
          <div className="mx-auto">
            <a href="">Terms and conditions</a>&nbsp;&nbsp;&nbsp;
            <a href="">Privacy policy</a>&nbsp;&nbsp;&nbsp;
            <a href="">Cookies</a>&nbsp;&nbsp;&nbsp;
          </div>
          <div className='mx-auto'>
            <Link href="#"><IoIosArrowUp className='w-5 h-5 mx-auto'/></Link>
          </div>
        </div> */}

        <div className="lg:flex md:justify-between w-[80%] mx-auto py-5">
          <div className="text-center lg:text-left">
            <p>
            © 2024 Betheme by <a href="">Muffin group</a> | All Rights Reserved | Powered by Wordpress<a href="WordPress"></a>
            </p>
          </div>  
            <div className="flex items-center text-center text-base lg:text-right">
              <a href="">Terms and conditions</a>&nbsp;&nbsp;&nbsp;
              <a href="">Privacy policy</a>&nbsp;&nbsp;&nbsp;
              <a href="">Cookies</a>&nbsp;&nbsp;&nbsp;
              <div><Link href="#"><IoIosArrowUp className='w-5 h-5'/></Link></div>
            </div>
        </div>
      </footer>
    </>
  )
}
