'use client'

import Banner from "./common/Banner";
import Facilities from "./home/Facilities";
import Featured from "./home/Featured";
import Footer from "./common/Footer";
import WhoWeAre from "./home/WhoWeAre";
import HeroSection from "./home/HeroSection";
import Navbar from "./common/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:5200/profile/readProfileData');
      // const data = await response.json();
      setApiData(response.data.data[0]);
      setLoading(false);

    }
    catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  useEffect(() => { fetchdata(); }, []);


  if (loading) return <div> <div className="animate-pulse">
    {/* Header */}
    <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-100">
      <div className="w-32 h-6 bg-gray-300 rounded"></div>
      <div className="flex space-x-4">
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
        <div className="w-20 h-6 bg-gray-300 rounded"></div>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex items-center justify-center px-6 py-10">
      <div className="flex w-full max-w-screen-xl space-x-6">
        {/* Left Image Placeholder */}
        <div className="mx-auto w-[95%] h-[400px] bg-gray-300 rounded"></div>

      </div>
    </div>

    {/* Dots */}
    <div className="flex justify-center space-x-3">
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    </div>
  </div></div>;


  return (
    <>
      <Navbar logo={apiData.logo} />
      <HeroSection />
      <Featured bgColor={'bg-white'} data={apiData.featured_title} />
      <WhoWeAre about_img={apiData.about_img} about_heading={apiData.about_heading} about_para1={apiData.about_para1} about_para2={apiData.about_para2} />
      <Facilities />
      <Banner />
      <Footer logo={apiData.logo} whatsapp={apiData.whatsapp} insta={apiData.insta} facebook={apiData.facebook} youtube={apiData.youtube} x={apiData.x} email={apiData.email} />
    </>
  );
}