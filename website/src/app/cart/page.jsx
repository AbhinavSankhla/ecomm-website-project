import React from 'react'
import HeroSection from '../common/HeroSection'
import Cart from './Cart'
import Footer from '../common/Footer'

export default function page() {
  return (
    <div>
      <HeroSection title={"cart"}/>
      <Cart/>
      <Footer/>
    </div>
  )
}
