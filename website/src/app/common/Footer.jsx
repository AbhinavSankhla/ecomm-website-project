'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";
import { FaYoutube, FaWhatsapp, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import axios from 'axios';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [apiData, setApiData] = useState({});

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:5200/profile/readProfileData');
      // const data = await response.json();
      setApiData(response.data.data[0]);

      // setLoading(false);      
    }
    catch (error) {
      console.log(error)
      // setLoading(false);
    }
  }

  useEffect(() => { fetchdata(); }, []);


  return (
    <>
      <footer className='bg-rose-100'>
        <div className='grid grid-cols-1 md:grid-cols-4  mx-auto w-[85%] max-w-screen-xl'>
          <div className='mt-[100px]'>
            <ul>
              <li>
                <div className='flex justify-center md:justify-start mb-[30px]'>
                  <img src={apiData.logo} className='w-[140px] h-auto' alt="BeClothinf Logo" />
                </div>
              </li>
              <li className='mt-6 mb-[10px]'>
                <div className='flex items-center justify-center md:justify-start whitespace-nowrap'>
                  <div className="font-light text-[14px] md:text-[15px] lg:text-[19px]">
                    <FaWhatsapp />
                  </div>
                  <div className='font-light text-[13px] md:text-[15px] lg:text-[19px] text-base ml-[10px] '>
                    {apiData.whatsapp}
                  </div>
                </div>
              </li>


              <li className='mb-[30px]'>
                <div className='flex items-center justify-center md:justify-start whitespace-nowrap'>
                  <div className="font-light text-[14px] md:text-[15px] lg:text-[19px]">
                    <MdOutlineMailOutline />
                  </div >
                  <div className='text-[13px] md:text-[15px] lg:text-[19px] font-light text-base ml-[13px]'>
                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">{apiData.email}</a>
                  </div>
                </div>
              </li>

              <li className='mb-[10px] ps-[10px]'>
                <div className='w-[45%] h-auto mb-[30px] mx-auto md:ms-0 md:w-[90%]'>
                  <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-footer-pic1.png" alt="Payment Services" />
                </div>
              </li>

            </ul>
          </div>
          <div className='mt-[100px] ps-[20px] text-center md:text-left'>
            <ul>
              <li className='text-[13px] lg:text-lg font-bold mb-[20px]'>Delivery</li>
              <div className='leading-relaxed text-[13px] lg:text-[15px]'>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- How it Works</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Free Delivery</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- FAQ</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Payment methods</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Delivery areas</Link></li>
              </div>
            </ul>
          </div>
          <div className='mt-[100px] ps-[20px] text-center md:text-left'>
            <ul>
              <li className='text-[13px] lg:text-lg font-bold mb-[20px]'>Customer service</li>
              <div className='leading-relaxed text-[13px] lg:text-[15px]'>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Orders</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Downloads</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- FAQ</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Account details</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Logout</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Lost password</Link></li>
              </div>
            </ul>
          </div>
          <div className='mt-[100px] ps-[20px] text-center md:text-left'>
            <ul>
              <li className='text-[13px] lg:text-lg font-bold mb-[20px]'>Useful links</li>
              <div className='leading-relaxed text-[13px] lg:text-[15px]'>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Contact us</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Help & About us</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Shipping & Returns</Link></li>
                <li><Link href="#" className='text-[#555555] hover:text-black duration-0'>- Refund Policy</Link></li>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t-[1px] border-[#bcbcbccb] mt-[100px]"></div>

        {/* up arrow for mobile case   */}
        <div className='mt-8 mx-auto lg:hidden text-center'>
          <button onClick={scrollToTop}><SlArrowUp className='text-xl font-light mx-auto' /></button>
        </div>

        <div className="grid grid-cols-1 items-center xl:grid-cols-[60%_auto] w-[85%] mx-auto py-8 max-w-screen-xl">
          <div className="text-center xl:text-left text-[13px] lg:text-[15px] text-[#555555]">
            <p>
              © 2025 Website by <a href="http://www.abhinavdev.com" target="_blank"
                rel="noopener noreferrer" className='hover:text-black duration-0'>Abhinav Sankhla</a> | All Rights Reserved | Powered by <Link href="#" className='hover:text-black duration-0'>tailwindcss</Link>
            </p>
          </div>
          <div className="flex justify-center items-center lg:text-left text-[13px] lg:text-[15px] text-[#555555] mt-5 xl:mt-0">
            <Link href="" className='mr-3 hover:text-black duration-0'>Terms and conditions</Link>
            <Link href={'#'} className='mr-3 hover:text-black duration-0'>Privacy policy</Link>
            <Link href={'#'} className='mr-3 hover:text-black duration-0'>Cookies</Link>
            {/* <Link href={'#'} className='hidden lg:inline'><SlArrowUp/></Link> */}
            <button onClick={scrollToTop} className='hidden lg:inline'><SlArrowUp /></button>
          </div>
        </div>
      </footer>
    </>
  )
}
