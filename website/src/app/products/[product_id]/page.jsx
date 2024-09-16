import HeroSection from '@/app/common/HeroSection'
import React from 'react'
import ProductDetails from './components/ProductDetails'

export default function page() {
  return (
    <div>
      <HeroSection title={"Shop"}/>
      <ProductDetails/>
    </div>
  )
}
