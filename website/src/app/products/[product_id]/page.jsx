import HeroSection from '@/app/common/HeroSection'
import React from 'react'
import ProductDetails from './components/ProductDetails'
import ProductDescription from './components/ProductDescription'
import RelatedProducts from './components/RelatedProducts'

export default function page() {
  return (
    <div>
      <HeroSection title={"Shop"}/>
      <ProductDetails/>
      <ProductDescription/>
      <RelatedProducts/>
    </div>
  )
}
