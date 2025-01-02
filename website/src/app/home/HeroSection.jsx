// 'use client';

// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";

// export default function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 4000,
//     cssEase: "ease-in-out"
//   };

//   const [data, setdata] = useState([]);

//   const fetchSlider =  async() =>{
//     try {
//       const response = await axios.get('http://localhost:5200/slider/readSlider');
//       setdata(response.data.data[0])
//       console.log(response.data.data[0])

//     } catch (error) {
//       alert('something went wrong')
//     }
//   }
  
//   useEffect(()=>{fetchSlider();},[])
//   // console.log(data)

//   const sliders = [
//     {
//         bg: 'https://mercury.akamaized.net/i/6ff3a73a257664f39f31d126015a2bf2_291652_0.jpg',
        
//     },
    
//     {
//         bg: 'https://mercury.akamaized.net/i/c4777c20f970185d684caaeddec4acd4_291646_0.jpg',
        
//     },
//     {
//       bg: 'https://mercury.akamaized.net/i/44dfe007b8e118673d81be7a45c41b93_291916_0.jpg',
      
//     },

//     {
//       bg: 'https://mercury.akamaized.net/i/ffcd493bf8dc759d024063c9efa445c5_284097_0.jpg',
      
//     },
//     {
//       bg: 'https://mercury.akamaized.net/i/eb257b41693910444526156de83d031e_291649_0.jpg',
      
//      },
//   ];

//   return (
//     <>
//       {/* Parent div without overflow-hidden */}
//       <div className="w-full mx-auto">
//       <Slider {...settings}>
//                 {sliders.map((slide, index) => (
//                     <div key={index} className="mt-10 sm:mt-24 md:mt-12 lg:mt-[75px] h-[30vh] md:h-[50vh] lg:h-[70vh] w-full"> {/* Set height here */}
//                         <div className="bg-contain bg-no-repeat bg-center h-full w-full"
//                             style={{ backgroundImage: `url(${slide.bg})` }}>   
//                         </div>      
//                     </div>
//                 ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

'use client';

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  const [sliderImages, setSliderImages] = useState([]);

  const fetchSlider = async () => {
    try {
      const response = await axios.get("http://localhost:5200/slider/readSlider");
      const sliderData = response.data.data[0]; // Assuming you want to fetch the first slider object
      if (sliderData) {
        // Extract the image URLs dynamically
        const images = Object.values(sliderData).filter((value) =>
          typeof value === "string" && value.startsWith("http")
        );
        setSliderImages(images);
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  return (
    <>
      {/* Parent div without overflow-hidden */}
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="mt-10 sm:mt-24 md:mt-12 lg:mt-[75px] h-[30vh] md:h-[50vh] lg:h-[70vh] w-full"
            >
              <div
                className="bg-contain bg-no-repeat bg-center h-full w-full"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}


