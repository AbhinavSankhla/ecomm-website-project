'use client'

import React, { useEffect, useState } from 'react'
import HeroSection from '../common/HeroSection'
import Details from './components/Details'
import Form from './components/Form'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import axios from 'axios'

const page = () => {
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


  if (loading) return <div><div className="animate-pulse">
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

      {/* Banner */}
      <div className="relative w-full h-80 bg-gray-300 rounded"></div>

    </div></div>;
  return (
    <div>
        <Navbar/>
        <HeroSection title={"Contact us"}/>
        <Details address={apiData.address} weekday_time={apiData.weekday_time} weekend_time ={apiData.weekend_time} banner={apiData.thumbnail} whatsapp ={apiData.whatsapp} email = {apiData.email}/>
        <Form/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default page