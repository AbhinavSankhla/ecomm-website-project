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


