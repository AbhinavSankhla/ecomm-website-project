import HeroSection from '@/app/common/HeroSection'
import React from 'react'
import ProductDetails from './components/ProductDetails'
import ProductDescription from './components/ProductDescription'
import RelatedProducts from './components/RelatedProducts'
import Footer from '@/app/common/Footer'
import Navbar from '@/app/common/Navbar'

export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection title={"Shop"}/>
      <ProductDetails/>
      <ProductDescription/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}
