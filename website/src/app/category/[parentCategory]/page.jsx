import React from 'react'
import ParentCatList from './components/ParentCatList'
import Navbar from '@/app/common/Navbar'
import Footer from '@/app/common/Footer'
import Pagination from '@/app/common/Pagination'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ParentCatList/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default page
// sultan.khan@wscubetech.com