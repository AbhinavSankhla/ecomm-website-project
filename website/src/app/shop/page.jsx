'use client'

import React from 'react'
import Sorting from './Sorting'
import HeroSection from '../common/HeroSection'
import Pagination from '../common/Pagination'
import Footer from '../common/Footer'
import ProductList from '../products/components/ProductList'
import Navbar from '../common/Navbar'

export default function shopPage(addToCart) {
  return (
    <>
      <Navbar/>
      <HeroSection title ={'Shop'}/>      
      <Sorting/>
      <ProductList/>
      {/* <ProductList/>
      <ProductList/> */}
      <Pagination/>
      <Footer/>
    </>
  )
}