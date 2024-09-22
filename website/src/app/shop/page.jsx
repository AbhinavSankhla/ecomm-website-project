import React from 'react'
import Sorting from './Sorting'
import HeroSection from '../common/HeroSection'
import Pagination from '../common/Pagination'
import Footer from '../common/Footer'
import ProductList from '../products/components/ProductList'

export default function page() {
  return (
    <>
      <HeroSection title ={'Shop'}/>      
      <Sorting/>
      <ProductList/>
      <Pagination/>
      <Footer/>
    </>
  )
}
