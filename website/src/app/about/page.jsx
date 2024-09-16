import React from 'react'
import HeroSection from '../common/HeroSection'
import AboutUpper from './components/AboutUpper'
import AboutLower from './components/AboutLower'
import Banner from '../common/Banner'
import Header from '../common/Header'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <AboutUpper/>
      <AboutLower/>
      <Banner/>
    </div>
  )
}
