import React from 'react'
import HeroSection from '../common/HeroSection'
import AboutUpper from './components/AboutUpper'
import AboutLower from './components/AboutLower'
import Banner from '../common/Banner'
import Footer from '../common/Footer'

export default function about() {
  return (
    <div>
      <HeroSection/>
      <AboutUpper/>
      <AboutLower/>
      <Banner/>
      <Footer/>
    </div>
  )
}
