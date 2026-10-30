import React from 'react'
import Hero from '../../hero/Hero'
import Categories from '../../categories/Categories'
import Banner from '../../Banner/Banner'
import FeaturedProducts from '../../Products/Products'
import ScentedAgarbatti from '../../Agarbatti/Agarbatti'

function Home() {
  return (
    <div>
        
        
        <Hero></Hero>
    <Categories></Categories>
    <Banner/>
    <FeaturedProducts></FeaturedProducts>
    <ScentedAgarbatti></ScentedAgarbatti>
    </div>
  )
}

export default Home