import React from 'react'
import HeroSection from '../common/HeroSection'
import AboutUpper from './components/AboutUpper'
import AboutLower from './components/AboutLower'
import Banner from '../common/Banner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

export default function about() {
  return (
    <div>
      <Navbar/>
      <HeroSection title ={'About'}/>
      <AboutUpper/>
      <AboutLower/>
      <Banner/>
      <Footer/>
    </div>
  )
}
