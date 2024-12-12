import React from 'react'
import Sorting from './Sorting'
import HeroSection from '../common/HeroSection'
import Pagination from '../common/Pagination'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

export default function page() {

  return (
    <>
      <Navbar/>
      <HeroSection title ={'Shop'}/>      
      <Sorting/>
      {/* <ProductList limit={16} /> */}
      {/* <ProductList/>
      <ProductList/> */}
      <Pagination/>
      <Footer/>
    </>
  )
}