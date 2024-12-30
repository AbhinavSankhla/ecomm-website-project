import React from 'react'
import ChildCategory from './components/childCategory'
import Navbar from '@/app/common/Navbar'
import Pagination from '@/app/common/Pagination'
import Footer from '@/app/common/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ChildCategory/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default page;