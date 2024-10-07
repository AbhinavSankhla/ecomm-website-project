import React from 'react'
import HeroSection from '../common/HeroSection'
import Cart from './Cart'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection title={"cart"}/>
      <Cart/>
      <Footer/>
    </div>
  )
}
