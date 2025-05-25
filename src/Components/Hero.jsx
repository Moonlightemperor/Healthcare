import React from 'react'
import SearchBar from './SearchBar'
import Header from './Header'
import Dashboardleft from './Dashboardleft'
import DashboardRight from './DashboardRight'

const Hero = () => {
  return (
    <>
        <div className='md:w-[83%]   md:py-9 ml-[17%]  w-full min-h-screen p-1 '>
      
     
        <div className='md:flex w-full '>
        <Dashboardleft/>
        <DashboardRight/>
        </div>
      </div>
    </>

  )
}

export default Hero
