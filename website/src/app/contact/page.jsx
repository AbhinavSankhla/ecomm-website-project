import React from 'react';
import HeroSection from '../common/HeroSection'
import Details from './components/Details'
import Form from './components/Form'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

const page = () => {
  
  return (
    <div>
        <Navbar/>
        <HeroSection title={"Contact us"}/>
        <Details/>
        <Form/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default page