import React from 'react'
import HeroSection from '../common/HeroSection'
import Cart from './Cart'

export default function page() {
  return (
    <div>
      <HeroSection title={"cart"}/>
      <Cart/>
    </div>
  )
}
