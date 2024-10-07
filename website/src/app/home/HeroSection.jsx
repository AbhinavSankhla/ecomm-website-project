'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  };

  const sliders = [
    {
        bg: 'https://mercury.akamaized.net/i/6ff3a73a257664f39f31d126015a2bf2_291652_0.jpg',
        
    },
    
    {
        bg: 'https://mercury.akamaized.net/i/c4777c20f970185d684caaeddec4acd4_291646_0.jpg',
        
    },

    {
      bg: 'https://mercury.akamaized.net/i/ffcd493bf8dc759d024063c9efa445c5_284097_0.jpg',
      
  },
    {
      bg: 'https://mercury.akamaized.net/i/eb257b41693910444526156de83d031e_291649_0.jpg',
      
  },

    {
        bg: 'https://assets.ajio.com/cms/AJIO/WEB/D_UHP_1.0_topbaner_06-10-24_TOMMY_P10.jpg',
        
    },

   
    
    // {
    //     bg: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01102024-uhphim-z10-p3-TITAN-TOMMYHILFIGER-UPTO30.jpg',
        
    // }
  ];

  return (
    <>
      {/* Parent div without overflow-hidden */}
      <div className="w-full mx-auto max-w-screen-xl ">
      <Slider {...settings}>
                {sliders.map((slide, index) => (
                    <div key={index} className="mt-10 sm:mt-24 md:mt-12 lg:mt-[75px] h-[30vh] md:h-[50vh] lg:h-[70vh] w-full"> {/* Set height here */}
                        <div className="bg-contain bg-no-repeat bg-center h-full w-full"
                            style={{ backgroundImage: `url(${slide.bg})` }}>   
                        </div>      
                    </div>
                ))}
        </Slider>
      </div>
    </>
  );
}