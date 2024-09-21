import React from 'react'
import HeroSection from '../common/HeroSection'
import Details from './components/Details'
import Form from './components/Form'
import Banner from '../common/Banner'

const page = () => {
  return (
    <div>
        <HeroSection title={"Contact us"}/>
        <Details/>
        <Form/>
        <Banner/>
    </div>
  )
}

export default page