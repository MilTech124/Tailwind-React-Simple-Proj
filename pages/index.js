import React from 'react'
import Hero from './components/hero/Hero'
import CustomerAbout from './components/CustomerAbout'
import Realization from './components/realization/Realization'
import Services from './components/Services'


function index() {
  return (
    <>
      <Hero/>
      <CustomerAbout/>
      <Realization/>
      <Services/>
    </>
  )
}

export default index