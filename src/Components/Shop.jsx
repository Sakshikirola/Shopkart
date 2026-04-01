import React from 'react'
import HeroSection from './Herosection' 
import Banner from './Banner' 
import Cards from './Cards'
import ScrollableCards from './ScrollableCards'
import Newsletter from './Newsletter'

const Shop = () => {
  return ( 
    <div>
      <HeroSection/> 
      <Banner/> 
      <Cards/>
      <ScrollableCards/>
      <Newsletter/>
    </div>
  )
} 

export default Shop
